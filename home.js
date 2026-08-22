/* ==========================================
   CIRCLE HEALTH
   HOME PAGE
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
   LANGUAGE
   ========================================== */

let language =
    localStorage.getItem("circleLanguage") || "en";


const translations = {

    en: {
        morning: "Good morning",
        afternoon: "Good afternoon",
        evening: "Good evening",

        todayTitle: "Your Circle Today",

        todayDescription:
            "Take a moment to check in with yourself.",

        checkin: "Daily Check-in",

        latestData: "Your latest data",

        today: "Today",

        sleep: "Sleep",

        hydration: "Hydration",

        energy: "Energy",

        stress: "Stress",

        hours: "hours",

        ml: "ml",

        latestInsight: "Your latest insight",

        insightLabel: "CIRCLE INSIGHT",

        noDataTitle:
            "Not enough data yet",

        noDataText:
            "Keep recording your daily data. Circle will look for meaningful patterns after you have enough information.",

        home: "Home",

        checkinNav: "Check-in",

        dashboard: "Dashboard",

        settings: "Settings",

        signOut: "Sign out",

        signOutError:
            "Could not sign out. Please try again.",

        sessionError:
            "Your session has expired. Please sign in again."

    },

    ar: {

        morning: "صباح الخير",

        afternoon: "مساء الخير",

        evening: "مساء الخير",

        todayTitle:
            "حلقتك اليوم",

        todayDescription:
            "خذ لحظة لتسجيل حالتك اليوم.",

        checkin:
            "التسجيل اليومي",

        latestData:
            "أحدث بياناتك",

        today:
            "اليوم",

        sleep:
            "النوم",

        hydration:
            "الترطيب",

        energy:
            "الطاقة",

        stress:
            "التوتر",

        hours:
            "ساعات",

        ml:
            "مل",

        latestInsight:
            "أحدث تحليل لك",

        insightLabel:
            "تحليل CIRCLE",

        noDataTitle:
            "لا توجد بيانات كافية بعد",

        noDataText:
            "استمر في تسجيل بياناتك اليومية. سيبحث Circle عن الأنماط المهمة بعد توفر بيانات كافية.",

        home:
            "الرئيسية",

        checkinNav:
            "التسجيل",

        dashboard:
            "الإحصائيات",

        settings:
            "الإعدادات",

        signOut:
            "تسجيل الخروج",

        signOutError:
            "تعذر تسجيل الخروج. حاول مرة أخرى.",

        sessionError:
            "انتهت جلستك. يرجى تسجيل الدخول مرة أخرى."

    }

};


/* ==========================================
   LANGUAGE FUNCTIONS
   ========================================== */

function getText(key) {

    return translations[language][key];

}


function applyLanguage() {

    document.documentElement.lang =
        language;

    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    const t = translations[language];


    document.getElementById(
        "languageBtn"
    ).textContent =
        language === "ar"
            ? "English"
            : "العربية";


    document.getElementById(
        "logoutBtn"
    ).textContent =
        t.signOut;


    document.getElementById(
        "todayTitle"
    ).textContent =
        t.todayTitle;


    document.getElementById(
        "todayDescription"
    ).textContent =
        t.todayDescription;


    document.getElementById(
        "checkinBtn"
    ).textContent =
        t.checkin;


    document.getElementById(
        "metricsTitle"
    ).textContent =
        t.latestData;


    document.getElementById(
        "metricsPeriod"
    ).textContent =
        t.today;


    document.getElementById(
        "sleepLabel"
    ).textContent =
        t.sleep;


    document.getElementById(
        "waterLabel"
    ).textContent =
        t.hydration;


    document.getElementById(
        "energyLabel"
    ).textContent =
        t.energy;


    document.getElementById(
        "stressLabel"
    ).textContent =
        t.stress;


    document.getElementById(
        "sleepUnit"
    ).textContent =
        t.hours;


    document.getElementById(
        "waterUnit"
    ).textContent =
        t.ml;


    document.getElementById(
        "insightTitle"
    ).textContent =
        t.latestInsight;


    document.getElementById(
        "insightLabel"
    ).textContent =
        t.insightLabel;


    document.getElementById(
        "insightHeading"
    ).textContent =
        t.noDataTitle;


    document.getElementById(
        "insightText"
    ).textContent =
        t.noDataText;


    document.getElementById(
        "homeNavText"
    ).textContent =
        t.home;


    document.getElementById(
        "checkinNavText"
    ).textContent =
        t.checkinNav;


    document.getElementById(
        "dashboardNavText"
    ).textContent =
        t.dashboard;


    document.getElementById(
        "settingsNavText"
    ).textContent =
        t.settings;


    updateGreeting();

}


