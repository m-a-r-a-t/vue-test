import { useRoute } from 'vue-router'

const route = useRoute()

export default {
  name: 'Dropdown',
  props: {
    currentCurrency: {
      type: String,
      default: 'USD',
    },
    currencies: {
      type: Array,
      default: ['ATM', 'BTM', 'RUB'],
    },
    side: {
      type: String,
    },
  },
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
  methods: {
    changeCurrency(currencyName) {
      if (this.side == 'base') {
        this.$store.commit('setBaseCurrency', currencyName)
        return
      }
      this.$store.dispatch('changeCurrencyName', {
        currencyName,
        side: this.side,
      })
      // ! изменить в сторе валюту
    },
  },

  render() {
    return (
      <div class="dropdown">
        <button
          class="btn  btn-primary dropdown-toggle "
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.currentCurrency}
        </button>
        <div
          class="dropdown-menu"
          style={'overflow:auto;height:10rem;'}
          aria-labelledby="dropdownMenuButton"
        >
          {this.currencies.map((item) => {
            return (
              <a
                className="dropdown-item"
                href="#"
                onClick={() => this.changeCurrency(item)}
              >
                {item}
              </a>
            )
          })}
        </div>
      </div>
    )
  },
}
