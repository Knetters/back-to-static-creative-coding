<script>
  export let data;
</script>

<!-- <section class="sponsor section">
  <div class="sponsor__container container grid"> -->

<div class="scroll-horizontal">
  {#each data.partner as partner}
    <a href={partner.link}>
      <img
        src={partner.image.url}
        alt="logo's partners"
        class="sponsor-img"
      /></a
    >
  {/each}
</div>

<!-- </div>
</section> -->

<style>
  .scroll-horizontal {
    overflow-x: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 2rem;
    scroll-snap-type: x mandatory;
    padding: 1rem 1rem;
  }

  .sponsor-img {
    width: 100px;
    height: auto;
    opacity: 0.5;
    filter: invert(0.5);
    transition: 0.3s;
  }

  /* Responsive */
  @media screen and (min-width: 720px) {
    .sponsor-img {
      width: 100px;
      opacity: 0.5;
      filter: invert(0.7);
      transition: 0.3s;
    }
  }
  @media screen and (min-width: 768px) {
    .sponsor-img {
      width: 150px;
    }

    .scroll-horizontal {
      gap: 8rem;
      padding: 5rem 5rem;
    }
  }
</style>
