import {browser, by, element} from 'protractor'

describe('post', () => {
    it('should enable post button once notes are entered', () => {
        browser.get('/')

        expect(element(by.buttonText("Post")).isEnabled()).toBeFalsy()

        element(by.id('notes-input')).sendKeys('some notes for testing...')

        expect(element(by.buttonText("Post")).isEnabled()).toBeTruthy()
    })

    it('should clear input field after post button is clicked', ()=> {
        browser.get('/')

        element(by.id('notes-input')).sendKeys('some notes for testing...')
        element(by.buttonText('Post')).click()

        expect(element(by.id('notes-input')).getAttribute('value')).toEqual("")
    })
})
