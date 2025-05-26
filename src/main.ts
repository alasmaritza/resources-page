import './assets/main.css'
import './assets/main.less'

import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
library.add(fas)
createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

