/// <reference types="cypress"/>

it('Login', () => {
    //Login page - credentials entering 
    cy.visit('https://dev.cash.paypro.pw:3000/login');
    // cy.pause();
    cy.viewport(1920, 1080);
    cy.get('[placeholder="Enter username"]').type('superadmin');
    cy.get('[placeholder="Enter password"]').type('superadmin');
    cy.get('[class="MuiButton-label"]').click();
    //User superadmin logged in
    cy.get('[class="jss134"]').contains('superadmin').should('exist');
    cy.get('.MuiAppBar-root > .MuiToolbar-root > :nth-child(1)').click();
    cy.get('[href="/nodes"]').click(); 
    
    //Node management is opened
    cy.get('[id="merchant2"]').contains('Merchant2').should('exist');
    cy.get('[id="merchant16"]').click();
    cy.get('#room36 > .MuiPaper-root > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click();
    cy.get('[id="terminal39"]').click();
    //Terminal 39 is selected
    cy.get('#terminal39 > .MuiPaper-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiAccordionDetails-root > .jss227 > [aria-label="Select"] > .MuiButton-label').click();
    //Selected breadcrumbs exists
    cy.get('.jss143 > :nth-child(7) > .MuiButton-label').should('exist');

    //Dashboard is opened, terminal #39 still selected
    cy.get('[href="/"]').click();
    cy.get('.jss143 > :nth-child(7) > .MuiButton-label').should('exist');

    //Step-by-step - visit all tabs with selected terminal#39 
    // cy.get('[href="/nodes"]').click(); 
    //Logout
    cy.get('.jss116 > :nth-child(4) > .MuiButtonBase-root').click();
    cy.get('.jss137').click();
    cy.get('[placeholder="Enter username"]').should('exist');

    cy.visit('https://dev.cash.paypro.pw:3000/login')
    cy.get('[placeholder="Enter username"]').type('supertester');
    cy.get('[placeholder="Enter password"]').type('Supertester1');
    cy.get('[class="MuiButton-label"]').click();
    // cy.get('.jss116 > :nth-child(4) > .MuiButtonBase-root').contains('supertester').should('exist');
    cy.get('[class="jss134"]').contains('super').should('exist');

});

it('Every page visit', () => {
    cy.visit('https://dev.cash.paypro.pw:3000/login')
    cy.get('[placeholder="Enter username"]').type('superadmin');
    cy.get('[placeholder="Enter password"]').type('superadmin');
    cy.get('[class="MuiButton-label"]').click();
    cy.get('.MuiAppBar-root > .MuiToolbar-root > :nth-child(1)').click();
    // cy.get('[href="/"]').click();
    cy.get('[class="jss134"]').contains('superadmin').should('exist');
    cy.get('[href="/nodes"]').click(); 
    cy.get('[class="jss134"]').contains('superadmin').should('exist');
    cy.get('[href="/withdraw"]').click();
    cy.get('[class="jss134"]').contains('superadmin').should('exist');
    cy.get('[href="/deposit"]').click();
    cy.get('[class="jss134"]').contains('superadmin').should('exist');
    cy.get('[href="/reports"]').click();
    cy.get('[class="jss134"]').contains('superadmin').should('exist');
    cy.get('[href="/users"]').click();
    cy.get('[class="jss134"]').contains('superadmin').should('exist');
    cy.get('[href="/roles"]').click();
    cy.get('[class="jss134"]').contains('superadmin').should('exist');
    cy.get('[href="/drivers"]').click();
    cy.get('[class="jss134"]').contains('superadmin').should('exist');
    // cy.get('[href="/logs"]').click();
    // cy.get('[class="jss134"]').contains('superadmin').should('exist');
    cy.get('[href="/nodes"]').click();
    cy.get('[class="jss134"]').contains('superadmin').should('exist');
    // cy.get('.jss372').click();

})
