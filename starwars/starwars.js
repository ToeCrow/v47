const fetchAllPages = async (url) => {
 let allData = [];
 let nextUrl = url;

 while (nextUrl) {
  const response = await fetch(nextUrl);
  const data = await response.json();

  allData = allData.concat(data.results);

  nextUrl = data.next;
 }
 return allData;
};

fetchAllPages("https://swapi.dev/api/people/")
 .then((allPeople) => {
  console.log("All people data: ", allPeople)
  // console.log(Array.isArray(allPeople))
  // console.log("allPeople", typeof allPeople)
 })
 .catch((error) => {
  console.error("Error fetching data: ", error);
 });

//? Tror inte jag behöver denna då det på nåt sätt borde gå att hämta planet genom url i objektet
// fetchAllPages("https://swapi.dev/api/planets/")
//  .then((allPlanets) => {
//   console.log("All Planet data: ", allPlanets)
//  })
//  .catch((error) => {
//   console.error("Error fetching data: ", error);
//  });

