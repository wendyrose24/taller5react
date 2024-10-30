// src/components/Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 p-4 text-white">
            <nav className="flex justify-between">
                <div className="text-lg font-bold">Mi Navegación</div>
                <div>
                    <a href="#" className="mr-4 hover:underline">Inicio</a>
                    <a href="#" className="hover:underline">Contacto</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;
