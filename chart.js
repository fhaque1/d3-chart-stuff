var dyn = d3.select("#dynamic");
var data_2009 = ["+ 2.1 T", "+ 3.52 T", "- 1.41 T", "- 9.8 %", "+ 14.4 T"];
var data_2016 = ["+ 2.99 T", "+ 3.54 T", "- 552 B", "- 3.3 %", "+ 16.5 T"];


var makeBars = function(info) {
    dyn.selectAll("div")
	.data(info)
	.enter()
	.append("div")
	.style("width", function(d) {
	    var width = d.split(" ")[1];
	    var scale = d.split(" ")[2];
	    if(scale == "T"){
		return width * 100+ "px";
	    }
	    return width  + "px";
	})
	.text( function(d) {
	    var dat = d.split(" ");
	    return dat[1] + dat[2];
	})
	.style("background-color", function(d) { 
	    var sign = d.split(" ")[0];
	    if (sign == "-"){
		return "red"
	    } 
	    return "green";
	});
};

var transitionTest = function(info) {
    dyn.selectAll("div")
	.data(info)
	.transition()
	.duration(2000)
	.style("width", function(d) {
	    var width = d.split(" ")[1];
	    var scale = d.split(" ")[2];
	    if(scale == "T"){
		return width * 25+ "px";
	    }
	    if(scale == "B"){
		return width / 25 + "px";
	    }
	    return width * 10 + "px";
	    
	})
	.text( function(d) {
	    var dat = d.split(" ");
	    return dat[1] + dat[2];
	});
};

var oNine = function(){
    makeBars(data_2009);
    transitionTest(data_2009);
};

var sixTeen = function(){
    makeBars(data_2016);
    transitionTest(data_2016);
};
	 

var c09 = document.getElementById("2009");
c09.addEventListener("click", oNine);
var c16 = document.getElementById("2016");
c16.addEventListener("click", sixTeen);
