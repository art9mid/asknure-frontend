import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function UpArrowIcon({ size, color = '#fff' }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
      <Path d="M6 14V2M6 2L11 7M6 2L1 7" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
}
