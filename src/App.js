import Header from './components/Header'
import Routes from './views/Content'
import PrevContent from './views/PrevContent'

export default {
  name: 'App',

  data() {
    //
  },

  render() {
    return (
      <div>
        <Header />
        <div
          className="container d-flex justify-content-center align-items-center  flex-column"
          style="height:calc(100vh - 56px)"
        >
          <PrevContent />
        </div>
      </div>
    )
  },
}
