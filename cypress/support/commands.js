Cypress.Commands.add('login', () => {
    cy.get('#user-name').type(Cypress.env('users')[0])
    cy.get('#password').type(Cypress.env('password'))
    cy.get('#login-button').click()
})