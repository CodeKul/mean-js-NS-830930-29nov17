var fs = require('fs')
var app = require('express')


class Notepad {

    saveNote() {
        fs.writeFile('./test.txt', 'Hey there!', err => console.log(`problem is saving file ${err}`));
    }
}