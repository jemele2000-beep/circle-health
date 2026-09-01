/* ==========================================
   CIRCLE
   HOME DASHBOARD
   FINAL VERSION + CIRCLE AI
   ========================================== */


/* ==========================================
   SUPABASE
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


/* ==========================================
   TRANSLATIONS
========================================== */

const translations = {

    en: {

        welcomeSmall:
            "YOUR DAILY WELLNESS",

        welcomeTitle:
            "Welcome back",

        welcomeDescription:
            "See what your data is telling you today.",

        completeCheckin:
            "+ Complete Today's Check-in",

        updateCheckin:
            "✓ Update Today's Check-in",

        snapshotTitle:
            "Today's Snapshot",

        snapshotSubtitle:
            "Your latest wellness signals.",

        understanding:
            "Today's Understanding",

        understandingTitle:
            "What your data suggests",

        sleep:
            "Sleep",

        sleepQuality:
            "Sleep quality",

        water:
            "Water",

        energy:
            "Energy",

        stress:
            "Stress",

        mood:
            "Mood",

        hours:
            "hrs",

        ml:
            "ml",

        veryGood:
            "Very good",

        good:
            "Good",

        okay:
            "Okay",

        low:
            "Low",

        noData:
            "No check-in yet",

        noDataTitle:
            "Your first check-in starts here",

        noDataText:
            "Complete today's check-in and Circle will begin building a picture of your daily wellness patterns.",

        sleepDetails:
            "Sleep Details",

        sleepProblems:
            "Sleep problems",

        possibleReasons:
            "Possible reasons",

        none:
            "None reported",

        noProblems:
            "No sleep problems",

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

        day:
            "day",

        insight:
            "CIRCLE INSIGHT",

        aiInsight:
            "Circle AI",

        aiLoading:
            "Circle AI is analyzing your recent entries...",

        noAiInsight:
            "Circle will generate deeper personal insights as more data becomes available.",

        building:
            "Your patterns are building.",

        buildingText:
            "Keep checking in daily. Circle needs enough data before it can identify meaningful personal patterns.",

        privateData:
            "Your data is private and connected to your Circle account.",

        signOut:
            "Sign out",

        signingOut:
            "Signing out...",

        loginRequired:
            "Please sign in again.",

        loading:
            "Loading your data...",

        unavailable:
            "Unable to load your data. Please try again.",

        today:
            "Today",

        yesterday:
            "Yesterday",

        sleepGood:
            "Your sleep looks fairly good today.",

        sleepLow:
            "Your sleep duration is lower than the usual recommended range.",

        sleepVeryLow:
            "Your sleep duration is quite low today.",

        sleepQualityGood:
            "Your reported sleep quality is good.",

        sleepQualityLow:
            "Your sleep quality was lower today.",

        hydrationGood:
            "Your water intake looks reasonable.",

        hydrationLow:
            "Your water intake appears relatively low.",

        energyGood:
            "Your energy level is looking good.",

        energyLow:
            "Your energy level is lower today.",

        stressLow:
            "Your reported stress level is relatively low.",

        stressHigh:
            "Your stress level is relatively high today.",

        patternSleepStress:
            "Your data suggests that sleep and stress may be connected. Keep tracking both to see whether this pattern continues.",

        patternSleepEnergy:
            "Your sleep and energy may be moving together. More check-ins will help Circle understand this relationship.",

        patternStressEnergy:
            "Higher stress may be affecting your energy. Continue tracking both before drawing conclusions.",

        patternGeneral:
            "Circle is beginning to learn your personal patterns. Keep checking in consistently."

    },


    ar: {

        welcomeSmall:
            "عافيتك اليومية",

        welcomeTitle:
            "مرحبًا بعودتك",

        welcomeDescription:
            "اكتشف ما الذي تخبرك به بياناتك اليوم.",

        completeCheckin:
            "+ سجّل يومك الآن",

        updateCheckin:
            "✓ تحديث تسجيل اليوم",

        snapshotTitle:
            "ملخص اليوم",

        snapshotSubtitle:
            "أحدث مؤشرات عافيتك.",

        understanding:
            "فهم اليوم",

        understandingTitle:
            "ماذا تشير إليه بياناتك",

        sleep:
            "النوم",

        sleepQuality:
            "جودة النوم",

        water:
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

        veryGood:
            "جيد جدًا",

        good:
            "جيد",

        okay:
            "عادي",

        low:
            "منخفض",

        noData:
            "لا يوجد تسجيل",

        noDataTitle:
            "ابدأ بأول تسجيل لك",

        noDataText:
            "أكمل تسجيل اليوم، وسيبدأ Circle في بناء صورة عن أنماط عافيتك اليومية.",

        sleepDetails:
            "تفاصيل النوم",

        sleepProblems:
            "مشاكل النوم",

        possibleReasons:
            "الأسباب المحتملة",

        none:
            "لا يوجد",

        noProblems:
            "لا توجد مشاكل في النوم",

        history:
            "السجل الأخير",

        historySubtitle:
            "آخر 7 تسجيلات يومية.",

        date:
            "التاريخ",

        progress:
            "تقدمك",

        totalDays:
            "إجمالي أيام التسجيل",

        streak:
            "التسجيل المتواصل",

        days:
            "أيام",

        day:
            "يوم",

        insight:
            "إشارة CIRCLE",

        aiInsight:
            "Circle AI",

        aiLoading:
            "يقوم Circle AI بتحليل تسجيلاتك الأخيرة...",

        noAiInsight:
            "سيقدم Circle رؤى شخصية أعمق كلما توفرت بيانات أكثر.",

        building:
            "أنماطك بدأت تتضح.",

        buildingText:
            "استمر في التسجيل يوميًا. يحتاج Circle إلى بيانات كافية قبل أن يتمكن من اكتشاف الأنماط الشخصية المهمة.",

        privateData:
            "بياناتك خاصة ومرتبطة بحسابك في Circle.",

        signOut:
            "تسجيل الخروج",

        signingOut:
            "جارٍ تسجيل الخروج...",

        loginRequired:
            "يرجى تسجيل الدخول مرة أخرى.",

        loading:
            "جارٍ تحميل بياناتك...",

        unavailable:
            "تعذر تحميل بياناتك. حاول مرة أخرى.",

        today:
            "اليوم",

        yesterday:
            "أمس",

        sleepGood:
            "يبدو أن نومك جيد إلى حد ما اليوم.",

        sleepLow:
            "مدة نومك أقل من النطاق الموصى به عادةً.",

        sleepVeryLow:
            "مدة نومك منخفضة جدًا اليوم.",

        sleepQualityGood:
            "جودة نومك المسجلة جيدة.",

        sleepQualityLow:
            "جودة نومك كانت أقل اليوم.",

        hydrationGood:
            "كمية الماء التي سجلتها تبدو جيدة نسبيًا.",

        hydrationLow:
            "كمية الماء التي سجلتها تبدو منخفضة نسبيًا.",

        energyGood:
            "مستوى طاقتك يبدو جيدًا.",

        energyLow:
            "مستوى طاقتك منخفض اليوم.",

        stressLow:
            "مستوى التوتر الذي سجلته منخفض نسبيًا.",

        stressHigh:
            "مستوى التوتر الذي سجلته مرتفع نسبيًا.",

        patternSleepStress:
            "تشير بياناتك إلى أن النوم والتوتر قد يكونان مرتبطين. استمر في تسجيلهما لمعرفة ما إذا كان هذا النمط يتكرر.",

        patternSleepEnergy:
            "قد تكون جودة نومك وطاقة جسمك تتحركان معًا. المزيد من التسجيلات سيساعد Circle على فهم هذه العلاقة.",

        patternStressEnergy:
            "قد يكون ارتفاع التوتر مؤثرًا في مستوى طاقتك. استمر في تسجيل الاثنين قبل استخلاص نتيجة.",

        patternGeneral:
            "بدأ Circle في التعرف على أنماطك الشخصية. استمر في التسجيل بانتظام."

    }

};


