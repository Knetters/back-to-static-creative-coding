<script>
  import { onMount } from "svelte";

  onMount(() => {
    let text = document.getElementById("text");
    let layer1 = document.getElementById("layer1");
    let layer2 = document.getElementById("layer2");
    let layer3 = document.getElementById("layer3");
    let layer4 = document.getElementById("layer4");
    let layer5 = document.getElementById("layer5");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      text.style.marginTop = value * 2.5 + "px";
      layer2.style.left = value * 0.3 + "px";
      layer1.style.left = value * -0.5 + "px";
      layer4.style.left = value * 0.3 + "px";
      layer5.style.left = value * 0.3 + "px";
      layer3.style.left = value * -0.3 + "px";
      layer2.style.top = value * 0.5 + "px";
      layer1.style.top = value * 1 + "px";
      layer3.style.top = value * 0.5 + "px";
    });

    let text2 = document.getElementById("text2");
    let layer12 = document.getElementById("layer1-2");
    let layer22 = document.getElementById("layer2-2");
    let layer32 = document.getElementById("layer3-2");
    let layer42 = document.getElementById("layer4-2");
    let layer52 = document.getElementById("layer5-2");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      text2.style.marginTop = value * 2.5 + "px";
      layer22.style.left = value * 0.3 + "px";
      layer12.style.left = value * -0.5 + "px";
      layer42.style.left = value * 0.3 + "px";
      layer52.style.left = value * 0.3 + "px";
      layer32.style.left = value * -0.3 + "px";
      layer22.style.top = value * 0.5 + "px";
      layer12.style.top = value * 1 + "px";
      layer32.style.top = value * 0.5 + "px";
    });

    var mouse = { x: 0, y: 0 };
    var myWidth = 0,
      myHeight = 0;
    var mouseIsDown = false;
    var mouseIsDownDivision = false;

    document.addEventListener(
      "mousemove",
      function (e) {
        mouse.x = e.clientX || e.pageX;
        mouse.y = e.clientY || e.pageY;
        updateDimensions();

        //if(mouseIsDown) {
        document.getElementById("sun").style.background =
          "-webkit-radial-gradient(" +
          mouse.x +
          "px " +
          mouse.y +
          "px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)";
        document.getElementById("sun").style.background =
          "-moz-radial-gradient(" +
          mouse.x +
          "px " +
          mouse.y +
          "px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)";
        document.getElementById("sun").style.background =
          "-ms-radial-gradient(" +
          mouse.x +
          "px " +
          mouse.y +
          "px, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%)";

        document.getElementById("sunDay").style.background =
          "-webkit-radial-gradient(" +
          mouse.x +
          "px " +
          mouse.y +
          "px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)";
        document.getElementById("sunDay").style.background =
          "-moz-radial-gradient(" +
          mouse.x +
          "px " +
          mouse.y +
          "px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)";
        document.getElementById("sunDay").style.background =
          "-ms-radial-gradient(" +
          mouse.x +
          "px " +
          mouse.y +
          "px, circle, rgba(252,255,251,0.9) 0%,rgba(253,250,219,0.4) 30%,rgba(226,219,197,0.01) 70%, rgba(226,219,197,0.0) 70%,rgba(201,165,132,0) 100%)";

        document.getElementById("sunSet").style.background =
          "-webkit-radial-gradient(" +
          mouse.x +
          "px " +
          mouse.y +
          "px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)";
        document.getElementById("sunSet").style.background =
          "-moz-radial-gradient(" +
          mouse.x +
          "px " +
          mouse.y +
          "px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)";
        document.getElementById("sunSet").style.background =
          "-ms-radial-gradient(" +
          mouse.x +
          "px " +
          mouse.y +
          "px, circle, rgba(254,255,255,0.8) 5%,rgba(236,255,0,1) 10%,rgba(253,50,41,1) 25%, rgba(243,0,0,1) 40%,rgba(93,0,0,1) 100%)";

        document.getElementById(
          "waterReflectionContainer",
        ).style.perspectiveOrigin =
          ((mouse.x / myWidth) * 100).toString() + "% -15%";
        document.getElementById("waterReflectionMiddle").style.left =
          (mouse.x - myWidth - myWidth * 0.03).toString() + "px";

        var bodyWidth = document.getElementsByTagName("body")[0].clientWidth;

        document.getElementById("sun").style.width = bodyWidth;
        document.getElementById("sun").style.left = "0px";
        document.getElementById("sunDay").style.width = bodyWidth;
        document.getElementById("sunDay").style.left = "0px";

        var sky = document.getElementById("sun");
        var water = document.getElementById("water");
        var waterHeight = water.clientHeight;
        var skyHeight = sky.clientHeight;
        var skyRatio = mouse.y / skyHeight;
        var waterRatio = waterHeight / myHeight;
        document.getElementById("darknessOverlay").style.opacity = Math.min(
          (mouse.y - myHeight / 2) / (myHeight / 2),
          1,
        );
        document.getElementById("darknessOverlaySky").style.opacity = Math.min(
          (mouse.y - (myHeight * 7) / 10) / (myHeight - (myHeight * 7) / 10),
          1,
        );
        document.getElementById("moon").style.opacity = Math.min(
          (mouse.y - (myHeight * 9) / 10) / (myHeight - (myHeight * 9) / 10),
          0.65,
        );
        document.getElementById("horizonNight").style.opacity =
          (mouse.y - (myHeight * 4) / 5) / (myHeight - (myHeight * 4) / 5);

        document.getElementById("starsContainer").style.opacity =
          mouse.y / myHeight - 0.6;

        document.getElementById("waterDistance").style.opacity =
          mouse.y / myHeight + 0.6;
        document.getElementById("sunDay").style.opacity =
          1 - mouse.y / myHeight;
        document.getElementById("sky").style.opacity = Math.min(
          1 - mouse.y / myHeight,
          0.99,
        );

        document.getElementById("sunSet").style.opacity =
          mouse.y / myHeight - 0.2;

        if (mouse.y > 0) {
          var clouds = document.getElementsByClassName("cloud");
          for (var i = 0; i < clouds.length; i++) {
            clouds[i].style.left = Math.min(
              myWidth * (Math.pow(mouse.y, 2) / Math.pow(myHeight / 2, 2)) * -1,
              0,
            );
          }
          //}

          var stars = document.getElementsByClassName("star");
          for (var i = 0; i < stars.length; i++) {
            stars[i].style.opacity = mouse.y / myHeight - 0.6;
          }

          if (mouse.y > myHeight / 2) {
            document.getElementById("sun").style.opacity = Math.min(
              (myHeight - mouse.y) / (myHeight / 2) + 0.2,
              0.5,
            );
            document.getElementById("horizon").style.opacity =
              (myHeight - mouse.y) / (myHeight / 2) + 0.2;

            document.getElementById("waterReflectionMiddle").style.opacity =
              (myHeight - mouse.y) / (myHeight / 2) - 0.1;
          } else {
            document.getElementById("horizon").style.opacity = Math.min(
              mouse.y / (myHeight / 2),
              0.99,
            );

            document.getElementById("sun").style.opacity = Math.min(
              mouse.y / (myHeight / 2),
              0.5,
            );
            document.getElementById("waterReflectionMiddle").style.opacity =
              mouse.y / (myHeight / 2) - 0.1;
          }
        } else if (mouseIsDownDivision) {
          var sunElement = document.getElementById("sun");
          var water = document.getElementById("water");
          var division = document.getElementById("division");
          sunElement.style.height = mouse.y.toString() + "px";
          document.getElementById("sunDay").style.height =
            mouse.y.toString() + "px";
          division.style.top = mouse.y.toString() + "px";
          var waterHeight = myHeight - mouse.y;
          water.style.height = waterHeight.toString() + "px";

          document.getElementById("sun").style.height =
            mouse.y.toString() + "px";
          document.getElementById("sunDay").style.height =
            mouse.y.toString() + "px";
          document.getElementById("horizon").style.height =
            mouse.y.toString() + "px";
          document.getElementById("waterDistance").style.height =
            (myHeight - mouse.y).toString() + "px";
          document.getElementById("oceanRippleContainer").style.height =
            (myHeight - mouse.y).toString() + "px";
          document.getElementById("darknessOverlay").style.height =
            (myHeight - mouse.y).toString() + "px";
        }
      },
      false,
    );

    function updateDimensions() {
      if (typeof window.innerWidth == "number") {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
      } else if (
        document.documentElement &&
        (document.documentElement.clientWidth ||
          document.documentElement.clientHeight)
      ) {
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
      } else if (
        document.body &&
        (document.body.clientWidth || document.body.clientHeight)
      ) {
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
      }
    }

    function startMove() {
      mouseIsDown = true;
    }

    function stopMove() {
      mouseIsDown = false;
      mouseIsDownDivision = false;
      var sky = document.getElementById("sun");
    }

    function startDraggingDivision() {
      mouseIsDownDivision = true;
    }

    function windowResize() {
      updateDimensions();
      var skyHeight = document.getElementById("horizon").clientHeight;

      // update to new sky height
      skyHeight = document.getElementById("sun").clientHeight;
      document.getElementById("waterDistance").style.height =
        myHeight - skyHeight;
      document.getElementById("division").style.top = skyHeight;
    }
  });
