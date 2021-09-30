export function ValidateHeaderImage(imageElem){
    cy.get(imageElem)
      .scrollIntoView()
      .should('be.visible')
}

export function ValidateAddCTA(add){
    cy.get(add)
      .should('be.visible')
      .click()
}

export function ValidateCancelCTA(cancel){
    cy.get(cancel)
      .should('be.visible')
      .click()
}

export function ValidateAddTransactionCTA(addtransaction){
    cy.get(addtransaction)
      .should('be.visible')
      .click()
}

export function EnterExpenseAmount1(amount){
     cy.get(amount)
       .type('1000')
}

export function EnterExpenseDescription1(description){
    cy.get(description)
    .type('Food')
}

export function CheckIncomeRB(income){
    cy.get(income)
      .check()
}

export function CheckExpenseRB(expense){
    cy.get(expense)
      .check()
}

export function ValidateSectionTransaction(transactions){
    cy.get(transactions)
    .contains('$1000')
    .should('be.visible')
}

export function EnterIncomeAmount1(amount){
    cy.get(amount)
      .type('500')
}

export function EnterIncomeDescription1(description){
   cy.get(description)
     .type('Sal')
}

export function ValidateSearch(search){
    cy.get(search)
    .type('fo')
    
}