/* Begin by adding your on ready handler here, and then create the
   rest of your functions inside the on ready handler.

   (Note that you do not need to manually call Bootstrap functions in
   your Javascript because Bootstrap will automatically recognize your
   HTML structures and invoke the proper JS code accordingly. Be sure
   to reference the Bootstrap documentation.)
*/
$(document).ready(function(){
     $(function(){

        $('.carousel-control').click(function(e){
            e.preventDefault();
            $('#carousel-images').carousel( $(this).data() );
        });

    });
	
var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
    subdomains: ['otile1','otile2','otile3','otile4']
});

var tileUrl = 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png';
var tmAttrib='Map data © <a href="http://www.thunderforest.com/">Thunderforest</a> contributors';
var thunderLayer = new L.TileLayer(tileUrl, {maxZoom: 18}

);
var thUrl =	'https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png';
var tmAtt='Map data © <a href="http://www.thunderforest.com/">Thunderforest</a> contributors';
var thunderLayer2 = new L.TileLayer(thUrl, {maxZoom: 18}
);

var mapLayers = {
    "Satellite": satLayer,
    "Open Street Maps": osm,
	"Outdoors": thunderLayer,
	"Elevation Map": thunderLayer2
};
//creating a variable for all 3 map layers you defined. 
var map = L.map('map-container').setView([46.852, -121.760], 14);
//adding map

L.control.layers(mapLayers).addTo(map);
thunderLayer2.addTo(map);
//one by one adding layers or add all at once, as shown above

	var starIcon = L.icon({
    iconUrl: 'star.png',
    shadowUrl: 'starshadow.png',

    iconSize:     [38, 40], // size of the icon
    shadowSize:   [33, 33], // size of the shadow
    iconAnchor:   [22, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 33],  // the same for the shadow
    popupAnchor:  [-3, -60] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([46.8529132,-121.777884],{icon: starIcon}).addTo(map);
marker.bindPopup("<b>Columbia Crest</b><br>This peak is at 14,411 feet, the highest summit on Mt. Rainier!");
//adding markers to the map 
var marker2 = L.marker([46.8459687,-121.7851063],{icon: starIcon}).addTo(map);
marker2.bindPopup("<b>Point Success</b><br>The second highest summit is at 14,158 ft");
	
var marker3 = L.marker([46.8629493,-121.7923346], {icon: starIcon}).addTo(map);
marker3.bindPopup("<b>Liberty Cap</b><br>The third highest summit is at 14,112 ft");
	
var marker4 = L.marker([46.85280,-121.75900], {icon: starIcon}).addTo(map);
marker4.bindPopup("<b>Gibralter Ledges starting point</b><br>Most popular climb up Mt. Rainier. It takes two days to complete!");
	
var marker5 = L.marker([46.8487467,-121.7564942], {icon: starIcon}).addTo(map);
marker5.bindPopup("<b>Dissapointment Cleaver Climbing Route</b><br>Climbers need to be aware of avalanche rescue, crevasse rescue, and general upper mountain climbing in severe conditions!");

	
var polygon = L.polygon([
    [46.8459687,-121.7851063],
    [46.8629493,-121.7923346],
    [46.8529132,-121.777884]
]).addTo(map);
polygon.bindPopup("Three Highest Peaks at Mt. Rainier are separated by a large crater. The most standard routes actually bring you to the crater rim at 14,150 feet.");

polygon.setStyle({fillColor: '#009900', color: '#008000'});
	
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
});


// TODO: Inside of your on ready handler, invoke the Leaflet.js library
// to draw a map in your `#map-container` div.

// TODO: Add 2 layers to your map you have visuals. Use the Open Street Maps
// tiles served through the MapQuest CDN. Consult this example to set up
// the map tiles layers:


// TODO: Customize that Map to show markers with popups at no fewer than 3
// interesting locations. (You'll need to figure out the latitude/longitude for
// these locations using a mapping tool such as Google Maps.)

