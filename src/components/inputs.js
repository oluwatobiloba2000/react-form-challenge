import React from 'react';
import Calendar from 'react-calendar';
import EmailValidator from 'email-validator';
import { Alert } from 'react-bootstrap';
import { Button, Form } from 'react-bootstrap'
import Table from './table';

export default class Input extends React.Component{

    state = {
        date: new Date(),
        Passworderror: '',
        Emailerror: '',
        Birthdayerror:'',
        Hobbieserror: '',
        userData: []
    }

    onChange = (date) =>{
        const currentYear = new Date().getFullYear()

         if(date.getFullYear() < currentYear){
                const year = date.getFullYear() || date;
                const userAge = currentYear - year;
                document.querySelector('.UserAge').value = `${userAge}`
                    this.setState({date: date, birthdayerror : '' })
                    return true;
            }else{
            this.setState({birthdayerror : 'Invalid birthday'})
            return false;

            }
    }

    checkEmailValidation = () =>{
        const email = document.querySelector('.email').value.trim();
        if(email.length ===  0){
            let Emailerror = 'Please Type in your Email';
            this.setState({ Emailerror: Emailerror });
           return false;
         }
         else if (EmailValidator.validate(email)) {
            let Emailerror = 'Valid Email';
            this.setState({ Emailerror: `${Emailerror}` });
            return true;
         }else if (EmailValidator.validate(email) === false) {
            let Emailerror = 'Invalid Email';
            this.setState({ Emailerror: `${Emailerror}` });
            return false
         }
         return false;
    }

    checkPasswordValidation = () =>{
        const password = document.querySelector('.password').value.trim();

        if(password.length === 0){
            this.setState({Passworderror: 'Please type in your password'})
            return false;
         } else if(password.length <= 5){
            this.setState({Passworderror: 'Password too weak'})
            return false;
        }else if(password.length > 6){
            this.setState({Passworderror: 'Strong password'})
            return true;
        }
        return false;
    }

    checkHobbiesValidation = () =>{
        const hobbyInput = document.querySelector('.hobby').value.trim();
        if(hobbyInput.length === 0){
            this.setState({Hobbieserror: 'Please type in your hobby'})
            return false;
        }else if(hobbyInput.length < 2){
            this.setState({Hobbieserror: 'Invalid'})
            return false;
        }else if(hobbyInput.length > 2){
            this.setState({Hobbieserror: 'valid'})
            return true;
        }
        return false;
    }

    ValidateData =  (e) => {
        e.preventDefault();
        const emailValue =  document.querySelector('.email').value.trim();
        const passwordValue = document.querySelector('.password').value.trim();
        const hobby = document.querySelector('.hobby').value.trim();
        const birthday = this.state.date;
        const age = document.querySelector('.UserAge').value.trim();
        if(this.checkEmailValidation() && this.checkPasswordValidation() && this.onChange(birthday) && this.checkHobbiesValidation() ){
            this.setState((prevState)=>({userData: prevState.userData.concat({
               email: emailValue,
               password: passwordValue,
               birthday: birthday,
               age,
               hobby
            })}))
            document.querySelector('.form__inputs').reset();
            this.setState({Passworderror: '',Emailerror: '',birthdayerror:'',Hobbieserror: '',date: new Date()})
            document.querySelector('.hide__alert').classList.add('show__alert');
            setTimeout(()=>{
                document.querySelector('.hide__alert').classList.remove('show__alert');
            }, 2000)
        }
    }

    showTable(){
        document.querySelector('.table').classList.toggle('show__table');
    }
  render(){
     return (
     <div className="form">
         <Alert key={1} className="hide__alert" variant={"success"}>
               Success
         </Alert> 
         <div className="form__circle"></div>
        <Form className="form__inputs">
        <Form.Group controlId="formBasicEmail">
            <Form.Label> <span className="labelsName"><i className="fas fa-at"></i></span>
              <Form.Control onKeyUp={this.checkEmailValidation} className="email" type="email" required placeholder="Enter email" />
            </Form.Label>
            {this.state.Emailerror === 'Valid Email' ? <p className="valid__text">{this.state.Emailerror} </p> : <p className="invalid__text">{this.state.Emailerror}</p>}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label> <span className="labelsName"><i className="fas fa-lock"></i></span>
                 <Form.Control onKeyUp={this.checkPasswordValidation} className="password" type="password" required placeholder="Password" />
            </Form.Label>
                 {this.state.Passworderror === 'Strong password' ? <p className="valid__text">{this.state.Passworderror} </p> : <p className="invalid__text">{this.state.Passworderror}</p>}
        </Form.Group>

    <p>click your birthday <br /> --- {this.state.date.toDateString()} ---</p>
     {this.state.birthdayerror === 'Invalid birthday' ? <p className="invalid__text">{this.state.birthdayerror}</p> : <p></p>}
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />

        <Form.Group className="age__input" controlId="formGridAge" >
            <Form.Label><span className="labelsName ">Age</span>
               <Form.Control className="UserAge" required disabled label="disabled number" type="text" placeholder="Age shows automatically" />
            </Form.Label>
        </Form.Group>

        <Form.Group controlId="formGridPassword">
            <Form.Label><span className="labelsName">Hobby</span>
               <Form.Control onChange={this.checkHobbiesValidation} className="hobby" type="text" required placeholder="Hobby eg. sleeping, dancing, etc......." />
            </Form.Label>
            {this.state.Hobbieserror === 'valid' ? <p className="valid__text">{this.state.Hobbieserror} </p> : <p className="invalid__text">{this.state.Hobbieserror}</p>}
         </Form.Group>

        <Button onClick={this.ValidateData} variant="primary" className="button" type="submit">
            Submit
        </Button>
        </Form>

        <div className="show-table-btn">
        <button onClick={this.showTable}>Show or hide table</button>
        </div>
        <Table UserData={this.state.userData}/>
      </div>)

 }
}

