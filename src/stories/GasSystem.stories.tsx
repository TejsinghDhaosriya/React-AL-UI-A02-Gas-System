import { Meta, Story } from "@storybook/react";
// import GasSystem from "../modules/index";
// import {Provider} from 'react-redux'
// import configureStore, { sagaMiddleware } from "../app/store";
// import rootSaga from '../sagas';

// const store = configureStore();
// sagaMiddleware.run(rootSaga);
// export default {
//     title: "GasSystem",
// } as Meta;

const HeaderFuc: Story = () => (
    <div>
         {/* <Provider store={store}>
        <GasSystem />
        </Provider> */}
    </div>
);

export const ContainHeader = HeaderFuc.bind({})