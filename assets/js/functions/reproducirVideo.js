const reproducirVideo = (() => {
    const modificarUrl = (url, id) => {
        const etiquetaElegida = document.getElementById(id);
        etiquetaElegida.setAttribute("src", url);
    };

    return {
        insertarVideo: (url, id) => {
            modificarUrl(url, id);
        },
    };
})();

export default reproducirVideo;
