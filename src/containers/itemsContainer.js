// dummy data
let data = [
    { id: 1, name: 'read book', complete: false },
    { id: 2, name: 'watch movie', complete: false },
    { id: 3, name: 'get vegetables', complete: false },
    { id: 4, name: 'buy clothes', complete: false },
    { id: 5, name: 'go to gym', complete: false },
];

const getAllItemsFromContainer = () => {
    // put the API calls here

    // dummy success response 
    let status = { code: 200, message: 'success' }

    return { status, data };
}

const addItemToContainer = (item) => {
    // put the API calls here

    // dummy success response
    data.push(item);

    let status = { code: 200, message: 'success' };

    return { status, data: item };
}

const updateItemToContainer = (id) => {
    // put the API calls here

    // dummy success response
    let updatedData = data.map(item => {
        if (item.id === id) {
            item.complete = true;
        }
        return item;
    })

    let status = { code: 200, message: 'success' }

    return { status, data: updatedData };
}

const deleteItemFromContainer = (id) => {
    // put the API calls here

    // dummy success response
    let updatedData = data.filter(item => item.id !== id);

    let status = { code: 200, message: 'success' }

    return { status, data: updatedData };
}

export {
    getAllItemsFromContainer,
    addItemToContainer,
    updateItemToContainer,
    deleteItemFromContainer
};