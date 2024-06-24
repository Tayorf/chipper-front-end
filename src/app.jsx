import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import ChirpCard from './components/chirp';

const App = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [chirps, setChirps] = useState([]);

  const handleUsernameChange = e => setUsername(e.target.value);
  const handleMessageChange = e => setMessage(e.target.value);
  const handleChirpSubmit = e => {
    e.preventDefault();

    const newChirp = {
      id: uuidv4(),
      username: username,
      message: message,
      created: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    };

    setChirps([...chirps, newChirp]);
  }

  return (
    <>
      <div class="justified-center">
        <h1>Chirp2React</h1>
      </div>

      <div class="card w-50">
        <input class=" my-4 mx-4 px-4 py-4 row-3" type="text" value={username} onChange={handleUsernameChange} placeholder="Username">
        </input>
        <div>
        <textarea class="my-4 mx-4 px-4 py-4 row-3" placeholder="- Chirp" aria-placeholder='-- Chirp' value={message} onChange={handleMessageChange}></textarea>
          <button class="btn btn-primary" onClick={handleChirpSubmit}>Chirp It!</button>
        </div>
      </div>

      {
        chirps.map(chirp => <ChirpCard
          key={chirp.id}
          username={chirp.username}
          message={chirp.message}
          created={chirp.created}
        />)
      }
    </>
  );
};

export default App;