import parse from 'date-fns/parse';
import differenceInDays from 'date-fns/difference_in_days';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import format from 'date-fns/format';


export const formatDateOrTime = d => {
    d = parse(d);
    if (differenceInDays(d, new Date()) >= -3) {
        return distanceInWordsToNow(d);
    }

    return format(d, '[on] MMMM DD, YYYY [at] hh:mm A');
};