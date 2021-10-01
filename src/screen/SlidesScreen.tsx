import React, {useContext, useRef, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {View, Text, SafeAreaView, ImageSourcePropType} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';

import {useAnimated} from '../hooks/useAnimated';
import {ThemeContext} from '../context/theme/ThemeContext';

const {width: screenWidth} = Dimensions.get('window');
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];
interface Props extends StackScreenProps<any, any> {}

export const SlidesScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {fadeIn, opacity} = useAnimated();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const isVisible = useRef(false);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{...styles.containerSlide, backgroundColor: colors.background}}>
        <Image source={item.img} style={styles.img} />
        <Text style={{...styles.title, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...styles.description, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, paddingTop: 10}}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={index => {
          setActiveIndex(index);
          if (items.length === index + 1) {
            isVisible.current === true;
            fadeIn(600);
          }
        }}
      />
      <View style={styles.containerPagination}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{...styles.dotStyle, backgroundColor: colors.primary}}
        />
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={{...styles.btn, backgroundColor: colors.primary}}
            activeOpacity={0.8}
            onPress={() => {
              if (isVisible) {
                navigation.navigate('Home' as any);
              }
            }}>
            <Text style={{...styles.btnText, color: colors.text}}>Entrar</Text>
            <Icon name="arrow-forward-outline" color={colors.text} size={30} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSlide: {
    flex: 1,
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  img: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  containerPagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  btn: {
    flexDirection: 'row',
    height: 50,
    width: 130,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 20,
    fontWeight: '700',
  },
});
