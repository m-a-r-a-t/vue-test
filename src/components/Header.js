import { useRoute } from 'vue-router'

const route = useRoute()

export default {
  name: 'Header',

  data() {
    return {
      currentPage: useRoute(),
      routes: [
        {
          name: 'Converter',
          link: '/converter',
        },
        {
          name: 'Exchange rates',
          link: '/currencies',
        },
      ],
    }
  },
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {this.routes.map((item) => {
              return (
                <li className="nav-item">
                  <router-link
                    className={
                      'nav-link ' +
                      (this.currentPage.path == item.link ? 'active' : '')
                    }
                    to={item.link}
                  >
                    {item.name}
                  </router-link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    )
  },
}
