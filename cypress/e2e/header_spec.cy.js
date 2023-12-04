describe('Display header on page load', () => {
  it('should display rancid tomatillos', () => {
    cy.visit('http://localhost:3000')
      .get('img[alt="rancid tomatillos"]').should('be.visible')
      .get('img[alt="rancid tomatillos"]').should('have.attr', 'src').and('include', 'https://blog.flamingtext.com/blog/2023/11/30/flamingtext_com_1701310263_337249236.png')
  })
})