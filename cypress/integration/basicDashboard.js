/// <reference types="cypress"/>

it('Login', () => {
    //Login page - credentials entering 
    cy.viewport(1920, 1080);
    cy.visit('https://dev.cash.paypro.pw:13000/');
    cy.get('[placeholder="Enter username"]').type('superadmin');
    cy.get('[placeholder="Enter password"]').type('superadmin');
    cy.get('[class="MuiButton-label"]').click();



    cy.get('[aria-controls="customized-menu"]').should('contain', "superadmin");
    console.log('superadmin successfully logged in, header displayed');
    //Charts are displayed
    cy.contains('From').should('exist'); //From - as data picker element
    cy.get('[class="chartjs-render-monitor"]', { multiple: true }).should('exist'); //2 charts
    //Terminal list is displayed
    // cy.contains('600').should('exist'); //"Space left" column default values UNCOMMENT
    //"Find by ID" field - find terminal #9, doesn`t find terminal #2
    cy.get('[placeholder="Terminal ID"]').type('9{enter}');
    cy.contains('[class="MuiTableRow-root MuiTableRow-hover"]', 'Terminal 9').should('exist');
    cy.contains('[class="MuiTableRow-root MuiTableRow-hover"]', 'Terminal 2').should('not.exist');
    cy.get('[placeholder="Terminal ID"]').clear();
    cy.get('[placeholder="Terminal ID"]').type('9999999{enter}');
    cy.get('[class="MuiTypography-root MuiTablePagination-caption MuiTypography-body2 MuiTypography-colorInherit"]').should('contain', '0-0 of 0');
    cy.get('[placeholder="Terminal ID"]').clear();
    cy.get('[placeholder="Force page"]').type('1{enter}');
    // cy.contains('600').should('exist'); UNCOMMENT
    cy.get('[placeholder="Force page"]').type('9999999{enter}');
    cy.contains('Max value').should('exist');
    //[Select terminal] button	
    cy.contains('[class="MuiTableRow-root MuiTableRow-hover"]', 'Terminal 5').find('[aria-label="Select"]').click();
    cy.get('[id="header-breadcrumbs"]').should('contain', 'Terminal 5'); //BREADCRUMBS
    cy.contains('[class="MuiTableRow-root MuiTableRow-hover"]', 'Terminal 3').find('[aria-label="Select"]').click();
    cy.get('[id="header-breadcrumbs"]').should('contain', 'Terminal 3');

    let merch1Name = 'Merchant1';
    let room1Merch1Name = 'Room 200301 Platinum';
    cy.get('[id="header-breadcrumbs"]').contains(room1Merch1Name).click();
    cy.get('[id="header-breadcrumbs"]').contains('Terminal').should('not.exist');
    cy.get('[id="header-breadcrumbs"]').contains(merch1Name).click();
    cy.get('[id="header-breadcrumbs"]').contains(room1Merch1Name).should('not.exist');
    cy.get('[id="header-breadcrumbs"]').contains('Root').click();
    cy.get('[id="header-breadcrumbs"]').contains(merch1Name).should('not.exist');
  
  
    // - ON/OFF BTN FROM TERM LIST
    cy.contains('[class="MuiTableRow-root MuiTableRow-hover"]', 'Terminal 7').find('[type="button"] [class="MuiSvgIcon-root StatusLabel_ok__N0IWM"]').click()
    cy.contains('Agree').click();
    cy.contains('[class="MuiTableRow-root MuiTableRow-hover"]', 'Terminal 7').find('[type="button"] [class="MuiSvgIcon-root StatusLabel_error__1civl"]').should('exist')


    //Test run for both "ON/OFF button" values
    // if (cy.contains('[class="MuiTableRow-root MuiTableRow-hover"]', 'Terminal 7').find('[type="button"] [class="MuiSvgIcon-root StatusLabel_ok__N0IWM"]').should('exist')) {
    //     cy.contains('[class="MuiTableRow-root MuiTableRow-hover"]', 'Terminal 7').find('[type="button"] [class="MuiSvgIcon-root StatusLabel_ok__N0IWM"]').click()
    // } else 
    // {cy.contains('[class="MuiTableRow-root MuiTableRow-hover"]', 'Terminal 7').find('[type="button"] [class="MuiSvgIcon-root StatusLabel_error__1civl"]').click()
    // }
    // cy.contains('Agree').click();
});

