/* ==========================================
   CIRCLE HEALTH
   HOME DASHBOARD
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

        language: "العربية",

        signOut: "Sign out",

        wellness: "YOUR DAILY WELLNESS",

        welcome: "Welcome back",

        welcomeWithName: "Welcome back, {name}",

        welcomeDescription:
            "See what your data is telling you today.",

        checkin:
            "+ Complete Today's Check-in",

        editCheckin:
            "Edit Today's Check-in",

        snapshot:
            "Today's Snapshot",

        snapshotSubtitle:
            "Your latest wellness signals.",

        loading:
            "Loading your data...",

        understanding:
            "Today's Understanding",

        understandingTitle:
            "What your data suggests",

        sleep: "Sleep",

        hydration: "Hydration",

        energy: "Energy",

        stress: "Stress",

        mood: "Mood",

        hours: "hours",

        ml: "ml",

        noData:
            "No check-in yet",

        complete:
            "Complete today's check-in to see your snapshot.",

        sleepGood:
            "Good",

        sleepFair:
            "Fair",

        sleepLow:
            "Low",

        sleepPoor:
            "Poor",

        hydrationGood:
            "Good",

        hydrationModerate:
            "Moderate",

        hydrationLow:
            "Low",

        energyHigh:
            "High",

        energyModerate:
            "Moderate",

        energyLow:
            "Low",

        stressLow:
            "Low",

        stressModerate:
            "Moderate",

        stressHigh:
            "High",

        moodVeryGood:
            "Very good",

        moodGood:
            "Good",

        moodOkay:
            "Okay",

        moodLow:
            "Low",

        sleepDetails:
            "Sleep Details",

        sleepProblems:
            "Sleep problems",

        possibleReasons:
            "Possible reasons",

        none:
            "None reported",

        history:
            "Recent History",

        historySubtitle:
            "Your last 7 check-ins.",

        date:
            "Date",

        progress:
            "Your Progress",

        totalDays:
            "Total check-in days",

        streak:
            "Current streak",

        days:
            "days",

        insight:
            "CIRCLE INSIGHT",

        insightNew:
            "Your patterns are building.",

        insightNewText:
            "Keep checking in daily. Circle will need enough data before it can identify meaningful personal patterns.",

        insightSleep:
            "Your sleep and energy may be connected.",

        insightSleepText:
            "Your recent data suggests that your energy may be higher on days when you sleep longer. More check-ins will make the pattern clearer.",

        insightStress:
            "Stress may be affecting your sleep.",

        insightStressText:
            "Your recent data suggests that higher stress and lower sleep quality may occur together. Continue checking in to see if this pattern persists.",

        insightWater:
            "Hydration and energy may be connected.",

        insightWaterText:
            "Your recent check-ins suggest that your energy may be higher on days when your water intake is higher.",

        insightMoodSleep:
            "Your mood may be connected to your sleep.",

        insightMoodSleepText:
            "Your recent data suggests that you tend to report a better mood on days with better sleep quality.",

        insightMoodEnergy:
            "Your mood and energy appear to move together.",

        insightMoodEnergyText:
            "Your recent check-ins suggest that your mood tends to be better on days when your energy is higher.",

        insightMoodStress:
            "Stress may be affecting your mood.",

        insightMoodStressText:
            "Your recent data suggests that your mood may be lower on days when your stress level is higher.",

        insightBalanced:
            "Your signals look relatively balanced.",

        insightBalancedText:
            "Your recent wellness signals look relatively balanced. Keep checking in so Circle can learn more about your personal patterns.",

        private:
            "Your data is private and connected to your Circle account.",

        login:
            "Please sign in again.",

        error:
            "We couldn't load your data. Please try again.",

        veryPoor:
            "Very poor",

        difficulty_falling_asleep:
            "Difficulty falling asleep",

        frequent_waking:
            "Waking up frequently",

        early_waking:
            "Waking up too early",

        light_sleep:
            "Light / non-restorative sleep",

        phone:
            "Phone or screen use",

        noise:
            "Noise",

        heat:
            "Room temperature / heat",

        caffeine:
            "Caffeine",

        pain:
            "Pain or physical discomfort",

        none_sleep:
            "No sleep problem",

        work:
            "Work or study pressure",

        family:
            "Family pressure",

        stress_reason:
            "Stress or anxiety",

        overthinking:
            "Overthinking",

        financial:
            "Financial concerns",

        screens:
            "Phone / screen use",

        schedule:
            "Irregular sleep schedule",

        environment:
            "Sleep environment",

        health:
            "Health problem or pain",

        unknown:
            "I don't know",

        other:
            "Other"

    },


    ar: {

        language: "English",

        signOut:
            "تسجيل الخروج",

        wellness:
            "صحتك اليومية",

        welcome:
            "مرحبًا بعودتك",

        welcomeWithName:
            "مرحبًا بعودتك، {name}",

        welcomeDescription:
            "شاهد ماذا تخبرك بياناتك اليوم.",

        checkin:
            "+ تسجيل اليوم",

        editCheckin:
            "تعديل تسجيل اليوم",

        snapshot:
            "ملخص اليوم",

        snapshotSubtitle:
            "أحدث مؤشرات صحتك اليومية.",

        loading:
            "جارٍ تحميل بياناتك...",

        understanding:
            "فهم يومك",

        understandingTitle:
            "ماذا تخبرنا بياناتك؟",

        sleep:
            "النوم",

        hydration:
            "الماء",

        energy:
            "الطاقة",

        stress:
            "التوتر",

        mood:
            "المزاج",

        hours:
            "ساعات",

        ml:
            "مل",

        noData:
            "لا يوجد تسجيل بعد",

        complete:
            "أكمل تسجيل اليوم لرؤية ملخصك.",

        sleepGood:
            "جيد",

        sleepFair:
            "متوسط",

        sleepLow:
            "منخفض",

        sleepPoor:
            "ضعيف",

        hydrationGood:
            "جيد",

        hydrationModerate:
            "متوسط",

        hydrationLow:
            "منخفض",

        energyHigh:
            "مرتفع",

        energyModerate:
            "متوسط",

        energyLow:
            "منخفض",

        stressLow:
            "منخفض",

        stressModerate:
            "متوسط",

        stressHigh:
            "مرتفع",

        moodVeryGood:
            "جيد جدًا",

        moodGood:
            "جيد",

        moodOkay:
            "مقبول",

        moodLow:
            "منخفض",

        sleepDetails:
            "تفاصيل النوم",

        sleepProblems:
            "مشاكل النوم",

        possibleReasons:
            "الأسباب المحتملة",

        none:
            "لا يوجد",

        history:
            "السجل الأخير",

        historySubtitle:
            "آخر 7 تسجيلات.",

        date:
            "التاريخ",

        progress:
            "تقدمك",

        totalDays:
            "أيام التسجيل",

        streak:
            "التتابع الحالي",

        days:
            "أيام",

        insight:
            "استنتاج CIRCLE",

        insightNew:
            "بياناتك بدأت في تكوين نمط.",

        insightNewText:
            "استمر في التسجيل يوميًا. يحتاج Circle إلى بيانات كافية قبل اكتشاف الأنماط الشخصية المهمة.",

        insightSleep:
            "قد يكون هناك ارتباط بين نومك وطاقتك.",

        insightSleepText:
            "تشير بياناتك الأخيرة إلى أن طاقتك قد تكون أعلى في الأيام التي تنام فيها لفترة أطول. المزيد من التسجيلات سيجعل النمط أوضح.",

        insightStress:
            "قد يكون التوتر مؤثرًا على نومك.",

        insightStressText:
            "تشير تسجيلاتك الأخيرة إلى أن التوتر المرتفع وانخفاض جودة النوم قد يحدثان معًا. استمر في التسجيل لمعرفة ما إذا كان النمط مستمرًا.",

        insightWater:
            "قد تكون هناك علاقة بين الماء والطاقة.",

        insightWaterText:
            "تشير تسجيلاتك الأخيرة إلى أن طاقتك قد تكون أعلى في الأيام التي تشرب فيها كمية أكبر من الماء.",

        insightMoodSleep:
            "قد يكون هناك ارتباط بين مزاجك ونومك.",

        insightMoodSleepText:
            "تشير بياناتك الأخيرة إلى أنك تميل إلى تسجيل مزاج أفضل في الأيام التي تكون فيها جودة نومك أفضل.",

        insightMoodEnergy:
            "يبدو أن مزاجك وطاقتك يتحركان معًا.",

        insightMoodEnergyText:
            "تشير تسجيلاتك الأخيرة إلى أن مزاجك يميل إلى أن يكون أفضل في الأيام التي تكون فيها طاقتك أعلى.",

        insightMoodStress:
            "قد يكون التوتر مؤثرًا على مزاجك.",

        insightMoodStressText:
            "تشير بياناتك الأخيرة إلى أن مزاجك قد يكون أقل في الأيام التي يكون فيها مستوى التوتر أعلى.",

        insightBalanced:
            "مؤشراتك تبدو متوازنة نسبيًا.",

        insightBalancedText:
            "تبدو مؤشرات صحتك الأخيرة متوازنة نسبيًا. استمر في التسجيل حتى يتعلم Circle المزيد عن أنماطك الشخصية.",

        private:
            "بياناتك خاصة ومرتبطة بحسابك في Circle.",

        login:
            "يرجى تسجيل الدخول مرة أخرى.",

        error:
            "تعذر تحميل بياناتك. حاول مرة أخرى.",

        veryPoor:
            "ضعيف جدًا",

        difficulty_falling_asleep:
            "صعوبة في النوم",

        frequent_waking:
            "الاستيقاظ عدة مرات",

        early_waking:
            "الاستيقاظ مبكرًا",

        light_sleep:
            "نوم خفيف أو غير مريح",

        phone:
            "استخدام الهاتف أو الشاشات",

        noise:
            "الضوضاء",

        heat:
            "حرارة الغرفة",

        caffeine:
            "الكافيين",

        pain:
            "ألم أو شعور بعدم الراحة",

        none_sleep:
            "لا توجد مشكلة في النوم",

        work:
            "ضغوط العمل أو الدراسة",

        family:
            "ضغوط أسرية",

        stress_reason:
            "التوتر أو القلق",

        overthinking:
            "التفكير الزائد",

        financial:
            "ضغوط مالية",

        screens:
            "الهاتف أو الشاشات",

        schedule:
            "عدم انتظام مواعيد النوم",

        environment:
            "بيئة النوم",

        health:
            "مشكلة صحية أو ألم",

        unknown:
            "لا أعرف",

        other:
            "سبب آخر"

    }

};


/* ==========================================
   TRANSLATION
========================================== */

