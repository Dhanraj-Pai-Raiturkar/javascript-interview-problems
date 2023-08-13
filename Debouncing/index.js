const noDebounce = document.getElementById("no-debounce");
const debounce = document.getElementById("debounce");
const debounceClearTimeout = document.getElementById("debounce-clearTimeout");
const submit = document.getElementById("button");
const input = document.getElementById("input");

const debouceClearTimer = (cb, delay) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

const debouce = (cb, delay) => {
    return (...args) => {
        setTimeout(() => {
            cb(...args);
        }, delay);
    }
}

const dbClearTimeout = debouceClearTimer((text) => {
    debounceClearTimeout.innerText = text;
}, 1000);
const db = debouce((text) => {
    debounce.innerText = text;
}, 1000);

input.addEventListener("keyup", (e) => {
    noDebounce.innerText = e.target.value;
    dbClearTimeout(e.target.value);
    db(e.target.value);
})