/* ==========================================
   TRANSLATION
========================================== */

function t(key) {

    return (
        translations[language] &&
        translations[language][key]
    ) || key;

}


/* ==========================================
   DATE
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
   DATE FORMAT
========================================== */

function formatDate(dateString) {

    if (!dateString) {
        return "";
    }

    const date =
        new Date(
            dateString + "T00:00:00"
        );

    if (
        dateString ===
        getTodayDate()
    ) {

        return t("today");

    }

    const yesterday =
        new Date();

    yesterday.setDate(
        yesterday.getDate() - 1
    );

    const yesterdayString =
        yesterday
            .toISOString()
            .slice(0, 10);

    if (
        dateString ===
        yesterdayString
    ) {

        return t("yesterday");

    }

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
   CURRENT USER
========================================== */

async function getCurrentUser() {

    const {
        data,
        error
    } =
        await supabaseClient
            .auth
            .getUser();

    if (
        error ||
        !data ||
        !data.user
    ) {

        showMessage(
            t("loginRequired"),
            "error"
        );

        setTimeout(
            function() {

                window.location.href =
                    "auth.html";

            },
            1000
        );

        return null;

    }

    return data.user;

}


/* ==========================================
   SHOW MESSAGE
========================================== */

function showMessage(
    message,
    type
) {

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
        "message " + type;

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

    const elements = {

        welcomeSmall:
            "welcomeSmall",

        welcomeTitle:
            "welcomeTitle",

        welcomeDescription:
            "welcomeDescription",

        snapshotTitle:
            "snapshotTitle",

        snapshotSubtitle:
            "snapshotSubtitle",

        analysisSectionTitle:
            "understanding",

        analysisTitle:
            "understandingTitle",

        sleepDetailsTitle:
            "sleepDetails",

        sleepProblemsLabel:
            "sleepProblems",

        sleepReasonsLabel:
            "possibleReasons",

        historyTitle:
            "history",

        historySubtitle:
            "historySubtitle",

        historyDate:
            "date",

        statsTitle:
            "progress",

        totalDaysLabel:
            "totalDays",

        streakDaysLabel:
            "streak",

        insightBadge:
            "insight",

        privacyText:
            "privateData",

        logoutBtn:
            "signOut"

    };

    Object.keys(elements)
        .forEach(
            function(id) {

                const element =
                    document.getElementById(id);

                if (element) {

                    element.textContent =
                        t(elements[id]);

                }

            }
        );

    updateCheckinButton();

    const languageButton =
        document.getElementById(
            "languageBtn"
        );

    if (languageButton) {

        languageButton.textContent =
            language === "ar"
                ? "English"
                : "العربية";

    }

    if (lastCheckinData) {

        renderAll(
            lastCheckinData,
            allCheckins
        );

    }

}


/* ==========================================
   CHECK-IN BUTTON
========================================== */

let todayCheckinExists =
    false;


function updateCheckinButton() {

    const button =
        document.getElementById(
            "checkinBtn"
        );

    if (!button) {
        return;
    }

    button.textContent =
        todayCheckinExists
            ? t("updateCheckin")
            : t("completeCheckin");

}


/* ==========================================
   GLOBAL DATA
========================================== */

let lastCheckinData =
    null;

let allCheckins =
    [];


/* ==========================================
   LOAD CHECK-INS
========================================== */

async function loadCheckins(user) {

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
            );

    if (error) {

        console.error(
            "Load check-ins error:",
            error
        );

        showMessage(
            t("unavailable"),
            "error"
        );

        return [];

    }

    return data || [];

}


