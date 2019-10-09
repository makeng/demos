# 华为小圆
内嵌于华为项目的

## 资料
- 需求文档：见 /doc
- UI：[蓝湖](https://lanhuapp.com/web/#/item/project/board?pid=6b62a827-5863-4a30-8735-d8d57686825e)
- 接口
  - [酷控](http://192.168.2.208:8090/pages/viewpage.action?pageId=57410066)

### 开发注意
- 单元测试：由于需要配置 ES6 来支持 export 语法，但是 babel 设置「env」会导致与 Vue 项目本身配置冲突。所以配置了特定的 Babel 环境（spec/index）统一运行所有测试。Webstorm 支持即时运行 Jasmine，但是无法运行单个测试（ES6 单个转换失败）。
- 路由层级：按照功能来安放页面。为了方便管理，避免嵌套过多，路径最多2级。
