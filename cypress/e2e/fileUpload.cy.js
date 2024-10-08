import 'cypress-file-upload'

describe('fileUpload',()=>{
    it('Single file upload',()=>{
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile('Grade-2-Math-2-Digit-Addition-Over-and-Adjust-Word-Problems.pdf')
        cy.get("#file-submit").click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it('file uploade and Rename',()=>{
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath:'Grade-2-Math-2-Digit-Addition-Over-and-Adjust-Word-Problems.pdf',fileName:'myfile.pdf'})
        cy.get("#file-submit").click()
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')
    })

    it('File drag and drop',()=>{
        cy.visit("http://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("Grade-2-Math-2-Digit-Addition-Over-and-Adjust-Word-Problems.pdf",{subjectType:'drag-n-drop'})
        cy.get("#drag-drop-upload>div> div> div").contains("Grade-2-Math-2-Digit-Addition-Over-and-Adjust-Word-Problems")
    })

    it("Upload multiple files",()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
        cy.get("#filesToUpload").attachFile(['Grade-2-Math-2-Digit-Addition-Over-and-Adjust-(Number-Lines).pdf', 'Grade-2-Math-2-Digit-Addition-Over-and-Adjust-Word-Problems.pdf']);
        
        cy.get(":nth-child(6)>strong").should('have.value','Files You Selected:')

    })

    it.only("File upload-shadow dom()",()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile({filePath:"Grade-2-Math-2-Digit-Addition-Over-and-Adjust-(Number-Lines).pdf",fileName:'MyFile.pdf'})
        cy.get(".smart-item-name",{includeShadowDom:true}).contains("MyFile")
    })
})