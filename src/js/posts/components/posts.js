import React from 'react';

import Layout from '../../shared/components/layout';
import SignUpWell from '../../shared/components/signup-well';


const Posts = ({user}) => {
    const sidebar = (
        <div>
            <SignUpWell user={user} />
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