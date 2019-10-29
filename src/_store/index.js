import Vue from 'vue';
import Vuex from 'vuex';
import Element from 'element-ui'
import { alert } from './alert.module';
import { account } from './account.module';
import { users } from './users.module';

Vue.use(Vuex);
Vue.use(Element);
export const store = new Vuex.Store({
    modules: {
        alert,
        account,
        users
    }
});