/* ==========================================
   SNAPSHOT
========================================== */

function renderSnapshot(data) {

    const container =
        document.getElementById(
            "snapshotContainer"
        );

    if (!container) {
        return;
    }

    if (!data) {

        container.innerHTML = `

            <div class="empty-card">

                <div class="empty-icon">
                    🌱
                </div>

                <h3>
                    ${t("noDataTitle")}
                </h3>

                <p>
                    ${t("noDataText")}
                </p>

            </div>

        `;

        return;

    }

    const sleep =
        data.sleep_hours;

    const quality =
        data.sleep_quality;

    const water =
        data.water_ml;

    const energy =
        data.energy_level;

    const stress =
        data.stress_level;

    const mood =
        getMoodLabel(
            data.mood
        );

    container.innerHTML = `

        <div class="snapshot-grid">

            ${metricCard(
                "😴",
                t("sleep"),
                sleep !== null &&
                sleep !== undefined
                    ? `${sleep} ${t("hours")}`
                    : "—",
                getSleepStatus(
                    sleep
                )
            )}

            ${metricCard(
                "🌙",
                t("sleepQuality"),
                quality !== null &&
                quality !== undefined
                    ? `${quality}/10`
                    : "—",
                getQualityStatus(
                    quality
                )
            )}

            ${metricCard(
                "💧",
                t("water"),
                water !== null &&
                water !== undefined
                    ? `${water} ${t("ml")}`
                    : "—",
                getWaterStatus(
                    water
                )
            )}

            ${metricCard(
                "⚡",
                t("energy"),
                energy !== null &&
                energy !== undefined
                    ? `${energy}/10`
                    : "—",
                getEnergyStatus(
                    energy
                )
            )}

            ${metricCard(
                "🧠",
                t("stress"),
                stress !== null &&
                stress !== undefined
                    ? `${stress}/10`
                    : "—",
                getStressStatus(
                    stress
                )
            )}

        </div>

        <div class="analysis-card">

            <div class="analysis-item">

                <div class="analysis-label">
                    ${t("mood")}
                </div>

                <div>
                    ${mood}
                </div>

            </div>

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
                ${name}
            </div>

            <div class="metric-value">
                ${escapeHtml(
                    String(value)
                )}
            </div>

            <div class="metric-status">
                ${escapeHtml(
                    String(status)
                )}
            </div>

        </div>

    `;

}


