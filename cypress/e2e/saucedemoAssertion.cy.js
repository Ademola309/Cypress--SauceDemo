describe('LOGIN', ()=>{

    it('standard user' , ()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible').type('visual_user')
        cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.enabled').click()
        cy.get('[data-test="inventory-item-sauce-labs-fleece-jacket-img"]').should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').should('exist').click()
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').click()
        cy.get('[data-test="checkout"]').should('be.visible').click()
        cy.get('[data-test="firstName"]').type('Jimmy')
        cy.get('[data-test="lastName"').type('Segun')
        cy.get('[data-test="postalCode"').type('11011')
        cy.get('[data-test="continue"]').should('be.visible').click()
        })
})