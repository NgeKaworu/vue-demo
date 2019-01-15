<template>
  <div ref="node"></div>
</template>

<script>
import * as d3 from "d3";
import fakeData from "@/utils/fakeHierarchyData";
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
        width = 1000 - margin.left - margin.right,
        height = 1000 - margin.top - margin.bottom;

      const radius = width / 2;

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
      const data = fakeData();

      // 数据转化
      const pack = d3
        .pack()
        .size([width, height])
        .padding(5);

      const root = pack(
        d3
          .hierarchy(data)
          .count()
          .sort((a, b) => b.height - a.height || b.value - a.value)
      );

      const layout = svg.attr("width", width).attr("height", height);

      const g = layout.append("g");
      // .attr("transform", `translate(${width / 2}, ${height / 2})`);

      const circle = g
        .selectAll("circle")
        .data(root.descendants())
        .enter()
        .append("circle")
        .attr("fill", "rgb(31, 119, 180)")
        .attr("fill-opacity", "0.4")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.r)
        .on("mouseover", function(d, i) {
          d3.select(this).attr("fill", "yellow");
        })
        .on("mouseout", function(d, i) {
          d3.select(this).attr("fill", "rgb(31, 119, 180)");
        });

      const texts = g
        .selectAll("text")
        .data(root.descendants())
        .enter()
        .append("text")
        .attr("font-size", "10px")
        .attr("fill", "white")
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .attr("dx", -12)
        .attr("dy", 1)
        .text(d => {
          return d.data.name;
        });
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
