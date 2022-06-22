import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function RubbishBinIcon({ size = 24, color = '#ea3128' }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox={`0 0 ${size} ${size}`}
      fill="none">
      <Path d="M12 4C11.4477 4 11 4.44772 11 5V6L17 6V5C17 4.44772 16.5523 4 16 4H12Z" fill={color} />
      <Path fillRule="evenodd" clipRule="evenodd"
        d="M6 7L22 7V8C22 8.55228 21.5523 9 21 9L21 20C21 22.2091 19.2091 24 17 24H11C8.79086 24 7 22.2091 7 20L7 9C6.44772 9 6 8.55228 6 8L6 7ZM9 9L19 9V20C19 21.1046 18.1046 22 17 22H11C9.89543 22 9 21.1046 9 20L9 9Z"
        fill={color} />
    </Svg>
  );
}
