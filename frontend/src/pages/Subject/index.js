import React from 'react';
// import { useUser } from '../../context/User';

import Header from '../../components/Header';

import {
  Container,
  Sidebar,
  ActivitiesArea,
  HomeIcon,
  ArrowIconDown,
} from './styles';
import { Button } from '../Login/styles';
import NavBar from '../../components/NavBar';
import ActivityRegistered from '../../components/ActivityRegistered'

import { professorRegisteredActivitiesFakeDate } from '../../fakeData';

const Subject = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Container>
        <Sidebar>
          <div><div></div></div>
          <h3><ArrowIconDown /> DESENVOLVIMENTO WEB <HomeIcon /></h3>
          <span>Avisos</span>
          <span>Sala Remota</span>
          <span className="active">Atividades</span>
          <span>Avaliações</span>
        </Sidebar>
        <ActivitiesArea >
          <form className="create-activity" onSubmit={(e) => {
            e.preventDefault();
            e.target.reset();
          }}>
            <div>
              <label htmlFor="title">Título</label>
              <input name="title" type="text"/>
            </div>

            <div>
              <label htmlFor="date">Data de Entrega</label>
              <input required name="date" type="datetime"/>
            </div>

            <div>
              <label htmlFor="tipo">Tipo de atividade</label>
              <select  name="tipo">
                <option value="prova">Prova</option>
                <option value="trabalho">Trabalho</option>
                <option value="apresentacao">Apresentação</option>
              </select>
            </div>
            <Button style={{margin: 0}}>
              <p>Criar Atividade</p>
            </Button>
          </form>

          <hr/>

          <section className="registered-activities">
            <h2>Atividades Cadastradas</h2>

            {professorRegisteredActivitiesFakeDate.map((list) => {
              return list.activities.map(activity => {
                if (activity.subject === 'Desenvolvimento Web') {
                  return <ActivityRegistered key={activity.id} title={activity.title} date={list.date} type={activity.type} />
                }
                return null;
              })
            })}


          </section>
        </ActivitiesArea>
      </Container>
    </>
  );
};

export default Subject;
