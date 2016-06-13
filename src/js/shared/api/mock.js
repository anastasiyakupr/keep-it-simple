import {resolve} from '../mock';
import samples from 'json!./samples.json';


export default {
    dailyQuote: () => resolve(samples.quote)
};