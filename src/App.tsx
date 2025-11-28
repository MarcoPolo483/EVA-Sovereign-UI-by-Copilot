function App() {
    return (
        <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '2rem',
            background: 'linear-gradient(135deg, #0033a0 0%, #0066cc 100%)',
            color: 'white',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            <div style={{ maxWidth: '800px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                    EVA-Sovereign-UI
                </h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.95 }}>
                    A standards-based web components design system for government applications
                </p>
                <div style={{ 
                    background: 'rgba(255, 255, 255, 0.1)', 
                    padding: '2rem', 
                    borderRadius: '8px',
                    marginBottom: '2rem'
                }}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                        This project contains a complete web components library with:
                    </p>
                    <ul style={{ 
                        listStyle: 'none', 
                        padding: 0, 
                        fontSize: '1rem',
                        lineHeight: '2'
                    }}>
                        <li>✓ Framework-agnostic Custom Elements</li>
                        <li>✓ Government of Canada design patterns</li>
                        <li>✓ WCAG 2.1 AA accessibility</li>
                        <li>✓ EN/FR internationalization</li>
                        <li>✓ Multiple sovereign profiles (CA, UK, US)</li>
                        <li>✓ Shadow DOM encapsulation</li>
                    </ul>
                </div>
                <a 
                    href="/apps/demo/" 
                    style={{ 
                        display: 'inline-block',
                        background: 'white',
                        color: '#0033a0',
                        padding: '1rem 2rem',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '1.1rem',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.15s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    View Live Demo →
                </a>
                <div style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.8 }}>
                    <p>Read the full documentation in <code style={{ 
                        background: 'rgba(255, 255, 255, 0.2)', 
                        padding: '0.2rem 0.5rem',
                        borderRadius: '3px'
                    }}>EVA-README.md</code></p>
                </div>
            </div>
        </div>
    )
}

export default App