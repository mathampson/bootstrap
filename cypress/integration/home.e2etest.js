// Homepage E2E tests
import config from '../support/config';

describe('Home page', function() {
  config.sizes.forEach((size) => {
    describe(`@ ${size}`, function() {
      beforeEach(() => {
        cy.visit('/');
        cy.viewport(size[0], size[1]);
      });

      it('should pass accessibility tests', () => {
        cy.testAccessibility();
      });

      it('should have a <title>', function () {
        cy.title().should('exist');
      });
    });
  });
});
