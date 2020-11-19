import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import firebase from 'firebase';
import { db } from '../../services/firebase';
import { useAuth } from '../../contexts/AuthContext';

import {
  Container,
  Sidebar,
  ActivitiesArea,
  HomeIcon,
  ArrowIconDown,
} from './styles';
import { Button } from '../Login/styles';
import NavBar from '../../components/NavBar';
import ActivityRegistered from '../../components/ActivityRegistered';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Subject = () => {
  const { currentUser, activities, setActivities } = useAuth();
  const { subjects } = currentUser;

  const { subject } = useParams();

  const [minDate, setMinDate] = useState();
  const [maxDate, setMaxDate] = useState();

  useEffect(() => {
    function formatDate(date) {
      return date.toISOString().slice(0, 10);
    }

    const today = new Date();
    setMinDate(formatDate(today));

    if (today.getMonth() > 8) {
      setMaxDate(formatDate(new Date('2020-12-20 00:00:00')));
    } else {
      setMaxDate(formatDate(new Date('2020-06-20 00:00:00')));
    }
  }, []);

  const history = useHistory();

  function handleCreateActivities(e) {
    (async () => {
      e.preventDefault();

      if (e.currentTarget.title.value === '') {
        return;
      }

      const date = new Date(`${e.currentTarget.date.value} 23:59:59`);

      const timestamp = new firebase.firestore.Timestamp.fromDate(date);

      const data = {
        subject,
        title: e.currentTarget.title.value,
        type: e.currentTarget.tipo.value,
        date: timestamp,
      };

      const { id } = await db.collection('activities').add(data);

      data.date = data.date.seconds;
      data.id = id;
      setActivities([...activities, data]);
    })();
    e.currentTarget.reset();
  }

  // If subject don't match the user subjects, redirect to Home (or could redirect to a 404 page)
  if (!subjects.includes(subject)) {
    history.push('/');
  }

  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <Sidebar>
          <div>
            <div></div>
          </div>
          <h3>
            <ArrowIconDown /> {subject.toUpperCase()} <HomeIcon />
          </h3>
          <span>Avisos</span>
          <span>Sala Remota</span>
          <span className="active">Atividades</span>
          <span>Avaliações</span>
        </Sidebar>
        <ActivitiesArea>
          <form
            className="create-activity"
            onSubmit={(e) => handleCreateActivities(e)}
          >
            <div>
              <label htmlFor="title">Título</label>
              <input name="title" type="text" />
            </div>

            <div>
              <label htmlFor="date">Data de Entrega</label>
              <input
                required
                name="date"
                min={minDate}
                max={maxDate}
                type="date"
              />
            </div>

            <div>
              <label htmlFor="tipo">Tipo de atividade</label>
              <select name="tipo">
                <option value="prova">Prova</option>
                <option value="trabalho">Trabalho</option>
                <option value="apresentacao">Apresentação</option>
              </select>
            </div>
            <Button style={{ margin: 0 }}>
              <p>Criar Atividade</p>
            </Button>
          </form>

          <hr />

          <section className="registered-activities">
            <h2>Atividades Cadastradas</h2>

            {activities.map((activity) => {
              if (activity.subject === subject) {
                return (
                  <ActivityRegistered
                    key={activity.id}
                    docId={activity.id}
                    title={activity.title}
                    date={Intl.DateTimeFormat('pt-BR').format(
                      new Date(activity.date * 1000)
                    )}
                    type={activity.type}
                  />
                );
              }
              return null;
            })}
          </section>
        </ActivitiesArea>
      </Container>
    </>
  );
};

export default Subject;
