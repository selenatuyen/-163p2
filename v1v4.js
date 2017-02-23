//san jose only. hard-coded array weights
function v1() {
	var width = 960;
    var	height = 500;

	var svg = d3.select("body").append("svg")
	    .attr("width", width)
	    .attr("height", height);
	
	var div = d3.select("body").append("div")   
	    .attr("class", "tooltip")               
	    .style("opacity", 0);

	var jsonObjs = {
		nodes: [
			{id : 2, city : "San Jose", index: 0}, //1
			{id : 3, city : "San Jose", index: 1}, 
			{id : 4, city : "San Jose", index: 2},
			{id : 5, city : "San Jose", index: 3},
			{id : 6, city : "San Jose", index: 4},
			{id : 7, city : "San Jose", index: 5}, 
			{id : 8, city : "San Jose", index: 6},
			{id : 9, city : "San Jose", index: 7},  //2
			{id : 10, city : "San Jose", index: 8},
			{id : 11, city : "San Jose", index: 9},
			{id : 12, city : "San Jose", index: 10},
			{id : 13, city : "San Jose", index: 11},
			{id : 14, city : "San Jose", index: 12},
			{id : 16, city : "San Jose", index: 13}, //4
			{id : 80, city : "San Jose", index: 14}, //5
			{id : 84, city : "San Jose", index: 15}, //3
			{id : 88, city : "San Jose", index: 16},
			{id : 89, city : "San Jose", index: 17},
		],
		links: []
	}; 

	var color = d3.scaleOrdinal().range(["#7a7671", "#f9757c", "#66b78f", "#ffbd68", "#5589a0"]);
	var legendData = ["Station 2", "Station 9", "Station 16", "Station 80", "Station 84"];

	var station2 = [0,12,6,2,43,65,3,173,3,28,12,10,6,89,0,90,0,0];
	var station3 = [1,0,0,1,1,2,0,5,1,0,2,3,0,3,0,1,0,0];
	var station4 = [7,2,0,1,2,9,3,5,0,1,29,1,1,2,0,0,0,0];
	var station5 = [1,1,0,0,0,0,0,2,28,9,2,0,0,1,0,0,0,0];
	var station6 = [43,2,2,0,0,14,3,112,3,2,1,31,6,11,0,15,0,0];
	var station7 = [52,3,5,0,20,0,25,38,0,1,4,26,1,69,0,17,0,1];
	var station8 = [0,0,1,0,5,28,0,14,4,3,0,12,0,22,0,2,0,0];
	var station9 = [196,4,3,0,122,13,20,0,21,23,4,14,2,10,1,18,1,0];
	var station10 = [2,1,0,16,2,2,7,18,0,3,8,2,2,5,0,6,0,0];
	var station11 = [50,1,0,7,4,0,2,18,1,0,2,1,1,18,0,1,0,0];
	var station12 = [12,0,29,3,3,8,2,2,1,1,0,36,2,8,0,0,0,0];
	var station13 = [5,1,2,0,24,12,21,38,3,9,43,0,1,9,2,1,0,0];
	var station14 = [1,0,3,0,0,5,5,5,0,1,2,3,0,1,0,2,0,0];
	var station16 = [87,9,0,6,10,100,36,5,16,7,5,11,0,0,1,0,0,2];
	var station80 = [0,2,0,0,1,2,1,5,3,0,0,5,0,1,0,245,0,0];
	var station84 = [123,3,0,0,22,13,3,17,7,2,0,3,2,1,158,0,0,1];
	var station88 = [3,0,2,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0];
	var station89 = [1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0];

	var sum80 = station80.reduce(add, 0);
	var sum84 = station84.reduce(add, 0);
	var sum88 = station88.reduce(add, 0);
	var sum89 = station89.reduce(add, 0);
	var sum2 = station2.reduce(add, 0);
	var sum3 = station3.reduce(add, 0);
	var sum4 = station4.reduce(add, 0);
	var sum5 = station5.reduce(add, 0);
	var sum6 = station6.reduce(add, 0);
	var sum7 = station7.reduce(add, 0);
	var sum8 = station8.reduce(add, 0);
	var sum9 = station9.reduce(add, 0);
	var sum10 = station10.reduce(add, 0);
	var sum11 = station11.reduce(add, 0);
	var sum12 = station12.reduce(add, 0);
	var sum13 = station13.reduce(add, 0);
	var sum14 = station14.reduce(add, 0);
	var sum16 = station16.reduce(add, 0);
		function add(a, b) {
		    return a + b;
		}
	console.log("station 2- "+ "9:" + station2[7] + ", 16:" + station2[13] + ", 80:" + station2[14] + ", 84:" + station2[15] + " sum:" + sum2);
	console.log("station 9- "+ "2:" + station9[0] + ", 16:" + station9[13] + ", 80:" + station9[14] + ", 84:" + station9[15] + " sum:" + sum9);
	console.log("station 16- "+ "2:" + station16[0] + ", 9:" + station16[7] + ", 80:" + station16[14] + ", 84:" + station16[15] + " sum:" + sum16);
	console.log("station 80- "+ "2:" + station80[0] + ", 9:" + station80[7] + ", 16:" + station80[13] + ", 84:" + station80[15] + " sum:" + sum80);
	console.log("station 84- "+ "2:" + station84[0] + ", 9:" + station84[7] + ", 16:" + station84[13] + ", 80:" + station84[14] + " sum:" + sum84);
	//station 9 lines --- red			
		svg.append("line")
			.attr("x1", 700)
			.attr("y1", 280)
			.attr("x2", 230)
			.attr("y2", 368)
			.attr("stroke-width", station9[0]/6)
			.attr("stroke", "#f9757c")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station9[0] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			});
		svg.append("line")
			.attr("x1", 700)
			.attr("y1", 270)
			.attr("x2", 500)
			.attr("y2", 460)
			.attr("stroke-width", station9[13]/4)
			.attr("stroke", "#f9757c")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station9[13] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			});
		svg.append("line")
			.attr("x1", 700)
			.attr("y1", 250)
			.attr("x2", 500)
			.attr("y2", 70)
			.attr("stroke-width", station9[14])
			.attr("stroke", "#f9757c")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station9[14] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			});
		svg.append("line")
			.attr("x1", 700)
			.attr("y1", 220)
			.attr("x2", 250)
			.attr("y2", 150)
			.attr("stroke-width", station9[15]/4)
			.attr("stroke", "#f9757c")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station9[15] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			});		
