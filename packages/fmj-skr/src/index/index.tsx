/*
 * @file:
 * @Author: guokai
 * @Date: 2021-04-25 14:43:45
 * @LastEditors: guokai
 * @LastEditTime: 2021-04-25 15:01:08
 */
import {FC} from 'react';
import {Provider} from 'mobx-react';
import Layout from '../components/Layout';
import {store} from '../store';

const App: FC = () => {
    return (
        <Provider store={store}>
            <Layout />
        </Provider>
    );


};

export default App;