</script>

<main>
  <div class="sunrise" onmouseup="stopMove();" onresize="windowResize();">
    <div id="starsContainer" onmousedown="startMove();" onmouseup="stopMove();">
      <div id="stars" onmousedown="startMove();" onmouseup="stopMove();"></div>
    </div>

    <div id="sun" onmousedown="startMove();" onmouseup="stopMove();"></div>

    <div id="sunDay" onmousedown="startMove();" onmouseup="stopMove();"></div>

    <div id="sunSet" onmousedown="startMove();" onmouseup="stopMove();"></div>

    <div id="sky" onmousedown="startMove();" onmouseup="stopMove();"></div>

    <div class="star" style="left: 250px; top: 30px;"></div>
    <div class="star" style="left: 300px; top: 25px;"></div>
    <div class="star" style="right: 40px; top: 40px;"></div>
    <div class="star" style="right: 80px; top: 45px;"></div>
    <div class="star" style="right: 120px; top: 20px;"></div>

    <div id="horizon" onmousedown="startMove();" onmouseup="stopMove();"></div>

    <div
      id="horizonNight"
      onmousedown="startMove();"
      onmouseup="stopMove();"
    ></div>

    <div id="moon" onmousedown="startMove();" onmouseup="stopMove();"></div>

    <div id="mountainRange">
      <div
        id="mountain"
        onmousedown="startMove();"
        onmouseup="stopMove();"
      ></div>
    </div>

    <div
      id="division"
      onmousedown="startDraggingDivision();"
      onmouseup="stopMove();"
    ></div>

    <div id="water" onmousedown="startMove();" onmouseup="stopMove();"></div>

    <div
      id="waterReflectionContainer"
      onmousedown="startMove();"
      onmouseup="stopMove();"
    >
      <div
        id="waterReflectionMiddle"
        onmousedown="startMove();"
        onmouseup="stopMove();"
      ></div>
    </div>
    <div
      id="waterDistance"
      onmousedown="startMove();"
      onmouseup="stopMove();"
    ></div>
    <div
      id="darknessOverlaySky"
      onmousedown="startMove();"
      onmouseup="stopMove();"
    ></div>
    <div id="darknessOverlay"></div>
    <div id="oceanRippleContainer"></div>
    <div id="oceanRipple"></div>

    <section class="home" id="home">
      <section class="parallax">
        <img src="assets/berg4.png" id="layer1" alt="berg illustratie" />
        <img src="assets/berg3.png" id="layer2" alt="berg illustratie" />
        <img src="assets/berg2.png" id="layer3" alt="berg illustratie" />
        <img src="assets/huis.png" id="layer4" alt="huis illustratie" />
        <img src="assets/bergje1.png" id="layer5" alt="berg illustratie" />
        <div id="text">
          <h1 class="home-title">Een nieuwe generatie hydrologen</h1>
          <h2><span class="home-content">Concreet op water en bodem</span></h2>
        </div>
        <img
          src="assets/grondmobilee.png"
          id="ground"
          alt="grond illustratie"
        />
        <img src="assets/bird.png" id="bird" alt="vogel illustratie" />
      </section>

      <section class="parallax2">
        <img src="assets/berg4-full.png" id="layer1-2" alt="berg illustratie" />
        <img src="assets/berg3-full.png" id="layer2-2" alt="berg illustratie" />
        <img src="assets/berg2-full.png" id="layer3-2" alt="berg illustratie" />
        <img
          src="assets/huisje-full.png"
          id="layer4-2"
          alt="huis illustratie"
        />
        <img src="assets/berg1-full.png" id="layer5-2" alt="berg illustratie" />
        <div id="text2">
          <h1 class="home-title2">Een nieuwe generatie hydrologen</h1>
          <span class="home-content2">Concreet op water en bodem</span>
        </div>
        <img
          src="assets/backgroundfullfinall.png"
          id="ground2"
          alt="grond illustratie"
        />
        <img src="assets/bird-full.png" id="bird2" alt="vogel illustratie" />
      </section>
    </section>
  </div>
