/* ==========================================
   CIRCLE HEALTH
   SUPABASE AUTHENTICATION
   ========================================== */

const SUPABASE_URL =
    "https://nkgyoixxwweghklemtut.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable__HrEEcznU83KyZYmovtOow_qINbm_fq";


/* ==========================================
   INITIALIZE SUPABASE
   ========================================== */

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* ==========================================
   LANGUAGE
   ========================================== */

let authLanguage =
    localStorage.getItem("circleLanguage") || "en";


const authTranslations = {

    en: {

        subtitle:
            "Understand your patterns.",

        signIn:
            "Sign In",

        createAccount:
            "Create Account",

        firstName:
            "First Name",

        email:
            "Email",

        password:
            "Password",

        signInButton:
            "Sign In",

        createButton:
            "Create Account",

        back:
            "← Back to Circle",

        language:
            "العربية",

        loginSuccess:
            "Signed in successfully.",

        signupSuccess:
            "Account created successfully.",

        checkEmail:
            "Please check your email to confirm your account.",

        invalidLogin:
            "Email or password is incorrect.",

        emailExists:
            "This email may already be registered.",

        required:
            "Please complete all fields.",

        genericError:
            "Something went wrong. Please try again."

    },


    ar: {

        subtitle:
            "افهم أنماط حياتك.",

        signIn:
            "تسجيل الدخول",

        createAccount:
            "إنشاء حساب",

        firstName:
            "الاسم الأول",

        email:
            "البريد الإلكتروني",

        password:
            "كلمة المرور",

        signInButton:
            "تسجيل الدخول",

        createButton:
            "إنشاء حساب",

        back:
            "→ العودة إلى Circle",

        language:
            "English",

        loginSuccess:
            "تم تسجيل الدخول بنجاح.",

        signupSuccess:
            "تم إنشاء الحساب بنجاح.",

        checkEmail:
            "يرجى التحقق من بريدك الإلكتروني لتأكيد الحساب.",

        invalidLogin:
            "البريد الإلكتروني أو كلمة المرور غير صحيحة.",

        emailExists:
            "قد يكون هذا البريد الإلكتروني مسجلاً بالفعل.",

        required:
            "يرجى إكمال جميع الحقول.",

        genericError:
            "حدث خطأ. يرجى المحاولة مرة أخرى."

    }

};


/* ==========================================
   APPLY LANGUAGE
   ========================================== */

function applyAuthLanguage() {

    const t =
        authTranslations[authLanguage];


    document.documentElement.lang =
        authLanguage;

    document.documentElement.dir =
        authLanguage === "ar"
            ? "rtl"
            : "ltr";


    document.getElementById(
        "authSubtitle"
    ).textContent = t.subtitle;


    document.getElementById(
        "loginTab"
    ).textContent = t.signIn;


    document.getElementById(
        "signupTab"
    ).textContent = t.createAccount;


    document.getElementById(
        "loginEmailLabel"
    ).textContent = t.email;


    document.getElementById(
        "loginPasswordLabel"
    ).textContent = t.password;


    document.getElementById(
        "nameLabel"
    ).textContent = t.firstName;


    document.getElementById(
        "signupEmailLabel"
    ).textContent = t.email;


    document.getElementById(
        "signupPasswordLabel"
    ).textContent = t.password;


    document.getElementById(
        "loginSubmit"
    ).textContent = t.signInButton;


    document.getElementById(
        "signupSubmit"
    ).textContent = t.createButton;


    document.getElementById(
        "backHome"
    ).textContent = t.back;


    document.getElementById(
        "authLanguage"
    ).textContent = t.language;

}


/* ==========================================
   LANGUAGE BUTTON
   ========================================== */

document
    .getElementById("authLanguage")
    .addEventListener("click", function () {

        authLanguage =
            authLanguage === "en"
                ? "ar"
                : "en";


        localStorage.setItem(
            "circleLanguage",
            authLanguage
        );


        applyAuthLanguage();

    });


/* ==========================================
   SHOW MESSAGE
   ========================================== */

