const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-fubuki-white p-6 text-center text-fubuki-text-secondary border-t border-fubuki-gray mt-12">
      <p className="font-sans">&copy; {currentYear} Bryan Willson Gunawan. All rights reserved.</p>
      <p className="text-sm mt-2 font-flair text-fubuki-primary-blue">
        Konrari~! Thanks for visiting!
      </p>
      {/* Social media links can go here */}
      {/* Consider adding a small Fubuki-themed icon/placeholder */}
    </footer>
  );
};

export default Footer; 