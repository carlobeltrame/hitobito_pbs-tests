describe('CSV export test', function() {
    it('downloads csv list of camp participants', function() {
        cy.visit('https://pbs.puzzle.ch')
        cy.get('#person_email').type('hussein_kohlmann@hitobito.example.com')
        cy.get('#person_password').type('hito42bito{enter}')
        
        cy.get('.sheet.parent').containsExactly('Lager').click()
    })
})
