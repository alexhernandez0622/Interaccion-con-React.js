import React from 'react';
import Swal from 'sweetalert2';

class App extends React.Component {
  // La función handleOpenModal se define como una propiedad de la clase App
  handleOpenModal = () => {
    // Mostrar un modal utilizando la biblioteca Swal
    Swal.fire({
      title: 'Formulario', // Título del modal
      html: `
        <form id="myForm">
          <input type="text" name="name" placeholder="Nombre" required /> 
          <input type="email" name="email" placeholder="Email" required /> 
          <textarea name="message" placeholder="Mensaje"></textarea> 
        </form>
      `,
      showCancelButton: true, // Mostrar el botón de cancelar en el modal
      focusConfirm: false, // No enfocar automáticamente el botón de confirmar
      preConfirm: () => {
        const form = document.getElementById('myForm'); // Obtener el formulario utilizando su ID
        const formData = new FormData(form); // Crear un objeto FormData para recopilar los valores del formulario

        // Aquí puedes acceder a los valores del formulario y realizar acciones con ellos
        // Esta parte del código está vacía y se puede personalizar según las necesidades

        return formData; // Devolver el objeto FormData como resultado de la función preConfirm
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const formData = result.value; // Obtener el objeto FormData del resultado
        // Mostrar una alerta de éxito con los valores del formulario utilizando la biblioteca Swal
        Swal.fire(
          'Enviado',
          `Has enviado el formulario:\n\nNombre: ${formData.get('name')}\nEmail: ${formData.get(
            'email'
          )}\nMensaje: ${formData.get('message')}`,
          'success'
        );
      }
    });
  };

  render() {
    // Renderizar un botón que al hacer clic abre el formulario modal
    return (
      <button onClick={this.handleOpenModal}>
        Abrir formulario
      </button>
    );
  }
}

export default App;

