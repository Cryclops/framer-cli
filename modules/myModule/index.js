
// Add the following line to your project in Framer Studio.
// myModule = require 'myModule'
// Reference the contents by name, like myModule.myFunction() or myModule.myVar

exports.data = require('./data.json')

exports.image = __dirname + '/background.png'

exports.myVar = 'myVariable'

exports.myFunction = () => print('myFunction is running')

exports.myArray = [1, 2, 3]
