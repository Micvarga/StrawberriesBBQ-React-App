import { Button, Label, Col, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateNewsLetterForm } from '../../utils/validateNewsLetterForm';

const NewsLetterSignUpForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    };
    return (
        <Formik
            initialValues={{
                email: '',
                firstName: '',
                lastName: ''
            }}
            onSubmit={handleSubmit}
            validate={validateNewsLetterForm}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field
                            name='email'
                            placeholder='Email'
                            type='email'
                            className='form-control'
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        First Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name='firstName'
                            placeholder='First Name'
                            className='form-control'
                        />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Last Name
                    </Label>
                    <Col md='10'>
                        <Field
                            name='lastName'
                            placeholder='Last Name'
                            className='form-control'
                        />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={{ size: '10', offset: '2' }}>
                        <Button type='submit' color='primary' >
                            Subscribe
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
};


export default NewsLetterSignUpForm;