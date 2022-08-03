describe('ui: dialog component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dialog--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to dialog!');
    });
});
