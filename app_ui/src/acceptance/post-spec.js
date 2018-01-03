describe('post', function() {
  it('should enable post button once notes are entered', function() {
    browser.get('http://localhost:4200');

    expect(element(by.buttonText("Post")).isEnabled()).toBeFalsy()

    element(by.id('notes-input')).sendKeys('some notes for testing...')

    expect(element(by.buttonText("Post")).isEnabled()).toBeTruthy()
  });
});