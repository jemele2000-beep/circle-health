```javascript
/* ==========================================
   CIRCLE
   DAILY CHECK-IN
   WITH CIRCLE AI
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

        back:
            "← Back to Home",

        daily:
            "DAILY CHECK-IN",

        title:
            "How are you feeling today?",

        description:
            "Take less than two minutes to record a few simple signals about your day.",

        mood:
            "How would you describe your mood today?",

        moodDescription:
            "Choose the option that best describes how you feel today.",

        veryGood:
            "Very good",

        good:
            "Good",

        okay:
            "Okay",

        low:
            "Low",

        sleep:
            "How long did you sleep?",

        sleepDescription:
            "Enter the actual hours you slept.",

        hours:
            "Hours",

        sleepQuality:
            "How was your sleep?",

        sleepQualityDescription:
            "Rate the quality of your sleep from 1 to 10.",

        veryPoor:
            "Very poor",

        excellent:
            "Excellent",

        sleepProblems:
            "Did you have any sleep problems?",

        sleepProblemsDescription:
            "Select everything that applies.",

        difficultyFallingAsleep:
            "Difficulty falling asleep",

        frequentWaking:
            "Waking up during the night",

        earlyWaking:
            "Waking up too early",

        lightSleep:
            "Light / non-restorative sleep",

        daytimeSleepiness:
            "Feeling sleepy during the day",

        noSleepProblem:
            "No sleep problems",

        sleepReasons:
            "What may have affected your sleep?",

        sleepReasonsDescription:
            "Select the factors that may have contributed.",

        work:
            "Work or study pressure",

        family:
            "Family responsibilities",

        stress:
            "Stress or anxiety",

        overthinking:
            "Overthinking",

        financial:
            "Financial concerns",

        screens:
            "Phone or screen use",

        caffeine:
            "Caffeine",

        schedule:
            "Irregular sleep schedule",

        noise:
            "Noise",

        environment:
            "Room temperature / heat",

        pain:
            "Pain or physical discomfort",

        health:
            "Health problem",

        other:
            "Something else",

        unknown:
            "I don't know",

        water:
            "How much water did you drink?",

        waterDescription:
            "Enter your approximate water intake.",

        milliliters:
            "Milliliters (ml)",

        energy:
            "How energetic do you feel?",

        energyDescription:
            "1 means very low energy. 10 means extremely energetic.",

        veryLow:
            "Very low",

        veryHigh:
            "Very high",

        stressTitle:
            "How stressed do you feel?",

        stressDescription:
            "1 means very relaxed. 10 means extremely stressed.",

        note:
            "Anything else?",

        noteDescription:
            "Optional. Write anything that may help you understand your day.",

        notePlaceholder:
            "How was your day?",

        save:
            "Save Today's Check-in",

        saving:
            "Saving...",

        saved:
            "Your check-in was saved successfully.",

        updated:
            "Today's check-in was updated successfully.",

        loginRequired:
            "Please sign in again.",

        requiredSleep:
            "Please enter your sleep hours.",

        invalidSleep:
            "Sleep hours must be between 0 and 24.",

        invalidWater:
            "Water intake must be between 0 and 10,000 ml.",

        saveError:
            "We couldn't save your check-in. Please try again.",

        privateData:
            "Your data is private and connected to your Circle account."

    },


    /* ======================================
       ARABIC
    ====================================== */

    ar: {

        back:
            "→ العودة للرئيسية",

        daily:
            "التسجيل اليومي",

        title:
            "كيف تشعر اليوم؟",

        description:
            "يستغرق التسجيل أقل من دقيقتين لتسجيل بعض المؤشرات البسيطة عن يومك.",

        mood:
            "كيف تصف مزاجك اليوم؟",

        moodDescription:
            "اختر الخيار الذي يصف شعورك اليوم بشكل أفضل.",

        veryGood:
            "جيد جدًا",

        good:
            "جيد",

        okay:
            "عادي",

        low:
            "منخفض",

        sleep:
            "كم ساعة نمت؟",

        sleepDescription:
            "أدخل عدد ساعات النوم الفعلية.",

        hours:
            "ساعات",

        sleepQuality:
            "كيف كان نومك؟",

        sleepQualityDescription:
            "قيّم جودة نومك من 1 إلى 10.",

        veryPoor:
            "سيئ جدًا",

        excellent:
            "ممتاز",

        sleepProblems:
            "هل واجهت أي مشاكل في النوم؟",

        sleepProblemsDescription:
            "اختر كل ما ينطبق عليك.",

        difficultyFallingAsleep:
            "صعوبة في النوم",

        frequentWaking:
            "الاستيقاظ أثناء الليل",

        earlyWaking:
            "الاستيقاظ مبكرًا",

        lightSleep:
            "نوم خفيف أو غير مريح",

        daytimeSleepiness:
            "الشعور بالنعاس أثناء النهار",

        noSleepProblem:
            "لا توجد مشاكل في النوم",

        sleepReasons:
            "ما الذي قد يكون أثّر على نومك؟",

        sleepReasonsDescription:
            "اختر العوامل التي قد تكون ساهمت في ذلك.",

        work:
            "ضغوط العمل أو الدراسة",

        family:
            "المسؤوليات الأسرية",

        stress:
            "التوتر أو القلق",

        overthinking:
            "التفكير الزائد",

        financial:
            "الضغوط المالية",

        screens:
            "الهاتف أو الشاشات",

        caffeine:
            "الكافيين",

        schedule:
            "عدم انتظام مواعيد النوم",

        noise:
            "الضوضاء",

        environment:
            "حرارة الغرفة",

        pain:
            "ألم أو شعور بعدم الراحة",

        health:
            "مشكلة صحية",

        other:
            "شيء آخر",

        unknown:
            "لا أعرف",

        water:
            "كم كمية الماء التي شربتها؟",

        waterDescription:
            "أدخل الكمية التقريبية للماء الذي شربته.",

        milliliters:
            "ملليلتر",

        energy:
            "ما مستوى طاقتك؟",

        energyDescription:
            "1 تعني طاقة منخفضة جدًا و10 تعني طاقة عالية جدًا.",

        veryLow:
            "منخفض جدًا",

        veryHigh:
            "مرتفع جدًا",

        stressTitle:
            "ما مستوى التوتر لديك؟",

        stressDescription:
            "1 تعني هدوءًا شديدًا و10 تعني توترًا شديدًا.",

        note:
            "هل هناك شيء آخر؟",

        noteDescription:
            "اختياري. اكتب أي شيء قد يساعدك على فهم يومك.",

        notePlaceholder:
            "كيف كان يومك؟",

        save:
            "حفظ تسجيل اليوم",

        saving:
            "جارٍ الحفظ...",

        saved:
            "تم حفظ تسجيلك بنجاح.",

        updated:
            "تم تحديث تسجيل اليوم بنجاح.",

        loginRequired:
            "يرجى تسجيل الدخول مرة أخرى.",

        requiredSleep:
            "يرجى إدخال عدد ساعات النوم.",

        invalidSleep:
            "يجب أن تكون ساعات النوم بين 0 و24.",

        invalidWater:
            "يجب أن تكون كمية الماء بين 0 و10,000 مل.",

        saveError:
            "تعذر حفظ التسجيل. حاول مرة أخرى.",

        privateData:
            "بياناتك خاصة ومرتبطة بحسابك في Circle."

    }

};


/* ==========================================
   TRANSLATION FUNCTION
========================================== */

function t(key) {

    return (
        translations[language][key] ||
        key
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


    const ids = {

        backBtn:
            "back",

        dateLabel:
            "daily",

        pageTitle:
            "title",

        pageDescription:
            "description",

        moodTitle:
            "mood",

        moodDescription:
            "moodDescription",

        moodVeryGood:
            "veryGood",

        moodGood:
            "good",

        moodOkay:
            "okay",

        moodLow:
            "low",

        sleepTitle:
            "sleep",

        sleepDescription:
            "sleepDescription",

        sleepUnit:
            "hours",

        sleepQualityTitle:
            "sleepQuality",

        sleepQualityDescription:
            "sleepQualityDescription",

        sleepQualityLow:
            "veryPoor",

        sleepQualityHigh:
            "excellent",

        sleepProblemsTitle:
            "sleepProblems",

        sleepProblemsDescription:
            "sleepProblemsDescription",

        sleepReasonsTitle:
            "sleepReasons",

        sleepReasonsDescription:
            "sleepReasonsDescription",

        waterTitle:
            "water",

        waterDescription:
            "waterDescription",

        waterUnit:
            "milliliters",

        energyTitle:
            "energy",

        energyDescription:
            "energyDescription",

        energyLow:
            "veryLow",

        energyHigh:
            "veryHigh",

        stressTitle:
            "stressTitle",

        stressDescription:
            "stressDescription",

        stressLow:
            "veryLow",

        stressHigh:
            "veryHigh",

        noteTitle:
            "note",

        noteDescription:
            "noteDescription",

        saveBtn:
            "save",

        privacyNote:
            "privateData"

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
            language === "ar"
                ? "English"
                : "العربية";

    }


    const noteInput =
        document.getElementById(
            "noteInput"
        );

    if (noteInput) {

        noteInput.placeholder =
            t("notePlaceholder");

    }


    updateCheckboxLabels();

}


/* ==========================================
   CHECKBOX TRANSLATIONS
========================================== */

function updateCheckboxLabels() {

    const problemMap = {

        difficulty_falling_asleep:
            "difficultyFallingAsleep",

        frequent_waking:
            "frequentWaking",

        early_waking:
            "earlyWaking",

        light_sleep:
            "lightSleep",

        daytime_sleepiness:
            "daytimeSleepiness",

        none:
            "noSleepProblem"

    };


    const reasonMap = {

        work:
            "work",

        family:
            "family",

        stress:
            "stress",

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

        other:
            "other",

        unknown:
            "unknown"

    };


    document
        .querySelectorAll(
            'input[name="sleepProblem"]'
        )
        .forEach(
            function(input) {

                const label =
                    input.closest("label");

                if (!label) {
                    return;
                }

                const text =
                    label.querySelector("span");

                const key =
                    problemMap[input.value];


                if (
                    text &&
                    key
                ) {

                    text.textContent =
                        t(key);

                }

            }
        );


    document
        .querySelectorAll(
            'input[name="sleepReason"]'
        )
        .forEach(
            function(input) {

                const label =
                    input.closest("label");

                if (!label) {
                    return;
                }

                const text =
                    label.querySelector("span");

                const key =
                    reasonMap[input.value];


                if (
                    text &&
                    key
                ) {

                    text.textContent =
                        t(key);

                }

            }
        );

}


/* ==========================================
   RANGE INPUTS
========================================== */

const sleepQualityInput =
    document.getElementById(
        "sleepQualityInput"
    );

const sleepQualityValue =
    document.getElementById(
        "sleepQualityValue"
    );


sleepQualityInput.addEventListener(
    "input",
    function() {

        sleepQualityValue.textContent =
            sleepQualityInput.value;

    }
);


const energyInput =
    document.getElementById(
        "energyInput"
    );

const energyValue =
    document.getElementById(
        "energyValue"
    );


energyInput.addEventListener(
    "input",
    function() {

        energyValue.textContent =
            energyInput.value;

    }
);


const stressInput =
    document.getElementById(
        "stressInput"
    );

const stressValue =
    document.getElementById(
        "stressValue"
    );


stressInput.addEventListener(
    "input",
    function() {

        stressValue.textContent =
            stressInput.value;

    }
);


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

        showMessage(
            t("loginRequired"),
            "error"
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
   TODAY DATE
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
   SELECTED CHECKBOX VALUES
========================================== */

function getSelectedValues(name) {

    return Array
        .from(
            document.querySelectorAll(
                `input[name="${name}"]:checked`
            )
        )
        .map(
            function(input) {

                return input.value;

            }
        );

}


/* ==========================================
   SELECTED MOOD
========================================== */

function getSelectedMood() {

    const selected =
        document.querySelector(
            'input[name="mood"]:checked'
        );


    return selected
        ? selected.value
        : null;

}


/* ==========================================
   VALIDATE
========================================== */

function validateForm() {

    const sleep =
        document.getElementById(
            "sleepInput"
        ).value;


    const water =
        document.getElementById(
            "waterInput"
        ).value;


    if (sleep === "") {

        showMessage(
            t("requiredSleep"),
            "error"
        );


        return false;

    }


    const sleepNumber =
        Number(sleep);


    if (
        sleepNumber < 0 ||
        sleepNumber > 24
    ) {

        showMessage(
            t("invalidSleep"),
            "error"
        );


        return false;

    }


    if (water !== "") {

        const waterNumber =
            Number(water);


        if (
            waterNumber < 0 ||
            waterNumber > 10000
        ) {

            showMessage(
                t("invalidWater"),
                "error"
            );


            return false;

        }

    }


    return true;

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


    box.textContent =
        message;


    box.className =
        "message " + type;


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
            "message"
        );


    box.textContent = "";

    box.className =
        "message";

}


/* ==========================================
   LOAD TODAY CHECK-IN
========================================== */

async function loadTodayCheckin(user) {

    const today =
        getTodayDate();


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
            .eq(
                "checkin_date",
                today
            )
            .maybeSingle();


    if (error) {

        console.error(
            "Load check-in error:",
            error
        );


        return null;

    }


    if (!data) {

        return null;

    }


    /* =========================
       MOOD
    ========================= */

    if (data.mood) {

        const moodInput =
            document.querySelector(
                `input[name="mood"][value="${data.mood}"]`
            );


        if (moodInput) {

            moodInput.checked =
                true;

        }

    }


    /* =========================
       SLEEP
    ========================= */

    document.getElementById(
        "sleepInput"
    ).value =
        data.sleep_hours ?? "";


    /* =========================
       SLEEP QUALITY
    ========================= */

    if (
        data.sleep_quality !== null &&
        data.sleep_quality !== undefined
    ) {

        sleepQualityInput.value =
            data.sleep_quality;

        sleepQualityValue.textContent =
            data.sleep_quality;

    }


    /* =========================
       WATER
    ========================= */

    document.getElementById(
        "waterInput"
    ).value =
        data.water_ml ?? "";


    /* =========================
       ENERGY
    ========================= */

    if (
        data.energy_level !== null &&
        data.energy_level !== undefined
    ) {

        energyInput.value =
            data.energy_level;

        energyValue.textContent =
            data.energy_level;

    }


    /* =========================
       STRESS
    ========================= */

    if (
        data.stress_level !== null &&
        data.stress_level !== undefined
    ) {

        stressInput.value =
            data.stress_level;

        stressValue.textContent =
            data.stress_level;

    }


    /* =========================
       NOTE
    ========================= */

    document.getElementById(
        "noteInput"
    ).value =
        data.daily_note || "";


    /* =========================
       SLEEP PROBLEMS
    ========================= */

    const problems =
        Array.isArray(
            data.sleep_problems
        )
            ? data.sleep_problems
            : [];


    document
        .querySelectorAll(
            'input[name="sleepProblem"]'
        )
        .forEach(
            function(input) {

                input.checked =
                    problems.includes(
                        input.value
                    );

            }
        );


    /* =========================
       SLEEP REASONS
    ========================= */

    const reasons =
        Array.isArray(
            data.sleep_reasons
        )
            ? data.sleep_reasons
            : [];


    document
        .querySelectorAll(
            'input[name="sleepReason"]'
        )
        .forEach(
            function(input) {

                input.checked =
                    reasons.includes(
                        input.value
                    );

            }
        );


    return data;

}


/* ==========================================
   CIRCLE AI
   GENERATE WELLNESS INSIGHT
========================================== */

async function generateCircleAIInsight() {

    try {

        console.log(
            "Circle AI: generating insight..."
        );


        const {
            data,
            error
        } =
            await supabaseClient.functions.invoke(
                "circle-ai",
                {
                    body: {}
                }
            );


        if (error) {

            console.error(
                "Circle AI invocation error:",
                error
            );


            return null;

        }


        if (
            !data ||
            !data.success
        ) {

            console.error(
                "Circle AI returned an error:",
                data
            );


            return null;

        }


        console.log(
            "Circle AI result:",
            data
        );


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
   SAVE CHECK-IN
========================================== */

async function saveCheckin() {

    clearMessage();


    if (!validateForm()) {

        return;

    }


    const user =
        await getCurrentUser();


    if (!user) {

        return;

    }


    const saveButton =
        document.getElementById(
            "saveBtn"
        );


    saveButton.disabled =
        true;


    saveButton.textContent =
        t("saving");


    /* =========================
       VALUES
    ========================= */

    const sleep =
        Number(
            document.getElementById(
                "sleepInput"
            ).value
        );


    const waterValueInput =
        document.getElementById(
            "waterInput"
        ).value;


    const water =
        waterValueInput === ""
            ? null
            : Number(waterValueInput);


    const sleepQuality =
        Number(
            sleepQualityInput.value
        );


    const energy =
        Number(
            energyInput.value
        );


    const stress =
        Number(
            stressInput.value
        );


    const mood =
        getSelectedMood();


    const sleepProblems =
        getSelectedValues(
            "sleepProblem"
        );


    const sleepReasons =
        getSelectedValues(
            "sleepReason"
        );


    const note =
        document.getElementById(
            "noteInput"
        ).value.trim();


    const today =
        getTodayDate();


    /* =========================
       PAYLOAD
    ========================= */

    const payload = {

        user_id:
            user.id,

        checkin_date:
            today,

        mood:
            mood,

        sleep_hours:
            sleep,

        sleep_quality:
            sleepQuality,

        sleep_problems:
            sleepProblems,

        sleep_reasons:
            sleepReasons,

        water_ml:
            water,

        energy_level:
            energy,

        stress_level:
            stress,

        daily_note:
            note || null,

        updated_at:
            new Date().toISOString()

    };


    try {

        /* =========================
           SAVE TO SUPABASE
        ========================= */

        const {
            data,
            error
        } =
            await supabaseClient
                .from("daily_checkins")
                .upsert(
                    payload,
                    {
                        onConflict:
                            "user_id,checkin_date"
                    }
                )
                .select()
                .single();


        if (error) {

            console.error(
                "Save error:",
                error
            );


            showMessage(
                t("saveError"),
                "error"
            );


            return;

        }


        console.log(
            "Check-in saved:",
            data
        );


        /* =========================
           CIRCLE AI
        ========================= */

        const aiResult =
            await generateCircleAIInsight();


        if (aiResult) {

            console.log(
                "Circle AI successfully generated insight:",
                aiResult.insight
            );

        } else {

            console.warn(
                "Circle AI was unavailable. Check-in was still saved."
            );

        }


        /* =========================
           SUCCESS
        ========================= */

        showMessage(
            data.created_at
                ? t("saved")
                : t("updated"),
            "success"
        );


        /* =========================
           GO HOME
        ========================= */

        setTimeout(
            function() {

                window.location.href =
                    "home.html";

            },
            1000
        );


    } catch (error) {

        console.error(
            "Unexpected save error:",
            error
        );


        showMessage(
            t("saveError"),
            "error"
        );


    } finally {

        saveButton.disabled =
            false;


        saveButton.textContent =
            t("save");

    }

}


/* ==========================================
   SAVE BUTTON
========================================== */

document
    .getElementById("saveBtn")
    .addEventListener(
        "click",
        saveCheckin
    );


/* ==========================================
   BACK BUTTON
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


/* ==========================================
   LANGUAGE BUTTON
========================================== */

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

async function initialize() {

    applyLanguage();


    const user =
        await getCurrentUser();


    if (!user) {

        return;

    }


    await loadTodayCheckin(
        user
    );

}


initialize();
```
