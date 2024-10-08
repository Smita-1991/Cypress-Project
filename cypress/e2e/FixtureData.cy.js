describe("Fixture data",()=>{
   /* it("FixtureDemoTest",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm.json').then((data)=>{
        
            cy.get("input[name='username']").type(data.username)
        cy.get("input[name='password']").type(data.password)
        cy.get("div[class='oxd-form-actions orangehrm-login-action']").click()
        cy.get("p[class='oxd-text oxd-text--p orangehrm-attendance-card-state']").should('have.text',data.loggedInUser)

        })

        
    })*/

    // Access through hook for multiple it blocks
    let userData;
    before(()=>{
        cy.fixture('orangehrm').then((data)=>{
            userData=data;
        })
    })

    it("FixtureDemoTest",()=>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type(userData.username)
        cy.get("input[name='password']").type(userData.password)
        cy.get("div[class='oxd-form-actions orangehrm-login-action']").click()
        cy.get("p[class='oxd-text oxd-text--p orangehrm-attendance-card-state']").should('have.text',userData.loggedInUser)

    })
})