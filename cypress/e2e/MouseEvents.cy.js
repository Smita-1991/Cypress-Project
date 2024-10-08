import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe('Mouse events',()=>{
    it('Mouse event',()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get("li[class='nav-item dropdown']>div>div>ul:nth-child(1)>li>a[href='https://demo.opencart.com/en-gb/catalog/desktops/mac']").should('not.be.visible')
        cy.get("div[class='collapse navbar-collapse']>ul>li:nth-child(1)").trigger('mouseover').click()
        cy.get("li[class='nav-item dropdown']>div>div>ul:nth-child(1)>li>a[href='https://demo.opencart.com/en-gb/catalog/desktops/mac']").should('be.visible')
        cy.get("li[class='nav-item dropdown']>div>div>ul:nth-child(1)>li>a[href='https://demo.opencart.com/en-gb/catalog/desktops/mac']").click()
    })

    it('Right click',()=>{
        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html")
        cy.get("ul[class='context-menu-list context-menu-root']>li:nth-child(3)").should('not.be.visible')
        cy.get("span[class='context-menu-one btn btn-neutral']").trigger('contextmenu')
        cy.get("ul[class='context-menu-list context-menu-root']>li:nth-child(3)").should('be.visible')
    })

    it('Double click',()=>{
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded("#iframeResult")
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!')
    })

    it('Drag and Drop using plugin',()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get("#box6").drag("#box106")
    })

    it.only('scrolling page',()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")
        

    })
})