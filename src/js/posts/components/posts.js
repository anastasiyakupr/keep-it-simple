import React from 'react';

import Layout from '../../shared/components/layout';


const Posts = ({user}) => {
    const sidebar = (
        <div>
        </div>
    );

    return (
        <Layout sidebar={sidebar}>
            <h1>
                Keep It Simple <small>Welcome</small>
            </h1>
        </Layout>
    );
};

Posts.propTypes = {
    user: React.PropTypes.object
};

export default Posts;