function t(key) {

    return (
        translations[language][key] ||
        key
    );

}


/* ==========================================
   TODAY
========================================== */

function getTodayDate() {

    const now =
        new Date();

    const year =
        now.getFullYear();

    const month =
        String(
            now.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            now.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


/* ==========================================
   FORMAT DATE
========================================== */

function formatDate(dateString) {

    const date =
        new Date(
            dateString + "T00:00:00"
        );

    return date.toLocaleDateString(
        language === "ar"
            ? "ar"
            : "en",
        {
            month: "short",
            day: "numeric"
        }
    );

}


/* ==========================================
   APPLY LANGUAGE
========================================== */

function applyLanguage() {

    document.documentElement.lang =
        language;

    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    const languageBtn =
        document.getElementById(
            "languageBtn"
        );

    if (languageBtn) {

        languageBtn.textContent =
            t("language");

    }


    const logoutBtn =
        document.getElementById(
            "logoutBtn"
        );

    if (logoutBtn) {

        logoutBtn.textContent =
            t("signOut");

    }


    setText(
        "welcomeSmall",
        t("wellness")
    );

    setText(
        "welcomeDescription",
        t("welcomeDescription")
    );

    setText(
        "checkinBtn",
        t("checkin")
    );

    setText(
        "snapshotTitle",
        t("snapshot")
    );

    setText(
        "snapshotSubtitle",
        t("snapshotSubtitle")
    );

    setText(
        "analysisSectionTitle",
        t("understanding")
    );

    setText(
        "analysisTitle",
        t("understandingTitle")
    );

    setText(
        "sleepDetailsTitle",
        t("sleepDetails")
    );

    setText(
        "sleepProblemsLabel",
        t("sleepProblems")
    );

    setText(
        "sleepReasonsLabel",
        t("possibleReasons")
    );

    setText(
        "historyTitle",
        t("history")
    );

    setText(
        "historySubtitle",
        t("historySubtitle")
    );

    setText(
        "historyDate",
        t("date")
    );

    setText(
        "statsTitle",
        t("progress")
    );

    setText(
        "totalDaysLabel",
        t("totalDays")
    );

    setText(
        "streakDaysLabel",
        t("streak")
    );

    setText(
        "insightBadge",
        t("insight")
    );

    setText(
        "privacyText",
        t("private")
    );

}


/* ==========================================
   SAFE TEXT SETTER
========================================== */

function setText(id, text) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            text;

    }

}


