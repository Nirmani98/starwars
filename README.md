# StarWars API Project

This project allows users to view profiles of characters, planets and starships from the Star Wars universe.

## How to Use the Web App
### Home Page:

- There are three buttons: ***People, Starships, Planet***.
- User can click any of those button to view data about People, Starships and Planets from the movies.
  - **People Button** =>  go to ***People page***
  - **Starships Button** =>  go to ***Starships page***
  - **Planets Button** =>  go to ***Planets page***

### People Page:
- Users have presented details of characters in a table.
- Click the table header of **Starships column** to go to *Starships Page*.

### Starships Page:
- Table shows several details of each Starship.

### Planets Page:
- Details of planets within the Star Wars Universe ate displayed on the table.
- Click the table header of the column, **Residents** to view the *People page*.


Every page has a **Back button** at the top right side for users to go back to the *Home page*.

## Potentail Improvements
1. Issue: Can not fetch data from an internal array as data display as HTTP links. Therefore, I need to find a way to get only the necessary data.
- For instance: Residents Colum in the Planets table should show only the name of characters, but it shows all the links.
2. Issue: Web Applications need to improve their user interaction more.
- For instance: Create a quiz to test users' knowledge about Starwars movies.
3. Display data creatively instead of in tables. 
- For instance: create a random generator to show data.

## Assumptions
1. Finish the project within five days.
2. use React/javaScript to develop the project.
3. use images and theme colour from StarWars Movies.

## Design
The initial idea was to create a one-page web application. However, It would have complicated the development as I need to fetch data from API. Therefore, I decided to have three pages and each dedicated to each category. One of the features that I wanted to include is to add links to rows that have a connection to other tables
(For example: connect films in People table to Film table to enable users to see corresponding data). Since the Web application has three pages, it is necessary
to have a reliable navigation system on every page. Therefore **Back buttons** are needed to be added. Overall the Web application is simple and user friendly, but I look forward to improving it in the future.
	
