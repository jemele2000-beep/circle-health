/* ==========================================
   CIRCLE
   HOME / WELLNESS PATTERNS
   STEP 2
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
            "WELCOME BACK",

        welcomeDescription:
            "Here is what your recent entries are showing.",

        today:
            "Today",

        checkin:
            "Daily Check-in",

        noData:
            "No check-in recorded today.",

        completeCheckin:
            "Complete today's check-in",

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

        good:
            "Good",

        fair:
            "Fair",

        poor:
            "Poor",

        low:
            "Low",

        moderate:
            "Moderate",

        high:
            "High",

        veryHigh:
            "Very high",

        excellent:
            "Excellent",

        recentHistory:
            "Recent History",

        days:
            "days",

        day:
            "day",

        streak:
            "Streak",

        progress:
            "Progress",

        understanding:
            "Understanding Your Patterns",

        insight:
            "CIRCLE INSIGHT",

        analyzing:
            "Looking at your recent patterns...",

        notEnough:
            "Keep checking in for a few more days so Circle can identify stronger patterns.",

        noStrongPattern:
            "Your recent entries do not show one strong pattern yet. Keep checking in and Circle will continue looking for relationships between your signals.",

        sleepEnergy:
            "On days when your sleep was lower, your energy also tended to be lower.",

        stressEnergy:
            "Higher-stress days also tended to appear alongside lower energy.",

        sleepStress:
            "Lower sleep quality often appeared on days when your stress was higher.",

        hydrationEnergy:
            "Your lower-energy days sometimes appeared alongside lower water intake.",

        repeatedSleepProblems:
            "Some sleep problems have appeared repeatedly in your recent entries.",

        repeatedSleepReasons:
            "Some of the same factors affecting sleep have appeared more than once.",

        average:
            "Average",

        logged:
            "logged",

        noSleep:
            "No sleep data",

        noHydration:
            "No hydration data",

        noEnergy:
            "No energy data",

        noStress:
            "No stress data",

        noMood:
            "No mood data",

        logout:
            "Log out",

        language:
            "العربية",

        checkinButton:
            "Check in today",

        private:
            "Your data is private and connected to your Circle account.",

        disclaimer:
            "This is a general reflection based on your own entries, not medical advice.",

        aiUnavailable:
            "Circle AI is unavailable right now. Your local pattern analysis is still available.",

        moodVeryGood:
            "Very good",

        moodGood:
            "Good",

        moodOkay:
            "Okay",

        moodLow:
            "Low"

    },


    ar: {

        welcomeSmall:
            "مرحبًا بعودتك",

        welcomeDescription:
            "إليك ما تُظهره تسجيلاتك الأخيرة.",

        today:
            "اليوم",

        checkin:
            "التسجيل اليومي",

        noData:
            "لم يتم تسجيل بيانات اليوم بعد.",

        completeCheckin:
            "أكمل تسجيل اليوم",

        sleep:
            "النوم",

        hydration:
            "الترطيب",

        energy:
            "الطاقة",

        stress:
            "التوتر",

        mood:
            "المزاج",

        good:
            "جيد",

        fair:
            "متوسط",

        poor:
            "ضعيف",

        low:
            "منخفض",

        moderate:
            "متوسط",

        high:
            "مرتفع",

        veryHigh:
            "مرتفع جدًا",

        excellent:
            "ممتاز",

        recentHistory:
            "السجل الأخير",

        days:
            "أيام",

        day:
            "يوم",

        streak:
            "الاستمرارية",

        progress:
            "التقدم",

        understanding:
            "فهم أنماطك",

        insight:
            "رؤية CIRCLE",

        analyzing:
            "نحلل أنماطك الأخيرة...",

        notEnough:
            "استمر في التسجيل لبضعة أيام أخرى حتى يستطيع Circle اكتشاف أنماط أوضح.",

        noStrongPattern:
            "لا تُظهر تسجيلاتك الأخيرة نمطًا قويًا واحدًا بعد. استمر في التسجيل وسيواصل Circle البحث عن العلاقات بين مؤشراتك.",

        sleepEnergy:
            "في الأيام التي كان فيها نومك أقل، كان مستوى طاقتك يميل أيضًا إلى الانخفاض.",

        stressEnergy:
            "الأيام ذات التوتر الأعلى ظهرت أيضًا غالبًا مع مستويات طاقة أقل.",

        sleepStress:
            "ظهرت جودة النوم الأقل غالبًا في الأيام التي كان فيها مستوى التوتر أعلى.",

        hydrationEnergy:
            "ظهرت بعض أيام الطاقة المنخفضة بالتزامن مع كمية ماء أقل.",

        repeatedSleepProblems:
            "ظهرت بعض مشاكل النوم بشكل متكرر في تسجيلاتك الأخيرة.",

        repeatedSleepReasons:
            "ظهرت بعض العوامل المؤثرة على النوم أكثر من مرة.",

        average:
            "المتوسط",

        logged:
            "مسجل",

        noSleep:
            "لا توجد بيانات نوم",

        noHydration:
            "لا توجد بيانات ترطيب",

        noEnergy:
            "لا توجد بيانات طاقة",

        noStress:
            "لا توجد بيانات توتر",

        noMood:
            "لا توجد بيانات مزاج",

        logout:
            "تسجيل الخروج",

        language:
            "English",

        checkinButton:
            "سجل اليوم",

        private:
            "بياناتك خاصة ومرتبطة بحسابك في Circle.",

        disclaimer:
            "هذا انعكاس عام مبني على إدخالاتك الخاصة، وليس نصيحة طبية.",

        aiUnavailable:
            "Circle AI غير متاح حاليًا، لكن تحليل الأنماط المحلي ما زال يعمل.",

        moodVeryGood:
            "جيد جدًا",

        moodGood:
            "جيد",

        moodOkay:
            "عادي",

        moodLow:
            "منخفض"

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
   LANGUAGE
========================================== */

