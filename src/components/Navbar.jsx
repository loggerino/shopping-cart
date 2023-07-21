import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className="text-white hover:text-gray-200">Shop</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
