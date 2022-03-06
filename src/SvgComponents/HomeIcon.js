import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function HomeIcon({ color }) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd"
        d="M12.0337 3.40032C12.3386 3.14186 12.7253 3 13.125 3C13.5247 3 13.9114 3.14186 14.2163 3.40032L22.6537 10.5587C22.8406 10.7171 22.9907 10.9143 23.0937 11.1365C23.1966 11.3588 23.25 11.6008 23.25 11.8457V22.4241C23.25 22.8716 23.0722 23.3008 22.7557 23.6173C22.4393 23.9338 22.0101 24.1116 21.5625 24.1116H15.0938C14.87 24.1116 14.6554 24.0227 14.4971 23.8644C14.3389 23.7062 14.25 23.4916 14.25 23.2678V16.2366H12V23.2678C12 23.4916 11.9111 23.7062 11.7529 23.8644C11.5946 24.0227 11.38 24.1116 11.1562 24.1116H4.6875C4.23995 24.1116 3.81072 23.9338 3.49426 23.6173C3.17779 23.3008 3 22.8716 3 22.4241V11.8457C3 11.3507 3.21825 10.8793 3.59625 10.5587L12.0337 3.40032V3.40032ZM13.125 4.68732L4.6875 11.8457V22.4241H10.3125V15.3928C10.3125 15.169 10.4014 14.9544 10.5596 14.7962C10.7179 14.638 10.9325 14.5491 11.1562 14.5491H15.0938C15.3175 14.5491 15.5321 14.638 15.6904 14.7962C15.8486 14.9544 15.9375 15.169 15.9375 15.3928V22.4241H21.5625V11.8457L13.125 4.68732Z"
        fill={color} />
    </Svg>
  );
}
