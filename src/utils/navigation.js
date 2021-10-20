import React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function getNavigation(name, params) {
  return navigationRef.current;
}
