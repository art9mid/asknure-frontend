import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function SearchIcon({ size, color }) {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.125 21 16.078 20.2635 17.6177 19.0319L22.2929 23.7071L23.7071 22.2929L21 19.5858C20.625 19.2107 20.1162 19 19.5858 19H17.6573C19.6963 17.35 21 14.8273 21 12C21 7.02944 16.9706 3 12 3ZM5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z"
        fill={color}
      />
    </Svg>
  );
}
