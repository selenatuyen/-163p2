//bar of avg temp with high/low toggle
function v3(monthData) {
	var margin = {top: 20, right: 20, bottom: 30, left: 60},
	width = 960 - margin.left - margin.right,
	height = 500 - margin.top - margin.bottom;

	var x = d3.scaleBand()
				.range([0, width])
				.padding(0.1);
	var y = d3.scaleLinear()
				.range([height, 0]);

	var svg = d3.select("#vis3").append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	d3.csv('201608_weather_data.csv', function(err, data){
		if(err){
			console.log(err);
		}
		var selectedMonth = monthData;
		var dyCount = 31;
		if(selectedMonth == 8 || selectedMonth == 3 || selectedMonth == 5 || selectedMonth == 11){
			dyCount = 30;
		}
		else{ //febuary
			dyCount = 29;
		}
		var temps = [];
		var i = 1;
		data.forEach(function(d){
			var zip = d["ZIP"];
			if(zip == "95113"){
				var dt = new Date(d["PDT"]);
				var mth = dt.getMonth();
				if(mth == selectedMonth){
					var day = dt.getDay();
					if(i <= dyCount){
						temps.push({dy: i, tmp: d["Mean TemperatureF"]});
						i++;
					}
				}
			}
			
		})	
		x.domain(temps.map(function(d){return d.dy;}));
		y.domain([0, d3.max(temps, function(d){return d.tmp;})]);

		svg.selectAll(".bar")
		.data(temps)
		.enter().append("rect")
			.attr("class", "bar")
			.attr("fill", "#800000")
			.attr("x", function(d){return x(d.dy);})
			.attr("width", x.bandwidth())
			.attr("y",  function(d){return y(d.tmp);})
			.attr("height", function(d) {return height - y(d.tmp);});
		//x axis
		svg.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));
		svg.append("text")
			.attr("x", width - 440)
			.attr("y", height + 28)
			.attr("dx", ".71em")
			.style("text-anchor", "end")
			.text("Day of Month");
		//y axis
		svg.append("g")
			.call(d3.axisLeft(y));
		svg.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y",-40)
			.attr("x", -60)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.text("Average Temperature (Farenheit)");
		// console.log(temps);	
		})
}