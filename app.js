const express = require('express');
const app = express();
const cors = require('cors');

const path = require('path');
const port = process.env.PORT || 5050;

const categories = [{
        name: 'cat1',
        items: ['item1', 'item2'],
    },
    {
        name: 'cat2',
        items: ['item3', 'item2'],
    },
    {
        name: 'cat3',
        items: [],
    },
    {
        name: 'cat4',
    },
    {
        name: 'cat5',
    },
    {
        name: 'cat6',
    }
];

const categoriesItems = [
    {
        name: 'item1',
        content: 'To do 1',
    },
    {
        name: 'item2',
        content: 'To do 2',
    },
    {
        name: 'item3',
        content: 'To do 3',
    },
];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('build'));

app.get('/getCategories', (req, res) => {
    res.json(categories);
})

app.get('/getCategoriesItems', (req, res) => {
    res.json(categoriesItems);
});

app.post('/removeCategory', (req, res) => {
    const removedCategory = req.body;
    const categoryIndex = categories.findIndex(item => item.name === removedCategory.name);
    if (categoryIndex !== -1) {
        categories.splice(categoryIndex, 1);
    }
    res.json(categories);
})


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Server running on port: ', port);
});