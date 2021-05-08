
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

 const filterEvents = async (type, id) => {
    let response = await fetch(`/api/events/filter/${type}/${id}`, {
       method: 'GET',
       headers: {
            'Content-Type': 'application/json'
       }});
     return await response.json();
}

export {
    getAllEvents,
    searchEventByTitle,
    filterEvents,
};


