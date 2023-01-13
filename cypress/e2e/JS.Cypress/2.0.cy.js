describe('Автотест', function () {

     it('Автотест', function () {
        cy.visit('https://testqastudio.me/');
        //cy.wait(1000);
        cy.get('.header-search > .search-icon > .razzi-svg-icon').click();
        //cy.wait(1000);
        cy.get('.search-wrapper > .search-field').type('БРОММС Двухместная кровать');
        cy.get('.search-submit > .razzi-svg-icon').click();
        //cy.wait(1000);
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click()
        .wait(1000).click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        //cy.wait(1000);
        cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
        cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
        //cy.wait(1000);
        cy.get('.header-search > .search-icon > .razzi-svg-icon').click();
        //cy.wait(1000);
        cy.get('.search-wrapper > .search-field').type('КЛЛАРИОН Низкий столик');
        cy.get('.search-submit > .razzi-svg-icon').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.checkout').click();
        // Проверка что форма заказа открылась
        cy.get('.page-header__title').contains('Оформение заказа');
        cy.get('#billing_first_name').type('Иван');
        cy.get('#billing_last_name').type('Иванов');
        cy.get('#billing_address_1').type('1');
        cy.get('#billing_city').type('Задрыпанск');
        cy.get('#billing_state').type('Задрыпанский');
        cy.get('#billing_postcode').type('12345');
        cy.get('#billing_phone').type('87891234567');
        cy.get('#billing_email').type('sgfsgf@mail.ru');
        cy.get('#place_order').click();
        cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.');

    })
})