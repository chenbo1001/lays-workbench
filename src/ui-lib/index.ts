import { App as Application }  from 'vue'
import Components from './components/index';
import clickOutSide from "./directives/click-out-side";
import contextmenu from "./contextmenu/index";
import dropdown from "./dropdown/index";

import VueMdijs from 'vue-mdijs';
import * as mdiIcons from '@mdi/js';

export default {
  install(app: Application) {
    app.use(Components)
    app.use(clickOutSide)
    app.use(contextmenu)
    app.use(dropdown)
    // 全量引入 mdi 图标
    VueMdijs.add(mdiIcons);
    app.use(VueMdijs)
  }
}