describe('Проверка на привидение к строчным буквам в логине', function () {

     it('Проверка на строчные буквы', function () {
        cy.visit('https://login.qa.studio/');
        cy.wait(1000);
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })
})