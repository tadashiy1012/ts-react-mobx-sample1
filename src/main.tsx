import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {observable, computed} from 'mobx';
import {observer, inject, Provider} from 'mobx-react';

class MyStore {
    @observable firstName: string = "tadashi";
    @observable lastName: string = "yamazaki";
    @computed get fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

type MyStoreType = {
    fistName: string
    lastName: string
    fullName: () => string
}

interface NafudaProps {
    store?: MyStoreType
}

@inject('store')
@observer
class Nafuda extends React.Component<NafudaProps> {
    render() {
        const {store} = this.props;
        return <p>{store ? store.fullName : 'nanashi'}</p>;
    }
}

const App = () => (
    <Provider store={new MyStore()}>
        <React.Fragment>
            <h1>hello world!!</h1>
            <Nafuda />
        </React.Fragment>
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);