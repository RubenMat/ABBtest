export class BookDetails {

    constructor() {
        this.fieldISBN = '#ISBN-wrapper',
        this.fieldTitle = '#title-wrapper',
        this.fieldSubtitle = '#subtitle-wrapper',
        this.fieldAuthor = '#author-wrapper',
        this.fieldPublisher = '#publisher-wrapper',
        this.fieldPages = '#pages-wrapper',
        this.fieldDescription = '#description-wrapper',
        this.fieldWebsite = '#description-wrapper',
        this.backBtn = '#addNewRecordButton'
    }

    assertFieldsAreShowing() {
        cy.get(this.fieldISBN).should('be.visible');
        cy.get(this.fieldTitle).should('be.visible');
        cy.get(this.fieldSubtitle).should('be.visible');
        cy.get(this.fieldAuthor).should('be.visible');
        cy.get(this.fieldPublisher).should('be.visible');
        cy.get(this.fieldPages).should('be.visible');
        cy.get(this.fieldDescription).should('be.visible');
        cy.get(this.fieldWebsite).should('be.visible');
    }

}