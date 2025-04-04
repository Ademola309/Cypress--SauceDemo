import {elements} from '../fixtures/selector'

describe('PAGE OF OBJECT PRACTICE',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('standard user', ()=>{
         cy.get(elements.usernameField).type(elements.standardUser)
         cy.get(elements.passwordField).type(elements.password)
         cy.get(elements.loginButton).click()
    })

    it('problem user', ()=>{
        cy.get(elements.usernameField).type(elements.problemUser)
        cy.get(elements.passwordField).type(elements.password)
        cy.get(elements.loginButton).click()
    })

    it('performance glitch user', ()=>{
        cy.get(elements.usernameField).type(elements.performanceglitcUser)
        cy.get(elements.passwordField).type(elements.password)
        cy.get(elements.loginButton).click()
    })
})

   