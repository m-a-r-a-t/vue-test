export default {
  name: 'Currency',
  props: ['currencyName', 'currencyValue'],
  data() {
    //
  },

  render() {
    return (
      <div className="d-flex flex-row justify-content-between w-100 my-2 p-2 border rounded">
        <div>{this.currencyName}</div>
        <div>{this.currencyValue}</div>
      </div>
    )
  },
}
