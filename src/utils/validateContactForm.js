export const validateContactForm = (values) => {
    const errors = {};

    if (!values.client_name) {
        errors.client_name = 'Required';
    } else if (values.client_name.length < 2) {
        errors.client_name = 'Must be at least 2 characters.';
    } else if (values.client_name.length > 15) {
        errors.client_name = 'Must be 15 characters or less';
    }

    const reg = /^\d+$/;
    if (!reg.test(values.client_phone)) {
        errors.client_phone = 'The phone number should contain only numbers';
    }

    if (!values.client_email.includes('@')) {
        errors.client_email = 'Email should contain a @';
    }

    return errors;
};