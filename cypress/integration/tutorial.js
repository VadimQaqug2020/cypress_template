/// <reference types="cypress"/>

it('Login', () => {
    cy.viewport(1920, 1080);
    //Login page - credentials entering 
    cy.visit('https://dev.cash.paypro.pw:13000/')
    cy.get('[placeholder="Enter username"]').type('superadmin');
    cy.get('[placeholder="Enter password"]').type('superadmin');
    cy.get('[class="MuiButton-label"]').click();
    cy.contains('[class="MuiTableRow-root MuiTableRow-hover"]', 'Terminal 7').find('[type="button"] [class="MuiSvgIcon-root StatusLabel_ok__N0IWM"]').click()
    cy.contains('Agree').click();
    cy.contains('[class="MuiTableRow-root MuiTableRow-hover"]', 'Terminal 7').find('[type="button"] [class="MuiSvgIcon-root StatusLabel_error__1civl"]').should('exist')
    
    // cy.get('[placeholder="Terminal ID"]').type('2{enter}');
    // cy.contains('[class="MuiTableRow-root MuiTableRow-hover"]', 'Terminal 2').find('[aria-label="Select"]').click();
});