function applyLanguage() {

    document.documentElement.lang =
        language;

    document.documentElement.dir =
        language === "ar"
            ? "rtl"
            : "ltr";


    const ids = {

        welcomeSmall:
            "welcomeSmall",

        welcomeDescription:
            "welcomeDescription",

        recentHistory:
            "recentHistory",

        understanding:
            "understanding",

        insight:
            "insight",

        logoutBtn:
            "logout"

    };


    Object.keys(ids).forEach(
        function(id) {

            const element =
                document.getElementById(id);

            if (element) {

                element.textContent =
                    t(ids[id]);

            }

        }
    );


    const languageButton =
        document.getElementById(
            "languageBtn"
        );


    if (languageButton) {

        languageButton.textContent =
            t("language");

    }


    const checkinButton =
        document.getElementById(
            "checkinBtn"
        );


    if (checkinButton) {

        checkinButton.textContent =
            t("checkinButton");

    }

}


/* ==========================================
   AUTH
========================================== */

async function getCurrentUser() {

    try {

        const {
            data,
            error
        } =
            await supabaseClient.auth.getSession();


        if (error) {

            console.error(
                "Session error:",
                error
            );

            return null;

        }


        if (
            data &&
            data.session &&
            data.session.user
        ) {

            return data.session.user;

        }


        return null;

    } catch (error) {

        console.error(
            "Authentication error:",
            error
        );

        return null;

    }

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


    const parts =
        String(dateString)
            .split("-");


    if (parts.length !== 3) {

        return dateString;

    }


    return `${parts[2]}/${parts[1]}/${parts[0]}`;

}


/* ==========================================
   SAFE NUMBER
========================================== */

function numberOrNull(value) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return null;

    }


    const number =
        Number(value);


    return Number.isFinite(number)
        ? number
        : null;

}


/* ==========================================
   NORMALIZE CHECK-IN
========================================== */

