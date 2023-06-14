export class BookStore {

    constructor() {
        this.rowImg = '.rt-td > img',
        this.bookTitle = '.action-buttons',
        this.searchBox = '#searchBox'
    }

    typeIntoSearchBox(title) {
        cy.get(this.searchBox).type(title);
    }

    goToListedBook(title) {
        cy.get(this.bookTitle).click();
    }

    assertThereAreBooksLoaded() {
        cy.get(this.rowImg).should('have.length.gt', 1);
    }

    assertBookListHaveUpdated() {
        cy.get(this.rowImg).should('have.length', 1);
    }
}