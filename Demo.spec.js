describe('My Demo Project', () => {
    it('Practice Form', () => {
       cy.visit('https://demoqa.com/')
       cy.url().should('include','qa')
       cy.contains('Forms').click()
       cy.contains('Practice Form').click()
       cy.get('#firstName').type('Pratheeksha')
       cy.get('#lastName').type('Shetty')
       cy.get('#userEmail').type('abd@hg.com')
       cy.get('#gender-radio-2').check({force:true})
       cy.get('#userNumber').type('1112223334')
       cy.get('#dateOfBirthInput')
       cy.get('.subjects-auto-complete__value-container').type('practice form')
       cy.get('#hobbies-checkbox-2').check({force:true})
       cy.get('#currentAddress').type('Udupi')
       const filePath='IMG_8595.jpg'
       cy.get('#uploadPicture').attachFile(filePath).click()
       cy.get('#state > .css-yk16xz-control > .css-1hwfws3').click()
       cy.get('#react-select-3-option-2').click()
       cy.get('#city > .css-yk16xz-control > .css-1hwfws3').click()
       cy.get('#react-select-3-option-1').click()
       //cy.get
    })
})
