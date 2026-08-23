/* ==========================================
   CIRCLE HEALTH
   AUTHENTICATION
   Supabase Auth
   ========================================== */

const SUPABASE_URL =
    "https://nkgyoixxwweghklemtut.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable__HrEEcznU83KyZYmovtOow_qINbm_fq";


const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* ==========================================
   CIRCLE URL
   ========================================== */

const CIRCLE_HOME_URL =
    "https://jemele2000-beep.github.io/circle-health/home.html";


/* ==========================================
   LANGUAGE
   ========================================== */

let language =
    localStorage.getItem("circleLanguage") || "en";


const translations = {

    en: {

        subtitle:
            "Understand your patterns.",

        signIn:
            "Sign In",

        createAccount:
            "Create Account",

        email:
            "Email",

        password:
            "Password",

        firstName:
            "First Name",

        signingIn:
            "Signing in...",

        creating:
            "Creating account...",

        loginSuccess:
            "Login successful. Welcome back!",

        signupSuccess:
            "Account created successfully!",

        checkEmail:
            "Please check your email to confirm your account.",

        invalidLogin:
            "Invalid email or password.",

        emailExists:
            "An account with this email may already exist.",

        passwordShort:
            "Password must be at least 6 characters.",

        required:
            "Please fill in all fields.",

        networkError:
            "Something went wrong. Please try again.",

        back:
            "← Back to Circle",

        arabic:
            "العربية",

        english:
            "English"

    },


    ar: {

        subtitle:
            "افهم أنماط حياتك الصحية.",

        signIn:
            "تسجيل الدخول",

        createAccount:
            "إنشاء حساب",

        email:
            "البريد الإلكتروني",

        password:
            "كلمة المرور",

        firstName:
            "الاسم الأول",

        signingIn:
            "جارٍ تسجيل الدخول...",

        creating:
            "جارٍ إنشاء الحساب...",

        loginSuccess:
            "تم تسجيل الدخول بنجاح. مرحبًا بعودتك!",

        signupSuccess:
            "تم إنشاء الحساب بنجاح!",

        checkEmail:
            "يرجى التحقق من بريدك الإلكتروني لتأكيد الحساب.",

        invalidLogin:
            "البريد الإلكتروني أو كلمة المرور غير صحيحة.",

        emailExists:
            "قد يكون هناك حساب موجود بهذا البريد الإلكتروني.",

        passwordShort:
            "يجب أن تكون كلمة المرور 6 أحرف على الأقل.",

        required:
            "يرجى ملء جميع الحقول.",

        networkError:
            "حدث خطأ. يرجى المحاولة مرة أخرى.",

        back:
            "→ العودة إلى Circle",

        arabic:
            "العربية",

        english:
            "English"

    }

};


/* ==========================================
   TRANSLATION FUNCTION
   ========================================== */

function t(key) {

    return translations[language][key];

}


/* ==========================================
   ELEMENTS
   ========================================== */

const loginTab =
    document.getElementById("loginTab");

const signupTab =
    document.getElementById("signupTab");

const loginForm =
    document.getElementById("loginForm");

const signupForm =
    document.getElementById("signupForm");

const authMessage =
    document.getElementById("authMessage");

const authLanguage =
    document.getElementById("authLanguage");


/* ==========================================
   SHOW MESSAGE
   ========================================== */

function showMessage(message, type) {

    authMessage.textContent =
        message;

    authMessage.className =
        "auth-message " + type;

}


/* ==========================================
   CLEAR MESSAGE
   ========================================== */

function clearMessage() {

    authMessage.textContent =
        "";

    authMessage.className =
        "auth-message";

}


/* ==========================================
   LOGIN TAB
   ========================================== */

loginTab.addEventListener(
    "click",
    function () {

        loginTab.classList.add("active");

        signupTab.classList.remove("active");

        loginForm.classList.add("active");

        signupForm.classList.remove("active");

        clearMessage();

    }
);


/* ==========================================
   SIGNUP TAB
   ========================================== */

signupTab.addEventListener(
    "click",
    function () {

        signupTab.classList.add("active");

        loginTab.classList.remove("active");

        signupForm.classList.add("active");

        loginForm.classList.remove("active");

        clearMessage();

    }
);


/* ==========================================
   LOGIN
   ========================================== */

loginForm.addEventListener(
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


        if (
            !email ||
            !password
        ) {

            showMessage(
                t("required"),
                "error"
            );

            return;

        }


        const button =
            document.getElementById(
                "loginSubmit"
            );


        button.disabled =
            true;

        button.textContent =
            t("signingIn");


        try {

            const {
                data,
                error
            } =
                await supabaseClient.auth
                    .signInWithPassword({

                        email:
                            email,

                        password:
                            password

                    });


            if (error) {

                console.error(
                    "Login error:",
                    error
                );


                showMessage(
                    getAuthErrorMessage(error),
                    "error"
                );

                return;

            }


            if (
                data &&
                data.user
            ) {

                showMessage(
                    t("loginSuccess"),
                    "success"
                );


                setTimeout(
                    function () {

                        window.location.href =
                            CIRCLE_HOME_URL;

                    },
                    700
                );

            }


        }

        catch (error) {

            console.error(
                "Login exception:",
                error
            );


            showMessage(
                t("networkError"),
                "error"
            );

        }

        finally {

            button.disabled =
                false;

            button.textContent =
                t("signIn");

        }

    }
);


