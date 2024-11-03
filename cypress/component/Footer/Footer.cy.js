import React from 'react';
import { mount } from 'cypress/react18';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../../../src/components/Footer/Footer';

describe('Footer Component Tests', () => {
  beforeEach(() => {
    mount(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  it('renders the Footer component correctly', () => {
    cy.get('.footer').should('exist');
    cy.get('.footer-title').should('contain', 'INFO');
    cy.get('.footer-links').should('exist');
  });

  it('contains correct navigation links', () => {
    cy.get('.footer-nav li').eq(0).find('a').should('have.attr', 'href', '/');
    cy.get('.footer-nav li').eq(1).find('a').should('have.attr', 'href', '/collections');
    cy.get('.footer-nav li').eq(2).find('a').should('have.attr', 'href', '/');
  });

  it('scrolls to top when button is clicked', () => {
    const scrollToStub = cy.stub(window, 'scrollTo');

    cy.get('.scroll-to-top').click(); // Клацаємо на кнопку
    cy.wrap(scrollToStub).should('have.been.calledWith', { top: 0, behavior: 'smooth' });
  });
});
