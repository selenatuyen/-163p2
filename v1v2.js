//san jose only. calculations of array weights and sums
function v1() {
	var width = 960;
    var	height = 500;

	var svg = d3.select("body").append("svg")
	    .attr("width", width)
	    .attr("height", height);

	var jsonObjs = {
		nodes: [
			{id : 2, city : "San Jose"}, //1
			{id : 3, city : "San Jose"},
			{id : 4, city : "San Jose"},
			{id : 5, city : "San Jose"},
			{id : 6, city : "San Jose"},
			{id : 7, city : "San Jose"}, //6
			{id : 8, city : "San Jose"},
			{id : 9, city : "San Jose"},  //2
			{id : 10, city : "San Jose"},
			{id : 11, city : "San Jose"},
			{id : 12, city : "San Jose"},
			{id : 13, city : "San Jose"},
			{id : 14, city : "San Jose"},
			{id : 16, city : "San Jose"}, //4
			{id : 80, city : "San Jose"}, //5
			{id : 84, city : "San Jose"}, //3
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

	var station80 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station84 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station88 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station89 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station2 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station3 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station4 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station5 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station6 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station7 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station8 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station9 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station10 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station11 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station12 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station13 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station14 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var station16 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

	d3.csv('201608_trip_data.csv', function(err, data){
		if(err){
			console.log(err);
		}
		data.forEach(function(d){
			var strt = d["Start Terminal"];
			var end = d["End Terminal"];
			var zip = d["Zip Code"];
			if(zip == "95112"){
				if(strt == 80){
					if(end >= 84){
						if(end == 84){
							station80[15]++;
						}
						else if(end == 88){
							station80[16]++;
						}
						else if(end == 89){
							station80[17]++;
						}
					}
					else{
						if(end == 2){
							station80[0]++;
						}
						else if(end == 3){
							station80[1]++;
						}
						else if(end == 4){
							station80[2]++;
						}
						else if(end == 5){
							station80[3]++;
						}
						else if(end == 6){
							station80[4]++;
						}
						else if(end == 7){
							station80[5]++;
						}
						else if(end == 8){
							station80[6]++;	
						}
						else if(end == 9){
							station80[7]++;
						}
						else if(end == 10){
							station80[8]++;
						}
						else if(end == 11){
							station80[9]++;
						}
						else if(end == 12){
							station80[10]++;
						}
						else if(end == 13){
							station80[11]++;
						}
						else if(end == 14){
							station80[12]++;
						}
						else if(end == 16){
							station80[13]++;
						}
					}
				}
				else if(strt == 84){
					if(end >= 80){
						if(end == 80){
							station84[14]++;
						}
						else if(end == 88){
							station84[16]++;
						}
						else if(end == 89){
							station84[17]++;
						}
					}
					else{
						if(end == 2){
							station84[0]++;
						}
						else if(end == 3){
							station84[1]++;
						}
						else if(end == 4){
							station84[2]++;
						}
						else if(end == 5){
							station84[3]++;
						}
						else if(end == 6){
							station84[4]++;
						}
						else if(end == 7){
							station84[5]++;
						}
						else if(end == 8){
							station84[6]++;	
						}
						else if(end == 9){
							station84[7]++;
						}
						else if(end == 10){
							station84[8]++;
						}
						else if(end == 11){
							station84[9]++;
						}
						else if(end == 12){
							station84[10]++;
						}
						else if(end == 13){
							station84[11]++;
						}
						else if(end == 14){
							station84[12]++;
						}
						else if(end == 16){
							station84[13]++;
						}
					}	
				}
				else if(strt == 88){
					if(end >= 80){
						if(end == 80){
							station88[14]++;
						}
						else if(end == 84){
							station88[15]++;
						}
						else if(end == 89){
							station88[17]++;
						}
					}
					else{
						if(end == 2){
							station88[0]++;
						}
						else if(end == 3){
							station88[1]++;
						}
						else if(end == 4){
							station88[2]++;
						}
						else if(end == 5){
							station88[3]++;
						}
						else if(end == 6){
							station88[4]++;
						}
						else if(end == 7){
							station88[5]++;
						}
						else if(end == 8){
							station88[6]++;	
						}
						else if(end == 9){
							station88[7]++;
						}
						else if(end == 10){
							station88[8]++;
						}
						else if(end == 11){
							station88[9]++;
						}
						else if(end == 12){
							station88[10]++;
						}
						else if(end == 13){
							station88[11]++;
						}
						else if(end == 14){
							station88[12]++;
						}
						else if(end == 16){
							station88[13]++;
						}
					}
				}
				else if(strt == 89){
					if(end >= 80){
						if(end == 80){
							station89[14]++;
						}
						else if(end == 84){
							station89[15]++;
						}
						else if(end == 88){
							station89[16]++;
						}
					}
					else{
						if(end == 2){
							station89[0]++;
						}
						else if(end == 3){
							station89[1]++;
						}
						else if(end == 4){
							station89[2]++;
						}
						else if(end == 5){
							station89[3]++;
						}
						else if(end == 6){
							station89[4]++;
						}
						else if(end == 7){
							station89[5]++;
						}
						else if(end == 8){
							station89[6]++;	
						}
						else if(end == 9){
							station89[7]++;
						}
						else if(end == 10){
							station89[8]++;
						}
						else if(end == 11){
							station89[9]++;
						}
						else if(end == 12){
							station89[10]++;
						}
						else if(end == 13){
							station89[11]++;
						}
						else if(end == 14){
							station89[12]++;
						}
						else if(end == 16){
							station89[13]++;
						}
					}
				}
				else if(strt == 2){
					if(end >= 80){
						if(end == 80){
							station2[14]++;
						}
						else if(end == 84){
							station2[15]++;
						}
						else if(end == 88){
							station2[16]++;
						}
						else if(end == 89){
							station2[17]++;
						}
					}
					else{
						if(end == 3){
							station2[1]++;
						}
						else if(end == 4){
							station2[2]++;
						}
						else if(end == 5){
							station2[3]++;
						}
						else if(end == 6){
							station2[4]++;
						}
						else if(end == 7){
							station2[5]++;
						}
						else if(end == 8){
							station2[6]++;	
						}
						else if(end == 9){
							station2[7]++;
						}
						else if(end == 10){
							station2[8]++;
						}
						else if(end == 11){
							station2[9]++;
						}
						else if(end == 12){
							station2[10]++;
						}
						else if(end == 13){
							station2[11]++;
						}
						else if(end == 14){
							station2[12]++;
						}
						else if(end == 16){
							station2[13]++;
						}
					}
				}
				else if(strt == 3){
					if(end >= 80){
						if(end == 80){
							station3[14]++;
						}
						else if(end == 84){
							station3[15]++;
						}
						else if(end == 88){
							station3[16]++;
						}
						else if(end == 89){
							station3[17]++;
						}
					}
					else{
						if(end == 2){
							station3[0]++;
						}
						else if(end == 4){
							station3[2]++;
						}
						else if(end == 5){
							station3[3]++;
						}
						else if(end == 6){
							station3[4]++;
						}
						else if(end == 7){
							station3[5]++;
						}
						else if(end == 8){
							station3[6]++;	
						}
						else if(end == 9){
							station3[7]++;
						}
						else if(end == 10){
							station3[8]++;
						}
						else if(end == 11){
							station3[9]++;
						}
						else if(end == 12){
							station3[10]++;
						}
						else if(end == 13){
							station3[11]++;
						}
						else if(end == 14){
							station3[12]++;
						}
						else if(end == 16){
							station3[13]++;
						}
					}
				}
				else if(strt == 4){
					if(end >= 80){
						if(end == 80){
							station4[14]++;
						}
						else if(end == 84){
							station4[15]++;
						}
						else if(end == 88){
							station4[16]++;
						}
						else if(end == 89){
							station4[17]++;
						}
					}
					else{
						if(end == 2){
							station4[0]++;
						}
						else if(end == 3){
							station4[1]++;
						}
						else if(end == 5){
							station4[3]++;
						}
						else if(end == 6){
							station4[4]++;
						}
						else if(end == 7){
							station4[5]++;
						}
						else if(end == 8){
							station4[6]++;	
						}
						else if(end == 9){
							station4[7]++;
						}
						else if(end == 10){
							station4[8]++;
						}
						else if(end == 11){
							station4[9]++;
						}
						else if(end == 12){
							station4[10]++;
						}
						else if(end == 13){
							station4[11]++;
						}
						else if(end == 14){
							station4[12]++;
						}
						else if(end == 16){
							station4[13]++;
						}
					}
				}
				else if(strt == 5){
					if(end >= 80){
						if(end == 80){
							station5[14]++;
						}
						else if(end == 84){
							station5[15]++;
						}
						else if(end == 88){
							station5[16]++;
						}
						else if(end == 89){
							station5[17]++;
						}
					}
					else{
						if(end == 2){
							station5[0]++;
						}
						else if(end == 3){
							station5[1]++;
						}
						else if(end == 4){
							station5[2]++;
						}
						else if(end == 6){
							station5[4]++;
						}
						else if(end == 7){
							station5[5]++;
						}
						else if(end == 8){
							station5[6]++;	
						}
						else if(end == 9){
							station5[7]++;
						}
						else if(end == 10){
							station5[8]++;
						}
						else if(end == 11){
							station5[9]++;
						}
						else if(end == 12){
							station5[10]++;
						}
						else if(end == 13){
							station5[11]++;
						}
						else if(end == 14){
							station5[12]++;
						}
						else if(end == 16){
							station5[13]++;
						}
					}
				}
				else if(strt == 6){
					if(end >= 80){
						if(end == 80){
							station6[14]++;
						}
						else if(end == 84){
							station6[15]++;
						}
						else if(end == 88){
							station6[16]++;
						}
						else if(end == 89){
							station6[17]++;
						}
					}
					else{
						if(end == 2){
							station6[0]++;
						}
						else if(end == 3){
							station6[1]++;
						}
						else if(end == 4){
							station6[2]++;
						}
						else if(end == 5){
							station6[3]++;
						}
						else if(end == 7){
							station6[5]++;
						}
						else if(end == 8){
							station6[6]++;	
						}
						else if(end == 9){
							station6[7]++;
						}
						else if(end == 10){
							station6[8]++;
						}
						else if(end == 11){
							station6[9]++;
						}
						else if(end == 12){
							station6[10]++;
						}
						else if(end == 13){
							station6[11]++;
						}
						else if(end == 14){
							station6[12]++;
						}
						else if(end == 16){
							station6[13]++;
						}
					}
				}
				else if(strt == 7){
					if(end >= 80){
						if(end == 80){
							station7[14]++;
						}
						else if(end == 84){
							station7[15]++;
						}
						else if(end == 88){
							station7[16]++;
						}
						else if(end == 89){
							station7[17]++;
						}
					}
					else{
						if(end == 2){
							station7[0]++;
						}
						else if(end == 3){
							station7[1]++;
						}
						else if(end == 4){
							station7[2]++;
						}
						else if(end == 5){
							station[3]++;
						}
						else if(end == 6){
							station7[4]++;
						}
						else if(end == 8){
							station7[6]++;	
						}
						else if(end == 9){
							station7[7]++;
						}
						else if(end == 10){
							station7[8]++;
						}
						else if(end == 11){
							station7[9]++;
						}
						else if(end == 12){
							station7[10]++;
						}
						else if(end == 13){
							station7[11]++;
						}
						else if(end == 14){
							station7[12]++;
						}
						else if(end == 16){
							station7[13]++;
						}
					}
				}
				else if(strt == 8){
					if(end >= 80){
						if(end == 80){
							station8[14]++;
						}
						else if(end == 84){
							station8[15]++;
						}
						else if(end == 88){
							station8[16]++;
						}
						else if(end == 89){
							station8[17]++;
						}
					}
					else{
						if(end == 2){
							station8[0]++;
						}
						else if(end == 3){
							station8[1]++;
						}
						else if(end == 4){
							station8[2]++;
						}
						else if(end == 5){
							station8[3]++;	
						}
						else if(end == 6){
							station8[4]++;
						}
						else if(end == 7){
							station8[5]++;
						}
						else if(end == 9){
							station8[7]++;
						}
						else if(end == 10){
							station8[8]++;
						}
						else if(end == 11){
							station8[9]++;
						}
						else if(end == 12){
							station8[10]++;
						}
						else if(end == 13){
							station8[11]++;
						}
						else if(end == 14){
							station8[12]++;
						}
						else if(end == 16){
							station8[13]++;
						}
					}
				}
				else if(strt == 9){
					if(end >= 80){
						if(end == 80){
							station9[14]++;
						}
						else if(end == 84){
							station9[15]++;
						}
						else if(end == 88){
							station9[16]++;
						}
						else if(end == 89){
							station9[17]++;
						}
					}
					else{
						if(end == 2){
							station9[0]++;
						}
						else if(end == 3){
							station9[1]++;
						}
						else if(end == 4){
							station9[2]++;
						}
						else if(end == 5){
							station9[3]++;
						}
						else if(end == 6){
							station9[4]++;
						}
						else if(end == 7){
							station9[5]++;
						}
						else if(end == 8){
							station9[6]++;	
						}
						else if(end == 10){
							station9[8]++;
						}
						else if(end == 11){
							station9[9]++;
						}
						else if(end == 12){
							station9[10]++;
						}
						else if(end == 13){
							station9[11]++;
						}
						else if(end == 14){
							station9[12]++;
						}
						else if(end == 16){
							station9[13]++;
						}
					}
				}
				else if(strt == 10){
					if(end >= 80){
						if(end == 80){
							station10[14]++;
						}
						else if(end == 84){
							station10[15]++;
						}
						else if(end == 88){
							station10[16]++;
						}
						else if(end == 89){
							station10[17]++;
						}
					}
					else{
						if(end == 2){
							station10[0]++;
						}
						else if(end == 3){
							station10[1]++;
						}
						else if(end == 4){
							station10[2]++;
						}
						else if(end == 5){
							station10[3]++;
						}
						else if(end == 6){
							station10[4]++;
						}
						else if(end == 7){
							station10[5]++;
						}
						else if(end == 8){
							station10[6]++;	
						}
						else if(end == 9){
							station10[7]++;
						}
						else if(end == 11){
							station10[9]++;
						}
						else if(end == 12){
							station10[10]++;
						}
						else if(end == 13){
							station10[11]++;
						}
						else if(end == 14){
							station10[12]++;
						}
						else if(end == 16){
							station10[13]++;
						}
					}
				}
				else if(strt == 11){
					if(end >= 80){
						if(end == 80){
							station11[14]++;
						}
						else if(end == 84){
							station11[15]++;
						}
						else if(end == 88){
							station11[16]++;
						}
						else if(end == 89){
							station11[17]++;
						}
					}
					else{
						if(end == 2){
							station11[0]++;
						}
						else if(end == 3){
							station11[1]++;
						}
						else if(end == 4){
							station11[2]++;
						}
						else if(end == 5){
							station11[3]++;
						}
						else if(end == 6){
							station11[4]++;
						}
						else if(end == 7){
							station11[5]++;
						}
						else if(end == 8){
							station11[6]++;	
						}
						else if(end == 9){
							station11[7]++;
						}
						else if(end == 10){
							station11[8]++;
						}
						else if(end == 12){
							station11[10]++;
						}
						else if(end == 13){
							station11[11]++;
						}
						else if(end == 14){
							station11[12]++;
						}
						else if(end == 16){
							station11[13]++;
						}
					}
				}
				else if(strt == 12){
					if(end >= 80){
						if(end == 80){
							station12[14]++;
						}
						else if(end == 84){
							station12[15]++;
						}
						else if(end == 88){
							station12[16]++;
						}
						else if(end == 89){
							station12[17]++;
						}
					}
					else{
						if(end == 2){
							station12[0]++;
						}
						else if(end == 3){
							station12[1]++;
						}
						else if(end == 4){
							station12[2]++;
						}
						else if(end == 5){
							station12[3]++;
						}
						else if(end == 6){
							station12[4]++;
						}
						else if(end == 7){
							station12[5]++;
						}
						else if(end == 8){
							station12[6]++;	
						}
						else if(end == 9){
							station12[7]++;
						}
						else if(end == 10){
							station12[8]++;
						}
						else if(end == 11){
							station12[9]++;
						}
						else if(end == 13){
							station12[11]++;
						}
						else if(end == 14){
							station12[12]++;
						}
						else if(end == 16){
							station12[13]++;
						}
					}
				}
				else if(strt == 13){
					if(end >= 80){
						if(end == 80){
							station13[14]++;
						}
						else if(end == 84){
							station13[15]++;
						}
						else if(end == 88){
							station13[16]++;
						}
						else if(end == 89){
							station13[17]++;
						}
					}
					else{
						if(end == 2){
							station13[0]++;
						}
						else if(end == 3){
							station13[1]++;
						}
						else if(end == 4){
							station13[2]++;
						}
						else if(end == 5){
							station13[3]++;
						}
						else if(end == 6){
							station13[4]++;
						}
						else if(end == 7){
							station13[5]++;
						}
						else if(end == 8){
							station13[6]++;	
						}
						else if(end == 9){
							station13[7]++;
						}
						else if(end == 10){
							station13[8]++;
						}
						else if(end == 11){
							station13[9]++;
						}
						else if(end == 12){
							station13[10]++;
						}
						else if(end == 14){
							station13[12]++;
						}
						else if(end == 16){
							station13[13]++;
						}
					}
				}
				else if(strt == 14){
					if(end >= 80){
						if(end == 80){
							station14[14]++;
						}
						else if(end == 84){
							station14[15]++;
						}
						else if(end == 88){
							station14[16]++;
						}
						else if(end == 89){
							station14[17]++;
						}
					}
					else{
						if(end == 2){
							station14[0]++;
						}
						else if(end == 3){
							station14[1]++;
						}
						else if(end == 4){
							station14[2]++;
						}
						else if(end == 5){
							station14[3]++;
						}
						else if(end == 6){
							station14[4]++;
						}
						else if(end == 7){
							station14[5]++;
						}
						else if(end == 8){
							station14[6]++;	
						}
						else if(end == 9){
							station14[7]++;
						}
						else if(end == 10){
							station14[8]++;
						}
						else if(end == 11){
							station14[9]++;
						}
						else if(end == 12){
							station14[10]++;
						}
						else if(end == 13){
							station14[11]++;
						}
						else if(end == 16){
							station14[13]++;
						}
					}
				}
				else if(strt == 16){
					if(end >= 80){
						if(end == 80){
							station16[14]++;
						}
						else if(end == 84){
							station16[15]++;
						}
						else if(end == 88){
							station16[16]++;
						}
						else if(end == 89){
							station16[17]++;
						}
					}
					else{
						if(end == 2){
							station16[0]++;
						}
						else if(end == 3){
							station16[1]++;
						}
						else if(end == 4){
							station16[2]++;
						}
						else if(end == 5){
							station16[3]++;
						}
						else if(end == 6){
							station16[4]++;
						}
						else if(end == 7){
							station16[5]++;
						}
						else if(end == 8){
							station16[6]++;	
						}
						else if(end == 9){
							station16[7]++;
						}
						else if(end == 10){
							station16[8]++;
						}
						else if(end == 11){
							station16[9]++;
						}
						else if(end == 12){
							station16[10]++;
						}
						else if(end == 13){
							station16[11]++;
						}
						else if(end == 14){
							station16[12]++;
						}
					}
				}
			}			
		})
console.log("2: " + station2);
console.log("3: " + station3);
console.log("4: " + station4);
console.log("5: " + station5);
console.log("6: " + station6);
console.log("7: " + station7);
console.log("8: " + station8);
console.log("9: " + station9);
console.log("10: " + station10);
console.log("11: " + station11);
console.log("12: " + station12);
console.log("13: " + station13);
console.log("14: " + station14);
console.log("16: " + station16);
console.log("80: "  + station80);
console.log("84: " + station84);
console.log("88: " + station88);
console.log("89: " + station89);
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
console.log("station 2:" + sum2);
console.log("station 3:" + sum3);
console.log("station 4:" + sum4);
console.log("station 5:" + sum5);
console.log("station 6:" + sum6);
console.log("station 7:" + sum7);
console.log("station 8:" + sum8);
console.log("station 9:" + sum9);
console.log("station 10:" + sum10);
console.log("station 11:" + sum11);
console.log("station 12:" + sum12);
console.log("station 13:" + sum13);
console.log("station 14:" + sum14);
console.log("station 16:" + sum16);
console.log("station 80:" + sum80);
console.log("station 84:" + sum84);
console.log("station 88:" + sum88);
console.log("station 89:" + sum89);

		svg.append("circle")
			.attr("cx", 500)
			.attr("cy", 250)
			.attr("r", sum80/5)
			.style("fill", "purple");
		svg.append("circle")
			.attr("cx", 700)
			.attr("cy", 250)
			.attr("r", sum84/5)
			.style("fill", "red");
		svg.append("circle")
			.attr("cx", 300)
			.attr("cy", 250)
			.attr("r", sum88)
			.style("fill", "blue");
		svg.append("circle")
			.attr("cx", 500)
			.attr("cy", 350)
			.attr("r", sum89)
			.style("fill", "green");
		svg.append("line")
			.attr("x1", 527)
			.attr("y1", 250)
			.attr("x2", 686)
			.attr("y2", 250)
			.attr("stroke-width", station80[15]/5)
			.attr("stroke", "gray")
			.attr("fill", "black"); 
		svg.append("line")
			.attr("x1", 472)
			.attr("y1", 250)
			.attr("x2", 305)
			.attr("y2", 250)
			.attr("stroke-width", station80[16])
			.attr("stroke", "gray")
			.attr("fill", "black"); 
		svg.append("line")
			.attr("x1", 500)
			.attr("y1", 278)
			.attr("x2", 500)
			.attr("y2", 347)
			.attr("stroke-width", station80[17])
			.attr("stroke", "gray")
			.attr("fill", "black"); 				
	})
}
v1();