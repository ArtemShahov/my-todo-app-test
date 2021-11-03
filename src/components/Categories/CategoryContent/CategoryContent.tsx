import React from 'react';
import { useParams  } from 'react-router';
import actions from '../actions';
import { connect } from 'react-redux';

function CategoryContent(props: any) {
    const { category } = useParams<{ category: string }>();
    return (
        <div>
            {category}
        </div>
    )
}

export default connect(null, { ...actions})(CategoryContent);
