export const resolve = (r, timeout) => new Promise(resolve =>
    setTimeout(() => resolve(r), timeout || 100));

export const reject = (r, timeout) => new Promise((resolve, reject) =>
    setTimeout(() => reject(r), timeout || 100));

export const first = (items, predicate) => {
    for (let d of items) {
        if (predicate(d)) {
            return d;
        }
    }

    return null;
};