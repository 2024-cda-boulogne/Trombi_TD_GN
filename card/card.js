// Données JSON fictives pour les cartes
const jsonData = [
    {
      name: "Geoffrey Noel",
      jobTitle: "Apprenti CDA",
      age: "22 ans",
      image: "image/moi image.jpg",
      about: "Bonjour je suis Geoffrey Noel et je suis un apprenti CDA",
      hobbies: "Basket-ball",
      experiences: [
        { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
        { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
        { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
      ],
      stacks: [
        { 
          images: ["image/stack1.jpg", "image/stack2.jpg", "image/stack3.jpg"]
        },
        // Ajoutez d'autres stacks si nécessaire
      ],
      contact: {
        location: "Marquise",
        phone: "07 69 94 20 83",
        email: "geoffrey.noel08@gmail.com",
        linkedin: "https://www.linkedin.com/in/geoffrey-noel-093683269/",
        github: "https://github.com/Geoffrey184",
      }
    },

     {
      name: "Theo Duflos",
      jobTitle: "Apprenti CDA",
      age: "22 ans",
      image: "image/theo-duflos.jpg",
      about: "Bonjour je suis Theo Duflosl et je suis un apprenti CDA",
      hobbies: "videos games, cinema, animé",
      experiences: [
        { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
        { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
        { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
      ],
      contact: {
        location: "Saint Etienne au Mont",
        phone: "",
        email: "",
        linkedin: "https://www.linkedin.com/in/théo-duflos-8625a8262/",
        github: "https://github.com/Yokokorico",
    
      }
    },

    {
        name: "Theo Couvelard",
        jobTitle: "Apprenti CDA",
        age: "21 ans",
        image: "image/theocouvelard.webp",
        about: "Bonjour je suis Theo Couvelard et je suis un apprenti CDA",
        hobbies: "musculation, jeux vidéos",
        experiences: [
          { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
          { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
          { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
        ],
        contact: {
          location: "la capelle les boulogne",
          phone: "",
          email: "",
          linkedin: "https://www.linkedin.com/in/théo-couvelard-4089111b5/",
          github: "https://github.com/Theo02-12",
        }
      },

      {
        name: "Karl Gavois ",
        jobTitle: "Apprenti CDA",
        age: "23 ans",
        image: "image/karl.webp",
        about: "Bonjour je suis Karl Gavois et je suis un apprenti CDA",
        hobbies: "Jeu vidéal / Formule 1 ",
        experiences: [
          { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
          { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
          { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
        ],
        contact: {
          location: "Outreau",
          phone: "",
          email: "",
          linkedin: "https://www.linkedin.com/in/karl-gavois/",
          github: "https://github.com/Karl-Gavois",
        }
      },

      {
        name: "Alex Buffet",
        jobTitle: "Apprenti CDA",
        age: "20 ans",
        image: "image/alexbuffet.webp",
        about: "L'amour gagne toujours a la fin",
        hobbies: "jeux videos, la poésie",
        experiences: [
          { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
          { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
          { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
        ],
        contact: {
          location: "Boulogne",
          phone: "06 84 73 28 19",
          email: "alex.buffet7839@gmailcom",
          linkedin: "https://www.linkedin.com/in/alex-b-945997271/",
          github: "https://github.com/JunkBezoul ",
        }
      },

      {
        name: "Kévin LEDEZ",
        jobTitle: "Apprenti CDA",
        age: "35 ans",
        image: "image/kevinledez.jpg",
        about: "Bonjour je suis Kévin LEDEZ et je suis un apprenti CDA",
        hobbies: "Jeux, Programmation, Musique",
        experiences: [
          { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
          { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
          { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
        ],
        contact: {
          location: "Desvres",
          phone: "",
          email: "",
          linkedin: "https://www.linkedin.com/in/kevin-ledez/",
          github: "https://github.com/kevin-ledez",
        }
      },

      {
        name: "Jean-Baptiste Lavisse",
        jobTitle: "Apprenti CDA",
        age: "33 ans",
        image: "image/jbl.jpg",
        about: "Bonjour je suis Jean-Baptiste Lavisse et je suis un apprenti CDA",
        hobbies: "Piano, Cinéma",
        experiences: [
          { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
          { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
          { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
        ],
        contact: {
          location: "Ecques",
          phone: "",
          email: "",
          linkedin: "https://www.linkedin.com/in/jblavisse",
          github: "https://github.com/jblavisse",
        }
      },

      {
        name: "William Truant",
        jobTitle: "Apprenti CDA",
        age: "20 ans",
        image: "image/will.jpg",
        about: "Bonjour je suis William Truant et je suis un apprenti CDA",
        hobbies: "Jeu vidéo",
        experiences: [
          { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
          { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
          { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
        ],
        contact: {
          location: "Boulogne",
          phone: "",
          email: "",
          linkedin: "https://www.linkedin.com/in/william-truant-b57b92244/",
          github: "https://github.com/notlimai",
        }
      },

      {
        name: "Eric Da Silva Rocha",
        jobTitle: "Apprenti CDA",
        age: "28 ans",
        image: "image/eric.png",
        about: "On ne repousse pas ses limites, on les découvre.",
        hobbies: "Jeu vidéo",
        experiences: [
          { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
          { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
          { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
        ],
        contact: {
          location: "Outreau",
          phone: "06 24 09 57 24",
          email: "dasilvarochaeric@gmail.com",
          linkedin: "https://www.linkedin.com/in/eric-da-silva-rocha/",
          github: "https://github.com/Ericdsr",
        }
      },

      {
        name: "Vivien Gajac",
        jobTitle: "Apprenti CDA",
        age: "38 ans",
        image: "image/vivien.jpg",
        about: "Bonjour je suis Vivien Gajac et je suis un apprenti CDA",
        hobbies: "Jeux vidéos, Guitare, Lever de coude",
        experiences: [
          { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
          { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
          { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
        ],
        contact: {
          location: "Boulogne",
          phone: "",
          email: "",
          linkedin: " https://www.linkedin.com/in/vivien-gajac-b43a0b2a2/",
          github: "https://github.com/viviengajac",
        }
      },

      {
        name: "Alexandre Merlin",
        jobTitle: "Apprenti CDA",
        age: "31 ans",
        image: "image/Merlin_Alexandre.webp",
        about: "Bonjour je suis Alexandre Merlin et je suis un apprenti CDA",
        hobbies: " jeux vidéos, peinture",
        experiences: [
          { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
          { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
          { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
        ],
        contact: {
          location: "Saint André lez Lille",
          phone: "",
          email: "",
          linkedin: "https://www.linkedin.com/in/alexandre-merlin-82a395a8/",
          github: "https://github.com/Merlinovitch",
        }
      },

      {
        name: "Nicolas Herbez",
        jobTitle: "Apprenti CDA",
        age: "25 ans",
        image: "image/nicoh.jpg",
        about: "Bonjour je suis Nicolas Herbez et je suis un apprenti CDA",
        hobbies: "",
        experiences: [
          { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
          { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
          { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
        ],
        contact: {
          location: "Samer",
          phone: "",
          email: "",
          linkedin: "",
          github: "",
        }
      },

      {
        name: "Laurie Barsby",
        jobTitle: "Apprenti CDA",
        age: "25 ans",
        image: "image/lbars.jpg",
        about: "Bonjour je suis Laurie Barsby et je suis un apprenti CDA",
        hobbies: "?",
        experiences: [
          { year: "2023", title: "Formation Simplon", desc: "Développeur intégrateur" },
          { year: "2023", title: "Formation Simplon dwwm", desc: "Développeur Web et Web Mobile" },
          { year: "2024", title: "Formation Simplon CDA", desc: "Concepteur développeur d'applications" }
        ],
        contact: {
          location: "Calais",
          phone: "",
          email: "",
          linkedin: "https://www.linkedin.com/in/barsby-laurie-62100/",
          github: "",
        }
      },
    // Ajoutez d'autres objets de données pour chaque carte si nécessaire
  ];
  
  function generateCards(data) {
    const cardContainer = document.querySelector(".card-container");
  
    data.forEach((person, index) => {
      const cardDiv = document.createElement("div");
      const cardId = "card-" + index;
      cardDiv.id = cardId;
      cardDiv.classList.add("card");
      cardDiv.dataset.state = "#about";
  
      cardDiv.innerHTML = `
        <div class="card-header">
        <div class="card-cover" style="background-image: url('${person.image}')"></div>
        <img class="card-avatar" src="${person.image}" alt="avatar" />
        <h1 class="card-fullname">${person.name}</h1>
        <h3 class="age">${person.jobTitle}</h3>
        <h2 class="card-jobtitle">${person.age}</h2>
        </div>
        <div class="card-main">
        <div class="card-section is-active" id="about">
        <div class="card-content">
        <div class="card-subtitle">ABOUT</div>
              <p class="card-desc">${person.about}</p>
            </div>
            <div class="card-content">
              <div class="card-subtitle">HOBBIES</div>
              <p class="card-desc">${person.hobbies}</p>
            </div>
            
          </div>
          <div class="card-section" id="experience">
            <div class="card-content">
              <div class="card-subtitle">EXPERIENCE DE DEVELOPPEMENT</div>
              <div class="card-timeline">
                ${person.experiences.map((exp) => `
                  <div class="card-item" data-year="${exp.year}">
                    <div class="card-item-title">${exp.title}</div>
                    <div class="card-item-desc">${exp.desc}</div>
                  </div>
                  
                `).join('')}
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
                  ${person.contact.location}
                </div>
                
               
                <div class="card-contact">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z"></path>
                </svg>${person.contact.linkedin}
                </div>  
                <div class="card-contact">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
</svg>${person.contact.github}
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
    });
  
    // Maintenant, vous pouvez récupérer les boutons et les sections pour chaque carte individuellement
    data.forEach((person, index) => {
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
    });
  }
  
  // Appelez la fonction pour générer les cartes avec les données JSON
  generateCards(jsonData);
  