import dayjs from 'dayjs'

const today = dayjs().format('YYYY-MM-DD')

describe('template spec', () => {

  beforeEach (() => {

    cy.intercept("GET", 'https://gratefultogether-api-49ea7cf50543.herokuapp.com/api/v1/wins', {
      statusCode: 200,
      body: {data:[
        {
          "id": 1,
          "type": "win", 
          "attributes": {
              "user_name": "Neato",
              "entry": "slept well",
              "created_at": today
          }
        }, 
        {
          "id": 2,
          "type": "win", 
          "attributes": {
              "user_name": "Circe",
              "entry": "love my cats",
              "created_at": today
          }
      } 
      ]}
    }).as('initialGet')
  })

  it('Should load logo on front page properly.', () => {

    
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {

      cy.stub(win, "WebSocket")

      }
    })
    cy.wait('@initialGet')

    cy.url()
    .should('eq', 'http://localhost:3000/')

    cy.get('.App')
    .within(()=>{
      cy.get('div')
      .eq(0)
      .within(()=>{
        cy.get('img')
        .should('have.attr', 'alt')
        .should('eq', 'Grateful Together Logo')
        cy.get('img')
        .should('have.attr', 'src')
        .should('eq', '/static/media/GratefulTogetherLogo.3db29a133774eb0a3e4b.png')
        
      })
    })
  })
})