function normalizeCheckin(row) {

    return {

        date:
            row.checkin_date ||
            row.date ||
            row.created_at ||
            "",

        sleep:
            numberOrNull(
                row.sleep_hours
            ),

        sleepQuality:
            numberOrNull(
                row.sleep_quality
            ),

        water:
            numberOrNull(
                row.water_ml
            ),

        energy:
            numberOrNull(
                row.energy_level
            ),

        stress:
            numberOrNull(
                row.stress_level
            ),

        mood:
            row.mood || null,

        sleepProblems:
            Array.isArray(
                row.sleep_problems
            )
                ? row.sleep_problems
                : [],

        sleepReasons:
            Array.isArray(
                row.sleep_reasons
            )
                ? row.sleep_reasons
                : []

    };

}


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
            .select(
                `
                user_id,
                checkin_date,
                sleep_hours,
                sleep_quality,
                sleep_problems,
                sleep_reasons,
                water_ml,
                energy_level,
                stress_level,
                mood
                `
            )
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
            "Load check-ins error:",
            error
        );


        throw error;

    }


    return (data || [])
        .map(normalizeCheckin)
        .sort(
            function(a, b) {

                return String(b.date)
                    .localeCompare(
                        String(a.date)
                    );

            }
        );

}


/* ==========================================
   AVERAGE
========================================== */

function average(values) {

    const valid =
        values.filter(
            function(value) {

                return value !== null &&
                    Number.isFinite(value);

            }
        );


    if (!valid.length) {

        return null;

    }


    const total =
        valid.reduce(
            function(sum, value) {

                return sum + value;

            },
            0
        );


    return total / valid.length;

}


/* ==========================================
   FORMAT NUMBER
========================================== */

function formatNumber(value) {

    if (value === null) {

        return "—";

    }


    return Number(value)
        .toFixed(1)
        .replace(
            ".0",
            ""
        );

}


/* ==========================================
   SLEEP LABEL
========================================== */

function sleepLabel(value) {

    if (value === null) {

        return t("noSleep");

    }


    if (value >= 8) {

        return t("excellent");

    }


    if (value >= 7) {

        return t("good");

    }


    if (value >= 6) {

        return t("fair");

    }


    return t("poor");

}


/* ==========================================
   QUALITY LABEL
========================================== */

function qualityLabel(value) {

    if (value === null) {

        return "";

    }


    if (value >= 8) {

        return t("excellent");

    }


    if (value >= 6) {

        return t("good");

    }


    if (value >= 4) {

        return t("fair");

    }


    return t("poor");

}


/* ==========================================
   LEVEL LABEL
========================================== */

function levelLabel(value) {

    if (value === null) {

        return "";

    }


    if (value <= 3) {

        return t("low");

    }


    if (value <= 6) {

        return t("moderate");

    }


    if (value <= 8) {

        return t("high");

    }


    return t("veryHigh");

}


/* ==========================================
   MOOD LABEL
========================================== */

function moodLabel(value) {

    if (!value) {

        return t("noMood");

    }


    const map = {

        very_good:
            "moodVeryGood",

        veryGood:
            "moodVeryGood",

        good:
            "moodGood",

        okay:
            "moodOkay",

        low:
            "moodLow"

    };


    return map[value]
        ? t(map[value])
        : value;

}


/* ==========================================
   RENDER TODAY SNAPSHOT
========================================== */

