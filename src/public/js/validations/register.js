window.addEventListener('load', function(){
    const form = document.querySelector('#register');
    const name = document.querySelector('#firstName');
    const lastName = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const avatar = document.querySelector('#avatar');
    
                
    
    
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
                const nameValue = name.value.trim();
                const lastNameValue = lastName.value.trim();
                const emailValue = email.value.trim();
                const passwordValue = password.value.trim();

            
                if(nameValue === '') {
                    setError(name, 'Name is required');
                }else if(nameValue.length < 2){
                    setError(name, "Name must be 2 characters minimun")
                }else {
                    setSuccess(name);
                }
    
    
                if(lastNameValue === '') {
                    setError(lastName, 'Last name is required');
                } else {
                    setSuccess(lastName);
                }
    
                if(emailValue === '') {
                    setError(email, 'Email is required');
                } else {
                    setSuccess(email);
                }

                if(passwordValue === '') {
                    setError(password, 'Password is required');
                }else if(passwordValue.length < 8){
                    setError(password, "Password must be 8 characters minimun")
                }else {
                    setSuccess(password);
                }
    
    
                let filePath = avatar.value;
                  
                // Allowing file type
                let allowedExtensions = 
                        /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    
                if(avatar.value.length == 0){
                    setError(avatar, 'Debe subir una imagen');
                }
                else if (!allowedExtensions.exec(filePath)) {
                    console.log("aca");
                    avatar.value = '';
                    setError(avatar, 'Ingresa un archivo valido');
                } else {
                    setSuccess(avatar)
                }
            };
    
    
    
            validateInputs();
        });
        
        });