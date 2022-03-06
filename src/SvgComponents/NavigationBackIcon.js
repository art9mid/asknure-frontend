import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function ProfileTabIcon({ size, color }) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7071 6.29289C16.3166 5.90237 15.6834 5.90237 15.2929 6.29289L7.58579 14L15.2929 21.7071C15.6834 22.0976 16.3166 22.0976 16.7071 21.7071C17.0976 21.3166 17.0976 20.6834 16.7071 20.2929L10.4142 14L16.7071 7.70711C17.0976 7.31658 17.0976 6.68342 16.7071 6.29289Z"
        fill={color}
      />
    </Svg>
  );
}
