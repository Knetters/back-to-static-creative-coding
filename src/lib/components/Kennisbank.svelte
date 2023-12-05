<script>
  export let data;

  // Get the last post from the array

  let lastPost1 = data.kennisbanks[data.kennisbanks.length - 1];
  let lastPost2 = data.kennisbanks[data.kennisbanks.length - 2];
  let lastPost3 = data.kennisbanks[data.kennisbanks.length - 3];

  import { onMount } from "svelte";

  onMount(() => {
    // Add a click event listener to the list items to toggle the "active" class

    var listItems = document.querySelectorAll("#filterList li");

    listItems.forEach(function (item) {
      item.addEventListener("click", function () {
        // Remove the "active" class from all list items

        listItems.forEach(function (li) {
          li.classList.remove("active");
        });

        // Add the "active" class to the clicked list item

        this.classList.add("active");
      });
    });
  });
</script>

<section>
  <div class="filter-container">
    <h2 id="kennisbank">Kennisbank</h2>

    <div class="mobile-blog-header">
      <ul class="filter-item-list" id="filterList-mobile">
        <li class="active">Alles</li>
        <li>Klimaatadaptatie</li>
        <li>Waterkwaliteit</li>
        <li>B-RAIN</li>
      </ul>

      <input
        class="searchbar"
        type="search"
        id="search"
        name="search"
        placeholder="Zoek een project"
      />
    </div>

    <div class="filter-row">
      <div class="filter-list-container">
        <ul class="filter-item-list" id="filterList">
          <li class="active">Alles</li>
          <li>Klimaatadaptatie</li>
          <li>Waterkwaliteit</li>
          <li>B-RAIN</li>
        </ul>
      </div>

      <div class="searchbar-container">
        <input
          class="searchbar"
          type="search"
          id="search"
          name="search"
          placeholder="Zoek een post"
        />
      </div>
    </div>
  </div>

  <div class="blog-view-container">
    <div class="latest">
      <article class="main-post">
        {#if data.kennisbanks.length > 0}
          <img src={lastPost1.image.url} alt="" />

          <div class="content-field">
            <span class="category">{lastPost1.categorie}</span>
            <span class="author"
              >Door {lastPost1.author} op {lastPost1.date}</span
            >
            <h3>{lastPost1.title}</h3>
            <div class="hygraph-html">
              {@html lastPost1.content.html}
            </div>

            <div class="read-more-container">
              <a class="read-more-link" href="/post/{lastPost1.slug}"
                >Verder lezen</a
              >
            </div>
          </div>
        {/if}
      </article>
    </div>

    <div class="blog2">
      <article class="main-post2">
        {#if data.kennisbanks.length > 0}
          <img src={lastPost2.image.url} alt="" />

          <div class="content-field2">
            <span class="category2">{lastPost2.categorie}</span>
            <span class="author2"
              >Door {lastPost2.author} op {lastPost2.date}</span
            >
          </div>

          <h3>{lastPost2.title}</h3>

          <div class="hygraph-html2">
            {@html lastPost2.content.html}
          </div>

          <div class="read-more-container2">
            <a class="read-more-link2" href="/post/{lastPost2.slug}"
              >Verder lezen</a
            >
          </div>
        {/if}
      </article>
    </div>

    <div class="blog3">
      <article class="main-post3">
        {#if data.kennisbanks.length > 0}
          <img src={lastPost3.image.url} alt="" />

          <div class="content-field3">
            <span class="category3">{lastPost3.categorie}</span>

            <span class="author3"
              >Door {lastPost3.author} op {lastPost3.date}</span
            >
          </div>

          <h3>{lastPost3.title}</h3>

          <div class="hygraph-html3">
            {@html lastPost3.content.html}
          </div>

          <div class="read-more-container3">
            <a class="read-more-link3" href="/post/{lastPost3.slug}"
              >Verder lezen</a
            >
          </div>
        {/if}
      </article>
    </div>

    <div class="bloglist">
      <article class="blog">
        <div class="set-max-height">
          <div class="blog-list-container">
            <ul class="blog-list">
              {#each data.kennisbanks as post}
                <a href="/post/{post.slug}">
                  <li id={post.slug}>
                    <img src={post.image.url} alt="" />

                    <div class="blog-text">
                      <div class="blog-info-row">
                        <span class="category">{post.categorie}</span>

                        <span class="author"
                          >Door {post.author} op {post.date}</span
                        >
                      </div>

                      <h3>{post.title}</h3>

                      <p class="intro-text">
                        Het is tijd om Nederlanders bewust te maken van de
                        hoeveelheid regenwater op- en rondom het huis. Onze
                        oplossing is het grootschalig inzetten
                        vanmicro-maatregelen.
                      </p>

                      <a class="read-more-small" href="/post/{post.slug}">
                        <i class="fa fa-arrow-right" aria-hidden="true" /></a
                      >
                    </div>
                  </li>
                </a>
              {/each}
            </ul>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

<style>
  /* Styling main elements */

  h2 {
    padding-top: 2rem;
    color: var(--spat);
  }

  section {
    margin-top: 5rem;
    height: 100%;
    padding-bottom: 5rem;
    background: var(--lg-bg);
  }

  .mobile-blog-header {
    display: none;
  }

  .intro-text {
    display: none;
  }

  a {
    text-decoration: none;
  }

  .blog-view-container {
    display: grid;
    padding: 0.7rem 2.5rem;
    grid-template-columns: 0.9fr 0.9fr 1fr;
    grid-template-rows: 0.1fr 1fr;
    gap: 2rem;
    row-gap: 1rem;
    grid-template-areas:
      "latest latest bloglist"
      "blog2 blog3 bloglist";
  }

  .latest {
    grid-area: latest;
  }

  .blog2 {
    background-color: #ffffff;
    height: 25rem;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    border-radius: 0.5rem;
    cursor: pointer;
    grid-area: blog2;
  }

  .blog3 {
    height: 25rem;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    border-radius: 0.5rem;
    cursor: pointer;
    grid-area: blog3;
  }

  .bloglist {
    grid-area: bloglist;
  }

  .blog {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 85vh;
    gap: 1rem;
  }

  .filter-container {
    gap: 1rem;
    padding: 0rem 2.7rem 0rem 2.5rem;
  }

  .hygraph-html {
    max-width: 29rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* number of lines to show */
    line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  .hygraph-html2 {
    max-width: 25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 4;
    -webkit-box-orient: vertical;
    padding-left: 1.5rem;
  }

  .hygraph-html3 {
    max-width: 25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; /* number of lines to show */
    line-clamp: 4;
    -webkit-box-orient: vertical;
    padding-left: 1.5rem;
  }

  .content-field2,
  .content-field3 {
    display: flex;
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-top: 1rem;
    padding-right: 1.5rem;
    padding-bottom: 1rem;
    color: var(--darkblue);
  }

  /* Styling of filter options */

  .filter-row {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  .filter-item-list {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0rem 1rem 0rem;
    color: #2b3f5a;
  }

  .filter-item-list li {
    margin-right: 1.5rem;
    padding: 0.2rem 0.6rem;
    cursor: pointer;
    font-size: 0.8rem;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
  }

  .active {
    background-color: var(--green);
    color: #ffffff;
    border-radius: 0.5rem;
  }

  .searchbar-container {
    margin: 1rem 0rem 1rem 0rem;
  }

  .searchbar {
    width: 30.2rem;
    padding: 0.5rem 0.6rem;
    border-radius: 0.5rem;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
  }

  .searchbar::placeholder {
    color: #b7b7b7;
  }

  /* Styling of project list */

  .blog-list-container {
    height: 80vh;
    overflow-y: scroll;
  }

  .blog-list-container::-webkit-scrollbar {
    display: none;
  }

  .blog-list {
    list-style: none;
    padding: 0;
    height: 100vh;
    width: 100%;
  }

  .blog-list li {
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    margin-bottom: 1rem;
    height: 8rem;
    width: 99%;
  }

  .blog-info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
  }

  .author {
    position: absolute;
    font-size: 0.6rem !important;
    padding-top: 0.2rem;
    right: 1.5rem;
  }

  .author2,
  .author3 {
    font-size: 0.7rem !important;
    padding-top: 0.2rem;
  }

  .blog-list img {
    width: 10rem;
    height: auto;
    object-fit: cover;
    padding: 0;
    margin: 0;
    border-radius: 0.5rem 0rem 0rem 0.5rem;
  }

  .blog-list .blog-text {
    padding: 1rem 1rem;
    position: relative;
  }

  .blog-list span {
    color: #2b3f5a;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .blog-list h3 {
    color: var(--spat);
    margin-bottom: 0.5rem;
  }

  .main-post {
    width: 100%;
    height: 17rem;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 3px 8px;
    border-radius: 0.5rem;
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
  }

  .main-post img {
    width: 20rem;
    object-fit: cover;
    border-radius: 0.5rem 0rem 0rem 0.5rem;
    margin: 0;
  }

  .main-post2 img,
  .main-post3 img {
    margin: 0;
  }

  .main-post .content-field {
    max-width: 35rem;
    padding: 1.5rem;
  }

  .main-post span {
    color: var(--darkblue);
    font-size: 0.9rem;
  }

  .main-post h3 {
    color: var(--spat);
    margin-bottom: 0.5rem;
    margin-top: 1rem;
  }

  .main-post2 h3,
  .main-post3 h3 {
    padding-left: 1.5rem;
    color: var(--spat);
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .main-post2 img,
  .main-post3 img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
  }

  .main-post2,
  .main-post3 {
    overflow: hidden;
  }

  .read-more-container {
    margin-top: 1.8rem;
  }

  .read-more-container2,
  .read-more-container3 {
    height: 5rem;
    margin-top: 1.5rem;
    margin-left: 1.5rem;
  }

  .read-more-link {
    width: 6.5rem;
    bottom: 1rem;
    /* padding: 0.4rem 0.6rem; */
    cursor: pointer;
    font-size: 0.9rem;
    /* background-color: #4ecd5d; */
    color: var(--green);
    border-radius: 0.5rem;
  }

  .read-more-link2,
  .read-more-link3 {
    /* background-color: #4ecd5d; */
    color: var(--green);
    border-radius: 0.5rem;
    /* padding: 0.4rem 0.6rem; */
    width: 6.5rem;
    font-size: 0.9rem;
  }

  .read-more-small i {
    position: absolute;
    right: 1.5rem;
    bottom: 1rem;
    /* padding: 0.6rem 1.2rem; */
    color: var(--green);
    transition: 0.2s;
  }

  .read-more-small:hover i {
    transform: translateX(0.5rem);
  }

  #map {
    height: 85vh;
    pointer-events: none;
  }

  /* Mobiele weergaven */

  @media only screen and (max-width: 1100px) {
    .blog {
      width: 100%;
    }

    .blog-view-container {
      display: block;
    }

    .blog2,
    .blog3 {
      display: none;
    }

    .main-post {
      display: none;
    }

    .filter-row {
      display: none;
    }

    .filter-item-list {
      display: flex;
      flex-wrap: wrap;
      row-gap: 0.5rem;
    }

    .mobile-blog-header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    .blog-list li {
      display: flex;
      flex-direction: column;
      height: 23rem;
    }

    .blog-list img {
      width: 100%;
      height: 8rem;
      border-radius: 0.5rem 0.5rem 0rem 0rem;
    }

    .intro-text {
      display: block;
    }

    .mobile-blog-header li {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-right: 0.1rem;
      font-size: 0.7rem;
    }
  }
</style>
