export const getPromise1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {res('This is promise 1 Response')}, 4000)
    })
}