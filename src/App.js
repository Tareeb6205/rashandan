import React, {Component} from 'react';
import './App.css';
import Items from './Items';
import Navbar  from './Navbar';
import HeadItemList from './HeadItemList';
import AddNew from './AddNew';

class App extends Component {
  constructor() {
    super()
    this.state= {
      lstofobjsofitems:[],
      searchvalue:'',
      name:'',
      category:'',
      quantity:''
    }
  }

  AddOnItemlst = (event) => {
    this.state.lstofobjsofitems.push({
        name:this.state.name,
        category:2,
        quantity:this.state.quantity
      })
    if (this.state.name==="" || this.state.quantity==="") {
      alert("Can't enter empty item!")
    } else {
      this.setState({lstofobjsofitems:this.state.lstofobjsofitems
        });
        document.querySelector("form").classList.toggle("hidden")
        this.setState({name:'',quantity:''
        });
        document.querySelector("#enteritem").classList.toggle("hidden")
        this.Clearform()
      }
  }
  Clearform = (event) => {
    const form=document.querySelector("form")
    form.children[0].value=''
    form.children[2].value=''
  }
  Onnamechange = (event) => {
    this.setState({name: event.target.value})
  }
  Oncatchange = (event) => {

  }
  Onquachange = (event) => {
    this.setState({quantity: event.target.value})
  }
  RemoveItem = (event) => {
    document.querySelector("#item")
  }

  Showform = (event) => {
    document.querySelector("form").classList.toggle("hidden")
    document.querySelector("#enteritem").classList.toggle("hidden")
  }
  render() {
    return (
      <div className="text-center bg-[#f4ebce]">
        <Navbar/>
        <HeadItemList />
        <Items
        clicked={this.Onclick}
        items={this.state.lstofobjsofitems}
        itemremove={this.RemoveItem}
        />
        <AddNew
        newitem={this.AddOnItemlst}
        namechange={this.Onnamechange}
        quachange={this.Onquachange}
        formshow={this.Showform}
        formclear={this.Clearform}
        />
      </div>
    );
}
}
export default App;