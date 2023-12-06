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
    cy.visit('http://localhost:3000')
  })

  it('should display specific movie details on page load', () => {
  cy.get('.single-text').should('exist');
  cy.get('.single-text').invoke('text').should('contain','Release date: 2022-09-15 Overview: The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life. Average rating: 4.00/10 Genre: Action, Drama, History')
  }) 
})

