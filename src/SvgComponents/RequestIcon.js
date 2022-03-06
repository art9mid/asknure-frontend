import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function RequestIcon({ color = '#212121' }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12C5 13.1046 5.89543 14 7 14Z"
        fill={color} />
      <Path
        d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
        fill={color} />
      <Path
        d="M17 14C18.1046 14 19 13.1046 19 12C19 10.8954 18.1046 10 17 10C15.8954 10 15 10.8954 15 12C15 13.1046 15.8954 14 17 14Z"
        fill={color} />
      <Path fillRule="evenodd" clipRule="evenodd"
        d="M1.00002 12C1.00002 5.92487 5.92489 1 12 1C18.0752 1 23 5.92487 23 12C23 18.0751 18.0752 23 12 23C10.0767 23 8.26635 22.5056 6.69169 21.6365L2.28737 22.9578C1.935 23.0635 1.55304 22.9672 1.29291 22.707C1.03278 22.4469 0.936488 22.065 1.0422 21.7126L2.36351 17.3083C1.49443 15.7337 1.00002 13.9233 1.00002 12ZM12 3C7.02946 3 3.00002 7.02944 3.00002 12C3.00002 13.7088 3.4753 15.3036 4.30036 16.6628C4.44729 16.9048 4.48472 17.1978 4.40335 17.469L3.4915 20.5085L6.53098 19.5967C6.80219 19.5153 7.09518 19.5527 7.33723 19.6997C8.6964 20.5247 10.2912 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
        fill={color} />
    </Svg>
  );
}
