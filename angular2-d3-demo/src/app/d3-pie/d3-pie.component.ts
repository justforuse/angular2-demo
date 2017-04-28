import { Component, OnInit, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';
@Component({
    selector: 'd3-pie',
    templateUrl: './d3-pie.component.html',
    styleUrls: ['./d3-pie.component.css']
})
export class D3PieComponent implements OnInit {
    @Input("pie-data") data;
    constructor(private elRef:ElementRef) { }

    ngOnInit() {
        console.log(this.data);
        var width = 500,
            height = 500;
        var data = this.data
        var pie = d3.pie();
        var color = d3.scaleOrdinal(d3.schemeCategory10);
        var svg = d3.select(this.elRef.nativeElement).append('svg').attr("width", width + 100).attr("height", height + 100);
        var outerRadius = width / 2;
        var innerRadius = width / 4;
        var arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);



        var arc2 = d3.arc()
            .innerRadius(innerRadius - 10)
            .outerRadius(outerRadius + 20)
        var arcs = svg.selectAll("g")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("transform", "translate(" + (outerRadius + 30) + "," + (outerRadius + 50) + ")")
            .on("mouseover", function (d) {

                d3.select(this).select("path").transition().attr("d", function (d) {
                    console.log(d);
                    return arc2(d);
                })
            })
            .on("mouseout", function (d) {
                d3.select(this).select("path").transition().attr("d", function (d) {
                    return arc(d);
                })
            })
        arcs.append("path")
            .attr("fill", function (d, i) {
                return color(i);
            })
            .attr("d", arc)
        //add data value  
        arcs.append("text")
            .attr("transform", function (d) {
                //get the centroid of every arc, include x and y
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor", "middle")
            .text(function (d) {
                // what's the difference between d.value and d.data?
                return d.data;
            })
    }

}
