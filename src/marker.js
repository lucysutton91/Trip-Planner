const mapbox = require("mapbox-gl");


function markerMaker(type, cArray){
	let mark = document.createElement("div");
	mark.style.width = "32px";
	mark.style.height = "39px";
	if(type === "activity") mark.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
	if (type === "hotel") mark.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
	if (type === "restaurant")mark.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
	const marker = new mapbox.Marker(mark).setLngLat(cArray);
	return marker;
}

module.exports = markerMaker;

