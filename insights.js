/* ==========================================
   CIRCLE HEALTH
   PERSONAL INSIGHTS
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

        back:
            "← Back to Home",

        small:
            "YOUR PERSONAL INSIGHTS",

        title:
            "Understand your patterns",

        description:
            "Circle looks at your recent check-ins and helps you understand the relationships between sleep, water, energy and stress.",

        loading:
            "Analyzing your data...",

        mainInsight:
            "Today's insight",

        sleep:
            "Sleep",

        water:
            "Water",

        energy:
            "Energy",

        stress:
            "Stress",

        average:
            "Average",

        hours:
            "hours",

        ml:
            "ml",

        noData:
            "You don't have enough check-ins yet.",

        noDataDescription:
            "Keep using Circle for a few days. As your data grows, Circle will be able to identify personal patterns.",

        sleepPattern:
            "Sleep pattern",

        waterPattern:
            "Hydration pattern",

        energyPattern:
            "Energy pattern",

        stressPattern:
            "Stress pattern",

        recommendations:
            "Helpful suggestions",

        footer:
            "These insights are based on your recorded patterns and are not a medical diagnosis.",

        sleepLow:
            "Your recent sleep has been relatively low. This may be contributing to lower energy.",

        sleepGood:
            "Your recent sleep looks fairly consistent.",

        waterLow:
            "Your recent water intake has been relatively low.",

        waterGood:
            "Your recent water intake looks fairly consistent.",

        energyLow:
            "Your energy has been lower on average recently.",

        energyGood:
            "Your recent energy levels look fairly good.",

        stressHigh:
            "Your recent stress level has been relatively high.",

        stressGood:
            "Your recent stress level looks relatively manageable.",

        sleepEnergy:
            "On days with better sleep, your energy also tends to be higher.",

        sleepEnergyWeak:
            "There is not enough evidence yet to identify a clear sleep-energy relationship.",

        waterEnergy:
            "Your higher-water days tend to have better energy.",

        waterEnergyWeak:
            "There is not enough evidence yet to identify a clear water-energy relationship.",

        stressSleep:
            "Higher-stress days appear to be associated with poorer sleep.",

        stressSleepWeak:
            "There is not enough evidence yet to identify a clear stress-sleep relationship.",

        tipSleep:
            "Try protecting a consistent sleep schedule and reducing screen use before bed.",

        tipWater:
            "Try keeping water nearby and drinking regularly throughout the day.",

        tipStress:
            "Consider a short relaxing routine, breathing exercise or a screen-free break during stressful days.",

        tipEnergy:
            "Look at your sleep and hydration on low-energy days. These may reveal useful patterns.",

        error:
            "We couldn't load your insights. Please try again."

    },


    ar: {

        back:
            "→ العودة للرئيسية",

        small:
            "تحليلك الشخصي",

        title:
            "افهم أنماط جسمك ويومك",

        description:
            "ينظر Circle إلى تسجيلاتك الأخيرة ويساعدك على فهم العلاقة بين النوم والماء والطاقة والتوتر.",

        loading:
            "جارٍ تحليل بياناتك...",

        mainInsight:
            "ملاحظة اليوم",

        sleep:
            "النوم",

        water:
            "الماء",

        energy:
            "الطاقة",

        stress:
            "التوتر",

        average:
            "المتوسط",

        hours:
            "ساعات",

        ml:
            "مل",

        noData:
            "لا توجد تسجيلات كافية بعد.",

        noDataDescription:
            "استمر في استخدام Circle لعدة أيام. كلما زادت بياناتك أصبح بإمكان Circle اكتشاف أنماطك الشخصية بشكل أفضل.",

        sleepPattern:
            "نمط النوم",

        waterPattern:
            "نمط شرب الماء",

        energyPattern:
            "نمط الطاقة",

        stressPattern:
            "نمط التوتر",

        recommendations:
            "اقتراحات مفيدة",

        footer:
            "هذه الملاحظات مبنية على الأنماط التي سجلتها وليست تشخيصًا طبيًا.",

        sleepLow:
            "كان نومك في الأيام الأخيرة منخفضًا نسبيًا، وقد يكون ذلك مرتبطًا بانخفاض الطاقة.",

        sleepGood:
            "يبدو أن نومك في الأيام الأخيرة مستقر إلى حد جيد.",

        waterLow:
            "كمية الماء التي تشربها تبدو منخفضة نسبيًا في الأيام الأخيرة.",

        waterGood:
            "يبدو أن شربك للماء مستقر إلى حد جيد.",

        energyLow:
            "مستوى طاقتك كان منخفضًا نسبيًا في الفترة الأخيرة.",

        energyGood:
            "يبدو أن مستوى طاقتك في الفترة الأخيرة جيد نسبيًا.",

        stressHigh:
            "مستوى التوتر لديك كان مرتفعًا نسبيًا في الفترة الأخيرة.",

        stressGood:
            "يبدو أن مستوى التوتر لديك تحت السيطرة نسبيًا.",

        sleepEnergy:
            "في الأيام التي كان نومك فيها أفضل، تميل طاقتك أيضًا إلى أن تكون أعلى.",

        sleepEnergyWeak:
            "لا توجد بيانات كافية حتى الآن لاكتشاف علاقة واضحة بين النوم والطاقة.",

        waterEnergy:
            "الأيام التي شربت فيها كمية أكبر من الماء تميل إلى أن تكون طاقتك فيها أفضل.",

        waterEnergyWeak:
            "لا توجد بيانات كافية حتى الآن لاكتشاف علاقة واضحة بين الماء والطاقة.",

        stressSleep:
            "تبدو الأيام ذات التوتر الأعلى مرتبطة بنوم أسوأ.",

        stressSleepWeak:
            "لا توجد بيانات كافية حتى الآن لاكتشاف علاقة واضحة بين التوتر والنوم.",

        tipSleep:
            "حاول الحفاظ على مواعيد نوم منتظمة وتقليل استخدام الشاشات قبل النوم.",

        tipWater:
            "حاول إبقاء الماء قريبًا منك وشرب كميات صغيرة بانتظام خلال اليوم.",

        tipStress:
            "جرّب روتينًا قصيرًا للاسترخاء أو تمارين التنفس أو فترة قصيرة بعيدًا عن الشاشات في الأيام المجهدة.",

        tipEnergy:
            "عندما تكون طاقتك منخفضة، راقب نومك وكمية الماء التي شربتها. قد تكشف هذه البيانات نمطًا مفيدًا.",

        error:
            "تعذر تحميل تحليلك. حاول مرة أخرى."

    }

};


/* ==========================================
   TRANSLATION
   ========================================== */

