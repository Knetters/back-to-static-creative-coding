<script>
  import { FormContact } from "$lib/index.js";
  import { IntroContact } from "$lib/index.js";

</script>

<section class="contact">
  <IntroContact/>
  <section class="contact-section" id="experience">
    <div class="main-container">
      <FormContact />
    </div>
    <img src="assets/tree.png" alt="afbeelding boom naast invulformulier" />
  </section>
</section>

<style>

  /* CONTAINER CLASSES */

  .contact-section {
    container: sidebar / inline-size;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .contact {
    padding: 4rem 5rem;
    height: auto;
    background-color: var(--lg-bg);
  }

  section.contact {
    padding: 2em;
  }

  img {
    width: 90%;
  }


  /* CONTAINER QUERIES */
  @container sidebar (min-width: 700px) {
    img {
      margin-left: 2em;
      margin-top: -2em;
    }
  }

  @container sidebar (max-width: 700px) {
    img {
      display: none;
    }
    .main-container {
      width: 100vw;
      padding-right: 6em;
      grid-template-columns: 1fr;
    }
  }
</style>
