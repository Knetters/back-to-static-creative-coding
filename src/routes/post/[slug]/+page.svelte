<script>
  export let data;
  
  import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
  <title>SPATwater - {data.post.title}</title>
</svelte:head>

<main class="blog">
  <!-- Start blog main -->
  {#if data.post}
    {#if data.post.image && data.post.image.url}

      <div class="content-container">
        <img class="project-banner-img" src={data.post.image.url} alt={data.post.title} />

        <span>{data.post.categorie}</span>
        <h1>{data.post.title}</h1>

        <div class="project-html">
          {@html data.post.content.html}
        </div>

        <a href="/#projecten"><p><i class="fa fa-arrow-left" aria-hidden="true"></i> Terug naar de kennisbank</p></a>

        <h2>Gerelateerde artikelen</h2>
        <p>Hier komen twee artikelen met de zelfde categorie te staan</p>

      </div>
      
    {/if}
  {:else}
    <p>Project not found.</p>
  {/if}

  </main>

  <Footer />

  <style>
    main {
        padding-top: 7rem;
    }

    .content-container {
      width: 60%;
      margin-left: 20%;
      margin-bottom: 10rem;
    }

    .project-banner-img {
      width: 100%;
      height: 25rem;
      object-fit: cover;
      border-radius: .5rem;
      margin-bottom: .1rem;
    }

    :global(img) { 
      margin-top: 1rem;
      margin-bottom: 1rem;
      width: 100%;
      border-radius: .5rem;
    }

    :global(video) { 
      margin-top: 2rem;
      margin-bottom: 2rem;
      width: 100%;
      border-radius: .5rem;
    }

    :global(blockquote) { 
      margin-top: 2rem;
      margin-bottom: 1rem;
      width: 70%;
      margin-left: 15%;
      font-size: 1.4rem;
      line-height: 2.4rem;
      text-align: center;
    }

    :global(a) { 
      color: #7FAEC5;
      text-decoration: none;
    }

    :global(blockquote):before { 
      content: '"';
      font-size: 5rem;
      position: absolute;
      color: #4ECD5D;
      margin-left: -2rem;
      margin-top: 1rem;
    }

    :global(blockquote):after { 
      content: '"';
      font-size: 5rem;
      position: absolute;
      color: #4ECD5D;
      margin-left: .5rem;
      margin-top: 1rem;
    }

    span {
      color: #2B3F5A;
      font-weight: 600;
      font-size: .9rem;
    }

    h1 {
      color: #7FAEC5;
      margin-bottom: .5rem;
    }

    h2 {
      color: #7FAEC5;
      margin-bottom: .5rem;
    }

    .project-html {
      color: #2B3F5A;
      font-size: .9rem;
      margin-bottom: .5rem;
      line-height: 1.2rem;
      margin-bottom: 2rem;
    }

  /* Mobiele weergaven */
    @media only screen and (max-width: 1100px) {
      .content-container {
      width: 90%;
      margin-left: 5%;
    }

    .project-banner-img {
      width: 100%;
      height: 20rem;
    }
  }
  </style>