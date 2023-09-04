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

describe('Should test modal elements and functionality', () => {
  it('Modal should have all proper elements.', () => {
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
              cy.get('button')
              .first()
              .within(()=>{
                cy.get('img')
                .should('have.attr', 'src')
                .should('eq', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3gAAAN4B3eqDagAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFESURBVFiFzZcxbsMwDEWfvRg+QY0MvkHQO3TNnTL7BIEnLzlD1mxF5u7dsrR74I7MEApoDFei47iSAE4i9T9JiSIzEcGysiwrgTdgA7wCL0Cl21/AN/ABHICjiPyYDhYRrwAroAV6QIzSq80qeL4HuACaicBjRBqgmERAQ3uaATyUE1CZCABr4PxEcCdnYO0loJ4vAf6bRDVKQHP+zLD70lGMEWj+AdxJc0eA21Obc9unSo8+UUegDRhsgRrYGw7fq+42oNe6IlgavK9VOQc6j14H5KpbG6JQwq20WrzKAyS6gY4lWhuAnTFvQ4DOuOeTHcC7UfkvoEfBRbH5nGAwRuJRcFFsLhON7kjMABfgkpPAip6C6Jcw+jOMXojiluLon1ES33H0hiSJlix6U5pEW57EYJLEaDYgsuhwmrnONLSWGs+v52h1OfWcVoQAAAAASUVORK5CYII=')
                cy.get('img')
                .should('have.attr', 'alt')
                .should('eq', 'close modal')

              })
              cy.get('h3')
              .should('have.text', 'Select your date: ')
              cy.get('input')
              .should('have.attr', 'type')
              .should('eq', 'date')
              cy.get('input')
              .should('have.attr', 'max')
              .should('eq', '2023-09-03')
              cy.get('a')
              .should('have.attr', 'href')
              .should('eq', '/date/')
              cy.get('a')
              .within(()=>{
                cy.get('button')
                .should('have.attr', 'type')
                .should('eq', 'submit')
                cy.get('button')
                .should('have.text', 'Submit')
                cy.get('button')
                .should('have.attr', 'disabled')
              })
            })
          })
        })  
      })
    })

  })
  it('Should be able to close modal and remove from the dom.', () => {
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
              cy.get('button')
              .first()
              .click()
            })
          })
        })
      })
    })
    cy.get('.modal-container')
    .should('not.exist')
  })
})