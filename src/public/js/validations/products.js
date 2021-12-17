window.addEventListener('load', function(){
    let form = document.querySelector('#productsValidation');
    let name = document.querySelector('#productName');
    let price = document.querySelector('#price');
    let description = document.querySelector('#productDescription');
    let image = document.querySelector('#productImage');
    
    
    
    
    form.addEventListener('submit', (e) => {
        let errores = [];

        
        if(name.value == ""){
        errores.push('El campo "Nombre" no puede estar vacio');
        }
        else if(name.value.length < 5){
        errores.push("El nombre que ingresaste es corto");
        }
    
        if(price.value == ""){
            errores.push('El campo "Precio" no puede estar vacio');
        }

        if(description.value == ""){
            errores.push('El campo "Descripcion" no puede estar vacio');
        }

        if(image.value.length == 0){
            errores.push("Debe subir imagen");
        }
        var filePath = image.value;
          
        // Allowing file type
        var allowedExtensions = 
                /(\.jpg|\.jpeg|\.png|\.gif)$/i;
          
        if (!allowedExtensions.exec(filePath)) {
            image.value = '';
            return false;
        } 
        else 
        {
           // Image preview
            if (image.files && image.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById(
                        'imagePreview').innerHTML = 
                        '<img src="' + e.target.result
                        + '"/>';
                };
                  
                reader.readAsDataURL(image.files[0]);
            }}

        //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario

        if (errores.length > 0) {
            console.log("hubo prevent");
            e.preventDefault();
            erName.innerHTML = '';
            for (let i = 0; i < errores.length; i++) {
                erName.innerHTML += `<li >  ${errores[i]} </li>`;
            };
        } else {
            alert('La validación fué exitosa')
            form.submit();
        }

    })


    
    });