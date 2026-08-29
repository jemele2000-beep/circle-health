/* ==========================================
   CIRCLE HEALTH
   HOME DASHBOARD
   PERSONAL WELLNESS ANALYSIS
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
            "Your recent check-ins suggest that your energy tends to be higher on days when you sleep longer. This is an association, not proof of cause.",

        insightStress:
            "Stress may be affecting your sleep.",

        insightStressText:
            "Your recent data suggests that higher stress and lower sleep quality may occur together. Continue checking in to see whether this pattern persists.",

        insightWater:
            "Hydration and energy may be connected.",

        insightWaterText:
            "Your recent data suggests that your energy tends to be higher on days with higher recorded water intake. Continue checking in to make the pattern clearer.",

        insightBalanced:
            "Your recent signals look relatively balanced.",

        insightBalancedText:
            "Circle is not seeing one strong pattern yet. Keep checking in so your personal rhythm becomes clearer.",

        insightEnergy:
            "Your energy appears to follow your sleep pattern.",

        insightEnergyText:
            "Your recent data shows a noticeable difference in energy between days with more sleep and days with less sleep.",

        todayGoodSleep:
            "Your sleep duration and quality look good today.",

        todayShortSleep:
            "You slept less than 6 hours today. This may be contributing to lower energy.",

        todayPoorQuality:
            "Your sleep quality was relatively low today.",

        todayHighStress:
            "Your stress level is high today.",

        todayModerateStress:
            "Your stress level is moderate today.",

        todayLowEnergy:
            "Your energy level is relatively low today.",

        todayHighEnergy:
            "Your energy level is relatively high today.",

        todayLowWater:
            "Your recorded water intake is relatively low today.",

        todayGoodWater:
            "Your recorded water intake looks good today.",

        todayBalanced:
            "Your signals look relatively balanced today.",

        todaySleepStress:
            "Your sleep was limited while your stress was relatively high today. These signals may be related to how you feel.",

        todaySleepEnergy:
            "Your sleep and energy both look relatively good today.",

        todayWaterEnergy:
            "Your water intake and energy both look relatively good today.",

        difficulty_falling_asleep:
            "Difficulty falling asleep",

        frequent_waking:
            "Waking up frequently",

        early_waking:
            "Waking up too early",

        light_sleep:
            "Light / non-restorative sleep",

        daytime_sleepiness:
            "Feeling sleepy during the day",

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
            "Other",

        private:
            "Your data is private and connected to your Circle account.",

        login:
            "Please sign in again.",

        error:
            "We couldn't load your data. Please try again."

    },


    /* ======================================
       ARABIC
    ====================================== */

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
            "تشير تسجيلاتك الأخيرة إلى أن طاقتك تميل إلى أن تكون أعلى في الأيام التي تنام فيها لفترة أطول. هذا ارتباط وليس إثباتًا للسببية.",

        insightStress:
            "قد يكون التوتر مؤثرًا على نومك.",

        insightStressText:
            "تشير بياناتك الأخيرة إلى أن التوتر المرتفع وانخفاض جودة النوم قد يحدثان معًا. استمر في التسجيل لمعرفة ما إذا كان النمط مستمرًا.",

        insightWater:
            "قد تكون هناك علاقة بين الماء والطاقة.",

        insightWaterText:
            "تشير بياناتك الأخيرة إلى أن طاقتك تميل إلى أن تكون أعلى في الأيام التي تسجل فيها كمية ماء أكبر. استمر في التسجيل لتوضيح النمط.",

        insightBalanced:
            "مؤشراتك الأخيرة تبدو متوازنة نسبيًا.",

        insightBalancedText:
            "لا يرى Circle نمطًا قويًا واحدًا حتى الآن. استمر في التسجيل حتى يصبح نمطك الشخصي أوضح.",

        insightEnergy:
            "يبدو أن طاقتك تتبع نمط نومك.",

        insightEnergyText:
            "تظهر بياناتك الأخيرة فرقًا ملحوظًا في الطاقة بين أيام النوم الأطول وأيام النوم الأقصر.",

        todayGoodSleep:
            "مدة نومك وجودته تبدوان جيدتين اليوم.",

        todayShortSleep:
            "نمت أقل من 6 ساعات اليوم. قد يكون ذلك مساهمًا في انخفاض طاقتك.",

        todayPoorQuality:
            "جودة نومك كانت منخفضة نسبيًا اليوم.",

        todayHighStress:
            "مستوى التوتر لديك مرتفع اليوم.",

        todayModerateStress:
            "مستوى التوتر لديك متوسط اليوم.",

        todayLowEnergy:
            "مستوى طاقتك منخفض نسبيًا اليوم.",

        todayHighEnergy:
            "مستوى طاقتك مرتفع نسبيًا اليوم.",

        todayLowWater:
            "كمية الماء التي سجلتها منخفضة نسبيًا اليوم.",

        todayGoodWater:
            "كمية الماء التي سجلتها تبدو جيدة اليوم.",

        todayBalanced:
            "مؤشراتك تبدو متوازنة نسبيًا اليوم.",

        todaySleepStress:
            "كان نومك محدودًا بينما كان التوتر مرتفعًا نسبيًا اليوم. قد تكون هذه المؤشرات مرتبطة بشعورك اليوم.",

        todaySleepEnergy:
            "النوم والطاقة يبدوان جيدين نسبيًا اليوم.",

        todayWaterEnergy:
            "كمية الماء والطاقة تبدوان جيدتين نسبيًا اليوم.",

        difficulty_falling_asleep:
            "صعوبة في النوم",

        frequent_waking:
            "الاستيقاظ عدة مرات",

        early_waking:
            "الاستيقاظ مبكرًا",

        light_sleep:
            "نوم خفيف أو غير مريح",

        daytime_sleepiness:
            "الشعور بالنعاس أثناء النهار",

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
            "سبب آخر",

        private:
            "بياناتك خاصة ومرتبطة بحسابك في Circle.",

        login:
            "يرجى تسجيل الدخول مرة أخرى.",

        error:
            "تعذر تحميل بياناتك. حاول مرة أخرى."

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
   SAFE DOM
