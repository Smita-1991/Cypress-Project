// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="Cypress"/>

///<reference types="cypress-xpath"/>


Cypress.Commands.add('login',(userName,password)=>{
    cy.visit("https://parabank.parasoft.com/")
    cy.get("input[name='username']").type(userName)
    cy.get("input[name='password']").type(password)
    cy.get("input[value='Log In']").click()
})

Cypress.Commands.add('logout',()=>{
    cy.get("a[href='logout.htm']").click()
})

Cypress.Commands.add('getIframe',(iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible')
    .then(cy.wrap)
})

Cypress.Commands.add('loginHRM',(userName,password)=>{
    cy.get("input[name='username']").type(userName)
    cy.get("input[name='password']").type(password)
    cy.get("button[type='submit']").click()
})
import 'cypress-iframe';