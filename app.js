const express = require('express');
const app = express();
const cors = require('cors');

const path = require('path');
const port = process.env.PORT || 5050;

const categories = {
    allCategories: [{
            name: 'cat1',
        },
        {
            name: 'cat2',
        },
        {
            name: 'cat3',
        },
        {
            name: 'cat4',
            path: 'cat3',
        },
        {
            name: 'cat5',
            path: 'cat3',
        },
        {
            name: 'cat6',
            path: 'cat3/cat5',
        }
    ],
    categoriesTree: [{
            name: 'cat1',
        },
        {
            name: 'cat2',
        },
        {
            name: 'cat3',
            subCat: [{
                    name: 'cat4',

                },
                {
                    name: 'cat5',
                    subCat: [{
                        name: 'cat6',
                    }]
                }
            ],
        },
    ],
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('build'));

app.get('/getCatgories', (req, res) => {
    res.json(categories);
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('Server running on port: ', port);
});