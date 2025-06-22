const groupSelect = document.getElementById('groupType');
const planOutput = document.getElementById('planOutput');

groupSelect.addEventListener('change', function () {
    const choice = this.value;
    let message = "";

    switch (choice) {
        case "familia":
            message = `
                <h3>Plan Familiar</h3>
                <ul>
                    <li>Alojamiento familiar con cocina</li>
                    <li>Actividades para niños y adultos</li>
                    <li>Transporte privado o alquiler de coche</li>
                </ul>`;
            break;
        case "amigos":
            message = `
                <h3>Plan con Amigos</h3>
                <ul>
                    <li>Hostel o Airbnb compartido</li>
                    <li>Rutas nocturnas y experiencias gastronómicas</li>
                    <li>Eventos culturales y actividades en grupo</li>
                </ul>`;
            break;
        case "pareja":
            message = `
                <h3>Plan Romántico</h3>
                <ul>
                    <li>Hotel con vistas o spa</li>
                    <li>Cenas a la luz de las velas</li>
                    <li>Paseos por lugares emblemáticos</li>
                </ul>`;
            break;
        default:
            message = "";
    }

    planOutput.innerHTML = message;
});
