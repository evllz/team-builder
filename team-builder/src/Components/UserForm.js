import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function UserForm(props) {
  const container = {
    width: "80%",
    padding: "0 0 0 2em",
  };
  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
    user_role: "",
  });
  const handdleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.addNewUser(user);
    setUser({ user_name: "", user_email: "", user_role: "" });
  };
  return (
    <div style={container}>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="user_name">User Name </Label>
          <Input
            type="text"
            id="user_name"
            name="user_name"
            value={user.user_name}
            placeholder="Enter full name"
            onChange={handdleChange}
          />
        </FormGroup>
        <FormGroup row>
          <Label for="user_email">Email </Label>
          <Input
            type="text"
            id="user_email"
            name="user_email"
            value={user.user_email}
            placeholder="Enter email"
            onChange={handdleChange}
          />
        </FormGroup>
        <FormGroup row>
          <Label for="user_role">Rol </Label>
          <Input
            type="text"
            id="user_email"
            name="user_role"
            value={user.user_role}
            placeholder="Enter user role"
            onChange={handdleChange}
          />
        </FormGroup>
        <FormGroup>
          <Button color="secondary" type="submit">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
}
