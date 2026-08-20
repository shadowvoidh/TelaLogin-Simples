/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  Leave it alone, that's art. (@shadow_voidh)
////////////////////////////////////////////*/

/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Lucide
////////////////////////////////////////////*/
lucide.createIcons();

/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
LOGIN COM ANIMAÇÃO DE LOADING E PHP SUBMIT
////////////////////////////////////////////*/
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
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
      if (passwordInput) passwordInput.classList.add('input-error');
      isValid = false;
    }

    if (!isValid) {
      return; 
    }

    // --- ANIMAÇÃO DE LOADING ---
    if (btnLogin) btnLogin.disabled = true;
    if (btnText) btnText.classList.add('hidden');
    if (btnSpinner) btnSpinner.classList.remove('hidden');

    if (toast) toast.classList.add('show');


    setTimeout(() => {
      loginForm.submit(); 
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
    window.location.href = 'logout.php'; // Redireciona para o PHP destruir a sessão
  });
}
