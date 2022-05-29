import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function CheckIcon({ size = 24, color = '#1D1D1B' }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={`${size}`} height={`${size}`} viewBox={`0 0 ${size} ${size}`}
      fill="none">
      <Path fillRule="evenodd" clipRule="evenodd"
        d="M19.669 6.25671C20.0795 6.62617 20.1128 7.25846 19.7433 7.66897L10.0382 18.4524L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929C4.68342 10.9024 5.31658 10.9024 5.70711 11.2929L9.96181 15.5476L18.2567 6.33104C18.6262 5.92053 19.2585 5.88726 19.669 6.25671Z"
        fill={color} />
    </Svg>
  );
}
