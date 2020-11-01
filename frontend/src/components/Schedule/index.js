import React, { useState } from 'react';
import { useEffect } from 'react';

import ActivitiesList from '../ActivitiesList';

import { Container, FilterWrapper, ActivitiesFilter, SubjectFilter, FilterButton } from './styles';

import { professorFakeData } from '../../fakeData';
import { useUser } from '../../context/User';

const Schedule = () => {

  const [isProvaSelected, setIsProvaSelected] = useState(false);
  const [isTrabalhoSelected, setIsTrabalhoSelected] = useState(false);
  const [isApresentacaoSelected, setIsApresentacaoSelected] = useState(false);

  const [subjectSelected, setSubjectSelected] = useState('');

  const [activitiesListData, setActivitiesListData] = useState([]);
  
  useEffect(() => {
    let compareSet = [];

    isProvaSelected && compareSet.push('prova');
    isTrabalhoSelected && compareSet.push('trabalho');
    isApresentacaoSelected && compareSet.push('apresentacao');
  
    if (isProvaSelected && isTrabalhoSelected && isApresentacaoSelected) {
      compareSet = [];
    }

    const filteredByActivity = professorFakeData.activities.map(list => {
      const filteredActivities = list.activities.filter(
        activity => !compareSet.includes(activity.type) 
        && (subjectSelected === '' 
        || activity.subject === subjectSelected)
      );
      return {
        date: list.date,
        activities: filteredActivities,
      }
    })

    setActivitiesListData(filteredByActivity)
  }, [isProvaSelected, isTrabalhoSelected, isApresentacaoSelected, subjectSelected]);

  return (
    <Container>
      <FilterWrapper>
        <ActivitiesFilter>
          <FilterButton
            onClick={() => setIsProvaSelected(!isProvaSelected)}
            isActive={isProvaSelected}
            color="#FF00FF">
              Prova
          </FilterButton>
          <FilterButton
            onClick={() => setIsTrabalhoSelected(!isTrabalhoSelected)}
            isActive={isTrabalhoSelected}
            color="#00FFFF">
              Trabalho
          </FilterButton>
          <FilterButton 
            onClick={() => setIsApresentacaoSelected(!isApresentacaoSelected)}
            isActive={isApresentacaoSelected}
            color="#00FF00">
              Apresentação
          </FilterButton>
        </ActivitiesFilter>
        
        <SubjectFilter onChange={(e) => setSubjectSelected(e.target.value)}>
          <option defaultValue disabled value="">Disciplinas</option>
          <option value="">Todas</option>
          {professorFakeData.subjects.map((subject) => {
            return <option key={subject} value={subject}>{subject}</option>
          })}
        </SubjectFilter>
      </FilterWrapper>

      {activitiesListData.map(item => {
        const {date, activities} = item;
        return (
          <ActivitiesList key={date} date={date} activities={activities} />
        );
      })}
    </Container>
  );
};

export default Schedule;
