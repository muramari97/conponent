import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';

import Item from '/Item.jsx';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      //入力テキスト
      inputText:"",
      //Itemの要素を記憶しておくための配列
      items:[]
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(){
    var newitems=this.state.items;
    var d = new Date();
    var date = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    //入力テキストをitems配列に追加
    newitems.push({text: this.state.inputText,DATA: date});
    //this.stateを更新
    this.setState({inputText:"",items:newitems});
  }

  render(){
    return(
      <Page>
        <Input value={this.setState}
          onChage={(event) => {this.setState({ inputText: event.target.value, items: this.state.items}) }}modifier="material"/>
        <Button onClick={this.addItem}>追加</Button>
        {this.state.items.map(item => {return <Item text ={item.text}></Item>})}
      </Page>
    );
  }
}