/* ==========================================
   USER
========================================== */

async function getCurrentUser() {

    const {
        data,
        error
    } =
        await supabaseClient.auth.getUser();


    if (
        error ||
        !data ||
        !data.user
    ) {

        showMessage(
            t("login")
        );

        setTimeout(
            function() {

                window.location.href =
                    "auth.html";

            },
            1200
        );

        return null;

    }


    return data.user;

}


/* ==========================================
   LOAD DATA
========================================== */

async function loadDashboard() {

    const user =
        await getCurrentUser();


    if (!user) {

        return;

    }


    setWelcomeName(user);


    const {
        data,
        error
    } =
        await supabaseClient
            .from("daily_checkins")
            .select("*")
            .eq(
                "user_id",
                user.id
            )
            .order(
                "checkin_date",
                {
                    ascending: false
                }
            )
            .limit(30);


    if (error) {

        console.error(
            "Dashboard error:",
            error
        );

        showMessage(
            t("error")
        );

        return;

    }


    const records =
        data || [];


    const today =
        getTodayDate();


    const todayRecord =
        records.find(
            function(record) {

                return (
                    record.checkin_date ===
                    today
                );

            }
        );


    renderSnapshot(
        todayRecord
    );


    renderAnalysis(
        todayRecord
    );


    renderSleepDetails(
        todayRecord
    );


    renderHistory(
        records.slice(0, 7)
    );


    renderStats(
        records
    );


    renderInsight(
        records
    );


    if (todayRecord) {

        setText(
            "checkinBtn",
            t("editCheckin")
        );

    }

}


