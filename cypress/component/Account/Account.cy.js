import React from 'react';
import { mount } from 'cypress/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '/src/components/UserContext/UserContext';
import Account from '../../../src/components/Account/Account';

describe('Account Component Tests', () => {
  const mountWithProviders = (component) => {
    mount(
      <MemoryRouter>
        <UserProvider>
          {component}
        </UserProvider>
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    cy.intercept('GET', 'https://firebase.googleapis.com/v1alpha/projects/*', {
      statusCode: 200,
      body: {}
    }).as('firebaseRequest');
  });

  it('renders Account component correctly', () => {
    mountWithProviders(<Account />);
    cy.get('.account-container').should('exist');
  });

  it('toggles coupon visibility on button click', () => {
    mountWithProviders(<Account />);
    cy.contains('My coupons').click();
    cy.get('.coupons-container').should('be.visible');
  });

  it('toggles password form visibility', () => {
    mountWithProviders(<Account />);
    cy.contains('Змінити пароль').click();
    cy.get('.update-form').should('be.visible');
  });
});
