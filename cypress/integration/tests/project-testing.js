describe('Pizza Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    });

    const name = () => cy.get('input[name="name"]')
    const specialTxt = () => cy.get('input[id="special-text"')
    const submitBtn = () => cy.get('#pizza-form').submit()
    const checkboxes = () => cy.get('[type="checkbox"]')

    it('sanity checks', () => {
        expect(3 * 3).to.equal(9)
    })

    it('elements should exist', () => {
        name().should('exist')
        specialTxt().should('exist')
        submitBtn().should('exist')
        checkboxes().should('exist')
    })

    describe('filling out inputs', () => {
        it('can type in the name field', () => {
            name()
            .should('have.value', '')
            .type('Customer name')
            .should('have.value', 'Customer name')
        })

        it('can type in special instructions field', () => {
            specialTxt()
            .should('have.value', '')
            .type('I want extra pepperoni')
            .should('have.value', 'I want extra pepperoni')
        })

        it('can check boxes', () => {
            checkboxes()
            cy.get('[type="checkbox"]').check()
        })
        
        it('can click button and submit', () => {
            submitBtn()
            cy.get('#pizza-form').click()
        })
    })

});