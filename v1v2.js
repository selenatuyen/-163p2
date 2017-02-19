//network of cities with destination and source
function v1() {
	var width = 960;
    var	height = 500;

	var svg = d3.select("body").append("svg")
	    .attr("width", width)
	    .attr("height", height);

	var jsonObjs = {
		nodes: [],
		links: []
	}; 

	var i = 0;
	d3.csv('201608_trip_data.csv', function(err, data){
		if(err){
			console.log(err);
		}
		data.forEach(function(d){
			var strt = d["Start Terminal"];
			var end = d["End Terminal"];
			var zip = d["Zip Code"];
			if(i < 4){
			// if (zip == "94017"){
			jsonObjs.links.push({
				"source" : strt,
				"target" : end,
				"zip" : zip
			});
			jsonObjs.nodes.push({
				"id" : strt,
				"group" : zip,
				"x" : 100 + i * 2,
				"y" : 100 + i * 2
			});
			jsonObjs.nodes.push({
				"id" : end,
				"group" : zip,
				"x" : 200 + i * 2,
				"y" : 200 + i * 2
			});
			// }
			}
			i++;
		})

		var links = svg.selectAll("link")
			.data(jsonObjs.links)
			.enter()
			.append("line")
			.attr("class", "link")
			.attr("x1", function(l){
				var sourceNode = jsonObjs.nodes.filter(function(d, i){return i = l.source})[0];
				console.log(sourceNode);
				d3.select(this).attr("y1", sourceNode.y);
				return sourceNode.x
			})
			.attr("x2", function(l){
				var targetNode = jsonObjs.nodes.filter(function(d, i){return i == l.target})[0];
				d3.select(this).attr("y2", targetNode.y);
				return targetNode.x
			})
			.attr("fill", "none")
			.attr("stroke", "black");

		var nodes = svg.selectAll("node")
			.data(jsonObjs.node)
			.enter()
			.append("circle")
			.attr("class", "node")
			.attr("cx", function(d){
				return d.x
			})
			.attr("cy", function(d){
				return d.y
			})
			.attr("r", 15)
			.attr("fill", function(d,i){
				return c10(i);
			})

	});
}
v1();