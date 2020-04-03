import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class ListItem extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    // 组件第一次被渲染时不会执行
    // 如果已经被渲染才会执行
    componentWillReceiveProps(nextProps) {
        console.log('child-componentWillReceiveProps')
    }

    componentWillUnmount(){
        console.log('child-componentWillUnmont')
    }


    shouldComponentUpdate(nextProps, nextState) {
        // if(nextProps.content!==this.props.content){
        //     return true
        // } else {
            return false
        // }
    }
    

    render() {
        return (
            <li onClick={this.handleClick}>{this.props.content}</li>
        )
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}

ListItem.propTypes={
    content:PropTypes.string,
    index:PropTypes.number.isRequired,
    deleteItem:PropTypes.func.isRequired
}
ListItem.defaultProps={
    content: "11111"
}
export default ListItem
