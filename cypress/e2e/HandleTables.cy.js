describe('Table handling',()=>{
    var totalPages=0
    it('Handle row and column',()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")

        //Pagination
            let totalPages=0
            cy.get("#pagination>li").then((p)=>{
                 totalPages=p.length
               cy.log("Total pages:"+totalPages)
               verifyPage(totalPages)

            })
        
       function verifyPage(pages){
        for(let p=1;p<=pages;p++){
            cy.get("#pagination>li:nth-child("+p+")").click()
            cy.get("#productTable tbody>tr").each(($row,index,$rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get("td:nth-child(3)").then((e)=>{
                        cy.log("####"+e.text())
                    })
                })

        })   
    
        }
    }
    })

})