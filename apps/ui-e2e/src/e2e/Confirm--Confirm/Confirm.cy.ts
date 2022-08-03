describe('ui: Confirm component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=confirm--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Confirm!');
    });
});
