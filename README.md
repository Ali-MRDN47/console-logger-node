# console-logger-node
This simple logger colorizes your output on the console in 4 colors, red, blue, green and yellow

## Installation
run this command in your terminal
```
PS C:\<your project root> npm install console-logger-node
```
## Usage

Require the package in your project
```
const logger = require('SimpleConsoleLogger');
```
In your preferred file add this code lines to log your colorized text:
```
logger.newLine()
    .logPart('your message', logger.Color.red)
    .log()
```
You can also log many text parts in different colors:
```
logger.newLine()
    .logPart('this message will be logged in blue', logger.Color.blue)
    .logPart(' and this part will be logged in green', logger.Color.green)
    .log()
```

## Background
Every time the `newLine()` function is called, a new object of type `Message` is created, which has two methods:

* `logPart(txt, color)` builds a colored part of your message and return its parent object, so you can call it many times

* `log()` logs all parts of your message combined to the console

In addition you have the constant object `Color` and you can select your preferred color from its properties
## License
MIT
