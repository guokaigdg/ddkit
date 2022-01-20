/*
 * @file:
 * @Author: guokai
 * @Date: 2021-04-25 14:43:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-04-28 23:46:26
 */

import {FC} from 'react';
import DemoQuickFind from '../components/DemoQuickFind';

const App: FC = () => {


    const creatWork = ()=> {
        console.log('22')
    }
    return (
        <div className="root">
        <div className="btn-wrap">
            <button onclick={creatWork}>创建工作进程</button>
        </div>
        <div className="wrap">
            <div className="main">主进程</div>
            <div className="work">工作进程</div>
        </div>
    </div>
    );
};

export default App;


