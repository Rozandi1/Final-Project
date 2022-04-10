import { useState } from 'react';
import {
  Button,
  CloseButton,
  Col,
  FloatingLabel,
  Form,
  Image,
  Modal,
  Row,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import { ImFacebook } from 'react-icons/im';
import {
  createUserWithEmail,
  loginWithEmail,
  loginWithFacebook,
  loginWithGoogle,
} from '../../redux/auth/action';

const AuthModal = ({ show, setShow, register, handleChange }) => {
  const handleClose = () => setShow(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState({ firstName: '', lastName: '' });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (register) {
      dispatch(
        createUserWithEmail({
          email,
          password,
          fullName: `${userName.firstName} ${userName.lastName}`,
        })
      )
        .then(() => {
          setEmail('');
          setPassword('');
          setUserName({ firstName: '', lastName: '' });
          handleClose();
        })
        .catch((error) => console.log(error));
    } else {
      dispatch(loginWithEmail({ email, password })).then(() => handleClose());
    }
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
        size='xl'
        centered>
        <Modal.Body>
          <CloseButton
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
            }}
            onClick={() => setShow(false)}
          />
          <Row className='py-5'>
            <Col
              xs='6'
              className='d-flex align-items-center justify-content-center'>
              <Image
                src='../../assets/image/undraw_secure_login_pdn4.png'
                className='w-100'
              />
            </Col>
            <Col>
              <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                <div className='align-self-start ms-5 mb-4'>
                  <span>Sudah punya akun?</span>{' '}
                  <button
                    onClick={handleChange}
                    className='btn text-primary m-0 p-0'
                    style={{ boxShadow: 'none' }}>
                    {register ? 'Buat akun baru' : 'Login'}
                  </button>
                </div>
                <Form
                  onSubmit={(e) => handleSubmit(e)}
                  style={{ width: '400px' }}>
                  <>
                    {register && (
                      <Row>
                        <Col>
                          <FloatingLabel
                            controlId='floatingFirstName'
                            label='First Name'
                            className='mb-4'>
                            <Form.Control
                              type='text'
                              placeholder='Jhon'
                              value={userName.firstName}
                              onChange={(e) =>
                                setUserName({
                                  ...userName,
                                  firstName: e.target.value,
                                })
                              }
                            />
                          </FloatingLabel>
                        </Col>
                        <Col>
                          <FloatingLabel
                            controlId='floatingLastName'
                            label='Last Name'
                            className='mb-4'>
                            <Form.Control
                              type='text'
                              placeholder='Doe'
                              value={userName.lastName}
                              onChange={(e) =>
                                setUserName({
                                  ...userName,
                                  lastName: e.target.value,
                                })
                              }
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                    )}
                    <FloatingLabel
                      controlId='floatingInput'
                      label='Email address'
                      className='mb-4'>
                      <Form.Control
                        type='email'
                        placeholder='name@example.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId='floatingPassword'
                      label='Password'
                      className='mb-4'>
                      <Form.Control
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FloatingLabel>
                  </>
                  <Button
                    style={{ width: '400px' }}
                    className='w-100'
                    variant='outline-primary'
                    type='submit'>
                    {register ? 'Create New Account' : 'Login'}
                  </Button>
                </Form>

                <div className='divider w-75 my-4'>
                  <Row>
                    <Col xs='5'>
                      <hr />
                    </Col>
                    <Col className='text-center'>or</Col>
                    <Col xs='5'>
                      <hr />
                    </Col>
                  </Row>
                </div>

                <Button
                  style={{ width: '400px' }}
                  variant='light'
                  className='text-dark mb-3'
                  onClick={handleLoginGoogle}>
                  <FcGoogle className='me-3 mb-1' />
                  Login with Google
                </Button>
                <Button
                  style={{ width: '400px' }}
                  className='mb-3'
                  variant='light'
                  onClick={handleLoginFacebook}>
                  <ImFacebook className='me-3 mb-1 text-primary' />
                  Login with Facebook
                </Button>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthModal;
