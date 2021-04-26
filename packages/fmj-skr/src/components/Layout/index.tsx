/*
 * @file:
 * @Author: guokai
 * @Date: 2021-04-25 14:59:22
 * @LastEditors: guokai
 * @LastEditTime: 2021-04-26 10:17:42
 */

import React from 'react';
import {Button} from '@material-ui/core';
import {observer} from 'mobx-react-lite';
import Content from '@/components/content';
import {store} from '@/store';
import './index.less';


const Layout: React.FC = () => {
    const {secondsPassed, time, count, setAddCount, setReduceCount} = store;
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
                <p>动态数字: {secondsPassed}</p>
                <span>北京时间: {time}</span>
                <p>数字: {count}</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={setAddCount}
                >
                    点击数字加 + 1
                </Button>
                <br />
                <br />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={setReduceCount}
                >
                    点击数字加 - 1
                </Button>
            </div>
            <div>
                <Content />
            </div>
        </div>
    );
};

export default observer(Layout);
