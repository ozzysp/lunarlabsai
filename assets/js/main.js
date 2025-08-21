// Configuração do formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Adicione aqui a lógica de envio do formulário
    // Por exemplo, usando fetch para enviar para o Formspree
    
    // Feedback visual para o usuário
    const button = this.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Enviando...';
    
    // Restaura o texto original após 2 segundos
    setTimeout(() => {
        button.textContent = originalText;
    }, 2000);
});