function renderToday(checkins) {

    const container =
        document.getElementById(
            "snapshotContainer"
        );


    if (!container) {

        return;

    }


    const today =
        getTodayDate();


    const item =
        checkins.find(
            function(row) {

                return row.date === today;

            }
        );


    if (!item) {

        container.innerHTML = `
            <div class="empty-state">
                <p>${t("noData")}</p>
                <button
                    type="button"
                    onclick="window.location.href='checkin.html'"
                >
                    ${t("completeCheckin")}
                </button>
            </div>
        `;

        return;

    }


    const sleepText =
        item.sleep !== null
            ? `${formatNumber(item.sleep)} h`
            : "—";


    const hydrationText =
        item.water !== null
            ? `${formatNumber(item.water)} ml`
            : "—";


    const energyText =
        item.energy !== null
            ? `${formatNumber(item.energy)}/10`
            : "—";


    const stressText =
        item.stress !== null
            ? `${formatNumber(item.stress)}/10`
            : "—";


    container.innerHTML = `

        <div class="snapshot-card">

            <div class="snapshot-item">
                <span class="snapshot-label">
                    ${t("sleep")}
                </span>

                <strong>
                    ${sleepText}
                </strong>

                <small>
                    ${
                        item.sleepQuality !== null
                            ? `${formatNumber(item.sleepQuality)}/10 · ${qualityLabel(item.sleepQuality)}`
                            : ""
                    }
                </small>
            </div>


            <div class="snapshot-item">
                <span class="snapshot-label">
                    ${t("hydration")}
                </span>

                <strong>
                    ${hydrationText}
                </strong>

                <small>
                    ${
                        item.water !== null
                            ? levelLabel(
                                Math.min(
                                    10,
                                    item.water / 300
                                )
                            )
                            : t("noHydration")
                    }
                </small>
            </div>


            <div class="snapshot-item">
                <span class="snapshot-label">
                    ${t("energy")}
                </span>

                <strong>
                    ${energyText}
                </strong>

                <small>
                    ${
                        item.energy !== null
                            ? levelLabel(item.energy)
                            : t("noEnergy")
                    }
                </small>
            </div>


            <div class="snapshot-item">
                <span class="snapshot-label">
                    ${t("stress")}
                </span>

                <strong>
                    ${stressText}
                </strong>

                <small>
                    ${
                        item.stress !== null
                            ? levelLabel(item.stress)
                            : t("noStress")
                    }
                </small>
            </div>


            <div class="snapshot-item">
                <span class="snapshot-label">
                    ${t("mood")}
                </span>

                <strong>
                    ${moodLabel(item.mood)}
                </strong>
            </div>

        </div>
    `;

}


/* ==========================================
   PATTERN HELPERS
========================================== */

function pairedAverage(
    checkins,
    firstKey,
    secondKey,
    condition
) {

    const selected =
        checkins.filter(
            function(item) {

                return item[firstKey] !== null &&
                    item[secondKey] !== null &&
                    condition(item);

            }
        );


    if (!selected.length) {

        return null;

    }


    return {

        first:
            average(
                selected.map(
                    function(item) {

                        return item[firstKey];

                    }
                )
            ),

        second:
            average(
                selected.map(
                    function(item) {

                        return item[secondKey];

                    }
                )
            ),

        count:
            selected.length

    };

}


/* ==========================================
   DETECT WELLNESS PATTERNS
========================================== */

