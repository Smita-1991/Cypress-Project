//Before, After, BeforeEach, AfterEach

describe("Hooks",()=>{
    before(()=>{
            cy.log("********Launch Application***********")
    })

    after(()=>{
        cy.log("******* Close Application*******")
    })

    beforeEach(()=>{
        cy.log("****Login*******")
    })

    afterEach(()=>{
        cy.log("******Logout*****")
    })

    it("Search",()=>{
        cy.log("**** Searching******")
    })

    it("Advanced Search",()=>{
        cy.log("*****Advanced search*******")
    })
})