
const getAllEvents = async (pageNumber) =>
 {
     let response = await fetch(`/api/events/all?page=${pageNumber}`, {
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

 const filterEvents = async (data) => {
    if(data) {
        let response = await fetch(`/api/events/filter`, {
           method: 'POST',
           headers: {
                'Content-Type': 'application/json'
           },
            body: JSON.stringify({data})
        });

        return await response.json();
    }
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
    filterEvents,
    getCreatedUserEvents,
    getMemberedUserEvents,
};


