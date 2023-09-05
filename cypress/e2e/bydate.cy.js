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

cy.intercept("GET", 'https://gratefultogether-api-49ea7cf50543.herokuapp.com/api/v1/wins?date=2023-09-01', {
  statusCode: 200,
  fixture: 'sep12023.json'
}).as('getDate')

})

describe('Should test modal elements, functionality, routing.', () => {

  it('Should be able to select a date, click submit, and be carried to the by past date page.', () => {
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
          cy.get('button')
          .click()
        })
        cy.get('.modal-container')
        .within(()=>{
          cy.get('.modal')
          .within(()=>{
            cy.get('.modal-content')
            .within(()=>{
              cy.get('.date')
              .type('2023-09-01', { force: true })
              cy.get('a')
              .within(()=>{
                cy.get('button')
                .click()
                cy.wait('@getDate')
                cy.url()
                .should('eq', 'http://localhost:3000/date/2023-09-01')
              })
            })
          })
        }) 
      })
      cy.get('.date-page-container')
      .within(()=>{
        cy.get('a')
        .within(()=>{          
          cy.get('img')
          .should('have.attr', 'src')
          .should('eq', '/static/media/Homelogo.4cf5205bb4da68cb2cb4.png')
          cy.get('img')
          .should('have.attr', 'alt')
          .should('eq', 'home logo')
        })
        .should('have.attr', 'href')
        .should('eq', '/')
        cy.get('h1')
        .should('have.text', 'Entries for September 1, 2023:')

        cy.get('p')
        .first()
        .should('have.text', 'slept well')
        cy.get('p')
        .last()
        .should('have.text', 'Ate some cookies')

        cy.get('h3')
        .first()
        .should('have.text', 'Date: September 1, 2023 ')
        cy.get('h3')
        .last()
        .should('have.text', 'Name: Circe ')
      })
    })
  })
})