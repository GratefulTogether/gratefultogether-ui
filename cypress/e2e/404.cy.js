describe('404 page have expected user experience.', () => {
  it('Should have the proper elements and attributes of those elements.', () => {
    cy.visit('http://localhost:3000')
    cy.visit('http://localhost:3000/gibberish')
    cy.url()
    .should('eq', 'http://localhost:3000/gibberish')
    cy.get('#root')
    .within(()=>{
      cy.get('.App')
      .within(()=>{
        cy.get('.not-found')
        .should('have.attr', 'src')
        .should('eq', '/static/media/404.72a0ff75f3432cc9c2b25d34c037b6f0.svg')
        cy.get('.not-found')
        .should('have.attr', 'alt')
        .should('eq', '404 page not found')
      })
    })
  })
})