/*
 * @file:
 * @Author: guokai
 * @Date: 2021-04-25 14:59:22
 * @LastEditors: guokai
 * @LastEditTime: 2021-04-25 19:51:47
 */
import React from 'react';
// import {useObserver, useLocalStore, observer} from 'mobx-react';
import {useObserver, useLocalStore, observer} from 'mobx-react';
import {observer as observerLite} from 'mobx-react-lite';

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
        </div>
    ));


};
export default observer(Layoyt);