function detectPatterns(checkins) {

    const patterns = [];


    if (checkins.length < 2) {

        return patterns;

    }


    /* ======================================
       SLEEP → ENERGY
    ====================================== */

    const sleepEnergy =
        pairedAverage(
            checkins,
            "sleep",
            "energy",
            function(item) {

                return item.sleep < 7 &&
                    item.energy <= 5;

            }
        );


    if (
        sleepEnergy &&
        sleepEnergy.count >= 2
    ) {

        patterns.push(
            t("sleepEnergy")
        );

    }


    /* ======================================
       STRESS → ENERGY
    ====================================== */

    const stressEnergy =
        pairedAverage(
            checkins,
            "stress",
            "energy",
            function(item) {

                return item.stress >= 7 &&
                    item.energy <= 5;

            }
        );


    if (
        stressEnergy &&
        stressEnergy.count >= 2
    ) {

        patterns.push(
            t("stressEnergy")
        );

    }


    /* ======================================
       SLEEP QUALITY → STRESS
    ====================================== */

    const sleepStress =
        pairedAverage(
            checkins,
            "sleepQuality",
            "stress",
            function(item) {

                return item.sleepQuality <= 5 &&
                    item.stress >= 7;

            }
        );


    if (
        sleepStress &&
        sleepStress.count >= 2
    ) {

        patterns.push(
            t("sleepStress")
        );

    }


    /* ======================================
       HYDRATION → ENERGY
    ====================================== */

    const hydrationEnergy =
        pairedAverage(
            checkins,
            "water",
            "energy",
            function(item) {

                return item.water < 1500 &&
                    item.energy <= 5;

            }
        );


    if (
        hydrationEnergy &&
        hydrationEnergy.count >= 2
    ) {

        patterns.push(
            t("hydrationEnergy")
        );

    }


    /* ======================================
       REPEATED SLEEP PROBLEMS
    ====================================== */

    const problemCounts = {};


    checkins.forEach(
        function(item) {

            item.sleepProblems.forEach(
                function(problem) {

                    if (
                        problem === "none"
                    ) {

                        return;

                    }


                    problemCounts[problem] =
                        (
                            problemCounts[problem] ||
                            0
                        ) + 1;

                }
            );

        }
    );


    const repeatedProblem =
        Object.values(
            problemCounts
        ).some(
            function(count) {

                return count >= 2;

            }
        );


    if (repeatedProblem) {

        patterns.push(
            t("repeatedSleepProblems")
        );

    }


    /* ======================================
       REPEATED SLEEP REASONS
    ====================================== */

    const reasonCounts = {};


    checkins.forEach(
        function(item) {

            item.sleepReasons.forEach(
                function(reason) {

                    reasonCounts[reason] =
                        (
                            reasonCounts[reason] ||
                            0
                        ) + 1;

                }
            );

        }
    );


    const repeatedReason =
        Object.values(
            reasonCounts
        ).some(
            function(count) {

                return count >= 2;

            }
        );


    if (repeatedReason) {

        patterns.push(
            t("repeatedSleepReasons")
        );

    }


    return patterns;

}


/* ==========================================
   RENDER PATTERNS
========================================== */

function renderPatterns(checkins) {

    const container =
        document.getElementById(
            "analysisContent"
        );


    if (!container) {

        return;

    }


    if (checkins.length < 2) {

        container.innerHTML = `
            <div class="pattern-message">
                ${t("notEnough")}
            </div>
        `;

        return;

    }


    const patterns =
        detectPatterns(checkins);


    if (!patterns.length) {

        container.innerHTML = `
            <div class="pattern-message">
                ${t("noStrongPattern")}
            </div>
        `;

        return;

    }


    container.innerHTML =
        patterns
            .slice(0, 5)
            .map(
                function(pattern) {

                    return `
                        <div class="pattern-item">
                            <span class="pattern-dot"></span>
                            <span>${pattern}</span>
                        </div>
                    `;

                }
            )
            .join("");

}


/* ==========================================
   RENDER SLEEP DETAILS
========================================== */

function renderSleepDetails(checkins) {

    const details =
        document.getElementById(
            "sleepDetails"
        );


    if (!details) {

        return;

    }


    const sleepAverage =
        average(
            checkins.map(
                function(item) {

                    return item.sleep;

                }
            )
        );


    const qualityAverage =
        average(
            checkins.map(
                function(item) {

                    return item.sleepQuality;

                }
            )
        );


    details.innerHTML = `

        <div class="detail-row">

            <span>
                ${t("sleep")}
            </span>

            <strong>
                ${
                    sleepAverage !== null
                        ? `${formatNumber(sleepAverage)} h`
                        : "—"
                }
            </strong>

        </div>


        <div class="detail-row">

            <span>
                ${t("sleepQuality")}
            </span>

            <strong>
                ${
                    qualityAverage !== null
                        ? `${formatNumber(qualityAverage)}/10`
                        : "—"
                }
            </strong>

        </div>

    `;

}


/* ==========================================
   RENDER TAGS
========================================== */

