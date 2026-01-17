import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { MessageCircle } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background overflow-x-hidden">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">
        {children}
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+918827272142"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-white">
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.247 1.408 1.417-5.267-0.316-0.518c-1.318-2.177-2.011-4.688-2.011-7.261 0-7.384 6.003-13.387 13.387-13.387s13.387 6.003 13.387 13.387c0 7.384-6.003 13.387-13.387 13.387zM21.871 18.613c-0.291-0.146-1.722-0.85-1.988-0.947s-0.461-0.146-0.655 0.146c-0.194 0.291-0.752 0.947-0.922 1.141s-0.34 0.218-0.631 0.073c-0.291-0.146-1.229-0.453-2.341-1.445-0.865-0.771-1.449-1.723-1.619-2.014s-0.018-0.448 0.128-0.593c0.131-0.131 0.291-0.34 0.437-0.51s0.194-0.291 0.291-0.485c0.097-0.194 0.049-0.364-0.024-0.51s-0.655-1.579-0.898-2.161c-0.236-0.567-0.476-0.49-0.655-0.499-0.17-0.008-0.364-0.010-0.558-0.010s-0.51 0.073-0.777 0.364c-0.267 0.291-1.020 0.996-1.020 2.429s1.044 2.818 1.189 3.012c0.146 0.194 2.059 3.144 4.989 4.408 0.697 0.301 1.241 0.481 1.666 0.616 0.7 0.218 1.337 0.187 1.841 0.113 0.562-0.084 1.722-0.703 1.964-1.382s0.243-1.262 0.170-1.382c-0.073-0.121-0.267-0.194-0.558-0.34z"/>
        </svg>
      </a>
    </div>
  );
};

export default Layout;
