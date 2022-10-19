import store from '@/store'
import { defineAsyncComponent } from 'vue'
export default defineAsyncComponent({
  loader: async () => {
    // eslint-disable-next-line no-async-promise-executor
    await new Promise(async (resolve) => {
      try {
        await store.dispatch('getCurrenciesData')
        resolve(1)
      } catch (e) {
        resolve(1)
        console.log(e)
      }
    })

    return import('./Content')
  },

  loadingComponent: <div>Loading</div>,
})
