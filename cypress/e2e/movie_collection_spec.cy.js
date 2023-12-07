describe('Display collection of movies', () => {
  it('should display an error message', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 404,
        fixture: './movies.json',
      }
    )
    cy.visit('http://localhost:3000')
    .get('.error-cont', { timeout: 10000 }) // Increase the timeout if needed
    .contains('404 Not Found');
  });

  it('should give an error message for a 500 status code',() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 502,
      body: ''
    })
    cy.visit('http://localhost:3000')
    .get('.error-cont', { timeout: 10000 }) // Increase the timeout if needed
    .contains('502 Bad Gateway');
  });

  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: './movies.json'
    })
    cy.visit('http://localhost:3000')
  })
  
  it('should be able to see seven movies when page loads', () => {
    //For example, you can use the children selector to target the direct children of the .movies-container and then assert on their number.
    cy.get('.movies-container', { timeout: 10000 }) // Increase the timeout if needed
    .children()
    .should('have.length', 7);
    cy.get('.movies-container').children().first().find('.poster').should('have.attr', 'alt', 'Poster for Black Adam')
    // .should('contain','Poster for Black Adam')
  })
  it('user should be able to hover over movie and show movie details, heart, and rating options', () => {
    // Assuming there are multiple movie posters and you want to interact with the first one
    cy.get('.poster-container').first().trigger('mouseover', {force: true});
    cy.get('.movie-details').should('contain','This movie was released on 2022-10-19 with an average rating of 4.00/10.')
  })
})