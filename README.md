# es6-test

## 计划
- 了解 bind、call、apply 等方法的实现原理
- 了解 es6 编译之后的代码
- 深入练习 generator、async 等异步代码
- 测试 babel 配置，对应浏览器的兼容效果

## 设计思路

### 站点

#### 启动
```
npm start
```
- webpack
- webpack-dev-server
- babel-loader
#### 页面结构
- 添加左侧导航
- 页面分为左右结构，左边显示源码，右边显示编译之后的代码

#### 兼容性检查
启动之后，会自动将所有示例编译并运行一次，收集运行中的错误信息，判断是否有兼容性的问题