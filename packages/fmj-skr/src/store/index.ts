/*
 * @file:
 * @Author: guokai
 * @Date: 2021-04-25 14:51:11
 * @LastEditors: guokai
 * @LastEditTime: 2021-04-25 19:49:09
 */
// import {createContext, useContext} from 'react';
import {observable, action} from 'mobx';
import monment from 'moment';

class AppStore {
    @observable time = '2021';
    @observable count = 1;
    @action setCount = () => {
        this.count++;
        // eslint-disable-next-line no-console
        console.log('🚀 ~ file: ithis.count++', this.count++);
    };
    @action getNow() {
        this.time = monment().format('YYYY/MM/DD HH:mm:ss');
    }
}
const store = new AppStore();

setInterval(() => {
    store.getNow();
}, 1000);


// const StoresContext = createContext(store);
// const useStores = () => useContext(StoresContext);


export {store};