/* ==========================================
   STATUS HELPERS
========================================== */

function getSleepStatus(
    value
) {

    if (
        value === null ||
        value === undefined
    ) {

        return "—";

    }

    if (value < 5) {

        return t("sleepVeryLow");

    }

    if (value < 7) {

        return t("sleepLow");

    }

    return t("sleepGood");

}


function getQualityStatus(
    value
) {

    if (
        value === null ||
        value === undefined
    ) {

        return "—";

    }

    return value >= 7
        ? t("sleepQualityGood")
        : t("sleepQualityLow");

}


function getWaterStatus(
    value
) {

    if (
        value === null ||
        value === undefined
    ) {

        return "—";

    }

    return value >= 1500
        ? t("hydrationGood")
        : t("hydrationLow");

}


function getEnergyStatus(
    value
) {

    if (
        value === null ||
        value === undefined
    ) {

        return "—";

    }

    return value >= 7
        ? t("energyGood")
        : t("energyLow");

}


function getStressStatus(
    value
) {

    if (
        value === null ||
        value === undefined
    ) {

        return "—";

    }

    return value <= 4
        ? t("stressLow")
        : t("stressHigh");

}


/* ==========================================
   MOOD
========================================== */

function getMoodLabel(
    mood
) {

    const map = {

        very_good:
            t("veryGood"),

        good:
            t("good"),

        okay:
            t("okay"),

        low:
            t("low")

    };

    return map[mood] || "—";

}


/* ==========================================
   TODAY'S UNDERSTANDING
========================================== */

function renderUnderstanding(
    data,
    history
) {

    const container =
        document.getElementById(
            "analysisContent"
        );

    if (!container) {
        return;
    }

    if (!data) {

        container.innerHTML = `

            <div class="analysis-item">

                ${t("noDataText")}

            </div>

        `;

        return;

    }

    const items = [];

    if (
        data.sleep_hours !== null &&
        data.sleep_hours !== undefined
    ) {

        items.push(
            `<div class="analysis-item">
                <div class="analysis-label">
                    ${t("sleep")}
                </div>
                ${escapeHtml(
                    getSleepStatus(
                        data.sleep_hours
                    )
                )}
            </div>`
        );

    }

    if (
        data.sleep_quality !== null &&
        data.sleep_quality !== undefined
    ) {

        items.push(
            `<div class="analysis-item">
                <div class="analysis-label">
                    ${t("sleepQuality")}
                </div>
                ${escapeHtml(
                    getQualityStatus(
                        data.sleep_quality
                    )
                )}
            </div>`
        );

    }

    if (
        data.energy_level !== null &&
        data.energy_level !== undefined
    ) {

        items.push(
            `<div class="analysis-item">
                <div class="analysis-label">
                    ${t("energy")}
                </div>
                ${escapeHtml(
                    getEnergyStatus(
                        data.energy_level
                    )
                )}
            </div>`
        );

    }

    if (
        data.stress_level !== null &&
        data.stress_level !== undefined
    ) {

        items.push(
            `<div class="analysis-item">
                <div class="analysis-label">
                    ${t("stress")}
                </div>
                ${escapeHtml(
                    getStressStatus(
                        data.stress_level
                    )
                )}
            </div>`
        );

    }

    const pattern =
        detectPattern(
            history
        );

    if (pattern) {

        items.push(
            `<div class="analysis-item">
                <div class="analysis-label">
                    Circle
                </div>
                ${escapeHtml(pattern)}
            </div>`
        );

    }

    if (
        items.length === 0
    ) {

        items.push(
            `<div class="analysis-item">
                ${t("patternGeneral")}
            </div>`
        );

    }

    container.innerHTML =
        items.join("");

}


