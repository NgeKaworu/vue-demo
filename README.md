# vue2 全家桶写的购物车的 DEMO

##### [在线地址](http://furan.xyz/vue/)

## 大家这么忙还抽空看我的烂代码, 真是太感谢了.

### 安装依赖

```
yarn install
```

### 本地运行

```
yarn run serve
```

#### 前端结构

使用 技术栈 `vue` + `vuex` + `vue-router` + `antd` + `mock`

```js
|-- README.md
|-- babel.config.js                       // babel的扩展项
|-- package.json
|-- public
|   |-- favicon.ico
|   `-- index.html
|-- src
|   |-- App.vue                           //app主文件
|   |-- api                               //api层
|   |   `-- products.js
|   |-- assets
|   |   `-- logo.png
|   |-- components                        //组件文件夹
|   |   |-- BaseComponents                //基础组件
|   |   |   |-- BaseCounter.vue           //基础计数器组件
|   |   |   `-- BaseItem.vue              //基础容器组件
|   |   |-- CartComponents                //购物车组件文件夹
|   |   |   |-- CartBar.less              //购物车悬浮条组件样式.less
|   |   |   |-- CartBar.vue               //购物车悬浮条组件
|   |   |   |-- CartCounter.vue           //购物车计数器, 购物车模型+BaseCouter的组合
|   |   |   |-- CartItem.vue              //购物车容器 购物车模型+BaseItem的组合
|   |   |   `-- CartList.vue              //购物车列表组件
|   |   |-- OtherDemo                     //其他的官方demo
|   |   |   |-- HelloWorld.vue
|   |   |   |-- Sudoku.vue
|   |   |   `-- TodoList.vue
|   |   `-- ProductComponents              //商品组件文件夹
|   |       |-- ProductItem.vue            //商品容器 同上
|   |       `-- ProductList.vue            //商品列表
|   |-- layout                             //布局
|   |   |-- BaseContent.vue                   
|   |   |-- BaseFooter.vue
|   |   |-- BaseHeader.vue
|   |   `-- BaseLayout.vue
|   |-- main.js                            //主入口
|   |-- main.less                          //主样式
|   |-- mock.js                            //mock假数据
|   |-- plugins                            //vuex的插件
|   |   `-- loading.js                     //全局loading插件 
|   |-- router.js                          //router主文件
|   |-- store                              //store文件夹
|   |   |-- index.js                       //store主入口
|   |   `-- modules                        //store分块
|   |       |-- cart.js                    //购物车modules
|   |       |-- global.js                  //全局modules
|   |       `-- products.js                //产品modules
|   |-- utils                              //工具集
|   |   `-- request.js                     //axios的封装
|   `-- views                              //页面文件夹
|       |-- HomePage.vue                    //主页
|       |-- OtherPage.vue                   //其他DEMO页
|       `-- ProductPage.vue                 //产品页
|-- vue.config.js                           //vue-cli 构建扩展
```
