describe('Проверка на негативный кейс авторизации', function () {

     it('НЕправильный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.wait(1000);
        cy.get('#mail').type('german@dolnikov.com');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })
})