import React, { useState } from 'react';
import ClassCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calendar() {
    const [date, setDate] = useState(new Date());

    const onChange = (date) => {
        setDate(date);
    }

    return (
        <>
            <ClassCalendar
                onChange={onChange}
                value={date}
            />

            {date.toString()}
        </>
    );
}

export default Calendar;