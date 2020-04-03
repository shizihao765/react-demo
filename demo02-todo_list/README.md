实现一个动态添加和删除的列表, 通过输入内容,点击按钮添加列表项, 通过点击相应列表项删除相应列表

这个demo主要演示一下内容: 
1. JSX语法
2. 组件的数据绑定, 方法绑定
3. 组件的拆分
4. 组件的数据操作, state与props
5. 父组件与子组价之间的传值(react默认子组件是传不了父组件的), 即单向数据流, 子组件想要修改父组件只能调用父组件所提供的函数
6. 了解前端的函数式编程
7. PropTypes校验传递
8. 生命周期函数
   1. componentWillMount
   2. componentDidMount
   3. shouldComponentUpdate
   4. componentWillUpdate
   5. componentDidUpdate
   6. render
   7. componentWillReceiveProps
   8. componentWillUnmount
9.  使用react-transition-group管理多DOM动画

注意:
1. 自定义的组件必须首写字母要进行大写，而JSX是小写字母开头的
2. 组件必须要有一个根标签包裹,  React16以后, 可以使用`fragment`代替`div`了
3. `React`不建议直接操作`DOM`元素,而是要通过数据进行驱动，改变界面中的效果。