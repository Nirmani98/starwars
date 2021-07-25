//fetch data from people s table
const api_url = "https://swapi.dev/api/people/starships/";

function getapi() {
  this.fetch(api_url).then((res) => {
    this.fetch(res.people).then((people) => alert(JSON.stringify(people)));
  });
}

async function getapi(api_url) {
  const res = await fetch(api_url);
  return res.json();
}

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

function constructElement(tagName, text, cssClasses) {
  const element = document.createElement(tagName);
  const content = document.createTextNode(text);
  element.appendChild(content);
  if (cssClasses) {
    element.classList.add(...cssClasses);
  }
  return element;
}

const pplTable = document
  .getElementById("people-table")
  .getElementsByTagName("tbody")[0];

getapi("https://swapi.dev/api/people/").then((data) => {
  data.results.forEach((results) => {
    const row = tableRow(results);
    pplTable.appendChild(row);
  });
});
