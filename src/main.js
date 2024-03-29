import Vue from 'vue'
import Label from './package/views/label.vue'

Label.install = function (vue) {
  console.log('vue: ', vue)
  vue.component(Label.name, Label)
}

if (typeof window !== undefined) {
  window.labelData = {
    Label: Label,
    vue: Vue
  }
}

export default Label
