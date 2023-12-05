<aside id="infoPanel">
    <div id="infoContent">
        <div class="inner-content">
            <span class="hide" id="hide">Verbergen</span>
            <h2 id="infoTitle">[naam]</h2>

            <p class="no-margin-bot">Extra informatie</p>
            <div class="extra-info-container">
                <div class="extra-info-titles">
                    <p>K-Waarde:</p>
                    <p>50-75:</p>
                    <p>&#60;25cm:</p>
                    <p>25-50:</p>
                    <p>75-100:</p>
                    <p>100-150:</p>
                    <p>&#62;150cm:</p>
                    <p>Geometry:</p>
                </div>

                <div class="extra-info-values">
                    <p id="value0">[waarde]</p>
                    <p id="value1">[waarde]</p>
                    <p id="value2">[waarde]</p>
                    <p id="value3">[waarde]</p>
                    <p id="value4">[waarde]</p>
                    <p id="value5">[waarde]</p>
                    <p id="value6">[waarde]</p>
                    <p id="value7">[waarde]</p>
                </div>
            </div>
        </div>
    </div>
</aside>

<style>
    aside {
        background-color: #fdfdfdb3;
        height: 70vh;
        max-width: 20rem;
        margin-left: 5%;
        margin-top: 1.5rem;
        padding: .5rem 1rem;
        border-radius: 1rem;
        position: relative;
        z-index: 9999;
        display: flex;
        box-shadow: 0px 0px 10px 5px #9d9d9d4b;
        transition: .2s;
        display: none;
    }

    .inner-content {
        position: relative;
        width: 100%;
        height: 70vh;
    }

    .hide {
        position: absolute;
        right: 0;
        bottom: 0;
        padding-bottom: 1rem;
        cursor: pointer;
        color: #2B3F5A;
    }

    .hide:hover {
        color: #767676;
    }

    h2 {
        color: var(--spat);
    }

    .no-margin-bot {
        margin-bottom: 0;
        margin-top: 1rem;
    }

    .extra-info-container {
        width: 100%;
        display: flex;
        padding-top: .5rem;
        border-top: #8795aa 1px solid;
    }

    .extra-info-container p {
        margin: 0;
        padding: 0;
    }

    .extra-info-titles {
        width: 50%;
    }

    .extra-info-values {
        width: 50%;
        text-align: right;
    }
</style>