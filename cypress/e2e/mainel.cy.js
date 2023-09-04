import dayjs from 'dayjs'

const today = dayjs().format('YYYY-MM-DD')
const todayStyled = dayjs().format('MMMM D, YYYY')

describe('Main page elements and attributes.', () => {

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
        .should('be.visible')
        .should('have.attr', 'alt')
        .should('eq', 'Grateful Together Logo')
        cy.get('img')
        .should('have.attr', 'src')
        .should('eq', '/static/media/GratefulTogetherLogo.3db29a133774eb0a3e4b.png')
        
      })
    })
  })

  it('Should mount with form, should have correct elements, and with correct attributes.', () => {

    
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
        cy.get('.form-container')
        .contains(`${todayStyled}`)
        cy.get('.form-container')
        .within(()=>{
          cy.get('input')
          .should('be.visible')
          .should('have.attr', 'type')
          .should('eq', 'text')
          cy.get('input')
          .should('have.attr', 'placeholder')
          .should('eq', 'I\'m grateful for...')
          cy.get('input')
          .should('have.attr', 'value')
          .should('eq', '')
          cy.get('button')
          .should('have.text', 'Submit')
          cy.get('button')
          .should('have.attr', 'type')
          .should('eq', 'submit')
        })
        
      })
    })
  })

  it('Should mount with info element, and modal button. With proper elements and attr.', () => {

    
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
        cy.get('.today-info')
        .within(()=>{
          cy.get('h2')
          .should('have.text', 'Today\'s Entries:')
          cy.get('button')
          .should('have.text', 'View Past Entry')
        })
      })
    })
  })

  it('Cards should display with proper elements, text, and attr.', () => {

    
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
      .first()
      .within(()=>{
        cy.get('.today-info-container')
        .within(()=>{
          cy.get('div')
          .first()
          .within(()=>{
            cy.get(':nth-child(1) > div')
            .first()
              cy.get('div')
              .first()
              .within(()=>{
                cy.get('div')
                .first()
                .within(()=>{
                  cy.get('h3')
                  .eq(0)
                  .should('have.text', 'Date: September 3, 2023 ')
                  cy.get('h3')
                  .eq(1)
                  .should('have.text', 'Name: Neato ')
                })
                cy.get('div')
                .last()
                .within(()=>{
                  cy.get('p')
                  .should('have.text', 'slept well')
                })
              })

            cy.get(':nth-child(3) > div')
            .within(()=>{
              cy.get('div')
              .eq(0)
              .within(()=>{
                cy.get('h3')
                .first()
                .should('have.text', 'Date: September 3, 2023 ')
                cy.get('h3')
                .last()
                .should('have.text', 'Name: Circe ')
              })
              cy.get('div')
                .last()
                .within(()=>{
                  cy.get('p')
                  .should('have.text', 'Ate some cookies')
                })
            })
          })
        })
      })
    })
  })

})