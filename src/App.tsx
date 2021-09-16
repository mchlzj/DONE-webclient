import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Prototype from './Prototype';

function App() {

  // const [data, setData] = useState<any>({
  //   firstName:"",
  //   lastName: "",
  //   email: "",
  //   password: ""
  // });
  // // const [lastName, setlastName] = useState();
  // // const [email, setemail] = useState();
  // // const [password, setFpassword] = useState();
  
  // const handleChange = (e:any) => {
  //   const newData = {...data};
  //   newData[e.target.id] = e.target.value;
  //   setData(newData);
  //   console.log(data);
  // }
  // const handleSubmitjwt = (e:any) => {
  //   e.preventDefault();
  //   fetch("http://localhost:8080/api/v1/team", {
  //     method: 'GET',
  //     mode: 'cors',
  //     headers: {
  //             'Content-Type' : 'application/json',
  //             'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbkBNZWluZU9yZ2FuLmRlIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN0dWRlbnQ6d3JpdGUifSx7ImF1dGhvcml0eSI6InN0dWRlbnQ6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiY291cnNlOnJlYWQifSx7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6ImNvdXJzZTp3cml0ZSJ9XSwiaWF0IjoxNjIyNTY1ODMyLCJleHAiOjE2MjMzNjI0MDB9.bNgpWQAwsFn0k3M9G49jWCDy_dPxL-_xlJZzdWYTizmMCYu_Xz_wmApoNjLtwk3m5WE7LEpr0JKNb5cxNe6-jA'
  //         }
  // });
  // }
  // const handleSubmit2 = (e:any) => {
  //   e.preventDefault();
  //   fetch("http://localhost:8080/api/v1/team", {
  //     method: 'POST',
  //     body: JSON.stringify({
  //         title: data.title,
  //         description: data.description
  //         }), 
  //     mode: 'cors',
  //     headers: {
  //             'Content-Type' : 'application/json',
  //             // 'authorization' : 'Bearer ' + localStorage.getItem('token')
  //         }
  // });
  // }
  
  return (
    <div>
      <Prototype/>
      
    </div>
  );
}

export default App;
