window.addEventListener('load', function(){
    let form = document.querySelector('#register');
    let erName = document.querySelector('#erName');
    let erFirstName = document.querySelector('#erFirstName');
    let erLastName = document.querySelector('#erLastName');
    let erMail = document.querySelector('#erMail');
    let erPassword = document.querySelector('#erPassword');
    let erImagen = document.querySelector('#erImagen');
    let name = document.querySelector('#firstName');
    let lastName = document.querySelector('#lastName');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let avatar = document.querySelector('#avatar');

    let errores = [];
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
        else if(name.value.length < 2){
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

    lastName.addEventListener('blur', function(e){
        if(lastName.value == ""){
            erroresLastName.push('El campo "Apellido" no puede estar vacio');
        }
        else if(lastName.value.length < 2){
        erroresLastName.push("El apellido que ingresaste es corto");
        }


        if (erroresLastName.length > 0) {
            console.log("hubo prevent");
            e.preventDefault();
            erLastName.innerHTML = '';
            for (let i = 0; i < erroresLastName.length; i++) {
                erLastName.innerHTML += `<li >  ${erroresLastName[i]} </li>`;
            }}

        if(lastName.value.length > 2){
            for (let i = 0; i < erroresLastName.length; i++) {
                erLastName.style.display = "none"
        }}else{
            erLastName.style.display = "initial"
        }
    })

    email.addEventListener('blur', function(e){
      if(email.value == ""){
            erroresMail.push('El campo "Email" no puede estar vacio');
        }

        // if(!email.value.includes('@')){
        //     erroresMail.push("Debe ingresar un formato de mail correcto");
        // }

      if (erroresMail.length > 0) {
        console.log("hubo prevent");
        e.preventDefault();
        erMail.innerHTML = '';
        for (let i = 0; i < erroresMail.length; i++) {
            erMail.innerHTML += `<li >  ${erroresMail[i]} </li>`;
        }}
        
        if(email.value.length > 2){
            for (let i = 0; i < erroresMail.length; i++) {
                erMail.style.display = "none"
        }}else{
            erMail.style.display = "initial"
        }

        //No sabemos como comprobar desde el front end que no se este registrando un email que ya aparezca en la base de datos. Tampoco usar una validacion que compruebe si es un mail de tipo valido.

    })

    password.addEventListener('blur', function(e){
        if(password.value == ""){
            erroresPassword.push('El campo "Password" no puede estar vacio');
        }else if(password.value.length < 8 ){
            erroresPassword.push("Tu contraseña deberá tener al menos 8 caracteres");
        }

        if (erroresPassword.length > 0) {
            e.preventDefault();
            erPassword.innerHTML = '';
            for (let i = 0; i < erroresPassword.length; i++) {
                erPassword.innerHTML += `<li >  ${erroresPassword[i]} </li>`;
        }}

        if(password.value.length > 8){
            for (let i = 0; i < erroresPassword.length; i++) {
                erPassword.style.display = "none"
        }
        }else{
            erPassword.style.display = "initial"
        }

      })
    

    //Descomentar para que funcione haciendo el submit!


    
    // form.addEventListener('submit', (e) => {

    //     if(name.value == ""){
    //         errores.push('El campo "Nombre" no puede estar vacio');
    //     }

    //     if(lastName.value == ""){
    //         errores.push('El campo "Apellido" no puede estar vacio');
    //     }

    //     if(password.value == ""){
    //         errores.push('El campo "Password" no puede estar vacio');
    //     }
        
    //     if(avatar.value.length == 0){
    //         errores.push("Debe subir imagen");
    //     }

    //     //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario

    //     if (errores.length > 0) {
    //         console.log("hubo prevent");
    //         e.preventDefault();
    //         erName.innerHTML = '';
    //         for (let i = 0; i < errores.length; i++) {
    //             erName.innerHTML += `<li >  ${errores[i]} </li>`;
    //         };
    //     } else {
    //         form.submit();
    //     }

    //     input.addEventListener('blur', function(e){
    //         erName.style.display = "none"
    //     })


    // })




    
    });