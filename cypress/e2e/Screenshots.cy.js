describe("Screenshot",()=>{
    it("Capture a screenshot",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       // cy.loginHRM("Admin","admin1234")
       // cy.screenshot("Homepage")


        //Automatically capture screenshot
        cy.loginHRM("Admins","admin123455")
        cy.get("p[class='oxd-text oxd-text--p orangehrm-attendance-card-state']").should('have.text','Punched Out')
    })
})