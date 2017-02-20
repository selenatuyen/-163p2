//network of cities with destination and source
function v1() {
	var width = 960;
    var	height = 500;

	var svg = d3.select("body").append("svg")
	    .attr("width", width)
	    .attr("height", height);

	var jsonObjs = {
		nodes: [
			{id : 2, city : "San Jose"},
			{id : 3, city : "San Jose"},
			{id : 4, city : "San Jose"},
			{id : 5, city : "San Jose"},
			{id : 6, city : "San Jose"},
			{id : 7, city : "San Jose"},
			{id : 8, city : "San Jose"},
			{id : 9, city : "San Jose"},
			{id : 10, city : "San Jose"},
			{id : 11, city : "San Jose"},
			{id : 12, city : "San Jose"},
			{id : 13, city : "San Jose"},
			{id : 14, city : "San Jose"},
			{id : 16, city : "San Jose"},
			{id : 80, city : "San Jose"},
			{id : 84, city : "San Jose"},
			{id : 88, city : "San Jose"},
			{id : 89, city : "San Jose"},
			
			{id : 39, city : "San Francisco"},	
			{id : 41, city : "San Francisco"},
			{id : 42, city : "San Francisco"},
			{id : 45, city : "San Francisco"},
			{id : 46, city : "San Francisco"},
			{id : 47, city : "San Francisco"},
			{id : 48, city : "San Francisco"},
			{id : 49, city : "San Francisco"},
			{id : 50, city : "San Francisco"},
			{id : 51, city : "San Francisco"},
			{id : 54, city : "San Francisco"},
			{id : 55, city : "San Francisco"},
			{id : 56, city : "San Francisco"},
			{id : 57, city : "San Francisco"},
			{id : 58, city : "San Francisco"},
			{id : 59, city : "San Francisco"},
			{id : 60, city : "San Francisco"},
			{id : 61, city : "San Francisco"},
			{id : 62, city : "San Francisco"},
			{id : 63, city : "San Francisco"},
			{id : 64, city : "San Francisco"},
			{id : 65, city : "San Francisco"},
			{id : 66, city : "San Francisco"},
			{id : 67, city : "San Francisco"},
			{id : 68, city : "San Francisco"},
			{id : 69, city : "San Francisco"},
			{id : 70, city : "San Francisco"},
			{id : 71, city : "San Francisco"},
			{id : 72, city : "San Francisco"},
			{id : 73, city : "San Francisco"},
			{id : 74, city : "San Francisco"},
			{id : 75, city : "San Francisco"},
			{id : 76, city : "San Francisco"},
			{id : 77, city : "San Francisco"},
			{id : 82, city : "San Francisco"},
			{id : 90, city : "San Francisco"},	
			{id : 91, city : "San Francisco"},
			
			{id : 34, city : "Palo Alto"},
			{id : 35, city : "Palo Alto"},
			{id : 36, city : "Palo Alto"},
			{id : 37, city : "Palo Alto"},
			{id : 38, city : "Palo Alto"},

			{id : 27, city : "Mountain View"},
			{id : 28, city : "Mountain View"},
			{id : 29, city : "Mountain View"},
			{id : 30, city : "Mountain View"},
			{id : 31, city : "Mountain View"},
			{id : 32, city : "Mountain View"},
			{id : 33, city : "Mountain View"},
			
			{id : 21, city : "Redwood City"},
			{id : 22, city : "Redwood City"},
			{id : 23, city : "Redwood City"},
			{id : 24, city : "Redwood City"},
			{id : 25, city : "Redwood City"},
			{id : 26, city : "Redwood City"}
		],
		links: []
	}; 

	var countSF = 0;
	var countRC = 0;
	var countPA = 0;
	var countMV = 0;
	var countSJ = 0;

	var weights = [];

	d3.csv('201608_trip_data.csv', function(err, data){
		if(err){
			console.log(err);
		}
		data.forEach(function(d){
			var strt = d["Start Terminal"];
			var end = d["End Terminal"];
			var zip = d["Zip Code"];
			// if (zip == "94017"){
				if(end >= 39 && end <= 77){
					countSF++;
				}
				else if(end == 82 || end == 90 || end == 91){
					countSF++;
				}
				else if(end >= 2 && end <= 16){
					countSJ++;
				}
				else if(end == 80 || end == 84 || end == 88 || end == 89){
					countSJ++;
				}
				else if(end >= 34 && end <= 38){
					countPA++;
				}
				else if(end >= 27 && end <= 33){
					countMV++;
				}
				else if(end >= 21 && end <= 26){
					countRC++;
				}
			// }
		})

		weights.push({source : "San Francisco", sf : countSF, sj : countSJ, rc : countRC, pa : countPA, mv : countMV});
console.log(weights);

		var sfsize = countSF/10000;
		var sjsize = countSJ/1000;
		var mvsize = countMV/1000;
		var pasize = countPA/1000;
		var rcsize = countRC/1000;

		console.log(sfsize);
		svg.append("circle")
			.attr("cx", 500)
			.attr("cy", 250)
			.attr("r", sfsize)
			.style("fill", "purple");
		svg.append("circle")
			.attr("cx", 700)
			.attr("cy", 250)
			.attr("r", sjsize)
			.style("fill", "red");
		svg.append("circle")
			.attr("cx", 300)
			.attr("cy", 250)
			.attr("r", mvsize)
			.style("fill", "blue");
		svg.append("circle")
			.attr("cx", 500)
			.attr("cy", 350)
			.attr("r", pasize)
			.style("fill", "green");
		svg.append("circle")
			.attr("cx", 500)
			.attr("cy", 180)
			.attr("r", rcsize)
			.style("fill", "black");
		svg.append("line")
			.attr("x1", 527)
			.attr("y1", 250)
			.attr("x2", 686)
			.attr("y2", 250)
			.attr("stroke-width", sjsize)
			.attr("stroke", "gray")
			.attr("fill", "black"); 
		svg.append("line")
			.attr("x1", 472)
			.attr("y1", 250)
			.attr("x2", 305)
			.attr("y2", 250)
			.attr("stroke-width", mvsize)
			.attr("stroke", "orange")
			.attr("fill", "black"); 
		svg.append("line")
			.attr("x1", 500)
			.attr("y1", 278)
			.attr("x2", 500)
			.attr("y2", 347)
			.attr("stroke-width", pasize)
			.attr("stroke", "cyan")
			.attr("fill", "black"); 
		svg.append("line")
			.attr("x1", 500)
			.attr("y1", 222)
			.attr("x2", 500)
			.attr("y2", 181)
			.attr("stroke-width", rcsize)
			.attr("stroke", "magenta")
			.attr("fill", "black"); 				
		// var links = svg.selectAll("link")
		// 	.data(jsonObjs.links)
		// 	.enter()
		// 	.append("line")
		// 	.attr("class", "link")
		// 	.attr("x1", function(d){return d.source;})
		// 	.attr("y1", function(d){return d.zip;})
		// 	.attr("x2", function(d){return d.target;})
		// 	.attr("y2", function(d){return d.zip;})
		// 	.attr("fill", "black")
		// 	.attr("stroke", "black");

		// var nodes = svg.selectAll("node")
		// 	.data(jsonObjs.nodes)
		// 	.enter()
		// 	.append("circle")
		// 	.attr("class", "node")
		// 	.attr("cx", function(d){
		// 		return d.id
		// 	})
		// 	.attr("cy", function(d){
		// 		return d.id
		// 	})
		// 	.attr("r", 5)
		// 	.attr("fill", "red");
	})
}
v1();