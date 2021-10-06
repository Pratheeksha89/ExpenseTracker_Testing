import {
   // validatePracticeImage,
    EnterTextInputName,
    EnterTextInputEmail,
    EnterTextInputCurrentAddress,
    EnterTextInputPermanentAddress,
    validateSectionCTA,
    validateTextInputName
}
from '../../../cypress/support/practice';


import {
    practice1
}
from '../../../cypress/support/practice1';

describe('My Demo Project', () => {
    it('Practice Form', () => {
        cy.visit('https://demoqa.com/')
        //cy.pause()
        cy.url().should('include','qa')
        cy.contains('Elements').click()
        cy.contains('Text Box').click()
        
        
       
       /* cy.contains('Check Box').click()
        cy.get('.rct-option-expand-all > .rct-icon').click()
        cy.get('#tree-node-workspace').check({ force: true }).should('be.checked')
        cy.get('#tree-node-angular').uncheck({ force: true })
        cy.get('#tree-node-private').check({ force: true })
        cy.get('#tree-node-downloads').check({ force: true })
        cy.get('#tree-node-private').uncheck({ force: true })
        cy.get('#tree-node-downloads').uncheck({ force: true })
        cy.get('#tree-node-downloads').check({ force: true })
        cy.get('#tree-node-excelFile').uncheck({ force: true })
        cy.get('#tree-node-wordFile').uncheck({ force: true })
        cy.get('.rct-option-collapse-all > .rct-icon').click()
        cy.contains('Radio Button').click()
        cy.get('#yesRadio').check({ force: true }).should('be.checked')
        cy.get('#impressiveRadio').check({ force: true })
        cy.get('#noRadio').check({ force: true })
        cy.contains('Buttons').click()
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#rightClickBtn').rightclick()
        cy.contains('Click Me').click()
        cy.contains('Links').click()
        cy.get('#simpleLink').click()
        cy.get('#dynamicLink').click()
        cy.get('#created').click()
        cy.get('#linkResponse').contains('Created')
        cy.get('#no-content').click()
        cy.get('#moved').click()
        cy.get('#bad-request').click()
        cy.get('#unauthorized').click()
        cy.get('#forbidden').click()
        cy.get('#invalid-url').click()
        cy.contains('Upload and Download').click()
        cy.get('#downloadButton').click()
        const filePath='IMG_8595.jpg'
        cy.get('#uploadFile').attachFile(filePath).click()
        cy.get('#uploadedFilePath').contains("IMG_8595.jpg")
        cy.contains('Web Tables').click()
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type('Harry')
        cy.get('#lastName').type('Com')
        cy.get('#userEmail').type('dasd@dfsd.com')
        cy.get('#age').type('35')
        cy.get('#salary').type('31232')
        cy.get('#department').type('EIG')
        cy.get('#submit').click()
        cy.get('#searchBox').type('Ald').clear()
        cy.get('#edit-record-2 > svg > path').click()
        cy.get('#salary').clear()
        cy.get('#salary').type(50000)
        cy.get('#submit').click()
        cy.get('#delete-record-3 > svg > path').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-6 > .text').click() */
        
    })
 

    /*it('verify hero section image', () => {
        validatePracticeImage(practice1.heroSection.imgElem);
       // 
        //validateSectionHeader
        }); */

    it('Handle multiple text input', () => {
        EnterTextInputName(practice1.userForm.name);
        EnterTextInputEmail(practice1.userForm.email);
        EnterTextInputCurrentAddress(practice1.userForm.currentAddress);
        EnterTextInputPermanentAddress(practice1.userForm.permanentAddress);
        validateSectionCTA(practice1.userForm.submit);
        validateTextInputName(practice1.userForm.validatename)
        });


})