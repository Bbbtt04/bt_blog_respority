import { createApp } from 'vue'
import Dialog from './index.vue'

const createDialog = (title: String, message: String) => {
  const mountNode = document.createElement('div')
  const Instance = createApp(Dialog, {
    show: true,
    message,
    title,
    close: () => {
      Instance.unmount()
      document.body.removeChild(mountNode)
    },
  })
  Instance.mount(mountNode)
  document.body.appendChild(mountNode)
}

export default createDialog
