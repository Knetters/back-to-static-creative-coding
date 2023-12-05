<script>
    import { onMount } from 'svelte';
  
    onMount(() => {

        // menu logic
        const mapMenu = document.getElementById("map-menu")
        const menuList = document.getElementById("menu-list")
        const menuText = document.getElementById("menu-text")
        const min = document.getElementById("min")
        const plus = document.getElementById("plus")

        let menuToggled = false
        plus.style.display = "none"

        min.addEventListener("click", toggleMenu);
        plus.addEventListener("click", toggleMenu);

        function toggleMenu() {
            if (menuToggled == false) {
                mapMenu.style.width = "20rem";
                mapMenu.style.height = "3rem";
                menuList.style.display = "none";
                menuText.style.display = "none";

                plus.style.display = "block"
                min.style.display = "none"

                menuToggled = true
            } else {
                mapMenu.style.width = "90%";
                mapMenu.style.height = "5rem";
                menuList.style.display = "block";
                menuText.style.display = "block";

                plus.style.display = "none"
                min.style.display = "block"

                menuToggled = false
            }
        }
    }); 
</script>

<div id="map-menu" class="map-menu">
    <div class="text-block">
        <h1>Kansenkaart</h1>
        <p id="menu-text">Kleine regel tekst met uitleg over de kaart</p>
    </div>
    <div class="action-block">
        <p id="min" class="menu-icon">Verbergen</p>
        <p id="plus" class="menu-icon">Opties</p>
        <ul id="menu-list">
            <li data-location="utrecht">Utrecht</li>
            <li data-location="rotterdam">Rotterdam</li>
            <li data-location="den-haag">Den-Haag</li>
            <li class="active" data-location="amsterdam">Amsterdam</li>
        </ul>
    </div>
</div>

<style>
    .map-menu {
        background-color: #fdfdfd;
        height: 5rem;
        width: 90%;
        margin-left: 5%;
        margin-top: 6.5rem;
        padding: .5rem 1rem;
        border-radius: 1rem;
        position: relative;
        z-index: 9999;
        display: flex;
        box-shadow: 0px 0px 10px 5px #9d9d9d4b;
        transition: .2s;
    }

    .text-block {
        width: 50%;
        position: relative;
    }

    h1 {
        padding: 0rem;
        margin-top: -.2rem;
        font-size: 1.5rem;
        color: var(--spat);
    }

    .text-block p {
        position: absolute;
        bottom: 0;
        margin: 0;
        transition: .2s;
    }

    .action-block {
        width: 50%;
        position: relative;
        text-align: right;
    }

    .action-block ul {
        list-style: none;
        padding: 0;
        margin: 0;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .action-block ul li {
        float: right;
        background-color: #f2f2f2;
        margin-left: 1rem;
        padding: .2rem .6rem;
        cursor: pointer;
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
        border-radius: .5rem;
    }

    .action-block ul li:hover {
        background-color: #4ecd5d89;
    }

    .active {
        background-color: #4ECD5D !important;
        color: #fff;
    }

    .menu-icon {
        cursor: pointer;
        color: #2B3F5A;
    }

    .menu-icon:hover {
        color: #767676;
    }

    /* Mobiele weergaven */
    @media only screen and (max-width: 900px) {
        .map-menu {
            flex-direction: column;
        }

        .action-block {
            width: 100%;
            margin-top: 2rem;
        }

        .text-block {
            width: 100%;
        }

        .menu-icon, .text-block p {
            display: none;
        }
    }
</style>