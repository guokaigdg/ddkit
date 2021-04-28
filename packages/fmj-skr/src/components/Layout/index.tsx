/*
 * @file:
 * @Author: guokai
 * @Date: 2021-04-25 14:59:22
 * @LastEditors: guokai
 * @LastEditTime: 2021-04-26 10:17:42
 */

import React from 'react';
// import {Button} from '@material-ui/core';
import {observer} from 'mobx-react-lite';
import Content from '@/components/content';
// import {store} from '@/store';
import './index.less';

interface mystoreProps{
    store?: any;
    count?: any;
    secondsPassed?: any;
    setAddCount?: any;
    setReduceCount?: any;
    time?: any;
}

const Layout: React.FC <mystoreProps> = observer(mystore => {
    const {secondsPassed, time, count, setAddCount, setReduceCount} = mystore;
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <p>动态数字: {secondsPassed}</p>
                <span>北京时间: {time}</span>
                <p>数字: {count}</p>
                <button
                    onClick={setAddCount}
                >
                    点击数字加 + 1
                </button>
                <br />
                <br />
                <button
                    onClick={setReduceCount}
                >
                    点击数字加 - 1
                </button>
            </div>
            <div>
                <Content />
            </div>
        </div>
    );
});
export default Layout;
