export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-slate-900 py-6 text-center shadow-inner border-t border-gray-800 mt-20">
      <p className="text-gray-400 text-sm md:text-base tracking-wide hover:text-teal-400 transition-all duration-300">
        &copy; {new Date().getFullYear()} Abdul Kalam. All Rights Reserved.
      </p>
    </footer>
  );
};
