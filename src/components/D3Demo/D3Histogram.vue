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
      console.log(node);
      // 清除旧数据
      d3.select(node)
        .select("svg")
        .remove();
      //画布大小
      const width = 400;
      const height = 400;

      //在 body 里添加一个 SVG 画布
      const svg = d3
        .select(node)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      //画布周边的空白
      const padding = { left: 30, right: 30, top: 20, bottom: 20 };

      //定义一个数组
      const dataset = [10, 20, 30, 40, 33, 24, 12, 5];
      const max = d3.max(dataset);
      const linear = d3
        .scaleLinear()
        .domain([0, max])
        .range([0, 400]);

      const axis = d3
        // 方向
        .axisBottom()
        // 比例尺
        .scale(linear)
        // 刻度
        .ticks(7);

      svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", 20)
        .attr("y", (d, i) => i * 25)
        .attr("width", d => linear(d))
        .attr("height", 23)
        .attr("fill", "steelblue");

      svg
        .append("g")
        .attr("transform", "translate(20,300)")
        .call(axis);
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
