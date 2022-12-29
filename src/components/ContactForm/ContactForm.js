import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useRef } from 'react';
import { validateContactForm } from '../../utils/validateContactForm';
import emailjs from '@emailjs/browser';


const ContactForm = () => {

    const sendEmail = (object) => {
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, object, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
    };

    const handleSubmit = (values, { resetForm }) => {
        sendEmail(values);
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };
    return (
        <Formik
            initialValues={{
                client_name: '',
                client_phone: '',
                client_email: '',
                message: ''
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='client_name' md='2'>
                        Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name='client_name'
                            placeholder='Your Name'
                            className='form-control'
                        />
                        <ErrorMessage name='client_name'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='client_phone' md='2'>
                        Phone
                    </Label>
                    <Col md='10'>
                        <Field
                            name='client_phone'
                            placeholder='Your phone number'
                            className='form-control'
                        />
                        <ErrorMessage name='client_phone'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field
                            name='client_email'
                            placeholder='Your email'
                            type='email'
                            className='form-control'
                        />
                        <ErrorMessage name='client_email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='message' md='2'>
                        Event details
                    </Label>
                    <Col md='10'>
                        <Field
                            name='message'
                            placeholder='Enter all event details here.'
                            as='textarea'
                            rows='12'
                            className='form-control'
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: '10', offset: '2' }}>
                        <Button type='submit' color='primary' >
                            Send Request
                        </Button>
                    </Col>
                </FormGroup>
            </Form>

        </Formik>
    )
};

export default ContactForm;