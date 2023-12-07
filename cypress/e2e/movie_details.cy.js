describe('Display movie details', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: './movies.json'
    }),
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: "movie_details"
    }),
    cy.visit('http://localhost:3001')
  })

  it('should display specific movie details on page load', () => {
  cy.get('.single-text').should('exist');
  cy.get('.single-text').invoke('text').should('contain','Release date: 2022-10-19 Overview: Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world. Average rating: 4.00/10 Genre: Action, Fantasy, Science Fiction')
  }) 
})

