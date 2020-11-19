import React, { useCallback, useState } from 'react';
import { Button } from '../../pages/Login/styles';

import { Container } from './styles';

import { db } from '../../services/firebase';

const ActivityRegistered = (props) => {
  const { title, type, date, docId } = props;

  const [titleInput, setTitleInput] = useState(title);
  const [typeInput, setTypeInput] = useState(type);
  const [dateInput, setDateInput] = useState(date);

  const handleDelete = useCallback(() => {
    db.collection('activities').doc(docId).delete();
  }, [docId]);

  return (
    <Container>
      <input
        className="input"
        value={titleInput}
        onChange={(e) => setTitleInput(e.target.value)}
        name="title"
        disabled
        type="text"
      />

      <input
        className="input"
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
        name="date"
        disabled
        type="datetime"
      />

      <select
        value={typeInput}
        onChange={(e) => setTypeInput(e.target.value)}
        className="input"
        name="tipo"
        disabled
      >
        <option defaultValue={type === 'prova'} value="prova">
          Prova
        </option>
        <option defaultValue={type === 'trabalho'} value="trabalho">
          Trabalho
        </option>
        <option defaultValue={type === 'apresentacao'} value="apresentacao">
          Apresentação
        </option>
      </select>

      <div className="buttons">
        <Button
          onClick={(e) => {
            const p = e.target;
            const parent = p.parentElement.parentElement.parentElement;
            const inputs = parent.querySelectorAll('.input');

            if (p.textContent === 'Salvar') {
              p.textContent = 'Editar';
              inputs.forEach((input) => (input.disabled = true));
            } else {
              p.textContent = 'Salvar';
              inputs.forEach((input) => (input.disabled = false));
            }
          }}
          style={{ margin: '0 8px' }}
        >
          <p>Editar</p>
        </Button>
        <Button
          onClick={(e) => {
            handleDelete();
            const parent = e.target.parentElement.parentElement.parentElement;
            parent.style.display = 'none';
          }}
          style={{ margin: 0 }}
        >
          <p style={{ background: 'red' }}>Excluir</p>
        </Button>
      </div>
    </Container>
  );
};

export default ActivityRegistered;
