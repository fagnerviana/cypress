import Login from '../e2e/acessoSefaz/login'
describe('Login', ()=>{

    beforeEach(() =>{
        Login.visitarpagina();        
        
    })

    it('Realizar login com sucesso',()=>{
         //Act
        Login.credenciaisValidasAdministrador();
        cy.screenshot('https://ba.gp.srv.br/tributario_salvador_tst/servlet/login')
        
        //Assert
        cy.url().should('eq', 'https://ba.gp.srv.br/tributario_salvador_tst/servlet/login')
        
    })
    it('Realizar login informando credenciais inválidas',()=> {
        //Act
        Login.credenciaisInvalidasr();

        //Assert
        //Analisa mensagem de erro
        cy.get(LargestContentfulPaint.validarErrorCredenciaisInvalidas)
        cy.url().should('eq','https://ba.gp.srv.br/tributario_salvador_tst/servlet/login')

    })

    it('Validar Campo de Usuario (CPF/CNPJ)',()=> {

        //Act
       Login.credenciaisInvalidasr();
       
        //Assert
        //Analisa mensagem de erro
        cy.get(Login.visitarpagina)
        .should(
            'contain.text',
            'CPF/CNPJ informado é inválido!')
        cy.url().should('eq',Login.visitarpagina)

    })

})