function showMessage(
    message,
    type = "error"
) {

    const box =
        document.getElementById(
            "authMessage"
        );


    box.textContent = message;

    box.className =
        "auth-message " + type;


    box.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


/* ==========================================
   CLEAR MESSAGE
   ========================================== */

function clearMessage() {

    const box =
        document.getElementById(
            "authMessage"
        );

    box.textContent = "";

    box.className =
        "auth-message";

}


/* ==========================================
   SWITCH TO LOGIN
   ========================================== */

document
    .getElementById("loginTab")
    .addEventListener("click", function () {

        document
            .getElementById("loginTab")
            .classList.add("active");

        document
            .getElementById("signupTab")
            .classList.remove("active");


        document
            .getElementById("loginForm")
            .classList.add("active");

        document
            .getElementById("signupForm")
            .classList.remove("active");


        clearMessage();

    });


/* ==========================================
   SWITCH TO SIGN UP
   ========================================== */

document
    .getElementById("signupTab")
    .addEventListener("click", function () {

        document
            .getElementById("signupTab")
            .classList.add("active");

        document
            .getElementById("loginTab")
            .classList.remove("active");


        document
            .getElementById("signupForm")
            .classList.add("active");

        document
            .getElementById("loginForm")
            .classList.remove("active");


        clearMessage();

    });


/* ==========================================
   SIGN UP
   ========================================== */

document
    .getElementById("signupForm")
    .addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            clearMessage();


            const name =
                document
                    .getElementById("signupName")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("signupEmail")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("signupPassword")
                    .value;


            const t =
                authTranslations[authLanguage];


            if (
                !name ||
                !email ||
                !password
            ) {

                showMessage(
                    t.required,
                    "error"
                );

                return;
            }


            if (password.length < 6) {

                showMessage(
                    authLanguage === "ar"
                        ? "كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل."
                        : "Password must be at least 6 characters.",
                    "error"
                );

                return;
            }


            const button =
                document.getElementById(
                    "signupSubmit"
                );


            button.disabled = true;

            button.textContent =
                authLanguage === "ar"
                    ? "جارٍ إنشاء الحساب..."
                    : "Creating account...";


            try {

                const {
                    data,
                    error
                } =
                    await supabaseClient.auth.signUp({

                        email: email,

                        password: password,

                        options: {

                            data: {

                                first_name: name,

                                language:
                                    authLanguage

                            }

                        }

                    });


                if (error) {

                    console.error(
                        "Signup error:",
                        error
                    );

                    showMessage(
                        error.message ||
                        t.genericError,
                        "error"
                    );

                    return;
                }


                /*
                 * Supabase may require email confirmation.
                 * If confirmation is disabled, a session
                 * should be returned immediately.
                 */


                if (data.session) {

                    showMessage(
                        t.signupSuccess,
                        "success"
                    );


                    /*
                     * The profile trigger should create
                     * the user's profile automatically.
                     */


                    setTimeout(
                        function () {

                            window.location.href =
                                "home.html";

                        },
                        1200
                    );


                } else {

                    showMessage(
                        t.checkEmail,
                        "success"
                    );

                }


            } catch (error) {

                console.error(error);

                showMessage(
                    t.genericError,
                    "error"
                );

            } finally {

                button.disabled = false;

                button.textContent =
                    t.createButton;

            }

        }
    );


/* ==========================================
   SIGN IN
   ========================================== */

document
    .getElementById("loginForm")
    .addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            clearMessage();


            const email =
                document
                    .getElementById("loginEmail")
                    .value
                    .trim();


            const password =
                document
                    .getElementById("loginPassword")
                    .value;


            const t =
                authTranslations[authLanguage];


            if (!email || !password) {

                showMessage(
                    t.required,
                    "error"
                );

                return;
            }


            const button =
                document.getElementById(
                    "loginSubmit"
                );


            button.disabled = true;

            button.textContent =
                authLanguage === "ar"
                    ? "جارٍ تسجيل الدخول..."
                    : "Signing in...";


            try {

                const {
                    data,
                    error
                } =
                    await supabaseClient.auth
                        .signInWithPassword({

                            email: email,

                            password: password

                        });


                if (error) {

                    console.error(
                        "Login error:",
                        error
                    );


                    showMessage(
                        t.invalidLogin,
                        "error"
                    );

                    return;
                }


                if (data.session) {

                    showMessage(
                        t.loginSuccess,
                        "success"
                    );


                    setTimeout(
                        function () {

                            window.location.href =
                                "home.html";

                        },
                        800
                    );

                }


            } catch (error) {

                console.error(error);

                showMessage(
                    t.genericError,
                    "error"
                );

            } finally {

                button.disabled = false;

                button.textContent =
                    t.signInButton;

            }

        }
    );


/* ==========================================
   CHECK EXISTING SESSION
   ========================================== */

async function checkExistingSession() {

    const {
        data
    } =
        await supabaseClient.auth
            .getSession();


    if (
        data &&
        data.session
    ) {

        /*
         * User is already logged in.
         * We will later redirect to the real
         * Circle Home page.
         */

        console.log(
            "Existing Circle session found."
        );

    }

}


/* ==========================================
   INITIALIZE
   ========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        applyAuthLanguage();

        checkExistingSession();

    }
);
