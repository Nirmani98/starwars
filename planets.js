//get  data for planets table
const people_url = "https://swapi.dev/api/people/";

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
    diameter,
    gravity,
    terrain,
    population,
    films,
  } = data;
  row.appendChild(constructElement("td", name));
  row.appendChild(constructElement("td", rotation_period));
  row.appendChild(constructElement("td", orbital_period));
  row.appendChild(constructElement("td", climate));
  row.appendChild(constructElement("td", surface_water));
  row.appendChild(constructElement("td", residents));
  row.appendChild(constructElement("td", diameter));
  row.appendChild(constructElement("td", gravity));
  row.appendChild(constructElement("td", terrain));
  row.appendChild(constructElement("td", population));
  row.appendChild(constructElement("td", films));
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
