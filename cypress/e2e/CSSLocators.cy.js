describe('CSSLocators',()=>{
        it('CSSLocators',()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            cy.get("input[name='username']").type("Admin")
            cy.get("input[name='password']").type("admin123")
            cy.get("button[type='submit']").click()
            cy.get("p[class='oxd-text oxd-text--p orangehrm-attendance-card-state']").contains('Punched Out')
            cy.get("button[class='oxd-icon-button orangehrm-quick-launch-icon']").should('have.length',6)
            cy.get("button[title='Assign Leave']").click()
        })

       
     
})