/// <reference types="cypress"/>

it('Login', () => {
    cy.viewport(1920, 1080);
    //Login page - valid credentials entering 
    cy.visit('https://dev.cash.paypro.pw:13000/')
    cy.get('[placeholder="Enter username"]').type('superadmin');
    cy.get('[placeholder="Enter password"]').type('superadmin');
    cy.get('[class="MuiButton-label"]').click();
    cy.get('[aria-controls="customized-menu"]').should('contain', "superadmin");
    console.log('superadmin successfully logged in, header displayed');
    cy.get('[aria-controls="customized-menu"]').click();
    //Login - logout happy path
    cy.contains('Logout').click();
    cy.contains('Login').should('exist');
    
    cy.contains('Logout').should('not.exist');
    //User cannot login with empty fields
    cy.get('[class="MuiButton-label"]').click();
    cy.contains('Required').should('exist');
    //User cannot login with invalid credentials
    cy.get('[placeholder="Enter username"]').type('123');
    cy.get('[placeholder="Enter password"]').type('123');
    cy.get('[class="MuiButton-label"]').click();
    cy.contains('Login or password is not correct.').should('exist');
    cy.get('[placeholder="Enter username"]').clear();
    cy.get('[placeholder="Enter password"]').clear();
    //User cannot login with any empty field
    cy.get('[placeholder="Enter username"]').type('superadmin');
    cy.get('[class="MuiButton-label"]').click();
    cy.contains('Required').should('exist');
    cy.get('[placeholder="Enter username"]').clear();
    cy.get('[placeholder="Enter password"]').type('superadmin');
    cy.get('[class="MuiButton-label"]').click();
    cy.contains('Required').should('exist');
});

