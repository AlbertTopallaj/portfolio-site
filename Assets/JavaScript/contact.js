document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const status = document.getElementById('contact-status');
    const btn = document.querySelector('.contact-btn');

    const body = {
        name: document.getElementById('name').value,
        company: document.getElementById('company').value,
        city: document.getElementById('city').value,
        email: document.getElementById('mail').value,
        message: document.getElementById('message').value
    };

    btn.disabled = true;
    btn.textContent = 'Skickar...'

    try {
        const response = await fetch('http://localhost:8080/api/visitors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        
        if(response.ok) {
            status.textContent = 'Meddelandet skickades!';
            status.className = 'contact-status success';
            this.reset();
        } else if (response.status === 429) {
            status.textContent = 'För många för förfrågningar, försök igen imorgon';
            status.className = 'contact-status error';
        } else {
            status.textContent = 'Något gick fel, försök igen';
            status.className = 'contact-status error';
        }
    } catch (err) {
        status.textContent = 'Kunde inte ansluta till servern'
        status.className = 'contact-status error';
    } finally {
        btn.disabled = false;
        btn.textContent = 'Skicka'
    }
    
})