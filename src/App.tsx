import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState<any>({
    firstName:"",
    lastName: "",
    email: "",
    password: ""
  });
  // const [lastName, setlastName] = useState();
  // const [email, setemail] = useState();
  // const [password, setFpassword] = useState();
  
  const handleChange = (e:any) => {
    const newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(data);
  }
  const handleSubmitjwt = (e:any) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/team", {
      method: 'GET',
      mode: 'cors',
      headers: {
              'Content-Type' : 'application/json',
              'Authorization' : 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBZG1pbkBNZWluZU9yZ2FuLmRlIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6InN0dWRlbnQ6d3JpdGUifSx7ImF1dGhvcml0eSI6InN0dWRlbnQ6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiY291cnNlOnJlYWQifSx7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6ImNvdXJzZTp3cml0ZSJ9XSwiaWF0IjoxNjIyNTY1ODMyLCJleHAiOjE2MjMzNjI0MDB9.bNgpWQAwsFn0k3M9G49jWCDy_dPxL-_xlJZzdWYTizmMCYu_Xz_wmApoNjLtwk3m5WE7LEpr0JKNb5cxNe6-jA'
          }
  });
  }
  const handleSubmit2 = (e:any) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/team", {
      method: 'POST',
      body: JSON.stringify({
          title: data.title,
          description: data.description
          }), 
      mode: 'cors',
      headers: {
              'Content-Type' : 'application/json',
              // 'authorization' : 'Bearer ' + localStorage.getItem('token')
          }
  });
  }
  
  return (
    <div>
    <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit2} method="post">
    <p>
      <label>Username</label>
      <input onChange={handleChange} value={data.title} type="text" id="title" name="title" placeholder="title" required />
    </p>
    <p>
      <label>description</label>
      <input onChange={handleChange} value={data.description} type="description" id="description" name="description" placeholder="description" required />
    </p>
    <button type="submit">Login</button>
    </form>
    </div>
        {/* <div>
        <h1>Reg</h1>
        <form onSubmit={handleSubmit} method="post">
        <p>
          <label>First Name</label>
          <input onChange={handleChange} value={data.firstName} type="text" id="firstName" name="firstName" placeholder="first name" required />
        </p>
        <p>
          <label>Last Name</label>
          <input onChange={handleChange} value={data.lastName} type="text" id="lastName" name="lastName" placeholder="last name" required />
        </p>
        <p>
          <label>E-Mail</label>
          <input onChange={handleChange} value={data.email} type="text" id="email" name="email" placeholder="E-Mail" required />
        </p>
        <p>
          <label>Password</label>
          <input onChange={handleChange} value={data.password} type="password" id="password" name="password" placeholder="Password" required />
        </p>
        <button type="submit">Register User</button>
        </form>
        </div> */}
        <button onClick={handleSubmitjwt}>test</button>
        </div>
  );
}

export default App;
