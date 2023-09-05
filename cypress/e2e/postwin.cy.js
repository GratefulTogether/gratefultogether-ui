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

    cy.intercept("POST", 'https://gratefultogether-api-49ea7cf50543.herokuapp.com/api/v1/wins', {
      statusCode: 201,
      fixture: 'post.json'
    })
    .as('post')
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
          .type('I had applesauce')
          cy.get('button')
          .click()
        })
        cy.wait('@post').then((intercept) => {
          expect(intercept.response.body).to.deep.equal({
            user_id: 11,
            message: 'I got a cat.',
          });
        });
        
      })
    })
  })

})