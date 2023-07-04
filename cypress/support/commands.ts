/// <reference types="cypress" />

import { RouteHandler } from 'cypress/types/net-stubbing'

export const getByTestID = (selector: string) => cy.get(`[data-testid="${selector}"]`)
export const getByName = (selector: string) => cy.get(`[name="${selector}"]`)
export const findByTestID = (
  subject: Cypress.PrevSubject,
  selector: string,
) => cy.wrap(subject).find(`[data-testid="${selector}"]`)

Cypress.Commands.add('getByTestID', getByTestID)
Cypress.Commands.add('getByName', getByName)
Cypress.Commands.add('findByTestID', { prevSubject: true }, findByTestID)
Cypress.on('uncaught:exception', (_err, _runnable, _promise) => false)
Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('/login')
    cy.findByRole('textbox', { name: /username/i }).type(username, { delay: 20 })
    cy.getByName('password').type(password, { delay: 20 })
    cy.get('button').last().click()
    cy.url().should('contain', '/home')
  })
})
