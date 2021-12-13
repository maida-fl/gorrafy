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
    
    
    
    form.addEventListener('submit', (e) => {
        let errores = [];

        if(name.value.length < 2){
        name.style.color = "#9e2828;";
        errores.push("El nombre que ingresaste es corto");
        }
        else{
            name.style.color = "";
        }
    
        if(lastName.value.length < 2){
        lastName.style.color = "#9e2828;";
        errores.push("El apellido que ingresaste es corto");
        }else{
            lastName.style.color = "";
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