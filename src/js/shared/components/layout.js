import React from 'react';
import {Row, Col} from 'react-bootstrap';

import QuoteWell from '../containers/quote-well';


const Layout = ({children, sidebar}) => (
    <Row>
        <Col md={8}>
            <article>
                {children}
            </article>
        </Col>
        <Col md={4}>
            <aside>
                {sidebar}
                <QuoteWell />
            </aside>
        </Col>
    </Row>
);

Layout.propTypes = {
    children: React.PropTypes.node,
    sidebar: React.PropTypes.node
};

export default Layout;