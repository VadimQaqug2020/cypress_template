/// <reference types="cypress"/>

it('Login', () => {
    cy.viewport(1920, 1080);
    //Login page - credentials entering 
    cy.visit('https://dev.cash.paypro.pw:13000/login')
    cy.get('[placeholder="Enter username"]').type('superadmin');
    cy.get('[placeholder="Enter password"]').type('superadmin');
    cy.get('[class="MuiButton-label"]').click();
    // cy.get('.MuiAppBar-root > .MuiToolbar-root > :nth-child(1)').click();
    cy.get('[d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"]').click();
    // cy.get('[role="cell"]').find('.MuiButtonBase-root.MuiButton-root.MuiButton-text').contains('Terminal 4').click();
    // cy.get('/html/body/div[1]/div/main/div[2]/div/div/div[2]/div/div[3]/table/tbody/tr[8]/th[1]/button').click();
    cy.get('[href="/nodes"]').click();
    // cy.pause();
    cy.get('[id="merchant1"]').click();
    cy.get('[id="room1"]').click();
    cy.get('[id="terminal1"]').click();
    cy.get('#terminal1 > .MuiPaper-root > .MuiCollapse-container > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > [role="region"] > .MuiAccordionDetails-root > .jss227 > [title="Select"] > .MuiButton-label').click();
    cy.get('[href="/deposit"]').click();
    // cy.get('').click();

    
});