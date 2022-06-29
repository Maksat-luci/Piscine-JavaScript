
const interpolation = ({ step, start, end, callback, duration }) => {
    let x = start
    let y

    let t = y = duration / step

    let timerId = setInterval(() => {

        callback([x, y])
        x += (end - start) / step
        y += t

        if (x.toFixed(1) == end) clearInterval(timerId)

    }, t)
}