//station 2 lines --- purple
		svg.append("line")
			.attr("x1", 227)
			.attr("y1", 320)
			.attr("x2", 700)
			.attr("y2", 240)
			.attr("stroke-width", station2[7]/6)
			.attr("stroke", "#7a7671")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station2[7] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			});
		svg.append("line")
			.attr("x1", 210)
			.attr("y1", 310)
			.attr("x2", 280)
			.attr("y2", 150)
			.attr("stroke-width", station2[15]/6)
			.attr("stroke", "#7a7671")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station2[15] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			});			
		svg.append("line")
			.attr("x1", 280)
			.attr("y1", 380)
			.attr("x2", 500)
			.attr("y2", 460)
			.attr("stroke-width", station2[13]/6)
			.attr("stroke", "#7a7671")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station2[13] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			});	
//station 16 lines --- green
		svg.append("line")
			.attr("x1", 230)
			.attr("y1", 390)
			.attr("x2", 500)
			.attr("y2", 480)
			.attr("stroke-width", station16[0]/6)
			.attr("stroke", "#66b78f")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station16[0] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			});
		svg.append("line")
			.attr("x1", 500)
			.attr("y1", 490)
			.attr("x2", 700)
			.attr("y2", 280)
			.attr("stroke-width", station16[7]/4)
			.attr("stroke", "#66b78f")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station16[7] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			});
		svg.append("line")
			.attr("x1", 500)
			.attr("y1", 490)
			.attr("x2", 500)
			.attr("y2", 80)
			.attr("stroke-width", station16[14])
			.attr("stroke", "#66b78f")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station16[14] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			});	