/* ==========================================
   WELCOME
========================================== */

function setWelcomeName(user) {

    const name =
        user.user_metadata?.first_name ||
        user.user_metadata?.name ||
        "";


    const element =
        document.getElementById(
            "welcomeTitle"
        );


    if (!element) {

        return;

    }


    if (name) {

        element.textContent =
            t("welcomeWithName")
                .replace(
                    "{name}",
                    name
                );

    } else {

        element.textContent =
            t("welcome");

    }

}


/* ==========================================
   SNAPSHOT
========================================== */

function renderSnapshot(record) {

    const container =
        document.getElementById(
            "snapshotContainer"
        );


    if (!container) {

        return;

    }


    if (!record) {

        container.innerHTML = `

            <div class="empty-card">

                <div class="empty-icon">
                    🌱
                </div>

                <h3>
                    ${escapeHTML(
                        t("noData")
                    )}
                </h3>

                <p>
                    ${escapeHTML(
                        t("complete")
                    )}
                </p>

            </div>

        `;

        return;

    }


    const sleepHours =
        record.sleep_hours;


    const water =
        record.water_ml;


    const energy =
        record.energy_level;


    const stress =
        record.stress_level;


    const mood =
        getMoodValue(record);


    container.innerHTML = `

        <div class="snapshot-grid">

            ${metricCard(
                "😴",
                t("sleep"),
                sleepHours !== null &&
                sleepHours !== undefined
                    ? `${sleepHours} ${t("hours")}`
                    : "--",
                getSleepStatus(record)
            )}

            ${metricCard(
                "💧",
                t("hydration"),
                water !== null &&
                water !== undefined
                    ? `${water} ${t("ml")}`
                    : "--",
                getWaterStatus(water)
            )}

            ${metricCard(
                "⚡",
                t("energy"),
                energy !== null &&
                energy !== undefined
                    ? `${energy}/10`
                    : "--",
                getEnergyStatus(energy)
            )}

            ${metricCard(
                "🧠",
                t("stress"),
                stress !== null &&
                stress !== undefined
                    ? `${stress}/10`
                    : "--",
                getStressStatus(stress)
            )}

            ${mood !== null
                ? metricCard(
                    "😊",
                    t("mood"),
                    getMoodLabel(mood),
                    getMoodStatus(mood)
                )
                : ""
            }

        </div>

    `;

}


/* ==========================================
   METRIC CARD
========================================== */

function metricCard(
    icon,
    name,
    value,
    status
) {

    return `

        <div class="metric-card">

            <div class="metric-icon">
                ${icon}
            </div>

            <div class="metric-name">
                ${escapeHTML(name)}
            </div>

            <div class="metric-value">
                ${escapeHTML(String(value))}
            </div>

            <div class="metric-status">
                ${escapeHTML(status)}
            </div>

        </div>

    `;

}


/* ==========================================
   SLEEP STATUS
========================================== */

function getSleepStatus(record) {

    const hours =
        Number(record.sleep_hours);


    const quality =
        Number(record.sleep_quality);


    if (
        hours >= 7 &&
        quality >= 7
    ) {

        return t("sleepGood");

    }


    if (
        hours >= 6 &&
        quality >= 5
    ) {

        return t("sleepFair");

    }


    if (
        hours < 6 ||
        quality < 5
    ) {

        return t("sleepPoor");

    }


    return t("sleepLow");

}


/* ==========================================
   WATER STATUS
========================================== */

function getWaterStatus(water) {

    const value =
        Number(water);


    if (!water) {

        return t("hydrationLow");

    }


    if (value >= 2000) {

        return t("hydrationGood");

    }


    if (value >= 1200) {

        return t("hydrationModerate");

    }


    return t("hydrationLow");

}


/* ==========================================
   ENERGY STATUS
========================================== */

function getEnergyStatus(value) {

    const number =
        Number(value);


    if (number >= 7) {

        return t("energyHigh");

    }


    if (number >= 4) {

        return t("energyModerate");

    }


    return t("energyLow");

}


/* ==========================================
   STRESS STATUS
========================================== */

function getStressStatus(value) {

    const number =
        Number(value);


    if (number <= 3) {

        return t("stressLow");

    }


    if (number <= 6) {

        return t("stressModerate");

    }


    return t("stressHigh");

}


/* ==========================================
   MOOD
========================================== */

/*
   Supports either:

   mood
   OR
   mood_level

   This makes the dashboard safer if the
   existing database uses one of these names.
*/

