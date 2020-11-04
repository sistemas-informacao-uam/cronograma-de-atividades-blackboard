import React, { useContext, useState } from 'react';
import { useEffect } from 'react';

import ActivitiesList from '../ActivitiesList';

import { Container, FilterWrapper, ActivitiesFilter, SubjectFilter, FilterButton } from './styles';

import { Context } from '../../Context/AuthContext';

const Schedule = () => {
  const { user } = useContext(Context);

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

    const filteredActivities = user.activities.filter(
      activity => !compareSet.includes(activity.type) 
      && (subjectSelected === '' 
      || activity.subject === subjectSelected)
    );

    // Get dates and remove duplicates
    const dates = [...new Set(user.activities.map(activity => activity.date))];

    // build object categorized by date and filled with activities in that date
    const activitiesCategorizedByDate = dates.map(date => {
      const activities = filteredActivities.filter(activity => activity.date === date);
      return {
        date,
        activities,
      }
    });

    setActivitiesListData(activitiesCategorizedByDate)
  }, [isProvaSelected, isTrabalhoSelected, isApresentacaoSelected, subjectSelected, user]);

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
          {user.subjects.map((subject) => {
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
