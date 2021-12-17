window.addEventListener('load', function(){
    let form = document.querySelector('#productsValidation');
    let name = document.querySelector('#productName');
    let price = document.querySelector('#price');
    let description = document.querySelector('#productDescription');
    let avatar = document.querySelector('#productImage');
    let erName = document.querySelector('#erName');
    let erPrice = document.querySelector('#erPrice');
    let erDescription = document.querySelector('#erDescription');
    let erImage = document.querySelector('#erImage');

    let erroresName = [];
    let erroresPassword = [];
    let erroresLastName = [];
    let erroresMail = [];
    let erroresImagen = [];
    
    avatar.addEventListener('change', function(e){
        let filePath = avatar.value;
              
        // Allowing file type
        let allowedExtensions = 
                /(\.jpg|\.jpeg|\.png|\.gif)$/i;
                
            if (!allowedExtensions.exec(filePath)) {
                console.log("aca");
                avatar.value = '';
                erroresImagen.push("Ingresa un archivo valido")
            } 

            if (erroresImagen.length > 0) {
                console.log("hubo prevent");
                e.preventDefault();
                erImagen.innerHTML = '';
                for (let i = 0; i < erroresImagen.length; i++) {
                    erImagen.innerHTML += `<li >  ${erroresImagen[i]} </li>`;
                }}
    })
    
    name.addEventListener('blur', function(e){
        if(name.value == ""){
        erroresName.push('El campo "Nombre" no puede estar vacio');
        }
        else if(name.value.length < 5){
        erroresName.push("El nombre que ingresaste es corto");
        }

        if (erroresName.length > 0) {
            e.preventDefault();
            erFirstName.innerHTML = '';
            for (let i = 0; i < erroresName.length; i++) {
                erFirstName.innerHTML += `<li >  ${erroresName[i]} </li>`;
        }}

        if(name.value.length > 2){
            for (let i = 0; i < erroresName.length; i++) {
                erFirstName.style.display = "none"
        }
        }else{
            erFirstName.style.display = "initial"
        }
    })
    
    
    // form.addEventListener('submit', (e) => {
    //     let errores = [];

        
    //     if(name.value == ""){
    //     errores.push('El campo "Nombre" no puede estar vacio');
    //     }
    //     else if(name.value.length < 5){
    //     errores.push("El nombre que ingresaste es corto");
    //     }
    
    //     if(price.value == ""){
    //         errores.push('El campo "Precio" no puede estar vacio');
    //     }

    //     if(description.value == ""){
    //         errores.push('El campo "Descripcion" no puede estar vacio');
    //     }

    //     if(image.value.length == 0){
    //         errores.push("Debe subir imagen");
    //     }
    //     var filePath = image.value;
          
    //     // Allowing file type
    //     var allowedExtensions = 
    //             /(\.jpg|\.jpeg|\.png|\.gif)$/i;
          
    //     if (!allowedExtensions.exec(filePath)) {
    //         image.value = '';
    //         return false;
    //     } 
    //     else 
    //     {
    //        // Image preview
    //         if (image.files && image.files[0]) {
    //             var reader = new FileReader();
    //             reader.onload = function(e) {
    //                 document.getElementById(
    //                     'imagePreview').innerHTML = 
    //                     '<img src="' + e.target.result
    //                     + '"/>';
    //             };
                  
    //             reader.readAsDataURL(image.files[0]);
    //         }}

    //     //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario

    //     if (errores.length > 0) {
    //         console.log("hubo prevent");
    //         e.preventDefault();
    //         erName.innerHTML = '';
    //         for (let i = 0; i < errores.length; i++) {
    //             erName.innerHTML += `<li >  ${errores[i]} </li>`;
    //         };
    //     } else {
    //         alert('La validación fué exitosa')
    //         form.submit();
    //     }

    // })


    
    });