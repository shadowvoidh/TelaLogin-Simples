/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  Leave it alone, that's art.(@shadow_voidh)
////////////////////////////////////////////*/

/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Lucide
////////////////////////////////////////////*/
lucide.createIcons();


/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
LOGIN COM ANIMAÇÃO DE LOADING
////////////////////////////////////////////*/
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput'); // ajuste o ID se o seu for diferente
const passwordInput = document.getElementById('passwordInput'); // ajuste o ID se o seu for diferente
const emailError = document.getElementById('emailError');

const btnLogin = document.getElementById('btnLogin');
const btnText = document.getElementById('btnText');
const btnSpinner = document.getElementById('btnSpinner');
const toast = document.getElementById('toast');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (emailInput) emailInput.classList.remove('input-error');
    if (emailError) emailError.textContent = '';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    // --- VALIDAÇÃO DO E-MAIL ---
    if (!emailInput || !emailInput.value.trim()) {
      showError('Por favor, informe seu e-mail.');
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      showError('Insira um endereço de e-mail válido.');
      isValid = false;
    }

    // --- VALIDAÇÃO DA SENHA ---
    if (!passwordInput || !passwordInput.value.trim()) {
      // Se tiver uma span de erro pra senha, pode usar aqui, ou focar no campo
      if (passwordInput) passwordInput.classList.add('input-error');
      isValid = false;
    }

    if (!isValid) {
      return; 
    }
    

    if (btnLogin) btnLogin.disabled = true;
    if (btnText) btnText.classList.add('hidden');
    if (btnSpinner) btnSpinner.classList.remove('hidden');


    if (toast) toast.classList.add('show');


    setTimeout(() => {
      window.location.href = 'dashboard/dashboard.html';
    }, 1500);
  });
}

function showError(message) {
  if (emailInput) {
    emailInput.classList.add('input-error');
    emailInput.focus();
  }
  if (emailError) {
    emailError.textContent = message;
  }
}
/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Sair do Dashboard
////////////////////////////////////////////*/
const btnLogout = document.getElementById('btnLogout');

if (btnLogout) {
  btnLogout.addEventListener('click', () => {
    window.location.href = '../index.html';
  });
}


