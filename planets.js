//get  data for planets table
const people_url = "https://swapi.dev/api/people/";

function getPlanetApi() {
  this.fetch(people_url).then((res) => {
    this.fetch(res.planets).then((planets) => alert(JSON.stringify(planets)));
  });
}

async function getPlanetApi(people_url) {
  const res = await fetch(people_url);
  return res.json();
}

function table3Row(data) {
  const row = document.createElement("tr");
  const {
    name,
    rotation_period,
    orbital_period,
    climate,
    surface_water,
    residents,
  } = data;
  row.appendChild(constructElement("td", name));
  row.appendChild(constructElement("td", rotation_period));
  row.appendChild(constructElement("td", orbital_period));
  row.appendChild(constructElement("td", climate));
  row.appendChild(constructElement("td", surface_water));
  row.appendChild(constructElement("td", residents));
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

const planetsTable = document
  .getElementById("planets-table")
  .getElementsByTagName("tbody")[0];

getPlanetApi("https://swapi.dev/api/planets/").then((data) => {
  data.results.forEach((results) => {
    const row = table3Row(results);
    planetsTable.appendChild(row);
  });
});
