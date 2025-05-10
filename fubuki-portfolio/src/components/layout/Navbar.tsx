import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-fubuki-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-display text-2xl font-bold text-fubuki-primary-blue hover:text-fubuki-dark-blue">
          ManINeedToSleep
        </Link>
        <div className="space-x-4 font-sans">
          <Link href="/#home" className="text-fubuki-text-secondary hover:text-fubuki-primary-blue">Home</Link>
          <Link href="/#about" className="text-fubuki-text-secondary hover:text-fubuki-primary-blue">About</Link>
          <Link href="/#projects" className="text-fubuki-text-secondary hover:text-fubuki-primary-blue">Projects</Link>
          <Link href="/#contact" className="text-fubuki-text-secondary hover:text-fubuki-primary-blue">Contact</Link>
          {/* Dark mode toggle will go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 