import { Button, Label, Col, FormGroup, Input, Form } from 'reactstrap';
import { useEffect, useState } from 'react';
import "./NewsLetterSignUpForm.css";

const initialValues = {
    firstName: "",
    lastName: "",
    email: ""
}

const NewsLetterSignUpForm = ({ status, message, onValidated }) => {

    const [formValues, updateFormValues] = useState(initialValues);
    const { firstName, lastName, email } = formValues;

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status]);

    const clearFields = () => {
        updateFormValues(initialValues);
    };


    const handleChange = (e) => {
        updateFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        email &&
            firstName &&
            lastName &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
                MERGE1: firstName,
                MERGE2: lastName,
            });
    };
    return (

        <Form onSubmit={(e) => handleSubmit(e)}>

            {status === "sending" && (
                <div className="mc__alert mc__alert--sending">
                    sending...
                </div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            <FormGroup row>
                <Label for='email' md='2'>
                    Email
                </Label>
                <Col md='10'>
                    <Input
                        id='email'
                        name='email'
                        placeholder='Your Email Address'
                        type='email'
                        value={email}
                        onChange={handleChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for='firstName' md='2'>
                    First Name
                </Label>
                <Col md='10'>
                    <Input
                        id='firstName'
                        name='firstName'
                        placeholder='John'
                        type='text'
                        value={firstName}
                        onChange={handleChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for='lastName' md='2'>
                    Last Name
                </Label>
                <Col md='10'>
                    <Input
                        id='lastName'
                        name='lastName'
                        placeholder='Doe'
                        type='text'
                        value={lastName}
                        onChange={handleChange}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col md={{ size: '10', offset: '2' }}>
                    <div>
                        <Button type='submit' color='primary' >
                            Subscribe
                        </Button>
                    </div>
                </Col>
            </FormGroup>
        </Form>
    )
};


export default NewsLetterSignUpForm;