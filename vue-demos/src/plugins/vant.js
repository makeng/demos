/*----------------------------------------------------------------------------------
* about:UI的插入文件
* author:马兆铿（13790371603 810768333@qq.com）
* date:2019-09-18
* ----------------------------------------------------------------------------------*/
import {
  Area, Button, Cell, CellGroup, Col, DatetimePicker, Dialog, Field, Icon, List, Loading, NavBar, NumberKeyboard,
  Picker, Popup, Row, Search, Switch, SwitchCell, Tab, Tabs, Toast
} from 'vant'

function useVant (Vue) {
  // 为了美观而分行
  Vue.use(Button)
    .use(Picker)
    .use(Search)
    .use(Field)
    .use(Area)
    .use(Popup)
    .use(Icon)
    .use(NavBar)
    .use(Cell)
    .use(CellGroup)
    .use(List)
    .use(Switch)
    .use(SwitchCell)
    .use(NumberKeyboard)
    .use(Toast)
    .use(Row)
    .use(Col)
    .use(Loading)
    .use(Dialog)
    .use(Search)
    .use(Tab)
    .use(Tabs)
    .use(DatetimePicker)
}

export {
  useVant
}
