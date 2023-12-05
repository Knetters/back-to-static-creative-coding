<script>
  export let data;
  // console.log(data)

  import { onMount } from 'svelte';

  // Write client side JavaScript inside here
  onMount(() => {

    // Setting up map
    var map = L.map('map', {
      center: [52.360956, 4.8964073],
      zoom: 10,
      minZoom: 10
    });

    // Define a custom icon
    var waterIcon = L.icon({
        iconUrl: '/assets/water-svgrepo-com.png', // Path to your custom PNG marker image
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Anchor point of the icon (center bottom)
      });

      // Define a custom icon
      var climateIcon = L.icon({
        iconUrl: '/assets/cloud-svgrepo-com.png', // Path to your custom PNG marker image
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Anchor point of the icon (center bottom)
      });

      // Define a custom icon
      var brainIcon = L.icon({
        iconUrl: '/assets/bolt-svgrepo-com.png', // Path to your custom PNG marker image
        iconSize: [32, 32], // Size of the icon
        iconAnchor: [16, 32], // Anchor point of the icon (center bottom)
      });

    // Leaflet map theme
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',).addTo(map);

    // Loop through projecten
    data.projectens.forEach((project, index) => {

      if(project.categorie == "Klimaatadaptatie") {
        // Create a marker with the custom icon
        var marker = L.marker([project.plaats.latitude, project.plaats.longitude], {
          icon: waterIcon // Assign the custom icon to the marker
        }).addTo(map);
      }

      if(project.categorie == "Waterkwaliteit") {
        // Create a marker with the custom icon
        var marker = L.marker([project.plaats.latitude, project.plaats.longitude], {
          icon: climateIcon // Assign the custom icon to the marker
        }).addTo(map);
      }

      if(project.categorie == "B-rain") {
        // Create a marker with the custom icon
        var marker = L.marker([project.plaats.latitude, project.plaats.longitude], {
          icon: brainIcon // Assign the custom icon to the marker
        }).addTo(map);
      }

      // Add a hover event
      document.getElementById(project.slug).addEventListener('mouseover', function () {
        map.setView([project.plaats.latitude, project.plaats.longitude], 12);
      });
    });

    // Get the search input element
    const searchInput = document.getElementById('projectSearch');

    // Get all the <li> elements within the project list
    const projectItems = document.querySelectorAll('#desktopFilterMe li');

    // Get the message element
    const noResultsMessage = document.getElementById('noResultsMessage');

    // Add an event listener for input changes
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        let hasResults = false;

        // Loop through each <li> element
        projectItems.forEach(function(item) {
            const titleElement = item.querySelector('h3');
            const title = titleElement.textContent.toLowerCase();

            // Check if the search term matches the title of the project
            if (title.includes(searchTerm)) {
                item.style.display = 'block'; // Show the matching project
                hasResults = true;
            } else {
                item.style.display = 'none'; // Hide non-matching projects
            }
        });

        // Show/hide no results message
        if (hasResults) {
            noResultsMessage.style.display = 'none';
        } else {
            noResultsMessage.style.display = 'block';
        }
    });


    // Mobile filter

    // Get the search input element
    const mobileSearchInput = document.getElementById('mobileProjectSearch');

    // Get all the <li> elements within the project list
    const mobileProjectItems = document.querySelectorAll('#mobileFilterMe li');

    // Get the message element
    const mobileNoResultsMessage = document.getElementById('mobilenoResultsMessage');

    // Add an event listener for input changes
    mobileSearchInput.addEventListener('input', function() {
        const searchTerm = mobileSearchInput.value.toLowerCase();
        let hasResults = false;

        // Loop through each <li> element
          mobileProjectItems.forEach(function(item) {
            const titleElement = item.querySelector('h3');
            const title = titleElement.textContent.toLowerCase();

            // Check if the search term matches the title of the project
            if (title.includes(searchTerm)) {
                item.style.display = 'block'; // Show the matching project
                hasResults = true;
            } else {
                item.style.display = 'none'; // Hide non-matching projects
            }
        });

        // Show/hide no results message
        if (hasResults) {
          mobileNoResultsMessage.style.display = 'none';
        } else {
          mobileNoResultsMessage.style.display = 'block';
        }
    });

  });

</script>

