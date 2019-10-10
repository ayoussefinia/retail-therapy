import React, {Component} from 'react';
import Input from '../components/UI/input';

class Auth extends Component {
state = {

}
formContainer = {
  width: '50vw',
  border: '1px solid black',
  background: '#20315a',
  borderRadius: '5px'
}


render () {
  return(
    
    <div style={this.formContainer}>
      <form action="">
          <Input inputtype="input" type="text" name="email" label="user name:"/>
          <Input inputtype="input" type="text" name="password" label="password:"/>
      </form>
    </div>


  )



}
}

export default Auth;