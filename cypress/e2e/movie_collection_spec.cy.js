
//do describe block based on every user action
//like click on movie details
//search bar:

describe('Display header on page load and collection of movies', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      fixture: './movies.json'
    })
    cy.visit('http://localhost:3000')
  })

  it('should display rancid tomatillos', () => {
      cy.get('img[alt="rancid tomatillos"]').should('be.visible')
      .get('img[alt="rancid tomatillos"]').should('have.attr', 'src').and('include', 'https://blog.flamingtext.com/blog/2023/11/30/flamingtext_com_1701310263_337249236.png')
  })

  it('should be able to see seven movies when page loads', () => {
    //For example, you can use the children selector to target the direct children of the .movies-container and then assert on their number.
    //testing: want to validate first and last!
    cy.get('.movies-container').children().should('have.length', 7);
    cy.get('.movies-container').children().first().find('.poster').should('have.attr', 'alt', 'Poster for Black Adam')
    cy.get('.movies-container').children().last().find('.poster').should('have.attr', 'alt', 'Poster for Blowback')
  })
  
  it('user should be able to hover over movie and show movie details, heart, and rating options', () => {
    // Assuming there are multiple movie posters and you want to interact with the first one
    //when we trigger mouseover, we want cypress to do a mouseover -> event, force/ true is like making that happens?
    cy.get('.poster-container').first().trigger('mouseover', {force: true});
    cy.get('.movie-details').should('contain','This movie was released on 2022-10-19 with an average rating of 4.00/10.')
    cy.get('.poster-container').last().trigger('mouseover', {force: true});
    cy.get('.movie-details').should('contain','This movie was released on 2022-06-17 with an average rating of 2.00/10.')
  })
})  

describe('Display movie details', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    statusCode: 200,
    fixture: './movies.json'
    }),
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
      statusCode: 200,
      fixture: "movie_details"
    }),
    cy.visit('http://localhost:3000')
  })

  it('should display specific movie details on page load', () => {
  //It's possible that the element is not yet present in the DOM when the click command is executed. You can add a wait time using cy.wait() or use other Cypress commands like cy.should('be.visible') to ensure that the element is ready before attempting to click it.
  cy.get('.poster-container').get('.poster').as('btn')
  .get('@btn').eq(0).click({force: true})
  //{force: true} makes sure that click happens bc there are other elements that cover this... this click is being covered by another
  cy.get('.selected-movie').get('.single-text').should('exist');
  cy.get('.single-text').invoke('text').should('contain','Release date: 2022-10-19 Overview: Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world. Average rating: 4.00/10 Genre: Action, Fantasy, Science Fiction')
  cy.get('img[alt="Poster for https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"]').should('be.visible')
  cy.get('img[alt="Poster for https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"').should('have.attr','src').and('include','https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg')
  })

  it('when user clicks on back to home button, it should display the main movies page', () => {
  cy.visit('http://localhost:3000/movies/436270')
  cy.get('.back-to-home').click()
  })
})