function getMoodValue(record) {

    let value =
        record.mood;


    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        value =
            record.mood_level;

    }


    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return null;

    }


    /*
       If mood is already numeric:
       1 = Very good
       2 = Good
       3 = Okay
       4 = Low
    */

    if (
        !isNaN(
            Number(value)
        )
    ) {

        return Number(value);

    }


    /*
       If database stores text values.
    */

    const normalized =
        String(value)
            .toLowerCase()
            .trim();


    const map = {

        "very good": 1,
        "good": 2,
        "okay": 3,
        "low": 4,

        "very_good": 1,
        "verygood": 1,

        "جيد جدًا": 1,
        "جيد": 2,
        "مقبول": 3,
        "منخفض": 4

    };


    return (
        map[normalized] ??
        null
    );

}


/* ==========================================
   MOOD LABEL
========================================== */

function getMoodLabel(value) {

    const number =
        Number(value);


    if (number === 1) {

        return t("moodVeryGood");

    }


    if (number === 2) {

        return t("moodGood");

    }


    if (number === 3) {

        return t("moodOkay");

    }


    if (number === 4) {

        return t("moodLow");

    }


    return "--";

}


/* ==========================================
   MOOD STATUS
========================================== */

function getMoodStatus(value) {

    const number =
        Number(value);


    if (number === 1) {

        return t("moodVeryGood");

    }


    if (number === 2) {

        return t("moodGood");

    }


    if (number === 3) {

        return t("moodOkay");

    }


    return t("moodLow");

}


/* ==========================================
   TODAY ANALYSIS
========================================== */

function renderAnalysis(record) {

    const container =
        document.getElementById(
            "analysisContent"
        );


    if (!container) {

        return;

    }


    if (!record) {

        container.innerHTML = `

            <div class="analysis-item">

                <div class="analysis-label">
                    ${escapeHTML(
                        t("sleep")
                    )}
                </div>

                ${escapeHTML(
                    t("complete")
                )}

            </div>

        `;

        return;

    }


    const items = [];


    const sleepHours =
        Number(record.sleep_hours);


    const quality =
        Number(record.sleep_quality);


    const stress =
        Number(record.stress_level);


    const energy =
        Number(record.energy_level);


    const water =
        Number(record.water_ml);


    const mood =
        getMoodValue(record);


    /* ==========================
       SLEEP
    ========================== */

    if (
        sleepHours < 6
    ) {

        items.push(
            `<div class="analysis-item">
                <div class="analysis-label">
                    ${escapeHTML(t("sleep"))}
                </div>
                Your sleep duration was below 6 hours.
            </div>`
        );

    }
    else if (
        sleepHours >= 7 &&
        quality >= 7
    ) {

        items.push(
            `<div class="analysis-item">
                <div class="analysis-label">
                    ${escapeHTML(t("sleep"))}
                </div>
                Your sleep duration and quality look good today.
            </div>`
        );

    }


    /* ==========================
       STRESS
    ========================== */

    if (
        stress >= 7
    ) {

        items.push(
            `<div class="analysis-item">
                <div class="analysis-label">
                    ${escapeHTML(t("stress"))}
                </div>
                Your stress level is high today.
            </div>`
        );

    }


    /* ==========================
       ENERGY
    ========================== */

    if (
        energy <= 3
    ) {

        items.push(
            `<div class="analysis-item">
                <div class="analysis-label">
                    ${escapeHTML(t("energy"))}
                </div>
                Your energy level is low today.
            </div>`
        );

    }


    /* ==========================
       HYDRATION
    ========================== */

    if (
        water < 1200
    ) {

        items.push(
            `<div class="analysis-item">
                <div class="analysis-label">
                    ${escapeHTML(t("hydration"))}
                </div>
                Your recorded water intake is relatively low today.
            </div>`
        );

    }


    /* ==========================
       MOOD
    ========================== */

    if (
        mood === 4
    ) {

        items.push(
            `<div class="analysis-item">
                <div class="analysis-label">
                    ${escapeHTML(t("mood"))}
                </div>
                Your mood is low today. Circle will continue watching your other signals for possible patterns.
            </div>`
        );

    }


    /* ==========================
       DEFAULT
    ========================== */

    if (
        items.length === 0
    ) {

        items.push(
            `<div class="analysis-item">
                Your signals look relatively balanced today.
                Keep checking in so Circle can learn your personal patterns.
            </div>`
        );

    }


    container.innerHTML =
        items.join("");

}


/* ==========================================
   SLEEP DETAILS
========================================== */

