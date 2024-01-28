import React ,{useState} from 'react'
import { Container, Form, Row } from 'react-bootstrap'
import Button from '@mui/material/Button';
import Col from 'react-bootstrap/Col';
import SubFooter from '../../components/footer/SubFooter';
import SubNavigation from '../../components/navbar/SubNavigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/FirebaseConfig';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

function Login({ handleClose}) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      handleClose();
    };


  const login = async () => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('login complete');
    
    // Check if the user is an admin based on email and password
    if (email === 'admin@gmail.com' && password === 'admin1234') {
      // Redirect to the admin page
      navigate('/admin');
    } else {
      // Redirect to the checkout page for regular users
      navigate('/checkout');
    }

  })
  .catch((error) => {
    //const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    setOpen(true);
    window.location.reload();
  });
  }

  return (
    <div>
      <SubNavigation/>
      <Container fluid style={{backgroundImage:'url("https://img.freepik.com/premium-photo/pink-wipe-smoke-cloud-abstract-mystic-freeze-motion-diffusion-background_756527-6963.jpg")',backgroundSize:'cover',height:'85vh'}}>
        <Row className='justify-content-center'>
            <Col xs={10} md={5} xl={4} className='w-40 my-5 px-4 py-4' style={{backgroundColor:'rgba(256,256,,256,0.5)',height:'auto',borderRadius:'15px'}}>
              <div className='mx-auto my-4' style={{borderRadius:'50%',backgroundColor:'green',width:'100px',height:'100px'}}><PermIdentityIcon sx={{ fontSize: 90, color: 'white' }}/></div>
                <Form>
                    <Form.Group className="mb-3 justify-flex-start">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>    
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="contained" color="success" size="medium" onClick={login}>Login</Button>
                </Form>
                <h6 className='py-2'>Don't have an account <a href="/signup">SignUp</a></h6>
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
      message="Error occurred during login!"
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
      /> 
      <SubFooter style={{marginBottom:'0'}}/>
    </div>
  )
}

export default Login

