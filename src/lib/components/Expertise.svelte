<script>
  import { ButtonExpertise } from "$lib/index.js";
</script>

<!-- Expertise-sectie -->
<section class="expertise section">
  <!-- Header van de expertise-sectie -->
  <header class="expertise-header">
    <h2 class="expertise-title">Expertise</h2>
  </header>
  <!-- Wrapper voor de expertise cards -->
  <div class="expertise__wrapper">
    <!-- Klimaatadaptatie card -->
    <div class="expertise__card">
      <img
        src="assets/Untitled4.png"
        alt="Illustratie klimaatadaptatie voor een groenere wereld"
        class="card-img"
      />
      <h3>Klimaatadaptatie</h3>

      <ButtonExpertise />
    </div>

    <!-- Waterkwaliteit card -->
    <div class="expertise__card">
      <img
        src="assets/Untitled3.png"
        alt="Illustratie waterkwaliteit en milieubehoud"
        class="card-img"
      />
      <h3>Waterkwaliteit</h3>
      <ButtonExpertise />
    </div>

    <!-- B-Rain card -->
    <div class="expertise__card">
      <img
        src="assets/brainlogo.png"
        alt="Illustratie B-Rain, een innovatieve oplossing"
        class="card-img"
      />
      <h3>B-Rain</h3>
      <ButtonExpertise />
    </div>
  </div>
</section>

<!-- Styles voor de Expertise-sectie -->
<style>
  .expertise {
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .card-img {
    width: 100%;
    height: 100%;
  }
  .expertise-title {
    font-size: 1.6rem;
    color: var(--spat);
    font-weight: 600;
    margin-left: 15%;
  }

  .expertise h3 {
    font-size: 1.2rem;
    color: var(--darkblue);
    font-weight: 600;
    text-align: center;
    padding-bottom: 1em;
  }

  .expertise__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 6rem 0rem;
    gap: 1rem;
    width: 70%;
    margin-left: 15%;
  }

  .expertise__card {
    height: 22em;
    width: 15em;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 8px 10px rgba(174, 190, 205, 0.3);
    background-color: var(--lg-bg);
    color: var(--darkblue);
    transition: transform 0.3s ease-in;
    cursor: pointer;
  }

  .expertise__card img {
    /* width: 250px; */
    /* height: 250px; */
    padding-bottom: 2em;
  }

  .expertise__card:nth-child(2),
  .expertise__card:nth-child(3) {
    background-color: var(--lg-bg);
  }

  .expertise__card:hover {
    transform: scale(1.075);
    transition: 0.2s;
    cursor: pointer;
  }

  @media screen and (max-width: 1023px) {
    .expertise__wrapper {
      flex-direction: column;
      padding: 4rem 2rem;
    }

    .expertise__card {
      width: 100%;
      max-width: 300px;
    }
  }

  /* Media query for mobile screens */
  @media screen and (max-width: 767px) {
    .expertise__card {
      height: auto;
      padding: 2rem;
    }
  }
</style>
