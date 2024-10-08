describe("Fixture Data driiven testing",()=>{
    it("Data Driven",()=>{

        cy.fixture("orangehrm2").then((data)=>{
            data.forEach((userData) => {
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

                cy.get("input[name='username']").type(userData.username)
                cy.get("input[name='password']").type(userData.password)
                cy.get("div[class='oxd-form-actions orangehrm-login-action']").click()

                if(userData.username=='Admin' && userData.password=='admin123'){
                
                    cy.get("p[class='oxd-text oxd-text--p orangehrm-attendance-card-state']").should('have.text',userData.loggedInUser)
                    cy.get(".oxd-userdropdown-name").click()
                    cy.get("ul[class='oxd-dropdown-menu']>li:nth-child(4)").click()
                }else{
                    cy.wait(500)
                    cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should('have.text',userData.loggedInUser)
                
                }
        
            });
        })

    })
})