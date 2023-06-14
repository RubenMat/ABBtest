export class HomePage {

    constructor() {
        this.homeCards = '.top-card'
    }
  
    clickBookStore() {
      cy.get(this.homeCards).last().click();
    }
}