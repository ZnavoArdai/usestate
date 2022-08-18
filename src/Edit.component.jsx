
import { useState } from "react";

const Edit = ({firsname,lastname,ageof,emailof,passwordof}) => {
    let [fname, setFname] = useState(firsname);
    let [lname, setLname] = useState(lastname);
    let [age, setAge] = useState(ageof);
    let [email, setEmail] = useState(emailof);
    let [password, setPassword] = useState(passwordof);
  
    const changFname = (e) => {
      setFname(e.target.value);
    };
    const changLname = (e) => {
      setLname(e.target.value);
    };
    const changAge = (e) => {
      setAge(e.target.value);
    };
    const changEmail = (e) => {
      setEmail(e.target.value);
    };
    const changPassword = (e) => {
      setPassword(e.target.value);
    };

    const isEmpty=(e)=>{
e.preventDefault();

if((fname&&lname&&age&&email&&password)!==""){
 alert("sucsses")   
}
else
alert("somthing empthy")   

    }

    return (
      <>
        <h1>edit</h1>
        <form action="">
          <input onChange={changFname} type="text" />
          <input onChange={changLname} type="text" />
          <input onChange={changAge} type="text" />
          <input onChange={changEmail} type="text" />
          <input onChange={changPassword} type="text" />
          <button onClick={isEmpty}>print</button>
        </form>
        
        <p>{fname}</p>

      </>
    );
  };
  
  export default Edit; 