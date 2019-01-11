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
      const width = 800;
      const height = 600;
      // 生成假
      const range = 100;
      const data = {
        nodes: d3
          .range(0, range)
          .map(d => ({ label: "l" + d, r: ~~d3.randomUniform(8, 28)() })),
        links: d3.range(0, range).map(() => ({
          source: ~~d3.randomUniform(range)(),
          target: ~~d3.randomUniform(range)()
        }))
      };

      const margin = { top: 0, left: 0, bottom: 0, right: 0 };

      const chartWidth = width - (margin.left + margin.right);
      const chartHeight = height - (margin.top + margin.bottom);

      const color = d3.scaleOrdinal(d3.schemeCategory10);
      // svg 层
      const svg = d3
        .select(node)
        .append("svg")
        // 缩放
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 " + width + " " + height)
        .style("width", "100%")
        .style("height", "auto");
      // 画布层
      const chartLayer = svg
        .attr("width", chartWidth)
        .attr("height", chartHeight)
        .attr("transform", "translate(" + [margin.left, margin.top] + ")");

      const simulation = d3
        .forceSimulation()
        // 力之间的连线 相互作用
        .force("link", d3.forceLink().id(d => d.index))
        .force(
          // 斥力
          "collide",
          d3.forceCollide(d => d.r + 8).iterations(16)
        )
        // 电荷力
        .force("charge", d3.forceManyBody())
        // 中心力
        .force("center", d3.forceCenter(chartWidth / 2, chartHeight / 2))
        .force("y", d3.forceY(0))
        .force("x", d3.forceX(0));

      // 连线
      const link = svg
        .append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(data.links)
        .enter()
        .append("line")
        .attr("stroke", "black");

      // 圆
      const circle = svg
        .append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(data.nodes)
        .enter()
        .append("circle")
        .attr("r", d => d.r)
        .attr("fill", d => color(d.r))
        .call(
          d3
            .drag()
            // 拖拽事件
            .on("start", d => {
              if (!d3.event.active) simulation.alphaTarget(0.3).restart();
              d.fx = d.x;
              d.fy = d.y;
            })
            .on("drag", d => {
              d.fx = d3.event.x;
              d.fy = d3.event.y;
            })
            .on("end", d => {
              if (!d3.event.active) simulation.alphaTarget(0);
              d.fx = null;
              d.fy = null;
            })
        );

      // 文本
      const texts = svg
        .append("g")
        .attr("class", "texts")
        .selectAll("text")
        .data(data.nodes)
        .enter()
        .append("text")
        .style("fill", "black")
        .attr("dx", 20)
        .attr("dy", 8)
        .text(d => d.label);

      // 更新力的相互作用
      const ticked = () => {
        link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);

        circle.attr("cx", d => d.x).attr("cy", d => d.y);

        texts.attr("x", d => d.x).attr("y", d => d.y);
      };

      simulation.nodes(data.nodes).on("tick", ticked);

      simulation.force("link").links(data.links);
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
