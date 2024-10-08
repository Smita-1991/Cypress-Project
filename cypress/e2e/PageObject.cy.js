import Login from "../PageObject/LoginPage";

describe("PageObjectModel",()=>{
    it('PageObjectModelConcept',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const ln=new Login()
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickOnSubmit()
    })
})