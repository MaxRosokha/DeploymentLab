import React from 'react';
import { mount } from 'cypress/react';
import Loading from '../../../src/components/Loading/Loading';

describe('Loading Component Tests', () => {
  it('renders the Loading component correctly', () => {
    mount(<Loading />);

    cy.get('.loading-container').should('exist');

    cy.get('.spinner').should('exist');

    cy.get('p').should('contain', 'Loading...');
  });
});
