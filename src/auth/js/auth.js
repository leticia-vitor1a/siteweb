// Funções para recuperação de senha
function setupPasswordRecovery() {
    // Formulário de solicitação
    const formRecuperacao = document.getElementById('form-recuperacao');
    if (formRecuperacao) {
        formRecuperacao.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('#email').value;
            
            // Simular envio de código (em produção, usar API)
            console.log('Código enviado para:', email);
            localStorage.setItem('recoveryEmail', email);
            
            // Redirecionar para página de verificação
            window.location.href = 'codigo-verificacao.html';
        });
    }

    // Formulário de verificação de código
    const formCodigo = document.getElementById('form-codigo');
    if (formCodigo) {
        // Auto-focus e navegação entre inputs de código
        const codeInputs = formCodigo.querySelectorAll('.code-inputs input');
        codeInputs.forEach((input, index) => {
            input.addEventListener('input', function() {
                if (this.value.length === 1) {
                    if (index < codeInputs.length - 1) {
                        codeInputs[index + 1].focus();
                    }
                }
            });
            
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && this.value.length === 0) {
                    if (index > 0) {
                        codeInputs[index - 1].focus();
                    }
                }
            });
        });

        // Contador para reenvio de código
        const reenviarBtn = document.getElementById('reenviar-codigo');
        const countdownEl = document.getElementById('countdown');
        if (reenviarBtn && countdownEl) {
            let countdown = 60;
            const timer = setInterval(() => {
                countdown--;
                countdownEl.textContent = `(${countdown})`;
                
                if (countdown <= 0) {
                    clearInterval(timer);
                    countdownEl.style.display = 'none';
                    reenviarBtn.style.pointerEvents = 'auto';
                    reenviarBtn.style.opacity = '1';
                }
            }, 1000);
            
            reenviarBtn.addEventListener('click', function(e) {
                e.preventDefault();
                // Simular reenvio de código
                const email = localStorage.getItem('recoveryEmail');
                console.log('Código reenviado para:', email);
                
                // Resetar contador
                countdown = 60;
                countdownEl.textContent = `(${countdown})`;
                countdownEl.style.display = 'inline-block';
                this.style.pointerEvents = 'none';
                this.style.opacity = '0.5';
            });
        }

        formCodigo.addEventListener('submit', function(e) {
            e.preventDefault();
            // Verificar código (simulação)
            const codeInputs = this.querySelectorAll('.code-inputs input');
            const code = Array.from(codeInputs).map(input => input.value).join('');
            
            if (code.length === 6) {
                console.log('Código verificado:', code);
                window.location.href = 'nova-senha.html';
            } else {
                alert('Por favor, preencha todos os dígitos do código.');
            }
        });
    }

    // Formulário de nova senha
    const formNovaSenha = document.getElementById('form-nova-senha');
    if (formNovaSenha) {
        formNovaSenha.addEventListener('submit', function(e) {
            e.preventDefault();
            const novaSenha = this.querySelector('#nova-senha').value;
            const confirmarSenha = this.querySelector('#confirmar-senha').value;
            
            if (novaSenha !== confirmarSenha) {
                alert('As senhas não coincidem!');
                return;
            }
            
            if (novaSenha.length < 8) {
                alert('A senha deve ter no mínimo 8 caracteres!');
                return;
            }
            
            // Simular alteração de senha (em produção, usar API)
            console.log('Senha alterada com sucesso:', novaSenha);
            localStorage.removeItem('recoveryEmail');
            
            // Mostrar mensagem de sucesso e redirecionar
            alert('Senha alterada com sucesso!');
            window.location.href = 'login.html';
        });
    }
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    setupPasswordRecovery();
    
    // Seu código existente para toggle de senha e validação
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
                this.setAttribute('aria-label', 'Ocultar senha');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
                this.setAttribute('aria-label', 'Mostrar senha');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('input');
            const icon = this.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
                this.setAttribute('aria-label', 'Ocultar senha');
            } else {
                input.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
                this.setAttribute('aria-label', 'Mostrar senha');
            }
        });
    });
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = this.querySelectorAll('input[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--error-color)';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Form is valid - you can add AJAX submission here
                console.log('Form submitted:', this.id);
                // Simulate successful submission
                alert('Formulário enviado com sucesso!');
                this.reset();
            }
        });
    });
});