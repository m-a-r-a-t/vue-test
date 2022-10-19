import Dropdown from '@/components/Dropdown'

import Input from '@/components/Input'

export default {
  name: 'Converter',

  data() {
    return {}
    //
  },
  computed: {
    leftCurrency() {
      return this.$store.getters.leftCurrency
    },
    rightCurrency() {
      return this.$store.getters.rightCurrency
    },
    currencies() {
      return this.$store.getters.currencies
    },
    currenciesKeys() {
      return Object.keys(this.$store.getters.currencies)
    },
    leftInput() {
      return this.$store.getters.leftInput
    },
    rightInput() {
      return this.$store.getters.rightInput
    },
  },
  methods: {
    swapCurrencies() {
      this.$store.dispatch('swapCurrencies')
    },
  },
  render() {
    return (
      // <div
      //   className="container d-flex justify-content-center align-items-center  flex-column"
      //   style="height:calc(100vh - 56px)"
      // >
      <div className="container d-flex flex-row  justify-content-center w-50 ">
        <div className="d-flex flex-column w-100">
          <Input side="left" inputValue={this.leftInput} />
          <Dropdown
            side={'left'}
            currentCurrency={this.leftCurrency}
            currencies={this.currenciesKeys}
            class=" my-1"
          />
        </div>

        <div className="mx-5">
          <button
            onClick={this.swapCurrencies}
            type="button"
            class="btn btn-secondary"
          >
            <i class="bi bi-arrow-left-right"></i>
          </button>
        </div>

        <div className="d-flex flex-column w-100">
          <Input side="right" inputValue={this.rightInput} />
          <Dropdown
            side={'right'}
            currencies={this.currenciesKeys}
            currentCurrency={this.rightCurrency}
            class=" my-1"
          />
        </div>
      </div>
      // </div>
    )
  },
}
