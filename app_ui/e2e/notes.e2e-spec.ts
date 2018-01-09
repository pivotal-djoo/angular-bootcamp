import {browser, by, element} from 'protractor'

describe('show all notes', () => {
    beforeEach(() => {
        browser.get('/')

        element(by.id('notes-input')).sendKeys('note 1')
        element(by.buttonText('Post')).click()
        element(by.id('notes-input')).sendKeys('note 2')
        element(by.buttonText('Post')).click()
        element(by.id('notes-input')).sendKeys('note 3')
        element(by.buttonText('Post')).click()
    })

    it('should fetch all notes and show them in a list', () => {
        expect(element.all(by.css('.note-item')).count()).toEqual(3)
        expect(element.all(by.css('.note-item')).get(0).getText()).toEqual('note 1')
        expect(element.all(by.css('.note-item')).get(1).getText()).toEqual('note 2')
        expect(element.all(by.css('.note-item')).get(2).getText()).toEqual('note 3')
    })
})
