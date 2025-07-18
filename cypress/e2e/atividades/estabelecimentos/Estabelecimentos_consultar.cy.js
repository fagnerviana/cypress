describe('Consulta de Estabelecimentos', ()=>{

    beforeEach(() =>{
        cy.visit('https://ba.gp.srv.br/tributario_salvador_tst/servlet/login')     
        //Act
        cy.screenshot('https://ba.gp.srv.br/tributario_salvador_tst/servlet/login')
        cy.get('[class="AttributeLogin mascaracpfcnpj form-control"]').type('12345678909')
        cy.get('#USUARIO_SENHAContainer > .form-group > .gx-attribute > .form-control').type('123456')
        cy.get('[class="BtnEnter BtnLogin btn btn-default btn-primary"]').click()

    })

    it('Realizar Consultar de Estabelecimentos',()=>{
        //Arrange
        //Utilizado o beforeEach
        //ACT
        cy.visit('https://ba.gp.srv.br/tributario_salvador_tst/servlet/mcontribuinte?estabelecimento')

        //Assert
        cy.url().should('eq', 'https://ba.gp.srv.br/tributario_salvador_tst/servlet/mcontribuinte?estabelecimento')
        
    })
    
})