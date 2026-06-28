import { useState, useEffect } from "react";

const timeBlocks = [
  {
    id: "wake",
    time: "5:00–5:30 AM",
    label: "WAKE",
    title: "The First 30 Minutes",
    subtitle: "Protect this window. No phone.",
    accent: "#D4A853",
    icon: "◐",
    pillars: ["Body", "Nervous System"],
    tasks: [
      {
        id: "w1",
        text: "Feet on floor immediately. No negotiation with the alarm.",
        badge: "IDENTITY",
        source: null,
        detail: {
          what: "The moment the alarm sounds, count 5-4-3-2-1 and physically move before your brain generates a reason to stay. No snooze, no 'five more minutes.'",
          why: "The urge to stay in bed is your limbic system protecting you from discomfort. Your prefrontal cortex overrides it — but only if you act within the first 5 seconds before the brain builds a resistance narrative. Mel Robbins' 5-second rule has direct neurological backing: immediate motor action interrupts the Default Mode Network before it generates avoidance loops.",
          how: "Alarm → 5-4-3-2-1 → sit up → feet touch floor. That's the full protocol. Everything else follows from that one movement.",
          evidence: "Behavioural activation research consistently shows that action precedes motivation, not the other way around. You don't feel like doing it, then do it. You do it, then feel like it."
        }
      },
      {
        id: "w2",
        text: "Drink 500ml water immediately. Brush teeth. Wash face with gentle cleanser.",
        badge: "FOUNDATION",
        source: null,
        detail: {
          what: "500ml water before anything — before coffee, before phone. Then brush, then face wash with lukewarm water and a non-foaming cleanser (CeraVe Hydrating, La Roche-Posay Toleriane).",
          why: "You wake up mildly dehydrated after 7–8 hours without fluids. Even 1–2% dehydration measurably impairs cognitive function and mood before you've done anything. Water before caffeine rehydrates the brain first. Your morning face cleanser removes overnight sebum and dead skin — prepping your skin for everything that follows.",
          how: "Glass of water on your nightstand the night before. Drink it before standing. Cleanser at the sink: 45 sec massage, 15 sec rinse with lukewarm water.",
          evidence: "Hydration research consistently links mild dehydration to reduced attention, increased perception of effort, and impaired short-term memory — effects that compound with caffeine if it's your first intake."
        }
      },
      {
        id: "w3",
        text: "Apply: Vitamin C serum → moisturizer → SPF 30–50. Every single day.",
        badge: "NON-NEGOTIABLE",
        source: null,
        detail: {
          what: "3–5 drops of L-ascorbic acid Vitamin C serum on damp skin. Wait 60 seconds. Then moisturiser (ceramides/hyaluronic acid). Then SPF 30–50 broad spectrum last, applied generously to face, ears, and neck.",
          why: "SPF is the single most clinically validated anti-aging intervention in dermatology. UVA penetrates glass and clouds year-round — the UV you get sitting near a window accumulates. Vitamin C neutralises the free radicals UV produces and stimulates collagen synthesis. These two together are your primary anti-aging stack, and they cost less than any skincare treatment.",
          how: "The whole sequence takes 2 minutes. Do it while your coffee brews so it doesn't feel like 'extra time.'",
          evidence: "Decades of photodermatology research confirm UV exposure as the #1 driver of premature skin aging — responsible for up to 80% of visible facial aging. SPF daily use studies show dramatic preservation of skin quality vs non-users over 5+ years."
        }
      },
      {
        id: "w4",
        text: "Take supplements: Omega-3 (2g EPA+DHA), Creatine (5g), Vitamin D3 (2000–4000 IU) with water or food.",
        badge: "SUPPLEMENTS",
        source: "Frontiers in Nutrition (2024) | Neurology (2024) | EFSA (2024)",
        detail: {
          what: "Omega-3 fish oil: 2g EPA+DHA combined daily. Creatine monohydrate: 5g daily (timing doesn't matter — consistency does). Vitamin D3: 2000–4000 IU, especially if you're not getting significant sun exposure.",
          why: "Omega-3 (EPA+DHA): Structural component of brain cell membranes. Reduces neuroinflammation. Maintains skin barrier hydration and elasticity. Associated with slower cellular aging (telomere length). 2024 research in Neurology showed high-dose DHA improved brain DHA levels and cognitive outcomes. EFSA approves the DHA claim for normal brain function maintenance. Creatine: A 2024 systematic review and meta-analysis in Frontiers in Nutrition (16 RCTs, ~500 participants) found significant improvements in memory, attention, and processing speed. EFSA (2024) evaluated the evidence for the claim 'daily creatine supplementation contributes to improved cognitive function.' Mechanism: creatine crosses the blood-brain barrier, increasing phosphocreatine availability for rapid ATP re-synthesis in neurons during high energy-demanding tasks. Also the best-studied, cheapest, and safest performance supplement in existence. Vitamin D3: Involved in 200+ gene expressions. Deficiency (extremely common, especially in lower-sunlight regions) is linked to depression, immune dysfunction, and reduced testosterone.",
          how: "Omega-3: 2 capsules of a quality fish oil with breakfast. Creatine: 5g powder in water, coffee, or food — flavourless. Vitamin D3: 1 softgel with a fatty meal for best absorption.",
          evidence: "Creatine: Frontiers in Nutrition meta-analysis 2024 (Xu, Bi, Zhang, Luo). EFSA scientific opinion 2024. Omega-3: Neurology RCT 2024 (Shinto et al., Oregon Health & Science University). EPA+DHA EFSA-approved for normal brain function at 250mg+ DHA daily."
        }
      },
      {
        id: "w5",
        text: "Set tongue posture: tongue flat on roof of mouth, lips sealed, nasal breathing only.",
        badge: "STRUCTURAL",
        source: null,
        detail: {
          what: "Entire tongue pressed against the roof of your mouth (not just the tip — the whole body of the tongue). Lips sealed. Teeth lightly touching or slightly apart. Breathe through your nose. Check it every hour.",
          why: "Your tongue is a muscle that applies constant upward pressure on your palate and maxilla. Correct posture may gradually influence facial bone structure over months to years — especially significant under 30 when bone remodelling is still active. Mouth breathing causes measurable facial structure deterioration over time, documented extensively in orthodontic and craniofacial literature. Every hour you spend mouth-breathing works against your facial structure.",
          how: "Set it consciously right now. Set a phone reminder every hour labelled 'tongue' for the first 2 weeks. After that it becomes automatic. Tape your mouth shut at night (3M Micropore tape) if you're a confirmed mouth breather.",
          evidence: "Craniofacial orthodontic literature documents clear links between habitual mouth breathing and elongated face shape, narrowed palate, and altered jaw development. Tongue posture research is growing, with increasing clinical acceptance of its structural influence."
        }
      },
      {
        id: "w6",
        text: "No phone for first 30 minutes. Zero exceptions.",
        badge: "CRITICAL",
        source: "Mindfulness (2024) | Sleep Medicine Reviews (2024)",
        detail: {
          what: "Phone stays face down or in another room for the first 30 minutes after waking. No exceptions, regardless of what you 'need' to check.",
          why: "On waking, your brain is in theta state — highly neuroplastic and impressionable. Your RAS (Reticular Activating System) is calibrating what matters today. Social media and news fill this calibration window with other people's urgencies, comparison triggers, and reactive information — setting a stress and distraction baseline before your day begins. A 2024 study in Mindfulness found that 10 minutes of morning mindfulness significantly improved self-control and habit adherence throughout the day. Research indicates checking email or social media first thing measurably increases cortisol and decreases productivity by fragmenting attention before peak cognition even begins.",
          how: "Charge your phone in a different room, or set it to Do Not Disturb with screen facing down. Replace the first-reach habit with water → supplements → skincare.",
          evidence: "Digital interruption research consistently shows reactive morning phone use primes a distracted attentional state that persists for hours. The first 30 minutes after waking are neurologically disproportionately influential on your day's baseline."
        }
      }
    ]
  },
  {
    id: "movement",
    time: "5:30–6:30 AM",
    label: "MOVE",
    title: "Movement & Sunlight",
    subtitle: "Your cortisol peak is fuel. Use it.",
    accent: "#E07A5F",
    icon: "◑",
    pillars: ["Body", "Nervous System"],
    tasks: [
      {
        id: "m1",
        text: "Get sunlight in your eyes within 30–45 min of waking. Outside, no sunglasses.",
        badge: "NON-NEGOTIABLE",
        source: "Circadian Biology Research | Morning Light Exposure: Medical Hypotheses (2025)",
        detail: {
          what: "Step outside within 30–45 minutes of waking. Look toward the sky (not directly at the sun) for 5–10 minutes. No sunglasses for this specific window. Even cloudy sky counts — outdoor light intensity far exceeds indoor lighting.",
          why: "Morning sunlight hitting the melanopsin cells in your retina triggers a specific circadian cascade: it anchors your cortisol awakening response, sets the timing for your melatonin release 12–14 hours later (critical for sleep quality tonight), and establishes your circadian rhythm. A 2025 paper in Medical Hypotheses specifically documented morning light exposure as a modifier of cardiovascular risk factors. This single daily habit has the largest downstream effect on your sleep quality of anything in your entire routine.",
          how: "Go outside immediately after your face routine. Walk to get coffee. Sit outside for 5 minutes. Even a 5-minute outdoor exposure in overcast weather delivers 10,000–25,000 lux — indoor lighting is typically 100–500 lux. The difference is enormous.",
          evidence: "Circadian research consistently shows that timed morning light exposure is the most potent zeitgeber (time-giver) for anchoring biological rhythms. Delayed or absent morning light is linked to insomnia, mood disorders, and metabolic dysfunction."
        }
      },
      {
        id: "m2",
        text: "Cold shower finish: end your shower with 30–60 sec of cold water.",
        badge: "NEW — HIGH EVIDENCE",
        source: "Huberman Lab Research | ScienceInsights (2026) | Søberg Research (2021)",
        detail: {
          what: "At the end of your regular shower, turn the water to cold for 30–60 seconds. Aim for 11 minutes total per week across daily exposures. You can also do this as a dedicated cold plunge if you have access.",
          why: "Cold exposure produces one of the most robust neurochemical responses available without drugs. Research shows norepinephrine increases 2–3 fold and remains elevated for hours. Dopamine rises significantly and sustains — unlike food or phone dopamine which peaks and crashes. This gives you sustained focus and mood elevation through your morning work block. Cold also converts white fat toward brown fat over time, which actively burns calories for heat (brown fat activation can increase daily energy expenditure by 120–370 calories in people with developed brown fat). Regular cold exposure (11 minutes/week total) also trains the cardiovascular system through repeated vasoconstriction-dilation cycles. Important: don't do cold exposure immediately after strength training — it blunts the muscle growth adaptation. Morning is the right time.",
          how: "Regular shower as normal → last 30–60 seconds: cold. That's it. Start with 15 seconds if 60 is too much. Work up. The resistance you feel before getting in is the point — overcoming it each morning is a small identity win that compounds.",
          evidence: "Huberman Lab synthesis of cold exposure research. Dr. Susanna Søberg's winter swimming research (Cell, 2021). ScienceInsights systematic review (2026) confirming real dopamine/norepinephrine effects and brown fat activation mechanisms."
        }
      },
      {
        id: "m3",
        text: "Walk or run outside minimum 20 min. Coffee can come with you.",
        badge: "DAILY",
        source: "BDNF Research | Exercise Neuroscience Literature",
        detail: {
          what: "Minimum 20–30 minutes of outdoor walking or running. This is not cardio — this is your primary mood, cognition, and metabolism tool. Your cortisol is naturally peaking now — movement is what that cortisol evolved to fuel.",
          why: "Morning exercise raises BDNF (Brain-Derived Neurotrophic Factor) — literally stimulating the growth of new neurons, particularly in the hippocampus. Lateral eye movement during walking activates bilateral brain stimulation (the same mechanism as EMDR therapy), which processes residual stress and primes the prefrontal cortex. Exercise also acts as the most powerful long-term antidepressant and anxiolytic available, with effects comparable to pharmacological interventions across multiple meta-analyses.",
          how: "Walk outside. Phone in pocket (not in hand). No podcasts for the first 10 minutes — let your mind process. Then music or podcast if you want. Your walk is also your morning sunlight window.",
          evidence: "Consistent morning exercise research (Exercise and Sport Sciences Reviews, 2020) shows it improves adherence vs other times of day. BDNF elevation is well-documented following aerobic exercise bouts as short as 20 minutes."
        }
      },
      {
        id: "m4",
        text: "Zone 2 cardio 2x/week (45–60 min): pace where you can hold a full conversation.",
        badge: "NEW — LONGEVITY",
        source: "Mitochondrial Research | British Journal of Sports Medicine | Healthspan Research",
        detail: {
          what: "Zone 2 = 60–70% of max heart rate. You can hold a full conversation but your breathing is noticeably elevated. For most people: brisk walking up a slight incline, easy cycling, or light jogging. Sessions of 45–60 min, 2–3x per week. This is separate from your strength training days.",
          why: "Zone 2 training is the most evidence-backed tool for long-term mitochondrial health. Mitochondria are the energy-producing organelles in every cell — their function declines with age and is directly linked to energy levels, metabolic health, and neurodegenerative disease risk. Zone 2 specifically activates PGC-1α, the master regulator of mitochondrial biogenesis — stimulating the creation of new, healthy mitochondria and improving existing ones' efficiency. Research shows 2–3 hours of Zone 2 per week reduces heart disease risk, improves fat oxidation (training your body to use fat as fuel), lowers LDL cholesterol, and improves insulin sensitivity. World-class endurance athletes spend 80%+ of their training volume in Zone 2. It's sustainable, low injury risk, and produces deep cellular adaptations that compound over years.",
          how: "Your morning walk can be Zone 2 if you pick up the pace. A 45-min brisk walk on 2 days per week is sufficient. You can also combine Zone 2 with mastic gum chewing and your morning podcast — passive multitasking that doesn't drain cognitive resources.",
          evidence: "Multiple mitochondrial research groups confirm Zone 2-induced increases in mitochondrial content, function, and fat oxidation capacity. British Journal of Sports Medicine: even 11 min/day of moderate aerobic activity significantly reduces premature death risk."
        }
      },
      {
        id: "m5",
        text: "Gym days (3x/week): resistance train. Push/pull/legs rotation, 3 compound lifts minimum.",
        badge: "STRENGTH",
        source: null,
        detail: {
          what: "3 days per week, non-consecutive. Choose: squat or deadlift variation, pressing movement (bench/overhead), pulling movement (row/pull-up). Progressive overload: add a rep or small weight increment weekly.",
          why: "Resistance training produces the highest anabolic hormone response (testosterone, growth hormone, IGF-1) of any training modality, builds muscle that is metabolically active tissue improving insulin sensitivity, and releases BDNF comparable to aerobic exercise. Muscle mass is also strongly correlated with longevity — it's one of the best predictors of all-cause mortality in studies of aging populations.",
          how: "Morning training post-movement or on dedicated training days. Finish before cold exposure if doing both — cold immediately post-strength training blunts muscle adaptation. Three working sets of 6–10 reps per compound lift is a minimum effective dose.",
          evidence: "Resistance training literature consistently shows 3x/week frequency maximises muscle protein synthesis in most populations. The combination of Zone 2 cardio + strength training is the optimal exercise stack for body composition, metabolic health, and longevity."
        }
      },
      {
        id: "m6",
        text: "Jaw exercises while walking: masseter clenches, tongue press, chin-up activation. 10 min passive.",
        badge: "STRUCTURAL",
        source: null,
        detail: {
          what: "While walking: 1) Masseter clench & release: bite down firmly, hold 5 sec, release 5 sec, 15–20 reps. 2) Tongue press: tongue flat on roof, try to swallow against the pressure, hold 10 sec, 10–15 reps. 3) Chin-up activation: tilt head slightly back, push lower jaw forward until bottom teeth are in front of top teeth, hold 10 sec, 10–15 reps.",
          why: "Masseter hypertrophy directly shapes the lower jaw — creating the wide, square jawline associated with facial definition. The suprahyoid muscles trained by tongue press affect the neck-jaw transition — one of the most visible indicators of facial sharpness. These exercises are invisible to others and require zero dedicated time when done during walking. Over 3–6 months of consistency, they produce measurable structural change.",
          how: "Start with masseter clenches only for the first week. Add tongue press in week 2. Add chin-up activation in week 3. 10 minutes of walking is enough to complete all three sets.",
          evidence: "Masseter muscle hypertrophy follows the same resistance training principles as any skeletal muscle. Craniofacial anatomy research confirms masseter size and jaw definition are directly correlated."
        }
      }
    ]
  },
  {
    id: "mind",
    time: "6:30–7:00 AM",
    label: "MIND",
    title: "Identity & Psychological Reset",
    subtitle: "Calibrate your thermostat before the world does.",
    accent: "#C8A96E",
    icon: "◈",
    pillars: ["Identity", "Nervous System", "Cognition"],
    tasks: [
      {
        id: "mi1",
        text: "10 min mindfulness or focused breathing. No input. Sit or lie down.",
        badge: "NEW — HIGH EVIDENCE",
        source: "Mindfulness (2024) | PMC Systematic Review (2024) | Brief Mindfulness & Gray Matter Study",
        detail: {
          what: "Sit comfortably, close your eyes, and focus on your breath for 10 minutes. When your mind wanders (it will), gently return attention to breathing without judgment. That's it. No app required. No special technique. Apps (Waking Up, Headspace) are useful if you find pure sitting difficult.",
          why: "10 minutes of daily mindfulness meditation produces measurable neurological changes. Research consistently shows: reduced Default Mode Network activity (the network responsible for rumination and mind-wandering), reduced amygdala reactivity to stress (emotional regulation), increased grey matter concentration in the prefrontal cortex and hippocampus (attention, memory, decision-making), and increased cortical thickness in areas of attention and self-regulation. A 2024 study in Mindfulness found 10 min of morning meditation significantly increased self-control and habit adherence throughout the day. A structural MRI study found grey matter changes in key brain hubs after just 10 hours total of mindfulness training. These effects begin within days to weeks.",
          how: "Sit after returning from your walk, before coffee or breakfast. Set a 10-min timer. Eyes closed. Breathe naturally. Attention on the physical sensation of breath (air moving through nostrils, chest rising). Return to breath when you drift. The returning is the exercise — not the perfect stillness.",
          evidence: "PMC Systematic Review 2024 (Calderone et al., Biomedicines): neurobiological changes from mindfulness confirmed. Tang et al. RCT: grey matter changes in posterior cingulate cortex after 10 hours total mindfulness training. Simply Psychology review 2026: DMN quieting, amygdala reactivity reduction documented."
        }
      },
      {
        id: "mi2",
        text: "Write 3 'I am' statements as your future self. Present tense, specific.",
        badge: "IDENTITY",
        source: "RAS Neuroscience | Psycho-Cybernetics (Maltz)",
        detail: {
          what: "Write three statements beginning with 'I am' that describe who you are becoming — not who you hope to be. Present tense. Specific. Examples: 'I am someone who makes sharp decisions fast.' 'I am lean and structured in how I look and live.' 'I am building something real.' Not: 'I want to be confident.'",
          why: "Your Reticular Activating System (RAS) — the brain's filter — uses your self-concept to decide what stimuli are relevant to you. What you identify as, you see evidence of everywhere. 'I am' statements in the present tense code the brain to search for confirmation, notice opportunities aligned with that identity, and filter out noise that contradicts it. The brain cannot reliably distinguish between deeply felt imagination and real memory. This is the thermostat mechanism — you're raising the set point you automatically return to.",
          how: "3 statements, handwritten, takes 2 minutes. Read them out loud after writing. That vocalisation activates an additional sensory input channel — auditory reinforcement of the visual + written signal.",
          evidence: "Self-concept theory (Markus, 1977 and follow-up research) established that self-schemas directly influence information processing and behaviour. Maxwell Maltz's Psycho-Cybernetics introduced the goal-striving servo-mechanism concept — later supported by neuroscientific research on self-referential processing in the medial prefrontal cortex."
        }
      },
      {
        id: "mi3",
        text: "Write the 1 most important action your future self would take today.",
        badge: "COGNITION",
        source: null,
        detail: {
          what: "Not a task list. One sentence. The single thing that — if done today — would make everything else easier or irrelevant. It comes from identity, not your to-do list. Ask: 'What would the best version of me prioritise right now?'",
          why: "Decision fatigue depletes the prefrontal cortex throughout the day. Making your most important priority decision first, before any external input, means it's made with maximum cognitive capacity and minimum reactive interference. This also functions as a pre-commitment device — once written, it's harder to rationalise away. Your 'relieved to do' list from your notebook is awareness of avoidance — this question converts that awareness into identity-level action.",
          how: "After your 'I am' statements, look at your task landscape and ask the prioritisation question. Write one sentence. Then close the notebook.",
          evidence: "Priority-setting research consistently shows that explicit pre-commitment to a single most-important task produces more output on high-value work than open to-do lists. Decision fatigue research (Baumeister et al.) confirms pre-committing while willpower is fresh improves follow-through."
        }
      },
      {
        id: "mi4",
        text: "Physiological sigh x5: double inhale through nose, long exhale through mouth.",
        badge: "REGULATION",
        source: "Huberman Lab | Stanford Cyclic Sighing Research (Cell Reports Medicine, 2023)",
        detail: {
          what: "Inhale fully through your nose. At the top, take one more short sniff to fully inflate the lungs. Then exhale slowly and completely through the mouth. Do this 5 times before sitting down to work.",
          why: "This is the fastest known method to shift the nervous system from sympathetic (alert/stressed) to parasympathetic (calm/focused). Here's the mechanism: small air sacs in the lungs (alveoli) collapse during extended exhalation stress states. The double inhale re-inflates them, dramatically increasing the lung surface area available for gas exchange. The long exhale then offloads a large CO2 bolus, which drops heart rate within seconds. A 2023 Stanford study published in Cell Reports Medicine found that cyclic sighing was the most effective breathing technique tested for reducing physiological arousal and improving mood.",
          how: "Do it standing or seated. 5 repetitions takes under 90 seconds. Do it after writing and before sitting at your desk. You will feel the shift — it's not subtle.",
          evidence: "Balban et al. (2023), Cell Reports Medicine: cyclic sighing showed significant reductions in respiratory rate, heart rate, and negative affect compared to other breathwork protocols tested."
        }
      },
      {
        id: "mi5",
        text: "Listen to music intentionally. Set your emotional state — don't let the day assign it.",
        badge: "IDENTITY",
        source: null,
        detail: {
          what: "During your morning prep or commute, choose music that matches the emotional state you want to embody today — not just what feels familiar. High-energy for drive. Calm instrumental for focused work. The choice is deliberate.",
          why: "Music directly modulates the limbic system — it's one of the most reliable emotional state-changers available without any pharmacology. Choosing your music is choosing your morning emotional baseline before any external input. Most people let Spotify's algorithm or habit decide — which means their emotional state is set by chance rather than intention. Your emotional state at 7 AM has a measurable effect on your reactivity, risk tolerance, creativity, and decision-making quality for hours.",
          how: "Build 2–3 playlists: one for high-output days (your 'beast mode' list), one for deep focus work (instrumental, no lyrics), one for recovery/wind-down. Choose based on what you need, not what's easiest.",
          evidence: "Music psychology research consistently shows tempo, mode (major/minor), and familiarity modulate heart rate, cortisol levels, and subjective energy ratings. Pre-task music selection significantly influences subsequent performance on cognitive and physical tasks."
        }
      }
    ]
  },
  {
    id: "work",
    time: "7:00–10:30 AM",
    label: "DEEP WORK",
    title: "Peak Cognition Window",
    subtitle: "Your best hours. Guard them absolutely.",
    accent: "#7EB8C4",
    icon: "◇",
    pillars: ["Cognition"],
    tasks: [
      {
        id: "dw1",
        text: "Eat breakfast now: high protein + healthy fat. No refined carbs or sugar.",
        badge: "FUEL",
        source: "Exercise & Cognition Systematic Review (NCBI, 2025) | Nutrition & Neuroscience",
        detail: {
          what: "Protein + fat breakfast. Options: 3–4 eggs (any style) + avocado. Greek yogurt + nuts + berries. Meat or fish + vegetables. Avoid: cereals, toast, pastries, juice, fruit alone.",
          why: "A 2025 systematic review examined breakfast composition and cognitive performance. The finding: protein + fat meals produce sustained glucose levels and improved sustained attention vs. high-glycaemic breakfasts that spike then crash insulin. That 10 AM cognitive slump most people experience is largely a blood sugar crash from a high-carb breakfast — not a natural energy dip. Your neurotransmitters (dopamine, serotonin, norepinephrine) are synthesised from amino acids — protein is their direct precursor. Low protein breakfast = reduced neurotransmitter synthesis during your peak cognitive hours.",
          how: "Prep the night before if mornings are tight. Boiled eggs and nuts take 30 seconds to assemble. Greek yogurt + berries takes 2 minutes.",
          evidence: "Systematic review (PMC, 2025): exercise combined with protein-adequate breakfast improved cognitive outcomes more than fasted or carb-breakfast conditions. Amino acid research: tyrosine (from protein) is the direct precursor to dopamine and norepinephrine."
        }
      },
      {
        id: "dw2",
        text: "One task. One tab. 90-min timer. No context switching.",
        badge: "CRITICAL",
        source: "Gloria Mark, UCI | Ultradian Rhythm Research",
        detail: {
          what: "Choose your single most important task before sitting down. Set a 90-minute timer. Close all other tabs, silence all notifications. One screen, one task, no movement from the chair until the timer ends (except to write things down on paper).",
          why: "Your ultradian rhythm — the biological cycle your brain runs on — peaks at approximately 90 minutes before needing recovery. Working with this cycle produces higher output than grinding through it. Task switching costs ~23 minutes of full focus recovery per switch (Gloria Mark, University of California Irvine). Every unnecessary notification, tab check, or app switch during this window is burning your most valuable cognitive resource. Your prefrontal cortex is at its daily peak right now — protect it.",
          how: "Phone in another room or in airplane mode. One browser window open. Timer running. Paper and pen next to you for capturing thoughts without switching context. If something urgent comes to mind, write it on paper and return to the task.",
          evidence: "Mark, G. et al. (UCI) research on digital interruption recovery times. Ultradian rhythm research (Peretz Lavie, Nathaniel Kleitman) confirms 90-min cognitive performance cycles. The 90-min work block is the most consistent finding in high-performance research."
        }
      },
      {
        id: "dw3",
        text: "Brain dump before starting: every open loop in your head onto paper. 5 min max.",
        badge: "COGNITION",
        source: "Working Memory Research | Cognitive Load Theory",
        detail: {
          what: "Before starting your 90-min block, spend 5 minutes writing every open loop in your head: pending tasks, worries, ideas, things you haven't done. Get them completely out of your head and onto paper. Then close the notebook and work.",
          why: "Working memory holds approximately 4 chunks of information simultaneously. Every open loop — an unresolved task, a nagging worry, an outstanding decision — occupies one of those chunks. A full working memory can't think deeply. Emptying it onto paper transfers the storage burden from your biological RAM (working memory) to external storage (paper), freeing your prefrontal cortex entirely for the work in front of it. Research on cognitive load theory confirms that reducing irrelevant cognitive load directly improves performance on complex tasks.",
          how: "Stream of consciousness onto paper for 5 minutes. Don't edit, don't organise. Just empty. The act of writing transfers the 'responsibility to remember' from your brain to the page. Your brain can then stop holding those loops open.",
          evidence: "Cognitive load theory (Sweller, 1988, with extensive follow-up research) consistently demonstrates that reducing extraneous cognitive load improves learning and task performance. Zeigarnik effect research shows that uncompleted tasks occupy working memory — writing them down closes the loop."
        }
      },
      {
        id: "dw4",
        text: "Hardest cognitive task first. No exceptions, no warm-up emails.",
        badge: "PRIORITY",
        source: "Prefrontal Cortex Physiology | Cognitive Performance Research",
        detail: {
          what: "Whatever you identified as your one most important task — that is literally the first thing you do after sitting down. Not email. Not admin. Not 'getting organised.' The hard thing, first.",
          why: "Prefrontal cortex function peaks in the first 2–3 hours after waking (post cortisol peak, when adenosine has been cleared by sleep and has not yet re-accumulated). Dopaminergic signalling — driving motivation and cognitive stamina — is also at its daily high. This window is irreplaceable. Administrative tasks can be done later when your brain is coasting. Your most difficult creative, analytical, or strategic problem requires this window. Starting with email sets a reactive attentional state that diminishes the quality of everything after it.",
          how: "Write your hardest task on a sticky note the night before and place it on your laptop lid. When you sit down, that's what you see first. The decision is already made — you don't need to think about it in the morning.",
          evidence: "Prefrontal cortex metabolism peaks in the post-cortisol awakening window. Research on morning cognitive superiority (specifically for inhibitory control, executive function, and complex problem-solving) is robust across populations."
        }
      },
      {
        id: "dw5",
        text: "After 90 min: 10 min real rest. Walk, breathe, no screen. Then second block.",
        badge: "RECOVERY",
        source: "Ultradian Rhythm Research | Performance Physiology",
        detail: {
          what: "When the 90-min timer ends: stand up, go outside or walk around, no phone, no screen. Let your mind drift freely. 10 minutes minimum before starting the next 90-min block. You can run a second block after this rest.",
          why: "The ultradian rest phase is biological — ignoring it produces declining returns even if you stay at the desk. Cognitive output quality drops sharply after 90 uninterrupted minutes, but many people push through because they're in 'grind mode.' Those extra minutes produce disproportionately low quality output while consuming cognitive resources needed for the afternoon. Honouring the rest and running 2 clean blocks produces significantly more total output than 3 mediocre unbroken hours.",
          how: "Stand up when the timer ends regardless of how you feel. The resistance to taking a break is actually a signal that you need one. Go outside if possible — even 2 minutes of natural light and movement clears the adenosine accumulation faster than sitting indoors.",
          evidence: "Peretz Lavie and Nathaniel Kleitman's ultradian rhythm research established that cognitive performance cycles in ~90-min waves throughout the day. Performance decrement studies confirm deterioration in response time and error rates after extended unbroken cognitive work."
        }
      }
    ]
  },
  {
    id: "afternoon",
    time: "12:00–5:00 PM",
    label: "AFTERNOON",
    title: "Sustain & Recover",
    subtitle: "Energy management, not time management.",
    accent: "#A8C48A",
    icon: "◎",
    pillars: ["Body", "Nervous System", "Cognition"],
    tasks: [
      {
        id: "af1",
        text: "Eat lunch: protein + vegetables + complex carbs. Avoid junk, avoid sugar.",
        badge: "FUEL",
        source: null,
        detail: {
          what: "Lean protein + fibrous vegetables + a small amount of complex carbohydrate (sweet potato, rice, oats). Examples: chicken + broccoli + rice. Salmon + salad + quinoa. Eggs + vegetables + whole grain bread. Avoid: fast food, refined carbs, sugary drinks, ultra-processed food.",
          why: "Post-lunch blood sugar determines your afternoon cognitive capacity. High-glycaemic meals spike then crash insulin — the 2–3 PM slump is largely a dietary phenomenon, not a fixed biological law. Protein + fibre slows glucose absorption, producing a flat sustained energy curve instead of a spike-crash. Your omega-3s at breakfast are also actively working — EPA reduces neuroinflammation that accumulates through morning cognitive work.",
          how: "Meal prep one batch of protein (grilled chicken, hard-boiled eggs, cooked salmon) that lasts 3 days. Pair with whatever vegetables and carbs take no time. The quality decision is made in advance.",
          evidence: "Dietary glycaemic index research consistently shows high-GI meals produce performance decrements in sustained attention tasks 60–90 min post-meal. Protein-first eating patterns improve blood glucose regulation."
        }
      },
      {
        id: "af2",
        text: "NSDR: 10–20 min lying down, eyes closed, body scan. Before 3 PM.",
        badge: "RECOVERY",
        source: "Huberman Lab | NSDR Research | NASA Nap Studies",
        detail: {
          what: "Non-Sleep Deep Rest: lie down, close your eyes, and do a slow body scan from feet to head, releasing tension in each area as you go. 10–20 minutes. You are not trying to sleep. Use a free YouTube NSDR protocol (search 'Huberman NSDR') or a Yoga Nidra recording if you find pure silence difficult.",
          why: "NSDR measurably restores dopamine levels in the striatum — the brain's motivation and reward centre — to levels comparable to a full night's sleep. Afternoon dopamine depletion from morning cognitive work is real and measurable. Without restoration, afternoon performance is fundamentally compromised. A NASA study on napping showed 20 min improved afternoon performance by 34% and alertness by 100%. Keep it before 3 PM — after that it interferes with sleep pressure that builds through the day.",
          how: "Set a timer for 20 minutes. Lie on the floor, sofa, or bed. Eyes closed, lights dim or darkened. Don't try to sleep — just allow your body to be completely still and your mind to slow. Even if you don't feel like you 'rested,' the physiological recovery happens regardless.",
          evidence: "NSDR research (Huberman, Stanford): dopamine restoration in striatum confirmed. NASA nap research (Rosekind et al.): 40-minute scheduled nap improved alertness by 100%, performance by 34%."
        }
      },
      {
        id: "af3",
        text: "Second work block: admin, communication, review. Lower cognitive load tasks.",
        badge: "WORK",
        source: "Chronobiology | Circadian Performance Research",
        detail: {
          what: "Email, scheduling, responding to messages, reviewing documents, organising files, planning, research reading. These tasks match your afternoon cognitive state — enough function to execute, not the peak needed for creation or complex problem-solving.",
          why: "Your prefrontal cortex has a natural trough in the early-to-mid afternoon. Fighting this with high-complexity work produces poor output and high frustration. Aligning cognitive load to biological capacity isn't giving up — it's elite-level time management. Administrative tasks take the same wall-clock time whenever you do them, but drain far less from your reserves when done in your natural trough vs. your peak.",
          how: "Batch all email and communication into this window. Process everything in one go rather than checking throughout the day. Set a specific end time for admin.",
          evidence: "Circadian chronobiology research maps three distinct daily performance windows: early morning (analytical peak), early afternoon (trough), late afternoon (second wind for collaborative and social tasks)."
        }
      },
      {
        id: "af4",
        text: "Mastic gum: 10 min passive jaw training during admin or reading.",
        badge: "STRUCTURAL",
        source: null,
        detail: {
          what: "Chew mastic gum (not regular gum — mastic is significantly harder, providing actual resistance) for 10 minutes while doing low-cognitive-load tasks: email, reading, walking between tasks.",
          why: "Hard chewing is the only dietary/lifestyle intervention with direct evidence for masseter muscle hypertrophy. The masseter is the most visible jaw muscle and is directly responsible for the lower jaw width and definition that frames the face. Mastic gum is 5–10x the resistance of regular gum, providing meaningful muscle stimulus. Over 3–6 months of consistent use (combined with your morning jaw exercises), it produces measurable facial changes.",
          how: "Buy mastic gum online (Amazon, iHerb). Start with one piece per session — it's hard and your jaw will fatigue. Build up. Alternate sides to avoid asymmetric development.",
          evidence: "Craniofacial anatomy and exercise physiology: masseter is a skeletal muscle that responds to resistance training principles (progressive overload, recovery, hypertrophy). Multiple case studies and growing literature confirm masseter enlargement from sustained chewing stimulus."
        }
      },
      {
        id: "af5",
        text: "Dopamine audit: notice when you're reaching for your phone. Sit with the urge for 5 min.",
        badge: "REGULATION",
        source: "Dopamine Regulation Research | Reward Circuit Neuroscience",
        detail: {
          what: "When you notice the impulse to reach for your phone, eat something, or switch tasks without a real reason — pause. Identify the feeling. Name it: boredom, avoidance, restlessness. Set a 5-minute timer and sit with it before acting.",
          why: "Every superstimulus hit (social media scroll, sugar, passive video) temporarily spikes then crashes dopamine, progressively lowering your dopamine baseline. A lowered dopamine baseline manifests as: inability to feel motivated, difficulty finding pleasure in normal activities, reduced drive to do hard things. The 5-min pause between urge and action trains your prefrontal cortex to assert top-down control over limbic impulses — which is the neurological definition of self-regulation. The urge passes on its own within minutes if you don't feed it.",
          how: "Phone in a drawer during work blocks. When you reach for it without a specific reason, notice that impulse before acting on it. Name what you're actually feeling. 5 minutes of sitting with the discomfort is a direct dopamine receptor sensitivity training session.",
          evidence: "Dopamine dysregulation research (Volkow, Koob): repeated superstimulus exposure downregulates dopamine D2 receptors, reducing baseline motivation. Prefrontal cortical control of limbic impulses is trainable and directly improves self-regulation across domains."
        }
      }
    ]
  },
  {
    id: "evening",
    time: "6:00–9:30 PM",
    label: "EVENING",
    title: "Wind Down & Repair",
    subtitle: "Your body repairs tonight. Set it up properly.",
    accent: "#8B7EC8",
    icon: "◉",
    pillars: ["Body", "Nervous System", "Identity"],
    tasks: [
      {
        id: "ev1",
        text: "Dinner: protein + vegetables. Finish eating 2–3 hours before bed.",
        badge: "NON-NEGOTIABLE",
        source: "Sleep Architecture Research | Metabolic Chronobiology",
        detail: {
          what: "Lean protein + vegetables. Moderate complex carbs are fine at dinner (they can actually support serotonin → melatonin conversion). Finish eating at least 2 hours before your target sleep time. No large meals, no sugar within 2 hours of bed.",
          why: "Late eating raises core body temperature and triggers an insulin response during the window when both should be declining for sleep onset. The body needs a metabolic cooldown to initiate the deep sleep cycles where growth hormone is released and physical repair occurs. Late eating is one of the top 3 modifiable destroyers of deep sleep quality — it's not just about digestion, it's about the entire hormonal cascade of sleep preparation.",
          how: "Set a 'kitchen closed' alarm. If you eat at 8 PM and sleep at 10:30 PM — you're in the window. Plan dinner timing when you plan your day.",
          evidence: "Metabolic chronobiology research consistently shows that eating in synchrony with circadian rhythms (earlier in the day, tapering toward evening) improves sleep quality, insulin sensitivity, and body composition independent of total caloric intake."
        }
      },
      {
        id: "ev2",
        text: "Night skincare: double cleanse → retinol (3–4x/week) → moisturizer → facial massage 3 min.",
        badge: "SKIN",
        source: "Dermatology Research | Collagen Synthesis Literature",
        detail: {
          what: "Step 1: Oil cleanser or micellar water to remove SPF and sebum. Step 2: Regular cleanser. Step 3: Wait for skin to be mostly dry, then pea-sized amount of retinol (start 0.025–0.05%, build slowly). Step 4: Moisturiser over retinol. Step 5: Upward facial massage for 3 minutes using leftover moisturiser as slip.",
          why: "Growth hormone is released almost entirely in the first slow-wave sleep cycle — and retinol works in tandem with this. Retinol accelerates cell turnover, and growth hormone then rebuilds the skin cells faster, compounding the effect. Double cleansing is essential because SPF creates a barrier that single cleansing doesn't fully remove — meaning all your night skincare would be sitting on a layer of SPF rather than penetrating skin. Retinol is the most clinically validated topical anti-aging ingredient in dermatology. Expect purging (breakouts) in weeks 2–4 — push through it. Results appear at 3–6 months.",
          how: "Start retinol 2x per week to build tolerance. Increase to 3–4x over 6 weeks. Never use on same night as AHA/BHA exfoliants. Sandwich method on sensitive nights: moisturiser → retinol → moisturiser.",
          evidence: "Multiple RCTs confirm retinoid efficacy for collagen stimulation, cell turnover acceleration, hyperpigmentation reduction, and acne management. Considered the gold standard topical anti-aging ingredient by clinical dermatologists."
        }
      },
      {
        id: "ev3",
        text: "Lymphatic drainage: neck → under-eye → cheek → jawline scoop → cold water.",
        badge: "FACIAL",
        source: "Lymphatic Physiology | Craniofacial Anatomy",
        detail: {
          what: "Step 1 — Neck prep (always first): flat fingers, slow downward strokes from below ear to collarbone, 10 strokes each side. Step 2 — Under-eye: ring fingers, 8 slow sweeping strokes from inner corner outward to temple. Step 3 — Cheeks: 8 strokes from nose outward across cheek to ear. Step 4 — Jawline scoop: flat of index + middle fingers, scoop from chin along jawline to ear, 10 strokes each side. Step 5 — Cold water splash to lock in the de-puffing.",
          why: "The neck lymph nodes are the drainage pathway for the face — opening them first is not optional. Without it, you're compressing fluid with nowhere to go. Very light pressure only — lymphatic vessels sit just beneath the skin and are easily compressed by too much force. Consistent practice removes sub-dermal fluid accumulation that literally blurs the jawline and causes under-eye bags. Morning puffiness is largely lymphatic fluid — this sequence drains it. Cold water finish causes vasoconstriction, visibly tightening pores and locking in the effect.",
          how: "5 minutes total with moisturiser or facial oil for slip. A gua sha stone amplifies this significantly — 5 strokes per zone, always upward and outward, light pressure.",
          evidence: "Lymphatic anatomy confirms the craniofacial drainage routes. Manual lymphatic drainage is a clinically recognised therapy for reducing post-surgical oedema. The same principles apply to cosmetic fluid accumulation."
        }
      },
      {
        id: "ev4",
        text: "No bright overhead lights 90 min before sleep. Lamps + dim warm light only.",
        badge: "SLEEP PREP",
        source: "Melatonin Research | Light Biology",
        detail: {
          what: "Switch off overhead LED lighting 90 minutes before your sleep time. Use floor lamps, table lamps, or candles with warm (2700K or lower) colour temperature. If you must use overhead lights, install warm-colour LED bulbs or use a dimmer.",
          why: "Melanopsin cells in your retina are highly sensitive to blue-spectrum light (the short wavelengths emitted by overhead LEDs and screens). Even 10 minutes of bright overhead light at night can delay melatonin secretion by 60–90 minutes — pushing sleep onset back, shrinking your deep sleep window, and reducing the growth hormone pulse that happens in your first deep sleep cycle. Warm, dim light in the evening range doesn't meaningfully suppress melatonin.",
          how: "Set smart bulbs to 'sunset mode' after 8 PM. Or simply turn off overhead lights and use a lamp. Blue light glasses help but don't replace dimming — it's the intensity, not just the wavelength.",
          evidence: "Multiple photobiology studies confirm that light above 10 lux with significant blue-spectrum content suppresses melatonin measurably. The 2700K warm light of incandescent-equivalent bulbs produces minimal melanopsin activation."
        }
      },
      {
        id: "ev5",
        text: "Gratitude: 3 specific things. Name 1 emotion from today. 5 min max.",
        badge: "NERVOUS SYSTEM",
        source: "Positive Psychology Research | Affective Neuroscience",
        detail: {
          what: "Write 3 specific things from today you're grateful for. Not categories — specific moments. 'The conversation with X' not 'my friends.' Then name one emotion you experienced strongly today, in one word.",
          why: "Specificity activates the reward circuit — vague gratitude ('health, family') doesn't engage the same neural circuitry as specific recalled positive experiences ('the coffee was perfect and I had 20 quiet minutes'). Specific positive recall at night influences the emotional tone of memory consolidation during sleep — your brain processes and stores the day's experiences during REM sleep, and the last emotional signal before sleeping colours this consolidation. Emotion labelling (Dan Siegel's 'name it to tame it') reduces amygdala activation — this is nervous system regulation disguised as journaling.",
          how: "3 specific lines, 1 emotion word. Handwritten. Takes 3–5 minutes. You can combine this with your 'identity check' task into a single 5-minute evening entry.",
          evidence: "Emmons & McCullough gratitude research: specific gratitude journaling showed increased positive affect, improved sleep quality, and reduced physical symptoms. Siegel, D. (name it to tame it): published fMRI data showing amygdala down-regulation from emotion labelling."
        }
      }
    ]
  },
  {
    id: "sleep",
    time: "9:30–10:00 PM",
    label: "SLEEP",
    title: "The Foundation of Everything",
    subtitle: "All other protocols depend on this.",
    accent: "#C47EB5",
    icon: "◌",
    pillars: ["Body", "Nervous System"],
    tasks: [
      {
        id: "sl1",
        text: "Take Magnesium Glycinate (300–400mg elemental magnesium) 30–60 min before sleep.",
        badge: "NEW — EVIDENCE",
        source: "PMC RCT (2025) | Sleep Foundation | Consensus Academic Search",
        detail: {
          what: "Magnesium glycinate (or magnesium bisglycinate) — 300–400mg elemental magnesium, taken 30–60 minutes before your target sleep time. Not magnesium oxide (poorly absorbed). The glycine component (the chelate) also independently supports sleep through NMDA receptor interaction.",
          why: "Magnesium is involved in over 300 enzymatic reactions and is the fourth most abundant mineral in the body — yet most people are deficient, particularly on low-vegetable diets. For sleep specifically: a systematic review and meta-analysis of RCTs found magnesium supplementation reduced sleep onset latency by approximately 17 minutes in people with insomnia. A 2025 RCT (PMC) found magnesium bisglycinate modestly but significantly improved insomnia severity in 155 adults. Mechanism: magnesium regulates GABA receptors (the brain's primary inhibitory neurotransmitter — responsible for calming neural activity), and suppresses cortisol. It also increases slow-wave (deep) sleep and has been shown to lower nighttime cortisol and raise aldosterone. The glycine component separately promotes relaxation and lowers core body temperature — both of which facilitate sleep onset.",
          how: "Take with a small amount of food or on an empty stomach — both work. 300–400mg elemental magnesium is the dose range with the best evidence. Check the label for elemental magnesium content, not total capsule weight.",
          evidence: "RCT: Abbasi et al. (2012): magnesium supplementation significantly increased sleep time, sleep efficiency, melatonin levels, and renin, while reducing cortisol and ISI score. PMC RCT 2025 (magnesium bisglycinate in 155 adults): significant improvement in insomnia severity. Consensus meta-analysis: ~17 min reduction in sleep onset latency."
        }
      },
      {
        id: "sl2",
        text: "Same wake time every day. Alarm set. No exceptions, no weekend sleep-ins.",
        badge: "NON-NEGOTIABLE",
        source: "Circadian Clock Research | Sleep Architecture Science",
        detail: {
          what: "Your alarm is set for 5–6 AM, every day including Saturday and Sunday. Non-negotiable regardless of how late you went to sleep. The circadian clock anchors to wake time, not bedtime.",
          why: "Social jet lag — defined as a difference of more than 1 hour between weekday and weekend wake times — produces measurable metabolic, cognitive, and mood effects comparable to real jet lag. It resets your circadian clock 1–2 days per week, preventing it from ever fully stabilising. A consistent wake time produces a stable cortisol awakening response, consistent melatonin timing, and predictable sleep pressure at night — making falling asleep easier and sleep quality higher. You cannot 'save' sleep by sleeping in — you can only stabilise your architecture by keeping the wake anchor fixed.",
          how: "Put your alarm in a different room. There is no snooze option. If you went to sleep late, you still wake at the set time — you'll be tired, sleep pressure will be high tonight, and sleep quality will improve.",
          evidence: "Roenneberg et al. social jet lag research: demonstrated metabolic syndrome association with even 1-hr social jet lag. Circadian rhythm stabilisation research: consistent wake times are the primary zeitgeber for circadian entrainment in humans."
        }
      },
      {
        id: "sl3",
        text: "Phone out of bedroom or face-down, no notifications enabled.",
        badge: "SLEEP HYGIENE",
        source: "Sleep Disruption Research | Digital Technology & Sleep",
        detail: {
          what: "Physically remove the phone from your bedroom, or place it face-down on Do Not Disturb mode with all notification sounds off. The charger goes in another room. Buy an alarm clock if needed.",
          why: "Anticipatory anxiety about potential notifications — even when the phone is face-down and silent — has been shown to maintain a mild vigilance state that prevents the full descent into slow-wave sleep. The amygdala is still alert for threat signals. You're technically asleep but not achieving the depth of sleep available when no device is present. This is not about willpower — it's about removing the cue entirely.",
          how: "Charge your phone in the kitchen or bathroom. Your actual wake-up alarm can be a $10 alarm clock. The benefit of phone-free sleep is disproportionate to the minor inconvenience.",
          evidence: "Sleep research on digital device presence in bedrooms consistently shows reduced sleep quality, increased nocturnal arousal, and reduced total sleep time even when devices are not actively used."
        }
      },
      {
        id: "sl4",
        text: "Mouth tape (3M Micropore) if you're a mouth breather. Silk pillowcase if side sleeping.",
        badge: "STRUCTURAL",
        source: "Orofacial Myology | Sleep Physiology Research",
        detail: {
          what: "Mouth taping: place a small strip of 3M Micropore medical tape vertically over your lips before sleep. Not tightly sealed — just a gentle reminder that redirects breathing. If you feel panicked, breathe in through your nose; it's enough. Silk pillowcase: if you sleep on your side, a silk or satin pillowcase reduces friction by ~80% vs cotton.",
          why: "Mouth breathing during sleep lowers blood oxygen saturation, increases snoring, dries the mouth and throat, reduces nitric oxide production (a vasodilator produced by nasal breathing), and drops your tongue from its correct palate position — undoing your daytime mewing. Research shows nasal breathing during sleep significantly improves sleep quality metrics. The silk pillowcase addresses a separate issue: side sleepers compress the same side of their face for 7+ hours nightly on a rough cotton surface. Asymmetric sleep wrinkles and collagen breakdown are measurable and cumulative over years.",
          how: "3M Micropore tape is sold at pharmacies. It's paper tape, not airtight — you can still breathe through the sides if needed. Most people adapt within 3–7 nights.",
          evidence: "Orofacial myology research: nasal breathing during sleep significantly reduces sleep-disordered breathing events. Skin research: silk vs cotton pillowcase friction studies confirm significant reduction in skin crease formation during sleep."
        }
      },
      {
        id: "sl5",
        text: "Final identity check: 'Did I act like the person I'm becoming today?' One word. Move on.",
        badge: "IDENTITY",
        source: "Memory Consolidation Research | Identity Psychology",
        detail: {
          what: "One question: 'Did I act like the person I'm becoming today?' One answer: yes or mostly. No lengthy self-critique, no extended review. If yes — good. If no — note the one specific thing you'd do differently. Close the notebook. Sleep.",
          why: "Your brain consolidates the day's experiences during sleep — particularly during REM cycles. The emotional tone of your last waking thoughts directly influences this consolidation process. Ending the day in self-criticism activates the threat response before sleep, disrupting the first REM cycle and reducing learning consolidation. Ending on agency ('yes, I did the work' or 'tomorrow I'll do this differently') produces forward-oriented consolidation. This is also your daily calibration of the identity you're building — one short check-in, consistently, compounds into a measurably different self-concept over months.",
          how: "One question, written or thought. One answer, one sentence. Close. Sleep. The brevity is the point — lengthy evening review activates rumination, not reflection.",
          evidence: "Memory consolidation research (Walker, Stickgold): emotional tagging of memories occurs during REM sleep, with the emotional context of recent waking state influencing consolidation quality and tone."
        }
      }
    ]
  }
];

