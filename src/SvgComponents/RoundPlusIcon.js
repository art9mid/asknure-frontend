import React from 'react';
import Svg, { Circle, Rect } from 'react-native-svg';

export default function RoundPlusIcon({ size, color = '#212121' }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
      <Rect x="7" y="11" width="10" height="2" fill={color} />
      <Rect x="13" y="7" width="10" height="2" transform="rotate(90 13 7)" fill={color} />
    </Svg>
  );
}
