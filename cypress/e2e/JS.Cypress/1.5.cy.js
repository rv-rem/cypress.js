describe('Проверка на негативный кейс авторизации', function () {

     it('НЕправильный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.wait(1000);
        cy.get('#mail').type('germandolnikov.com');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon');
    })
})