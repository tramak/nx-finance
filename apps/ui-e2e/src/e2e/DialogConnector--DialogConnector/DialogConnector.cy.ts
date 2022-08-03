describe('ui: DialogConnector component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dialogconnector--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DialogConnector!');
    });
});
