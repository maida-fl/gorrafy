window.addEventListener('load', function(){
    const form = document.querySelector('#productsValidation');
    const name = document.querySelector('#productName');
    const price = document.querySelector('#price');
    const description = document.querySelector('#productDescription');
    const avatar = document.querySelector('#productImage');

            


    form.addEventListener('submit', e => {
        e.preventDefault();
    
        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
        
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
            const productNameValue = name.value.trim();
            const priceValue = price.value.trim();
            const descriptionValue = description.value.trim();

            console.log(priceValue);
        
            if(productNameValue === '') {
                setError(name, 'Name is required');
            }else if(productNameValue.length < 5){
                setError(name, "Name must be 5 characters minimun")
            }else {
                setSuccess(name);
            }


            if(priceValue === '') {
                setError(price, 'Price is required');
            } else {
                setSuccess(price);
            }

            if(descriptionValue === '') {
                setError(description, 'Description is required');
            } else {
                setSuccess(description);
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