import React from 'react';

import { Container, Activity, ActivityTypeIndicator, Separator } from './styles';

const ActivitiesList = ({ date, activities = []}) => {
  const colors = {
    'prova': '#FF00FF',
    'trabalho': '#00FFFF',
    'apresentacao': '#00FF00',
  }
  
  if (activities.length > 0) {
    return (
      <Container>
        <h3>{date}</h3>
        {activities.map(activity => {
          return (
            <Activity key={activity.title}>
              <ActivityTypeIndicator color={colors[activity.type]} />
              <strong>{activity.subject}</strong>
              <Separator color={colors[activity.type]} />
              <p>{activity.title}</p>
            </Activity>
          )
        })}
      </Container>
    );
  }

  return null;
};

export default ActivitiesList;
