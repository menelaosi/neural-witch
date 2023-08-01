import Link from 'next/link';

const Navigation = () => (
	<nav className='flex justify-around p-4 bg-blue-500 text-white'>
		<Link href='/'>Home</Link>
		<Link href='/tarot'>Tarot</Link>
		<Link href='/astrology'>Astrology</Link>
		<Link href='/blog'>Blog</Link>
		<Link href='/contact'>Book a Reading!</Link>
	</nav>
);

export default Navigation;
