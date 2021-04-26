/*
 * @file:
 * @Author: guokai
 * @Date: 2021-04-25 14:59:22
 * @LastEditors: guokai
 * @LastEditTime: 2021-04-26 10:17:42
 */
import React from 'react';
// import {useObserver, useLocalStore, observer} from 'mobx-react';
import {useObserver, useLocalStore, observer} from 'mobx-react';
// import {observer as observerLite} from 'mobx-react-lite';
import {QuickFind} from '../QuickFind';

import {store} from '../../store';

const Layoyt: React.FC = () => {
    const myStore = useLocalStore(() => (
        {
            count: 11,
            setCount() {
                store.count += 1;
            },
        }
    ));

    return useObserver(() => (
        <div>
            <h2>{myStore.count}</h2>
            <button onClick={myStore.setCount}>
                +
            </button>
            <QuickFind />
        </div>
    ));


};
export default observer(Layoyt);

