# jblog

Simple Node.js colorful logger for pretty-looking console messages

[![Version npm](https://img.shields.io/npm/v/jblog)](https://www.npmjs.com/package/jblog)
[![npm downloads](https://img.shields.io/npm/dm/jblog)](https://npm-stat.com/charts.html?package=jblog)

## Installation

```shell
npm i jblog
```

## Import

```js
import Logger from 'jblog'
```
or

```js
const Logger = require('jblog')
```


## Usage

```js
import Logger from 'jblog'

const logger = new Logger({
    scopes: ['TTS', 'SERVICE']
})

const someData = 'Hello world!'
logger.info('Well, something happened', someData)
logger.warn('There is a chance that you haven\'t heard of the high elves')
```

![logs_screenshot.png](https://i.postimg.cc/R0jnQm3X/image-2024-08-10-22-26-30.png)