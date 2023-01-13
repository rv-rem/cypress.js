describe('Проверка логики востановления пароля', function () {

     it('Проверка логики востановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.wait(1000);
        cy.get('#forgotEmailButton').click();
        cy.wait(1000);
        cy.get('#mailForgot').type('fgsfhgsj@mail.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon')
    })
})