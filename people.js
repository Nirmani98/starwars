//take api as a variable
const api_url = "https://swapi.dev/api/people/starships/";

// another way to fect data from api
// function getapi() {
//   this.fetch(api_url).then((res) => {
//     this.fetch(res.people).then((people) => alert(JSON.stringify(people)));
//   });
// }

//async function to pass api url
async function getapi(api_url) {
  const res = await fetch(api_url); //define constant respone and store fetched data
  return res.json(); // define constant data and store in JSON format
}

//create a table with fetched data
// tableRow get all data as a single object to deconstruction and create columns from the data.
function tableRow(data) {
  const row = document.createElement("tr");
  const { name, height, birth_year, mass, starships } = data;
  row.appendChild(constructElement("td", name));
  row.appendChild(constructElement("td", height));
  row.appendChild(constructElement("td", birth_year));
  row.appendChild(constructElement("td", mass));
  row.appendChild(constructElement("td", starships));
  return row;
}

//tagName: read only property
function constructElement(tagName, text, cssClasses) {
  const element = document.createElement(tagName); //returns the tag name of the element
  const content = document.createTextNode(text); //define fetched data
  element.appendChild(content); //appened each fetched data
  if (cssClasses) {
    element.classList.add(...cssClasses);
  }
  return element;
}

const pplTable = document
  .getElementById("people-table")
  .getElementsByTagName("tbody")[0]; //get all fetched data to insert into table

// store data from people api into a table as define above
getapi("https://swapi.dev/api/people/").then((data) => {
  data.results.forEach((results) => {
    const row = tableRow(results);
    pplTable.appendChild(row);
  });
});