/* ==========================================
   PATTERN DETECTION
========================================== */

function detectPattern(
    history
) {

    if (
        !history ||
        history.length < 3
    ) {

        return t("patternGeneral");

    }

    const recent =
        history.slice(
            0,
            7
        );

    const withSleepStress =
        recent.filter(
            function(row) {

                return (
                    row.sleep_hours !== null &&
                    row.stress_level !== null
                );

            }
        );

    if (
        withSleepStress.length >= 3
    ) {

        const lowSleepHighStress =
            withSleepStress.filter(
                function(row) {

                    return (
                        Number(row.sleep_hours) < 7 &&
                        Number(row.stress_level) >= 7
                    );

                }
            ).length;

        if (
            lowSleepHighStress >= 2
        ) {

            return t(
                "patternSleepStress"
            );

        }

    }

    const withSleepEnergy =
        recent.filter(
            function(row) {

                return (
                    row.sleep_hours !== null &&
                    row.energy_level !== null
                );

            }
        );

    if (
        withSleepEnergy.length >= 3
    ) {

        const lowSleepLowEnergy =
            withSleepEnergy.filter(
                function(row) {

                    return (
                        Number(row.sleep_hours) < 7 &&
                        Number(row.energy_level) <= 5
                    );

                }
            ).length;

        if (
            lowSleepLowEnergy >= 2
        ) {

            return t(
                "patternSleepEnergy"
            );

        }

    }

    const stressEnergy =
        recent.filter(
            function(row) {

                return (
                    row.stress_level !== null &&
                    row.energy_level !== null
                );

            }
        );

    if (
        stressEnergy.length >= 3
    ) {

        const highStressLowEnergy =
            stressEnergy.filter(
                function(row) {

                    return (
                        Number(row.stress_level) >= 7 &&
                        Number(row.energy_level) <= 5
                    );

                }
            ).length;

        if (
            highStressLowEnergy >= 2
        ) {

            return t(
                "patternStressEnergy"
            );

        }

    }

    return t("patternGeneral");

}


/* ==========================================
   SLEEP DETAILS
========================================== */

function renderSleepDetails(
    data
) {

    const problemsContainer =
        document.getElementById(
            "sleepProblemsTags"
        );

    const reasonsContainer =
        document.getElementById(
            "sleepReasonsTags"
        );

    if (!problemsContainer) {
        return;
    }

    if (!data) {

        problemsContainer.innerHTML =
            emptyTag(
                t("none")
            );

        if (reasonsContainer) {

            reasonsContainer.innerHTML =
                emptyTag(
                    t("none")
                );

        }

        return;

    }

    const problems =
        Array.isArray(
            data.sleep_problems
        )
            ? data.sleep_problems
            : [];

    const reasons =
        Array.isArray(
            data.sleep_reasons
        )
            ? data.sleep_reasons
            : [];

    problemsContainer.innerHTML =
        problems.length
            ? problems
                .map(
                    function(value) {

                        return tag(
                            translateValue(
                                value
                            )
                        );

                    }
                )
                .join("")
            : emptyTag(
                t("noProblems")
            );

    if (reasonsContainer) {

        reasonsContainer.innerHTML =
            reasons.length
                ? reasons
                    .map(
                        function(value) {

                            return tag(
                                translateValue(
                                    value
                                )
                            );

                        }
                    )
                    .join("")
                : emptyTag(
                    t("none")
                );

    }

}


/* ==========================================
   TAG
========================================== */

function tag(
    text
) {

    return `
        <span class="tag">
            ${escapeHtml(text)}
        </span>
    `;

}


function emptyTag(
    text
) {

    return `
        <span class="tag empty">
            ${escapeHtml(text)}
        </span>
    `;

}


/* ==========================================
   TRANSLATE DATABASE VALUES
========================================== */