========================================== */

function setText(
    id,
    value
) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            value;

    }

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


    setText(
        "languageBtn",
        t("language")
    );

    setText(
        "logoutBtn",
        t("signOut")
    );

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
   LOAD DASHBOARD
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
        Array.isArray(data)
            ? data
            : [];


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

    } else {

        setText(
            "checkinBtn",
            t("checkin")
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
                ${escapeHTML(
                    String(value)
                )}
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
        Number(
            record.sleep_hours
        );

    const quality =
        Number(
            record.sleep_quality
        );


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

    if (
        water === null ||
        water === undefined ||
        water === ""
    ) {

        return t("hydrationLow");

    }


    const value =
        Number(water);


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

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return t("energyLow");

    }


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

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return t("stressModerate");

    }


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


    const sleepHours =
        Number(
            record.sleep_hours
        );

    const quality =
        Number(
            record.sleep_quality
        );

    const stress =
        Number(
            record.stress_level
        );

    const energy =
        Number(
            record.energy_level
        );

    const water =
        Number(
            record.water_ml
        );


    const items = [];


    /* =========================
       COMBINED PATTERNS
    ========================= */

    if (
        sleepHours < 6 &&
        stress >= 7
    ) {

        items.push(
            analysisItem(
                t("sleep"),
                t("todaySleepStress")
            )
        );

    }


    else if (
        sleepHours >= 7 &&
        quality >= 7 &&
        energy >= 7
    ) {

        items.push(
            analysisItem(
                t("sleep"),
                t("todaySleepEnergy")
            )
        );

    }


    else {

        if (
            sleepHours < 6
        ) {

            items.push(
                analysisItem(
                    t("sleep"),
                    t("todayShortSleep")
                )
            );

        }
        else if (
            quality < 5
        ) {

            items.push(
                analysisItem(
                    t("sleep"),
                    t("todayPoorQuality")
                )
            );

        }
        else if (
            sleepHours >= 7 &&
            quality >= 7
        ) {

            items.push(
                analysisItem(
                    t("sleep"),
                    t("todayGoodSleep")
                )
            );

        }

    }


    /* =========================
       STRESS
    ========================= */

    if (
        stress >= 7
    ) {

        items.push(
            analysisItem(
                t("stress"),
                t("todayHighStress")
            )
        );

    }
    else if (
        stress >= 4
    ) {

        items.push(
            analysisItem(
                t("stress"),
                t("todayModerateStress")
            )
        );

    }


    /* =========================
       ENERGY
    ========================= */

    if (
        energy <= 3
    ) {

        items.push(
            analysisItem(
                t("energy"),
                t("todayLowEnergy")
            )
        );

    }
    else if (
        energy >= 7
    ) {

        items.push(
            analysisItem(
                t("energy"),
                t("todayHighEnergy")
            )
        );

    }


    /* =========================
       WATER
    ========================= */

    if (
        !Number.isNaN(water)
    ) {

        if (
            water < 1200
        ) {

            items.push(
                analysisItem(
                    t("hydration"),
                    t("todayLowWater")
                )
            );

        }
        else if (
            water >= 2000
        ) {

            items.push(
                analysisItem(
                    t("hydration"),
                    t("todayGoodWater")
                )
            );

        }

    }


    /* =========================
       FALLBACK
    ========================= */

    if (
        items.length === 0
    ) {

        items.push(
            analysisItem(
                "",
                t("todayBalanced")
            )
        );

    }


    container.innerHTML =
        items.join("");

}


