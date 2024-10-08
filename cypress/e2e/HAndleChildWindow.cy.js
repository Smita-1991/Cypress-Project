describe('Handle child window',()=>{
    it('Child window',()=>{


        cy.visit("https://the-internet.herokuapp.com/windows")

        //Approach 1
        /* cy.get(".example>a").invoke('removeAttr','target').click()

         cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

         cy.go('back')*/


        //Approach 2
        /*
        cy.visit("https://the-internet.herokuapp.com/windows/new")

        cy.wait(5000)

        cy.go('back')*/

        cy.get(".example>a").then((e)=>{
            let url=e.prop('href')
            cy.visit(url)
        })

        cy.url().should('contains','https://the-internet.herokuapp.com/windows/new')

        cy.go('back')

    })

})