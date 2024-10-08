
describe('Dropdown Practice',()=>{
    it.skip('Choose dropdown options',()=>{
        cy.visit("https://the-internet.herokuapp.com/")

        cy.get("a[href='/dropdown']").click()
        cy.get("#dropdown").select("Option 1")
        cy.get("#dropdown").select("Option 2")
        cy.get("#dropdown").should("be.visible").and('have.value','2')

    })

    it.skip('Bootstrap dropdown',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("India").type('{enter}')

        cy.get("#select2-billing_country-container").should('have.text','British Indian Ocean Territory')
        
    })

    it('Auto Sugested dropdown',()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("input[type='search']").type("Delhi")
        cy.get(".suggestion-title").contains('Delhi University').click()
        cy.get(".mw-page-title-main").should('have.text','Delhi University')
    })

    it.skip('Dynamic dropdown',()=>{
        cy.visit("https://google.com/")
        cy.get("#APjFqb").type('cypess automation')

        cy.get("div[class='wM6W7d']>span").should('have.length','13')
        cy.get("div[class='wM6W7d']>span").each(($ele, index, $list)=>{
            if($ele.text()=='cypress automation tutorial'){
                cy.wait(1000)
                cy.wrap($ele).click()
                cy.get("textarea[class='gLFyf']").should('have.value','cypress automation tutorial')

            }
        })

    })

    it('Alert',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am a JS Alert")
        })

        cy.get("#result").should('have.text','You successfully clicked an alert')

        

    })

    it('confirmation alert',()=>{
        
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        //cypress automatically handls the click event on ok button

        //Click on cancel button
        cy.on('window:confirm',()=> false)

        cy.get("#result").should('have.text','You clicked: Ok')

    })

    it('Prompt alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('Welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click() 

        //To click on cancel button-> not working

        //cy.on('window:prompt',()=>false)

        cy.get('#result').should('have.text','You entered: Welcome')

       })

       it.only('Authentivated alert',()=>{
        //approach 1
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        //approach 2
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:
                                                                    {
                                                                        username:'admin',
                                                                        password:'admin'
                                                                    }
                                                                })

              cy.get("div[class='example']").should('have.contain',"Congratulations")                                      
       })



})