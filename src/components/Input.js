import { useRoute } from 'vue-router'

const route = useRoute()

export default {
  name: 'Input',
  props: {
    inputValue: {
      type: Number,
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
    changeInput(e) {
      let result = { side: this.side, value: e.target.value }

      if (['.', ','].includes(e.target.value[0]) && e.target.value.length > 1) {
        result.value = '0' + e.target.value
      }
      if (
        this.inputValue == '0' &&
        e.target.value.length > 1 &&
        e.target[e.target.value.length - 1] != '.'
      ) {
        console.log('SDSDS')
        result.value = parseFloat(e.target.value)
      }

      this.$store.dispatch('changeInput', result)
    },
  },
  created() {
    this.$store.dispatch('changeInput', {
      side: 'left',
      value: 1,
    })
  },
  render() {
    return (
      <div class="input w-100  p-0">
        <input
          onKeyup={this.changeInput}
          type="number"
          class="form-control"
          placeholder="0.0"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={this.inputValue}
        />
      </div>
    )
  },
}
