import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msg'

import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false


//temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkZhYmlvIEp1bmlvciIsImVtYWlsIjoiZmpfMDExQGhvdG1haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTY0ODk0MzM2MiwiZXhwIjoxNjQ5MjAyNTYyfQ.51KFD9rdu-svJvGZST720MybCbj870ie6kSvXiG2okQ'


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')