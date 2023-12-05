<script>
</script>

<main>
    <section class="first-section">
        <div class="inner-section">
          <div class="horizontal-flex-row">
            <div class="image-container">
                <h2>Waterkwaliteit</h2>
                <p class="bold-text">Wat betekent de Kaderrichtlijn Water voor jou?</p>
                <img src="assets/Octopus-amico.svg" alt="foto aquathermie">
            </div>
            <div class="text-container">
                <p>De Kaderrichtlijn Water (KRW) is een Europese richtlijn die regelt dat oppervlaktewateren en het grondwater van voldoende kwaliteit zijn. Toch voldoen pas enkele wateren aan deze norm. We staan nu op een keerpunt. Binnen 5 jaar, in 2027, moeten alle oppervlaktewateren en ons grondwater voldoen aan de KRW. Vergelijkingen met de stikstofcrisis zijn snel gemaakt, maar de KRW biedt ook kansen in proposities, aanbestedingen en vergunningverlening.</p>
                <p>SPATwater biedt hulp aan organisaties bij het identificeren van de implicaties van de KRW voor hun specifieke situatie. Dit doen wij onder andere door middel van:</p>
                <ul>
                  <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Het verzorgen van kennissessies</li>
                  <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Analyse van huidige KRW-risico’s en kansen</li>
                  <li><i class="fa fa-arrow-right" aria-hidden="true"></i> Propositieverbetering</li>
                </ul>
              </div>
          </div>
        </div>
    </section>
</main>

<style>
section {
    width: 100%;
  }

  .first-section {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .inner-section {
    /* padding: 0rem 2.5rem; */
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

  ul {
    list-style: none;
    font-size: 1rem;
    color: var(--darkblue);
  }

  .horizontal-flex-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10%;
  }

  .text-container {
    width: 50%;
    margin-top: 8rem;
  }

  img {
    height: 20rem;
    object-fit: cover;
    border-radius: .5rem;
  }

  /* Mobiele weergaven */
  @media only screen and (max-width: 1100px) {
    .horizontal-flex-row {
      flex-direction: column;
    }

    .text-container {
      width: 100%;
      margin-top: 1rem;
    }

    .image-container {
      width: 100%;
      margin-top: 0rem;
    }

    img {
      height: 10rem;
      width: 100%;
      object-fit: cover;
    }

    .inner-section {
      /* padding: 0rem 2.5rem; */
      width: 70%;
      margin-bottom: 2rem;
    }
  }
</style>
