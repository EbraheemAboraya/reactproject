import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

function HomePage() {
    return (
        <div>
            <header>
                <h1>Welcome to My React App!</h1>
            </header>
            <main>
                <p>This is the home page of my React application.</p>
                <p>Click the button below to navigate to another page:</p>
                <Link to="/another-page">
                    <button>Go to Another Page</button>
                </Link>
            </main>
        </div>
    );
}

export default HomePage;
