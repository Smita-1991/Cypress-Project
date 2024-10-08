
describe('My First Test', () => {
  it('Test 1-Verify title positive test', function() {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM')
  })

  it('Test 2- Verify title negative test',function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM')
  })
})
