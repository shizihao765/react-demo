import React, {Component, Fragment} from 'react'

class Xiaojiejie extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'szh',
            list:['111', '222']
        }
    }

    inputChange(e){
        this.setState({
            inputValue: e.target.value
        })
    }

    addList(){
        this.setState({
            // "..."是ES6新特性, 相当于把list展开放进来
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }
    render(){
        return (
            <Fragment>
                <div>
                    {/* 数据绑定, 事件绑定 */}
                    {/* bind()方法是ES6新特性, 可以认为将this指针指向这个函数 */}
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} />  
                    <button onClick={this.addList.bind(this)}>add</button>
                </div>
                <ul>
                    {
                        // 遍历list, 对list中每一项返回一个<li/>
                        this.state.list.map(
                            (item, index)=><li key={index}>{item}</li>
                        )
                    }
                </ul>
            </Fragment>
        )
    }
}

export default Xiaojiejie