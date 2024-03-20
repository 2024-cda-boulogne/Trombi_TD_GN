const lille = document.querySelector("#path3");
const boulogne = document.querySelector("#path2-0");
const calais = document.querySelector("#path4");
const stomer = document.querySelector("#path1");
let agglo = [boulogne, calais, stomer, lille];

// Get the modal
const modal = document.getElementById("myModal");
const container = document.querySelector(".container");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        container.style.filter = "blur(0rem)";
    }
};

/*!
 * zoom.js 0.3
 * http://lab.hakim.se/zoom-js
 * MIT licensed
 *
 * Copyright (C) 2011-2014 Hakim El Hattab, http://hakim.se
 */
var zoom = (function () {
    var TRANSITION_DURATION = 800;

    // The current zoom level (scale)
    var level = 1;

    // The current mouse position, used for panning
    var mouseX = 0,
        mouseY = 0;

    // Timeout before pan is activated
    var panEngageTimeout = -1,
        panUpdateInterval = -1;

    // Timeout for callback function
    var callbackTimeout = -1;

    // Check for transform support so that we can fallback otherwise
    var supportsTransforms =
        "WebkitTransform" in document.body.style ||
        "MozTransform" in document.body.style ||
        "msTransform" in document.body.style ||
        "OTransform" in document.body.style ||
        "transform" in document.body.style;

    if (supportsTransforms) {
        // The easing that will be applied when we zoom in/out
        document.body.style.transition =
            "transform " + TRANSITION_DURATION + "ms ease";
        document.body.style.OTransition =
            "-o-transform " + TRANSITION_DURATION + "ms ease";
        document.body.style.msTransition =
            "-ms-transform " + TRANSITION_DURATION + "ms ease";
        document.body.style.MozTransition =
            "-moz-transform " + TRANSITION_DURATION + "ms ease";
        document.body.style.WebkitTransition =
            "-webkit-transform " + TRANSITION_DURATION + "ms ease";
    }

    // Zoom out if the user hits escape
    document.addEventListener("keyup", function (event) {
        if (level !== 1 && event.keyCode === 27) {
            zoom.out({
                callback: function () {},
            });
        }
    });

    // Monitor mouse movement for panning
    document.addEventListener("mousemove", function (event) {
        if (level !== 1) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }
    });

    /**
     * Applies the CSS required to zoom in, prefers the use of CSS3
     * transforms but falls back on zoom for IE.
     *
     * @param {Object} rect
     * @param {Number} scale
     */
    function magnify(rect, scale) {
        var scrollOffset = getScrollOffset();

        // Ensure a width/height is set
        rect.width = rect.width || 1;
        rect.height = rect.height || 1;

        // Center the rect within the zoomed viewport
        rect.x -= (window.innerWidth - rect.width * scale) / 2;
        rect.y -= (window.innerHeight - rect.height * scale) / 2;

        if (supportsTransforms) {
            // Reset
            if (scale === 1) {
                document.body.style.transform = "";
                document.body.style.OTransform = "";
                document.body.style.msTransform = "";
                document.body.style.MozTransform = "";
                document.body.style.WebkitTransform = "";
            }
            // Scale
            else {
                var origin = scrollOffset.x + "px " + scrollOffset.y + "px",
                    transform =
                        "translate(" +
                        -rect.x +
                        "px," +
                        -rect.y +
                        "px) scale(" +
                        scale +
                        ")";

                document.body.style.transformOrigin = origin;
                document.body.style.OTransformOrigin = origin;
                document.body.style.msTransformOrigin = origin;
                document.body.style.MozTransformOrigin = origin;
                document.body.style.WebkitTransformOrigin = origin;

                document.body.style.transform = transform;
                document.body.style.OTransform = transform;
                document.body.style.msTransform = transform;
                document.body.style.MozTransform = transform;
                document.body.style.WebkitTransform = transform;
            }
        } else {
            // Reset
            if (scale === 1) {
                document.body.style.position = "";
                document.body.style.left = "";
                document.body.style.top = "";
                document.body.style.width = "";
                document.body.style.height = "";
                document.body.style.zoom = "";
            }
            // Scale
            else {
                document.body.style.position = "relative";
                document.body.style.left =
                    -(scrollOffset.x + rect.x) / scale + "px";
                document.body.style.top =
                    -(scrollOffset.y + rect.y) / scale + "px";
                document.body.style.width = scale * 100 + "%";
                document.body.style.height = scale * 100 + "%";
                document.body.style.zoom = scale;
            }
        }

        level = scale;
    }

    /**
     * Pan the document when the mouse cursor approaches the edges
     * of the window.
     */
    function pan() {
        var range = 0.12,
            rangeX = window.innerWidth * range,
            rangeY = window.innerHeight * range,
            scrollOffset = getScrollOffset();

        // Up
        if (mouseY < rangeY) {
            window.scroll(
                scrollOffset.x,
                scrollOffset.y - (1 - mouseY / rangeY) * (14 / level)
            );
        }
        // Down
        else if (mouseY > window.innerHeight - rangeY) {
            window.scroll(
                scrollOffset.x,
                scrollOffset.y +
                    (1 - (window.innerHeight - mouseY) / rangeY) * (14 / level)
            );
        }

        // Left
        if (mouseX < rangeX) {
            window.scroll(
                scrollOffset.x - (1 - mouseX / rangeX) * (14 / level),
                scrollOffset.y
            );
        }
        // Right
        else if (mouseX > window.innerWidth - rangeX) {
            window.scroll(
                scrollOffset.x +
                    (1 - (window.innerWidth - mouseX) / rangeX) * (14 / level),
                scrollOffset.y
            );
        }
    }

    function getScrollOffset() {
        return {
            x:
                window.scrollX !== undefined
                    ? window.scrollX
                    : window.pageXOffset,
            y:
                window.scrollY !== undefined
                    ? window.scrollY
                    : window.pageYOffset,
        };
    }

    return {
        /**
         * Zooms in on either a rectangle or HTML element.
         *
         * @param {Object} options
         *
         *   (required)
         *   - element: HTML element to zoom in on
         *   OR
         *   - x/y: coordinates in non-transformed space to zoom in on
         *   - width/height: the portion of the screen to zoom in on
         *   - scale: can be used instead of width/height to explicitly set scale
         *
         *   (optional)
         *   - callback: call back when zooming in ends
         *   - padding: spacing around the zoomed in element
         */
        to: function (options) {
            // Due to an implementation limitation we can't zoom in
            // to another element without zooming out first
            if (level !== 1) {
                zoom.out();
            } else {
                options.x = options.x || 0;
                options.y = options.y || 0;

                // If an element is set, that takes precedence
                if (!!options.element) {
                    // Space around the zoomed in element to leave on screen
                    var padding =
                        typeof options.padding === "number"
                            ? options.padding
                            : 20;
                    var bounds = options.element.getBoundingClientRect();

                    options.x = bounds.left - padding;
                    options.y = bounds.top - padding;
                    options.width = bounds.width + padding * 2;
                    options.height = bounds.height + padding * 2;
                }

                // If width/height values are set, calculate scale from those values
                if (
                    options.width !== undefined &&
                    options.height !== undefined
                ) {
                    options.scale = Math.max(
                        Math.min(
                            window.innerWidth / options.width,
                            window.innerHeight / options.height
                        ),
                        1
                    );
                }

                if (options.scale > 1) {
                    options.x *= options.scale;
                    options.y *= options.scale;

                    options.x = Math.max(options.x, 0);
                    options.y = Math.max(options.y, 0);

                    magnify(options, options.scale);

                    if (options.pan !== false) {
                        // Wait with engaging panning as it may conflict with the
                        // zoom transition
                        panEngageTimeout = setTimeout(function () {
                            panUpdateInterval = setInterval(pan, 1000 / 60);
                        }, TRANSITION_DURATION);
                    }

                    if (typeof options.callback === "function") {
                        callbackTimeout = setTimeout(
                            options.callback,
                            TRANSITION_DURATION
                        );
                    }
                }
            }
        },

        /**
         * Resets the document zoom state to its default.
         *
         * @param {Object} options
         *   - callback: call back when zooming out ends
         */
        out: async function (options) {
            clearTimeout(panEngageTimeout);
            clearInterval(panUpdateInterval);
            clearTimeout(callbackTimeout);

            magnify({ x: 0, y: 0 }, 1);

            if (options && typeof options.callback === "function") {
                setTimeout(options.callback, TRANSITION_DURATION);
            }
            let ville = [
                document.querySelector("#marquise"),
                document.querySelector("#capelle"),
                document.querySelector("#boulogne"),
                document.querySelector("#portel"),
                document.querySelector("#outreau"),
                document.querySelector("#samer"),
                document.querySelector("#desvres"),
                document.querySelector("#st-etienne"),
                document.querySelector("#txt_boulogne"),
            ];
            const point_boulogne = document.querySelector("#gros_boulogne");
            const txt_boulogne = document.querySelector("#gros_txt_boulogne");
            await unfade(point_boulogne);
            await unfade(txt_boulogne);
            boulogne.classList.remove("agglo--zoomed");
            document.body.style.overflow = "visible";

            ville.forEach((element) => {
                fade(element);
            });
            level = 1;
        },

        // Alias
        magnify: function (options) {
            this.to(options);
        },
        reset: function () {
            this.out();
        },

        zoomLevel: function () {
            return level;
        },
    };
})();

