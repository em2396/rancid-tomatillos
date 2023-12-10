

describe('Display movie details', () => {
  it('should give an error message for a 404 status code', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404,
      fixture: "movie_details.json"
    })
    .as('getMovieData')
    cy.visit('http://localhost:3000/potatoes')
    cy.wait('@getMovieData')
    cy.get('.error-container')
    .contains(`404 Page Not Found: The page you are looking for doesn't exist`);
  });

  it('should give an error message for a 502 status code', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      fixture: "movie_details.json"
    })
    .as('getMovieData')
    cy.visit('http://localhost:3000')
    cy.wait('@getMovieData')
    cy.get('.error-container')
    .contains(`The server is down. Please try again later.`);
  });
});


