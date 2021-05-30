import React, { useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Row,
  Col,
  NavLink,
  Container
} from "reactstrap";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usererror, setUserError] = useState(false);
  const [passerror, setPassError] = useState(false);

  const onLogin = () => {
    if( username === '' )
      setUserError(true);
    else
      setUserError(false);

    if( password === '' )
      setPassError(true);
    else
      setPassError(false);
  }

  return (
    <>
      <Container className="black--login">
        <Row>
          <Col lg="7">
            <div className="center col-sm-10 mt-5 mb-5">
              <img alt="Logo" src={require("assets/img/theme/logo.png").default} className="img-fluid" />
            </div>
          </Col>
          <Col lg="5">
            <div className="col-auto center">
              <h3>MEMBERS LOGIN</h3>
              <div className="mb-3 mt-4">You will need be Invited to use this website</div>
              <Form role="form">
                <FormGroup className="mb-4">
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Username"
                      type="text"
                      value={username}
                      autoComplete="new-user"
                      className="rounded-pill col-sm-12"
                      onChange={(e) => {setUsername(e.target.value)}}
                    />
                    {usererror ? <p className="help-block help-block-error">Username cannot be blank.</p> : null}
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <Input
                      placeholder="Password"
                      type="password"
                      value={password}
                      autoComplete="new-password"
                      className="rounded-pill col-sm-12"
                      onChange={(e) => {setPassword(e.target.value)}}
                    />
                    {passerror ? <p className="help-block help-block-error">Password cannot be blank.</p> : null}
                  </InputGroup>
                </FormGroup>
                <Col xs="12" className="text-right pl-0 pr-0">
                  <NavLink to="/web/forgot" className="forgot--pass" tag={Link}>
                    Forgot password?
                  </NavLink>
                </Col>
                <div className="text-left">
                  <Button className="rounded-pill" color="pink" type="button" onClick={onLogin}>
                    Login
                  </Button>
                </div>
              </Form>
              <Col xs="12" className="text-right">
                <NavLink to="/web/register" tag={Link}>
                  <img alt="Logo" src={require("../../assets/img/theme/icon-small-globe.png").default} />
                </NavLink>
                <NavLink to="/web/browser" tag={Link}>
                  <img alt="Logo" src={require("../../assets/img/theme/icon-speaker.png").default} />
                  </NavLink>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
