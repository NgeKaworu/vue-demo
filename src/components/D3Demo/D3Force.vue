<template>
  <div ref="node">123</div>
</template>

<script>
import * as d3 from "d3";
export default {
  methods: {
    renderChart() {
      const dragstarted = d => {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      };

      const dragged = d => {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      };

      const dragended = d => {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      };
      // 节点
      const node = this.$refs.node;
      // 清除旧数据
      d3.select(node)
        .select("svg")
        .remove();
      //画布大小
      const width = 800;
      const height = 600;

      const range = 100;
      const data = {
        nodes: d3.range(0, range).map(d => {
          return { label: "l" + d, r: ~~d3.randomUniform(8, 28)() };
        }),
        links: d3.range(0, range).map(function() {
          return {
            source: ~~d3.randomUniform(range)(),
            target: ~~d3.randomUniform(range)()
          };
        })
      };

      const margin = { top: 0, left: 0, bottom: 0, right: 0 };

      const chartWidth = width - (margin.left + margin.right);
      const chartHeight = height - (margin.top + margin.bottom);

      const svg = d3
        .select(node)
        .append("svg")
        // 缩放
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 " + width + " " + height)
        .style("width", "100%")
        .style("height", "auto");

      const chartLayer = svg
        .attr("width", chartWidth)
        .attr("height", chartHeight)
        .attr("transform", "translate(" + [margin.left, margin.top] + ")");

      const simulation = d3
        .forceSimulation()
        .force(
          "link",
          d3.forceLink().id(d => {
            return d.index;
          })
        )
        .force(
          "collide",
          d3
            .forceCollide(d => {
              return d.r + 8;
            })
            .iterations(16)
        )
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(chartWidth / 2, chartHeight / 2))
        .force("y", d3.forceY(0))
        .force("x", d3.forceX(0));

      const link = svg
        .append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(data.links)
        .enter()
        .append("line")
        .attr("stroke", "black");

      const circle = svg
        .append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(data.nodes)
        .enter()
        .append("circle")
        .attr("r", d => {
          return d.r;
        })
        .call(
          d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended)
        );

      const ticked = function() {
        link
          .attr("x1", d => {
            return d.source.x;
          })
          .attr("y1", d => {
            return d.source.y;
          })
          .attr("x2", d => {
            return d.target.x;
          })
          .attr("y2", d => {
            return d.target.y;
          });

        circle
          .attr("cx", d => {
            return d.x;
          })
          .attr("cy", d => {
            return d.y;
          });
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
