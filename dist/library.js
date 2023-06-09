'use strict';

var vue = require('vue');

var script = {
  name: 'UntitleUIIcon'
};

defineProps({
    icon:String
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("i", {
    class: vue.normalizeClass([_ctx.icon, "untlt-ic"])
  }, null, 2 /* CLASS */))
}

script.render = render;
script.__scopeId = "data-v-147fbd72";
script.__file = "src/Icon.vue";

var components = { UntitleUIIcon: script };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

module.exports = plugin;
