import React from 'react';
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import {SvgXml} from 'react-native-svg';

const W = Dimensions.get('window').width;
const H = Dimensions.get('window').height;

const ICON_SIZE = 26;

const groceryData =
  'M318.2 192h159.79c5.26-39.47-5.15-102.65-53.82-111.39-18.13-3.03-51.9 6.18-72.49 17.69-17.01-9.52-42.45-16.98-61.15-17.79 1.82 2.21 3.83 4.17 5.5 6.58 20.84 30.15 25.74 72.3 22.17 104.91zM210.53 50.47c11.29-12.19 14.43-32.03 13.22-50.22-12.88-.86-35.67-.12-50.02 13.28-16.53 16.6-13.77 46.36-13.22 50.22 18.47 1.23 37.77-1.85 50.02-13.28zm191.69 0c11.29-12.19 14.43-32.03 13.22-50.22-12.88-.86-35.67-.12-50.02 13.28-16.53 16.6-13.77 46.36-13.22 50.22 18.47 1.23 37.77-1.85 50.02-13.28zM286.3 192c5.26-39.47-5.15-102.65-53.82-111.39-18.13-3.03-51.9 6.18-72.48 17.69-20.66-11.56-54.43-20.71-72.48-17.69C38.91 89.34 28.53 152.88 33.7 192h252.6zM496 224H16c-8.84 0-16 7.16-16 16v112h512V240c0-8.84-7.16-16-16-16zM64 304c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm384 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zM0 496c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16V384H0v112zm448-64c8.84 0 16 7.16 16 16s-7.16 16-16 16-16-7.16-16-16 7.16-16 16-16zm-384 0c8.84 0 16 7.16 16 16s-7.16 16-16 16-16-7.16-16-16 7.16-16 16-16z';

const SvgIcon = ({color, data}) => {
  const xml = `<svg viewBox="0 0 512 512"><path fill="${color}" d="${data}"></path></svg>`;

  return (
    <SvgXml color="white" xml={xml} width={ICON_SIZE} height={ICON_SIZE} />
  );
};

const HeaderBlock = () => (
  <View>
    <LinearGradient
      colors={['#f48fb1', '#ff4081']}
      style={styles.headerBlock}
    />
  </View>
);

const Item = ({text, icon, color1, color2}) => (
  <View style={styles.itemContainer}>
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}
      locations={[0, 0.75]}
      colors={[color1, color2]}
      style={styles.iconContainer}>
      {icon}
    </LinearGradient>
    <View style={styles.textContainer}>
      <Text style={[styles.text, {color: color2}]}>{text}</Text>
    </View>
  </View>
);

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <HeaderBlock />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Classify transaction</Text>
          <View height={12} />
          <Text style={styles.subHeaderText}>
            Classify this transaction into a
          </Text>
          <Text style={styles.subHeaderText}>particular category</Text>
        </View>
        {/* <View flex={1} style={{backgroundColor: 'red'}}></View> */}
        <View style={styles.block}>
          <View style={styles.row}>
            <Item
              color1="#81d4fa"
              color2="#039be5"
              text="General"
              icon={
                <AntDesignIcon
                  name="appstore1"
                  size={ICON_SIZE}
                  style={styles.icon}
                />
              }
            />
            <Item
              color1="#b39ddb"
              color2="#651fff"
              text="Transport"
              icon={
                <FontAwesome5Icon
                  name="bus"
                  size={ICON_SIZE}
                  style={styles.icon}
                />
              }
            />
          </View>
          <View style={styles.row}>
            <Item
              color1="#f48fb1"
              color2="#ff4081"
              text="Shopping"
              icon={
                <FontAwesome5Icon
                  name="shopping-bag"
                  size={ICON_SIZE}
                  style={styles.icon}
                />
              }
            />
            <Item
              color1="#ffcc80"
              color2="#ff6d00"
              text="Bills"
              icon={
                <FontAwesomeIcon
                  name="file-text"
                  size={ICON_SIZE}
                  style={styles.icon}
                />
              }
            />
          </View>
          <View style={styles.row}>
            <Item
              color1="#90caf9"
              color2="#2962ff"
              text="Entertainment"
              icon={
                <FontAwesomeIcon
                  name="youtube-play"
                  size={ICON_SIZE}
                  style={styles.icon}
                />
              }
            />
            <Item
              color1="#a5d6a7"
              color2="#00c853"
              text="Grocery"
              icon={
                <SvgIcon color="white" size={ICON_SIZE} data={groceryData} />
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B2E',
  },

  headerBlock: {
    position: 'absolute',
    marginLeft: -85,
    marginTop: -240,
    width: W * 0.9,
    height: H * 0.6,
    backgroundColor: '#ff4081',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    transform: [{rotateX: '0deg'}, {rotateZ: '-40deg'}],
  },

  headerTextContainer: {position: 'absolute', top: 54, paddingHorizontal: 30},
  headerText: {color: 'white', fontSize: 24, fontWeight: '700'},
  subHeaderText: {color: 'white', fontSize: 16, fontWeight: '400'},

  block: {
    flex: 2,
    justifyContent: 'flex-end',
  },

  row: {
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconContainer: {
    marginTop: 16,
    height: 64,
    width: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    color: '#ffffff',
  },

  itemContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: W / 2 - 40,
    height: W / 2 - 30,
    backgroundColor: '#282B47',
    borderRadius: 24,
  },

  textContainer: {
    paddingVertical: 12,
  },

  text: {fontWeight: '700'},
});
