// import React, { useState } from 'react';
// import { useRouter } from 'next/router';

// Otros componentes o bibliotecas necesarios
const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   // Manejar eventos de cambio de los campos de entrada
//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   // Manejar el evento de envío del formulario de inicio de sesión
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
    
//     // Realizar la lógica de inicio de sesión y redirigir al usuario
//     if (username === 'usuario' && password === 'contraseña') {
//       router.push('/dashboard'); // Cambiar '/dashboard' por la ruta a la página después del inicio de sesión exitoso
//     } else {
//       alert('Usuario o contraseña incorrectos'); // Mostrar mensaje de error en caso de credenciales incorrectas
//     }
//   };

//   // Renderizar el formulario de inicio de sesión
  return (
    <div>
      <h1>Iniciar sesión</h1>
      <form>
      {/* <form onSubmit={handleFormSubmit}> */}
        <div>
          <label>Nombre de usuario:</label>
          <input type="text"/>
          {/* <input type="text" value={username} onChange={handleUsernameChange} /> */}
        </div>
        <div>
          <label>Contraseña:</label>
          <input type="password"/>
          {/* <input type="password" value={password} onChange={handlePasswordChange} /> */}
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
