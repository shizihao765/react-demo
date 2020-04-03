import React, {Component, Fragment} from 'react'
import ListItem from './ListItem'
import axios from 'axios'
import {CSSTransition, TransitionGroup} from 'react-transition-group' 

class MyList extends Component{
    constructor(props){
        super(props)
        this.state={
            inputValue:'szh',
            list:[]
        }
    }
  
    componentWillMount() {
        console.log('componentWillMount')
    }
    
    
    componentDidMount() {
        console.log('componentDidMount')
        axios.get('https://www.fastmock.site/mock/83b1857d4b7fea14cdc1d3b96a18ce2f/demo02/demo02')
        .then((res)=>{
            console.log('get succeed  '+ JSON.stringify(res))
            this.setState({
                list:res.data.data
            })
        })
        .catch((error)=>{console.log('get failed  '+ error)})
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true 
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentWillUpdate')
    }
    
   

    

    render(){
        console.log('render')
        return (
            <Fragment>
                <div>
                    {/* 数据绑定, 事件绑定 */}
                    {/* bind()方法是ES6新特性, 可以认为将this指针指向这个函数 */}
                    <input value={this.state.inputValue} 
                            onChange={this.inputChange.bind(this)} 
                            ref={(input)=>{this.input=input}}
                    />  
                    <button onClick={this.addItem.bind(this)}>add</button>
                </div>
                <ul ref={(ul)=>{this.ul=ul}}>
                    <TransitionGroup>
                    {                      
                        // 对于list中的每一项, 调用一个ListItem组件并且绑定相应的数据,包括函数
                        this.state.list.map( (item, index)=>
                            <CSSTransition timeout={500} classNames='my-text' unmountOnExit appear={true} key={index}>
                                <ListItem content={item} index={index} key={index} deleteItem={this.deleteItem.bind(this)}></ListItem>
                            </CSSTransition>
                        )                        
                    }
                    </TransitionGroup>
                </ul>
            </Fragment>
        )
    }
    

    inputChange(){
        this.setState({
            inputValue: this.input.value
        })
    }

    addItem(){
        this.setState({
            // "..."是ES6新特性, 相当于把list展开放进来
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        }, ()=>{
            console.log(this.ul.querySelectorAll('li').length)  // 回调函数, 渲染后时速出ul中li的数量
        })
    }

    deleteItem(index){
        // 操作state中的值始终要使用setSate(), 不要直接修改
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list:list
        })
    }
}

export default MyList