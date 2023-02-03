import { EventEmitter } from 'events'
export const bus = new EventEmitter()

export const useFlashMessages = () => {
  function setFlashMessage(msg: string, type: string) {
    bus.emit('flash', {
      message: msg,
      type: type
    })
  }

  return { setFlashMessage }
}
