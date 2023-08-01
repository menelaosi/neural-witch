import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// eslint-disable-next-line new-cap
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Neural Witch',
	description: 'Created by µ(they/them)',
};

const RootLayout = ({
	children,
}: {
  readonly children: React.ReactNode
}) => (
	<html lang='en'>
		<body className={inter.className}>{children}</body>
	</html>
);

export default RootLayout;
