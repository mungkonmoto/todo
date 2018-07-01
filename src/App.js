import React, { Component } from "react";
import FormSubmit from "./components/FormSubmit";
import List from "./components/List";
import HeaderComponents from "./components/HeaderComponents";



  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      todo: [
         { id: 1, name: "sdasd",complete: false},
         { id: 2, name: "asdasd",complete: false}
      ],
      message: ""
     };
    
    //โครตงง

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }
    onChangeMessage(e){
      this.setState({message: e.target.value})
    }
    onSubmitMessage(e) {
      // ป้องกันเปลี่ยนหน้า
      e.preventDefault();
      let oldTodo = this.state.todo;
      let todoLength = this.state.todo.length;
      let lastId = this.state.todo[todoLength - 1].id;
      let newMassage = {
        id: lastId + 1,
        name: this.state.message,
        complete: false
      };
      oldTodo.push(newMassage);
      this.setState({ todos: oldTodo });
    }
   
    render() {
      return (
        <div
          style={{
            borderColor: "#e12c6a",
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 4,
            width: 1024,
            margin: "auto",
            marginTop: 20
          }}
        >
          <HeaderComponents />
          
          <List todo= {this.state.todo}/>
          <FormSubmit 
                onChangeMessage={this.onChangeMessage}
                onSubmitMessage={this.onSubmitMessage}/>
          </div>
      );
    }
  }
  export default App;
