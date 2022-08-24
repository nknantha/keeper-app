import { useEffect, useRef, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function Input(props) {

    const [formValues, setFormValues] = useState({ title: '', content: '' });

    const inputTitleElement = useRef();
    const inputContentElement = useRef();

    function adjustHeight(element) {
        element.style.height = 'auto';
        if (element.scrollHeight > 10) {
            element.style.height = (element.scrollHeight + 1) + 'px';
        }
    }

    useEffect(() => {
        adjustHeight(inputTitleElement.current);
        adjustHeight(inputContentElement.current);
    }, [formValues]);

    function handleChange(event) {

        // To prevent newline in scenarios like copy and paste.
        if (event.target.name === 'title') {
            event.target.value = event.target.value.replaceAll('\n', ' ');
        }

        setFormValues(prevValue => {
            return { ...prevValue, [event.target.name]: event.target.value };
        });

        event.preventDefault();
    }

    function handleKeyDown(event) {

        // Preventing newline on typing. 
        if (event.key === 'Enter') {
            const formElements = [...event.target.form];
            formElements[formElements.indexOf(event.target) + 1].focus();
            event.preventDefault();
        }
    }

    function handleSubmit(event) {
        let submitted = false;

        if (formValues.content) {
            props.addNote({
                title: formValues.title.trim(),
                content: formValues.content.trim()
            });
            setFormValues({ title: '', content: '' });
            submitted = true;
        }


        if (submitted || !formValues.title) {
            inputTitleElement.current.focus();
        } else {
            inputContentElement.current.focus();
        }

        event.preventDefault();
    }

    return (
        <div className='input'>
            <div className='note'>

                <form onSubmit={handleSubmit}>
                    <textarea
                        ref={inputTitleElement}
                        onKeyDown={handleKeyDown}
                        onChange={handleChange}
                        rows='1'
                        className='textarea h2-f'
                        name='title'
                        placeholder='Title'
                        autoFocus
                        value={formValues.title} />
                    <div className='line'></div>
                    <textarea
                        ref={inputContentElement}
                        onChange={handleChange}
                        className='p-f textarea'
                        rows='1'
                        name='content'
                        placeholder='Take a note...'
                        value={formValues.content} />
                    <div className='line'></div>
                    <button type={'submit'} className='input-button'>
                        <AddIcon fontSize='large' sx={{ verticalAlign: 'middle' }} />
                    </button>
                </form>

            </div>
        </div>
    );
}

export default Input;