/* ==========================================
   SIGN UP
   ========================================== */

signupForm.addEventListener(
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


        if (
            !name ||
            !email ||
            !password
        ) {

            showMessage(
                t("required"),
                "error"
            );

            return;

        }


        if (
            password.length < 6
        ) {

            showMessage(
                t("passwordShort"),
                "error"
            );

            return;

        }


        const button =
            document.getElementById(
                "signupSubmit"
            );


        button.disabled =
            true;

        button.textContent =
            t("creating");


        try {

            const {
                data,
                error
            } =
                await supabaseClient.auth
                    .signUp({

                        email:
                            email,

                        password:
                            password,

                        options: {

                            /*
                             * IMPORTANT:
                             * After email confirmation,
                             * Supabase will return the user
                             * to the Circle Home page.
                             */

                            emailRedirectTo:
                                CIRCLE_HOME_URL,


                            data: {

                                first_name:
                                    name

                            }

                        }

                    });


            if (error) {

                console.error(
                    "Signup error:",
                    error
                );


                showMessage(
                    getAuthErrorMessage(error),
                    "error"
                );

                return;

            }


            /*
             * Email confirmation disabled
             */

            if (
                data &&
                data.session
            ) {

                showMessage(
                    t("signupSuccess"),
                    "success"
                );


                setTimeout(
                    function () {

                        window.location.href =
                            CIRCLE_HOME_URL;

                    },
                    900
                );

            }


            /*
             * Email confirmation enabled
             */

            else {

                showMessage(
                    t("checkEmail"),
                    "success"
                );

            }


        }

        catch (error) {

            console.error(
                "Signup exception:",
                error
            );


            showMessage(
                t("networkError"),
                "error"
            );

        }

        finally {

            button.disabled =
                false;

            button.textContent =
                t("createAccount");

        }

    }
);


/* ==========================================
   AUTH ERROR TRANSLATION
   ========================================== */

function getAuthErrorMessage(error) {

    const message =
        (
            error.message ||
            ""
        ).toLowerCase();


    if (
        message.includes(
            "invalid login credentials"
        )
    ) {

        return t("invalidLogin");

    }


    if (
        message.includes(
            "email not confirmed"
        )
    ) {

        return t("checkEmail");

    }


    if (
        message.includes(
            "already registered"
        ) ||
        message.includes(
            "already exists"
        )
    ) {

        return t("emailExists");

    }


    if (
        message.includes(
            "password"
        ) &&
        message.includes(
            "6"
        )
    ) {

        return t("passwordShort");

    }


    return (
        error.message ||
        t("networkError")
    );

}


/* ==========================================
   LANGUAGE
   ========================================== */

function applyLanguage() {

    document.documentElement.lang =
        language;


    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    document.getElementById(
        "authSubtitle"
    ).textContent =
        t("subtitle");


    document.getElementById(
        "loginTab"
    ).textContent =
        t("signIn");


    document.getElementById(
        "signupTab"
    ).textContent =
        t("createAccount");


    document.getElementById(
        "loginEmailLabel"
    ).textContent =
        t("email");


    document.getElementById(
        "loginPasswordLabel"
    ).textContent =
        t("password");


    document.getElementById(
        "nameLabel"
    ).textContent =
        t("firstName");


    document.getElementById(
        "signupEmailLabel"
    ).textContent =
        t("email");


    document.getElementById(
        "signupPasswordLabel"
    ).textContent =
        t("password");


    document.getElementById(
        "loginSubmit"
    ).textContent =
        t("signIn");


    document.getElementById(
        "signupSubmit"
    ).textContent =
        t("createAccount");


    document.getElementById(
        "backHome"
    ).textContent =
        t("back");


    authLanguage.textContent =
        language === "ar"
            ? t("english")
            : t("arabic");

}


/* ==========================================
   LANGUAGE BUTTON
   ========================================== */

authLanguage.addEventListener(
    "click",
    function () {

        language =
            language === "en"
                ? "ar"
                : "en";


        localStorage.setItem(
            "circleLanguage",
            language
        );


        applyLanguage();

    }
);


/* ==========================================
   CHECK EXISTING SESSION
   ========================================== */

async function checkExistingSession() {

    try {

        const {
            data,
            error
        } =
            await supabaseClient.auth
                .getSession();


        if (error) {

            console.error(
                "Session error:",
                error
            );

            return;

        }


        if (
            data &&
            data.session
        ) {

            /*
             * User is already logged in.
             */

            window.location.href =
                CIRCLE_HOME_URL;

        }

    }

    catch (error) {

        console.error(
            "Session exception:",
            error
        );

    }

}


/* ==========================================
   INITIALIZE
   ========================================== */

applyLanguage();

checkExistingSession();
