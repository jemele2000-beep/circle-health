/* ==========================================
   CIRCLE HEALTH
   HOME DASHBOARD
   FULL VERSION
   Includes:
   - Sleep
   - Hydration
   - Energy
   - Stress
   - Mood analysis
   - Multi-day pattern detection
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

        welcomeWithName:
            "Welcome back, {name}",

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

        sleep:
            "Sleep",

        hydration:
            "Hydration",

        energy:
            "Energy",

        stress:
            "Stress",

        mood:
            "Mood",

        hours:
            "hours",

        ml:
            "ml",

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
            "Your recent check-ins suggest that better sleep may be associated with higher energy. Keep checking in to see whether this pattern continues.",

        insightStress:
            "Stress may be affecting your sleep.",

        insightStressText:
            "Your recent data suggests that higher stress may occur together with lower sleep quality. Continue checking in to see if this pattern persists.",

        insightWater:
            "Hydration and energy may be connected.",

        insightWaterText:
            "Your recent check-ins suggest that higher water intake may be associated with better energy. More data will make the pattern clearer.",

        insightMoodEnergy:
            "Your mood and energy may be connected.",

        insightMoodEnergyText:
            "Your recent check-ins suggest that better mood may occur together with higher energy. Continue checking in to see whether this relationship persists.",

        insightMoodSleep:
            "Your mood may be connected to your sleep.",

        insightMoodSleepText:
            "Your recent check-ins suggest that better sleep may be associated with a better mood. More daily check-ins will help Circle understand your personal pattern.",

        insightStressMood:
            "Stress may be affecting your mood.",

        insightStressMoodText:
            "Your recent data suggests that higher stress may occur together with a lower mood. Continue checking in to see whether this pattern continues.",

        insightBalanced:
            "Your signals look relatively balanced.",

        insightBalancedText:
            "Your recent wellness signals do not show one strong pattern yet. Keep checking in so Circle can learn more about your personal rhythm.",

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

        language:
            "English",

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
            "تشير تسجيلاتك الأخيرة إلى أن النوم الأفضل قد يرتبط بطاقة أعلى. استمر في التسجيل لمعرفة ما إذا كان هذا النمط مستمرًا.",

        insightStress:
            "قد يكون التوتر مؤثرًا على نومك.",

        insightStressText:
            "تشير تسجيلاتك الأخيرة إلى أن التوتر المرتفع قد يحدث مع انخفاض جودة النوم. استمر في التسجيل لمعرفة ما إذا كان النمط مستمرًا.",

        insightWater:
            "قد تكون هناك علاقة بين الماء والطاقة.",

        insightWaterText:
            "تشير تسجيلاتك الأخيرة إلى أن شرب كمية أكبر من الماء قد يرتبط بطاقة أفضل. المزيد من البيانات سيجعل النمط أوضح.",

        insightMoodEnergy:
            "قد يكون هناك ارتباط بين مزاجك وطاقتك.",

        insightMoodEnergyText:
            "تشير تسجيلاتك الأخيرة إلى أن المزاج الأفضل قد يحدث مع طاقة أعلى. استمر في التسجيل لمعرفة ما إذا كانت العلاقة مستمرة.",

        insightMoodSleep:
            "قد يكون مزاجك مرتبطًا بنومك.",

        insightMoodSleepText:
            "تشير تسجيلاتك الأخيرة إلى أن النوم الأفضل قد يرتبط بمزاج أفضل. المزيد من التسجيلات اليومية سيساعد Circle على فهم نمطك الشخصي.",

        insightStressMood:
            "قد يكون التوتر مؤثرًا على مزاجك.",

        insightStressMoodText:
            "تشير بياناتك الأخيرة إلى أن التوتر المرتفع قد يحدث مع انخفاض المزاج. استمر في التسجيل لمعرفة ما إذا كان هذا النمط مستمرًا.",

        insightBalanced:
            "مؤشراتك تبدو متوازنة نسبيًا.",

        insightBalancedText:
            "لا يظهر نمط قوي واحد في مؤشرات صحتك الأخيرة حتى الآن. استمر في التسجيل حتى يتعلم Circle المزيد عن نمطك الشخصي.",

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


    document.getElementById(
        "languageBtn"
    ).textContent =
        t("language");


    document.getElementById(
        "logoutBtn"
    ).textContent =
        t("signOut");


    document.getElementById(
        "welcomeSmall"
    ).textContent =
        t("wellness");


    document.getElementById(
        "welcomeDescription"
    ).textContent =
        t("welcomeDescription");


    document.getElementById(
        "checkinBtn"
    ).textContent =
        t("checkin");


    document.getElementById(
        "snapshotTitle"
    ).textContent =
        t("snapshot");


    document.getElementById(
        "snapshotSubtitle"
    ).textContent =
        t("snapshotSubtitle");


    document.getElementById(
        "analysisSectionTitle"
    ).textContent =
        t("understanding");


    document.getElementById(
        "analysisTitle"
    ).textContent =
        t("understandingTitle");


    document.getElementById(
        "sleepDetailsTitle"
    ).textContent =
        t("sleepDetails");


    document.getElementById(
        "sleepProblemsLabel"
    ).textContent =
        t("sleepProblems");


    document.getElementById(
        "sleepReasonsLabel"
    ).textContent =
        t("possibleReasons");


    document.getElementById(
        "historyTitle"
    ).textContent =
        t("history");


    document.getElementById(
        "historySubtitle"
    ).textContent =
        t("historySubtitle");


    document.getElementById(
        "historyDate"
    ).textContent =
        t("date");


    document.getElementById(
        "statsTitle"
    ).textContent =
        t("progress");


    document.getElementById(
        "totalDaysLabel"
    ).textContent =
        t("totalDays");


    document.getElementById(
        "streakDaysLabel"
    ).textContent =
        t("streak");


    document.getElementById(
        "insightBadge"
    ).textContent =
        t("insight");


    document.getElementById(
        "privacyText"
    ).textContent =
        t("private");

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

        document.getElementById(
            "checkinBtn"
        ).textContent =
            t("editCheckin");

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
   STATUS
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
   TODAY ANALYSIS
========================================== */

