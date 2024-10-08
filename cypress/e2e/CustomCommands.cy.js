describe("Custom commands",()=>{
    it("Handling links",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.loginHRM("Admin","admin123")
    })
})