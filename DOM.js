document.getElementById("formulario").addEventListener("submit", function(evento){
    evento.preventDefault()
    const nombre = document.getElementById("name").value
    const mail = document.getElementById("email").value
    const mensaje = document.getElementById("message").value

    const resultado = `Nombre: ${nombre}\nCorreo electrónico: ${mail}\nTu mensaje: ${mensaje}`

alert(resultado);

    document.getElementById("formulario").reset()
})
