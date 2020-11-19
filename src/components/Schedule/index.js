import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

import ActivitiesList from '../ActivitiesList';

import {
  Container,
  FilterWrapper,
  ActivitiesFilter,
  SubjectFilter,
  FilterButton,
} from './styles';

const Schedule = (props) => {
  const { activities } = useAuth();

  const [isProvaSelected, setIsProvaSelected] = useState(false);
  const [isTrabalhoSelected, setIsTrabalhoSelected] = useState(false);
  const [isApresentacaoSelected, setIsApresentacaoSelected] = useState(false);

  const [subjectSelected, setSubjectSelected] = useState('');
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    let typeCompareSet = [];
    let userSubjects = [...props.subjects];

    isProvaSelected && typeCompareSet.push('prova');
    isTrabalhoSelected && typeCompareSet.push('trabalho');
    isApresentacaoSelected && typeCompareSet.push('apresentacao');

    if (isProvaSelected && isTrabalhoSelected && isApresentacaoSelected) {
      typeCompareSet = [];
    }

    const filteredActivities = activities.filter(
      (activity) =>
        !typeCompareSet.includes(activity.type) &&
        userSubjects.includes(activity.subject) &&
        (subjectSelected === '' || activity.subject === subjectSelected)
    );

    // Get dates and remove duplicates
    const dates = [...new Set(activities.map((activity) => activity.date))];

    // build object categorized by date and filled with activities in that date
    const activitiesCategorizedByDate = dates.map((date) => {
      const activities = filteredActivities.filter(
        (activity) => activity.date === date
      );
      return {
        date,
        activities,
      };
    });

    setFilteredActivities(
      activitiesCategorizedByDate.sort((a, b) => a.date - b.date)
    );
  }, [
    isProvaSelected,
    isTrabalhoSelected,
    isApresentacaoSelected,
    subjectSelected,
    setFilteredActivities,
    activities,
    props.subjects,
  ]);

  return (
    <Container>
      <FilterWrapper>
        <ActivitiesFilter>
          <FilterButton
            onClick={() => setIsProvaSelected(!isProvaSelected)}
            isActive={isProvaSelected}
            color="#FF00FF"
          >
            Prova
          </FilterButton>
          <FilterButton
            onClick={() => setIsTrabalhoSelected(!isTrabalhoSelected)}
            isActive={isTrabalhoSelected}
            color="#00FFFF"
          >
            Trabalho
          </FilterButton>
          <FilterButton
            onClick={() => setIsApresentacaoSelected(!isApresentacaoSelected)}
            isActive={isApresentacaoSelected}
            color="#00FF00"
          >
            Apresentação
          </FilterButton>
        </ActivitiesFilter>

        <SubjectFilter onChange={(e) => setSubjectSelected(e.target.value)}>
          <option defaultValue disabled value="">
            Disciplinas
          </option>
          <option value="">Todas</option>
          {props.subjects.map((subject, index) => {
            return (
              <option key={index} value={subject}>
                {subject}
              </option>
            );
          })}
        </SubjectFilter>
      </FilterWrapper>

      {filteredActivities.length > 0 &&
        filteredActivities.map((item) => {
          const { date, activities } = item;
          return (
            // data={this.state.progr.data.sort((a, b) => a.start_time > b.start_time).filter(x => x.period === '2019-10-16T00:00:00.000-03:00')}

            <ActivitiesList
              key={date}
              date={Intl.DateTimeFormat('pt-BR')
                .format(new Date(date * 1000))
                .slice(0, 5)}
              activities={activities}
            />
          );
        })}
    </Container>
  );
};

export default Schedule;
