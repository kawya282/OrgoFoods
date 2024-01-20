import React ,{useState} from 'react'
import {Form, Toast} from 'react-bootstrap'
import Button from '@mui/material/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, orgoDB } from '../../firebase/FirebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 


function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);

      const users = {
        name: name,
        uid: user.uid,
        password: user.password
      }
      const usersRef = collection(orgoDB,"users")
      await addDoc(usersRef, users);
      setName("");
      setEmail("");
      setPassword("");
    }

    catch(error){
    //const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(error);
    }
  }

  return (
    <div>
      <Form>
      <Form.Group className="mb-3 justify-flex-start">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" onChange={(e) => setName(e.target.value)}/>
        </Form.Group> 
        <Form.Group className="mb-3 justify-flex-start">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>    
        <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="contained" color="success" size="medium" onClick={signup}>Sign Up</Button>
      </Form>
    </div>
  )
}

export default SignUp
