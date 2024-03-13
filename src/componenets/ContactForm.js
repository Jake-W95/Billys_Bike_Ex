import { useForm, ValidationError } from '@formspree/react';

import '../Pages/Contact/Contact.css'

const ContactForm = (props) => {

    console.log(props, 'contactFormProps')

    const [state, handleSubmit] = useForm('myyapynl');
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    const contactFormStyle = {
        display: props.displayContactForm,
        // alignItems: 'center',
        position: 'absolute',
        // left: 0,
        top: '12%',
        width: '85vw',
        height: '60vw',
        // marginTop: '600',
        // padding: '1em',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
    }
    const closeButtonStyle = {
        position: 'absolute',
        top: '0',
        right: '0',
        background: 'red',
        width: '1.5em',
        height: '1.5em',
        color: 'white'
    }
    

    if (props.formType === 'phone') {
        return (
            <>
                <div className='contactFormContainer' style={contactFormStyle}>
                    <div style={closeButtonStyle} onClick={() => props.setDisplayContactForm('none')}>x</div>
                    <p className='.fa3'>
                        07597 932044
                    </p>
                </div>
            </>
        )
    }
    else {

        return (
            <>
                <div className='contactFormContainer' style={contactFormStyle}>
                    <div style={closeButtonStyle} onClick={() => props.setDisplayContactForm('none')}>x</div>
                    {/* <p id='contactText'>If you have any questions or would like to book an appointment with me, you can email me or call me </p> */}
                    <section id='formContainer' className='col'>
                        {/* <h1>Send me an email...</h1> */}
                        <form onSubmit={handleSubmit} className='col'>
                            <label htmlFor='email'>
                                Your Email
                            </label>
                            <input
                                id='email'
                                type='email'
                                name='email'
                            />
                            <ValidationError
                                prefix='Email'
                                field='email'
                                errors={state.errors}
                            />
                            <label htmlFor='message'>
                                Your Message
                            </label>
                            <textarea
                                id='message'
                                name='message'
                            />
                            <ValidationError
                                prefix='Message'
                                field='message'
                                errors={state.errors}
                            />
                            <button type='submit' disabled={state.submitting}>
                                Submit
                            </button>
                        </form>
                    </section>
                </div>

            </>
        );
    }
}

    export default ContactForm