/* ==========================================
   GREETING
   ========================================== */

function updateGreeting() {

    const hour =
        new Date().getHours();


    let greeting;


    if (hour < 12) {

        greeting =
            getText("morning");

    } else if (hour < 18) {

        greeting =
            getText("afternoon");

    } else {

        greeting =
            getText("evening");

    }


    document.getElementById(
        "welcomeLabel"
    ).textContent =
        greeting;

}


/* ==========================================
   GET CURRENT USER
   ========================================== */

async function getCurrentUser() {

    const {
        data,
        error
    } =
        await supabaseClient.auth.getUser();


    if (error || !data.user) {

        window.location.href =
            "auth.html";

        return null;

    }


    return data.user;

}


/* ==========================================
   LOAD USER PROFILE
   ========================================== */

async function loadProfile(user) {

    const {
        data,
        error
    } =
        await supabaseClient
            .from("profiles")
            .select(
                "first_name, language"
            )
            .eq(
                "id",
                user.id
            )
            .maybeSingle();


    if (error) {

        console.error(
            "Profile error:",
            error
        );

        /*
         * If the profile does not exist yet,
         * we temporarily use the Auth metadata.
         */

        const metadata =
            user.user_metadata || {};

        const name =
            metadata.first_name ||
            "Circle";


        document.getElementById(
            "userName"
        ).textContent =
            name;

        return;

    }


    if (data) {

        const name =
            data.first_name ||
            user.user_metadata?.first_name ||
            "Circle";


        document.getElementById(
            "userName"
        ).textContent =
            name;


        /*
         * Keep the user's preferred language.
         */

        if (
            data.language === "ar" ||
            data.language === "en"
        ) {

            language =
                data.language;

            localStorage.setItem(
                "circleLanguage",
                language
            );

            applyLanguage();

        }

    }

}


/* ==========================================
   CHECK IN BUTTON
   ========================================== */

function openCheckin() {

    window.location.href =
        "checkin.html";

}


document
    .getElementById("checkinBtn")
    .addEventListener(
        "click",
        openCheckin
    );


document
    .getElementById("checkinNav")
    .addEventListener(
        "click",
        openCheckin
    );


/* ==========================================
   DASHBOARD
   ========================================== */

document
    .getElementById("dashboardNav")
    .addEventListener(
        "click",
        function () {

            window.location.href =
                "dashboard.html";

        }
    );


/* ==========================================
   SETTINGS
   ========================================== */

document
    .getElementById("settingsNav")
    .addEventListener(
        "click",
        function () {

            window.location.href =
                "settings.html";

        }
    );


/* ==========================================
   LANGUAGE BUTTON
   ========================================== */

document
    .getElementById("languageBtn")
    .addEventListener(
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
   SIGN OUT
   ========================================== */

document
    .getElementById("logoutBtn")
    .addEventListener(
        "click",
        async function () {

            const {
                error
            } =
                await supabaseClient
                    .auth
                    .signOut();


            if (error) {

                alert(
                    getText("signOutError")
                );

                return;

            }


            window.location.href =
                "auth.html";

        }
    );


/* ==========================================
   INITIALIZE HOME
   ========================================== */

async function initializeHome() {

    applyLanguage();


    const user =
        await getCurrentUser();


    if (!user) {

        return;

    }


    await loadProfile(user);

}


initializeHome();
