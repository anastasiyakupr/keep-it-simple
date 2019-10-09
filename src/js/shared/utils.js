import {parseISO, differenceInDays, formatDistance, format} from 'date-fns';


export const formatDateOrTime = d => {
    d = parseISO(d);
    const now = new Date();
    if (differenceInDays(d, now) >= -3) {
        return formatDistance(d, now, {addSuffix: true});
    }

    return format(d, '\'on\' MMMM dd, yyyy \'at\' hh:mm a');
};
