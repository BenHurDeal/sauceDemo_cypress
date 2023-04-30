Cypress.Commands.add('login', (
    user = Cypress.env('users')[0],
    password = Cypress.env('password')
) => {
    cy.get('#user-name').type(user, {log: false})
    cy.get('#password').type(password, {log: false})
    cy.get('#login-button').click()
})