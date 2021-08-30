class Router {

    constructor(paths) {
        this.paths = paths;
        this.initRouter();
    }

    initRouter() {
        const {
            location: {
                pathname = "/"
            }
        } = window;
        const URI = pathname === "/" ? "home" : pathname.replace("/", "");
        this.load(URI);
    }

    load(page = "home") {
        const { paths } = this;
        const { path, template } = paths[page] || paths.error;
        const container = document.querySelector(".container");
        container.innerHTML = template;
        window.history.pushState({}, "Genial", path);
    }

}