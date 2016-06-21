import moment from 'moment';


export const formatDateOrTime = d => {
    d = moment(d, moment.ISO_8601, true);
    var t = moment.duration(d - moment());

    if (t.asDays() >= -3) {
        return t.humanize(true);
    }

    return d.utc().format('[on] MMMM DD, YYYY [at] hh:mm A');
};