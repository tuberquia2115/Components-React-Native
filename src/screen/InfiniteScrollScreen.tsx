import React, {useContext, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import FadeInImage from '../components/FadeInImage';

import {HeaderTitle} from '../components/HeaderTitle';
import {ThemeContext} from '../context/theme/ThemeContext';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const loadMore = () => {
    // setNumbers(prev => [...prev, ...numbers.map(num => numbers.length + num)]);
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };
  const renderItem = (item: number) => {
    return (
      <FadeInImage
        uri={`https://picsum.photos/id/${item}/500/400`}
        style={{width: '100%', height: 400}}
      />
    );
    // <Image
    //   source={{uri: `https://picsum.photos/id/${item}/500/400`}}
    //   style={styles.img}
    // />
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => String(item)}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={styles.containerActivity}>
            <ActivityIndicator size={30} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    backgroundColor: 'green',
    width: '100%',
    height: 400,
  },
  containerActivity: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
