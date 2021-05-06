const getAllCategories = async () =>
{
    let response = await fetch('/api/category/all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }});
    return await response.json();
};

export {
    getAllCategories,
};
