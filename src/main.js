// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入App.vue
import App from './App'
import Fenlei from './components/fenlei.vue'
import Wode from './components/wode.vue'
import router from './router'
import $ from 'jquery'
import { Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Popup } from 'mint-ui';
import { Button } from 'mint-ui';
import { PaletteButton } from 'mint-ui';
import { Lazyload } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';

import Rousource from 'vue-resource'

Vue.use(router)
Vue.use(Rousource)

Vue.use(InfiniteScroll);

Vue.use(Lazyload);
Vue.component(PaletteButton.name, PaletteButton);
Vue.component(Button.name, Button);

Vue.component(Popup.name, Popup);

Vue.config.productionTip = false

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

/* eslint-disable no-new */
// 注册到vue实例当中
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
