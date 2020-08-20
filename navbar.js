//Fines academicos
var path = window.location.pathname;
var dir = path.substring(navigator.platform == 'Win32' ? 1 : 0, path.lastIndexOf('/')) + '/';
var pisoRoot = dir.lastIndexOf('html-intro');
var techo = dir.indexOf('/', pisoRoot);
// si se utiliza live server el root es vacío.
var pathRoot = pisoRoot != -1 ? dir.substring(0, techo) : "";

document.write(`
<header style="height:85px;">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="${pathRoot}/index.html">Html Basics</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="${pathRoot}/1-html/index.html">Html</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${pathRoot}/2-css/index.html">Css</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${pathRoot}/3-js/index.html">Javascript</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${pathRoot}/4-ejemplos/index.html">Ejemplos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${pathRoot}/5-ejercicios/index.html">Ejercicios</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
`);
