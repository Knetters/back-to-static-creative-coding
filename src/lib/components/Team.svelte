<script>
  import { onMount } from "svelte";

  onMount(() => {
    let swiper = new Swiper(".team-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 32,
      coverflowEffect: {
        rotate: 0,
      },
    });
  });
</script>

<section class="team section">
  <h2 class="team-title">Team</h2>

  <div class="team-container swiper-container">
    <div class="swiper-wrapper">
      <!--==================== MEES ====================-->
      <div class="team-card swiper-slide">
        <img src="assets/mees1.png" alt="foto Mees" class="team-img" />
        <!-- <img src="assets/mees_water.png" class="hover_img"> -->
        <div class="team-text">
          <h2 class="team-name">Mees</h2>
          <h3 class="team-mail">m.vmilligen@spatwater.nl</h3>
        </div>
      </div>

      <!--==================== JESSE ====================-->
      <div class="team-card swiper-slide">
        <img src="assets/timo.png" alt="foto Mees" class="team-img" />
        <div class="team-text">
          <h2 class="team-name">Timo</h2>
          <h3 class="team-mail">t.vdberg@spatwater.nl</h3>
        </div>
      </div>

      <!--==================== TIMO ====================-->
      <div class="team-card swiper-slide">
        <img src="assets/jesse.png" alt="foto Mees" class="team-img" />
        <div class="team-text">
          <h2 class="team-name">Jesse</h2>
          <h3 class="team-mail">j.schoenmakers@spatwater.nl</h3>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- === TEAM ON BIGGER SCREEN === -->

<section class="team2 discover" id="team2">
  <h2 class="team2-title">Team</h2>

  <div class="team2-wrapper">
    <div class="team2-mees">
      <div class="personal-information">
        <h3 class="name">Mees</h3>
        <h4 class="mail">m.vmilligen@spatwater.nl</h4>
      </div>
    </div>

    <div class="team2-timo">
      <div class="personal-information">
        <h3 class="name">Timo</h3>
        <h4 class="mail">t.vdberg@spatwater.nl</h4>
      </div>
    </div>

    <div class="team2-jesse">
      <div class="personal-information">
        <h3 class="name">Jesse</h3>
        <h4 class="mail">j.schoenmakers@spatwater.nl</h4>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    background: white;
    width: 70%;
    margin-left: 15%;
  }

  .team2 {
    display: none;
  }

  .team-title {
    padding: 4rem 2.5rem;
    color: var(--spat);
  }

  .team {
    position: relative;
    background-color: white;
    height: 100vh;
    padding-top: 6em;
    padding-bottom: 3em;
  }

  .team-container {
    padding: 2em 4em 2em 4em;
    overflow: hidden;
  }

  .team-card {
    width: 300px;
    height: 240px;
    border-radius: 10px;
  }

  .team-text {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }

  .team-name,
  .team-mail {
    color: white;
  }

  .team-mail {
    display: block;
    font-size: 0.75rem;
  }

  .team-img {
    transition: 0.3s;
    width: 100%;
  }

  .team-img:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 720px) {
    .team {
      display: none;
    }

    h2 {
      font-size: 1rem;
      padding: 4rem 2rem;
    }

    .team2 {
      position: relative;
      background-color: white;
      display: grid;
      padding: 0 0.4em 4em 0.4em;
    }

    .team2-title {
      font-size: 2rem;
      color: var(--spat);
      font-weight: 600;
      padding-top: 4em;
    }

    .team2-wrapper {
      display: grid;
      justify-content: center;
      gap: 2em;
      padding-bottom: 3em;
      margin: 0 auto;
      grid-template-columns: repeat(3, 1fr);
    }

    .team2-mees {
      background-image: url("/assets/Mees1_fullscreen.png");
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
      width: 250px;
      height: 300px;
    }

    .team2-timo {
      background-image: url("/assets/Timo1_fullscreen.png");
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
      width: 250px;
      height: 300px;
    }

    .team2-jesse {
      background-image: url("/assets/Jesse1_fullscreen.png");
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
      width: 250px;
      height: 300px;
    }

    .name {
      font-size: 1.5rem;
      display: block;
      color: white;
    }

    .mail {
      font-size: 0.8rem;
      display: block;
      color: white;
    }

    .personal-information {
      margin: 14.5em 0em 0.3em 1em;
    }

    .team2-mees:hover {
      background-image: url("/assets/Mees2_fullscreen.png");
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
      width: 250px;
      height: 300px;
      transition: 0.2s ease-in;
    }

    .team2-timo:hover {
      background-image: url("/assets/Timo2_fullscreen.png");
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
      width: 250px;
      height: 300px;
      transition: 0.2s ease-in;
    }

    .team2-jesse:hover {
      background-image: url("/assets/Jesse2_fullscreen.png");
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
      width: 250px;
      height: 300px;
      transition: 0.2s ease-in;
    }
  }
</style>
