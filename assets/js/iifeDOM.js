export const iifeDOM = (() => {
    function funcionPrivada(url, id) {
        document.querySelector(`#${id}`).setAttribute("src", url)
    }

    return {
        funcionPublica(url, id) {
            funcionPrivada(url, id)
        }
    }
})()
