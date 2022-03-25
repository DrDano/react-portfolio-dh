import React from "react";

export default function Contact(props) {
  const { Form, Button } = props;
  return (
    <Form className="mx-5">
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Your email is safe with me, I'll never share it.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control type="text" placeholder="Type your message to me" />
      </Form.Group>
      <Button variant="" type="submit">
        Submit
      </Button>
    </Form>
  );
}
