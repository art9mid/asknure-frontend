import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function FileIcon({ color = '#212121' }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd"
        d="M3 6C3 3.79086 4.79086 2 7 2H17C19.2091 2 21 3.79086 21 6V15.4142L14.4142 22H7C4.79086 22 3 20.2091 3 18V6ZM7 4C5.89543 4 5 4.89543 5 6V18C5 19.1046 5.89543 20 7 20H13V17C13 15.3431 14.3431 14 16 14H19V6C19 4.89543 18.1046 4 17 4H7Z"
        fill={color} />
      <Path
        d="M7.443 8.409V9.516H8.937V10.299H7.443V12H6.423V7.629H9.237V8.409H7.443ZM10.8414 12H9.82144V7.629H10.8414V12ZM14.3187 11.19V12H11.6847V7.629H12.6987V11.19H14.3187ZM15.8571 8.409V9.429H17.2311V10.179H15.8571V11.22H17.6511V12H14.8371V7.629H17.6511V8.409H15.8571Z"
        fill={color} />
    </Svg>
  );
}
