import { useForm, ValidationError } from '@formspree/react';

import '../Pages/Contact/Contact.css'
import '../App.css'

const ContactForm = (props) => {
    const [state, handleSubmit] = useForm('myyapynl');
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    const contactFormStyle = {
        display: props.displayContactForm,
        // position: 'absolute',
        // top: '12%',
        // width: '85vw',
        // height: '60vw',
        // justifyContent: 'center',
        // alignItems: 'center',
        // background: 'white',
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
                <div className='contactFormContainer' style={{...contactFormStyle, alignItems: 'center' } }>
                    <div style={closeButtonStyle} onClick={() => props.setDisplayContactForm('none')}>x</div>
                      <a href='tel:+07597932044' className='kalam-bold fa3'>
                        07597 932044
                      </a>
                </div>
            </>
        )
    }
    else {

        return (
            <>
                <div className='contactFormContainer' style={contactFormStyle}>
                    <div style={closeButtonStyle} onClick={() => props.setDisplayContactForm('none')}>x</div>
                        <form onSubmit={handleSubmit} className='col' id='contactForm' style={{width: '100%'}}>
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
                </div>

            </>
        );
    }
}

    export default ContactForm
