/* ==========================================
   CIRCLE HEALTH
   DAILY CHECK-IN
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

        daily:
            "DAILY CHECK-IN",

        title:
            "How are you feeling today?",

        description:
            "Take less than two minutes to record a few simple signals about your day.",

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
            "Waking up frequently",

        earlyWaking:
            "Waking up too early",

        lightSleep:
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

        noSleepProblem:
            "No sleep problem",

        sleepReasons:
            "What may have affected your sleep?",

        sleepReasonsDescription:
            "Select the factors that may have contributed.",

        work:
            "Work or study pressure",

        family:
            "Family pressure",

        stress:
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


    ar: {

        back:
            "→ العودة للرئيسية",

        daily:
            "التسجيل اليومي",

        title:
            "كيف تشعر اليوم؟",

        description:
            "يستغرق التسجيل أقل من دقيقتين لتسجيل بعض المؤشرات البسيطة عن يومك.",

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
            "الاستيقاظ عدة مرات",

        earlyWaking:
            "الاستيقاظ مبكرًا",

        lightSleep:
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

        noSleepProblem:
            "لا توجد مشكلة في النوم",

        sleepReasons:
            "ما الذي قد يكون أثّر على نومك؟",

        sleepReasonsDescription:
            "اختر العوامل التي تعتقد أنها ساهمت في ذلك.",

        work:
            "ضغوط العمل أو الدراسة",

        family:
            "ضغوط أسرية",

        stress:
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
   GET TEXT
   ========================================== */

function t(key) {

    return translations[language][key];

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


    document.getElementById(
        "languageBtn"
    ).textContent =
        language === "ar"
            ? "English"
            : "العربية";


    document.getElementById(
        "noteInput"
    ).placeholder =
        t("notePlaceholder");


    updateCheckboxLabels();

}


/* ==========================================
   TRANSLATE CHECKBOX LABELS
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
            "noSleepProblem"

    };


    const reasonMap = {

        work: "work",

        family: "family",

        stress: "stress",

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


    document
        .querySelectorAll(
            'input[name="sleepProblem"]'
        )
        .forEach(
            function(input) {

                const label =
                    input.parentElement;

                const key =
                    problemMap[input.value];

                if (key) {

                    label.lastChild.textContent =
                        " " + t(key);

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
                    input.parentElement;

                const key =
                    reasonMap[input.value];

                if (key) {

                    label.lastChild.textContent =
                        " " + t(key);

                }

            }
        );

}


/* ==========================================
   RANGE VALUES
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
   CHECK CURRENT USER
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
   GET TODAY DATE
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
   COLLECT CHECKBOXES
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
   LOAD TODAY'S CHECK-IN
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


    /* Sleep */

    document.getElementById(
        "sleepInput"
    ).value =
        data.sleep_hours ?? "";


    /* Sleep quality */

    if (
        data.sleep_quality
    ) {

        sleepQualityInput.value =
            data.sleep_quality;

        sleepQualityValue.textContent =
            data.sleep_quality;

    }


    /* Water */

    document.getElementById(
        "waterInput"
    ).value =
        data.water_ml ?? "";


    /* Energy */

    if (
        data.energy_level
    ) {

        energyInput.value =
            data.energy_level;

        energyValue.textContent =
            data.energy_level;

    }


    /* Stress */

    if (
        data.stress_level
    ) {

        stressInput.value =
            data.stress_level;

        stressValue.textContent =
            data.stress_level;

    }


    /* Note */

    document.getElementById(
        "noteInput"
    ).value =
        data.daily_note || "";


    /* Sleep problems */

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


    /* Sleep reasons */

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


    saveButton.disabled = true;

    saveButton.textContent =
        t("saving");


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


    const payload = {

        user_id:
            user.id,

        checkin_date:
            today,

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

        /*
         * UPSERT means:
         * create today's record if it doesn't exist,
         * otherwise update today's record.
         */

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


        showMessage(
            t("saved"),
            "success"
        );


        /*
         * Return to Home after saving.
         */

        setTimeout(
            function() {

                window.location.href =
                    "home.html";

            },
            1000
        );


    } catch (error) {

        console.error(error);

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


    /*
     * If today's check-in already exists,
     * load it so the user can edit it.
     */

    await loadTodayCheckin(user);

}


initialize();
