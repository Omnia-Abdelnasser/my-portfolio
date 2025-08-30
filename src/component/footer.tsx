const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Left Side */}
        <p className="sm:text-md text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="text-pink-500">Omnyia Abdelnasser</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
