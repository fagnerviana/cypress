describe('Login', ()=>{

    beforeEach(() =>{
        cy.visit('https://ba.gp.srv.br/tributario_salvador_tst/servlet/login')
    })
    it('Realizar login com sucesso',()=>{
        //Arrange
        //Utilizado o beforeEach
        //cy.visit('https://ba.gp.srv.br/tributario_salvador_tst/servlet/login')
        //Act
        cy.screenshot('https://ba.gp.srv.br/tributario_salvador_tst/servlet/login')
        cy.get('[class="AttributeLogin mascaracpfcnpj form-control"]').type('12345678909')
        cy.get('#USUARIO_SENHAContainer > .form-group > .gx-attribute > .form-control').type('123456')
        cy.get('[class="BtnEnter BtnLogin btn btn-default btn-primary"]').click()

        //Assert
        cy.url().should('eq', 'https://ba.gp.srv.br/tributario_salvador_tst/servlet/principal')
        
    })
    it('Realizar login informando credenciais inválidas',()=> {
       //Arrange
       //Utilizado o beforeEach
       //cy.visit('https://ba.gp.srv.br/tributario_salvador_tst/servlet/login')

        //Act
        cy.get('[class="AttributeLogin mascaracpfcnpj form-control"]').type('12345678')
        cy.get('#USUARIO_SENHAContainer > .form-group > .gx-attribute > .form-control').type('12345')
        cy.get('[class="BtnEnter BtnLogin btn btn-default btn-primary"]').click()

        //Assert
        cy.get('[class="swal2-html-container"]')
        .should(
            'contain.text',
            'CPF/CNPJ informado é inválido!')
        cy.url().should('eq','https://ba.gp.srv.br/tributario_salvador_tst/servlet/login')
    })
})