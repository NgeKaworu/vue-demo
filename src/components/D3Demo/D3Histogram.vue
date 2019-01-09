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

      //在 body 里添加一个 SVG 画布
      const svg = d3
        .select(node)
        .append("svg")
        // 缩放
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 " + width + " " + height)
        .style("width", "100%")
        .style("height", "auto");

      //画布周边的空白
      const padding = { left: 30, right: 30, top: 20, bottom: 20 };

      //定义一个数组
      const dataset = [10, 20, 30, 40, 33, 24, 12, 5];
      const max = d3.max(dataset);

      //x轴的比例尺
      const xScale = d3
        .scaleBand()
        .domain(d3.range(dataset.length))
        .rangeRound([0, width - padding.left - padding.right])
        // 留白
        .paddingInner(0.05);
      //y轴的比例尺
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([height - padding.top - padding.bottom, 0]);
      //定义x轴
      const xAxis = d3.axisBottom().scale(xScale);

      //定义y轴
      const yAxis = d3.axisLeft().scale(yScale);

      const rects = svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("transform", `translate(${padding.left}, ${padding.top})`)
        .attr("x", (d, i) => xScale(i))
        .attr("y", yScale(0))
        .transition()
        .delay((d, i) => {
          return i * 200;
        })
        .duration(2000)
        // 弹跳 https://github.com/xswei/d3-scale/blob/master/README.md#band_range
        .ease(d3.easeBounce)
        .attr("y", d => {
          const min = yScale.domain()[0];
          return yScale(d);
        })
        .attr("width", xScale.bandwidth())
        .attr("height", d => height - padding.top - padding.bottom - yScale(d))
        .attr("fill", "steelblue");

      const texts = svg
        .selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .attr("transform", `translate(${padding.left}, ${padding.top})`)
        .attr("x", (d, i) => xScale(i))
        .attr("y", yScale(0))
        .transition()
        .delay((d, i) => {
          return i * 200;
        })
        .duration(2000)
        .ease(d3.easeBounce)
        .attr("y", d => {
          const min = yScale.domain()[0];
          return yScale(d);
        })
        .attr("dx", xScale.bandwidth() / 3)
        .attr("dy", d => 20)
        .text(d => d);

      svg
        .append("g")
        .attr(
          "transform",
          `translate(${padding.left}, ${height - padding.bottom})`
        )
        .call(xAxis);

      //添加y轴
      svg
        .append("g")
        .attr("transform", `translate(${padding.left} ,${padding.top})`)
        .call(yAxis);
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
