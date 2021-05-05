
const getAllEvents = async () =>
 {
     let response = await fetch('/api/events/all', {
         method: 'GET',
         headers: {
             'Content-Type': 'application/json'
         }});
     return await response.json();
 }

 const searchEventByTitle = async (title) => {
    let response = await fetch(`/api/events/${title}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});
    return await response.json();
 }

export {
    getAllEvents,
    searchEventByTitle,
};


