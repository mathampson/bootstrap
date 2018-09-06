module.exports = {
  sizes: [
    [Cypress.config('viewportWidth'), Cypress.config('viewportHeight')],
    [500, Cypress.config('viewportHeight')]
  ]
};
