export const resolve = (r, timeout) => new Promise(resolve =>
    setTimeout(() => resolve(r), timeout || 100));

export const reject = (r, timeout) => new Promise((resolve, reject) =>
    setTimeout(() => reject(r), timeout || 100));

export const trancateWords = (s, count) => {
    s = s.split(/\s|\\n/).slice(0, count);
    if (s.length === count) {
        s.push('...');
    }

    return s.join(' ');
};

export const first = (items, predicate) => {
    for (let d of items) {
        if (predicate(d)) {
            return d;
        }
    }

    return null;
};

export const nfilter = (items, n, predicate) => {
    var r = [];

    for (let d of items) {
        if (predicate(d)) {
            r.push(d);
            n -= 1;

            if (!n) {
                break;
            }
        }
    }

    return r;
};

export const pager = (items, page, size, f) => {
    var start = page * size,
        end = start + size,
        paging = {},
        r = [];

    if (page > 0) {
        paging.before = page - 1;
    }

    if (end < items.length) {
        paging.after = page + 1;
    } else {
        end = items.length;
    }

    for (var i = start; i < end; i++) {
        r.push(f(items[i]));
    }

    return {paging: paging, items: r};
};