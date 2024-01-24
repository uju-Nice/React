import React, {Component} from "react";

class Forms extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: 'Nice',
            lastname: 'Edox',
            profession: 'Devops',
            rollNumber: 'null',
            errorMessage: '',
            nickos_training: 'choose'
        }

    }


changeHandler = (event) => {
  let filetName = event.target.name
  let fileValue = event.target.value
  let err = ''
    if(filetName === 'rollNumber'){
      if(fileValue !== ''  && !Number(fileValue)){
        err = <strong> Your roll number must be an interger </strong>
      }
    }

    this.setState({errorMessage: ''})
    this.setState({[filetName]: fileValue})
} 

submitHandler = (event) => {
  event.preventDefault()
  alert(this.state.firstname + 'You have succesfully registred')
};

render(){
  return (
    <form onSubmit={this.submitHandler}>
        
        <h1>Hello {this.state.firstname} </h1>
        <p>Register your firstname </p>
        <input type="text" name="firstname" onChange={this.changeHandler}/>
        <p>Register your lastname </p>
        <input type="text" name="lastname" onChange={this.changeHandler}/>
        <br></br>
        <input type="submit" value="submit"/> {this.state.errorMessage} <br/>
        {this.state.rollNumber}
        <br></br>

        <select value = {this.state.nickos_training}>
            <option value='linux'>Linux</option>
            <option value='terraform'>Terraform</option>
            <option value='docker'>Docker</option>
            <option value='kubernetes'>Kubernetes</option>
            <option value='promethues'>Promethues</option>
            <option value='grafana'>Grafana</option>
        </select>
    
    </form>
    );
  }

}

export default Forms;