function renderTags(
    elementId,
    values
) {

    const container =
        document.getElementById(
            elementId
        );


    if (!container) {

        return;

    }


    const counts = {};


    values.forEach(
        function(value) {

            if (!value) return;

            counts[value] =
                (
                    counts[value] ||
                    0
                ) + 1;

        }
    );


    const sorted =
        Object.entries(
            counts
        )
        .sort(
            function(a, b) {

                return b[1] - a[1];

            }
        )
        .slice(0, 6);


    if (!sorted.length) {

        container.innerHTML = "";

        return;

    }


    container.innerHTML =
        sorted
            .map(
                function(item) {

                    return `
                        <span class="tag">
                            ${item[0]}
                        </span>
                    `;

                }
            )
            .join("");

}


/* ==========================================
   RENDER SLEEP TAGS
========================================== */

function renderSleepTags(checkins) {

    const problems = [];


    const reasons = [];


    checkins.forEach(
        function(item) {

            problems.push(
                ...item.sleepProblems
            );

            reasons.push(
                ...item.sleepReasons
            );

        }
    );


    renderTags(
        "sleepProblemsTags",
        problems
    );


    renderTags(
        "sleepReasonsTags",
        reasons
    );

}


/* ==========================================
   RENDER HISTORY
========================================== */

function renderHistory(checkins) {

    const container =
        document.getElementById(
            "historyRows"
        );


    if (!container) {

        return;

    }


    if (!checkins.length) {

        container.innerHTML = "";

        return;

    }


    container.innerHTML =
        checkins
            .slice(0, 7)
            .map(
                function(item) {

                    return `

                        <div class="history-row">

                            <span>
                                ${formatDate(item.date)}
                            </span>

                            <span>
                                ${
                                    item.sleep !== null
                                        ? `${formatNumber(item.sleep)}h`
                                        : "—"
                                }
                            </span>

                            <span>
                                ${
                                    item.energy !== null
                                        ? `${formatNumber(item.energy)}/10`
                                        : "—"
                                }
                            </span>

                            <span>
                                ${
                                    item.stress !== null
                                        ? `${formatNumber(item.stress)}/10`
                                        : "—"
                                }
                            </span>

                        </div>

                    `;

                }
            )
            .join("");

}


/* ==========================================
   CALCULATE STREAK
========================================== */

