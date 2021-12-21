window.addEventListener('load', function(){
    const form = document.querySelector('#login');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    form.addEventListener('submit', e => {

        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
        
            e.preventDefault();
            errorDisplay.innerText = message;
            inputControl.classList.add('error');
            inputControl.classList.remove('success')
        }

        const setSuccess = element => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
        
            errorDisplay.innerText = '';
            inputControl.classList.add('success');
            inputControl.classList.remove('error');
        };


        const validateInputs = () => {

            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();

            if( emailValue === '') {
                setError(email, 'Email is required');
            } else {
                setSuccess(email);
            }
            if( passwordValue === '') {
                setError(password, 'Password is required');
            } else {
                setSuccess(password);
            }
        };

        validateInputs();
        
    })
    

})