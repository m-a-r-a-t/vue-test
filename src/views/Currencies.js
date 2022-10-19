import Currency from '@/components/Currency'
import convertValute from '@/utils/valute_converter'
import Dropdown from '@/components/Dropdown'
export default {
  name: 'Currencies',

  data() {
    //
  },
  computed: {
    currencies() {
      return this.$store.getters.currencies
    },
    currenciesKeys() {
      return Object.keys(this.$store.getters.currencies)
    },
    baseCurrency() {
      return this.$store.getters.baseCurrency
    },
  },
  render() {
    return (
      <div className="w-100 text-center">
        <Dropdown
          side={'base'}
          currentCurrency={this.baseCurrency}
          currencies={this.currenciesKeys}
          class=" my-1"
        />
        <div style="height:calc(100vh - 256px);overflow:auto;">
          {Object.values(this.currencies).map((currency) => {
            let value = convertValute(
              this.currencies[this.baseCurrency],
              currency,
              1
            )

            return (
              <Currency
                currencyName={currency.CharCode}
                currencyValue={value}
              />
            )
          })}
        </div>
      </div>
    )
  },
}
