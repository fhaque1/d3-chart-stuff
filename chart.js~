var dyn = d3.select("#dynamic");
var data_2009 = [2.1, 3.52, -1.41, -9.8, 14.4];
var data_2016 = [2.99, 3.54, -552, -3.3, 16.5];


var makeBars = function(info) {
    dyn.selectAll("div")
	.data(info)
	.enter()
	.append("div")
	.style("width", function(d) {
		if (d < 0){
			return d * -10 + "px";
		}	
	    return d * 10+ "px";
	})
	.text( function(d) {
		if (d < 0){
			return d * -1 + "";
		}	
	    return d;
	})
	.style("background-color", function(d) { 
							if (d<0){
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
	    return d * 10 + "px";
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
