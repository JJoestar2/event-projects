
const getAllEvents = async (pageNumber = 1, filters = []) =>
 {
     let response = await fetch(`/api/events/all?page=${pageNumber}`, {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify({filters})
     });
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

 const getCreatedUserEvents = async (id) => {
    let response = await fetch(`/api/created-events/user/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});

    return await response.json();
}

const getMemberedUserEvents = async (id) => {
    let response = await fetch(`/api/events/user/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});

    return await response.json();
}

export {
    getAllEvents,
    searchEventByTitle,
    getCreatedUserEvents,
    getMemberedUserEvents,
};


