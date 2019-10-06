import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = nav => {
  navigator = nav;
};

// navigate method for non React Components to utilise
export const navigate = (routeName, params) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