function renderSleepDetails(record) {

    const problemsContainer =
        document.getElementById(
            "sleepProblemsTags"
        );


    const reasonsContainer =
        document.getElementById(
            "sleepReasonsTags"
        );


    if (
        !problemsContainer ||
        !reasonsContainer
    ) {

        return;

    }


    if (!record) {

        problemsContainer.innerHTML =
            `<span class="tag empty">
                ${escapeHTML(t("none"))}
            </span>`;

        reasonsContainer.innerHTML =
            `<span class="tag empty">
                ${escapeHTML(t("none"))}
            </span>`;

        return;

    }


    const problems =
        Array.isArray(
            record.sleep_problems
        )
            ? record.sleep_problems
            : [];


    const reasons =
        Array.isArray(
            record.sleep_reasons
        )
            ? record.sleep_reasons
            : [];


    problemsContainer.innerHTML =
        problems.length
            ? problems
                .map(
                    function(item) {

                        return `
                            <span class="tag">
                                ${escapeHTML(
                                    translateProblem(item)
                                )}
                            </span>
                        `;

                    }
                )
                .join("")
            : `
                <span class="tag empty">
                    ${escapeHTML(
                        t("none")
                    )}
                </span>
            `;


    reasonsContainer.innerHTML =
        reasons.length
            ? reasons
                .map(
                    function(item) {

                        return `
                            <span class="tag">
                                ${escapeHTML(
                                    translateReason(item)
                                )}
                            </span>
                        `;

                    }
                )
                .join("")
            : `
                <span class="tag empty">
                    ${escapeHTML(
                        t("none")
                    )}
                </span>
            `;

}


/* ==========================================
   TRANSLATE PROBLEMS
========================================== */

function translateProblem(value) {

    const map = {

        difficulty_falling_asleep:
            "difficulty_falling_asleep",

        frequent_waking:
            "frequent_waking",

        early_waking:
            "early_waking",

        light_sleep:
            "light_sleep",

        phone:
            "phone",

        noise:
            "noise",

        heat:
            "heat",

        caffeine:
            "caffeine",

        pain:
            "pain",

        none:
            "none_sleep"

    };


    return t(
        map[value] || value
    );

}


/* ==========================================
   TRANSLATE REASONS
========================================== */

function translateReason(value) {

    const map = {

        work:
            "work",

        family:
            "family",

        stress:
            "stress_reason",

        overthinking:
            "overthinking",

        financial:
            "financial",

        screens:
            "screens",

        schedule:
            "schedule",

        environment:
            "environment",

        health:
            "health",

        unknown:
            "unknown",

        other:
            "other"

    };


    return t(
        map[value] || value
    );

}


/* ==========================================
   HISTORY
========================================== */

function renderHistory(records) {

    const container =
        document.getElementById(
            "historyRows"
        );


    if (!container) {

        return;

    }


    if (!records.length) {

        container.innerHTML = `

            <div class="loading">
                ${escapeHTML(
                    t("complete")
                )}
            </div>

        `;

        return;

    }


    container.innerHTML =
        records
            .map(
                function(record) {

                    return `

                        <div class="history-row">

                            <div class="history-date">
                                ${escapeHTML(
                                    formatDate(
                                        record.checkin_date
                                    )
                                )}
                            </div>

                            <div class="history-value">
                                ${
                                    record.sleep_hours ??
                                    "--"
                                }
                            </div>

                            <div class="history-value">
                                ${
                                    record.water_ml ??
                                    "--"
                                }
                            </div>

                            <div class="history-value">
                                ${
                                    record.energy_level ??
                                    "--"
                                }
                            </div>

                            <div class="history-value">
                                ${
                                    record.stress_level ??
                                    "--"
                                }
                            </div>

                        </div>

                    `;

                }
            )
            .join("");

}


/* ==========================================
   STATS
========================================== */

function renderStats(records) {

    const total =
        records.length;


    const totalElement =
        document.getElementById(
            "totalDays"
        );


    if (totalElement) {

        totalElement.textContent =
            total;

    }


    const streak =
        calculateStreak(
            records
        );


    const streakElement =
        document.getElementById(
            "streakDays"
        );


    if (streakElement) {

        streakElement.textContent =
            streak;

    }

}


/* ==========================================
   STREAK
========================================== */

function calculateStreak(records) {

    if (!records.length) {

        return 0;

    }


    const dates =
        new Set(
            records.map(
                function(record) {

                    return record.checkin_date;

                }
            )
        );


    let streak = 0;


    const current =
        new Date();


    current.setHours(
        0,
        0,
        0,
        0
    );


    while (true) {

        const year =
            current.getFullYear();

        const month =
            String(
                current.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                current.getDate()
            ).padStart(2, "0");


        const key =
            `${year}-${month}-${day}`;


        if (!dates.has(key)) {

            break;

        }


        streak++;


        current.setDate(
            current.getDate() - 1
        );

    }


    return streak;

}


/* ==========================================
   PERSONAL INSIGHT ENGINE
========================================== */

