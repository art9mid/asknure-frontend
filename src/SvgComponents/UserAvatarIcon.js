import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export default function UserAvatarIcon({ color = '#212121' }) {
  return (
    <Svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fillRule="evenodd" clipRule="evenodd"
        d="M20.0002 7.63477C16.5484 7.63477 13.7502 10.433 13.7502 13.8848C13.7502 17.3365 16.5484 20.1348 20.0002 20.1348C23.452 20.1348 26.2502 17.3365 26.2502 13.8848C26.2502 10.433 23.452 7.63477 20.0002 7.63477ZM16.2502 13.8848C16.2502 11.8137 17.9291 10.1348 20.0002 10.1348C22.0713 10.1348 23.7502 11.8137 23.7502 13.8848C23.7502 15.9558 22.0713 17.6348 20.0002 17.6348C17.9291 17.6348 16.2502 15.9558 16.2502 13.8848Z"
        fill={color} />
      <Path fillRule="evenodd" clipRule="evenodd"
        d="M16.5049 22.6348C13.0922 22.6348 10.0883 24.6011 8.6513 27.5242L8.27832 28.2829L8.84362 28.9115C11.5877 31.9629 15.5703 33.8848 20.0002 33.8848C24.5365 33.8848 28.6036 31.8695 31.3523 28.6897L31.8438 28.1211L31.572 27.4203C30.4744 24.5898 27.7302 22.6348 24.5796 22.6348H16.5049ZM20.0002 31.3848C16.6312 31.3848 13.5747 30.0533 11.3256 27.885C12.4574 26.2121 14.3704 25.1348 16.5049 25.1348H24.5796C26.4159 25.1348 28.0473 26.1317 28.9167 27.6452C26.6475 29.9548 23.4914 31.3848 20.0002 31.3848Z"
        fill={color} />
    </Svg>
  );
}
