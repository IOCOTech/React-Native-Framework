import {StyleSheet} from 'react-native';

export default class SmartStyle {
  constructor({theme = null}) {
    this.theme = theme;
    this.styles = StyleSheet.create({});
    this.keyWords = [
      'backgroundColor',
      'padding',
      'borderRadius',
      'borderWidth',
      'borderColor',
      'padding',
      'paddingHorizontal',
      'paddingVertical',
      'margin',
      'marginHorizontal',
      'marginVertical',
      'color',
      'fontSize',
      'fontFamily',
      'fontWeight',
      'lineHeight',
      'flex',
      'flexDirection',
      'flexWrap',
      'alignContent',
      'alignItems',
      'alignSelf',
      'justifyContent',
      'width',
      'height',
    ];
  }

  create(key, string) {
    this.styles[key] = {};
    this.loopAndCreate(key, this.splitString(string));
    return this;
  }

  splitString(string) {
    return string.split(' ');
  }

  loopAndCreate(key, array) {
    array.forEach((word, index) => {
      this.keyWords.forEach((keyword) => {
        if (word == keyword) {
          let value = isNaN(array[index - 1])
            ? array[index - 1]
            : Number(array[index - 1]);
          this.styles = {
            ...this.styles,
            [key]: {...this.styles[key], [word]: value},
          };
        }
      });
    });
  }
}
