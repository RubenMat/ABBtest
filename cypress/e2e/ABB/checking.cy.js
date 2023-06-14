import { HomePage } from '../../support/pages/homePage'
import { BookStore } from '../../support/pages/bookStore'
import { BookDetails } from '../../support/pages/bookDetails'

describe('ABB technical test', () => {
    const homePage = new HomePage();
    const bookStore = new BookStore();
    const bookDetails = new BookDetails();

    beforeEach(() => {
        cy.visit('https://demoqa.com/');
    })

    it('Navigate to book store', () => {
        homePage.clickBookStore();
        bookStore.assertThereAreBooksLoaded();
        bookStore.typeIntoSearchBox('Pocket');
        bookStore.assertBookListHaveUpdated();
    })

    it('Book details is correct', () => {
        homePage.clickBookStore();
        bookStore.assertThereAreBooksLoaded();
        bookStore.typeIntoSearchBox('Designing');
        bookStore.goToListedBook('Designing');
        bookDetails.assertFieldsAreShowing();
    })

})