function renderInsight(records) {

    const title =
        document.getElementById(
            "insightTitle"
        );


    const text =
        document.getElementById(
            "insightText"
        );


    if (
        !title ||
        !text
    ) {

        return;

    }


    if (
        records.length < 3
    ) {

        title.textContent =
            t("insightNew");


        text.textContent =
            t("insightNewText");

        return;

    }


    /* ======================================
       1. MOOD + SLEEP
    ====================================== */

    const moodSleepData =
        records.filter(
            function(record) {

                const mood =
                    getMoodValue(record);

                return (
                    mood !== null &&
                    record.sleep_quality !== null &&
                    record.sleep_quality !== undefined
                );

            }
        );


    if (
        moodSleepData.length >= 3
    ) {

        const goodSleep =
            moodSleepData.filter(
                function(record) {

                    return Number(
                        record.sleep_quality
                    ) >= 7;

                }
            );


        const poorSleep =
            moodSleepData.filter(
                function(record) {

                    return Number(
                        record.sleep_quality
                    ) < 7;

                }
            );


        if (
            goodSleep.length >= 2 &&
            poorSleep.length >= 1
        ) {

            const goodMood =
                average(
                    goodSleep.map(
                        function(record) {

                            return moodScore(
                                getMoodValue(record)
                            );

                        }
                    )
                );


            const poorMood =
                average(
                    poorSleep.map(
                        function(record) {

                            return moodScore(
                                getMoodValue(record)
                            );

                        }
                    )
                );


            if (
                goodMood >
                poorMood + 0.5
            ) {

                title.textContent =
                    t("insightMoodSleep");


                text.textContent =
                    t("insightMoodSleepText");

                return;

            }

        }

    }


    /* ======================================
       2. MOOD + ENERGY
    ====================================== */

    const moodEnergyData =
        records.filter(
            function(record) {

                const mood =
                    getMoodValue(record);

                return (
                    mood !== null &&
                    record.energy_level !== null &&
                    record.energy_level !== undefined
                );

            }
        );


    if (
        moodEnergyData.length >= 3
    ) {

        const highEnergy =
            moodEnergyData.filter(
                function(record) {

                    return Number(
                        record.energy_level
                    ) >= 7;

                }
            );


        const lowEnergy =
            moodEnergyData.filter(
                function(record) {

                    return Number(
                        record.energy_level
                    ) <= 4;

                }
            );


        if (
            highEnergy.length >= 2 &&
            lowEnergy.length >= 1
        ) {

            const highEnergyMood =
                average(
                    highEnergy.map(
                        function(record) {

                            return moodScore(
                                getMoodValue(record)
                            );

                        }
                    )
                );


            const lowEnergyMood =
                average(
                    lowEnergy.map(
                        function(record) {

                            return moodScore(
                                getMoodValue(record)
                            );

                        }
                    )
                );


            if (
                highEnergyMood >
                lowEnergyMood + 0.5
            ) {

                title.textContent =
                    t("insightMoodEnergy");


                text.textContent =
                    t("insightMoodEnergyText");

                return;

            }

        }

    }


    /* ======================================
       3. MOOD + STRESS
    ====================================== */

    const moodStressData =
        records.filter(
            function(record) {

                const mood =
                    getMoodValue(record);

                return (
                    mood !== null &&
                    record.stress_level !== null &&
                    record.stress_level !== undefined
                );

            }
        );


    if (
        moodStressData.length >= 3
    ) {

        const highStress =
            moodStressData.filter(
                function(record) {

                    return Number(
                        record.stress_level
                    ) >= 7;

                }
            );


        const lowStress =
            moodStressData.filter(
                function(record) {

                    return Number(
                        record.stress_level
                    ) <= 4;

                }
            );


        if (
            highStress.length >= 2 &&
            lowStress.length >= 1
        ) {

            const highStressMood =
                average(
                    highStress.map(
                        function(record) {

                            return moodScore(
                                getMoodValue(record)
                            );

                        }
                    )
                );


            const lowStressMood =
                average(
                    lowStress.map(
                        function(record) {

                            return moodScore(
                                getMoodValue(record)
                            );

                        }
                    )
                );


            if (
                lowStressMood >
                highStressMood + 0.5
            ) {

                title.textContent =
                    t("insightMoodStress");


                text.textContent =
                    t("insightMoodStressText");

                return;

            }

        }

    }


    /* ======================================
       4. SLEEP + ENERGY
    ====================================== */

    const sleepEnergyData =
        records.filter(
            function(record) {

                return (
                    record.sleep_hours !== null &&
                    record.energy_level !== null
                );

            }
        );


    if (
        sleepEnergyData.length >= 3
    ) {

        const highSleep =
            sleepEnergyData.filter(
                function(record) {

                    return Number(
                        record.sleep_hours
                    ) >= 7;

                }
            );


        const lowSleep =
            sleepEnergyData.filter(
                function(record) {

                    return Number(
                        record.sleep_hours
                    ) < 7;

                }
            );


        if (
            highSleep.length >= 2 &&
            lowSleep.length >= 1
        ) {

            const highAverage =
                average(
                    highSleep.map(
                        function(record) {

                            return Number(
                                record.energy_level
                            );

                        }
                    )
                );


            const lowAverage =
                average(
                    lowSleep.map(
                        function(record) {

                            return Number(
                                record.energy_level
                            );

                        }
                    )
                );


            if (
                highAverage >
                lowAverage + 0.7
            ) {

                title.textContent =
                    t("insightSleep");


                text.textContent =
                    t("insightSleepText");

                return;

            }

        }

    }


    /* ======================================
       5. STRESS + SLEEP
    ====================================== */

    const stressSleepData =
        records.filter(
            function(record) {

                return (
                    record.stress_level !== null &&
                    record.sleep_quality !== null
                );

            }
        );


    if (
        stressSleepData.length >= 3
    ) {

        const highStress =
            stressSleepData.filter(
                function(record) {

                    return Number(
                        record.stress_level
                    ) >= 7;

                }
            );


        const lowStress =
            stressSleepData.filter(
                function(record) {

                    return Number(
                        record.stress_level
                    ) <= 4;

                }
            );


        if (
            highStress.length >= 2 &&
            lowStress.length >= 1
        ) {

            const highStressQuality =
                average(
                    highStress.map(
                        function(record) {

                            return Number(
                                record.sleep_quality
                            );

                        }
                    )
                );


            const lowStressQuality =
                average(
                    lowStress.map(
                        function(record) {

                            return Number(
                                record.sleep_quality
                            );

                        }
                    )
                );


            if (
                lowStressQuality >
                highStressQuality + 0.7
            ) {

                title.textContent =
                    t("insightStress");


                text.textContent =
                    t("insightStressText");

                return;

            }

        }

    }


    /* ======================================
       6. WATER + ENERGY
    ====================================== */

    const waterEnergyData =
        records.filter(
            function(record) {

                return (
                    record.water_ml !== null &&
                    record.energy_level !== null
                );

            }
        );


    if (
        waterEnergyData.length >= 3
    ) {

        const highWater =
            waterEnergyData.filter(
                function(record) {

                    return Number(
                        record.water_ml
                    ) >= 2000;

                }
            );


        const lowWater =
            waterEnergyData.filter(
                function(record) {

                    return Number(
                        record.water_ml
                    ) < 1200;

                }
            );


        if (
            highWater.length >= 2 &&
            lowWater.length >= 1
        ) {

            const highWaterEnergy =
                average(
                    highWater.map(
                        function(record) {

                            return Number(
                                record.energy_level
                            );

                        }
                    )
                );


            const lowWaterEnergy =
                average(
                    lowWater.map(
                        function(record) {

                            return Number(
                                record.energy_level
                            );

                        }
                    )
                );


            if (
                highWaterEnergy >
                lowWaterEnergy + 0.7
            ) {

                title.textContent =
                    t("insightWater");


                text.textContent =
                    t("insightWaterText");

                return;

            }

        }

    }


    /* ======================================
       DEFAULT INSIGHT
    ====================================== */

    title.textContent =
        t("insightBalanced");


    text.textContent =
        t("insightBalancedText");

}