const pillarColors = {
  "Body": "#A8C48A",
  "Nervous System": "#C47EB5",
  "Identity": "#D4A853",
  "Cognition": "#7EB8C4"
};

const badgeColors = {
  "NON-NEGOTIABLE": "#C47A7A",
  "CRITICAL": "#C47A7A",
  "NEW — HIGH EVIDENCE": "#6BB89E",
  "NEW — LONGEVITY": "#6BB89E",
  "NEW — EVIDENCE": "#6BB89E",
  "SUPPLEMENTS": "#8B7EC8",
  "STRUCTURAL": "#8B7EC8",
  "FOUNDATION": "#D4A853",
  "IDENTITY": "#D4A853",
  "REGULATION": "#C47EB5",
  "SLEEP PREP": "#C47EB5",
  "SLEEP HYGIENE": "#C47EB5",
  "RECOVERY": "#7EB8C4",
  "LONGEVITY": "#6BB89E",
  "STRENGTH": "#E07A5F",
  "WORK": "#7EB8C4",
  "PRIORITY": "#7EB8C4",
  "COGNITION": "#7EB8C4",
  "FUEL": "#A8C48A",
  "SKIN": "#C8A96E",
  "FACIAL": "#C8A96E",
  "DAILY": "#666"
};

export default function TotalDailyRoutineV2() {
  const [activeBlock, setActiveBlock] = useState("wake");
  const [checked, setChecked] = useState({});
  const [expanded, setExpanded] = useState(null);
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const todayKey = () => {
    const d = new Date();
    return `routine-${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
  };

  // Load today's checks on mount from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(todayKey());
      if (saved) setChecked(JSON.parse(saved));
      const meta = localStorage.getItem("routine-meta");
      if (meta) setLastSaved(JSON.parse(meta).lastSaved);
    } catch (e) {
      // Start fresh if anything fails
    }
    setLoaded(true);
  }, []);

  // Save to localStorage whenever checked changes
  useEffect(() => {
    if (!loaded) return;
    setSaving(true);
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(todayKey(), JSON.stringify(checked));
        const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        localStorage.setItem("routine-meta", JSON.stringify({ lastSaved: now }));
        setLastSaved(now);
      } catch (e) {
        // Silent fail
      }
      setSaving(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [checked, loaded]);

  const toggle = (id) => setChecked(p => ({ ...p, [id]: !p[id] }));
  const toggleExpand = (id) => setExpanded(p => p === id ? null : id);

  const resetDay = () => {
    setChecked({});
    try { localStorage.setItem(todayKey(), JSON.stringify({})); } catch(e) {}
  };

  const current = timeBlocks.find(b => b.id === activeBlock);
  const done = current.tasks.filter(t => checked[t.id]).length;
  const pct = Math.round((done / current.tasks.length) * 100);

  const totalTasks = timeBlocks.flatMap(b => b.tasks);
  const totalDone = totalTasks.filter(t => checked[t.id]).length;
  const totalPct = Math.round((totalDone / totalTasks.length) * 100);

  if (!loaded) return (
    <div style={{ minHeight: "100vh", background: "#060608", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "10px", color: "#333", letterSpacing: "4px" }}>LOADING...</div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#060608", color: "#E0D8D0", fontFamily: "Georgia, 'Palatino Linotype', serif" }}>

      {/* Header */}
      <div style={{ background: "#09090C", borderBottom: "1px solid #141418", padding: "24px 20px 18px" }}>
        {/* Top bar: date + save status */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: "8px", letterSpacing: "3px", color: "#3A3A44" }}>
            {new Date().toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" }).toUpperCase()}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: saving ? "#D4A853" : lastSaved ? "#3A4A3A" : "#222", letterSpacing: "1px", transition: "color 0.3s" }}>
              {saving ? "SAVING..." : lastSaved ? `SAVED ${lastSaved}` : "NOT SAVED YET"}
            </div>
            <button onClick={resetDay} style={{ background: "none", border: "1px solid #1E1E26", color: "#333", borderRadius: "4px", padding: "3px 8px", fontFamily: "'Courier New', monospace", fontSize: "7px", letterSpacing: "1px", cursor: "pointer" }}>
              RESET DAY
            </button>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{ fontSize: "clamp(18px, 4vw, 28px)", fontWeight: "300", margin: "0 0 3px", letterSpacing: "-0.5px", lineHeight: 1.2 }}>
              Your Complete Day.
            </h1>
            <h2 style={{ fontSize: "clamp(16px, 3vw, 22px)", fontWeight: "300", margin: "0 0 12px", color: current.accent, transition: "color 0.3s", letterSpacing: "-0.3px" }}>
              Built on science. Proven by research.
            </h2>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {Object.entries(pillarColors).map(([k, v]) => (
                <div key={k} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: v }} />
                  <span style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: "#444", letterSpacing: "1px" }}>{k.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "12px" }}>
            <div style={{ fontSize: "30px", fontWeight: "200", color: totalPct > 50 ? "#6BB89E" : "#444", lineHeight: 1, transition: "color 0.3s" }}>
              {totalPct}<span style={{ fontSize: "12px" }}>%</span>
            </div>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: "#333", letterSpacing: "1px" }}>DAY TOTAL</div>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: "#2A2A2A", letterSpacing: "1px", marginTop: "2px" }}>
              {totalDone}/{totalTasks.length}
            </div>
          </div>
        </div>
      </div>

      {/* Block nav */}
      <div style={{ overflowX: "auto", scrollbarWidth: "none", borderBottom: "1px solid #111", background: "#08080A" }}>
        <div style={{ display: "flex", minWidth: "max-content" }}>
          {timeBlocks.map(b => {
            const bDone = b.tasks.filter(t => checked[t.id]).length;
            const bPct = Math.round((bDone / b.tasks.length) * 100);
            const isActive = activeBlock === b.id;
            return (
              <button key={b.id} onClick={() => { setActiveBlock(b.id); setExpanded(null); }}
                style={{ background: isActive ? "#0D0D10" : "transparent", border: "none", borderBottom: isActive ? `2px solid ${b.accent}` : "2px solid transparent", padding: "12px 14px 10px", cursor: "pointer", textAlign: "center", transition: "all 0.2s", minWidth: "70px" }}>
                <div style={{ fontSize: "15px", color: isActive ? b.accent : "#222", marginBottom: "3px", transition: "color 0.2s" }}>{b.icon}</div>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: "6px", color: isActive ? b.accent : "#2A2A2A", letterSpacing: "1.5px", marginBottom: "5px", transition: "color 0.2s" }}>{b.label}</div>
                <div style={{ width: "100%", height: "2px", background: "#141414", borderRadius: "1px" }}>
                  <div style={{ width: `${bPct}%`, height: "100%", background: b.accent, borderRadius: "1px", transition: "width 0.3s" }} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Current block header */}
      <div style={{ padding: "18px 20px 14px", borderBottom: `1px solid ${current.accent}12`, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: "8px", color: current.accent, letterSpacing: "2px", marginBottom: "5px" }}>{current.time}</div>
          <div style={{ fontSize: "17px", fontWeight: "400", marginBottom: "2px" }}>{current.title}</div>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: "9px", color: "#444", marginBottom: "10px" }}>{current.subtitle}</div>
          <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
            {current.pillars.map(p => (
              <span key={p} style={{ fontFamily: "'Courier New', monospace", fontSize: "6px", color: pillarColors[p], background: pillarColors[p] + "12", border: `1px solid ${pillarColors[p]}25`, padding: "2px 7px", borderRadius: "20px", letterSpacing: "1px" }}>{p.toUpperCase()}</span>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "right", marginLeft: "14px" }}>
          <div style={{ fontSize: "24px", fontWeight: "300", color: current.accent, lineHeight: 1 }}>{pct}<span style={{ fontSize: "10px" }}>%</span></div>
          <div style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: "#333" }}>{done}/{current.tasks.length}</div>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: "1px", background: "#0E0E0E" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: current.accent, transition: "width 0.4s ease" }} />
      </div>

      {/* Tasks */}
      <div style={{ padding: "12px 16px 60px" }}>
        {current.tasks.map((task) => {
          const isDone = !!checked[task.id];
          const isOpen = expanded === task.id;
          const badgeColor = badgeColors[task.badge] || "#555";

          return (
            <div key={task.id} style={{ marginBottom: "8px" }}>
              <div style={{
                background: isDone ? "#0A0A0C" : "#0C0C10",
                border: `1px solid ${isDone ? current.accent + "25" : isOpen ? current.accent + "30" : "#141418"}`,
                borderRadius: "8px",
                overflow: "hidden",
                transition: "border-color 0.2s"
              }}>
                {/* Main row */}
                <div style={{ display: "flex", alignItems: "stretch" }}>
                  {/* Check */}
                  <div onClick={() => toggle(task.id)} style={{ width: "46px", minWidth: "46px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", borderRight: "1px solid #111" }}>
                    <div style={{ width: "17px", height: "17px", borderRadius: "50%", border: `1.5px solid ${isDone ? current.accent : "#202028"}`, background: isDone ? current.accent : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.18s" }}>
                      {isDone && <svg width="8" height="7" viewBox="0 0 9 7"><path d="M1 3.5L3.5 6L8 1" stroke="#000" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                    </div>
                  </div>

                  {/* Content */}
                  <div onClick={() => toggleExpand(task.id)} style={{ flex: 1, padding: "12px 14px", cursor: "pointer" }}>
                    <div style={{ display: "flex", gap: "5px", alignItems: "center", marginBottom: "6px", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: badgeColor, background: badgeColor + "14", border: `1px solid ${badgeColor}28`, padding: "2px 7px", borderRadius: "20px", letterSpacing: "1px", flexShrink: 0 }}>
                        {task.badge}
                      </span>
                      {task.source && (
                        <span style={{ fontFamily: "'Courier New', monospace", fontSize: "6px", color: "#2E2E36", letterSpacing: "0.5px" }}>
                          📄 {task.source.split('|')[0].trim()}
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "6px" }}>
                      <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.55, color: isDone ? "#333" : "#C0B8B0", textDecoration: isDone ? "line-through" : "none", flex: 1, transition: "all 0.2s" }}>
                        {task.text}
                      </p>
                      <span style={{ color: isOpen ? current.accent : "#1E1E28", fontSize: "9px", marginTop: "3px", flexShrink: 0, transform: isOpen ? "rotate(90deg)" : "none", transition: "all 0.2s" }}>▶</span>
                    </div>
                  </div>
                </div>

                {/* Expanded detail */}
                {isOpen && task.detail && (
                  <div style={{ borderTop: `1px solid ${current.accent}15`, background: "#08080B" }}>
                    {/* What */}
                    <div style={{ padding: "14px 18px 0 18px" }}>
                      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: current.accent, letterSpacing: "2px", marginBottom: "6px", opacity: 0.7 }}>WHAT TO DO</div>
                      <p style={{ margin: "0 0 14px", fontSize: "12px", lineHeight: "1.8", color: "#7A7278", fontFamily: "Georgia, serif" }}>{task.detail.what}</p>
                    </div>
                    {/* Why */}
                    <div style={{ padding: "0 18px 0 18px", borderTop: `1px solid ${current.accent}08` }}>
                      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: "#6BB89E", letterSpacing: "2px", marginBottom: "6px", marginTop: "12px", opacity: 0.8 }}>WHY IT WORKS</div>
                      <p style={{ margin: "0 0 14px", fontSize: "12px", lineHeight: "1.8", color: "#7A7278", fontFamily: "Georgia, serif" }}>{task.detail.why}</p>
                    </div>
                    {/* How */}
                    <div style={{ padding: "0 18px 0 18px", borderTop: `1px solid ${current.accent}08` }}>
                      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: "#D4A853", letterSpacing: "2px", marginBottom: "6px", marginTop: "12px", opacity: 0.8 }}>HOW EXACTLY</div>
                      <p style={{ margin: "0 0 14px", fontSize: "12px", lineHeight: "1.8", color: "#7A7278", fontFamily: "Georgia, serif" }}>{task.detail.how}</p>
                    </div>
                    {/* Evidence */}
                    <div style={{ padding: "0 18px 14px 18px", borderTop: `1px solid ${current.accent}08`, background: "#07070A", marginTop: "4px" }}>
                      <div style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: "#8B7EC8", letterSpacing: "2px", marginBottom: "6px", marginTop: "12px", opacity: 0.8 }}>EVIDENCE</div>
                      <p style={{ margin: 0, fontSize: "11px", lineHeight: "1.7", color: "#4A4858", fontFamily: "'Courier New', monospace" }}>{task.detail.evidence}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {pct === 100 && (
          <div style={{ marginTop: "14px", padding: "18px", border: `1px solid ${current.accent}35`, borderRadius: "8px", background: `${current.accent}06`, textAlign: "center" }}>
            <div style={{ fontSize: "18px", marginBottom: "6px", color: current.accent }}>✦</div>
            <div style={{ fontFamily: "'Courier New', monospace", fontSize: "9px", color: current.accent, letterSpacing: "3px" }}>BLOCK COMPLETE</div>
          </div>
        )}

        {/* Nav arrows */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px", paddingTop: "18px", borderTop: "1px solid #111" }}>
          {(() => {
            const idx = timeBlocks.findIndex(b => b.id === activeBlock);
            const prev = timeBlocks[idx - 1];
            const next = timeBlocks[idx + 1];
            return (
              <>
                <button onClick={() => prev && setActiveBlock(prev.id)} style={{ background: prev ? "#0E0E12" : "transparent", border: `1px solid ${prev ? "#1A1A22" : "transparent"}`, color: prev ? "#555" : "#111", borderRadius: "6px", padding: "9px 14px", cursor: prev ? "pointer" : "default", fontFamily: "'Courier New', monospace", fontSize: "8px", letterSpacing: "2px" }}>
                  ← {prev ? prev.label : ""}
                </button>
                <div style={{ fontFamily: "'Courier New', monospace", fontSize: "7px", color: "#222", letterSpacing: "1px", alignSelf: "center" }}>
                  {idx + 1} / {timeBlocks.length}
                </div>
                <button onClick={() => next && setActiveBlock(next.id)} style={{ background: next ? "#0E0E12" : "transparent", border: `1px solid ${next ? current.accent + "35" : "transparent"}`, color: next ? current.accent : "#111", borderRadius: "6px", padding: "9px 14px", cursor: next ? "pointer" : "default", fontFamily: "'Courier New', monospace", fontSize: "8px", letterSpacing: "2px" }}>
                  {next ? next.label : ""} →
                </button>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
}
