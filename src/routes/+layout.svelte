<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      const menu = document.querySelector('.fullscreen-menu');
      let canSparkle = true;
  
      menu.addEventListener('mousemove', createSparkle);
  
      function createSparkle(event) {
        if (!canSparkle) return;
  
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = `${event.clientX}px`;
        sparkle.style.top = `${event.clientY}px`;
        menu.appendChild(sparkle);
  
        sparkle.addEventListener('animationend', () => {
          sparkle.remove();
          canSparkle = true;
        });
  
        setTimeout(() => {
          sparkle.remove();
          canSparkle = true;
        }, 500); // Adjust this time to control the delay between sparkles
      }
    });
  </script>

<div class="fullscreen-menu">
    <span>Terug</span>
    <div class="inner-content">
        <ul>
            <li>Over</li>
            <li>Expertise</li>
            <li>Klimaatadaptatie</li>
            <li>Waterkwaliteit</li>
            <li>B-RAIN</li>
            <li>Projecten</li>
        </ul>
    </div>
</div>

<slot />

<style>
    .fullscreen-menu {
        cursor: none;
        position: relative;
        height: 100vh;
        z-index: 10;
        background-image: url("/assets/forest.jpg");
        background-repeat: no-repeat;
        background-position: center;
        overflow: hidden; /* Ensures gradient overlay doesn't overflow */
    }

    .fullscreen-menu::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#35353566, #ffffffcc);
        pointer-events: none; /* Allows clicking through the pseudo-element */
    }

    span {
        position: absolute;
        padding: 1rem 2rem;
        margin-right: 15%;
        right: 0;
        color: #f2f2f2;
        font-size: 1.2rem;
        text-shadow: 0px 0px 6rem #000;
        transition: .2s;
    }

    span:hover {
        transform: translateX(-.5rem);
        text-shadow: 0px 0px 4rem #f7eea8f9;
    }

    .inner-content {
        width: 70%;
        margin-left: 15%;
        padding-top: 4rem;
    }

    ul {
        list-style: none;
        padding: 0;
        font-size: 10vh;
        color: #f2f2f2;
    }

    li {
        transition: .2s;
        width: max-content;
        text-shadow: 0px 0px 6rem #000;
    }

    li:hover {
        transform: translateX(1rem);
        text-shadow: 0px 0px 4rem #f7eea8f9;
    }
</style>