</main>

<style>
  /*=============== HOME ===============*/
  main {
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .home * {
    z-index: 999999;
  }

  .sunrise {
    width: 100vw;
  }

  .home-title {
    color: var(--darkblue);
    font-size: 1.5rem;
    font-weight: var(--font-medium);
    margin-bottom: 0.5rem;
    margin-top: -16em;
  }

  .home-content {
    color: var(--spat);
    display: block;
    font-size: 1rem;
    font-weight: var(--font-semi-bold);
    margin-bottom: 0.5rem;
  }

  .home-scroll {
    color: var(--green);
    font-size: 0.8em;
    text-decoration: none;
  }

  /* PARALLAX */
  .parallax2 {
    display: none;
  }

  .parallax {
    margin-top: 6em;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50rem;
  }

  #text {
    position: absolute;
    margin-left: 2em;
  }

  .parallax img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  @media screen and (min-width: 454px) {
    .home-title {
      margin-top: -13em;
    }

    .home-content {
      font-size: 1.4em;
    }

    .home-scroll {
      font-size: 1.2em;
    }

    #text {
      padding-left: 1rem;
    }

    .parallax {
      margin-top: -4rem;
      height: 60rem;
    }
  }

  @media screen and (min-width: 568px) {
    .home-title {
      font-size: 2.5em;
      margin-top: -12em;
    }

    .home-content {
      font-size: 1.7em;
    }

    .home-scroll {
      font-size: 1.4em;
    }

    .parallax {
      margin-top: -5rem;
      height: 75rem;
    }
  }

  @media screen and (min-width: 720px) {
    #text {
      padding: 0 3em 0 3em;
    }

    .home-title {
      font-size: 2.8em;
      margin-top: -14.3em;
    }

    .home-scroll {
      font-size: 1.4em;
    }

    .parallax {
      height: 95rem;
    }
  }

  @media screen and (min-width: 720px) {
    #text {
      padding: 0 7em 0 7em;
    }

    .home-title {
      font-size: 2.8em;
      margin-top: -13em;
    }
  }

  @media screen and (min-width: 820px) {
    #text {
      padding: 0 7em 0 7em;
    }

    .home-title {
      font-size: 2.8em;
      margin-top: -13em;
    }
  }

  @media screen and (min-width: 960px) {
    #text {
      padding: 0 5em 0 5em;
    }

    .parallax {
      height: 100rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .parallax {
      display: none;
    }

    #text {
      display: none;
    }

    .parallax img {
      display: none;
    }

    .parallax2 {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 75rem;
    }

    #text2 {
      position: relative;
      margin-left: 1em;
    }

    .parallax2 img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .home-content2 {
      color: var(--spat);
      font-size: 1.5em;
      display: block;
      font-weight: var(--font-semi-bold);
      margin-bottom: var(--mb-0-75);
    }

    .home-title2 {
      color: var(--darkblue);
      font-size: 2rem;
      margin-bottom: 0.5rem;
      margin-top: -15em;
    }

    .home-scroll2 {
      color: var(--green);
      font-size: 1em;
    }
  }

  @media screen and (min-width: 1250px) {
    .parallax {
      display: none;
    }

    #text {
      display: none;
    }

    .parallax img {
      display: none;
    }

    .parallax2 {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100rem;
      margin-top: -12em;
    }

    #text2 {
      position: absolute;
      margin-left: -30em;
    }

    .parallax2 img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
  }
</style>
