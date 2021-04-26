import {FC} from 'react';
// import {observer} from 'mobx-react';
import {store} from '@/store';


const Content: FC = () => {
    const {count} = store;
    return (
        <div>content
            <p>{count}</p>
        </div>
    );
};
export default Content;