//station 84 lines --- blue
	svg.append("line")
			.attr("x1", 300)
			.attr("y1", 180)
			.attr("x2", 700)
			.attr("y2", 230)
			.attr("stroke-width", station84[7]/6)
			.attr("stroke", "#5589a0")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station84[7] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			}); 
	svg.append("line")
			.attr("x1", 300)
			.attr("y1", 180)
			.attr("x2", 240)
			.attr("y2", 350)
			.attr("stroke-width", station84[0]/6)
			.attr("stroke", "#5589a0")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station84[0] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			}); 	
	svg.append("line")
			.attr("x1", 300)
			.attr("y1", 180)
			.attr("x2", 500)
			.attr("y2", 450)
			.attr("stroke-width", station84[13])
			.attr("stroke", "#5589a0")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station84[13] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			}); 
	svg.append("line")
			.attr("x1", 300)
			.attr("y1", 170)
			.attr("x2", 500)
			.attr("y2", 97)
			.attr("stroke-width", station84[14]/6)
			.attr("stroke", "#5589a0")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station84[14] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			}); 						
//station 80 lines --- orange
	svg.append("line")
			.attr("x1", 500)
			.attr("y1", 40)
			.attr("x2", 700)
			.attr("y2", 210)
			.attr("stroke-width", station80[7]/4)
			.attr("stroke", "#ffbd68")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station80[7] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			}); 
	svg.append("line")
			.attr("x1", 520)
			.attr("y1", 40)
			.attr("x2", 520)
			.attr("y2", 450)
			.attr("stroke-width", station80[13])
			.attr("stroke", "#ffbd68")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station80[13] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			}); 
	svg.append("line")
			.attr("x1", 510)
			.attr("y1", 50)
			.attr("x2", 300)
			.attr("y2", 130)
			.attr("stroke-width", station80[15]/6)
			.attr("stroke", "#ffbd68")
			.on("mouseover", function(d){
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(station80[15] + " Trips")
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px");
			})
			.on("mouseout", function(d){
				div.transition()
					.duration(500)
					.style("opacity", 0);
			});


//======stations============
		//station 2
		svg.append("circle")
			.attr("cx", 230)
			.attr("cy", 350)
			.attr("r", sum2/6)
			.style("fill", "#7a7671")
			.on("click", function(){
				d3.selectAll("svg").remove();
				v2(2);
			}); 
		//station 9
		svg.append("circle")
			.attr("cx", 700)
			.attr("cy", 250)
			.attr("r", sum9/6)
			.style("fill", "#f9757c")
			.on("click", function(){
				d3.selectAll("svg").remove();
				v2(9);
			});
		//station 16
		svg.append("circle")
			.attr("cx", 500)
			.attr("cy", 450)
			.attr("r", sum16/6)
			.style("fill", "#66b78f")
			.on("click", function(){
				d3.selectAll("svg").remove();
				v2(16);
			});
		//station 80
		svg.append("circle")
			.attr("cx", 500)
			.attr("cy", 70)
			.attr("r", sum80/6)
			.style("fill", "#ffbd68")
			.on("click", function(){
				d3.selectAll("svg").remove();
				v2(80);
			});		
		//station 84
		svg.append("circle")
			.attr("cx", 300)
			.attr("cy", 150)
			.attr("r", sum84/6)
			.style("fill", "#5589a0")
			.on("click", function(){
				d3.selectAll("svg").remove();
				v2(84);
			});	

		var legend = svg.append("g")
			.attr("class", "legend")
			.attr("x", 800)
			.attr("y", 200)
			.attr("height", 500)
			.attr("width", 100);
		legend.selectAll("g").data(legendData)
			.enter()
			.append("g")
			.each(function(d, i){
				var g = d3.select(this);
				g.append("rect")
					.attr("x", 820)
					.attr("y", i*35+160)
					.attr("width", 10)
					.attr("height", 10)
					.style("fill", function(d){return color(i);});
				g.append("text")
					.attr("x", 845)
					.attr("y", i*35+170)
					.attr("height", 10)
					.text(function(d){return legendData[i]});
		})
}
v1();