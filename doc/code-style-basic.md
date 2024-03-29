# ⚖️ 前端代码规范

> 作者：马凯
>
> 如果你的代码没有与社区相符的规范，那么你的代码将不被社区所接受。

"编程风格"的选择不应该基于个人爱好、熟悉程度、打字工作量等因素，而要考虑如何尽量使代码清晰易读、减少出错。

此文档描述的，是一种能够清晰表达代码的意图的风格，尽量把个人喜好、习惯排除在外。

《软件设计哲学》中描述了，良好的设计应该最起码做好两个方面的工作——**命名**和**封装**。





## ❌ 应避免的错误

> 要保证计划的成功，最好的方法就是罗列可能导致其失败的因素，然后躲开它们。

相信大家平时写代码都会见到以下不规范的情况：

- 使用拼音命名。（这个 Github 的[网页](https://unbug.github.io/codelf/)可以帮助你找到更国际化的命名）

```javascript
// ❌ 这样其他人维护用 'list' 还是 'liebiao'？
<div class="home-liebiao home-liebiao-active"> 
  
// ✔️ 英文命名
<div class="home__list home__list--active">
```

- 滥用符号，比如 '$'（DOM 元素）、 '_'（JS 中表示对象的私有变量）等，会产生歧义，让阅读者迷惑。（这本 [Martin 写的小册子](https://www.bookstack.cn/read/clean-code-javascript/spilt.2.README.md)可以更好的让你写出阅读性好的命名）

```javascript
// ❌ 这里图方便用的 '_' 是什么含义？加工？扩展？Lodash？
const _material_entity = { ...material_entity };

// ✔️ 准守驼峰规范的情况下，标明操作的意图、结果
const materialEntityCopy = { ...material_entity };
const materialEntityFiltered = material_entity.filter(...d);
```

- 含义不精准、不成系列的命名，而且没有注释。（Google 这个[小文档](https://www.yuque.com/docs/share/34a5e35e-d282-4f77-9e4d-741667702275?# 《[code]Code Health: To Comment or Not to Comment?》)介绍如何命名与注释）

```javascript
// ❌ 'handle','list','id' 的含义都过于宽泛，如果加入其他同类则无法区分
function handleList(id){...} 

// ✔️ 做什么，怎么做，有何结果，清清楚楚
/**
 * 获取用户列表
 * @param corpId 公司的 id
 */
function queryUserList(corpId){...}
```

- 代码重复、啰嗦，关键类型不标明含义

```javascript
// ❌ 重复且冗长
let discount = this.props.discount === undefined ? this.props.discount : 10;
let prevValue = this.props.flag === 0 
	? Number(discount) 
	: Number(this.props.total || 0);

// ✔️ 善用语法设置默认值，避免不必要的判断。Number() 调用一次即可。
const DISCOUNT_EMPTY = null; // 明确的类型
const { discount = 10, total = 0, flag } = this.props; // 注意只有值为 undefined 的变量才能得到默认值，null 和空字符不变
let prevValue = Number(favourType === 0 ? discount : total);
```





## 👔 命名：国际规范 BEM

![BEM](https://file.bluesdream.com/wp-content/uploads/2018/11/css-bem-interpretation.png)

> 工牌是一张简单的卡片，但是凭借它就能知道你的公司、部门、职能、名字，也就是说它就是你的虚拟身份。

变量唯一要注意的点，就是命名。我们仅仅需要用公式「[BEM](https://zhuanlan.zhihu.com/p/72631379)」来给它们起名字，就可以达到精确、看名知义、可搜索的效果，就像你的工牌一样。Bootstrap.js 和 Vant.js 都在用，被社区广泛接受。



### CSS

BEM 让整个组件库都有标准的类名，全部分类、内容、状态都描绘的清清楚楚。

- 这样类名确实有点长，但请记住，我们的目的是精准，要增加信息量就只能添加字符。

```html
<div class="van-switch van-switch--loading"> // ✔️ Vant.js 推荐
<div class="van-switch__node"> // B 是块（组件），E 是内容，M 是状态
<div class="van-switch__node-icon van-switch__node-icon--active"> // 连接方式是 B__E--M
<div class={`${CLASSNAME}__box ${CLASSNAME}__box--off`}> // ✔️ 善用 JS & SCSS 减少字符和重复
```



### 变量 & 函数

BEM 让代码自说明。

- B 是归属，可以用事件类型
- E 是内容，可以用被操作的对象
- M 是状态，可以写操作的方式、状态。

```javascript
function onAdd(){...} // ❌ 事件名要标准
function writePw(){...} // ❌ “密码”缩写后反而令人迷惑
function clickAdd(){...} // ✔️ Antd.js 推荐，与其它点击事件成系列，方便搜索和加工
function clickDeleteConfirm() {...} // 'Confirm' 表示方式
function changeUsernameToEng(){...} // 'ToEng' 表示状态
function inputPassword(){...} // 与其它 input 事件成系列
```





## 🤖️ 封装：精准的子函数

![good function](https://segmentfault.com/img/bVcKD25)



### 结构

社区上比较知名的项目中，函数的结构都是非常漂亮的，它们一般都有类似的结构（如上图）

- 常量、解构变量集中声明在逻辑前面，先准备好，避免与逻辑混作一团
- 子函数都设计成单一功能，负责细节的处理，也是先准备好
- 逻辑部分简短，只包含子函数的调用

```javascript
// ❌ 代码重复、逻辑暴露，无结构可言
const printData = async (orderType: string, orderId: string) => {
  const {templateId} = this.props
  if (yzj && yzj.selectToAppV7) {
    yzj.selectToAppV7(
      {
        type: 'printBill',
        data: {
          templateId: templateId,
        }
      },
      (res: any) => {
        if (!Boolean(res.success)) {
          Tips.toast(res.error);
          return;
        }
      }
    );
  } else {
    const {device} = this.props
    let res = await printService.getPrintData({
      billId: orderId,
      billType: orderType,
      templateId: templateId,
      printType: continuity ? 2 : 1
    });
    if (res) {
      for (let i = 0; i < num; i++) {
        await BlueTooth.printData(
          device, res);
      }
    }
  }
};

// ✔️ 每个子函数只负责自己的功能，调试、查错、扩展都十分方便
const printData = async (orderType: string, orderId: string) => {
  const {templateId, device} = this.props // 常量/变量都准备好，后续就不再需要关注
  // 平台检查
  const checkIfV7 = (yzj)=> {...}
  // 打印在 App
  const printInApp = ()=> {...}
  // 打印在微信
  const printInWx = (device)=> {...}
  
  return checkIfV7(yzj)
    ? printInApp()
  	: printInWx(device)
}
```





### 形式

根据 [CleanCodeJS](https://github.com/alivebao/clean-code-js#%E5%87%BD%E6%95%B0) 的描述，好的函数应该符合以下描述（从入口到出口）

- 单一职责。一个函数如果包含了几种功能，对维护者来说是一个灾难。
- 参数尽量少于 2 个，最多不要超过 7 个。参数的量代表着它们能产生多少种组合，情况越多逻辑越乱。
- 返回单一类型结果。如果你在写一个 getList()，倘若中间失败，也要返回一个 []，否则默认不返回值 undefined 会让后面的逻辑产生错误。

没有好例子？可以参考这个著名的小仓库 [AntDesignMobile.js](https://github.com/ant-design/ant-design-mobile.git)，/src 只有 184KB，但是覆盖了大部分的良好的 JS 设计。

