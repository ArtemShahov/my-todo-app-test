import React from 'react';
import { useRouteMatch, Route, useParams, Switch  } from 'react-router';

function CategoryContent() {
    const { category } = useParams<{ category: string }>();
    return (
        <div>
            {category}
        </div>
    )
}

export default CategoryContent;
