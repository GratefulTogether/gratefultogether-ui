import dayjs from 'dayjs'

const today = dayjs().format('YYYY-MM-DD')

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
    },
    {
      "id": 3,
      "type": "win", 
      "attributes": {
          "user_name": "Circe",
          "entry": "Ate some cookies",
          "created_at": today
      }
    }  
    ]}
  }).as('initialGet')
})



describe('404 page have expected user experience.', () => {
  it('Should have the proper elements and attributes of those elements.', () => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {

      cy.stub(win, "WebSocket")

      }
    })
    cy.wait('@initialGet')

    cy.url()
    .should('eq', 'http://localhost:3000/')

    cy.visit("http://localhost:3000/gibberish", {
      onBeforeLoad(win) {

      cy.stub(win, "WebSocket")

      }
    })

    cy.url()
    .should('eq', 'http://localhost:3000/gibberish')

    cy.get('#root')
    .within(()=>{
      cy.get('.App')
      .within(()=>{
        cy.get('a')
        .should('have.attr', 'href')
        .should('eq', '/')
        cy.get('a')
        .within(()=>{
          cy.get('button')
          .should('have.text', 'Home')
        })
        cy.get('.not-found')
        .should('have.attr', 'src')
        .should('eq', '/static/media/404.72a0ff75f3432cc9c2b25d34c037b6f0.svg')
        cy.get('.not-found')
        .should('have.attr', 'alt')
        .should('eq', '404 page not found')
      })
    })
  })

  it('Should be able to return home after being sent to 404 page.', () => {
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {

      cy.stub(win, "WebSocket")

      }
    })
    cy.wait('@initialGet')

    cy.url()
    .should('eq', 'http://localhost:3000/')

    cy.visit("http://localhost:3000/gibberish", {
      onBeforeLoad(win) {

      cy.stub(win, "WebSocket")

      }
    })

    cy.url()
    .should('eq', 'http://localhost:3000/gibberish')

    cy.get('#root')
    .within(()=>{
      cy.get('.App')
      .within(()=>{
        cy.get('a')
        .within(()=>{
          cy.get('button')
          .click()
        })

      })
    })
    cy.url()
    .should('eq', 'http://localhost:3000/')
  })
})





// from date page