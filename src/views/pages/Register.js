import React, { useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  NavLink,
  Container,
  Row, Col,
  Form, FormGroup
} from "reactstrap";

import BaseInput from "components/Common/BaseInput";

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profession, setProfession] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [email, setEmail] = useState('');

  return (
    <Container className="custom-form mb-3">
      <Row>
        <Col lg="6" md="6">
          <h1 className="text-center">REGISTER</h1>
          <p className="text-center">
            Already have an account?
            <NavLink to="/web/login" className="goto--login" tag={Link}>
              SIGN IN HERE
            </NavLink>
          </p>
          <Form role="form" id="register-form" action="#" method="post" autoComplete="off">
            <BaseInput
                id="name" label="Name" placehol="" type="text" value={name} req={true} onChange={(e) => {setName(e.target.value)}} />
            <BaseInput
                id="profession" label="Profession" placehol="" type="text" value={profession} req={true} onChange={(e) => {setProfession(e.target.value)}} />
            <BaseInput
                id="username" label="Username" placehol="" type="text" value={username} req={true} onChange={(e) => {setUsername(e.target.value)}} />
            <BaseInput
                id="password" label="Password" placehol="" type="password" value={password} req={true} onChange={(e) => {setPassword(e.target.value)}} />
            <BaseInput
                id="confirmpass" label="Retype Password" placehol="Retype Password" type="password" value={confirmPass} req={false} onChange={(e) => {setConfirmPass(e.target.value)}} />
            <BaseInput
                id="email" label="Email" placehol="" type="email" value={email} req={true} onChange={(e) => {setEmail(e.target.value)}} />

            <FormGroup>
              <Button className="btn-primary m-2" color="primary" type="submit" onClick={() => {}}>Submit</Button>
            </FormGroup>
          </Form>
        </Col>
        <Col lg="6" md="6">
            <Row>
              <Col lg="11">
                <img alt="" src={require("assets/img/theme/girls.jpg").default} className="box-shadow img-fluid rounded" />
              </Col>
            </Row>
            <Row className="mt-4 text-center">
              <Col lg="12">
                <NavLink tag={Link} className="upload-wrap">
                  <img alt="Upload" src={require("assets/img/theme/ico_camera.png").default} className="img-fluid" />
                </NavLink>
                <span className="pl-2">Upload your photo</span>
              </Col>
              <Col lg="12">
                <p className="or--txt">OR</p>
              </Col>
              <Col lg="12">
                <NavLink tag={Link} className="upload-wrap">
                  <img alt="Upload Video" src={require("assets/img/theme/ico_video.png").default} className="img-fluid" />
                </NavLink>
                <span className="pl-2">Upload your video</span>
              </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
