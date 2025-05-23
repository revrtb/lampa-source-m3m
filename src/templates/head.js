let html = `<div class="head">
    <div class="head__container">
        <div class="head__left">
            <div class="head__logo">
                <div class="head__logo-icon">
                    <img src="./img/logo-icon.svg" />
                </div>
                <div class="head__logo-text">Lampa</div>
            </div>

            <div class="head__menu-toggle">
                <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" x="0" y="0" viewBox="0 0 32 32" xml:space="preserve">
                    <path d="M29 8H3a2 2 0 0 1 0-4h26a2 2 0 0 1 0 4zM29 28H3a2 2 0 0 1 0-4h26a2 2 0 0 1 0 4zM29 18H3a2 2 0 0 1 0-4h26a2 2 0 0 1 0 4z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <div class="head__center">
            <nav class="head__nav">
                <a href="#" class="head__nav-item nav-movies selector" data-action="movies" data-url="movie" data-title="Movies" data-component="category" data-source="tmdb">
                    Movies
                </a>
                <a href="#" class="head__nav-item nav-series selector" data-action="series" data-url="tv" data-title="Series" data-component="category" data-source="tmdb">
                    Series
                </a>
            </nav>
        </div>

        <div class="head__right">
            <div class="head__title"></div>
            
            <div class="head__actions">
                <div class="head__action open--search selector">
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.9964" cy="9.63489" r="8.43556" stroke="currentColor" stroke-width="2.4"/>
                        <path d="M20.7768 20.4334L18.2135 17.8701" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>
        </div>

        <div class="head__progress"></div>
    </div>
</div>`

export default html