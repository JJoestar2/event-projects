const getAllTypes = async () =>
{
    let response = await fetch('/api/type/all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});
    return await response.json();
};

export {
    getAllTypes,
};
