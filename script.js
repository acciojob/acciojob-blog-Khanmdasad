//your JS code here. If required.
// This is just an example, adjust according to your actual test file
describe('My Test Suite', () => {
  it('checks href values', () => {
    const links = {
      // ...
      "Brute Force vs. Optimization": { href: '#', article_name: 'Brute Force vs. Optimization' },
      "DSA vs. Competitive Programming": { href: '#', article_name: 'DSA vs. Competitive Programming' },
      "Complete Guide on FlexBox": { href: '#', article_name: 'Complete Guide on FlexBox' },
      // ...
    };

    cy.visit('http://localhost:3000');  // visit your page

    Object.values(links).forEach(({ href, article_name }) => {
      cy.contains(article_name).should('have.attr', 'href', href);
    });
  });
});