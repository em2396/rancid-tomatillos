describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})


// /
// describe('Display movie details', () => {
//   beforeEach(() => {
//     cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
//       statusCode: 500,
//       fixture: './movies.json'
//     }),


//or 

//describe('Display movie details', () => {
//   beforeEach(() => {
//     cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
//       statusCode: 200,
//       fixture: './movies.json'
//     }),
//     cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270', {
//       statusCode: 400,
//       fixture: "movie_details"
//     }),
//     cy.visit('http://localhost:3000')
//   })

//   it('should display specific movie details on page load', () => {
//   // cy.get('.selected-movie').should('be.visisble')
//   // cy.get('.backdrop-poster').should('be.visible').and('have.attr', 'src', 'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg');
//   // cy.get('.single-post').should('be.visible').and('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg');
//   cy.get('.single-text').should('contain','Release date: 2022-10-19')
//   //.should('have.attr', 'src').should('include', 'source link url')
//   }) 
// })

//   it('should display specific movie details on page load', () => {
//   // cy.get('.selected-movie').should('be.visisble')
//   // cy.get('.backdrop-poster').should('be.visible').and('have.attr', 'src', 'https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg');
//   // cy.get('.single-post').should('be.visible').and('have.attr', 'src', 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg');
//   cy.get('.single-text').should('contain','Release date: 2022-10-19')
//   //.should('have.attr', 'src').should('include', 'source link url')
//   }) 
// })

//only get all movies.. error
//404 - same fixture, bc 404:

//error:
// describe('Display movie details', () => {

// cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
//       statusCode: 404, //page isn't there 
//       fixture: './movies.json'
//     }),

//     cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
//       statusCode: 502, //network issue
//       fixture: './movies.json'
//     }),