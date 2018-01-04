import {browser, by, element} from 'protractor'

describe('post', () => {
    it('should enable post button once notes are entered', () => {
        browser.get('/')

        expect(element(by.buttonText("Post")).isEnabled()).toBeFalsy()

        element(by.id('notes-input')).sendKeys('some notes for testing...')

        expect(element(by.buttonText("Post")).isEnabled()).toBeTruthy()
    })
})
