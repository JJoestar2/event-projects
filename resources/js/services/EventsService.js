const getAllEvents = () =>
 {
         /*let response = await fetch('/events/all', {
             method: 'GET',
             headers: {
                 'Content-Type': 'application/json'
             }});
         let events  = await response.json();*/
         return [
                    {id:1, title: 'events', date_start: '22.04.2021 14:30', location: 'Ukraine, Chernivtsi'},
                    {id:2, title: 'events2', date_start: '25.04.2021 13:30', location: 'Ukraine, Chernivtsi'}
                ];
 }

export {
    getAllEvents
};