function translateValue(
    value
) {

    const map = {

        difficulty_falling_asleep:
            language === "ar"
                ? "صعوبة في النوم"
                : "Difficulty falling asleep",

        frequent_waking:
            language === "ar"
                ? "الاستيقاظ أثناء الليل"
                : "Waking up during the night",

        early_waking:
            language === "ar"
                ? "الاستيقاظ مبكرًا"
                : "Waking up too early",

        light_sleep:
            language === "ar"
                ? "نوم خفيف أو غير مريح"
                : "Light / non-restorative sleep",

        daytime_sleepiness:
            language === "ar"
                ? "النعاس أثناء النهار"
                : "Feeling sleepy during the day",

        none:
            language === "ar"
                ? "لا توجد مشاكل"
                : "No sleep problems",

        work:
            language === "ar"
                ? "ضغوط العمل أو الدراسة"
                : "Work or study pressure",

        family:
            language === "ar"
                ? "المسؤوليات الأسرية"
                : "Family responsibilities",

        stress:
            language === "ar"
                ? "التوتر أو القلق"
                : "Stress or anxiety",

        overthinking:
            language === "ar"
                ? "التفكير الزائد"
                : "Overthinking",

        financial:
            language === "ar"
                ? "الضغوط المالية"
                : "Financial concerns",

        screens:
            language === "ar"
                ? "الهاتف أو الشاشات"
                : "Phone or screen use",

        caffeine:
            language === "ar"
                ? "الكافيين"
                : "Caffeine",

        schedule:
            language === "ar"
                ? "عدم انتظام مواعيد النوم"
                : "Irregular sleep schedule",

        noise:
            language === "ar"
                ? "الضوضاء"
                : "Noise",

        environment:
            language === "ar"
                ? "حرارة الغرفة"
                : "Room temperature / heat",

        pain:
            language === "ar"
                ? "ألم أو شعور بعدم الراحة"
                : "Pain or physical discomfort",

        health:
            language === "ar"
                ? "مشكلة صحية"
                : "Health problem",

        other:
            language === "ar"
                ? "شيء آخر"
                : "Something else",

        unknown:
            language === "ar"
                ? "لا أعرف"
                : "I don't know"

    };

    return map[value] || value;

}


/* ==========================================
   HISTORY
========================================== */

function renderHistory(
    history
) {

    const rows =
        document.getElementById(
            "historyRows"
        );

    if (!rows) {
        return;
    }

    if (
        !history ||
        history.length === 0
    ) {

        rows.innerHTML = `

            <div class="loading">
                ${t("noData")}
            </div>

        `;

        return;

    }

    const recent =
        history.slice(
            0,
            7
        );

    rows.innerHTML =
        recent
            .map(
                function(row) {

                    return `

                        <div class="history-row">

                            <div class="history-date">
                                ${escapeHtml(
                                    formatDate(
                                        row.checkin_date
                                    )
                                )}
                            </div>

                            <div class="history-value">
                                ${escapeHtml(
                                    moodEmoji(
                                        row.mood
                                    )
                                )}
                            </div>

                            <div class="history-value">
                                ${valueOrDash(
                                    row.water_ml
                                )}
                            </div>

                            <div class="history-value">
                                ${valueOrDash(
                                    row.energy_level
                                )}
                            </div>

                            <div class="history-value">
                                ${valueOrDash(
                                    row.stress_level
                                )}
                            </div>

                            <div class="history-value">
                                ${valueOrDash(
                                    row.sleep_quality
                                )}
                            </div>

                        </div>

                    `;

                }
            )
            .join("");

}


/* ==========================================
   MOOD EMOJI
========================================== */

function moodEmoji(
    mood
) {

    const map = {

        very_good:
            "😄",

        good:
            "🙂",

        okay:
            "😐",

        low:
            "😔"

    };

    return map[mood] || "—";

}


/* ==========================================
   VALUE
========================================== */

function valueOrDash(
    value
) {

    return (
        value === null ||
        value === undefined
    )
        ? "—"
        : escapeHtml(
            String(value)
        );

}


/* ==========================================
   PROGRESS
========================================== */

function renderProgress(
    history
) {

    const totalDays =
        document.getElementById(
            "totalDays"
        );

    const streakDays =
        document.getElementById(
            "streakDays"
        );

    if (totalDays) {

        totalDays.textContent =
            history.length;

    }

    if (streakDays) {

        streakDays.textContent =
            calculateStreak(
                history
            );

    }

}


/* ==========================================
   STREAK
========================================== */

function calculateStreak(
    history
) {

    if (
        !history ||
        history.length === 0
    ) {

        return 0;

    }

    const dates =
        new Set(
            history.map(
                function(row) {

                    return row.checkin_date;

                }
            )
        );

    let streak =
        0;

    let current =
        new Date();

    while (true) {

        const date =
            current
                .toISOString()
                .slice(
                    0,
                    10
                );

        if (
            dates.has(date)
        ) {

            streak++;

            current.setDate(
                current.getDate() - 1
            );

        } else {

            break;

        }

    }

    return streak;

}


