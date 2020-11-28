import React, { useCallback, useEffect, useState } from 'react';
import { Button } from '../../pages/Login/styles';

import { Container } from './styles';

import firebase from 'firebase';
import { db } from '../../services/firebase';
import { useAuth } from '../../contexts/AuthContext';

const ActivityRegistered = (props) => {
  const { docId, title, type, date, minDate, maxDate } = props;
  const { activities, setActivities } = useAuth();

  const [titleInput, setTitleInput] = useState(title);
  const [typeInput, setTypeInput] = useState(type);
  const [dateInput, setDateInput] = useState();

  useEffect(() => {
    const formatDate = new Date(date * 1000);
    const day = formatDate.getDate() < 10 ? '0' + formatDate.getDate() : formatDate.getDate();
    const month = formatDate.getMonth() + 1;
    const year = formatDate.getFullYear();

    setDateInput(`${year}-${month}-${day}`);
  }, [date]);

  const handleDelete = useCallback(() => {
    db.collection('activities').doc(docId).delete();

    setActivities(activities.filter(activity => activity.id !== docId));
  }, [activities, docId, setActivities]);

  const handleEdit = useCallback(() => {
    const date = new Date(`${dateInput} 23:59:59`);

    const timestamp = new firebase.firestore.Timestamp.fromDate(date);

    const data = {
      title: titleInput,
      type: typeInput,
      date: timestamp,
    };

    const activityIndex = activities.findIndex(activity => activity.id === docId)
    const updatedActivities = [...activities];

    updatedActivities[activityIndex].title = titleInput;
    updatedActivities[activityIndex].type = typeInput;
    updatedActivities[activityIndex].date = timestamp.seconds;

    setActivities(updatedActivities);

    db.collection('activities').doc(docId).set(data, { merge: true })
  }, [dateInput, titleInput, typeInput, activities, setActivities, docId]);

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
        value={dateInput}
        onChange={(e) => setDateInput(e.target.value)}
        min={minDate}
        max={maxDate}
        className="input"
        name="date"
        disabled
        type="date"
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
              handleEdit();
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
