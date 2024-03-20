import React from 'react';

const LogoutButton = () => {
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        window.location.href = '/user-login'; // Redireciona para a página de login
    };

    return (
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md">
            Logout
        </button>
    );
};

export default LogoutButton;