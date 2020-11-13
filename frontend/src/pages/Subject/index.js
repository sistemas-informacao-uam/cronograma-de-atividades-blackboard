import React from 'react';

import Header from '../../components/Header';

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
  const { currentUser } = useAuth();
  const { subject } = useParams();
  const history = useHistory();

  // const [activities, setActivities] = useState([...currentUser.activities]);

  // useEffect(() => {
  //   setActivities([...currentUser.activities])
  // }, [currentUser, setUser])

  function handleCreateActivities(e) {
    e.preventDefault();

    if (e.currentTarget.title.value === '') {
      return;
    }

    const data = {
      subject,
      title: e.currentTarget.title.value,
      date: e.currentTarget.date.value,
      type: e.currentTarget.tipo.value,
    };

    // setActivities([...activities, data]);

    const updatedUser = {
      ...currentUser,
      activities: [...currentUser.activities, data],
    };

    e.currentTarget.reset();
  }

  // If subject don't the use subjects, redirect to Home (or could redirect to a 404 page)
  if (!currentUser.subjects.includes(subject)) {
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
              <input required name="date" type="datetime" />
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

            {currentUser.activities.map((activity, index) => {
              if (activity.subject === subject) {
                return (
                  <ActivityRegistered
                    key={index}
                    title={activity.title}
                    date={activity.date}
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
