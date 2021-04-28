/*
 * @file:
 * @Author: guokai
 * @Date: 2021-04-25 14:43:45
 * @LastEditors: guokai
 * @LastEditTime: 2021-04-26 22:55:28
 */
// import {FC} from 'react';
// import Layout from '../components/Layout';

// const App: FC = () => {
//     return (
//         <Layout />
//     );
// };

// export default App;


import {FC, useState} from 'react';
import Layout from '../components/Layout';
import store from '@/store';

const [xx] = useState(store);
const App: FC = () => {
    return (
        <Layout
            store={xx}
            // count: any;
            // secondsPassed: any;
            // setAddCount: any;
            // setReduceCount: any;
            time={store.time}
        />
    );
};

export default App;
