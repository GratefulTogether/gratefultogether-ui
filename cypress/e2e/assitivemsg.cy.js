import dayjs from 'dayjs'

const today = dayjs().format('YYYY-MM-DD')

beforeEach (() => {

  cy.intercept("GET", 'https://gratefultogether-api-49ea7cf50543.herokuapp.com/api/v1/wins', {
    statusCode: 200,
    body: {data:[
 
    ]}
  }).as('initialGet')

  cy.intercept("GET", 'https://gratefultogether-api-49ea7cf50543.herokuapp.com/api/v1/wins?date=2023-09-01', {
  statusCode: 200,
  body: {data:[

  ]}
  }).as('getDate')

})


describe('User should get helpful messages when applicable.', () => {
  it('When there is no data for today\'s date user should get a message.', () => {

    
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {

      cy.stub(win, "WebSocket")

      }
    })
    cy.wait('@initialGet')

    cy.get('.today-info-container')
    .within(()=>{
      cy.get('p')
      .should('have.text', 'Nothing recorded for this date!')
    })
  })

  it('When there is no data for a past selected date user should get a message.', () => {

    
    cy.visit("http://localhost:3000/", {
      onBeforeLoad(win) {

      cy.stub(win, "WebSocket")

      }
    })
    cy.wait('@initialGet')
        cy.get('.today-info')
        .within(()=>{
          cy.get('button')
          .click()
        })
            cy.get('.modal-content')
            .within(()=>{
              cy.get('.date')
              .type('2023-09-01', { force: true })
              cy.get('a')
              .within(()=>{
                cy.get('button')
                .click()
              })
            })
      cy.wait('@getDate')
      cy.url()
      .should('eq', 'http://localhost:3000/date/2023-09-01')

      cy.get('.today-info-container')
      .within(()=>{
        cy.get('p')
        .should('have.text', 'Nothing recorded for this date!')
      })
  })

  it('Form should give user friendly msg to fill out form when clicking submit.', () => {

    
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
        .within(()=>{
          cy.get('p')
          .should('not.exist')
          cy.get('button')
          .click()
        })
        .contains('Please Fill Out Form')
      })
    })
  })
})