

describe('Handling frames',()=>{
    it('First approach',()=>{

        cy.visit('https://admin:admin@the-internet.herokuapp.com/iframe')

        const iframe=cy.get('#mce_0_ifr').its('0.contentDocument.body').should('be.visible').then(cy.wrap);

        iframe.type('Welcome')
        iframe.type('Welcome')


    })

    it('Second approach',()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/iframe')
        cy.getIframe('#mce_0_ifr').type('Welcome')
    })

    it.only('Third approach',()=>{
        cy.visit('https://admin:admin@the-internet.herokuapp.com/iframe')
      
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').type('Welcome {cmd+a}')
        cy.get("button[aria-label='Bold']").click()
    })
})