/* ==========================================
   MOOD SCORE

   Database:
   1 = Very good
   2 = Good
   3 = Okay
   4 = Low

   Convert it so that:
   higher score = better mood
========================================== */

function moodScore(value) {

    const number =
        Number(value);


    if (number === 1) {

        return 4;

    }


    if (number === 2) {

        return 3;

    }


    if (number === 3) {

        return 2;

    }


    if (number === 4) {

        return 1;

    }


    return 0;

}


/* ==========================================
   AVERAGE
========================================== */

function average(values) {

    if (!values.length) {

        return 0;

    }


    return (
        values.reduce(
            function(sum, value) {

                return sum + value;

            },
            0
        ) /
        values.length
    );

}


/* ==========================================
   MESSAGE
========================================== */

function showMessage(message) {

    const box =
        document.getElementById(
            "message"
        );


    if (!box) {

        return;

    }


    box.textContent =
        message;


    box.className =
        "message error";

}


/* ==========================================
   ESCAPE HTML
========================================== */

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* ==========================================
   BUTTONS
========================================== */

const checkinBtn =
    document.getElementById(
        "checkinBtn"
    );


if (checkinBtn) {

    checkinBtn.addEventListener(
        "click",
        function() {

            window.location.href =
                "checkin.html";

        }
    );

}


const languageBtn =
    document.getElementById(
        "languageBtn"
    );


if (languageBtn) {

    languageBtn.addEventListener(
        "click",
        function() {

            language =
                language === "en"
                    ? "ar"
                    : "en";


            localStorage.setItem(
                "circleLanguage",
                language
            );


            applyLanguage();


            loadDashboard();

        }
    );

}


const logoutBtn =
    document.getElementById(
        "logoutBtn"
    );


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        async function() {

            await supabaseClient
                .auth
                .signOut();


            window.location.href =
                "auth.html";

        }
    );

}


/* ==========================================
   INITIALIZE
========================================== */

async function initialize() {

    applyLanguage();

    await loadDashboard();

}


initialize();
