/*
 * @file:
 * @Author: guokai
 * @Date: 2021-04-25 14:59:22
 * @LastEditors: guokai
 * @LastEditTime: 2021-04-26 10:17:42
 */

import React from 'react';
import {observer} from 'mobx-react-lite';
import {store} from '../../store';

const Layout: React.FC = () => {
    const {secondsPassed, time, count, setCount} = store;

    return (
        <div>
            <p>数字: {secondsPassed}</p>
            <span>时间: {time}</span>
            <p>{count}</p>
            <button onClick={setCount}>点击数字加一</button>
        </div>
    );
};

export default observer(Layout);
