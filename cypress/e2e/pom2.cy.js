describe('POM FIXURE 1',()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.title().should('equal', 'Swag Labs')
    })
    it('standard user', ()=>{
        cy.fixture('example').then((el)=>{
            cy.get(el.usernameField).type(el.standardUser)
            cy.get(el.passwordField).type(el.password)
            cy.get(el.loginButton).click()
        })
        
    })
})