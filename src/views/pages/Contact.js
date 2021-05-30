import React, { useState } from "react";

// reactstrap components
import {
  Container,
  Row, Col, Button,
  FormGroup,
  Form,
} from "reactstrap";

import BaseInput from "components/Common/BaseInput";

const Contact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <>
      <Container className="custom-form mb-4">
        <h1>Contact</h1>
        <p>If you have business inquiries or other questions, please fill out the following form to contact us. Thank you.</p>
        <Row>
          <Col lg="5" md="12">
            <Form role="form" id="contact-form" action="#" method="post" autoComplete="off">
              <BaseInput
                  id="name" label="Name" placehol="" type="text" value={name} req={true} onChange={(e) => {setName(e.target.value)}} />
              <BaseInput
                  id="email" label="Email" placehol="" type="email" value={email} req={true} onChange={(e) => {setEmail(e.target.value)}} />
              <BaseInput
                  id="subject" label="Subject" placehol="" type="text" value={subject} req={true} onChange={(e) => {setSubject(e.target.value)}} />
              <BaseInput
                  id="message" label="Body" placehol="" type="textarea" value={message} req={true} rows={5} onChange={(e) => {setMessage(e.target.value)}} />


              <FormGroup>
                <Button className="btn-primary m-2" color="primary" type="submit" onClick={() => {}}>Submit</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
