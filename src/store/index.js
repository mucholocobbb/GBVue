import Vue from 'vue'
import Vuex from 'vuex'

import mainStore from './mainStore'
import diStore from './diagrammStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        mainStore,
        diStore
    }
})