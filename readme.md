getapp
---
获取指定位置的子模块

### Install
```sh
npm i getapp --save
```

### Usage
```js
const getapp = require('getapp');
getapp.config.set('cwd', path.join(__dirname, 'apps'));

// 1. 获取单个app
getapp.get(name)

// 2. 批量获取所有app
getapp.getAll().then(apps => console.log(apps))
```

### Class
```js
const Getapp = getapp.Getapp
```
