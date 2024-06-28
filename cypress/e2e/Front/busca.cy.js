describe('Desafio web', () => {

  beforeEach(function () {
    cy.intercept('GET', '**/app/views/home-page.html').as('carregamento')
    cy.fixture('produto').then(function (produto) {
      this.produto = produto
    })

  })
  it('Incluir produto no carrinho', function () {

    const produto = this.produto.busca
    cy.visit('#/')

    cy.wait('@carregamento')

    cy.get('#search')
      .should('be.visible')
      .click()

    cy.get('#autoComplete')
      .should('be.visible')
      .click()
      .type(produto.nome)

    cy.get('#search > a')
      .should('be.visible')
      .click()

    cy.get('a.productName')
      .contains(`${produto.nome}`, { matchCase: false })
      .click()

    cy.get('div#Description h1')
      .should('contain', produto.nome)

    cy.get('button[name="save_to_cart"]')
      .click()

    cy.get('#shoppingCartLink')
      .click()

    cy.get('label.productName')
      .contains(`${produto.nome}`, { matchCase: false })
      .should('contain', produto.nome)


  })
})