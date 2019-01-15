<template>
  <div ref="node"></div>
</template>

<script>
import * as d3 from "d3";
import fakeData from "@/utils/fakeHierarchyData";
import data from "./chinageo.json";
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
      const margin = { left: 0, top: 0, right: 0, bottom: 0 },
        width = 1000 - margin.left - margin.right,
        height = 1000 - margin.top - margin.bottom;

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

      const layout = svg.attr("width", width).attr("height", height);

      const projection = d3
        .geoMercator()
        .center([107, 31])
        .scale(850)
        .translate([width / 2, height / 2]);

      const path = d3.geoPath().projection(projection);
      // .attr("transform", `translate(${width / 2}, ${height / 2})`);

      const map = layout
        .selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .attr("fill", (d, i) => color(i))
        .attr("d", path)
        .on("mouseover", function(d, i) {
          d3.select(this).attr("fill", "yellow");
        })
        .on("mouseout", function(d, i) {
          d3.select(this).attr("fill", color(i));
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
