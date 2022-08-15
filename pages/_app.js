import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/Theme'
import createEmotionCache from '../src/createEmotionCache';
import { SessionProvider } from "next-auth/react"
import ErrorBoundary from '../components/ErrorBoundary';


// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();
const uniqueKey = 12325324534;

export default function MyApp(props) {
	const { Component, emotionCache =
		clientSideEmotionCache, pageProps: { session, ...pageProps } } = props;

	return (
		// props below is used as the ErrorFallback
		<ErrorBoundary FallbackComponent={props}>
			{/* <ErrorBoundary key={uniqueKey}> //basic */}
			<SessionProvider session={session}>

				<CacheProvider value={emotionCache}>
					<Head>
						<meta name="viewport"
							content="initial-scale=1, width=device-width" />
					</Head>
					<ThemeProvider theme={theme}>

						{/* CssBaseline kickstart an elegant,
				consistent, and simple baseline to
				build upon. */}

						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</CacheProvider>

			</SessionProvider>
		</ErrorBoundary>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
