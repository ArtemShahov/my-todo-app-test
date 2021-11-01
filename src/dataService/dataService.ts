// import { port } from '../../app.js';

const getCategories = async () => {
    const response = await fetch(`http://localhost:5050/getCatgories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

export default {
    getCategories,
};
