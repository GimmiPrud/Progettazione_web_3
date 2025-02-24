import { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"

const Axios = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/wp')
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
      <h1 className='font'>ELENCO PROGETTI:</h1>
      <table style={{marginLeft:"37pc"}}>
      <thead>
        <tr>
            <th>ID Progetto</th>
            <th>Nome WP</th>
            <th>Inizio Progetto</th>
            <th>Fine Progetto</th>
        </tr>
        </thead>
        {users.map((user) => (
          //<li key={user.id}>{user.progetto} - {user.nome} - {user.inizio} - {user.fine}</li>
          <tr key={user.id}>
            <td>{user.progetto}</td>
            <td>{user.nome}</td>
            <td>{user.inizio}</td>
            <td>{user.fine}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Axios;