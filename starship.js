//get  data for startships table
const film_url = "https://swapi.dev/api/people/films/";

async function getapi2(film_url) {
  const res = await fetch(film_url);
  return res.json();
}

function table2Row(data) {
  const row = document.createElement("tr");
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT,
    starship_class,
    pilots,
  } = data;
  row.appendChild(constructElement("td", name));
  row.appendChild(constructElement("td", model));
  row.appendChild(constructElement("td", manufacturer));
  row.appendChild(constructElement("td", cost_in_credits));
  row.appendChild(constructElement("td", length));
  row.appendChild(constructElement("td", max_atmosphering_speed));
  row.appendChild(constructElement("td", crew));
  row.appendChild(constructElement("td", passengers));
  row.appendChild(constructElement("td", cargo_capacity));
  row.appendChild(constructElement("td", consumables));
  row.appendChild(constructElement("td", hyperdrive_rating));
  row.appendChild(constructElement("td", MGLT));
  row.appendChild(constructElement("td", starship_class));

  row.appendChild(constructElement("td", pilots));

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

const ssTable = document
  .getElementById("starships-table")
  .getElementsByTagName("tbody")[0];

getapi2("https://swapi.dev/api/starships/").then((data) => {
  data.results.forEach((results) => {
    const row = table2Row(results);
    ssTable.appendChild(row);
  });
});
