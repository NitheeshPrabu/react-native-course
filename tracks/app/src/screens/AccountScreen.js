import React, { useContext } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';

import { Context as AuthContext } from '../context/AuthContext';

import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <FontAwesome name="gear" size={20} />
};

export default AccountScreen;
