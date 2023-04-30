/// <reference types="cypress" />

describe('Cenário de Login e Logout', () => {
    beforeEach(() => {
        cy.visit('')
    })

    it('Login com sucesso', () => {
        cy.login()
        cy.url().should('contain', 'inventory.html')
    });

    it('Login sem sucesso com user blocked', () => {
        cy.login(Cypress.env('users')[1], )
        cy.get('#login-button').click()
        cy.contains('h3', 'Epic sadface: Sorry, this user has been locked out.').should('be.visible')
    });

    it('Logout com sucesso', () => {
        cy.login()

        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').should('contain.text', 'Logout')
        .click()
        cy.url().should('eq', 'https://www.saucedemo.com/')
    });
});