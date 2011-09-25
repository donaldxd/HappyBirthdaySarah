// presents "data" file. A present is a JSON object with the following parameters
// -- title (required): 	displayed in the circle in the main page, can be arbitrary HTML
// -- payload (required): 	the part of the present that will get loaded into the viewer, arbitrary HTML
// -- id (optional): 		an HTML id that will get set on the outer div of the present, so later customizations can be done
// -- callback (optional): 	a function that will get called as the present is being loaded. Must take no arguments
//	if you need arguments, wrap the function with an anonymous function


function YoutubeString(videoId, offset) {
	offset = offset ? offset : 0;
	
	return "<object width='425' height='344'><param name='movie' value='http://www.youtube.com/v/" + videoId + "&hl=en&fs=1&autoplay=1&showinfo=0&rel=0&start=" + offset + "'></param><param name='allowFullScreen' value='true'></param><param name='allowscriptaccess' value='always'></param><embed src='http://www.youtube.com/v/" + videoId + "&hl=en&fs=1&autoplay=1&showinfo=0&rel=0&start=" + offset + "' type='application/x-shockwave-flash' allowscriptaccess='always' allowfullscreen='true' width='425' height='344'></embed></object>";
}

function Mp3String(mp3) {
	return "<object width='300' height='30'><param name='src' value='" + mp3 + "'/><param name='autoplay' value='true' /><embed type='audio/mpeg' src='" + mp3 + "' width='300' height='18' autostart='true' loop='false' /></object>";
}

var presents = [
{ 	
	title: "Stop it, sir! Don't play it again I said!", 
	id: "katt",
	payload: YoutubeString("kLDitGAUrno")
},
{
	title: "<img class='blackBorder' src='hotpockets.jpg' width='90px' height='90px' />",
	payload: YoutubeString("J9c9lAfXQHs")
},
{
	title: "<img class='blackBorder' src='loris.jpg' width='90px' height='90px' />",
	payload: YoutubeString("rLdQ3UhLoD4")
},
{
	title: "Where it's at", 
	id: "map",
	payload: "<div id='denver_map' style='width:500px;height:300px' />",
	callback: InitMap
},
{
	title: "to trip to trip te trip trip",
	payload: YoutubeString("mPt0sjn0jSw", 57)
},
{
	title: "Splish splash, me and you, takin' a bath",
	payload: Mp3String("liog.mp3")
},
{
	title: "Hey! I don't do this to your shower at least!",
	payload: "<img src='mike.jpg' alt='mike rowe' width='400px' height='299px' />"
},
{
	title: "<img class='blackBorder' src='gorgeThumb.jpg' alt='gorge poster' width='90px' height='110px' />",
	payload: "<img src='usGorge.jpg' alt='us at the gorge' width='280px' height='373px' />"
},
{
	title: "Beautiful woman, so sexy, come shake that bottom over to me",
	payload: Mp3String("groovin.mp3")
},
{
	title: "LADY!", 
	payload: "<div style='width:300px;height:500px;font-size:2em;font-weight:bold'>HEY LADY! ITS YOUR BIRFDAY! I MITE LET YOU USE MY BLANKET TODAY!<br/><img class='whiteBorder' src='schoeff.jpg' alt='schoeff on blanket' /><br/>BUT PROBLY NOT!</div>"
},
{
	title: "<img src='tf2Plate.png' alt='tf2 plate' />",
	payload: "<img src='sarahSpoon.jpg' alt='Sarah with spoon holder' width='340px' height='453px' />"
},
{
	title: "Livin' in a fishbowl",
	payload: YoutubeString("jWkC6RHxR0E", 0)
},
{
	title: "Subway Dancin'",
	payload: YoutubeString("VQ3d3KigPQM", 15)
},
{
	title: "<img src='pumpkinThumb.png' alt='pumpkin' />",
	payload: "<img src='pumpkins.jpg' alt='halloween pumpkins' width='400px' height='300px'/>"
},
{
	title: "Down with daffidulls",
	payload: "<img src='tulips.jpg' alt='tulips' width='300px' height='400px' />"
}
	];
	
	///////// CALLBACKS //////////////
	// These methods are defined in the above presents variable in the "callbacks" label
	// These are called as the present is being loaded into the viewer

	function InitMap() {
		if (GBrowserIsCompatible()) {
			var map = new GMap2(document.getElementById("denver_map"));
			// center on a decent place in Denver
			map.setCenter(new GLatLng(39.75, -105), 13);
			map.setUIToDefault();
		}
	}
	