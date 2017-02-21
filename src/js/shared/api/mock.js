import {resolve} from '../mock';
import samples from 'json-loader!./samples.json';


export default {
    dailyQuote: () => resolve(samples.quote)
};