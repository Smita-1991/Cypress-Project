

describe('Assersion Demo',()=>{

    beforeEach(()=>{
        cy.login('Jijabai','dhruv123')
    })

    afterEach(()=>{
       cy.logout()
    })
 
    it("Open Bank account",()=>{
     cy.get("div[id='leftPanel'] p").then((x)=>{
        let username=x.text();
        expect(username).contains("Jijabai")
     })
        
    })

    it("Find Transactions",()=>{
        cy.get("a[href='findtrans.htm']").click()

        cy.get("h1[class='title']").then((x)=>{
            expect(x.text()).contains("Find Transactions")
        })

        cy.get("select[id='accountId']").select(0)

        cy.get("input[id='transactionId']").type("1")
        cy.get("input[id='transactionDate']").type("3-12-2013")
        cy.get("span[id='transactionDateError']").should("not.be.visible")

        cy.get("button[id='findByDate']").click()
        cy.get("span[id='transactionDateError']").should("be.visible")

    })


})