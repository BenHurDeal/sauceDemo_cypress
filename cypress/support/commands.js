Cypress.Commands.add('login', (
    user = Cypress.env('users')[0],
    password = Cypress.env('password')
) => {
    cy.get('#user-name').type(user)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})