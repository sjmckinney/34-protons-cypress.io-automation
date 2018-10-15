/// <reference types="cypress" />

describe('On the login page', function() {

    beforeEach('Visit the login page', () => {
        cy.visit('/login.php')
        cy.contains('Login')
        cy.log("Have opened login page")
    })

    it('Able to login as admin', function() {
        cy.get('#username').type('user')
        cy.get('#password').type('123')
        cy.get('[name=submit]').click()
        cy.log("Have clicked submit button")
        cy.document().contains('Loading... Please wait')
                     .should('be.visible', 'img[src=./app/loading.gif]')
        cy.document().contains('Demo page for selenium code', { timeout: 10000 })
    })

    it('Notified if no credentials entered', function() {
        cy.get('[name=submit]').click()
        cy.log("Have clicked submit button")
        cy.document().contains('Username or password invalid')
    })

  })
