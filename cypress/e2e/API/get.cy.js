describe('GET /products/search?name=', () => {

    beforeEach(function () {
        cy.fixture('produto').then(function (produto) {
            this.produto = produto
        })

    })

    it('01.Cenário: Buscar produtos por categoria(nome) com sucesso', function () {

        const produto = this.produto.busca

        cy.getProduto(produto.categoria)
            .then(response => {
                expect(response.status).to.eq(200)

                response.body.forEach(category => {
                    expect(category).to.have.property('categoryName').to.eq(produto.categoria)
                    expect(category).to.have.property('products').that.is.an('array')
                    category.products.forEach(product => {
                        expect(product).to.have.property('productName').that.is.a('string')
                    })
                })
            })

    })

    it('02.Cenário: Buscar produtos por nome(nome) com sucesso', function () {

        const produto = this.produto.busca

        cy.getProduto(produto.nome)
            .then(response => {
                expect(response.status).to.eq(200)

                response.body.forEach(category => {
                    expect(category).to.have.property('products').that.is.an('array')
                    category.products.forEach(product => {
                        expect(product.productName.toLowerCase()).to.include(produto.nome.toLowerCase())
                    })
                })
            })

    })

    it('03.Cenário: Buscar por um nome de produto que não existe', function () {

        const produto = this.produto.busca

        cy.getProduto(produto.inexistente)
            .then(response => {

                expect(response.status).to.eq(200)
                expect(response.body).to.be.empty

            })

    })

})