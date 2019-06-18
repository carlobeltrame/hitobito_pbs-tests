describe('CSV export test', function() {
    it('downloads csv list of camp participants', function() {
        cy.visit('https://pbs.puzzle.ch')
        cy.get('#person_email').type('hussein_kohlmann@hitobito.example.com')
        cy.get('#person_password').type('hito42bito{enter}')
        
        cy.get('.sheet.parent .nav-sub').contains('Lager').click()
        
        cy.get('#main table tr[id^=event_] td strong a').first().click()
        
        cy.get('#content ul.nav-sub a').contains('Teilnehmende').click()
        
        cy.get('#content').contains('Export').siblings().contains('SPORTdb').first().click({force: true, noWaiting: true})
    })
})
