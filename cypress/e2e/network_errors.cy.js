
//mocha/chai -> tests run instantly
//cypress -> can slow things down.
//-want less test files
//visit page once -> intercept once
//network errors - good to group all sad paths
//group happy paths

describe('Display movie details', () => {
  it('should give an error message for a 404 status code', () => {
    // it'll run the intercept fetch
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      //we'll tell it to give back a 404 response
      statusCode: 404,
      fixture: "movie_details.json"
    })
    // alias name for intercept , you create vairable name
    .as('getMovieData')
    cy.visit('http://localhost:3000/potatoes')
    //wait for intercept (404 error to complete)
    cy.wait('@getMovieData')
    cy.get('.error-container')
    .contains(`404 Page Not Found: The page you are looking for doesn't exist`);
  });

  it('should give an error message for a 502 status code', () => {
    // Intercepting a 502 status code
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      fixture: "movie_details.json"
    })
    // alias name for intercept , you create vairable name
    .as('getMovieData')
    cy.visit('http://localhost:3000')
    //wait for intercept (404 error to complete)
    cy.wait('@getMovieData')
    cy.get('.error-container')
    .contains(`The server is down. Please try again later.`);
  });
});


