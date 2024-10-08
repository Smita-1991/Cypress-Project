class Login{
    setUserName(userName){
        cy.get("input[name='username']").type(userName)
    }

    setPassword(password){
        cy.get("input[name='password']").type(password)
    }

    clickOnSubmit(){
        cy.get("button[type='submit']").click()
    }
}

export default Login