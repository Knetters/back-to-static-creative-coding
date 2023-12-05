<script>
</script>

<main>

  <section class="climate-container">
    <div class="inner-section">
      <div class="horizontal-flex-row">
        <div class="text-container">
          <h2>b-RAIN</h2>
          <p class="bold-text">b-RAIN is het project rondom het koppelen van weerberichten aan wateropvang/gebruik in de tuin.</p>
          <p>Weersextremen in Nederland nemen steeds verder toe. Enerzijds komen in periodes van droogte, watertekorten vaker voor en anderzijds hebben we vaker te maken met extreme neerslag, met wateroverlast tot gevolg.</p>
          <p>B-rain wil bewoners positief betrokken houden bij het bufferen van regenwater en het groen houden van hun tuin. Door enkele gegevens in een app aan te geven, geeft deze app terug wanneer de regenwaterbuffer vol zit, wanneer deze geleegd moet worden (als er bijvoorbeeld een grote regenbui aan komt) en wanneer het lang niet regent (waardoor je zoveel mogelijk water in de regenwaterbuffer wil vasthouden).</p>
        <a href="#brain" class="button">Bekijk project</a>         
        </div>
        <div class="image-container">
          <img src="assets/bRAIN.png" alt="" />
        </div>
      </div>
    </div>
  </section>

</main>

<style>
  section {
    width: 100%;
    padding-top: 5rem;
    padding-bottom: 3rem;
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

  .bold-text {
    font-weight: 600;
  }

  .horizontal-flex-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10%;
  }

  .text-container {
    width: 60%;
  }

  .image-container {
    width: 40%;
  }

  img {
    height: 20rem;
    object-fit: contain;
    border-radius: .5rem;
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
      height: 20rem;
      width: 100%;
      z-index: -1;
      object-fit: cover;
    }

    .inner-section {
      /* padding: 0rem 2.5rem; */
      width: 70%;
      margin-bottom: 2rem;
    }
  }
</style>
