import { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"

const Persona = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/persona')
      .then((response) => {
        setUsers(response.data);  
        setLoading(false);         
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1 className='font'>ANAGRAFICA DIPENDENTE:</h1>
      <table style={{marginLeft:"41pc"}}>
        <thead>
        <tr>
            <th>Nome</th>
            <th>Cognome</th>
            <th>Posizione</th>
            <th>Stipendio</th>
        </tr>
        </thead>
        {users.map((user) => (
          //<li key={user.id}>{user.nome} - {user.cognome} - {user.posizione} - {user.stipendio}</li>
          <tr key={user.id}>
            <td>{user.nome}</td>
            <td>{user.cognome}</td>
            <td>{user.posizione}</td>
            <td>{user.stipendio}</td> 
          </tr>
        ))}
        </table>
    </div>
  );
};

export default Persona;