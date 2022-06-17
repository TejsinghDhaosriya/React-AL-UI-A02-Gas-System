import { Meta, Story } from "@storybook/react";
// import GasHeader from "../modules/GasHeader/GasHeader";
// import {Provider} from 'react-redux'
// import configureStore, { sagaMiddleware } from "../app/store";
// import rootSaga from '../sagas';

// const store = configureStore();
// sagaMiddleware.run(rootSaga);
// export default {
//     title: "Header",
// } as Meta;

const HeaderFuc: Story = () => (
    <div>
         {/* <Provider store={store}>
        <GasHeader />
        </Provider> */}
    </div>
);

export const ContainHeader = HeaderFuc.bind({})