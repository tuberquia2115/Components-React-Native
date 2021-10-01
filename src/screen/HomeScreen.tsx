import React from 'react';
import {View, FlatList} from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import {styles} from '../theme/appTheme';
import {menuItems} from '../data/menuItems';
import {HeaderTitle} from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones del Menú" />}
        ItemSeparatorComponent={() => (
          <ItemSeparator />
        )}
      />
    </View>
  );
};

export default HomeScreen;
