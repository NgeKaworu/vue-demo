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

      // const svg = d3
      //   .select(node)
      //   .append("svg")
      //   // 缩放
      //   .attr("preserveAspectRatio", "xMinYMin meet")
      //   .attr("viewBox", "0 0 " + width + " " + height)
      //   .style("width", "100%")
      //   .style("height", "auto");

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
        c1 = ["#301E1E", "#083E77", "#342350", "#567235", "#8B161C", "#DF7C00"],
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

      const colors = d3
        .scaleOrdinal()
        .domain(d3.range(names.length))
        .range(c1);

      const chord = d3
        .chord()
        .padAngle(0.15)
        .sortChords(d3.descending);

      const arc = d3
        .arc()
        .innerRadius(innerRadius * 1.01)
        .outerRadius(outerRadius);

      const path = d3.ribbon().radius(innerRadius);

      ////////////////////////////////////////////////////////////
      ////////////////////// Create SVG //////////////////////////
      ////////////////////////////////////////////////////////////

      const svg = d3
        .select(node)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr(
          "transform",
          "translate(" +
            (width / 2 + margin.left) +
            "," +
            (height / 2 + margin.top) +
            ")"
        )
        .datum(chord(matrix));

      ////////////////////////////////////////////////////////////
      ////////////////// Draw outer Arcs /////////////////////////
      ////////////////////////////////////////////////////////////

      const outerArcs = svg
        .selectAll("g.group")
        .data(function(chords) {
          return chords.groups;
        })
        .enter()
        .append("g")
        .attr("class", "group")
        .on("mouseover", fade(0.1))
        .on("mouseout", fade(opacityDefault))

        // text popups
        .on("click", mouseoverChord)
        .on("mouseout", mouseoutChord);

      ////////////////////////////////////////////////////////////
      ////////////////////// Append names ////////////////////////
      ////////////////////////////////////////////////////////////

      //Append the label names INSIDE outside
      outerArcs
        .append("path")
        .style("fill", function(d) {
          return colors(d.index);
        })
        .attr("id", function(d, i) {
          return "group" + d.index;
        })
        .attr("d", arc);

      outerArcs
        .append("text")
        .attr("x", 6)
        .attr("dx", 60)
        .attr("dy", 18)
        .append("textPath")
        .attr("href", function(d) {
          return "#group" + d.index;
        })
        .text(function(chords, i) {
          return names[i];
        })
        .style("fill", "white");

      ////////////////////////////////////////////////////////////
      ////////////////// Draw inner chords ///////////////////////
      ////////////////////////////////////////////////////////////

      svg
        .selectAll("path.chord")
        .data(function(chords) {
          return chords;
        })
        .enter()
        .append("path")
        .attr("class", "chord")
        .style("fill", function(d) {
          return colors(d.source.index);
        })
        .style("opacity", opacityDefault)
        .attr("d", path);

      ////////////////////////////////////////////////////////////
      //////// Draw Super Categories - By Faraz Shuja ////////////
      ////////////////////////////////////////////////////////////

      //define grouping with colors
      const groups = [
        { sIndex: 0, eIndex: 2, title: "SuperCategory 1", color: "#c69c6d" },
        { sIndex: 4, eIndex: 5, title: "SuperCategory 2", color: "#00a651" }
      ];
      const cD = chord(matrix).groups;

      //draw arcs
      for (const i = 0; i < groups.length; i++) {
        const __g = groups[i];
        const arc1 = d3
          .arc()
          .innerRadius(innerRadius * 1.11)
          .outerRadius(outerRadius * 1.1)
          .startAngle(cD[__g.sIndex].startAngle)
          .endAngle(cD[__g.eIndex].endAngle);

        svg
          .append("path")
          .attr("d", arc1)
          .attr("fill", __g.color)
          .attr("id", "groupId" + i);

        // Add a text label.
        const text = svg
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

      ////////////////////////////////////////////////////////////
      ////////////////// Extra Functions /////////////////////////
      ////////////////////////////////////////////////////////////

      function popup() {
        return function(d, i) {
          console.log("love");
        };
      } //popup

      //Returns an event handler for fading a given chord group.
      function fade(opacity) {
        return function(d, i) {
          svg
            .selectAll("path.chord")
            .filter(function(d) {
              return d.source.index != i && d.target.index != i;
            })
            .transition()
            .style("opacity", opacity);
        };
      } //fade

      //Highlight hovered over chord
      function mouseoverChord(d, i) {
        //Decrease opacity to all
        svg
          .selectAll("path.chord")
          .transition()
          .style("opacity", 0.1);
        //Show hovered over chord with full opacity
        d3.select(this)
          .transition()
          .style("opacity", 1);
      }
      //Bring all chords back to default opacity
      function mouseoutChord(d) {
        //Set opacity back to default for all
        svg
          .selectAll("path.chord")
          .transition()
          .style("opacity", opacityDefault);
      } //function mouseoutChord
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
