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
      const width = 400;
      const height = 400;

      const outerRadius = 150; //外半径
      const innerRadius = 0; //内半径，为0则中间没有空白

      //在 body 里添加一个 SVG 画布
      const svg = d3
        .select(node)
        .append("svg")
        // 缩放
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 " + width + " " + height)
        .style("width", "100%")
        .style("height", "auto");

      //定义一个数组
      const dataset = [30, 10, 43, 55, 13];
      const max = d3.max(dataset);
      //饼图
      const pie = d3.pie();
      const pieData = pie(dataset);
      const arc = d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const arcs = svg
        .selectAll("g")
        .data(pieData)
        .enter()
        .append("g")
        .attr("transform", `translate(${width / 2}, ${width / 2})`);

      arcs
        .append("path")
        .attr("fill", (d, i) => color(i))
        .attr("d", d => arc(d)); //调用弧生成器，得到路径值

      arcs
        .append("text")
        .attr("transform", d => `translate(${arc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .text(d => d.data);
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