function calculateStreak(checkins) {

    const dates =
        new Set(
            checkins
                .map(
                    function(item) {

                        return item.date;

                    }
                )
                .filter(Boolean)
        );


    let streak = 0;


    const current =
        new Date();


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


        const date =
            `${year}-${month}-${day}`;


        if (!dates.has(date)) {

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
   RENDER PROGRESS
========================================== */

function renderProgress(checkins) {

    const total =
        document.getElementById(
            "totalDays"
        );


    const streak =
        document.getElementById(
            "streakDays"
        );


    if (total) {

        total.textContent =
            checkins.length;

    }


    if (streak) {

        streak.textContent =
            calculateStreak(
                checkins
            );

    }

}


/* ==========================================
   LOCAL INSIGHT FALLBACK
========================================== */

function localInsight(checkins) {

    if (checkins.length < 2) {

        return t("notEnough");

    }


    const patterns =
        detectPatterns(checkins);


    if (patterns.length) {

        return patterns[0];

    }


    return t("noStrongPattern");

}


/* ==========================================
   RENDER INSIGHT
========================================== */

function renderInsight(
    text,
    isAI
) {

    const container =
        document.getElementById(
            "insightText"
        );


    if (!container) {

        return;

    }


    container.textContent =
        text;


    if (isAI) {

        container.dataset.source =
            "circle-ai";

    }

}


/* ==========================================
   GENERATE CIRCLE AI INSIGHT
========================================== */

async function generateCircleAIInsight(
    checkins
) {

    try {

        const {
            data,
            error
        } =
            await supabaseClient.functions.invoke(
                "circle-ai",
                {
                    body: {

                        language:
                            language === "ar"
                                ? "Arabic"
                                : "English",

                        checkins:
                            checkins
                                .slice(
                                    0,
                                    30
                                )
                                .map(
                                    function(item) {

                                        /*
                                         * IMPORTANT:
                                         * Do NOT send free-text notes.
                                         */

                                        return {

                                            date:
                                                item.date,

                                            sleep_hours:
                                                item.sleep,

                                            sleep_quality:
                                                item.sleepQuality,

                                            sleep_problems:
                                                item.sleepProblems,

                                            sleep_reasons:
                                                item.sleepReasons,

                                            water_ml:
                                                item.water,

                                            energy_level:
                                                item.energy,

                                            stress_level:
                                                item.stress,

                                            mood:
                                                item.mood

                                        };

                                    }
                                )

                    }

                }
            );


        if (error) {

            console.error(
                "Circle AI error:",
                error
            );

            return null;

        }


        if (
            !data ||
            !data.success
        ) {

            console.error(
                "Circle AI invalid response:",
                data
            );

            return null;

        }


        return data;

    } catch (error) {

        console.error(
            "Circle AI unexpected error:",
            error
        );

        return null;

    }

}


/* ==========================================
   LOAD AND RENDER EVERYTHING
========================================== */

async function loadHome() {

    const user =
        await getCurrentUser();


    if (!user) {

        /*
         * Do not create an auth redirect loop.
         * Auth page remains responsible for login.
         */

        console.warn(
            "Circle: no active session."
        );


        window.location.replace(
            "auth.html"
        );


        return;

    }


    try {

        const checkins =
            await loadCheckins(
                user
            );


        /* ==============================
           BASIC DASHBOARD
        ============================== */

        renderToday(
            checkins
        );


        renderPatterns(
            checkins
        );


        renderSleepDetails(
            checkins
        );


        renderSleepTags(
            checkins
        );


        renderHistory(
            checkins
        );


        renderProgress(
            checkins
        );


        /* ==============================
           LOCAL INSIGHT FIRST
        ============================== */

        renderInsight(
            localInsight(checkins),
            false
        );


        /* ==============================
           AI INSIGHT
           NON-BLOCKING
        ============================== */

        const insightContainer =
            document.getElementById(
                "insightText"
            );


        if (insightContainer) {

            insightContainer.textContent =
                t("analyzing");

        }


        const aiResult =
            await generateCircleAIInsight(
                checkins
            );


        if (
            aiResult &&
            aiResult.insight
        ) {

            renderInsight(
                aiResult.insight,
                true
            );

        } else {

            renderInsight(
                localInsight(checkins),
                false
            );

        }


        console.log(
            "Circle Home loaded successfully."
        );


    } catch (error) {

        console.error(
            "Circle Home error:",
            error
        );


        const analysis =
            document.getElementById(
                "analysisContent"
            );


        if (analysis) {

            analysis.textContent =
                t("noStrongPattern");

        }

    }

}


/* ==========================================
   LOGOUT
========================================== */

async function logout() {

    try {

        const {
            error
        } =
            await supabaseClient.auth.signOut();


        if (error) {

            console.error(
                "Logout error:",
                error
            );

            return;

        }


        window.location.replace(
            "auth.html"
        );

    } catch (error) {

        console.error(
            "Logout unexpected error:",
            error
        );

    }

}


/* ==========================================
   LOGOUT BUTTON
========================================== */

const logoutButton =
    document.getElementById(
        "logoutBtn"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        logout
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


            /*
             * Re-render Home immediately
             * in the selected language.
             */

            loadHome();

        }
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
   AUTH STATE
   NO ASYNC WORK INSIDE CALLBACK
========================================== */

supabaseClient.auth.onAuthStateChange(
    function(event) {

        if (
            event === "SIGNED_OUT"
        ) {

            window.location.replace(
                "auth.html"
            );

        }

    }
);


/* ==========================================
   INITIALIZE
========================================== */

applyLanguage();

loadHome();
