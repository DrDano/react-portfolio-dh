import React, { useState } from "react";

export default function Contact(props) {
  const { Form, Button } = props;

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form
      className="mx-5"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" required />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicEmail"
        validated={validated}
      >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
        <Form.Text className="text-muted">
          Your email is safe with me, I'll never share it.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type your message to me"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label
          required
          label="Form Error"
          feedback="You must provide a name, valid email, and a message before submitting."
          feedbackType="invalid"
          className="main-font-color"
        />
      </Form.Group>
      <Button variant="" type="submit">
        Submit
      </Button>
    </Form>
  );
}
