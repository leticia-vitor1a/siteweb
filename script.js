function openTab(event, tabName) {

    const conteudos = document.getElementsByClassName("conteudo");
    for (let i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = "none";
        conteudos[i].style.opacity = 0;
    }


    const buttons = document.querySelectorAll(".tab button");
    buttons.forEach(btn => btn.classList.remove("active"));

    const abaSelecionada = document.getElementById(tabName);
    abaSelecionada.style.display = "block";
    setTimeout(() => {
        abaSelecionada.style.opacity = 1;
    }, 100);

  
    event.currentTarget.classList.add("active");


    localStorage.setItem("abaAtiva", tabName);

 
    const tabNav = document.querySelector('.tab');
    if (tabName === 'usuario') {
        tabNav.style.display = 'none';
    } else {
        tabNav.style.display = 'block';
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const abaSalva = localStorage.getItem("abaAtiva") || "inicio";
    const btn = Array.from(document.querySelectorAll(".tab button")).find(button => {
        return button.getAttribute("onclick").includes(abaSalva);
    });
    
    const tabNav = document.querySelector('.tab');
    if (abaSalva === 'usuario') {
        tabNav.style.display = 'none';
    }
    
    if (btn) btn.click();

   
    const togglePassword = document.querySelector('.toggle-password');
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const passwordInput = document.getElementById('senha');
            const icon = this.querySelector('i');
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    }
    window.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('form-login');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});
});

function handleLogin(event) {
    event.preventDefault(); 

    const tabNav = document.querySelector('.tab');
    tabNav.style.display = 'block'; 
    
    const btnInicio = document.querySelector('button[onclick*="inicio"]');
    if (btnInicio) {
        btnInicio.click();
    }
    
    document.getElementById('usuario').style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();
    
    const loginButton = event.target.querySelector('.btn-primary');
    loginButton.classList.add('loading'); 
    
    setTimeout(() => {
        loginButton.classList.remove('loading');
        
        const tabNav = document.querySelector('.tab');
        tabNav.style.display = 'block';
        
        const btnInicio = document.querySelector('button[onclick*="inicio"]');
        if (btnInicio) btnInicio.click();
        
        document.getElementById('usuario').style.display = 'none';
    }, 1500); 
}

let slideAtual = 0;
const slides = document.querySelectorAll('.slide');
const indicadores = document.querySelector('.carrossel-indicadores');

slides.forEach((_, index) => {
    const indicador = document.createElement('div');
    indicador.classList.add('carrossel-indicador');
    if (index === 0) indicador.classList.add('ativo');
    indicador.addEventListener('click', () => mostrarSlide(index));
    indicadores.appendChild(indicador);
});

function mostrarSlide(index) {
    slideAtual = index;
    const offset = -slideAtual * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    

    document.querySelectorAll('.carrossel-indicador').forEach((ind, i) => {
        ind.classList.toggle('ativo', i === slideAtual);
    });
}

function moverSlide(direcao) {
    slideAtual += direcao;
    if (slideAtual < 0) slideAtual = slides.length - 1;
    if (slideAtual >= slides.length) slideAtual = 0;
    mostrarSlide(slideAtual);
}


let intervaloCarrossel = setInterval(() => moverSlide(1), 5000);


document.querySelector('.carrossel').addEventListener('mouseenter', () => {
    clearInterval(intervaloCarrossel);
});

document.querySelector('.carrossel').addEventListener('mouseleave', () => {
    intervaloCarrossel = setInterval(() => moverSlide(1), 5000);
});