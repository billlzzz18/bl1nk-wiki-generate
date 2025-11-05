import React from 'react';

const GeneratorLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="generator-layout">
            <header>
                <h1>Generator</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>© 2023 Bl1nk Wiki</p>
            </footer>
        </div>
    );
};

export default GeneratorLayout;