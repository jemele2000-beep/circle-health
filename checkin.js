```javascript
/* ==========================================
   CIRCLE
   DAILY CHECK-IN
   WITH CIRCLE AI
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

        back: "← Back to Home",

        daily: "DAILY CHECK-IN",

        title: "How are you feeling today?",

        description:
            "Take less than two minutes to record a few simple signals about your day.",

        mood:
            "How would you describe your mood today?",

        moodDescription:
            "Choose the option that best describes how you feel today.",

        veryGood: "Very good",

        good: "Good",

        okay: "Okay",

        low: "Low",

        sleep:
            "How long did you sleep?",

        sleepDescription:
            "Enter the actual hours you slept.",

        hours: "Hours",

        sleepQuality:
            "How was your sleep?",

        sleepQualityDescription:
            "Rate the quality of your sleep from 1 to 10.",

        veryPoor: "Very poor",

        excellent: "Excellent",

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
   TRANSLATION
========================================== */

function t(key) {

    return (
        translations[language] &&
        translations[language][key]
    ) || key;

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

        backBtn: "back",

        dateLabel: "daily",

        pageTitle: "title",

        pageDescription: "description",

        moodTitle: "mood",

        moodDescription: "moodDescription",

        moodVeryGood: "veryGood",

        moodGood: "good",

        moodOkay: "okay",

        moodLow: "low",

        sleepTitle: "sleep",

        sleepDescription: "sleepDescription",

        sleepUnit: "hours",

        sleepQualityTitle: "sleepQuality",

        sleepQualityDescription:
            "sleepQualityDescription",

        sleepQualityLow: "veryPoor",

        sleepQualityHigh: "excellent",

        sleepProblemsTitle:
            "sleepProblems",

        sleepProblemsDescription:
            "sleepProblemsDescription",

        sleepReasonsTitle:
            "sleepReasons",

        sleepReasonsDescription:
            "sleepReasonsDescription",

        waterTitle: "water",

        waterDescription:
            "waterDescription",

        waterUnit: "milliliters",

        energyTitle: "energy",

        energyDescription:
            "energyDescription",

        energyLow: "veryLow",

        energyHigh: "veryHigh",

        stressTitle: "stressTitle",

        stressDescription:
            "stressDescription",

        stressLow: "veryLow",

        stressHigh: "veryHigh",

        noteTitle: "note",

        noteDescription:
            "noteDescription",

        saveBtn: "save",

        privacyNote: "privateData"

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

        work: "work",

        family: "family",

        stress: "stress",

        overthinking: "overthinking",

        financial: "financial",

        screens: "screens",

        caffeine: "caffeine",

        schedule: "schedule",

        noise: "noise",

        environment: "environment",

        pain: "pain",

        health: "health",

        other: "other",

        unknown: "unknown"

    };


    document
        .querySelectorAll(
            'input[name="sleepProblem"]'
        )
        .forEach(
            function(input) {

                const label =
                    input.closest("label");

                if (!label) return;

                const text =
                    label.querySelector("span");

                const key =
                    problemMap[input.value];

                if (text && key) {

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

                if (!label) return;

                const text =
                    label.querySelector("span");

                const key =
                    reasonMap[input.value];

                if (text && key) {

                    text.textContent =
                        t(key);

                }

            }
        );

}


/* ==========================================
   RANGE INPUTS
========================================== */

function setupRangeInput(
    inputId,
    valueId
) {

    const input =
        document.getElementById(inputId);

    const value =
        document.getElementById(valueId);


    if (!input || !value) {

        console.error(
            "Range element missing:",
            inputId,
            valueId
        );

        return;

    }


    function updateValue() {

        value.textContent =
            input.value;

    }


    input.addEventListener(
        "input",
        updateValue
    );


    input.addEventListener(
        "change",
        updateValue
    );


    updateValue();

}


setupRangeInput(
    "sleepQualityInput",
    "sleepQualityValue"
);

setupRangeInput(
    "energyInput",
    "energyValue"
);

setupRangeInput(
    "stressInput",
    "stressValue"
);


/* ==========================================
   CURRENT USER
========================================== */

async function getCurrentUser() {

    try {

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

    } catch (error) {

        console.error(
            "Get user error:",
            error
        );


        showMessage(
            t("loginRequired"),
            "error"
        );


        return null;

    }

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
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            now.getDate()
        ).padStart(
            2,
            "0"
        );


    return (
        year +
        "-" +
        month +
        "-" +
        day
    );

}


/* ==========================================
   CHECKBOX VALUES
========================================== */

function getSelectedValues(name) {

    return Array
        .from(
            document.querySelectorAll(
                'input[name="' +
                name +
                '"]:checked'
            )
        )
        .map(
            function(input) {

                return input.value;

            }
        );

}


/* ==========================================
   MOOD
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
   VALIDATION
========================================== */

function validateForm() {

    const sleepInput =
        document.getElementById(
            "sleepInput"
        );

    const waterInput =
        document.getElementById(
            "waterInput"
        );


    if (!sleepInput) {

        console.error(
            "sleepInput not found"
        );

        return false;

    }


    const sleep =
        sleepInput.value.trim();


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
        !Number.isFinite(
            sleepNumber
        ) ||
        sleepNumber < 0 ||
        sleepNumber > 24
    ) {

        showMessage(
            t("invalidSleep"),
            "error"
        );

        return false;

    }


    if (
        waterInput &&
        waterInput.value.trim() !== ""
    ) {

        const waterNumber =
            Number(
                waterInput.value
            );


        if (
            !Number.isFinite(
                waterNumber
            ) ||
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


    if (!box) {

        alert(message);

        return;

    }


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


    if (!box) return;


    box.textContent = "";

    box.className =
        "message";

}


/* ==========================================
   LOAD TODAY CHECK-IN
========================================== */

async function loadTodayCheckin(user) {

    try {

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
                    'input[name="mood"][value="' +
                    data.mood +
                    '"]'
                );


            if (moodInput) {

                moodInput.checked =
                    true;

            }

        }


        /* =========================
           SLEEP
        ========================= */

        const sleepInput =
            document.getElementById(
                "sleepInput"
            );


        if (sleepInput) {

            sleepInput.value =
                data.sleep_hours ?? "";

        }


        /* =========================
           SLEEP QUALITY
        ========================= */

        const sleepQualityInput =
            document.getElementById(
                "sleepQualityInput"
            );

        const sleepQualityValue =
            document.getElementById(
                "sleepQualityValue"
            );


        if (
            sleepQualityInput &&
            data.sleep_quality !== null &&
            data.sleep_quality !== undefined
        ) {

            sleepQualityInput.value =
                data.sleep_quality;


            if (sleepQualityValue) {

                sleepQualityValue.textContent =
                    data.sleep_quality;

            }

        }


        /* =========================
           WATER
        ========================= */

        const waterInput =
            document.getElementById(
                "waterInput"
            );


        if (waterInput) {

            waterInput.value =
                data.water_ml ?? "";

        }


        /* =========================
           ENERGY
        ========================= */

        const energyInput =
            document.getElementById(
                "energyInput"
            );

        const energyValue =
            document.getElementById(
                "energyValue"
            );


        if (
            energyInput &&
            data.energy_level !== null &&
            data.energy_level !== undefined
        ) {

            energyInput.value =
                data.energy_level;


            if (energyValue) {

                energyValue.textContent =
                    data.energy_level;

            }

        }


        /* =========================
           STRESS
        ========================= */

        const stressInput =
            document.getElementById(
                "stressInput"
            );

        const stressValue =
            document.getElementById(
                "stressValue"
            );


        if (
            stressInput &&
            data.stress_level !== null &&
            data.stress_level !== undefined
        ) {

            stressInput.value =
                data.stress_level;


            if (stressValue) {

                stressValue.textContent =
                    data.stress_level;

            }

        }


        /* =========================
           NOTE
        ========================= */

        const noteInput =
            document.getElementById(
                "noteInput"
            );


        if (noteInput) {

            noteInput.value =
                data.daily_note || "";

        }


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

    } catch (error) {

        console.error(
            "Unexpected load error:",
            error
        );

        return null;

    }

}


/* ==========================================
   CIRCLE AI
========================================== */

async function generateCircleAIInsight() {

    try {

        console.log(
            "Circle AI: starting..."
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
                "Circle AI returned:",
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


    /* =========================
       VALIDATE
    ========================= */

    if (!validateForm()) {

        return;

    }


    /* =========================
       USER
    ========================= */

    const user =
        await getCurrentUser();


    if (!user) {

        return;

    }


    /* =========================
       BUTTON
    ========================= */

    const saveButton =
        document.getElementById(
            "saveBtn"
        );


    if (!saveButton) {

        console.error(
            "saveBtn not found"
        );

        return;

    }


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


    const waterElement =
        document.getElementById(
            "waterInput"
        );


    const water =
        waterElement &&
        waterElement.value.trim() !== ""
            ? Number(
                waterElement.value
            )
            : null;


    const sleepQuality =
        Number(
            document.getElementById(
                "sleepQualityInput"
            ).value
        );


    const energy =
        Number(
            document.getElementById(
                "energyInput"
            ).value
        );


    const stress =
        Number(
            document.getElementById(
                "stressInput"
            ).value
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


    const noteElement =
        document.getElementById(
            "noteInput"
        );


    const note =
        noteElement
            ? noteElement.value.trim()
            : "";


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


    console.log(
        "Saving payload:",
        payload
    );


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


        /* =========================
           SAVE ERROR
        ========================= */

        if (error) {

            console.error(
                "SUPABASE SAVE ERROR:",
                error
            );


            showMessage(
                "Save failed: " +
                (
                    error.message ||
                    "Unknown error"
                ),
                "error"
            );


            return;

        }


        console.log(
            "CHECK-IN SAVED:",
            data
        );


        /* =========================
           SUCCESS
        ========================= */

        showMessage(
            t("saved"),
            "success"
        );


        /*
         * IMPORTANT:
         *
         * We DO NOT wait for Circle AI.
         *
         * The check-in has already been
         * successfully saved.
         */


        /* =========================
           START AI IN BACKGROUND
        ========================= */

        generateCircleAIInsight()
            .then(
                function(aiResult) {

                    if (aiResult) {

                        console.log(
                            "Circle AI completed:",
                            aiResult
                        );

                    } else {

                        console.warn(
                            "Circle AI unavailable."
                        );

                    }

                }
            )
            .catch(
                function(aiError) {

                    console.error(
                        "Background AI error:",
                        aiError
                    );

                }
            );


        /* =========================
           GO HOME IMMEDIATELY
        ========================= */

        setTimeout(
            function() {

                window.location.replace(
                    "home.html"
                );

            },
            500
        );


    } catch (error) {

        console.error(
            "UNEXPECTED SAVE ERROR:",
            error
        );


        showMessage(
            "Save failed: " +
            (
                error.message ||
                "Unknown error"
            ),
            "error"
        );


    } finally {

        /*
         * Do not keep button disabled
         * if an error occurs.
         */

        saveButton.disabled =
            false;


        saveButton.textContent =
            t("save");

    }

}


/* ==========================================
   SAVE BUTTON
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const saveButton =
            document.getElementById(
                "saveBtn"
            );


        if (saveButton) {

            saveButton.addEventListener(
                "click",
                saveCheckin
            );

        } else {

            console.error(
                "Save button not found."
            );

        }

    }
);


/* ==========================================
   BACK BUTTON
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const backButton =
            document.getElementById(
                "backBtn"
            );


        if (backButton) {

            backButton.addEventListener(
                "click",
                function() {

                    window.location.href =
                        "home.html";

                }
            );

        }

    }
);


/* ==========================================
   LANGUAGE BUTTON
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

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


/* ==========================================
   START
========================================== */

if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initialize
    );

} else {

    initialize();

}
```