/* ==========================================
   ANALYSIS ITEM
========================================== */

function analysisItem(
    label,
    text
) {

    return `

        <div class="analysis-item">

            ${
                label
                    ? `
                        <div class="analysis-label">
                            ${escapeHTML(label)}
                        </div>
                      `
                    : ""
            }

            ${escapeHTML(text)}

        </div>

    `;

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
            `
                <span class="tag empty">
                    ${escapeHTML(
                        t("none")
                    )}
                </span>
            `;


        reasonsContainer.innerHTML =
            `
                <span class="tag empty">
                    ${escapeHTML(
                        t("none")
                    )}
                </span>
            `;

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

        daytime_sleepiness:
            "daytime_sleepiness",

        phone:
            "phone",

        screens:
            "screens",

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

        caffeine:
            "caffeine",

        schedule:
            "schedule",

        noise:
            "noise",

        environment:
            "environment",

        pain:
            "pain",

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


    setText(
        "totalDays",
        total
    );


    const streak =
        calculateStreak(
            records
        );


    setText(
        "streakDays",
        streak
    );

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
            ).padStart(
                2,
                "0"
            );

        const day =
            String(
                current.getDate()
            ).padStart(
                2,
                "0"
            );


        const key =
            `${year}-${month}-${day}`;


        if (
            !dates.has(key)
        ) {

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
   INSIGHT
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


    /* =========================
       NOT ENOUGH DATA
    ========================= */

    if (
        records.length < 3
    ) {

        title.textContent =
            t("insightNew");

        text.textContent =
            t("insightNewText");

        return;

    }


    /* =========================
       SLEEP → ENERGY
    ========================= */

    const sleepEnergyData =
        records.filter(
            function(record) {

                return (
                    isValidNumber(
                        record.sleep_hours
                    ) &&
                    isValidNumber(
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

                    return (
                        Number(
                            record.sleep_hours
                        ) >= 7
                    );

                }
            );


        const lowSleep =
            sleepEnergyData.filter(
                function(record) {

                    return (
                        Number(
                            record.sleep_hours
                        ) < 7
                    );

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


    /* =========================
       STRESS → SLEEP QUALITY
    ========================= */

    const stressSleepData =
        records.filter(
            function(record) {

                return (
                    isValidNumber(
                        record.stress_level
                    ) &&
                    isValidNumber(
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

                    return (
                        Number(
                            record.stress_level
                        ) >= 7
                    );

                }
            );


        const lowStress =
            stressSleepData.filter(
                function(record) {

                    return (
                        Number(
                            record.stress_level
                        ) <= 4
                    );

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


    /* =========================
       WATER → ENERGY
    ========================= */

    const waterEnergyData =
        records.filter(
            function(record) {

                return (
                    isValidNumber(
                        record.water_ml
                    ) &&
                    isValidNumber(
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

                    return (
                        Number(
                            record.water_ml
                        ) >= 1800
                    );

                }
            );


        const lowWater =
            waterEnergyData.filter(
                function(record) {

                    return (
                        Number(
                            record.water_ml
                        ) < 1200
                    );

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


    /* =========================
       GENERAL BALANCED RESULT
    ========================= */

    title.textContent =
        t("insightBalanced");

    text.textContent =
        t("insightBalancedText");

}


/* ==========================================
   AVERAGE
========================================== */

function average(values) {

    if (
        !values.length
    ) {

        return 0;

    }


    return (
        values.reduce(
            function(
                sum,
                value
            ) {

                return (
                    sum +
                    value
                );

            },
            0
        ) /
        values.length
    );

}


/* ==========================================
   NUMBER VALIDATION
========================================== */

function isValidNumber(value) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return false;

    }


    return Number.isFinite(
        Number(value)
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
   CHECK-IN BUTTON
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


            loadDashboard();

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

            try {

                await supabaseClient
                    .auth
                    .signOut();

            } catch (error) {

                console.error(
                    "Logout error:",
                    error
                );

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

    applyLanguage();

    await loadDashboard();

}


initialize();
