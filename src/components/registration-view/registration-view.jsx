import React, { useState } from 'react';
import PropTypes from 'prop-types';

export function RegistrationView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useSate('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email, birthday);
    props.onRegister(username);
  }

  return (
    <form>
      <label>Username:
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>Password:
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <label>Email:
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <label>Birthday:
        <input type="text" value={email} onChange={e => setBirthday(e.target.value)} />
      </label>
      <button type='button' onClick={handleSubmit}>Submit</button>
    </form>
  )
}

RegistrationView.propTypes = {
  onRegister: PropTypes.func.isRequired
};