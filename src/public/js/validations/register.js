window.addEventListener('load', function(){
    let form = document.querySelector('#register');
    let button = document.querySelector('#btn-submit');
    let erName = document.querySelector('#erName');
    let name = document.querySelector('#firstName');
    let lastName = document.querySelector('#lastName');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let avatar = document.querySelector('#avatar');
    let input = document.querySelector('input');

    let acceptedExtensions = ['jpeg', 'jpg', 'gif', 'png', 'JPEG', 'JPG', 'GIF', 'PNG'];

    let parts = avatar.value.split('.');
    let extension = parts[parts.length-1];
    
    
    
    form.addEventListener('submit', (e) => {
        let errores = [];

        
        if(name.value == ""){
        errores.push('El campo "Nombre" no puede estar vacio');
        }
        else if(name.value.length < 2){
        errores.push("El nombre que ingresaste es corto");
        }
    
        if(lastName.value == ""){
            errores.push('El campo "Apellido" no puede estar vacio');
        }
        else if(lastName.value.length < 2){
        errores.push("El apellido que ingresaste es corto");
        }

        if(email.value == ""){
            errores.push('El campo "Email" no puede estar vacio');
        }

        //No sabemos como comprobar desde el front end que no se este registrando un email que ya aparezca en la base de datos. Tampoco usar una validacion que compruebe si es un mail de tipo valido.

        if(password.value == ""){
            errores.push('El campo "Password" no puede estar vacio');
        }else if(password.value.length < 8 ){
            errores.push("Tu contraseña deberá tener al menos 8 caracteres");
        }

        if(avatar.value.length == 0){
            errores.push("Debe subir imagen");
        }else if (!acceptedExtensions.includes(extension)){
        errores.push ('Las extensiones de archivo permitidas son ' + acceptedExtensions.join(', '));
        }

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