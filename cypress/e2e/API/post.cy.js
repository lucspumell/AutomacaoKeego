describe('POST /products/image/{userId}/{source}/{color}', () => {

    beforeEach(function () {
        cy.fixture('produto').then(function (produto) {
            this.produto = produto
        })
        cy.fixture('usuario').then(function (usuario) {
            this.usuario = usuario
        })

    })

    it('01.Cenário: Buscar produtos por categoria(nome) com sucesso', function () {

        const produto = this.produto.busca
        const usuario = this.usuario.usuarioLogin

        cy.postLogin(usuario)
            .then(responseLogin => {
                expect(responseLogin.status).to.eq(200)
                expect(responseLogin.body.statusMessage.token).that.is.a('string')
            })

    })

})