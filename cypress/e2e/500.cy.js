
describe('500 level errors on main should route home.', () => {


  it('Failure of initial get of today\'s data should route to error page, and have proper elements and attributes.', () => {

    cy.intercept("GET", 'https://gratefultogether-api-49ea7cf50543.herokuapp.com/api/v1/wins', {
      statusCode: 500
    }).as('initialGet')
    
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {

      cy.stub(win, "WebSocket")

      }
    })
    cy.wait('@initialGet')

    cy.url()
    .should('eq', 'http://localhost:3000/error')

    cy.get('#root')
    .within(()=>{
      cy.get('.App')
      .within(()=>{
        cy.get('img')
        .should('have.attr', 'src')
        .should('eq', '/static/media/fivehundred.685fdbd885a9a3ee9e677cee0dc90f6a.svg')
      })
    })
  })
})