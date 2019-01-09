<template>
  <div ref="node"></div>
</template>

<script>
import * as d3 from "d3";
export default {
  methods: {
    renderChart() {
      // 节点
      const node = this.$refs.node;
      // 清除旧数据
      d3.select(node)
        .select("svg")
        .remove();
      //画布大小
      const margin = { left: 90, top: 90, right: 90, bottom: 90 },
        width = 1000 - margin.left - margin.right, // more flexibility: Math.min(window.innerWidth, 1000)
        height = 1000 - margin.top - margin.bottom, // same: Math.min(window.innerWidth, 1000)
        // 内环
        innerRadius = Math.min(width, height) * 0.39,
        // 外环
        outerRadius = innerRadius * 1.1;

      const color = d3.scaleOrdinal(d3.schemeCategory10);
      // 画布层
      const svg = d3
        .select(node)
        .append("svg")
        // 缩放
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 " + width + " " + height)
        .style("width", "100%")
        .style("height", "auto");

      // 假数据
      const names = [
          "Test1",
          "Test2",
          "AMO-DB",
          "YouTube",
          "Twitter",
          "Google+",
          "Pflegeratgeber",
          "O-Mag",
          "RuV"
        ],
        opacityDefault = 0.8;

      const matrix = [
        [0, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 1, 1, 1, 1, 1, 0, 1],
        [0, 1, 0, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 0, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 0, 1],
        [0, 1, 1, 1, 1, 1, 1, 0, 0]
      ];

      const chord = d3
        // 弦图生成器
        .chord()
        // 间隔
        .padAngle(0.15)
        // 排序
        .sortChords(d3.descending);

      const arc = d3
        // 环形生成器
        .arc()
        // 内圆
        .innerRadius(innerRadius * 1.01)
        // 外圆
        .outerRadius(outerRadius);

      // 弦的半径
      const path = d3.ribbon().radius(innerRadius);

      // 主层
      const layout = svg
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`)
        .datum(chord(matrix));

      // 外圆层
      const outerArcs = layout
        .selectAll("g.group")
        .data(chords => chords.groups)
        .enter()
        .append("g")
        .attr("class", "group")
        .on("mouseover", fade(0.1))
        .on("mouseout", fade(opacityDefault));

      outerArcs
        .append("path")
        .style("fill", d => color(d.index))
        .attr("id", d => "group" + d.index)
        .attr("d", arc);

      // 文字层
      outerArcs
        .append("text")
        .attr("x", 6)
        .attr("dx", 60)
        .attr("dy", 18)
        .append("textPath")
        .attr("href", d => "#group" + d.index)
        .text((d, i) => names[i])
        .style("fill", "white");

      // 弦层
      layout
        .selectAll("path.chord")
        .data(chords => chords)
        .enter()
        .append("path")
        .attr("class", "chord")
        .style("fill", d => color(d.source.index))
        .style("opacity", opacityDefault)
        .attr("d", path);

      const groups = [
        { sIndex: 0, eIndex: 2, title: "SuperCategory 1", color: "#c69c6d" },
        { sIndex: 4, eIndex: 5, title: "SuperCategory 2", color: "#00a651" }
      ];
      const cD = chord(matrix).groups;
      //最外圈
      for (let i = 0; i < groups.length; i++) {
        const __g = groups[i];
        const arc1 = d3
          .arc()
          .innerRadius(innerRadius * 1.11)
          .outerRadius(outerRadius * 1.1)
          .startAngle(cD[__g.sIndex].startAngle)
          .endAngle(cD[__g.eIndex].endAngle);

        layout
          .append("path")
          .attr("d", arc1)
          .attr("fill", __g.color)
          .attr("id", "groupId" + i);

        // Add a text label.
        const text = layout
          .append("text")
          .attr("x", 200)
          .attr("dy", 20);

        text
          .append("textPath")
          .attr("stroke", "#fff")
          .attr("fill", "#fff")
          .attr("xlink:href", "#groupId" + i)
          .text(__g.title);
      }

      // 内部方法
      // 过滤所有不是当前hover的弦, 并且虚化
      function fade(opacity) {
        return function(d, i) {
          layout
            .selectAll("path.chord")
            .filter(function(d) {
              return d.source.index != i && d.target.index != i;
            })
            .transition()
            .style("opacity", opacity);
        };
      }
    }
  },
  mounted() {
    this.renderChart();
  },
  updated() {
    this.renderChart();
  }
};
</script>

<style>
</style>
