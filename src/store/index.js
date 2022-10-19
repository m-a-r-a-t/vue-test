import { createStore } from 'vuex'
import axios from 'axios'
import convertValute from '@/utils/valute_converter'
export default createStore({
  state: {
    baseCurrency: 'USD',
    currencies: {},
    leftCurrency: 'USD',
    rightCurrency: 'RUB',
    leftInput: '1',
    rightInput: '',
  },
  getters: {
    leftInput(state) {
      return state.leftInput
    },
    rightInput(state) {
      return state.rightInput
    },
    leftCurrency(state) {
      return state.leftCurrency
    },
    rightCurrency(state) {
      return state.rightCurrency
    },

    currencies(state) {
      return state.currencies
    },
    baseCurrency(state) {
      return state.baseCurrency
    },
  },
  mutations: {
    setBaseCurrency(state, value) {
      state.baseCurrency = value
    },
    setLeftInput(state, value) {
      state.leftInput = value
    },
    setRightInput(state, value) {
      state.rightInput = value
    },
    setCurrencies(state, valutes) {
      state.currencies = { ...valutes }
    },
    setLeftCurrency(state, value) {
      state.leftCurrency = value
    },
    setRighttCurrency(state, value) {
      state.rightCurrency = value
    },
  },
  actions: {
    async getCurrenciesData({ state, commit }) {
      try {
        let data = (
          await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
        ).data

        commit('setCurrencies', {
          ...data.Valute,
          RUB: { Value: 1, CharCode: 'RUB' },
        })
      } catch (e) {
        console.log(e)
      }
    },

    changeCurrencyName({ state, commit, dispatch }, { currencyName, side }) {
      if (side === 'left') {
        commit('setLeftCurrency', currencyName)
        dispatch('changeAfterCurrencyChange', side)
      } else {
        commit('setRighttCurrency', currencyName)
        dispatch('changeAfterCurrencyChange', side)
      }
    },

    changeAfterCurrencyChange({ state, commit }, side) {
      if (side === 'left')
        commit(
          'setRightInput',
          convertValute(
            state.currencies[state.leftCurrency],
            state.currencies[state.rightCurrency],
            state.leftInput
          )
        )
      else
        commit(
          'setLeftInput',
          convertValute(
            state.currencies[state.rightCurrency],
            state.currencies[state.leftCurrency],
            state.rightInput
          )
        )
    },
    changeInput({ state, commit, dispatch }, { value, side }) {
      if (side === 'left') commit('setLeftInput', value)
      else commit('setRightInput', value)

      dispatch('changeAfterCurrencyChange', side)
    },

    swapCurrencies({ state, commit, dispatch }) {
      let leftCurrency = state.leftCurrency
      commit('setLeftCurrency', state.rightCurrency)
      commit('setRighttCurrency', leftCurrency)
      dispatch('changeAfterCurrencyChange', 'left')
      console.log('fdsfds')
    },
  },
  modules: {},
})
