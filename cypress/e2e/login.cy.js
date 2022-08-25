
describe('Login',()=>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com');
    })

    it('Login with incorrect email',()=>{
            cy.login('dometing', 'other')

        cy.fixture('login').then((login)=>{
           
            cy.get(login.incorrectLoginBanner).should('contain','Invalid email address');

        })






       


    })

})