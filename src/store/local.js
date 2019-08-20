const localEvent = {
  StorageGetter: function (key) {
    return JSON.parse(localStorage.getItem(key))
  },
  StorageSetter: function (key, val) {
    return localStorage.setItem(key, JSON.stringify(val))
  },
  StorageRemove:function (key) {
    return localStorage.removeItem(key)
  }
}

export default localEvent