boulogne.addEventListener("click", function () {
    document.body.style.overflow = "hidden";

    zoom.to({
        element: document.querySelector("#path2-0"),
        callback: async function () {
            let ville = [
                document.querySelector("#marquise"),
                document.querySelector("#capelle"),
                document.querySelector("#boulogne"),
                document.querySelector("#portel"),
                document.querySelector("#outreau"),
                document.querySelector("#samer"),
                document.querySelector("#desvres"),
                document.querySelector("#st-etienne"),
                document.querySelector("#txt_boulogne"),
            ];
            const point_boulogne = document.querySelector("#gros_boulogne");
            const txt_boulogne = document.querySelector("#gros_txt_boulogne");
            await fade(point_boulogne);
            await fade(txt_boulogne);
            ville.forEach((element) => {
                unfade(element);
            });
            boulogne.classList.add("agglo--zoomed");
        },
        pan: false,
    });
});

async function fade(element) {
    var op = 1; // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = "none";
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        console.log(element);
        op -= op * 0.1;
    }, 5);
}

async function unfade(element) {
    var op = 0.1; // initial opacity
    element.style.display = "block";
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = "alpha(opacity=" + op * 100 + ")";
        op += op * 0.1;
    }, 5);
}

let agglos;
fetch("data.json").then(function (response) {
    response.json().then(function (json) {
        console.log(json);
        agglos = json;
    });
});

