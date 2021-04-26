/*
 * @file:
 * @Author: guokai
 * @Date: 2021-04-25 14:51:11
 * @LastEditors: guokai
 * @LastEditTime: 2021-04-25 19:49:09
 */


import {makeAutoObservable} from 'mobx';
import monment from 'moment';

class AppStore {
    secondsPassed = 0;
    count = 0;
    time = monment().format('YYYY/MM/DD HH:mm:ss');

    constructor() {
        makeAutoObservable(this);
    }

    getSecondsPassed() {
        this.secondsPassed += 1;
    }
    getNow() {
        this.time = monment().format('YYYY/MM/DD HH:mm:ss');
    }
    // 数量 + 1
    setCount = () => {
        this.count++;
    };
}

const store = new AppStore();

setInterval(() => {
    store.getSecondsPassed();
    store.getNow();
}, 1000);


export {store};
