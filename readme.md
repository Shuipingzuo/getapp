getapp
---
获取指定位置的子模块

### Install
```sh
npm i getapp --save
```

### Usage
```js
const getapp = require('getapp')
// Apps所在的目录
getapp.config.set('cwd', url)
// Apps注册的父级宿主
getapp.config.set('system', system)

// 1. 获取单个app
getapp.get(name).reg()

// 2. 批量获取所有app
getapp.getAll().forEach(app => app.reg())
```

### Class
```js
const Getapp = getapp.Getapp
```
