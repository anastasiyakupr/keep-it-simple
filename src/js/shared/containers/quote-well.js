import {connect} from 'react-redux';

import QuoteWell from '../components/quote-well';


export default connect(
    state => ({
        quote: state.shared.quote
    })
)(QuoteWell);