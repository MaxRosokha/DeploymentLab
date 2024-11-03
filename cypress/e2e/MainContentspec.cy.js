describe('MainContent Component Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('renders the MainContent component correctly', () => {
    cy.get('.outline-text').should('contain', 'BOOM VAN DEHOEFTE');

    cy.get('.btn-primary').should('contain', 'More information');

    cy.get('.hero-section .circle-image img').should('exist');
    cy.get('.hero-section .small-circle img').should('exist');

    cy.get('.new-collection-title').should('contain', 'NEW COLLECTION');

    cy.get('.btn-secondary').should('exist');
    cy.get('.btn-secondary').find('a').should('have.attr', 'href', '/favoritePage');

    cy.get('.image-gallery .gallery-image').should('have.length', 2);
  });

  it('should open image modal when a product image is clicked', () => {
    cy.get('.product-card').first().click();

  });


  it('should switch collections when the tabs are clicked', () => {
    cy.get('.product-card-сollections').should('have.length', 2);

    cy.get('.tab').contains('Women').click();

    cy.get('.product-card-сollections').should('have.length', 2);
  });

  it('should scroll to the "About Us" section when "More information" button is clicked', () => {
    cy.get('.btn-primary').click();

    cy.get('#about-us').should('be.visible');
  });
});