function generateCards(agglo, nomville, index) {
    const cardContainer = document.querySelector(".card-container");
    agglos[agglo][index][nomville].forEach((data, index) => {
        cardContainer.innerHTML = "";
        console.log(data);
        const cardDiv = document.createElement("div");
        const cardId = "card-" + index;
        cardDiv.id = cardId;
        cardDiv.classList.add("card");
        cardDiv.dataset.state = "#about";

        cardDiv.innerHTML = `
			<div class="card-header">
			<div class="card-cover" style="background-image: url('${data.image}')"></div>
			<img class="card-avatar" src="${data.image}" alt="avatar" />
			<h1 class="card-fullname">${data.name}</h1>
			<h3 class="age">${data.jobTitle}</h3>
			<h2 class="card-jobtitle">${data.age}</h2>
			</div>
			<div class="card-main">
			<div class="card-section is-active" id="about">
			<div class="card-content">
			<div class="card-subtitle">ABOUT</div>
				  <p class="card-desc">${data.about}</p>
				</div>
				<div class="card-content">
				  <div class="card-subtitle">HOBBIES</div>
				  <p class="card-desc">${data.hobbies}</p>
				</div>
				
			  </div>
			  <div class="card-section" id="experience">
				<div class="card-content">
				  <div class="card-subtitle">EXPERIENCE DE DEVELOPPEMENT</div>
				  <div class="card-timeline">
					${data.experiences
                        .map(
                            (exp) => `
					  <div class="card-item" data-year="${exp.year}">
						<div class="card-item-title">${exp.title}</div>
						<div class="card-item-desc">${exp.desc}</div>
					  </div>
					  
					`
                        )
                        .join("")}
					</div>
					<div class="card-subtitle">Stacks</div>
				</div>
			  </div>
			  <div class="card-section" id="contact">
				<div class="card-content">
				<div class="card-subtitle">CONTACT ET INFORMATIONS</div>
				  <div class="card-contact-wrapper">
					<div class="card-contact">
					  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
						<circle cx="12" cy="10" r="3" /></svg>
					  ${data.contact.location}
					</div>
					
				   
					<div class="card-contact">
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
					<path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
					</svg>${data.contact.linkedin}
					</div>  
					<div class="card-contact">
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
		<path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
	</svg>${data.contact.github}
					</div>  
				  </div>
				</div>
			  </div>
			  <div class="card-buttons">
				<button data-section="#about" class="is-active">ABOUT</button>
				<button data-section="#experience">EXPERIENCE</button>
				<button data-section="#contact">CONTACT</button>
			  </div>
			</div>
		  `;

        cardContainer.appendChild(cardDiv);

        // Maintenant, vous pouvez récupérer les boutons et les sections pour chaque carte individuellement
        const card = document.getElementById("card-" + index);
        const buttons = card.querySelectorAll(".card-buttons button");
        const sections = card.querySelectorAll(".card-section");

        const handleButtonClick = (e) => {
            const targetSection = e.target.getAttribute("data-section");
            const section = card.querySelector(targetSection);
            targetSection !== "#about"
                ? card.classList.add("is-active")
                : card.classList.remove("is-active");
            card.setAttribute("data-state", targetSection);
            sections.forEach((s) => s.classList.remove("is-active"));
            buttons.forEach((b) => b.classList.remove("is-active"));
            e.target.classList.add("is-active");
            section.classList.add("is-active");
        };

        buttons.forEach((btn) => {
            btn.addEventListener("click", handleButtonClick);
        });
        console.log("end");
    });
}

const marquise = document.querySelector("#marquise");

marquise.addEventListener("click", function () {
    console.log("click");
    generateCards("boulogne", "Marquise", 1);
    modal.style.display = "block";
    container.style.filter = "blur(1rem)";
    // Créer un nouvel événement de type "keydown"
    var event = new KeyboardEvent("keydown", {
        key: "a", // Touche à simuler (dans cet exemple, la touche "A")
        keyCode: 65, // Code de touche correspondant à "A"
        which: 65, // Code de touche correspondant à "A"
        code: "KeyA", // Code de touche standard
        location: 0, // Position de la touche sur le clavier
        ctrlKey: false, // Touche Ctrl enfoncée ou non
        shiftKey: false, // Touche Maj enfoncée ou non
        altKey: false, // Touche Alt enfoncée ou non
        metaKey: false, // Touche Méta enfoncée ou non
        repeat: false, // L'événement est-il un répétition d'une touche enfoncée
        isComposing: false, // Indique si l'événement est composé
    });

    // Dispatch l'événement créé sur le document
    document.dispatchEvent(event);
});
