import React ,{useState} from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import Button from '@mui/material/Button';
import Col from 'react-bootstrap/Col';
import SubFooter from '../../components/footer/SubFooter';
import SubNavigation from '../../components/navbar/SubNavigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, orgoDB } from '../../firebase/FirebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  const signup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);

      const users = {
        name: name,
        uid: user.uid,
        email: user.email
      }
      const usersRef = collection(orgoDB,"users")
      await addDoc(usersRef, users);
      setName("");
      setEmail("");
      setPassword("");
      navigate('/login');
    }

    catch(error){
    //const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(error);
      setOpen(true);
    }
  }

  return (
    <div>
      <SubNavigation/>
      <Container fluid style={{backgroundImage:'url("https://img.freepik.com/premium-photo/pink-wipe-smoke-cloud-abstract-mystic-freeze-motion-diffusion-background_756527-6963.jpg")',backgroundSize:'cover',height:'85vh'}}>
        <Row className='justify-content-center'>
            <Col xs={10} md={5} xl={4} className='w-40 my-3 px-4 py-1' style={{backgroundColor:'rgba(256,256,,256,0.5)',height:'auto',borderRadius:'15px'}}>
              <div className='mx-auto my-4' style={{borderRadius:'50%',backgroundColor:'green',width:'100px',height:'100px'}}><PermIdentityIcon sx={{ fontSize: 90, color: 'white' }}/></div>
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
                <h6 className='py-2'>Already have an account <a href="/login">Login</a></h6>
            </Col>   
        </Row> 
      </Container>
      <Snackbar
      anchorOrigin={{
        vertical:'bottom',
        horizontal:'left'
      }}
      open={open}
      autoHideDuration={8000}
      onClose={handleCloseSnackbar}
      message="Error occurred during signup!"
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
      /> 
      <SubFooter/>
    </div>
  )
}

export default SignUp
