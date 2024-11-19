// Praktiska Övningar:

// Övning 1: Gör en GET-förfrågan med fetch()

// Använd fetch() för att hämta inlägg från JSONPlaceholder (https://jsonplaceholder.typicode.com/posts).
// Logga resultaten i konsolen.

// let ids = [];
// let titles = [];

// fetch("https://jsonplaceholder.typicode.com/posts")
//  .then((response) => response.json())
//  .then((data) => {
//   console.log("datan: ", data);
//    titles = data.map((item) => item.title);
  // console.log("titles: ", titles); //en array
  //  ids = data.map((item) => item.id);

  // titles.forEach((title, id) => {
  //  console.log("id: ", id, "title: ", title);

  // skapa ul och li element i html med title i varje li
   // const ul = document.createElement("ul");
   // const li = document.createElement("li");
   // li.innerText = title;
   // ul.appendChild(li);
   // document.body.appendChild(ul);
 
 //  });

 // })
 // .catch((error) => {
 //  console.error("Ett error inträffade: ", error);
 // });

 // console.log("utanför fetch: ", ids); //nästa veckas tema
// Uppgift:
// Visa endast titeln och användar-ID för varje inlägg.

// -----------------------------------------------------------
// Övning 2: Hantera fel i nätverksförfrågningar

// Modifiera föregående övning för att:
// Kontrollera HTTP-status med response.ok.
// Fånga fel med .catch() och visa ett felmeddelande i konsolen.
// fetch("https://jsonplaceholder.typicode.com/posts")
//  .then((response) => {
//   if (!response.ok) {
//    throw new Error(`HTTP-fel! Status: ${response.status}`);
//   }
//   return response.json();
//  })
//  .then((data) => {
//   console.log("datan: ", data);
//  })
//  .catch((error) => {
//   console.error("Ett error inträffade: ", error);
//   const fetchResult = document.getElementById("fetchResult");
//   fetchResult.innerText = `HTTP-fel! Status, ${error}`;
// })
// Utmaning:
// Lägg till ett fallback-meddelande på sidan om API inte svarar.

// -----------------------------------------------------------
// Övning 3: Använd HTTPS för att hämta data från GitHub API
// fetch("https://api.github.com/users/ToeCrow/repos")
// .then((response) => {
//      if (!response.ok) {
//        throw new Error(`HTTP-fel! Status: ${response.status}`);
//      }
//      return response.json();
//    })
//    .then((data) => {
     
//      console.log("data: ", data);
//    })
//    .catch((err) => {
//      console.error("err: ", err);
//    });


// Gör en GET-förfrågan till GitHub API (https://api.github.com/users/{användarnamn}/repos).
// Visa repository-namnen i en lista på webbsidan.

// Utmaning:
// Lägg till en input där användaren kan ange ett GitHub-användarnamn och visa deras repositories.

  function getRepos() {
    const userName = document.getElementById("userName").value;
    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data: ", data);
        const ul = document.createElement("ul");
        data.forEach((repo) => {
          const li = document.createElement("li");
          li.innerText = repo.name;
          ul.appendChild(li);
        });
        document.body.appendChild(ul);
      })
      .catch((error) => {
        console.error("Ett error inträffade: ", error);
      });
  }
  window.addEventListener("load", function () {
   const input = document.createElement("input");
   input.type = "text";
   input.id = "userName";
   const button = document.createElement("button");
   button.innerText = "Visa repositories";
   button.addEventListener("click", getRepos);
   document.body.appendChild(input);
   document.body.appendChild(button);
  });
 
// -----------------------------------------------------------
// Övning 4: Bygg en liten app med fetch()

// Skapa en enkel applikation som:
// Hämtar väderdata från OpenWeatherMap API.
// Visar temperatur, väderbeskrivning och plats.
fetch("https://api.openweathermap.org/data/2.5/weather?lat=57.73&lon=12.12&appid=f5d21086c0e96fb934d7912aa22ea60e&units=metric&lang=sv")
.then((response) => {
     if (!response.ok) {
       throw new Error(`HTTP-fel! Status: ${response.status}`);
     }
     return response.json();
   })
   .then((data) => {
     
     console.log("Weatherdata: ", data);
     console.log("Stad: ", data.name); 
     console.log("Temperatur: ", data.main.temp);
     console.log("Beskrivning: ", data.weather[0].description);
   })
   .catch((err) => {
     console.error("err: ", err);
   });
// Tips:
// Läs API-dokumentationen för OpenWeatherMap.
// Använd en gratis API-nyckel för autentisering.

// -----------------------------------------------------------
// Övning 5:

// Hämta alla hundar genom en fetch mot API'et:
// https://majazocom.github.io/Data/dogs.json
// fetch("https://majazocom.github.io/Data/dogs.json")
// .then((response) => {
//      if (!response.ok) {
//        throw new Error(`HTTP-fel! Status: ${response.status}`);
//      }
//      return response.json();
//    })
//    .then((data) => {
     
//      console.log("Dogs: ", data);
//      const ul = document.createElement("ul");

//      data.forEach((dog) => {
      // console.log(dog.name);
//       const li = document.createElement("li");
//       li.innerText = dog.name;
//       ul.appendChild(li);
//     });
//     document.body.appendChild(ul);
//      })
   
//    .catch((err) => {
//      console.error("err: ", err);
//    });
// Rendera ut NAMNEN en och en ut i konsollen

// Rendera ut dem i DOM'en istället så de blir synliga för en användare

// -----------------------------------------------------------
// Övning 6:

// Hämta alla böcker genom en fetch mot API'et:
// https://majazocom.github.io/Data/books.json

// Rendera ut de böcker vars sidor inte är längre än 500 pages
// -----------------------------------------------------------
// Övning 7:

// Hämta alla besökare till ett jobb-event genom en fetch mot API'et:
// https://majazocom.github.io/Data/attendees.json

// Rendera enbart ut de som skall komma:
// attending: true

// Rendera enbart ut de som skall komma OCH som har allergier
// -----------------------------------------------------------
