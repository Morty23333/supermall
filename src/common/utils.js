export function debounce(func, delay) {
    let timer = null
    // 按道理来说是应该有防抖效果的
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }

}