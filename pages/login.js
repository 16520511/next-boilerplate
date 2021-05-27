import { useEffect, useState } from "react";
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useRouter } from 'next/router';
import * as AccountAct from '../redux/actions/account.action';
import withAuthServerside from "../client/hoc/withAuthServerside";
import Layout from "../client/components/MainLayout";

function Login(props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [state, setState] = useState({
    username: '',
    password: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const { authInfo } = props;
    if (authInfo)
      return location.href = '/';
    setIsReady(true);
  }, [])

  const onChange = (event) => {
    setState(
      prevState => ({
      ...prevState, [event.target.name]: event.target.value
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      AccountAct.accountLogin(
        state, 
        (res) => {
          if (res.code === 1) return location.href = '/';
          if (res.errors && res.errors.length) {
            setErrorMsg(res.errors[0].msg)
          }
          else
            Swal.fire(res.message);
        }
      )
    )
  }

  return (
    <Container> { isReady &&
      <Form method="post" onSubmit={onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={state.username} name="username" onChange={onChange} type="text" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={state.password} name="password" onChange={onChange} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <p id="errorMsg" className="text-danger">{ errorMsg }</p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> }
    </Container>
  )
}

export const getServerSideProps = withAuthServerside;
export default Login;