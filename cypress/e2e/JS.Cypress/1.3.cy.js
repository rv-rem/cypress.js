describe('Проверка на негативный кейс авторизации', function () {

     it('НЕправильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.wait(1000);
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio111');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
})