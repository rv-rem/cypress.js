describe('Проверка на позитивный кейс авторизации', function () {

     it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.wait(1000);
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })
})