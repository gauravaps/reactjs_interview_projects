import React, { useState } from 'react'

const App = () => {

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
let pass_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;


const [formdata ,setformdata] =useState({
  name:'',
  email:'',
  password:'',
})

const [formerror ,setformerror] = useState({
  name:'',
  email:'',
  password:''
})


const handleChange = (e) => {
  const { name, value } = e.target;
  setformdata({ ...formdata, [name]: value });

  // ✅ Live validation
    if(name === 'name'){
    if (!value || value.trim().length <= 2) {
      setformerror((prev) => ({ ...prev, name: "Name must be more than 2 characters" }));
    } else {
      setformerror((prev) => ({ ...prev, name: "" }));
    }
  }

// for email

if(name === 'email'){
  if(!value || !EMAIL_REGEX.test(value)){
    setformerror((prev) =>({
      ...prev ,email:'Please enter a valid email address.'
    }))
  } else{
    setformerror((prev) =>({
      ...prev ,email: "",
    }))
  }
}

//for password 
if(name === 'password'){
  if(!value || !pass_regex.test(value)){
    setformerror((prev) =>({
      ...prev ,password:'please enter valid password.'
    }))

  }else{
    setformerror((prev) =>({
      ...prev ,password:''
    }))
  }
}

};




 const handleSubmit =(e) => {
  e.preventDefault();
  // Check if any error exists
  const hasErrors = Object.values(formerror).some((error) => error !== '');
  const hasEmptyFields = Object.values(formdata).some((value) => value.trim() === '');

  if (hasErrors || hasEmptyFields) {
    alert("Please fix errors before submitting.");
    return;
  }

  // ✅ If no error and no empty field, submit the form
  console.log("Form Submitted", formdata);
  
}




  return (
    <div >
      <form action=""  style={{
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '100px auto',
    gap: '25px',
    padding: '20px',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    
  }}>
          
        <input type="text" name='name' value={formdata.name} onChange={handleChange} required placeholder='Enter your name'/>
      {formerror.name && (<p style={{color:'red'}} >{formerror.name}</p>)}
       
        <input type="email" name='email' value={formdata.email} onChange={handleChange} required placeholder='Enter your email'/>
      {formerror.email && (<p style={{color:'red'}} >{formerror.email}</p>)}

        
    <input type="password" name='password' value={formdata.password} onChange={handleChange} required placeholder='Enter your password'/>
          {formerror.password && (<p style={{color:'red'}} >{formerror.password}</p>)}

        <button onClick={handleSubmit} style={{cursor:'pointer'}} type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App