<script>
    import { onMount } from "svelte";

    onMount(() => {

    });
</script>

<section>
    <img class="cave-ground" src="/assets/footergrot1.png" alt="">
    <img class="water-drup" src="/assets/drup.png" alt="">
    <img class="cave-water" src="/assets/footergrot2.png" alt="">
</section>

<style>
    section {
        margin-top: 10rem;
        margin-bottom: -4rem;
        position: relative;
    }

    img {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    .cave-ground {
        position: relative;
        z-index: 10;
        display: block;
    }

    .cave-water {
        position: relative;
        z-index: -1;
        margin-top: -200%;
    }

    .water-drup {
        width: 1rem;
        z-index: 100;
        transform: translateY(-90vw);
        margin-left: 30%;
        /* border: 3px solid red; */
        animation: fall 2s ease-in infinite;
    }

    @keyframes fall {
        0% {
            transform: translateY(-60vw);
        }
        100% {
            transform: translateY(0vw);
        }
    }
</style>