function t(key) {

    return translations[language][key];

}


/* ==========================================
   CURRENT USER
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

        window.location.href =
            "auth.html";

        return null;

    }


    return data.user;

}


/* ==========================================
   LOAD DATA
   ========================================== */

async function loadCheckins(user) {

    const {
        data,
        error
    } =
        await supabaseClient
            .from("daily_checkins")
            .select(
                "checkin_date,sleep_hours,sleep_quality,water_ml,energy_level,stress_level"
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
            "Insights data error:",
            error
        );

        return null;

    }


    return data || [];

}


/* ==========================================
   AVERAGE
   ========================================== */

function average(values) {

    const valid =
        values.filter(
            value =>
                typeof value === "number" &&
                !Number.isNaN(value)
        );


    if (!valid.length) {

        return null;

    }


    return (
        valid.reduce(
            (sum, value) =>
                sum + value,
            0
        ) / valid.length
    );

}


/* ==========================================
   CORRELATION
   ========================================== */

function correlation(x, y) {

    const pairs = [];

    for (
        let i = 0;
        i < x.length;
        i++
    ) {

        if (
            typeof x[i] === "number" &&
            typeof y[i] === "number"
        ) {

            pairs.push([
                x[i],
                y[i]
            ]);

        }

    }


    if (pairs.length < 4) {

        return null;

    }


    const xAvg =
        average(
            pairs.map(
                p => p[0]
            )
        );


    const yAvg =
        average(
            pairs.map(
                p => p[1]
            )
        );


    let numerator = 0;

    let denominatorX = 0;

    let denominatorY = 0;


    pairs.forEach(
        pair => {

            const dx =
                pair[0] - xAvg;

            const dy =
                pair[1] - yAvg;


            numerator +=
                dx * dy;

            denominatorX +=
                dx * dx;

            denominatorY +=
                dy * dy;

        }
    );


    if (
        denominatorX === 0 ||
        denominatorY === 0
    ) {

        return null;

    }


    return (
        numerator /
        Math.sqrt(
            denominatorX *
            denominatorY
        )
    );

}