function renderAnalysis(record) {

    const container =
        document.getElementById(
            "analysisContent"
        );


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

    } else if (
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


    if (
        Number(record.water_ml) < 1200
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


    document.getElementById(
        "totalDays"
    ).textContent =
        total;


    const streak =
        calculateStreak(
            records
        );


    document.getElementById(
        "streakDays"
    ).textContent =
        streak;

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
   MOOD VALUE
   Supports the current mood field.
========================================== */

function getMoodNumeric(record) {

    if (!record) {

        return null;

    }


    /*
       The current check-in mood is normally
       stored as a text value.

       Supported values:
       very_good
       good
       okay
       low
    */

    const mood =
        record.mood;


    if (
        mood === null ||
        mood === undefined ||
        mood === ""
    ) {

        return null;

    }


    if (
        typeof mood === "number"
    ) {

        return mood;

    }


    const normalized =
        String(mood)
            .trim()
            .toLowerCase()
            .replace(
                /\s+/g,
                "_"
            );


    const map = {

        very_good: 4,

        verygood: 4,

        excellent: 4,

        good: 3,

        okay: 2,

        ok: 2,

        average: 2,

        low: 1,

        poor: 1

    };


    return (
        map[normalized] ??
        null
    );

}


/* ==========================================
   PATTERN ANALYSIS
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
        records.length < 3
    ) {

        title.textContent =
            t("insightNew");


        text.textContent =
            t("insightNewText");

        return;

    }


    /*
       We calculate several possible
       relationships and choose the
       strongest reliable one.
    */

    const patterns = [];


    /* --------------------------------------
       SLEEP → ENERGY
    -------------------------------------- */

    const sleepEnergyData =
        records.filter(
            function(record) {

                return (
                    isNumber(
                        record.sleep_hours
                    ) &&
                    isNumber(
                        record.energy_level
                    )
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


            const difference =
                highAverage -
                lowAverage;


            if (
                difference > 0.7
            ) {

                patterns.push({

                    score:
                        difference,

                    title:
                        "insightSleep",

                    text:
                        "insightSleepText"

                });

            }

        }

    }


    /* --------------------------------------
       STRESS → SLEEP
    -------------------------------------- */

    const stressSleepData =
        records.filter(
            function(record) {

                return (
                    isNumber(
                        record.stress_level
                    ) &&
                    isNumber(
                        record.sleep_quality
                    )
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


            const difference =
                lowStressQuality -
                highStressQuality;


            if (
                difference > 0.7
            ) {

                patterns.push({

                    score:
                        difference,

                    title:
                        "insightStress",

                    text:
                        "insightStressText"

                });

            }

        }

    }


    /* --------------------------------------
       WATER → ENERGY
    -------------------------------------- */

    const waterEnergyData =
        records.filter(
            function(record) {

                return (
                    isNumber(
                        record.water_ml
                    ) &&
                    isNumber(
                        record.energy_level
                    )
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

            const highAverage =
                average(
                    highWater.map(
                        function(record) {

                            return Number(
                                record.energy_level
                            );

                        }
                    )
                );


            const lowAverage =
                average(
                    lowWater.map(
                        function(record) {

                            return Number(
                                record.energy_level
                            );

                        }
                    )
                );


            const difference =
                highAverage -
                lowAverage;


            if (
                difference > 0.7
            ) {

                patterns.push({

                    score:
                        difference,

                    title:
                        "insightWater",

                    text:
                        "insightWaterText"

                });

            }

        }

    }


    /* --------------------------------------
       MOOD → ENERGY
    -------------------------------------- */

    const moodEnergyData =
        records
            .map(
                function(record) {

                    return {

                        mood:
                            getMoodNumeric(
                                record
                            ),

                        energy:
                            isNumber(
                                record.energy_level
                            )
                                ? Number(
                                    record.energy_level
                                )
                                : null

                    };

                }
            )
            .filter(
                function(item) {

                    return (
                        item.mood !== null &&
                        item.energy !== null
                    );

                }
            );


    if (
        moodEnergyData.length >= 3
    ) {

        const goodMood =
            moodEnergyData.filter(
                function(item) {

                    return item.mood >= 3;

                }
            );


        const lowMood =
            moodEnergyData.filter(
                function(item) {

                    return item.mood <= 2;

                }
            );


        if (
            goodMood.length >= 2 &&
            lowMood.length >= 1
        ) {

            const goodMoodEnergy =
                average(
                    goodMood.map(
                        function(item) {

                            return item.energy;

                        }
                    )
                );


            const lowMoodEnergy =
                average(
                    lowMood.map(
                        function(item) {

                            return item.energy;

                        }
                    )
                );


            const difference =
                goodMoodEnergy -
                lowMoodEnergy;


            if (
                difference > 0.7
            ) {

                patterns.push({

                    score:
                        difference,

                    title:
                        "insightMoodEnergy",

                    text:
                        "insightMoodEnergyText"

                });

            }

        }

    }


    /* --------------------------------------
       MOOD → SLEEP
    -------------------------------------- */

    const moodSleepData =
        records
            .map(
                function(record) {

                    return {

                        mood:
                            getMoodNumeric(
                                record
                            ),

                        sleep:
                            isNumber(
                                record.sleep_quality
                            )
                                ? Number(
                                    record.sleep_quality
                                )
                                : null

                    };

                }
            )
            .filter(
                function(item) {

                    return (
                        item.mood !== null &&
                        item.sleep !== null
                    );

                }
            );


    if (
        moodSleepData.length >= 3
    ) {

        const goodMood =
            moodSleepData.filter(
                function(item) {

                    return item.mood >= 3;

                }
            );


        const lowMood =
            moodSleepData.filter(
                function(item) {

                    return item.mood <= 2;

                }
            );


        if (
            goodMood.length >= 2 &&
            lowMood.length >= 1
        ) {

            const goodMoodSleep =
                average(
                    goodMood.map(
                        function(item) {

                            return item.sleep;

                        }
                    )
                );


            const lowMoodSleep =
                average(
                    lowMood.map(
                        function(item) {

                            return item.sleep;

                        }
                    )
                );


            const difference =
                goodMoodSleep -
                lowMoodSleep;


            if (
                difference > 0.7
            ) {

                patterns.push({

                    score:
                        difference,

                    title:
                        "insightMoodSleep",

                    text:
                        "insightMoodSleepText"

                });

            }

        }

    }


    /* --------------------------------------
       STRESS → MOOD
    -------------------------------------- */

    const stressMoodData =
        records
            .map(
                function(record) {

                    return {

                        stress:
                            isNumber(
                                record.stress_level
                            )
                                ? Number(
                                    record.stress_level
                                )
                                : null,

                        mood:
                            getMoodNumeric(
                                record
                            )

                    };

                }
            )
            .filter(
                function(item) {

                    return (
                        item.stress !== null &&
                        item.mood !== null
                    );

                }
            );


    if (
        stressMoodData.length >= 3
    ) {

        const highStress =
            stressMoodData.filter(
                function(item) {

                    return item.stress >= 7;

                }
            );


        const lowStress =
            stressMoodData.filter(
                function(item) {

                    return item.stress <= 4;

                }
            );


        if (
            highStress.length >= 2 &&
            lowStress.length >= 1
        ) {

            const highStressMood =
                average(
                    highStress.map(
                        function(item) {

                            return item.mood;

                        }
                    )
                );


            const lowStressMood =
                average(
                    lowStress.map(
                        function(item) {

                            return item.mood;

                        }
                    )
                );


            const difference =
                lowStressMood -
                highStressMood;


            if (
                difference > 0.5
            ) {

                patterns.push({

                    score:
                        difference,

                    title:
                        "insightStressMood",

                    text:
                        "insightStressMoodText"

                });

            }

        }

    }


    /* --------------------------------------
       CHOOSE STRONGEST PATTERN
    -------------------------------------- */

    if (
        patterns.length > 0
    ) {

        patterns.sort(
            function(a, b) {

                return b.score -
                    a.score;

            }
        );


        const strongest =
            patterns[0];


        title.textContent =
            t(strongest.title);


        text.textContent =
            t(strongest.text);


        return;

    }


    /* --------------------------------------
       NO STRONG PATTERN YET
    -------------------------------------- */

    title.textContent =
        t("insightBalanced");


    text.textContent =
        t("insightBalancedText");

}


/* ==========================================
   NUMBER CHECK
========================================== */

function isNumber(value) {

    return (
        value !== null &&
        value !== undefined &&
        value !== "" &&
        !Number.isNaN(
            Number(value)
        )
    );

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

document
    .getElementById(
        "checkinBtn"
    )
    .addEventListener(
        "click",
        function() {

            window.location.href =
                "checkin.html";

        }
    );


document
    .getElementById(
        "languageBtn"
    )
    .addEventListener(
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


document
    .getElementById(
        "logoutBtn"
    )
    .addEventListener(
        "click",
        async function() {

            await supabaseClient.auth.signOut();

            window.location.href =
                "auth.html";

        }
    );


/* ==========================================
   INITIALIZE
========================================== */

async function initialize() {

    applyLanguage();

    await loadDashboard();

}


initialize();
