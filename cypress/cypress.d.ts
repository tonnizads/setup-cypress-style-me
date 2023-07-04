/// <reference types="@testing-library/cypress" />
import {
  findByTestID,
  getByTestID,
  getByName,
  login,
} from './support/commands'

declare global {
  namespace Cypress {
    interface Chainable {
      findByTestID: (
        selector: string
      ) => Cypress.Chainable<JQuery<HTMLElement>>
      getByTestID: typeof getByTestID
      getByName: typeof getByName
      login(username:string, password:string): Chainable<void>
    }
  }
}