/* ==========================================
   FORMAT
   ========================================== */

function formatNumber(value) {

    if (value === null) {

        return "--";

    }


    return Number(value)
        .toFixed(1);

}


/* ==========================================
   BUILD INSIGHTS
   ========================================== */

function analyze(data) {

    const sleep =
        average(
            data.map(
                row =>
                    row.sleep_hours
            )
        );


    const water =
        average(
            data.map(
                row =>
                    row.water_ml
            )
        );


    const energy =
        average(
            data.map(
                row =>
                    row.energy_level
            )
        );


    const stress =
        average(
            data.map(
                row =>
                    row.stress_level
            )
        );


    const sleepEnergyCorrelation =
        correlation(
            data.map(
                row =>
                    row.sleep_hours
            ),
            data.map(
                row =>
                    row.energy_level
            )
        );


    const waterEnergyCorrelation =
        correlation(
            data.map(
                row =>
                    row.water_ml
            ),
            data.map(
                row =>
                    row.energy_level
            )
        );


    const stressSleepCorrelation =
        correlation(
            data.map(
                row =>
                    row.stress_level
            ),
            data.map(
                row =>
                    row.sleep_quality
            )
        );


    return {

        sleep,
        water,
        energy,
        stress,

        sleepEnergyCorrelation,

        waterEnergyCorrelation,

        stressSleepCorrelation

    };

}


/* ==========================================
   MAIN INSIGHT
   ========================================== */

function getMainInsight(stats) {

    if (
        stats.sleep !== null &&
        stats.energy !== null &&
        stats.sleep < 6 &&
        stats.energy < 5
    ) {

        return t("sleepLow");

    }


    if (
        stats.stress !== null &&
        stats.stress >= 7
    ) {

        return t("stressHigh");

    }


    if (
        stats.water !== null &&
        stats.water < 1500
    ) {

        return t("waterLow");

    }


    if (
        stats.energy !== null &&
        stats.energy < 5
    ) {

        return t("energyLow");

    }


    if (
        stats.sleep !== null &&
        stats.sleep >= 7
    ) {

        return t("sleepGood");

    }


    return t("energyGood");

}


/* ==========================================
   RENDER
   ========================================== */

