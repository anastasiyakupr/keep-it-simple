import React from 'react';
import ReactDOM from 'react-dom';
import {
    Well, InputGroup, FormControl, Button, Glyphicon
} from 'react-bootstrap';


class SearchPostsWell extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.onSubmit) {
            const q = ReactDOM.findDOMNode(this.refs.q).value.trim();

            this.props.onSubmit(q);
        }
    }

    render() {
        const {q, pending} = this.props;

        return (
            <Well>
                <h4>Blog Search</h4>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <InputGroup>
                        <FormControl ref="q" defaultValue={q} />
                        <InputGroup.Button>
                            <Button disabled={pending}>
                                <Glyphicon glyph="search" />
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </form>
            </Well>
        );
    }
}

SearchPostsWell.propTypes = {
    q: React.PropTypes.string,
    pending: React.PropTypes.bool,
    onSubmit: React.PropTypes.func
};

export default SearchPostsWell;