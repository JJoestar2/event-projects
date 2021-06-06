
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

const getCreatedUserEvents = async (pageNumber = 1, id) => {
    let response = await fetch(`/api/created-events/user/${id}?page=${pageNumber}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});

    return await response.json();
}

const getMemberedUserEvents = async (pageNumber = 1, id) => {
    let response = await fetch(`/api/events/user/${id}?page=${pageNumber}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});

    return await response.json();
}

const getUserSchedule = async (id) => {
    let response = await fetch(`/api/event/schedule/user/${id}`, {
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
    getCreatedUserEvents,
    getMemberedUserEvents,
    getUserSchedule,
};


