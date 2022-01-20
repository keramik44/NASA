import React from 'react';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppLocale } from 'context/locale/AppLocale.enum';
import { AppMessages } from 'i18n/messages';
import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { LocationInfo } from 'ui/locationInfo/LocationInfo';

export const Home = () => {
  const { formatMessage, locale, setLocale } = useLocale();
  const { user } = useAuthState();

  return (
    <>
      <h2>Home</h2>
      <p>
        {formatMessage({ id: AppMessages['home.helloWorld'] })}
        <span style={{ margin: '0 1rem' }}>&#x2190;</span>
        This text is translated using{' '}
        <a href="https://github.com/formatjs/react-intl/blob/master/docs/API.md#formatmessage">
          <code>formatMessage</code>
        </a>{' '}
        function from <a href="https://github.com/formatjs/react-intl">react-intl</a>. Click{' '}
        <button
          style={{ fontSize: 'inherit' }}
          onClick={() => setLocale(locale === AppLocale.pl ? AppLocale.en : AppLocale.pl)}
        >
          here
        </button>{' '}
        to change language.
      </p>
      <p>This is a starter project for TSH React application. Click on navigation links above to learn more.</p>
      <hr />
      <LocationInfo />
      <hr />
      Current logged in user: {user?.username}{' '}
      {user?.username && (
        <>
          Click <Link to={AppRoute.logout}>here</Link> to log out
        </>
      )}
    </>
  );
};
