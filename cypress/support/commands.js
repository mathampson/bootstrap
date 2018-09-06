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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import axeCore from '../../node_modules/axe-core/axe.min.js';
const axe = axeCore || {};

Cypress.Commands.add('testAccessibility', () => {
  // From https://github.com/dequelabs/axe-core/issues/755
  cy.window().then((win) => {
    const window = win;
    window.eval(axe.source);
    return window.axe.run();
  }).then((results) => {
    expect(results.violations).to.be.empty;
  });
});
