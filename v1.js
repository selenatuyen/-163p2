//network of cities with destination and source
function v1() {
	var width = 960;
    var	height = 500;

	var svg = d3.select("body").append("svg")
	    .attr("width", width)
	    .attr("height", height);

	var simulation = d3.forceSimulation()
	    .force("link", d3.forceLink().id(function(d) { return d.id; }))
	    .force("charge", d3.forceManyBody())
	    .force("center", d3.forceCenter(width / 2, height / 2));

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
			if(i < 20){
			// if (zip == "94017"){
			jsonObjs.links.push({
				"source" : strt,
				"target" : end,
				"zip" : zip
			});
			jsonObjs.nodes.push({
				"id" : strt,
				"group" : zip
			});
			jsonObjs.nodes.push({
				"id" : end,
				"group" : zip
			});
			// }
			}
			i++;
		})
		// d3.json(jsonObjs, function(error, graph){
			var link = svg.append("g")
				 .attr("class", "links")
				.selectAll("line")
				.data(jsonObjs.links)
				.enter().append("line");

			var node = svg.append("g")
				  .attr("class", "nodes")
			  	.selectAll("circle")
			  	.data(jsonObjs.nodes)
			  	.enter().append("circle")
			  	   .attr("r", 2.5)
			  	   .call(d3.drag()
			  	   		.on("start", dragstarted)
			  	   		.on("drag", dragged)
			  	   		.on("end", dragended)
			  	   		);
	  	    node.append("title")
	  	   	    .text(function(d){return d.id;});

  	   	    simulation
  	   	    	.nodes(jsonObjs.nodes)
  	   	    	.on("tick", ticked);

   	    	simulation.force("link")
   	    		.links(jsonObjs.links);

    		function ticked(){
    			link
    				.attr("x1", function(d){return d.source.x;})
    				.attr("y1", function(d){return d.source.y;})
    				.attr("x2", function(d){return d.target.x;})
    				.attr("y2", function(d){return d.target.y;});

				node
					.attr("cx", function(d) {return d.x;})
					.attr("cy", function(d) {return d.y;});
    		}
		});
		function dragstarted(d) {
		  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
		  d.fx = d.x;
		  d.fy = d.y;
		}

		function dragged(d) {
		  d.fx = d3.event.x;
		  d.fy = d3.event.y;
		}

		function dragended(d) {
		  if (!d3.event.active) simulation.alphaTarget(0);
		  d.fx = null;
		  d.fy = null;
		}
}
v1();