class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = 
          "<header>\
          <div class='logo'>\
            <img src='#' alt='my-logo'>\
          </div>\
            <nav class='nav'>\
              <ul class='nav__list'>\
                <li class='nav__item'><a class='nav__link' href='resume.html'>Resume</a></li>\
                <li class='nav__item'><a class='nav__link' href='index.html#my-work'>Work</a></li>\
                <li class='nav__item'><a class='nav__link' href='index.html#about-me'>About Me</a></li>\
                <li class='nav__item'><a class='nav__link' href='index.html'>Home</a></li>\
              </ul>\
            </nav>\
          </header>";
    }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = 
    "<footer class='footer'>\
    <p class='mail'><a class='footer__link' href='mailto:justin.strongarms10@gmail.com?subject=Portfolio Inquiry'>contact me</a></p>\
    <ul class='social-list'>\
      <li class='social-list__item'>\
        <a class='social-list__link'\
        href='https://github.com/pigghead'\
        target='_blank' rel='noopener noreferrer'>\
          <i class='fab fa-github-square'></i>\
        </a>\
      </li>\
      <li class='social-list__item'>\
        <a class='social-list__link'\
        href='https://www.linkedin.com/in/justin-armstrong-916134127/'\
        target='_blank' rel='noopener noreferrer'>\
          <i class='fab fa-linkedin'></i>\
        </a>\
      </li>\
      <li class='social-list__item'>\
        <a class='social-list__link'\
        href='https://armstrongj.itch.io/'\
        target='_blank' rel='noopener noreferrer'>\
          <i class='fab fa-itch-io'></i>\
        </a>\
      </li>\
    </ul>\
  </footer>";
  }
}

customElements.define('header-component', Header);
customElements.define('contact-footer', Footer);