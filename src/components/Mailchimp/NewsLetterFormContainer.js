import MailchimpSubscribe from "react-mailchimp-subscribe";
import NewsLetterSignUpForm from "./NewsLetterSignUpForm";


const NewsLetterFormContainer = (props) => {

    const postUrl = `https://COM.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;



    return (
        <div>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <NewsLetterSignUpForm
                        status={status}
                        message={message}
                        onValidated={FormData => subscribe(FormData)}
                    />
                )}
            />
        </div>
    );
};

export default NewsLetterFormContainer;