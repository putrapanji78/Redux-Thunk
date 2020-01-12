import { createSwitchNavigator } from "react-navigation";
import user from '../screen/user';

const AppNavigation = createSwitchNavigator({
    User:{
        screen: user
    }
})
export default AppNavigation;