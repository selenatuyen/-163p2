//line w/ yearly points of avg trip durations
function v2(stationid) {
	var margin = {top: 30, right: 20, bottom: 30, left: 60},
		width = 960 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

	var x  = d3.scaleLinear().range([0, width]);
	var y = d3.scaleLinear().range([height, 0]);

	var parseTime = d3.timeParse("%m/%x/%Y %H:%M")

var svg = d3.select("#vis2").append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
  .append("g")
  	.attr("transform","translate(" + margin.left + "," + margin.top + ")");

var div = d3.select("#vis2").append("div")   
	    .attr("class", "tooltip")               
	    .style("opacity", 0);

	var jan = 0;
	var feb = 0;
	var mar = 0;
	var apr = 0;
	var may = 0;
	var jun = 0;
	var jul = 0;
	var aug = 0;
	var sep = 0;
	var oct = 0;
	var nov = 0;
	var dec = 0;
	var drjan = 0;
	var drfeb = 0;
	var drmar = 0;
	var drapr = 0;
	var drmay = 0;
	var drjun = 0;
	var drjul = 0;
	var draug = 0;
	var drsep = 0;
	var droct = 0;
	var drnov = 0;
	var drdec = 0;
	svg.append("text")
		.attr("x", (width/2))
		.attr("y", 0 - (margin.top/2))
		.attr("text-anchor", "middle")
		.style("font-size", "18px")
		.style("font-weight", "bold")
       .text("Average Trip Duration for Station " + stationid);
	d3.csv('201608_trip_data.csv', function(err, data){
		if(err){
			console.log(err);
		}
		data.forEach(function(d){
			var dt = new Date(d["Start Date"]);
			var mth = dt.getMonth();
			var dr = d["Duration"]/60;
			var stn = d["Start Terminal"];
			if(stn == stationid){
				if(mth == 0){
					drjan += dr;
					jan++;
				}
				else if(mth == 1){
					drfeb += dr;
					feb++;
				}
				else if(mth == 2){
					drmar += dr;
					mar++;
				}
				else if(mth == 3){
					drapr += dr;
					apr++;
				}
				else if(mth == 4){
					drmay += dr;
					may++;
				}
				else if(mth == 5){
					drjun += dr;
					jun++;
				}
				else if(mth == 6){
					drjul += dr;
					jul++;
				}
				else if(mth == 7){
					draug += dr;
					aug++;
				}
				else if(mth == 8){
					drsep += dr;
					sep++;
				}
				else if(mth == 9){
					droct += dr;
					oct++;
				}
				else if (mth == 10){
					drnov += dr;
					nov++;
				}
				else if(mth == 11){
					drdec += dr;
					dec++;
				}
			}
		})	
	var months = [];
	months.push({dur : drjan, count : jan, num : 1, avg : drjan/jan, word : "January"});
	months.push({dur : drfeb, count : feb, num : 2, avg : drfeb/feb, word : "Febuary"});
	months.push({dur : drmar, count : mar, num : 3, avg : drmar/mar, word : "March"});
	months.push({dur : drapr, count : apr, num : 4, avg : drapr/apr, word : "April"});
	months.push({dur : drmay, count : may, num : 5, avg : drmay/may, word : "May"});
	months.push({dur : drjun, count : jun, num : 6, avg : drjun/jun, word : "June"});
	months.push({dur : drjul, count : jul, num : 7, avg : drjul/jul, word : "July"});
	months.push({dur : draug, count : aug, num : 8, avg : draug/aug, word : "August"});
	months.push({dur : drsep, count : sep, num : 9, avg : drsep/sep, word : "September"});
	months.push({dur : droct, count : oct, num : 10, avg : droct/oct, word : "October"});
	months.push({dur : drnov, count : nov, num : 11, avg : drnov/nov, word : "November"});
	months.push({dur : drdec, count : dec, num : 12, avg : drdec/dec, word : "Decemeber"});	

// console.log(months);
	var valueline = d3.line()
		.x(function(d){return x(d.num);})
		.y(function(d){return y(d.avg);});

	x.domain(d3.extent(months,function(d){return d.num;}));
	// y.domain(d3.extent(months, function(d){return d.avg;}));

	y.domain([0,d3.max(months, function(d){return d.avg;})]);
	svg.append("path")
		.data([months])
		.attr("class", "line")
		.attr("d", valueline);

	svg.append("g")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x));

	svg.append("g")
		.call(d3.axisLeft(y));

    svg.selectAll("dot")
        .data(months)
      .enter().append("circle")
      	.attr("id", "datapoints")
        .attr("r", 3.5)
        .attr("cx", function(d) { return x(d.num); })
        .attr("cy", function(d) { return y(d.avg); })
        .style("fill", "#000000")
        .on("mouseover", function(d){
				d3.select(this).transition()
					.duration(200)
					.style("fill", "#808080")
					.style("cursor", "pointer");
				div.transition()
					.duration(200)
					.style("opacity", .9);
				div.text(d.word + ": " + Math.round(d.avg) + " minutes" )
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY-20) + "px")
					.style("cursor", "pointer");	
			})
		.on("mouseout", function(){
				d3.select(this).transition()
					.duration(500)
					.style("fill", "#000000");
				div.transition()
					.duration(500)
					.style("opacity", 0);	
			})
		.on("click", function(d){
				d3.select('#vis3').text("");
				d3.select("form").remove();
				v3(d.num);
		});

	svg.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", -50)
		.attr("x", -70)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("Duration (minute)");;

	svg.append("text")
		.attr("x", width - 440)
		.attr("y", height + 30)
		.attr("dx", ".71em")
		.style("text-anchor", "end")
		.text("Month");	
	})
}
