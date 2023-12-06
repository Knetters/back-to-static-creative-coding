<script>
  import { ButtonOver } from "$lib/index.js";
  export let data;
</script>

<!--==================== ABOUT ====================-->
{#each data.overs as item}
  <section class="climate-container">
    <div class="inner-section">
      <div class="horizontal-flex-row">
        <div class="text-container">
          <h2>
            {item.title}
          </h2>
          <p>
            {@html item.content.html}
          </p>

          <ButtonOver />
        </div>
        <div class="image-container">
          <img src={item.image.url} alt="boom illustratie" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
{/each}

<style>
  section {
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 5rem;
    margin-bottom: 5rem;
    background: var(--lg-bg);
  }

  .inner-section {
    width: 70%;
    margin-left: 15%;
    margin-bottom: 3rem;
  }

  h2 {
    padding: 0rem;
    color: var(--spat);
    margin-bottom: 1rem;
  }

  .horizontal-flex-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .text-container {
    width: 100%;
  }

  img {
    height: 20rem;
    object-fit: contain;
    border-radius: 0.5rem;
    width: 100%;
  }

  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    .horizontal-flex-row {
      flex-direction: column;
    }

    .text-container {
      width: 100%;
    }

    .image-container {
      width: 100%;
      margin-top: 1rem;
    }

    img {
      height: 10rem;
      width: 100%;
      z-index: -1;
      object-fit: contain;
    }

    .inner-section {
      /* padding: 0rem 2.5rem; */
      width: 70%;
      margin-bottom: 2rem;
    }
  }
</style>
