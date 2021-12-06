import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function Pie(props) {
    let data = []
    props.cuartos.forEach(element => {
        data.push(element);
    });
    const pieChart = useRef()
	useEffect(()=>{

		// Get positions for each data object
		const piedata = d3.pie().value(d => d.powerUsage.value)(data)
		// Define arcs for graphing 
		const arc = d3.arc().innerRadius(0).outerRadius(200)

		const colors = d3.scaleOrdinal(['#ffa822','#134e6f','#ff6150','#1ac0c6','#dee0e6'])

		// Define the size and position of svg
		const svg = d3.select(pieChart.current)
						.attr('width', 600)
						.attr('height', 600)
						// .style('background-color','yellow')
						.append('g')
							.attr('transform','translate(300,300)')

		// Add tooltip
		const tooldiv = d3.select('#chartArea')
						  .append('div')
						  .style('visibility','hidden')
						  .style('position','absolute')
						  .style('background-color','white')


		// Draw pie
		svg.append('g')
			.selectAll('path')
			.data(piedata)
			.join('path')
				.attr('d', arc)
				.attr('fill',(d,i)=>colors(i))
				.attr('stroke', 'white')
				.on('mouseover', (e,d)=>{
					tooldiv.style('visibility','visible')
							.text(`${d.data.name}: ${d.data.powerUsage.value} ${d.data.powerUsage.unit}`)
				})
				.on('mousemove', (e,d)=>{
					tooldiv.style('top', (e.pageY-50) + 'px')
							.style('left', (e.pageX-50) + 'px')
				})
				.on('mouseout',()=>{
					tooldiv.style('visibility','hidden')
				})

	})

	return (
		<div id='chartArea'>
			<svg ref={pieChart}></svg>
		</div>
	)
}



export default Pie;