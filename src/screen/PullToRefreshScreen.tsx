import React, {useCallback, useContext, useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/ThemeContext';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {
    theme: { colors, dark},
  } = useContext(ThemeContext);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setData("Hola mundo AMOR")
    }, 1500);
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          title="loading.."
          titleColor={colors.text}
          tintColor={dark ? 'white': 'black'}
          size={50}
          progressBackgroundColor={colors.text}
          progressViewOffset={50}
          colors={[colors.background]}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="PullToRefresh" />
        {data && (
            <HeaderTitle title={data} />

        )}
      </View>
    </ScrollView>
  );
};
