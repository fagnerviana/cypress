import { elements } from "./elements"

class Login{

    visitarpagina(){
        cy.visit(elements.paginaInicial)
    }

    credenciaisValidasAdministrador(){
        cy.get(elements.username).type('12345678909')
        cy.get(elements.password).type('123456')
        cy.get(elements.loginButton).click()
    }

    credenciaisInvalidasr(){
        cy.get(elements.username).type('12345678')
        cy.get(elements.password).type('123456')
        cy.get(elements.loginButton).click()
    }

    validarErrorCredenciaisInvalidas(){
        cy.get(elements.mensagemErroLogin)
        .should(
            'contain.text',
            'CPF/CNPJ informado é inválido!')
        cy.url().should('eq',elements.paginaInicial)
    }


}

export default new Login()