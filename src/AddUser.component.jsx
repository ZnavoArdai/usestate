import { useState } from "react";

const AddUser = () => {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordTwo, setPasswordTwo] = useState("");

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
  const changPasswordTwo = (e) => {
    setPasswordTwo(e.target.value);

    if(password!=e.target.value){
        document.getElementById("pCheck").innerHTML="not match"
    }
    else
    document.getElementById("pCheck").innerHTML="MATCH"

  };

  const printDetails = (e) => {
    e.preventDefault();
    document.getElementById(
      "tableDisplay"
    ).innerHTML += `<tr><td>${fname}</td><td>${lname}</td><td>${age}</td><td>${email}</td>
    <td>${password}</td><td>${passwordTwo}</td></tr>`;
  };

  return (
    <>
      <h1>hello</h1>
      <form action="">
        <input onChange={changFname} type="text" />
        <input onChange={changLname} type="text" />
        <input onChange={changAge} type="text" />
        <input onChange={changEmail} type="text" />
        <input onChange={changPassword} type="text" />
        <input onChange={changPasswordTwo} type="text" />
        <p id="pCheck"></p>
        <button onClick={printDetails}>print</button>
      </form>

      <div>
        <table>
          <thead>
            <th>first name</th>
            <th>last name</th>
            <th>age </th>
            <th>email</th>
            <th>password</th>
            <th>passwordTwo</th>
          </thead>
          <tbody id="tableDisplay"></tbody>
        </table>
      </div>
    </>
  );
};

export default AddUser;
