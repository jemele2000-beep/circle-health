// Circle - Main App

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Navigation to Auth Page
    // =========================

    function openAuth() {
        window.location.href = "auth.html";
    }

    // Sign In button
    const loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            openAuth();
        });
    }

    // Start Your Journey button
    const startBtn = document.getElementById("startBtn");

    if (startBtn) {
        startBtn.addEventListener("click", function () {
            openAuth();
        });
    }

    // CTA button
    const ctaBtn = document.getElementById("ctaBtn");

    if (ctaBtn) {
        ctaBtn.addEventListener("click", function () {
            openAuth();
        });
    }

    // Learn More
    const learnBtn = document.getElementById("learnBtn");

    if (learnBtn) {
        learnBtn.addEventListener("click", function () {

            const section = document.getElementById("howItWorks");

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    }


    // =========================
    // Language Switch
    // =========================

    const languageToggle =
        document.getElementById("languageToggle");

    if (languageToggle) {

        languageToggle.addEventListener("click", function () {

            // Arabic version will be added next
            window.location.href = "index-ar.html";

        });

    }

});
