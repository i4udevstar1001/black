import React, { useState } from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Container,
  Row, Col,
  NavLink,
  Form, Input,
  FormGroup,
  InputGroup
} from "reactstrap";

const World = (props) => {
  const [search, setSearch] = useState('');

  const onSearch = () => {
    console.log('Search');
  }

  return (
    <>
      <Container>
        <Row>
          <Col md="6" className="mt-9 center">
            <img alt="Logo" src={require("assets/img/theme/logo.png").default} className="img-fluid" />
            <p>Connecting to Black Woman Worldwide</p>
            <Row className="pt-5">
              <Col>
                <div className="search--wrap">
                  <Form role="form">
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <Input
                          placeholder=""
                          type="text"
                          value={search}
                          autoComplete="new-user"
                          className="rounded-pill col-sm-12"
                          onChange={(e) => {setSearch(e.target.value)}}
                        />
                      </InputGroup>
                    </FormGroup>
                    <Button className="rounded-pill" color="pink" type="button" onClick={onSearch}>
                      Search
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md="6">
            <NavLink to="/web/index" tag={Link}>
              <img alt="" src={require("assets/img/theme/globes.png").default} className="img-fluid" />
            </NavLink>
            <Row>
              <Col md="6"></Col>
              <Col md="6">
                <img alt="" src={require("assets/img/theme/compas.png").default} className="img-fluid" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default World;
