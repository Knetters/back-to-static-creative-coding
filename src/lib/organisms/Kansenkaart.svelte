<script>
    import { onMount } from 'svelte';
    import MapMenu from '../molecules/MapMenu.svelte';
    import proj4 from 'proj4';
    import MapAside from '../molecules/MapAside.svelte';
  
    onMount(() => {

        // Setting up map
        var map = L.map('map', {
            center: [52.360956, 4.8964073],
            zoom: 10,
            minZoom: 8
        });

        // Leaflet map theme
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',).addTo(map);

        var kansIcon = L.icon({
            iconUrl: '/assets/star-svgrepo-com.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
        });

        // Reference to the info panel and its content area
        const infoPanel = document.getElementById('infoPanel');
        const infoContent = document.getElementById('infoContent');

        const infoTitle = document.getElementById('infoTitle');

        const value0 = document.getElementById('value0');
        const value1 = document.getElementById('value1');
        const value2 = document.getElementById('value2');
        const value3 = document.getElementById('value3');
        const value4 = document.getElementById('value4');
        const value5 = document.getElementById('value5');
        const value6 = document.getElementById('value6');
        const value7 = document.getElementById('value7');

        document.getElementById('hide').addEventListener("click", hideInfo);

        function hideInfo() {
            infoPanel.style.display = "none";
        }

        // Fetching data and working with markers
        fetch('https://raw.githubusercontent.com/Knetters/FDND-ComponentLibrary/main/static/data/Bodem_Bunnik.geojson')
            .then(response => response.json())
            .then(data => {
                // Reference to the info panel and its content area
                const infoPanel = document.getElementById('infoPanel');
                const infoContent = document.getElementById('infoContent');

                // Function to update the panel content based on marker data
                function updateInfoPanel(feature) {
                    infoTitle.innerHTML = `${feature.properties.Naam}`;

                    // value0.innerHTML = `${feature.properties.Naam}`;
                    // value1.innerHTML = `${feature.properties.Naam}`;
                    // value2.innerHTML = `${feature.properties.Naam}`;
                    // value3.innerHTML = `${feature.properties.Naam}`;
                    // value4.innerHTML = `${feature.properties.Naam}`;
                    // value5.innerHTML = `${feature.properties.Naam}`;
                    // value6.innerHTML = `${feature.properties.Naam}`;
                    // value7.innerHTML = `${feature.properties.Naam}`;
                }

                // Looping through the features
                data.features.forEach(feature => {
                    // Extracting coordinates
                    const coordinates = feature.geometry.coordinates;

                    // Define the projection definitions for RD coordinates and WGS84 (latitude/longitude)
                    const rdProjection = '+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +no_defs';
                    const wgs84Projection = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';

                    // Define the initial RD coordinates
                    const rdCoordinates = [coordinates[0], coordinates[1]];

                    // Perform the conversion from RD to WGS84
                    const convertedCoordinates = proj4(rdProjection, wgs84Projection, rdCoordinates);

                    // Extract latitude and longitude values
                    const [longitude, latitude] = convertedCoordinates;

                    // Create a marker
                    const marker = L.marker([latitude, longitude], {
                        icon: kansIcon 
                    }).addTo(map);

                    // Event listener for marker click
                    marker.on('click', function () {
                        // Update the info panel content when a marker is clicked
                        updateInfoPanel(feature);
                        infoPanel.style.display = "block"
                    });
                });
            })
            .catch(error => {
                console.log('Error fetching data:', error);
            });

            // Get all list items
            const menuItems = document.querySelectorAll('#menu-list li');
        
            menuItems.forEach(item => {
                item.addEventListener('click', function() {
                    menuItems.forEach(item => {
                        item.classList.remove('active');
                    });

                    this.classList.add('active');

                    const location = this.getAttribute('data-location');
                    
                    if (location === 'amsterdam') {
                        // Change the map view for Utrecht
                        map.setView([52.3547418, 4.8215606], 12);
                    }

                    if (location === 'den-haag') {
                        // Change the map view for Utrecht
                        map.setView([52.071731, 4.2274685], 12);
                    }

                    if (location === 'rotterdam') {
                        // Change the map view for Utrecht
                        map.setView([51.9280632, 4.4084283], 12);
                    }

                    if (location === 'utrecht') {
                        // Change the map view for Utrecht
                        map.setView([52.0784901, 5.1140772], 12);
                    }
                    
                });
            });

    }); 
</script>

<section id="map">
    <MapMenu />
    <MapAside />
</section>
  
<style>
    section {
        height: 100vh;
        width: 100vw;
        position: absolute;
    }
</style>