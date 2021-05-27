import { useRouter } from "next/router";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as AccountAct from '../../redux/actions/account.action'
import Link from 'next/link'

export default function Layout({ children }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickLogout = () => {
    dispatch(
      AccountAct.accountLogout(() => router.push('/login'))
    )
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Insight App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/test">Admin Auth</Link>
          </Nav>
          <Button onClick={onClickLogout}>Logout</Button>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        {children}
      </Container>
    </>
  )
}