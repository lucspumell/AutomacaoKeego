// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//req_87a1328392c7496487bc14375fadaf86
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('getProduto', (produto) => {
    cy.api({
        url: '/catalog/api/v1/products/search?name=' + produto,
        method: 'GET',
        failOnStatusCode: false
    }).then(response => { return response })
})

Cypress.Commands.add('postLogin', (usuario) => {
    cy.api({
        url: '/accountservice/accountrest/api/v1/login',
        method: "POST",
        body: usuario,
        failOnStatusCode: false
    }).then(response => { return response })
})
