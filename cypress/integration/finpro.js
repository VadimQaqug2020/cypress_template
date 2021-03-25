

it('Login', () => {
    //Login page - credentials entering 
    cy.visit('https://develop.kiosk.finpro.pw/login');
    // cy.pause();
    cy.viewport(1920, 1080);
    cy.get('[placeholder="Username"]').type('testkiosk');
    cy.get('[placeholder="Password"]').type('password');
    cy.get('[class="submit-button"]').click();

});