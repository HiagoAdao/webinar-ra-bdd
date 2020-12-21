const HOME_PATH = 'https://webinar-ra-bdd.vercel.app/';
const REVEAL_BUTTON = 'div[id="reveal-button"]';
const MESSAGE_FIELD = 'h2[id="mensagem-lorem-ipsum"]';

class HomePage {
  static visit() {
    cy.visit(HOME_PATH);
  };

  static clickInRevealButton() {
    const button = cy.get(REVEAL_BUTTON);
    button.should('exist');
    button.click({force: true});
  };

  static verifyIfMessageIsExists() {
    const message = cy.get(MESSAGE_FIELD);
    message.should('exist');
  };
}

export default HomePage;