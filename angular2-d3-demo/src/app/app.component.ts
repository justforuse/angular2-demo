// declare var d3: any;
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';
// import {Selection, select } from 'd3-selection';
// import { transition, Transition } from 'd3-transition';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    data1;
    data2;
    ngOnInit() {
        this.data1 = [10, 20, 50, 30, 80];
        this.data2 = [1, 2, 5, 3, 8];
        // var width = 500,
        //     height = 500;
        // var data = [10, 20, 50, 30, 80];
        // var pie = d3.pie();
        // var color = d3.scaleOrdinal(d3.schemeCategory10);
        // var svg = d3.select(".chart").attr("width", width + 100).attr("height", height + 100);
        // var outerRadius = width / 2;
        // var innerRadius = width / 4;
        // var arc = d3.arc()
        //     .innerRadius(innerRadius)
        //     .outerRadius(outerRadius);



        // var arc2 = d3.arc()
        //     .innerRadius(innerRadius - 10)
        //     .outerRadius(outerRadius + 20)
        // var arcs = svg.selectAll("g")
        //     .data(pie(data))
        //     .enter()
        //     .append("g")
        //     .attr("transform", "translate(" + (outerRadius + 30) + "," + (outerRadius + 50) + ")")
        //     .on("mouseover", function (d) {

        //         d3.select(this).select("path").transition().attr("d", function (d) {
        //             console.log(d);
        //             return arc2(d);
        //         })
        //     })
        //     .on("mouseout", function (d) {
        //         d3.select(this).select("path").transition().attr("d", function (d) {
        //             return arc(d);
        //         })
        //     })
        // arcs.append("path")
        //     .attr("fill", function (d, i) {
        //         return color(i);
        //     })
        //     .attr("d", arc)
        // //add data value  
        // arcs.append("text")
        //     .attr("transform", function (d) {
        //         //get the centroid of every arc, include x and y
        //         return "translate(" + arc.centroid(d) + ")";
        //     })
        //     .attr("text-anchor", "middle")
        //     .text(function (d) {
        //         // what's the difference between d.value and d.data?
        //         return d.data;
        //     })
    }


}