function render(data) {

    const content =
        document.getElementById(
            "content"
        );


    if (!data.length) {

        content.innerHTML = `

            <section class="card">

                <div class="empty">

                    <h2>${t("noData")}</h2>

                    <p>
                        ${t("noDataDescription")}
                    </p>

                </div>

            </section>

        `;

        return;

    }


    const stats =
        analyze(data);


    const sleepCorrelation =
        stats.sleepEnergyCorrelation;


    const waterCorrelation =
        stats.waterEnergyCorrelation;


    const stressCorrelation =
        stats.stressSleepCorrelation;


    let sleepPattern =
        stats.sleep !== null &&
        stats.sleep < 6
            ? t("sleepLow")
            : t("sleepGood");


    let waterPattern =
        stats.water !== null &&
        stats.water < 1500
            ? t("waterLow")
            : t("waterGood");


    let energyPattern =
        stats.energy !== null &&
        stats.energy < 5
            ? t("energyLow")
            : t("energyGood");


    let stressPattern =
        stats.stress !== null &&
        stats.stress >= 7
            ? t("stressHigh")
            : t("stressGood");


    const sleepRelationship =
        sleepCorrelation !== null &&
        sleepCorrelation >= 0.35
            ? t("sleepEnergy")
            : t("sleepEnergyWeak");


    const waterRelationship =
        waterCorrelation !== null &&
        waterCorrelation >= 0.35
            ? t("waterEnergy")
            : t("waterEnergyWeak");


    const stressRelationship =
        stressCorrelation !== null &&
        stressCorrelation <= -0.35
            ? t("stressSleep")
            : t("stressSleepWeak");


    content.innerHTML = `

        <section class="card insight-main">

            <div class="insight-icon">
                💡
            </div>

            <div class="insight-title">
                ${t("mainInsight")}
            </div>

            <p>
                ${getMainInsight(stats)}
            </p>

        </section>


        <section class="card">

            <h2>
                ${t("average")}
            </h2>

            <div class="metric-grid">

                <div class="metric">

                    <div class="metric-label">
                        ${t("sleep")}
                    </div>

                    <div class="metric-value">
                        ${formatNumber(stats.sleep)}
                    </div>

                    <div class="metric-unit">
                        ${t("hours")}
                    </div>

                </div>


                <div class="metric">

                    <div class="metric-label">
                        ${t("water")}
                    </div>

                    <div class="metric-value">
                        ${formatNumber(stats.water)}
                    </div>

                    <div class="metric-unit">
                        ${t("ml")}
                    </div>

                </div>


                <div class="metric">

                    <div class="metric-label">
                        ${t("energy")}
                    </div>

                    <div class="metric-value">
                        ${formatNumber(stats.energy)}
                    </div>

                    <div class="metric-unit">
                        / 10
                    </div>

                </div>


                <div class="metric">

                    <div class="metric-label">
                        ${t("stress")}
                    </div>

                    <div class="metric-value">
                        ${formatNumber(stats.stress)}
                    </div>

                    <div class="metric-unit">
                        / 10
                    </div>

                </div>

            </div>

        </section>


        <section class="card">

            <h2>
                ${t("sleepPattern")}
            </h2>

            <div class="pattern">

                <strong>
                    ${t("sleep")}
                </strong>

                ${sleepPattern}

            </div>

            <div class="pattern">

                <strong>
                    ${t("sleepEnergy")}
                </strong>

                ${sleepRelationship}

            </div>

        </section>


        <section class="card">

            <h2>
                ${t("waterPattern")}
            </h2>

            <div class="pattern">

                <strong>
                    ${t("water")}
                </strong>

                ${waterPattern}

            </div>

            <div class="pattern">

                <strong>
                    ${t("energy")}
                </strong>

                ${waterRelationship}

            </div>

        </section>


        <section class="card">

            <h2>
                ${t("energyPattern")}
            </h2>

            <div class="pattern">

                <strong>
                    ${t("energy")}
                </strong>

                ${energyPattern}

            </div>

        </section>


        <section class="card">

            <h2>
                ${t("stressPattern")}
            </h2>

            <div class="pattern">

                <strong>
                    ${t("stress")}
                </strong>

                ${stressPattern}

            </div>

            <div class="pattern">

                <strong>
                    ${t("stress")}
                </strong>

                ${stressRelationship}

            </div>

        </section>


        <section class="card">

            <h2>
                ${t("recommendations")}
            </h2>

            <div class="tip">
                💧 ${t("tipWater")}
            </div>

            <div class="tip">
                😴 ${t("tipSleep")}
            </div>

            <div class="tip">
                🧘 ${t("tipStress")}
            </div>

            <div class="tip">
                ⚡ ${t("tipEnergy")}
            </div>

        </section>

    `;

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
        "backBtn"
    ).textContent =
        t("back");


    document.getElementById(
        "headerSmall"
    ).textContent =
        t("small");


    document.getElementById(
        "pageTitle"
    ).textContent =
        t("title");


    document.getElementById(
        "pageDescription"
    ).textContent =
        t("description");


    document.getElementById(
        "loading"
    ).textContent =
        t("loading");


    document.getElementById(
        "footerNote"
    ).textContent =
        t("footer");


    document.getElementById(
        "languageBtn"
    ).textContent =
        language === "ar"
            ? "English"
            : "العربية";


    const content =
        document.getElementById(
            "content"
        );


    if (
        content.dataset.loaded === "true"
    ) {

        loadAndRender();

    }

}


/* ==========================================
   LOAD + RENDER
   ========================================== */

async function loadAndRender() {

    const content =
        document.getElementById(
            "content"
        );


    content.dataset.loaded =
        "true";


    const user =
        await getCurrentUser();


    if (!user) {

        return;

    }


    const data =
        await loadCheckins(user);


    if (data === null) {

        content.innerHTML = `

            <div class="error">

                ${t("error")}

            </div>

        `;

        return;

    }


    render(data);

}


/* ==========================================
   BUTTONS
   ========================================== */

document
    .getElementById("backBtn")
    .addEventListener(
        "click",
        function() {

            window.location.href =
                "home.html";

        }
    );


document
    .getElementById("languageBtn")
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

        }
    );


/* ==========================================
   INITIALIZE
   ========================================== */

applyLanguage();

loadAndRender();