<section>
  <!-- Mobile filter lijst -->
  <div class="mobile-project-header">
    <h2>Projecten</h2>
    <ul class="filter-item-list" id="filterList-mobile">      
      <li class="active">Alles</li>
      <li>Klimaatadaptatie</li>
      <li>Waterkwaliteit</li>
      <li>B-RAIN</li>
    </ul>
    <input class="searchbar" type="search" id="mobileProjectSearch" name="search" placeholder="Zoek een project"/>
  </div>

  <!-- Desktop filter lijst -->
  <div class="project-view-container">
    <article class="projects">
      <div class="set-max-height">
        <span class="anchor" id="projecten"></span>
        <div class="filter-row">
          <h2>Projecten</h2>
          <ul class="filter-item-list" id="filterList">
            <li class="active">Alles</li>
            <li>Klimaatadaptatie</li>
            <li>Waterkwaliteit</li>
            <li>B-RAIN</li>
          </ul>
          <input class="searchbar" type="search" id="projectSearch" name="search" placeholder="Zoek een project"/>
        </div>
  
        <div class="project-list-container">
          <ul class="project-list" id="desktopFilterMe">
            <!-- Loop voor de desktop versie -->
            {#each data.projectens as project }
                <a href="/projecten/{project.slug}">
                  <li id="{project.slug}">
                    <div class="horizontal-flex">
                      <img src="{project.image.url}" alt="">
                      <div class="project-text">
                        <span>{project.categorie}</span>
                        <h3>{project.title}</h3>
                        <p>{project.intro}</p>
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                      </div>
                    </div>
                  </li>
                </a>
            {/each}
          </ul>
          <p id="noResultsMessage" style="display: none;">Geen resultaten gevonden.</p>
        </div>
      </div>

    </article>
    <div class="mobile-porject-list">
      <ul id="mobileFilterMe">
        <!-- Loop voor de mobile versie -->
        {#each data.projectens as project }
          <a href="/projecten/{project.slug}">
            <li id="{project.categorie}-mobile">
              <div class="horizontal-flex">
                <img src="{project.image.url}" alt="">
                <div class="project-text">
                  <span>{project.categorie}</span>
                  <h3>{project.title}</h3>
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
            </li>
          </a>
        {/each}
      </ul>
      <p id="mobilenoResultsMessage" style="display: none;">Geen resultaten gevonden.</p>
    </div>
    <article class="project-map">
      <div id="map"></div>
    </article>
    
  </div>
</section>

<style>

  /* Styling main elements */
  h2 {
    padding: 0rem;
    color: var(--spat);
  }

  .anchor {
    display: block;
    position: relative;
    top: -100px;
    visibility: hidden;
  }

  section {
    margin-top: 5rem;
    height: 95vh;
    background: white;
  }

  a {
    text-decoration: none;
  }

  .mobile-project-header {
    display: none;
  }

  .project-view-container {
    display: flex;
    gap: 1rem;
    padding: 0rem 2.5rem;
    /* width: 70%;
    margin-left: 15%; */
  }

  .projects {
    width: 40%;
    display: flex;
    flex-direction: column;
    height: 85vh;
    gap: 1rem;
  }

  /* Styling of filter options */
  .filter-row {
    height: 20vh;
  }

  .filter-item-list {
    list-style: none;
    padding: 0;
    display: flex;
    margin: 2rem 0rem 1rem 0rem;
    color: var(--darkblue);
  }

  .filter-item-list li {
    margin-right: 1.5rem;
    padding: .2rem .6rem;
    cursor: pointer;
    font-size: .8rem;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  .active {
    background-color: var(--green);
    color: #FFFFFF;
    border-radius: .5rem;
  }

  .searchbar {
    width: 99%;
    padding: .5rem .6rem;
    border-radius: .5rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
  }

  .searchbar::placeholder {
    color: #B7B7B7;
  }

  /* Styling of project list */
  .project-list-container {
    height: 65vh;
    overflow-y: scroll;
  }

  .project-list-container::-webkit-scrollbar{
    display: none;
  }

  .project-list {
    list-style: none;
    padding: 0;
    width: 100%;
  }

  .project-list li {
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    border-radius: .5rem;
    cursor: pointer;
    margin-bottom: 1rem;
    width: 99%;
  }

  .project-list .horizontal-flex {
    display: flex;
  }

  .project-list img {
    width: 25%;
    aspect-ratio: 1;
    object-fit: cover;
    padding: 0;
    margin: 0;
    border-radius: .5rem 0rem 0rem .5rem;
  }

  .project-list .project-text {
    padding: .5rem 1rem;
    position: relative;
  }

  .project-list span {
    color: var(--darkblue);
    font-weight: 600;
    font-size: .9rem;
  }

  .project-list h3 {
    color: var(--spat);
    margin-bottom: .5rem;
  }

  .project-list p {
    color: var(--darkblue);
    font-size: .8rem;
    margin-bottom: .5rem;
    line-height: 1.2rem;
  }

  .project-list i {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: .6rem 1.2rem;
    color: var(--green);
    transition: .2s;
  }

  .project-list li:hover i {
    transform: translateX(.5rem);
  }

  .project-map {
    width: 60%;
  }

  #map {
    height: 85vh;
    pointer-events: none;
    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
  }

  .mobile-porject-list {
    display: none;
  }

  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    section {
      height: 95vh;
    }

    #map {
      height: 65vh;
      pointer-events: none;
    }

    .project-view-container {
      display: block;
    }

    .projects {
      display: none;
    }

    .project-map {
      width: 100%;
    }

    /* Styling mobile view of projects inside map */
    .mobile-porject-list {
      height: 16vh;
      width: 100%;
      display: block;
    }

    .mobile-porject-list ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      width: 100%;
      gap: 1rem;
    }

    .mobile-porject-list ul::-webkit-scrollbar{
      display: none;
    }

    .mobile-porject-list li {
      width: 16rem;
      background: var(--lg-bg);
      box-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
      border-radius: .5rem;
      margin-bottom: .5rem;
      position: relative;
    }

    .mobile-porject-list img {
      width: 4rem;
      height: 6rem;
      object-fit: cover;
      border-radius: .5rem 0rem 0rem .5rem;
    }

    .horizontal-flex {
      display: flex;
    }

    .project-text {
      padding: .5rem;
    }

    .mobile-porject-list span {
      color: var(--darkblue);
      font-weight: 600;
      font-size: .7rem;
    }

    .mobile-porject-list h3 {
      color: var(--spat);
      font-size: 1rem;
      line-height: 1.2rem;
      margin-bottom: .5rem;
    }

    .mobile-project-header {
      display: block;
      padding: 0rem 0rem 1rem 2.5rem;
    }

    /* Remove the scrollbar from mobile view */
    .mobile-project-header .searchbar {
      width: calc(100% - 2.5rem);
    }

    .filter-item-list li {
      margin-right: .1rem;
      padding: .2rem .6rem;
      cursor: pointer;
      font-size: .7rem;
      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */
    }

    i {
      position: absolute;
      right: 0;
      bottom: 0;
      padding: .6rem 1.2rem;
      color: var(--green);
    }
}
</style>
