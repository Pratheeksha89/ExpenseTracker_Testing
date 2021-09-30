import {
    ValidateHeaderImage,
    ValidateAddCTA,
    EnterExpenseAmount1,
    EnterExpenseDescription1,
    ValidateAddTransactionCTA,
    CheckIncomeRB,
    //CheckExpenseRB,
    ValidateSectionTransaction,
    EnterIncomeAmount1,
    EnterIncomeDescription1,
    ValidateSearch,
    ValidateCancelCTA,
}

from '../../../cypress/support/ExpTrackDefFunc.js';


import {
     ExpTrackDefElem
}

from '../../../cypress/support/ExpTrackDefElem.js';

describe('Expense Tracker', () => {
    
    it('Visit a Page', () => {
        cy.visit('http://localhost:3000/')
    });

    it('verify header Image', () => {
        ValidateHeaderImage(ExpTrackDefElem.headerimage.imageElem)
    });

    it('Add New Transaction- Expense', () => {
        ValidateAddCTA(ExpTrackDefElem.AddTrans.add);     
        EnterExpenseAmount1(ExpTrackDefElem.AddTrans.amount);
        EnterExpenseDescription1(ExpTrackDefElem.AddTrans.description);
        ValidateAddTransactionCTA(ExpTrackDefElem.AddTrans.addtransaction);
       //CheckExpenseRB(ExpTrackDefElem.AddTrans.expense);
     
    });

    it('Add New Transaction- Income', ()=> {
        ValidateAddCTA(ExpTrackDefElem.AddTrans.add);
        CheckIncomeRB(ExpTrackDefElem.AddTrans.income);
        EnterIncomeAmount1(ExpTrackDefElem.AddTrans.amount);
        EnterIncomeDescription1(ExpTrackDefElem.AddTrans.description);
        ValidateAddTransactionCTA(ExpTrackDefElem.AddTrans.addtransaction);
})

    it('Validate Transaction Section', () => {
        ValidateSectionTransaction(ExpTrackDefElem.AddTrans.transactions);
        ValidateSearch(ExpTrackDefElem.AddTrans.search);
      //  ValidateCancelCTA(ExpTrackDefElem.AddTrans.cancel);
    })


})