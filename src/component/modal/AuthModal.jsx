import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook } from "react-icons/im";
import {
  loginWithEmail,
  loginWithFacebook,
  loginWithGoogle,
} from "../../redux/auth/action";

const AuthModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLoginEmail = () => {
    dispatch(loginWithEmail({ email, password })).then(() => handleClose());
  };

  const handleLoginGoogle = () => {
    dispatch(loginWithGoogle()).then(() => handleClose());
  };

  const handleLoginFacebook = () => {
    dispatch(loginWithFacebook()).then(() => handleClose());
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        centered>
        <Modal.Header closeButton>
          <Modal.Title className='ms-5'>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
            <Form
              onSubmit={(e) => handleLoginEmail(e)}
              style={{ width: "400px" }}>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  className='w-100'
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-4' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className='w-100'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button
                style={{ width: "400px" }}
                className='w-100 mb-3'
                variant='outline-primary'
                type='submit'>
                Login
              </Button>
            </Form>
            <Button
              style={{ width: "400px" }}
              variant='light'
              className='text-dark mb-3'
              onClick={handleLoginGoogle}>
              <FcGoogle className='me-3 mb-1' />
              Login with Google
            </Button>
            <Button
              style={{ width: "400px" }}
              className='mb-3'
              variant='light'
              onClick={handleLoginFacebook}>
              <ImFacebook className='me-3 mb-1 text-primary' />
              Login with Facebook
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthModal;
