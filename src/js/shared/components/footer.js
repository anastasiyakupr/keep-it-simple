import React from 'react';
import {Row, Col} from 'react-bootstrap';


const year = new Date().getFullYear();

export default () => (
    <footer>
        <Row>
            <Col lg={12}>
                <p className="small">
                    Copyright &copy; Keep It Simple Blog { year }
                </p>
            </Col>
        </Row>
    </footer>
);