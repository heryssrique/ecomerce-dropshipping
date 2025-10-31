// Simulação de autenticação
const users = [
    { email: 'cliente@teste.com', password: '123456', name: 'Cliente Teste' }
];

document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert('E-mail ou senha incorretos');
    }
});

document.getElementById('register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    
    if (users.some(u => u.email === email)) {
        alert('E-mail já cadastrado');
        return;
    }
    
    users.push({ email, password, name });
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
});

document.getElementById('logout')?.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
});
