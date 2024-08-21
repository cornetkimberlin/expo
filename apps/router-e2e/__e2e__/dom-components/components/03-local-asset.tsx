'use dom';

import { Image } from 'react-native';

export default function Page(props: import('expo/dom').DOMProps) {
  return <Image source={require('../../../assets/icon.png')} style={{ width: 64, height: 64 }} />;
}