/* ==========================================
   CIRCLE AI INSIGHT
========================================== */

async function renderInsight(
    data,
    history
) {

    const title =
        document.getElementById(
            "insightTitle"
        );

    const text =
        document.getElementById(
            "insightText"
        );

    if (!title || !text) {
        return;
    }

    if (!data) {

        title.textContent =
            t("building");

        text.textContent =
            t("buildingText");

        return;

    }

    /*
       Show AI loading state
    */

    title.textContent =
        t("aiInsight");

    text.textContent =
        t("aiLoading");


    try {

        /*
           Send recent wellness
           entries to Circle AI.
        */

        const {
            data: aiData,
            error
        } =
            await supabaseClient
                .functions
                .invoke(
                    "circle-ai",
                    {
                        body: {
                            language:
                                language,

                            checkins:
                                history.slice(
                                    0,
                                    30
                                )
                        }
                    }
                );


        if (error) {

            throw error;

        }


        /*
           Crisis response
        */

        if (
            aiData &&
            aiData.crisis === true
        ) {

            title.textContent =
                t("aiInsight");

            text.textContent =
                aiData.insight ||
                t("noAiInsight");

            return;

        }


        /*
           Normal AI response
        */

        if (
            aiData &&
            aiData.success &&
            aiData.insight
        ) {

            title.textContent =
                t("aiInsight");

            text.textContent =
                aiData.insight;

            return;

        }


        throw new Error(
            "Invalid AI response"
        );

    } catch (error) {

        console.error(
            "Circle AI error:",
            error
        );

        /*
           Fallback to local
           pattern detection.
        */

        title.textContent =
            t("insight");

        text.textContent =
            detectPattern(
                history
            ) ||
            t("noAiInsight");

    }

}


/* ==========================================
   RENDER EVERYTHING
========================================== */

function renderAll(
    today,
    history
) {

    todayCheckinExists =
        !!today;

    lastCheckinData =
        today;

    allCheckins =
        history || [];

    updateCheckinButton();

    renderSnapshot(
        today
    );

    renderUnderstanding(
        today,
        history
    );

    renderSleepDetails(
        today
    );

    renderHistory(
        history
    );

    renderProgress(
        history
    );

    /*
       AI runs after the dashboard
       data has been rendered.
    */

    renderInsight(
        today,
        history
    );

}


/* ==========================================
   ESCAPE HTML
========================================== */

function escapeHtml(
    value
) {

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
   CHECK-IN BUTTON EVENT
========================================== */

const checkinButton =
    document.getElementById(
        "checkinBtn"
    );

if (checkinButton) {

    checkinButton.addEventListener(
        "click",
        function() {

            window.location.href =
                "checkin.html";

        }
    );

}


/* ==========================================
   LANGUAGE BUTTON
========================================== */

const languageButton =
    document.getElementById(
        "languageBtn"
    );

if (languageButton) {

    languageButton.addEventListener(
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

        }
    );

}


/* ==========================================
   LOGOUT
========================================== */

const logoutButton =
    document.getElementById(
        "logoutBtn"
    );

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        async function() {

            logoutButton.disabled =
                true;

            logoutButton.textContent =
                t("signingOut");

            const {
                error
            } =
                await supabaseClient
                    .auth
                    .signOut();

            if (error) {

                console.error(
                    "Logout error:",
                    error
                );

                logoutButton.disabled =
                    false;

                logoutButton.textContent =
                    t("signOut");

                return;

            }

            window.location.href =
                "auth.html";

        }
    );

}


/* ==========================================
   INITIALIZE
========================================== */

async function initialize() {

    console.log(
        "Circle Home: initializing..."
    );

    applyLanguage();

    const user =
        await getCurrentUser();

    if (!user) {

        return;

    }

    const history =
        await loadCheckins(
            user
        );

    const today =
        history.find(
            function(row) {

                return (
                    row.checkin_date ===
                    getTodayDate()
                );

            }
        ) || null;

    renderAll(
        today,
        history
    );

    console.log(
        "Circle Home: initialized successfully."
    );

}


/* ==========================================
   START
========================================== */

initialize();
