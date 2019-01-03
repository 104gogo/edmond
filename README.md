# babel 代码编译网站

[项目地址](https://github.com/104gogo/es6-test)

## 计划
- 记录工具方法的源码实现，call、apply、debounce、throttle、curry 等
- 了解 es6 编译之后的代码
- 深入练习 generator、async 等异步代码
- 测试 babel 配置，对应浏览器的兼容效果
- 提供网站，让其他人可以在上面进行代码测试

## 介绍
代码可视可编辑的网站

### 站点
网站主要提供以下功能

##### 1.兼容性检查
启动之后，会自动将所有示例编译并运行一次，收集运行中的错误信息，判断是否有兼容性的问题

##### 2.代码测试
在代码编辑区域可以写代码，在右边看到转译之后的代码，并且看到代码输出的效果

##### 3.在线修改 browerList 的配置
修改配置看到不同机型的代码转译效果

### 页面结构
- 整体是上下的布局结构，上面可以选择内置的一些测试代码，下面是代码编辑器
- 编辑器分为左中右结构，最左边显示源码，可编辑，中间显示编译之后的代码，右边是 console.log 信息


### 开发
运行网站
```
npm start
```
运行服务端
```
npm run server
```

### 运行流程
网站提供界面交互
服务器提供代码转译的功能