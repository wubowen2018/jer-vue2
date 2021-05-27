# jer-vue2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

---
### 前端路由
    利用`AJAX`可以不重载页面就刷新数据,再加上 # 号的特性（即改变 URL 却不请求后端），我们就可以在前端实现页面的整体变化，而不用每次都去请求后端。
    localhost:8080/#/subUrl/subUrl1

#### hash 模式
    前端路由模式的模式是hash。为了实现前端路由，我们可以监听 # 号后面内容的变化（hashChange），从而动态改变页面内容。URL 的 # 号后面的地址被称为 hash。这种实现方式我们称之为 Hash 模式，是非常典型的前端路由方式。

#### history 模式
    这种方式使用了 History API，History API 顾名思义就是针对历史记录的 API ，这种模式的原理是先把页面的状态保存到一个对象（`state`）里，当页面的 URL 变化时找到对应的对象，从而还原这个页面。其实原本人家这个功能是为了方便浏览器前进后退的，不得不说程序员们的脑洞真大。使用了这种模式，就可以摆脱 # 号实现前端路由。

修改路由为history模式 /src/router/index.js
```js
import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',  //修改路由模式为history
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',
      component: AppIndex
    }
  ]
})

```


