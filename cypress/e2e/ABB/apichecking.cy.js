
describe('API testing', () => {

    it('Assert book titles and authors', () => {
        cy.request({
            method: 'GET',
            url: 'https://demoqa.com/BookStore/v1/Books',
        })
            .then((response) => {
            expect(response.status).to.have.eq(200);
            
            let books = response.body.books;

            books.forEach(element => {
                expect(element).property('title').to.not.be.oneOf([null, ""]);
                expect(element).property('author').to.not.be.oneOf([null, ""]);
            });
        })
    })
})