import {FC} from 'react';
import {render} from 'react-dom';

const App: FC = () => (
    <h1>Hello World</h1>
);

render(<App />, document.body.appendChild(document.createElement('div')));
