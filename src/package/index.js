import Label from './views/label.vue'
import Vue from 'vue'

const install = function (vue) {
  vue.component(Label.name, Label)
}

if (typeof window !== undefined) {
  window.labelData = {
    Label: Label,
    vue: Vue
  }
}

export default { install, Label }
