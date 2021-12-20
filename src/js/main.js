let users = [];

let user  = {
    name:"",
    email:"",
    wsp:"",
    dni:"",
    pass:""
}

// Muestra info adicional en cada taller al presionar +Info

function infoTalleres (taller) {
    let modal = document.getElementById("modalwrapper");
    modal.style.display = "block";

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
    
    let spaninfo = document.getElementById("infotaller");
    

    if (taller === "tini") {
        spaninfo.innerHTML = "Horario de cursado: Lunes - Miercoles - Viernes de 18 a 20. No se necesita traer instrumento";
    } else if (taller === "boom") {
        spaninfo.innerHTML = "Horario de cursado: Sabados de 8 a 12. Todos los tubos se proveen en el establecimiento"
    } else if (taller === "rband") {
        spaninfo.innerHTML = "Horario de cursado: Martes y Jueves de 18 a 20. No es necesario traer instrumentos."
    }
}

// Valido datos de contacto y registro en localstorage

function handleContact () {

    event.preventDefault();
    
    let name = document.formcontact.name.value;
    let email = document.formcontact.email.value;
    let wapp = document.formcontact.wsp.value;
    let msg = document.formcontact.msj.value;
    let error = document.getElementById("error-form-contact");

    if (name.length < 3) {
        error.innerHTML = "EL nombre debe tener un numero de caracteres mayor a 3"
    }else if (email.length < 5) {
        error.innerHTML = "El email debe tener un numero de caracteres mayor 5"
    } else if (msg.length < 20) {
        error.innerHTML = "Escriba un mensaje mayor a 20 caracteres"
    } else {
        error.innerHTML = "Registramos correctamente su solicitud"
        error.style.color = "green"
    }

        
}

// Valido datos de registro

function handleNewUser () {
    event.preventDefault();

    

    let name = document.newUser.name.value;
    let email = document.newUser.email.value;
    let wsp = document.newUser.wsp.value;
    let dni = document.newUser.dni.value;
    let pass = document.newUser.pass.value;

    let error = document.getElementById("newUserStatus");

    if (name.length < 3) {
        error.innerHTML = "El nombre debe tener mas de 3 caracteres";
    } else if (email.length < 5) {
        error.innerHTML = "El email debe tener mas de 5 caracteres"
    } else if (isNaN(wsp)) {
        error.innerHTML = "El Wsp debe ser un numero";
    } else if (isNaN(dni)) {
        error.innerHTML = "El dni debe ser un numero";
    } else if (pass.length < 8) {
        error.innerHTML = "El password debe ser mayor a 8 caracteres";        
    } else {
        if (users.length === 0) {
            user.name = name;
            user.email = email;
            user.wsp = wsp;
            user.dni = dni;
            user.pass = pass;
            users.push(user);
            error.innerHTML = "Usuario Registrado Correctamente"
            error.style.color = "green";
            storeusers = JSON.stringify(users);
            localStorage.setItem("usuarios",storeusers);
        }else{
            users = JSON.parse(localStorage.getItem("usuarios"))
            user.name = name;
            user.email = email;
            user.wsp = wsp;
            user.dni = dni;
            user.pass = pass;
            users.push(user);
            error.innerHTML = "Usuario Registrado Correctamente"
            error.style.color = "green";
            storeusers = JSON.stringify(users);
            localStorage.setItem("usuarios",storeusers);            
        }
        
    }    
}

// Valido datos de registro

function handleLogin () {
    event.preventDefault();
    let user = document.userLogin.name.value;
    let pass = document.userLogin.pass.value;

    let logstat = document.getElementById("logstatus");

    users = JSON.parse(localStorage.getItem("usuarios"))
    

    users.forEach (element => {
        
        console.log(typeof(element.pass))
        console.log(typeof(pass))

        if (element.name === user && element.pass == pass) {
            logstat.innerHTML = "Usuario logueado correctamente"
            logstat.style.color = "green"
        } else {
            logstatus.innerHTML = "Datos incorrectos"
            logstat.style.color = "red"
        }
    })
}
