function renderPage() {
    const bodyContent = document.body.innerHTML
    document.body.innerHTML = `    
        <header>
            <nav>
                <ul>    
                    <li class="logo-container"> <img class="nav-logo-img" src="images/logo.png" alt="react logo"> </li>
                    <li> <a class="nav-link" href="index.html">Introduction</a> </li>
                    <li> <a class="nav-link" href="lectures.html">Lectures</a> </li>
                    <li> <a class="nav-link" href="tutorials.html">Tutorials</a> </li>
                    <li> <a class="nav-link" href="resources.html">Resources</a> </li>
                    <li> <a class="nav-link" href="aboutsite.html">About website</a> </li>
                </ul>
            </nav>
        </header>

        <main>${bodyContent}</main>

        <div class="footer">
            <p class="copyright">© 2023 IS424 Project.</p>
        <div>
    `
}

renderPage()