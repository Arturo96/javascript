((c, d) => {

    const showInfo = () => {

        let nombres   = d.getElementById('nombres').value,
            apellidos = d.getElementById('apellidos').value,
            edad      = parseInt(d.getElementById('edad').value);

            c(3476367);

        let mostrarDatos = d.getElementById('mostrar-datos');
        mostrarDatos.innerHTML = '';

        if(mostrarDatos != null) {
            let divNombres = d.createElement('h2');
            divNombres.textContent = `Nombres: ${nombres}`;

            let divApellidos = d.createElement('h2');
            divApellidos.textContent = `Apellidos: ${apellidos}`;

            let divEdad = d.createElement('h2');
            divEdad.textContent = `Edad: ${edad}`;

            mostrarDatos.appendChild(divNombres);
            mostrarDatos.appendChild(divApellidos);
            mostrarDatos.appendChild(divEdad);

        }
    }

    let btnMostrar = d.getElementById('btnMostrar'),
        sendData   = d.getElementById('sendData');

    if(btnMostrar != null) {

        btnMostrar.addEventListener('click', () => {
            showInfo();
        });
    }

    if(sendData != null) {

        sendData.addEventListener('submit', e => {
            e.preventDefault();
            showInfo();
        });
    }



})(console.log, document)