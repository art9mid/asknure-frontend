import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import { ServerError } from '../screens';
import MainStackNavigator from './MainStackNavigator';
import { fetchCategoriesThunk } from '../redux/thunks/categories';
import { LocalizationContext } from '../localization';
import i18n from 'i18n-js';
import moment from 'moment';

const Stack = createStackNavigator();

export function RootNavigator() {
  const dispatch = useDispatch();

  const [serverError, setServerError] = React.useState(false);

  const appLocale = useSelector((store) => store.app.locale);

  const [locale, setLocale] = React.useState(appLocale);

  const localizationContext = React.useMemo(
    () => ({
      t: (scope, options) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    }),
    [locale],
  );

  React.useEffect(() => {
    if (locale === 'ua') {
      moment.lang('uk');
    } else {
      moment.lang('en');
    }
  }, [locale]);

  React.useEffect(() => {
    dispatch(fetchCategoriesThunk()).then(({ success }) => {
      if (!success) {
        setServerError(true);
      }
    }).catch(() => {
      setServerError(true);
    })
  }, []);

  // if (serverError) {
  //   return <ServerError />;
  // }

  return (
    <LocalizationContext.Provider value={localizationContext}>
      <Stack.Navigator initialRouteName={'TabNavigator'}>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainStack"
          component={MainStackNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </LocalizationContext.Provider>
  );
}
