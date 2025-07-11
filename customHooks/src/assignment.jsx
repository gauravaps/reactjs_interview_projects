import React from "react";

export default function App() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <div className="flex items-center space-x-8">
          <nav className="space-x-6 hidden md:block">
            <a href="#" className="hover:text-orange-500">Home</a>
            <a href="#" className="hover:text-orange-500">Product</a>
            <a href="#" className="hover:text-orange-500">Elements</a>
            <a href="#" className="hover:text-orange-500">Blog</a>
          </nav>
        </div>
        <div className="space-x-4">
          <button className="px-4 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">Login</button>
          <button className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600">Get a Quote</button>
        </div>
      </header>

      {/* Contact Info */}
      <section className="p-4 text-center md:text-left">
        <p>New work city | +1 (111) 99 283 473 | rtfinsurance@gmail.com</p>
      </section>

      {/* Hero Section */}
      <section className="text-center p-8 bg-gray-50">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Making insurance accessible, valuable.</h1>
        <p className="text-lg mb-6">Your protection is our lifetime commitment</p>
        <div className="space-x-4">
          <button className="px-6 py-2 bg-orange-500 text-white hover:bg-orange-600">Explore Products</button>
          <button className="px-6 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">Learn More</button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Why Choose RTF Insurance?</h2>
        <div className="grid gap-6 md:grid-cols-3 text-center">
          <div>
            <h3 className="font-bold mb-2">Expert Guidance</h3>
            <p>Certified professionals providing personalized advice.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">24/7 Support</h3>
            <p>Round-the-clock assistance for your emergencies.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Simplified Process</h3>
            <p>Streamlined from quotes to claims for hassle-free experience.</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">Insurance Products</h2>
        <div className="grid gap-6 md:grid-cols-3 text-center">
          <div className="border p-4">
            <h3 className="font-bold mb-2">Motor Insurance</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white hover:bg-orange-600">Learn More</button>
          </div>
          <div className="border p-4">
            <h3 className="font-bold mb-2">Health Insurance</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white hover:bg-orange-600">Learn More</button>
          </div>
          <div className="border p-4">
            <h3 className="font-bold mb-2">Life Insurance</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white hover:bg-orange-600">Learn More</button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Get Protected?</h2>
        <p className="mb-4">Get a personalized insurance quote in minutes.</p>
        <button className="px-6 py-2 bg-orange-500 text-white hover:bg-orange-600">Get Free Quote</button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-8">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-4">
          <div>
            <h3 className="font-bold mb-2">RTF Care Products</h3>
            <ul>
              <li>Health Insurance</li>
              <li>Home & Digital Care</li>
              <li>Motor Insurance</li>
              <li>Travel Insurance</li>
              <li>Opd & Wellness</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">About Us</h3>
            <ul>
              <li>FAQs</li>
              <li>Blogs</li>
              <li>Careers</li>
              <li>Privacy & Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">RTF Business</h3>
            <ul>
              <li>S.E.M. Insurance</li>
              <li>Employee Benefit</li>
              <li>Office Package</li>
              <li>Liability Insurance</li>
              <li>Engineering Insurance</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Get in Touch</h3>
            <p>Call Us: +1 (555) 123-4567</p>
            <p>Email: info@rtfinsurance.com</p>
            <p>Visit: 123 Insurance Ave</p>
          </div>
        </div>
        <p className="text-center mt-6 text-sm">© 2025 RTF Insurance Brokers Pvt Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}
