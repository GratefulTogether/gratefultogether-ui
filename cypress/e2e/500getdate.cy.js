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
  statusCode: 500,
}).as('getDate')

})

describe('Should test routing to error page when having trouble getting date data', () => {

  it('Should route to error page when can\'t get by date.', () => {
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
                .should('eq', 'http://localhost:3000/error')
              })
            })
          })
        }) 
      })
    })
  })
})