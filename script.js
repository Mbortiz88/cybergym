const workoutData = {
  TREINO_A: {
    dayName: "Treino A",
    region: "PUSH (PEITO, TRÍCEPS E CORE)",
    cardio: { type: "Escada", time: 11, kcal: 100 },
    exercises: [
      {
        name: "Supino Reto Barra",
        img: "img/supino-reto.png",
        hasPlates: true,
        sets: [
          { kg: 60, reps: 10 },
          { kg: 65, reps: 10 },
          { kg: 70, reps: 10 },
        ],
      },
      {
        name: "Supino Inclinado Halter",
        img: "img/supino-inclinado-halter.png",
        sets: [
          { kg: 55, reps: 10 },
          { kg: 60, reps: 8 },
          { kg: 60, reps: 8 },
        ],
      },
      {
        name: "Crucifixo Inclinado Articulado",
        img: "img/crucifixo-inclinado-articulado.png",
        sets: [
          { kg: 30, reps: 12 },
          { kg: 35, reps: 10 },
          { kg: 35, reps: 10 },
        ],
      },
      {
        name: "Tríceps Polia (Barra V)",
        img: "img/triceps-barra-v.png",
        sets: [
          { kg: 60, reps: 10 },
          { kg: 66, reps: 10 },
          { kg: 70, reps: 10 },
        ],
      },
      {
        name: "Tríceps Francês Unilateral Polia",
        img: "img/triceps-frances-unilateral.png",
        sets: [
          { kg: 15, reps: 12 },
          { kg: 15, reps: 10 },
          { kg: 20, reps: 10 },
        ],
      },
      {
        name: "Abd. Infra Solo (Colchonete)",
        img: "img/abd-infra-solo.png",
        sets: [
          { kg: 0, reps: 15 },
          { kg: 0, reps: 15 },
          { kg: 0, reps: 15 },
        ],
      },
    ],
  },
  TREINO_B: {
    dayName: "Treino B",
    region: "PULL (COSTAS, BÍCEPS E CORE)",
    cardio: { type: "Escada", time: 15, kcal: 130 },
    exercises: [
      {
        name: "Puxada Alta",
        img: "img/puxada-alta.png",
        sets: [
          { kg: 45, reps: 10 },
          { kg: 50, reps: 8 },
          { kg: 55, reps: 8 },
        ],
      },
      {
        name: "Remada Baixa",
        img: "img/remada-baixa.png",
        sets: [
          { kg: 60, reps: 10 },
          { kg: 65, reps: 8 },
          { kg: 70, reps: 8 },
        ],
      },
      {
        name: "Pulldown Corda",
        img: "img/pulldown-corda.png",
        sets: [
          { kg: 35, reps: 12 },
          { kg: 40, reps: 12 },
          { kg: 40, reps: 10 },
        ],
      },
      {
        name: "Bíceps Bayesian (Polia)",
        img: "img/biceps-bayesian.png",
        sets: [
          { kg: 15, reps: 12 },
          { kg: 15, reps: 10 },
          { kg: 15, reps: 10 },
        ],
      },
      {
        name: "Rosca Concentrada",
        img: "img/rosca-concentrada.png",
        sets: [
          { kg: 12, reps: 12 },
          { kg: 14, reps: 10 },
          { kg: 14, reps: 10 },
        ],
      },
      {
        name: "Rosca Martelo",
        img: "img/rosca-martelo.png",
        sets: [
          { kg: 14, reps: 10 },
          { kg: 16, reps: 10 },
          { kg: 16, reps: 8 },
        ],
      },
      {
        name: "Abd. Roda (Ab Wheel)",
        img: "img/abd-roda.png",
        sets: [
          { kg: 0, reps: 15 },
          { kg: 0, reps: 12 },
          { kg: 0, reps: 12 },
        ],
      },
    ],
  },
  TREINO_C: {
    dayName: "Treino C",
    region: "LEGS & OMBROS",
    cardio: { type: "Escada", time: 10, kcal: 85 },
    preStretch: [
      {
        title: "Balanço de Pernas (Frontal e Lateral)",
        time: "2x 15 / perna",
        img: "img/balanco-pernas.png",
        desc: "Apoie a mão na parede/rack e balance a perna aumentando a altura aos poucos para lubrificar o quadril.",
      },
      {
        title: "Agachamento Cosaco (Cossack Squat)",
        time: "2x 8 / lado",
        img: "img/agachamento-cosaco.png",
        desc: "Sem peso. Desça lateralmente em uma perna enquanto a outra fica estendida para destravar adutores e tornozelo.",
      },
    ],
    postStretch: [
      {
        title: "Abertura Lateral (Straddle Stretch)",
        time: "2x 45-60s",
        img: "img/abertura-lateral.png",
        desc: "Sentado com pernas bem afastadas, incline o tronco à frente com a coluna reta (foco em chutes laterais/circulares).",
      },
      {
        title: "Posterior de Coxa no Banco",
        time: "2x 45s / perna",
        img: "img/posterior-banco.png",
        desc: "Calcanhar apoiado na altura do quadril, puxe a ponta do pé para você (foco em chutes frontais altos).",
      },
      {
        title: "Avanço Profundo (Flexor de Quadril)",
        time: "2x 45s / perna",
        img: "img/avanco-profundo.png",
        desc: "Joelho de trás no colchonete, empurre o quadril para frente para dar amplitude ao giro da perna de apoio.",
      },
      {
        title: "Borboleta (Adutores)",
        time: "2x 45s",
        img: "img/borboleta.png",
        desc: "Solas dos pés unidas, pressione suavemente os joelhos em direção ao solo com os cotovelos.",
      },
    ],
    exercises: [
      {
        name: "Hack Squat",
        img: "img/hack-squat.png",
        hasPlates: true,
        sets: [
          { kg: 60, reps: 10 },
          { kg: 70, reps: 8 },
          { kg: 80, reps: 8 },
        ],
      },
      {
        name: "Leg Press 45º",
        img: "img/leg-press.png",
        hasPlates: true,
        sets: [
          { kg: 120, reps: 10 },
          { kg: 140, reps: 10 },
          { kg: 160, reps: 8 },
        ],
      },
      {
        name: "Mesa Flexora",
        img: "img/mesa-flexora.png",
        sets: [
          { kg: 40, reps: 12 },
          { kg: 45, reps: 10 },
          { kg: 45, reps: 10 },
        ],
      },
      {
        name: "Panturrilhas em Pé (Smith / Leg)",
        img: "img/panturrilha-pe.png",
        hasPlates: true,
        sets: [
          { kg: 50, reps: 15 },
          { kg: 50, reps: 15 },
          { kg: 50, reps: 15 },
          { kg: 50, reps: 15 },
        ],
      },
      {
        name: "Desenvolvimento Halteres",
        img: "img/desenvolvimento-halteres.png",
        sets: [
          { kg: 18, reps: 10 },
          { kg: 20, reps: 8 },
          { kg: 20, reps: 8 },
        ],
      },
      {
        name: "Elevação Lateral Polia",
        img: "img/elevacao-lateral-polia.png",
        sets: [
          { kg: 10, reps: 15 },
          { kg: 10, reps: 12 },
          { kg: 10, reps: 12 },
          { kg: 10, reps: 12 },
        ],
      },
    ],
  },
  TREINO_D: {
    dayName: "Treino D",
    region: "FULLBODY (FIM DE SEMANA)",
    cardio: { type: "Escada", time: 20, kcal: 170 },
    postStretch: [
      {
        title: "Abertura Lateral (Straddle Stretch)",
        time: "2x 45-60s",
        img: "img/abertura-lateral.png",
        desc: "Sentado com pernas bem afastadas, incline o tronco à frente com a coluna reta (foco em chutes laterais/circulares).",
      },
      {
        title: "Posterior de Coxa no Banco",
        time: "2x 45s / perna",
        img: "img/posterior-banco.png",
        desc: "Calcanhar apoiado na altura do quadril, puxe a ponta do pé para você (foco em chutes frontais altos).",
      },
      {
        title: "Avanço Profundo (Flexor de Quadril)",
        time: "2x 45s / perna",
        img: "img/avanco-profundo.png",
        desc: "Joelho de trás no colchonete, empurre o quadril para frente para dar amplitude ao giro da perna de apoio.",
      },
      {
        title: "Borboleta (Adutores)",
        time: "2x 45s",
        img: "img/borboleta.png",
        desc: "Solas dos pés unidas, pressione suavemente os joelhos em direção ao solo com os cotovelos.",
      },
    ],
    exercises: [
      {
        name: "Crossover Polia Alta",
        img: "img/crossover-polia-alta.png",
        sets: [
          { kg: 20, reps: 12 },
          { kg: 25, reps: 12 },
          { kg: 25, reps: 10 },
        ],
      },
      {
        name: "Remada Unilateral / Serrote",
        img: "img/remada-serrote.png",
        sets: [
          { kg: 22, reps: 10 },
          { kg: 24, reps: 10 },
          { kg: 26, reps: 10 },
        ],
      },
      {
        name: "Cadeira Extensora",
        img: "img/cadeira-extensora.png",
        sets: [
          { kg: 50, reps: 12 },
          { kg: 55, reps: 12 },
          { kg: 60, reps: 10 },
        ],
      },
      {
        name: "Stiff",
        img: "img/stiff.png",
        hasPlates: true,
        sets: [
          { kg: 40, reps: 10 },
          { kg: 50, reps: 10 },
          { kg: 50, reps: 10 },
        ],
      },
      {
        name: "Crucifixo Inverso",
        img: "img/crucifixo-inverso.png",
        sets: [
          { kg: 10, reps: 15 },
          { kg: 12, reps: 12 },
          { kg: 12, reps: 12 },
        ],
      },
      {
        name: "Bi-set: Bíceps Bayesian + Tríceps V",
        img: "img/biset-bracos.png",
        note: "Execução: faça 12 reps de Bíceps Bayesian na polia baixa e, sem descanso, suba a polia/troque o pegador para fazer 12 reps de Tríceps Barra V. Descanse 60-90s apenas ao final dos dois.",
        sets: [
          { kg: 15, reps: 12 },
          { kg: 15, reps: 12 },
        ],
      },
      {
        name: "Prancha Isométrica",
        img: "img/prancha-isometrica.png",
        sets: [
          { kg: 0, reps: 60 },
          { kg: 0, reps: 60 },
          { kg: 0, reps: 60 },
        ],
      },
    ],
  },
};

const dietMealsData = [
  {
    id: "cafe",
    time: "07:15 • CAFÉ DA MANHÃ",
    macros: "~500 KCAL • 35G PROT • 45G CARB • 18G GORD",
    options: [
      {
        label: "Principal: Ovos Mexidos + Pão Integral + Abacate",
        desc: "3 ovos mexidos no azeite (5ml) + 2 fatias de pão integral (50g) + 70g de abacate fresco com sal + café preto sem açúcar.",
      },
      {
        label: "Opção 1: Omelete Rústico com Aveia e Banana",
        desc: "3 ovos inteiros + 30g de aveia em flocos + 1 banana-prata média (100g) com canela.",
      },
      {
        label: "Opção 2: Pão Integral + Ovos Cozidos + Homus",
        desc: "2 fatias de pão integral + 3 ovos cozidos fatiados + 30g de homus + 1 maçã média.",
      },
      {
        label: "Opção 3: Panqueca Salgada de Atum",
        desc: "3 ovos batidos + 1 lata de atum drenado (120g) + 30g de farinha de aveia grelhados na frigideira.",
      },
    ],
  },
  {
    id: "almoco",
    time: "12:30 • ALMOÇO (MARMITA / BATCH COOKING)",
    macros: "~650 KCAL • 50G PROT • 75G CARB • 16G GORD",
    options: [
      {
        label: "Principal: Frango Grelhado + Arroz + Feijão + Brócolis",
        desc: "170g peito de frango grelhado + 140g arroz cozido + 100g feijão + 100g brócolis no vapor + 5ml azeite.",
      },
      {
        label: "Opção 1: Coxão de Fora / Patinho + Batata-Doce",
        desc: "160g bife de coxão de fora ou patinho grelhado + 200g batata-doce assada + 100g vagem + 5ml azeite.",
      },
      {
        label: "Opção 2: Tilápia AirFryer + Purê de Mandioquinha",
        desc: "200g filé de tilápia na AirFryer + 250g purê de mandioquinha (sem leite, só água e sal) + salada verde com 5ml azeite.",
      },
      {
        label: "Opção 3: Sobrecoxa Desossada + Arroz e Feijão",
        desc: "160g sobrecoxa sem pele assada + 140g arroz cozido + 100g feijão + 100g abobrinha refogada.",
      },
    ],
  },
  {
    id: "lanche",
    time: "17:15 • LANCHE DA TARDE / PRÉ-TREINO",
    macros: "~500 KCAL • 40G PROT • 60G CARB • 12G GORD",
    options: [
      {
        label: "Principal: Crepioca de Frango Desfiado",
        desc: "3 ovos inteiros + 20g goma de tapioca + 100g peito de frango desfiado temperado com tomate.",
      },
      {
        label: "Opção 1: Sanduíche Integral de Atum",
        desc: "2 fatias de pão integral + 1 lata de atum em água drenado (120g) + 20g de homus + alface e tomate.",
      },
      {
        label: "Opção 2: Wrap Integral de Patinho Moído",
        desc: "1 massa Rap10 integral + 140g patinho moído refogado + alface, tomate e 15g sementes de girassol.",
      },
      {
        label: "Opção 3: Macarrão Integral ao Sugo com Frango",
        desc: "140g macarrão integral cozido + molho de tomate caseiro + 150g peito de frango em cubos.",
      },
    ],
  },
  {
    id: "jantar",
    time: "20:15 • JANTAR / PÓS-TREINO NOTURNO",
    macros: "~600 KCAL • 50G PROT • 65G CARB • 17G GORD",
    options: [
      {
        label: "Principal: Escondidinho de Patinho com Batata-Inglesa",
        desc: "160g patinho moído refogado + 250g purê de batata-inglesa (com alho e azeite, sem leite) + salada folhosa.",
      },
      {
        label: "Opção 1: Strogonoff de Frango sem Creme de Leite",
        desc: "180g peito de frango em cubos com molho de tomate natural, mostarda e cogumelos + 160g arroz cozido.",
      },
      {
        label: "Opção 2: Tilápia Grelhada + Batata-Doce",
        desc: "220g filé de tilápia grelhado + 200g batata-doce cozida + 10ml azeite extravirgem com ervas.",
      },
      {
        label: "Opção 3: Omelete Reforçado com Frango + Pão Integral",
        desc: "4 ovos inteiros + 80g frango desfiado + 2 fatias de pão integral + 1 fatia média de mamão.",
      },
    ],
  },
];

const cardioModalities = [
  { id: "Escada", icon: "🪜", label: "Escada" },
  { id: "Esteira", icon: "🏃‍♂️", label: "Esteira" },
  { id: "Caminhada", icon: "🚶", label: "Caminhada" },
  { id: "Corrida", icon: "⚡", label: "Corrida" },
  { id: "Bicicleta", icon: "🚴", label: "Bicicleta" },
];

let currentDay = null;
let currentEx = "";
let wakeLock = null;
let audioCtx = null;
let cloudSyncDebounce = null;

function scheduleCloudSync() {
  localStorage.setItem("g_last_local_update", String(Date.now()));
  clearTimeout(cloudSyncDebounce);
  cloudSyncDebounce = setTimeout(() => {
    if (typeof pushToFirestore === "function") {
      pushToFirestore(true);
    }
  }, 1500);
}

function getTodayISO() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function isoToBR(iso) {
  if (!iso || typeof iso !== "string" || !iso.includes("-")) return iso || "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

function brToISO(br) {
  if (!br || typeof br !== "string") return "";
  if (br.includes("-")) return br;
  const parts = br.split("/");
  if (parts.length !== 3) return "";
  return `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
}

let calViewYear = new Date().getFullYear();
let calViewMonth = new Date().getMonth();
let selectedCalDateISO = getTodayISO();

/* REGISTRO DO SERVICE WORKER (PWA OFFLINE) */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

/* SINO SINTETIZADO OFFLINE (WEB AUDIO API) */
function unlockAudio() {
  try {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  } catch (e) {}
}

function playSynthBell() {
  try {
    unlockAudio();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const notes = [880, 1174.66, 1318.51];

    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.14);

      gain.gain.setValueAtTime(0.001, now + idx * 0.14);
      gain.gain.exponentialRampToValueAtTime(0.32, now + idx * 0.14 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.14 + 0.65);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now + idx * 0.14);
      osc.stop(now + idx * 0.14 + 0.7);
    });
  } catch (e) {}
}

async function requestWakeLock() {
  try {
    if ("wakeLock" in navigator) {
      wakeLock = await navigator.wakeLock.request("screen");
    }
  } catch (e) {}
}

function releaseWakeLock() {
  if (wakeLock) {
    wakeLock.release().then(() => (wakeLock = null));
  }
}

function getExercisePR(exName) {
  const h = JSON.parse(localStorage.getItem(`gh_${exName}`)) || [];
  if (!h.length) return 0;
  return Math.max(...h.map((item) => Number(item.max) || 0));
}

function getExerciseSetsList(k, exIndex) {
  const custom = JSON.parse(localStorage.getItem(`g_${k}_e${exIndex}_sets`));
  if (custom && Array.isArray(custom) && custom.length > 0) {
    return custom;
  }
  return workoutData[k].exercises[exIndex].sets;
}

function toggleImgDrawer(drawerId, btnEl) {
  const drawer = document.getElementById(drawerId);
  if (!drawer) return;
  drawer.classList.toggle("open");
  if (btnEl) {
    btnEl.classList.toggle("active");
  }
}

function handleImgError(imgEl, path) {
  const parent = imgEl.parentElement;
  parent.innerHTML = `<div class="img-placeholder-msg">Ilustração ainda não adicionada.<br>Salve o arquivo no GitHub em:<br><code>${path}</code></div>`;
}

/* VERIFICA SE BATEU NOVO RECORDE EM TEMPO REAL */
function checkLiveExercisePR(exIndex) {
  if (!currentDay) return false;
  const ex = workoutData[currentDay].exercises[exIndex];
  const savedPR = getExercisePR(ex.name);
  const setsArr = getExerciseSetsList(currentDay, exIndex);

  let sessionCheckedMax = 0;
  setsArr.forEach((s, j) => {
    const btn = document.getElementById(`c_${exIndex}_${j}`);
    if (btn && btn.classList.contains("checked")) {
      const kgVal =
        parseFloat(
          document.getElementById(`k_${exIndex}_${j}`).value.replace(",", "."),
        ) || 0;
      if (kgVal > sessionCheckedMax) sessionCheckedMax = kgVal;
    }
  });

  const prBadge = document.getElementById(`pr_badge_${exIndex}`);
  if (!prBadge) return false;

  if (sessionCheckedMax > 0 && sessionCheckedMax > savedPR) {
    prBadge.classList.remove("empty");
    prBadge.classList.add("new-pr-alert");
    prBadge.innerText = `🔥 NOVO PR: ${sessionCheckedMax} KG!`;
    return true;
  } else {
    prBadge.classList.remove("new-pr-alert");
    if (savedPR > 0) {
      prBadge.classList.remove("empty");
      prBadge.innerText = `🏆 RECORDE: ${savedPR} KG`;
    } else {
      prBadge.classList.add("empty");
      prBadge.innerText = `SEM RECORDE SALVO`;
    }
    return false;
  }
}

function updateTelemetryHUD() {
  if (!currentDay) return;
  const d = workoutData[currentDay];
  let totalSets = 0;
  let doneSets = 0;
  let totalVolume = 0;

  d.exercises.forEach((ex, i) => {
    const setsArr = getExerciseSetsList(currentDay, i);
    let exTotal = setsArr.length;
    let exDone = 0;

    setsArr.forEach((s, j) => {
      totalSets++;
      const btn = document.getElementById(`c_${i}_${j}`);
      if (btn && btn.classList.contains("checked")) {
        doneSets++;
        exDone++;
        const kgVal =
          parseFloat(
            document.getElementById(`k_${i}_${j}`).value.replace(",", "."),
          ) || 0;
        const rpVal =
          parseInt(document.getElementById(`r_${i}_${j}`).value) || 0;
        totalVolume += kgVal * rpVal;
      }
    });

    const cardEl = document.getElementById(`ex_card_${i}`);
    if (cardEl) {
      if (exDone === exTotal && exTotal > 0) {
        cardEl.classList.add("card-completed");
      } else {
        cardEl.classList.remove("card-completed");
      }
    }
  });

  const pct = totalSets > 0 ? Math.round((doneSets / totalSets) * 100) : 0;
  const badge = document.getElementById("progressBadge");
  const fill = document.getElementById("progressFill");
  const volBadge = document.getElementById("volumeBadge");

  badge.innerText = `${doneSets}/${totalSets} • ${pct}%`;
  fill.style.width = `${pct}%`;
  volBadge.innerText = `⚡ ${totalVolume.toLocaleString("pt-BR")} KG`;

  if (pct === 100 && totalSets > 0) {
    badge.classList.add("complete");
  } else {
    badge.classList.remove("complete");
  }
}

/* =========================================================
   CHECK-IN ESTILO GYMRATS + STREAK + CALENDÁRIO MENSAL
   ========================================================= */
function getCheckinHistory() {
  try {
    const raw = localStorage.getItem("g_checkin_history");
    if (raw) {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (e) {}

  const legacyDates = new Set();
  Object.values(workoutData).forEach((day) => {
    day.exercises.forEach((ex) => {
      const h = JSON.parse(localStorage.getItem(`gh_${ex.name}`)) || [];
      h.forEach((entry) => {
        if (entry && entry.date) legacyDates.add(entry.date);
      });
    });
  });

  if (legacyDates.size > 0) {
    const migrated = Array.from(legacyDates).map((brDate, idx) => ({
      id: `legacy_${idx}_${Date.now()}`,
      isoDate: brToISO(brDate),
      date: brDate,
      badge: "✓",
      title: "Treino Registrado",
      details: "Histórico importado automaticamente",
      isManual: false,
    }));
    localStorage.setItem("g_checkin_history", JSON.stringify(migrated));
    return migrated;
  }

  return [];
}

function saveCheckinHistory(list) {
  localStorage.setItem("g_checkin_history", JSON.stringify(list));
  scheduleCloudSync();
}

function calculateStreak(history) {
  if (!Array.isArray(history) || !history.length) return 0;
  const uniqueDates = new Set();
  history.forEach((item) => {
    if (!item) return;
    const iso = item.isoDate || brToISO(item.date);
    if (iso) uniqueDates.add(iso);
  });

  const sorted = Array.from(uniqueDates).sort().reverse();
  if (!sorted.length) return 0;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  const latestDate = new Date(sorted[0] + "T00:00:00");
  if (isNaN(latestDate.getTime()) || latestDate < yesterday) return 0;

  let streak = 1;
  let cursor = new Date(latestDate);

  for (let i = 1; i < sorted.length; i++) {
    const prev = new Date(sorted[i] + "T00:00:00");
    if (isNaN(prev.getTime())) continue;
    const diffDays = Math.round((cursor - prev) / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      streak++;
      cursor = prev;
    } else if (diffDays > 1) {
      break;
    }
  }
  return streak;
}

function changeCalendarMonth(delta) {
  calViewMonth += delta;
  if (calViewMonth < 0) {
    calViewMonth = 11;
    calViewYear--;
  } else if (calViewMonth > 11) {
    calViewMonth = 0;
    calViewYear++;
  }
  renderGymRatsCalendar();
}

function selectCalendarDay(isoDate) {
  selectedCalDateISO = isoDate;
  const mcDateInput = document.getElementById("mcDate");
  if (mcDateInput) mcDateInput.value = isoDate;
  renderGymRatsCalendar();
}

function applyQuickSport(name, icon) {
  const input = document.getElementById("mcActivity");
  if (!input) return;
  input.value = `${icon} ${name}`;
  input.focus();
}

function saveManualCheckin() {
  const rawActivity = document.getElementById("mcActivity").value.trim();
  const dateISO = document.getElementById("mcDate").value || getTodayISO();
  const duration = document.getElementById("mcDuration").value.trim();
  const note = document.getElementById("mcNote").value.trim();

  if (!rawActivity) {
    showToast("INFORME A ATIVIDADE!", 1600);
    return;
  }

  const history = getCheckinHistory();
  const cleanLabel =
    rawActivity.replace(/^[^\wÀ-ú]+\s*/, "").trim() || rawActivity;
  const badgeTag = cleanLabel.slice(0, 5).toUpperCase();

  const detailParts = [];
  if (duration) detailParts.push(`${duration} min`);
  if (note) detailParts.push(note);
  const detailsText = detailParts.length
    ? detailParts.join(" • ")
    : "Check-in manual";

  history.unshift({
    id: `chk_${Date.now()}`,
    isoDate: dateISO,
    date: isoToBR(dateISO),
    badge: badgeTag,
    title: rawActivity,
    details: detailsText,
    isManual: true,
  });

  saveCheckinHistory(history);

  document.getElementById("mcActivity").value = "";
  document.getElementById("mcDuration").value = "";
  document.getElementById("mcNote").value = "";

  const [y, m] = dateISO.split("-").map(Number);
  if (y && m) {
    calViewYear = y;
    calViewMonth = m - 1;
  }
  selectedCalDateISO = dateISO;

  renderDashboard();
  showToast(`CHECK-IN "${cleanLabel.toUpperCase()}" SALVO ✓`, 2000);
}

function deleteCheckinItem(checkinId) {
  const history = getCheckinHistory().filter((item) => item.id !== checkinId);
  saveCheckinHistory(history);
  renderDashboard();
  showToast("CHECK-IN REMOVIDO", 1400);
}

function renderGymRatsCalendar() {
  const gridEl = document.getElementById("calDaysGrid");
  if (!gridEl) return;

  const history = getCheckinHistory();
  const monthNames = [
    "JANEIRO",
    "FEVEREIRO",
    "MARÇO",
    "ABRIL",
    "MAIO",
    "JUNHO",
    "JULHO",
    "AGOSTO",
    "SETEMBRO",
    "OUTUBRO",
    "NOVEMBRO",
    "DEZEMBRO",
  ];

  document.getElementById("calMonthLabel").innerText =
    `${monthNames[calViewMonth]} ${calViewYear}`;

  const checkinsMap = {};
  history.forEach((item) => {
    if (!item) return;
    const iso = item.isoDate || brToISO(item.date);
    if (!iso) return;
    if (!checkinsMap[iso]) checkinsMap[iso] = [];
    checkinsMap[iso].push(item);
  });

  const firstDayWeekday = new Date(calViewYear, calViewMonth, 1).getDay();
  const daysInMonth = new Date(calViewYear, calViewMonth + 1, 0).getDate();
  const todayISO = getTodayISO();

  let monthCheckinDays = 0;
  let cellsHtml = "";

  for (let i = 0; i < firstDayWeekday; i++) {
    cellsHtml += `<div class="cal-day-cell empty"></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const mStr = String(calViewMonth + 1).padStart(2, "0");
    const dStr = String(day).padStart(2, "0");
    const iso = `${calViewYear}-${mStr}-${dStr}`;
    const dayLogs = checkinsMap[iso] || [];
    const hasCheckin = dayLogs.length > 0;
    if (hasCheckin) monthCheckinDays++;

    const isToday = iso === todayISO;
    const isSelected = iso === selectedCalDateISO;

    let badgeText = "";
    if (hasCheckin) {
      badgeText = dayLogs.map((l) => l.badge || "✓").join("+");
    }

    cellsHtml += `
      <div
        class="cal-day-cell ${hasCheckin ? "checked-in" : ""} ${isToday ? "today" : ""} ${isSelected ? "selected-day" : ""}"
        onclick="selectCalendarDay('${iso}')"
      >
        <span class="day-num">${day}</span>
        ${hasCheckin ? `<span class="cal-day-badge">${badgeText}</span>` : ""}
      </div>`;
  }

  gridEl.innerHTML = cellsHtml;
  document.getElementById("calMonthCheckinsCount").innerText =
    `${monthCheckinDays} ${monthCheckinDays === 1 ? "dia" : "dias"} no mês`;

  const selLogs = checkinsMap[selectedCalDateISO] || [];
  const titleEl = document.getElementById("cddDateTitle");
  const badgeEl = document.getElementById("cddStatusBadge");
  const contentEl = document.getElementById("cddContent");

  titleEl.innerText = `DIA ${isoToBR(selectedCalDateISO)}`;
  if (selLogs.length > 0) {
    badgeEl.innerText = "CHECK-IN CONCLUÍDO ✓";
    badgeEl.classList.add("active-checkin");
    contentEl.innerHTML = selLogs
      .map(
        (l) => `
        <div class="cdd-log-item">
          <div>
            <strong>${l.title}</strong><br/>
            <span style="color:#8ea4bf;font-size:10px;">${l.details || ""}</span>
          </div>
          <button type="button" class="btn-del-checkin" onclick="deleteCheckinItem('${l.id}')">✕</button>
        </div>`,
      )
      .join("");
  } else {
    badgeEl.innerText = "SEM CHECK-IN";
    badgeEl.classList.remove("active-checkin");
    contentEl.innerText = "Nenhum treino ou atividade registrada nesta data.";
  }
}

/* DIETA, HIDRATAÇÃO E MEDIDAS */
function getDietState() {
  const defaultState = {
    water: 0,
    checked: { cafe: false, almoco: false, lanche: false, jantar: false },
    selected: { cafe: 0, almoco: 0, lanche: 0, jantar: 0 },
  };
  try {
    const saved = JSON.parse(localStorage.getItem("g_diet_state"));
    if (!saved) return defaultState;
    return {
      water: Number(saved.water) || 0,
      checked: { ...defaultState.checked, ...(saved.checked || {}) },
      selected: { ...defaultState.selected, ...(saved.selected || {}) },
    };
  } catch (e) {
    return defaultState;
  }
}

function saveDietState(state) {
  localStorage.setItem("g_diet_state", JSON.stringify(state));
  scheduleCloudSync();
}

function renderDietScreen() {
  const state = getDietState();
  const listEl = document.getElementById("dietMealsList");
  if (!listEl) return;
  listEl.innerHTML = "";

  let doneMeals = 0;

  dietMealsData.forEach((meal) => {
    const isDone = !!state.checked[meal.id];
    if (isDone) doneMeals++;
    const selIdx = state.selected[meal.id] || 0;
    const currentOpt = meal.options[selIdx] || meal.options[0];

    const optsHtml = meal.options
      .map(
        (opt, idx) =>
          `<option value="${idx}" ${idx === selIdx ? "selected" : ""}>${opt.label}</option>`,
      )
      .join("");

    listEl.innerHTML += `
      <div class="diet-meal-card ${isDone ? "done" : ""}">
        <div class="diet-meal-top">
          <div>
            <div class="diet-meal-time">${meal.time}</div>
            <div class="diet-meal-sub">${meal.macros}</div>
          </div>
          <button type="button" class="diet-check-btn" onclick="toggleDietMeal('${meal.id}')">
            ${isDone ? "✓ FEITA" : "MARCAR"}
          </button>
        </div>
        <select class="diet-option-select" onchange="changeDietOption('${meal.id}', this.value)">
          ${optsHtml}
        </select>
        <div class="diet-meal-desc">${currentOpt.desc}</div>
      </div>`;
  });

  document.getElementById("dietMealsCount").innerText = `${doneMeals}/4`;
  document.getElementById("waterDisplay").innerText =
    `${state.water.toFixed(2).replace(".", ",")} L`;
  const pct = Math.min(100, Math.round((state.water / 3.2) * 100));
  document.getElementById("waterProgressFill").style.width = `${pct}%`;
}

function toggleDietMeal(mealId) {
  const state = getDietState();
  state.checked[mealId] = !state.checked[mealId];
  saveDietState(state);
  renderDietScreen();
  showToast(
    state.checked[mealId] ? "REFEIÇÃO REGISTRADA ✓" : "MARCAÇÃO REMOVIDA",
    1000,
  );
}

function changeDietOption(mealId, idx) {
  const state = getDietState();
  state.selected[mealId] = Number(idx) || 0;
  saveDietState(state);
  renderDietScreen();
}

function addWater(liters) {
  const state = getDietState();
  state.water = Math.min(6, Number((state.water + liters).toFixed(2)));
  saveDietState(state);
  renderDietScreen();
  showToast(`+${Math.round(liters * 1000)}ML DE ÁGUA 💧`, 1000);
}

function resetDietDay() {
  const state = getDietState();
  state.water = 0;
  state.checked = { cafe: false, almoco: false, lanche: false, jantar: false };
  saveDietState(state);
  renderDietScreen();
  showToast("CONTROLE DIÁRIO ZERADO", 1300);
}

function toggleEquivalenceDrawer() {
  const panel = document.getElementById("eqDrawerPanel");
  const arrow = document.getElementById("eqToggleArrow");
  const isOpen = panel.classList.toggle("open");
  if (arrow) arrow.innerText = isOpen ? "▴" : "▾";
}

function saveMeasurements() {
  const peso = document.getElementById("mPeso").value.trim();
  const cintura = document.getElementById("mCintura").value.trim();
  const abdomen = document.getElementById("mAbdomen").value.trim();
  const torax = document.getElementById("mTorax").value.trim();
  const braco = document.getElementById("mBraco").value.trim();
  const coxa = document.getElementById("mCoxa").value.trim();

  if (!peso && !cintura && !abdomen && !torax && !braco && !coxa) {
    showToast("PREENCHA AO MENOS UMA MEDIDA!", 1600);
    return;
  }

  const list = JSON.parse(localStorage.getItem("g_measures_list")) || [];
  list.unshift({
    date: new Date().toLocaleDateString("pt-BR"),
    peso: peso || "-",
    cintura: cintura || "-",
    abdomen: abdomen || "-",
    torax: torax || "-",
    braco: braco || "-",
    coxa: coxa || "-",
  });

  localStorage.setItem("g_measures_list", JSON.stringify(list));
  scheduleCloudSync();
  renderMeasurementsList();
  showToast("MEDIDAS ANTROPOMÉTRICAS SALVAS ✓", 1800);
}

function renderMeasurementsList() {
  const el = document.getElementById("measuresHistoryList");
  if (!el) return;
  const list = JSON.parse(localStorage.getItem("g_measures_list")) || [];
  if (!list.length) {
    el.innerHTML = `<div class="pr-summary-row" style="justify-content:center;color:#7a8fa8;">Nenhuma medição registrada ainda.</div>`;
    return;
  }

  el.innerHTML = list
    .map(
      (m) => `
      <div class="measure-history-card">
        <div class="measure-history-top">
          <span>${m.date}</span>
          <span>PESO: ${m.peso} KG</span>
        </div>
        <div class="measure-history-vals">
          Cintura: <strong>${m.cintura}</strong> cm • Abdômen: <strong>${m.abdomen}</strong> cm • Tórax: <strong>${m.torax}</strong> cm<br/>
          Braço D.: <strong>${m.braco}</strong> cm • Coxa D.: <strong>${m.coxa}</strong> cm
        </div>
      </div>`,
    )
    .join("");
}

function initApp() {
  const list = document.getElementById("menuList");
  list.innerHTML = "";

  const mcDateInput = document.getElementById("mcDate");
  if (mcDateInput && !mcDateInput.value) {
    mcDateInput.value = getTodayISO();
  }

  Object.keys(workoutData).forEach((k) => {
    const d = workoutData[k];
    const hasStretch = d.preStretch || d.postStretch;
    list.innerHTML += `
      <div class="menu-item" onclick="openDay('${k}')">
          <div class="menu-info">
              <span class="menu-day-name">${d.dayName}</span>
              <div class="menu-tags">
                  <span class="menu-region-badge">${d.region}</span>
                  <span class="menu-ex-count">${d.exercises.length} EXERCÍCIOS</span>
                  ${hasStretch ? '<span class="menu-stretch-badge">+ ELASTICIDADE CHUTES</span>' : ""}
              </div>
          </div>
          <div class="menu-action">❯</div>
      </div>`;
  });

  renderDietScreen();
  renderDashboard();
}

function switchMainTab(id, tabEl) {
  document
    .querySelectorAll(".nav-tab")
    .forEach((t) => t.classList.remove("active"));
  if (tabEl) tabEl.classList.add("active");

  if (id === "dietScreen") {
    renderDietScreen();
  } else if (id === "dashboardScreen") {
    renderDashboard();
  } else if (id === "tkdScreen" && typeof renderTkdScreen === "function") {
    renderTkdScreen();
  }

  document
    .querySelectorAll(".app-screen")
    .forEach((s) => s.classList.remove("active"));
  setTimeout(() => {
    document
      .querySelectorAll(".app-screen")
      .forEach((s) => (s.style.display = "none"));
    document.getElementById(id).style.display = "flex";
    setTimeout(() => document.getElementById(id).classList.add("active"), 10);
  }, 200);
}

function renderDashboard() {
  const statsGrid = document.getElementById("dashStatsGrid");
  const prList = document.getElementById("prSummaryList");
  if (!statsGrid || !prList) return;

  const checkinHistory = getCheckinHistory();
  const streak = calculateStreak(checkinHistory);

  let prRowsHtml = "";
  let totalPRs = 0;

  const uniqueExercises = new Set();
  Object.values(workoutData).forEach((day) => {
    day.exercises.forEach((ex) => uniqueExercises.add(ex.name));
  });

  uniqueExercises.forEach((name) => {
    const h = JSON.parse(localStorage.getItem(`gh_${name}`)) || [];
    const maxKg = h.length
      ? Math.max(...h.map((item) => Number(item.max) || 0))
      : 0;
    if (maxKg > 0) {
      totalPRs++;
      prRowsHtml += `
        <div class="pr-summary-row">
            <span>${name}</span>
            <span>${maxKg} KG</span>
        </div>`;
    }
  });

  statsGrid.innerHTML = `
    <div class="dash-stat-box">
        <span class="dash-stat-label">Check-ins Totais</span>
        <span class="dash-stat-value">${checkinHistory.length}</span>
    </div>
    <div class="dash-stat-box">
        <span class="dash-stat-label">Sequência Atual</span>
        <span class="dash-stat-value streak-accent">🔥 ${streak}d</span>
    </div>
    <div class="dash-stat-box">
        <span class="dash-stat-label">Recordes (PRs)</span>
        <span class="dash-stat-value">${totalPRs}</span>
    </div>`;

  renderGymRatsCalendar();
  renderMeasurementsList();

  prList.innerHTML =
    prRowsHtml ||
    `<div class="pr-summary-row" style="justify-content:center;color:#7a8fa8;">Finalize um treino para exibir seus recordes aqui.</div>`;
}

function exportBackup() {
  const backup = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("g_") || key.startsWith("gh_")) {
      backup[key] = localStorage.getItem(key);
    }
  }
  const jsonStr = JSON.stringify(backup);
  navigator.clipboard
    .writeText(jsonStr)
    .then(() => showToast("BACKUP COPIADO! COLE EM LOCAL SEGURO 📋", 2800))
    .catch(() => {
      prompt("Copie o código de backup abaixo:", jsonStr);
    });
}

function openImportModal() {
  document.getElementById("importJsonArea").value = "";
  document.getElementById("importModal").classList.add("active");
}

function closeImportModal() {
  document.getElementById("importModal").classList.remove("active");
}

function importBackup() {
  try {
    const raw = document.getElementById("importJsonArea").value.trim();
    const data = JSON.parse(raw);
    let count = 0;
    Object.keys(data).forEach((key) => {
      if (key.startsWith("g_") || key.startsWith("gh_")) {
        localStorage.setItem(key, data[key]);
        count++;
      }
    });
    closeImportModal();
    renderDietScreen();
    renderDashboard();
    if (typeof renderTkdScreen === "function") {
      renderTkdScreen();
    }
    scheduleCloudSync();
    showToast(`BACKUP RESTAURADO (${count} ITENS) ✓`, 2500);
  } catch (e) {
    showToast("CÓDIGO JSON INVÁLIDO!", 2000);
  }
}

function openDay(k) {
  currentDay = k;
  document.getElementById("mainHeader").style.display = "none";
  document.getElementById("mainNavContainer").style.display = "none";
  document.getElementById("homeScreen").classList.remove("active");
  document.getElementById("tkdScreen").classList.remove("active");
  document.getElementById("dietScreen").classList.remove("active");
  document.getElementById("dashboardScreen").classList.remove("active");

  setTimeout(() => {
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("tkdScreen").style.display = "none";
    document.getElementById("dietScreen").style.display = "none";
    document.getElementById("dashboardScreen").style.display = "none";
    document.getElementById("workoutScreen").style.display = "flex";
    document.getElementById("floatingDock").style.display = "flex";
    document.getElementById("workoutTitleDisplay").innerText =
      workoutData[k].dayName;
    renderWorkout(k);
    updateTelemetryHUD();
    window.scrollTo({ top: 0, behavior: "instant" });
    setTimeout(
      () => document.getElementById("workoutScreen").classList.add("active"),
      10,
    );
  }, 200);
}

function goHome() {
  document.getElementById("workoutScreen").classList.remove("active");
  document.getElementById("floatingDock").style.display = "none";

  setTimeout(() => {
    document.getElementById("workoutScreen").style.display = "none";
    document.getElementById("mainHeader").style.display = "block";
    document.getElementById("homeScreen").style.display = "flex";
    document.getElementById("mainNavContainer").style.display = "flex";
    document
      .querySelectorAll(".nav-tab")
      .forEach((t) => t.classList.remove("active"));
    document.getElementById("tabTreinos").classList.add("active");
    setTimeout(
      () => document.getElementById("homeScreen").classList.add("active"),
      10,
    );
    stopTimer();
  }, 200);
}

function buildStretchCard(title, items, prefix) {
  let itemsHtml = items
    .map((st, idx) => {
      const drawerId = `st_img_${prefix}_${idx}`;
      const imgBtn = st.img
        ? `<button class="btn-stretch-img" onclick="toggleImgDrawer('${drawerId}', this)">👁️ VER</button>`
        : "";
      const imgDrawer = st.img
        ? `<div class="img-drawer" id="${drawerId}" style="margin-top:6px;margin-bottom:0;">
             <img src="${st.img}" alt="${st.title}" loading="lazy" onerror="handleImgError(this, '${st.img}')" />
           </div>`
        : "";

      return `
      <div class="stretch-item">
          <div class="stretch-item-title">
              <span>${st.title}</span>
              <div class="stretch-badges-right">
                  <span class="stretch-item-time">${st.time}</span>
                  ${imgBtn}
              </div>
          </div>
          <div class="stretch-item-desc">${st.desc}</div>
          ${imgDrawer}
      </div>`;
    })
    .join("");

  return `
    <div class="stretch-card">
        <div class="stretch-header">${title}</div>
        <div class="stretch-list">${itemsHtml}</div>
    </div>`;
}

/* CONTROLES DA GAVETA DE CARDIO */
function toggleCardioDrawer() {
  const panel = document.getElementById("cardioDrawerPanel");
  const trigger = document.getElementById("cardioDrawerTrigger");
  const arrow = document.getElementById("cardioDrawerArrow");
  if (!panel) return;

  const isOpen = panel.classList.toggle("open");
  trigger.classList.toggle("open", isOpen);
  if (arrow) arrow.innerText = isOpen ? "▴" : "▾";
}

function selectCardioType(typeId) {
  localStorage.setItem(`g_${currentDay}_c_type`, typeId);
  scheduleCloudSync();
  const mod =
    cardioModalities.find((m) => m.id === typeId) || cardioModalities[0];

  document.querySelectorAll(".cardio-type-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.type === typeId);
  });

  const selectedEl = document.getElementById("cardioSelectedDisplay");
  if (selectedEl) {
    selectedEl.innerHTML = `<span style="font-size:16px">${mod.icon}</span> ${mod.label.toUpperCase()}`;
  }

  toggleCardioDrawer();
}

function adjustCardioMetric(fieldId, delta) {
  const el = document.getElementById(fieldId);
  let val = parseInt(el.value) || 0;
  val = Math.max(0, val + delta);
  el.value = val;
  saveC();
}

function saveC() {
  const activeBtn = document.querySelector(".cardio-type-btn.active");
  const cType = activeBtn
    ? activeBtn.dataset.type
    : workoutData[currentDay].cardio.type;
  localStorage.setItem(`g_${currentDay}_c_type`, cType);
  localStorage.setItem(
    `g_${currentDay}_c_t`,
    document.getElementById("c_t").value,
  );
  localStorage.setItem(
    `g_${currentDay}_c_k`,
    document.getElementById("c_k").value,
  );
  scheduleCloudSync();
}

function addExtraSet(exIndex) {
  const currentList = JSON.parse(
    JSON.stringify(getExerciseSetsList(currentDay, exIndex)),
  );
  const lastSet = currentList[currentList.length - 1] || { kg: 20, reps: 10 };

  const lastKgEl = document.getElementById(
    `k_${exIndex}_${currentList.length - 1}`,
  );
  const lastRpEl = document.getElementById(
    `r_${exIndex}_${currentList.length - 1}`,
  );

  currentList.push({
    kg: lastKgEl ? parseFloat(lastKgEl.value) || lastSet.kg : lastSet.kg,
    reps: lastRpEl ? parseInt(lastRpEl.value) || lastSet.reps : lastSet.reps,
  });

  localStorage.setItem(
    `g_${currentDay}_e${exIndex}_sets`,
    JSON.stringify(currentList),
  );
  scheduleCloudSync();
  renderWorkout(currentDay);
  updateTelemetryHUD();
  showToast("+1 SÉRIE ADICIONADA", 1100);
}

function removeExtraSet(exIndex) {
  const defaultLen = workoutData[currentDay].exercises[exIndex].sets.length;
  const currentList = JSON.parse(
    JSON.stringify(getExerciseSetsList(currentDay, exIndex)),
  );
  if (currentList.length <= defaultLen) return;

  const removedIdx = currentList.length - 1;
  currentList.pop();
  localStorage.removeItem(`g_${currentDay}_e${exIndex}_s${removedIdx}`);
  localStorage.setItem(
    `g_${currentDay}_e${exIndex}_sets`,
    JSON.stringify(currentList),
  );
  scheduleCloudSync();
  renderWorkout(currentDay);
  updateTelemetryHUD();
  showToast("SÉRIE EXTRA REMOVIDA", 1100);
}

function renderWorkout(k) {
  const cont = document.getElementById("workoutView");
  cont.innerHTML = "";

  const d = workoutData[k];

  if (d.preStretch && d.preStretch.length > 0) {
    cont.innerHTML += buildStretchCard(
      "🥋 MOBILIDADE PRÉ-TREINO (CHUTES)",
      d.preStretch,
      "pre",
    );
  }

  d.exercises.forEach((ex, i) => {
    const setsArr = getExerciseSetsList(k, i);
    const defaultLen = ex.sets.length;
    const pr = getExercisePR(ex.name);
    const prHtml =
      pr && pr > 0
        ? `<span class="pr-tag" id="pr_badge_${i}">🏆 RECORDE: ${pr} KG</span>`
        : `<span class="pr-tag empty" id="pr_badge_${i}">SEM RECORDE SALVO</span>`;

    const drawerId = `ex_img_${i}`;
    const imgBtnHtml = ex.img
      ? `<button class="btn-img-toggle" onclick="toggleImgDrawer('${drawerId}', this)">👁️ EXECUÇÃO</button>`
      : "";

    const platesBtnHtml = ex.hasPlates
      ? `<button class="btn-plates" onclick="openPlateModal('${ex.name}', ${i})">🏋️ ANILHAS</button>`
      : "";

    const imgDrawerHtml = ex.img
      ? `<div class="img-drawer" id="${drawerId}">
           <img src="${ex.img}" alt="${ex.name}" loading="lazy" onerror="handleImgError(this, '${ex.img}')" />
         </div>`
      : "";

    let noteHtml = ex.note ? `<div class="exercise-note">${ex.note}</div>` : "";

    let sHtml = `
      <div class="sets-header">
          <div>Série</div>
          <div>Carga (KG)</div>
          <div>Reps</div>
          <div>OK</div>
      </div>
      <div class="sets-list">`;

    setsArr.forEach((set, j) => {
      const s = JSON.parse(localStorage.getItem(`g_${k}_e${i}_s${j}`)) || {
        kg: set.kg,
        reps: set.reps,
        checked: false,
      };

      sHtml += `
        <div class="set-row ${s.checked ? "completed" : ""}" id="row_${i}_${j}">
            <div class="set-label">${j + 1}</div>
            
            <div class="control-group">
                <button class="btn-adjust" onclick="uV(${i},${j},'kg',-1)">-</button>
                <input type="number" class="val-input" id="k_${i}_${j}" value="${s.kg}" onchange="saveS(${i},${j})" step="1">
                <button class="btn-adjust" onclick="uV(${i},${j},'kg',1)">+</button>
            </div>
            
            <div class="control-group">
                <button class="btn-adjust" onclick="uV(${i},${j},'rp',-1)">-</button>
                <input type="number" class="val-input" id="r_${i}_${j}" value="${s.reps}" onchange="saveS(${i},${j})">
                <button class="btn-adjust" onclick="uV(${i},${j},'rp',1)">+</button>
            </div>
            
            <button class="check-btn ${s.checked ? "checked" : ""}" id="c_${i}_${j}" onclick="tC(${i},${j})">✓</button>
        </div>`;
    });
    sHtml += `</div>`;

    const removeExtraBtn =
      setsArr.length > defaultLen
        ? `<button class="btn-set-extra remove" onclick="removeExtraSet(${i})">- REMOVER EXTRA</button>`
        : "";

    cont.innerHTML += `
      <div class="exercise-card" id="ex_card_${i}">
          <div class="exercise-header-top">
              <div class="exercise-title-col">
                  <div class="exercise-name-row">
                      <span class="exercise-name">${ex.name}</span>
                      <span class="card-done-badge">✓ CONCLUÍDO</span>
                  </div>
                  ${prHtml}
              </div>
              <div class="exercise-actions-col">
                  <div class="action-mini-row">
                      ${platesBtnHtml}
                      ${imgBtnHtml}
                  </div>
                  <button class="btn-history" onclick="showH('${ex.name}')">📈 HISTÓRICO</button>
              </div>
          </div>
          ${imgDrawerHtml}
          ${noteHtml}
          ${sHtml}
          <div class="set-extra-controls">
              ${removeExtraBtn}
              <button class="btn-set-extra" onclick="addExtraSet(${i})">+ SÉRIE EXTRA</button>
          </div>
      </div>`;

    checkLiveExercisePR(i);
  });

  const savedType = localStorage.getItem(`g_${k}_c_type`) || d.cardio.type;
  const savedTime = localStorage.getItem(`g_${k}_c_t`) || d.cardio.time;
  const savedKcal = localStorage.getItem(`g_${k}_c_k`) || d.cardio.kcal;
  const activeMod =
    cardioModalities.find((m) => m.id === savedType) || cardioModalities[0];

  const modalitiesHtml = cardioModalities
    .map(
      (m) => `
      <button type="button" class="cardio-type-btn ${savedType === m.id ? "active" : ""}" data-type="${m.id}" onclick="selectCardioType('${m.id}')">
          <span class="c-icon">${m.icon}</span>
          <span class="c-name">${m.label}</span>
      </button>`,
    )
    .join("");

  cont.innerHTML += `
    <div class="cardio-card">
        <div class="cardio-header">⚡ CARDIO PÓS-TREINO</div>
        
        <button type="button" class="cardio-drawer-trigger" id="cardioDrawerTrigger" onclick="toggleCardioDrawer()">
            <div class="cardio-selected-info" id="cardioSelectedDisplay">
                <span style="font-size:16px">${activeMod.icon}</span> ${activeMod.label.toUpperCase()}
            </div>
            <span class="cardio-drawer-hint">MODALIDADE <span id="cardioDrawerArrow">▾</span></span>
        </button>

        <div class="cardio-drawer-panel" id="cardioDrawerPanel">
            <div class="cardio-type-grid" style="margin-bottom:0;">
                ${modalitiesHtml}
            </div>
        </div>

        <div class="cardio-metrics-grid">
            <div class="cardio-metric-box">
                <div class="cardio-metric-label">⏱️ Tempo <span>(min)</span></div>
                <div class="cardio-stepper">
                    <button type="button" onclick="adjustCardioMetric('c_t', -1)">-</button>
                    <input type="number" id="c_t" value="${savedTime}" oninput="saveC()">
                    <button type="button" onclick="adjustCardioMetric('c_t', 1)">+</button>
                </div>
            </div>
            <div class="cardio-metric-box">
                <div class="cardio-metric-label">🔥 Calorias <span>(kcal)</span></div>
                <div class="cardio-stepper">
                    <button type="button" onclick="adjustCardioMetric('c_k', -10)">-</button>
                    <input type="number" id="c_k" value="${savedKcal}" oninput="saveC()">
                    <button type="button" onclick="adjustCardioMetric('c_k', 10)">+</button>
                </div>
            </div>
        </div>
    </div>`;

  if (d.postStretch && d.postStretch.length > 0) {
    cont.innerHTML += buildStretchCard(
      "🥋 ELASTICIDADE PÓS-TREINO (TIMER 45s/60s ABAIXO)",
      d.postStretch,
      "post",
    );
  }
}

function uV(i, j, f, d) {
  const inpt = document.getElementById(`${f[0]}_${i}_${j}`);
  let v = parseFloat(inpt.value.replace(",", ".")) || 0;
  v = Math.max(0, v + d);
  inpt.value = Number.isInteger(v) ? v : v.toFixed(1);
  saveS(i, j);
  checkLiveExercisePR(i);
  updateTelemetryHUD();
}

function tC(i, j) {
  const btn = document.getElementById(`c_${i}_${j}`);
  const row = document.getElementById(`row_${i}_${j}`);

  row.classList.remove("completed");
  void row.offsetWidth;

  btn.classList.toggle("checked");
  saveS(i, j);

  if (btn.classList.contains("checked")) {
    row.classList.add("completed");
    const isNewPR = checkLiveExercisePR(i);
    if (isNewPR) {
      showToast("🔥 NOVO RECORDE PESSOAL BATIDO!", 1800);
    } else {
      showToast("SÉRIE COMPUTADA ✓", 900);
    }
  } else {
    checkLiveExercisePR(i);
  }

  updateTelemetryHUD();
}

function saveS(i, j) {
  const kg =
    parseFloat(
      document.getElementById(`k_${i}_${j}`).value.replace(",", "."),
    ) || 0;
  const reps = parseInt(document.getElementById(`r_${i}_${j}`).value) || 0;
  const chk = document
    .getElementById(`c_${i}_${j}`)
    .classList.contains("checked");
  localStorage.setItem(
    `g_${currentDay}_e${i}_s${j}`,
    JSON.stringify({ kg, reps, checked: chk }),
  );
  scheduleCloudSync();
}

/* NOVA SESSÃO INTELIGENTE: DESMARCA CHECKS MAS MANTÉM AS ÚLTIMAS CARGAS */
function resetWorkout() {
  if (
    confirm(
      `Iniciar NOVA SESSÃO de ${workoutData[currentDay].dayName}?

Isso desmarca os ✓ mantendo suas últimas cargas salvas.`,
    )
  ) {
    workoutData[currentDay].exercises.forEach((ex, i) => {
      const setsArr = getExerciseSetsList(currentDay, i);
      setsArr.forEach((s, j) => {
        const currentKg =
          parseFloat(
            document.getElementById(`k_${i}_${j}`).value.replace(",", "."),
          ) || s.kg;
        const currentReps =
          parseInt(document.getElementById(`r_${i}_${j}`).value) || s.reps;

        localStorage.setItem(
          `g_${currentDay}_e${i}_s${j}`,
          JSON.stringify({ kg: currentKg, reps: currentReps, checked: false }),
        );
      });
    });

    scheduleCloudSync();
    stopTimer();
    renderWorkout(currentDay);
    updateTelemetryHUD();
    showToast("NOVA SESSÃO PRONTA (CARGAS MANTIDAS) ⚡", 2000);
  }
}

function copyWorkoutReport() {
  let r = `*HUD CYBERGYM: ${workoutData[currentDay].dayName.toUpperCase()}*
`;

  workoutData[currentDay].exercises.forEach((ex, i) => {
    const setsArr = getExerciseSetsList(currentDay, i);
    r += `
- ${ex.name}:`;
    setsArr.forEach((s, j) => {
      const done = document
        .getElementById(`c_${i}_${j}`)
        .classList.contains("checked")
        ? "✓"
        : "○";
      r += `
- S${j + 1}: ${document.getElementById(`k_${i}_${j}`).value}kg x ${document.getElementById(`r_${i}_${j}`).value} (${done})`;
    });
  });

  const activeBtn = document.querySelector(".cardio-type-btn.active");
  const cType = activeBtn
    ? activeBtn.dataset.type
    : workoutData[currentDay].cardio.type;
  const cTime = document.getElementById("c_t").value;
  const cKcal = document.getElementById("c_k").value;

  r += `

⚡ *Cardio Pós-Treino (${cType}):* ${cTime} min • ${cKcal} kcal`;

  navigator.clipboard
    .writeText(r)
    .then(() => showToast("RELATÓRIO COPIADO!", 2000));
}

function saveWorkoutHistory() {
  const date = new Date().toLocaleDateString("pt-BR");
  const todayISO = getTodayISO();
  const d = workoutData[currentDay];
  let count = 0;
  let totalVolume = 0;

  d.exercises.forEach((ex, i) => {
    const setsArr = getExerciseSetsList(currentDay, i);
    let max = 0,
      ok = false;

    setsArr.forEach((s, j) => {
      const item = JSON.parse(
        localStorage.getItem(`g_${currentDay}_e${i}_s${j}`),
      );
      if (item && item.checked) {
        ok = true;
        if (item.kg > max) max = item.kg;
        totalVolume += (Number(item.kg) || 0) * (Number(item.reps) || 0);
      }
    });

    if (ok) {
      let h = JSON.parse(localStorage.getItem(`gh_${ex.name}`)) || [];
      let t = h.find((e) => e.date === date);

      if (t) {
        t.max = Math.max(t.max, max);
      } else {
        h.push({ date: date, max: max });
      }

      localStorage.setItem(`gh_${ex.name}`, JSON.stringify(h));
      checkLiveExercisePR(i);
      count++;
    }
  });

  if (count > 0) {
    const activeBtn = document.querySelector(".cardio-type-btn.active");
    const cType = activeBtn ? activeBtn.dataset.type : d.cardio.type;
    const cTime = document.getElementById("c_t")
      ? document.getElementById("c_t").value
      : d.cardio.time;
    const letterMatch = d.dayName.match(/Treino\s+([A-D])/i);
    const badgeLetter = letterMatch ? letterMatch[1].toUpperCase() : "✓";

    const checkinHistory = getCheckinHistory();
    const existingIdx = checkinHistory.findIndex(
      (c) => c.isoDate === todayISO && c.badge === badgeLetter && !c.isManual,
    );

    const entryData = {
      id:
        existingIdx !== -1
          ? checkinHistory[existingIdx].id
          : `chk_${Date.now()}`,
      isoDate: todayISO,
      date: date,
      badge: badgeLetter,
      title: `${d.dayName} (${d.region})`,
      details: `${count} exercícios • ${totalVolume.toLocaleString("pt-BR")} kg movidos • Cardio: ${cType} (${cTime} min)`,
      isManual: false,
    };

    if (existingIdx !== -1) {
      checkinHistory[existingIdx] = entryData;
    } else {
      checkinHistory.unshift(entryData);
    }
    saveCheckinHistory(checkinHistory);

    selectedCalDateISO = todayISO;
    calViewYear = new Date().getFullYear();
    calViewMonth = new Date().getMonth();

    showToast(`CHECK-IN ${d.dayName.toUpperCase()} REGISTRADO! 🚀`, 3000);
  } else {
    showToast("MARQUE AO MENOS UMA SÉRIE PARA SALVAR", 2500);
  }
}

/* CALCULADORA DE ANILHAS */
function openPlateModal(exName, exIndex) {
  document.getElementById("plateModalTitle").innerText = exName;
  const setsArr = getExerciseSetsList(currentDay, exIndex);
  let maxKg = 0;
  setsArr.forEach((s, j) => {
    const val =
      parseFloat(document.getElementById(`k_${exIndex}_${j}`).value) || 0;
    if (val > maxKg) maxKg = val;
  });

  document.getElementById("plateTargetInput").value = maxKg || 60;
  document.getElementById("barWeightSelect").value =
    exName.includes("Leg Press") || exName.includes("Hack") ? "0" : "20";
  calculatePlates();
  document.getElementById("plateModal").classList.add("active");
}

function closePlateModal() {
  document.getElementById("plateModal").classList.remove("active");
}

function calculatePlates() {
  const target =
    parseFloat(document.getElementById("plateTargetInput").value) || 0;
  const bar = parseFloat(document.getElementById("barWeightSelect").value) || 0;
  const box = document.getElementById("plateResultBox");

  let perSide = (target - bar) / 2;
  if (perSide <= 0) {
    box.innerHTML = `<div class="plate-side-title">Apenas o peso da barra/aparelho</div>`;
    return;
  }

  const available = [25, 20, 15, 10, 5, 3, 2, 1];
  const plates = [];
  let rem = perSide;

  available.forEach((p) => {
    while (rem >= p - 0.01) {
      plates.push(p);
      rem -= p;
    }
  });

  box.innerHTML = `
    <div class="plate-side-title">Colocar ${perSide} KG de CADA LADO:</div>
    <div class="plate-pills">
      ${plates.map((p) => `<span class="plate-chip">${p} kg</span>`).join("")}
    </div>`;
}

function showH(name) {
  currentEx = name;
  document.getElementById("historyTitle").innerText = name;
  document.getElementById("manualKgInput").value = "";

  const h = JSON.parse(localStorage.getItem(`gh_${name}`)) || [];
  const list = document.getElementById("historyList");
  list.innerHTML = "";

  if (!h.length) {
    list.innerHTML =
      '<div class="history-item" style="justify-content:center;color:#7a8fa8;">Sem registros ainda</div>';
  } else {
    [...h].reverse().forEach((e) => {
      list.innerHTML += `<div class="history-item"><span>${e.date}</span><span>${e.max} KG</span></div>`;
    });
  }

  document.getElementById("historyModal").classList.add("active");
}

function addManualWeight() {
  const v = parseFloat(
    document.getElementById("manualKgInput").value.replace(",", "."),
  );
  if (isNaN(v) || v <= 0) {
    showToast("VALOR INVÁLIDO!", 1500);
    return;
  }

  const date = new Date().toLocaleDateString("pt-BR");
  let h = JSON.parse(localStorage.getItem(`gh_${currentEx}`)) || [];
  let t = h.find((e) => e.date === date);

  if (t) {
    t.max = Math.max(t.max, v);
  } else {
    h.push({ date: date, max: v });
  }

  localStorage.setItem(`gh_${currentEx}`, JSON.stringify(h));
  scheduleCloudSync();
  showToast(`CARGA DE ${v}KG GRAVADA!`, 2000);
  showH(currentEx);

  if (currentDay) {
    const idx = workoutData[currentDay].exercises.findIndex(
      (e) => e.name === currentEx,
    );
    if (idx !== -1) {
      checkLiveExercisePR(idx);
    }
  }
}

function closeHistory() {
  document.getElementById("historyModal").classList.remove("active");
}

function showToast(m, d = 1600) {
  const t = document.getElementById("toast");
  t.innerText = m;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), d);
}

let tmr;
let end = 0;

function startTimer(s) {
  unlockAudio();
  clearInterval(tmr);
  requestWakeLock();
  end = Date.now() + s * 1000;
  const disp = document.getElementById("timerDisplay");
  disp.classList.add("running");

  tmr = setInterval(() => {
    let r = end - Date.now();
    if (r <= 0) {
      clearInterval(tmr);
      disp.innerText = "00:00:00";
      disp.classList.remove("running");
      end = 0;
      playSynthBell();
      if (navigator.vibrate) navigator.vibrate([500, 200, 500]);
      releaseWakeLock();
    } else {
      let m = Math.floor(r / 60000)
        .toString()
        .padStart(2, "0");
      let sc = Math.floor((r % 60000) / 1000)
        .toString()
        .padStart(2, "0");
      let ms = Math.floor((r % 1000) / 10)
        .toString()
        .padStart(2, "0");
      disp.innerText = `${m}:${sc}:${ms}`;
    }
  }, 16);
}

function stopTimer() {
  clearInterval(tmr);
  end = 0;
  const disp = document.getElementById("timerDisplay");
  disp.innerText = "00:00:00";
  disp.classList.remove("running");
  releaseWakeLock();
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible" && end > 0) {
    if (Date.now() >= end) {
      clearInterval(tmr);
      stopTimer();
      playSynthBell();
    } else {
      requestWakeLock();
    }
  }
});

/* =========================================================
   SINCRONIZAÇÃO NUVEM (FIREBASE GOOGLE AUTH + FIRESTORE)
   ========================================================= */
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAoT05zjZH9W9fdmNeCGCppJwGeEJTxXos",
  authDomain: "cybergym-matheus-ortiz.firebaseapp.com",
  projectId: "cybergym-matheus-ortiz",
  storageBucket: "cybergym-matheus-ortiz.firebasestorage.app",
  messagingSenderId: "867243931319",
  appId: "1:867243931319:web:e666e71d57ab6e024a7f32",
  measurementId: "G-Z5Q9Q7D83K",
};

let fbApp = null;
let fbAuth = null;
let fbDb = null;
let currentCloudUser = null;

function isFirebaseConfigured() {
  return Boolean(
    FIREBASE_CONFIG &&
      FIREBASE_CONFIG.apiKey &&
      FIREBASE_CONFIG.projectId &&
      FIREBASE_CONFIG.appId,
  );
}

function updateCloudUI(statusText, infoText, loggedIn) {
  const statusEl = document.getElementById("cloudSyncStatus");
  const infoEl = document.getElementById("cloudUserInfo");
  const loggedOutBox = document.getElementById("cloudLoggedOutActions");
  const loggedInBox = document.getElementById("cloudLoggedInActions");

  if (statusEl) {
    statusEl.innerText = statusText;
    if (loggedIn) {
      statusEl.classList.add("active-checkin");
    } else {
      statusEl.classList.remove("active-checkin");
    }
  }

  if (infoEl && infoText) {
    infoEl.innerText = infoText;
  }

  if (loggedOutBox && loggedInBox) {
    loggedOutBox.style.display = loggedIn ? "none" : "grid";
    loggedInBox.style.display = loggedIn ? "grid" : "none";
  }
}

function initFirebaseCloud() {
  if (
    !isFirebaseConfigured() ||
    typeof window.firebase === "undefined" ||
    !window.firebase.apps
  ) {
    updateCloudUI(
      "LOCAL / SEM CHAVE",
      "Modo offline ativo. Configure FIREBASE_CONFIG em script.js para habilitar o login Google na nuvem.",
      false,
    );
    return;
  }

  try {
    if (!window.firebase.apps.length) {
      fbApp = window.firebase.initializeApp(FIREBASE_CONFIG);
    } else {
      fbApp = window.firebase.app();
    }
    fbAuth = window.firebase.auth();
    fbDb = window.firebase.firestore();

    fbAuth.onAuthStateChanged(async (user) => {
      currentCloudUser = user || null;
      if (user) {
        updateCloudUI(
          "CONECTADO",
          `Conta: ${user.displayName || user.email || "Usuário Google"}`,
          true,
        );
        await syncCloudOnAuth();
      } else {
        updateCloudUI(
          "OFFLINE / LOCAL",
          "Conecte sua conta Google para sincronizar treinos, Taekwondo, check-ins, PRs e medidas automaticamente entre dispositivos.",
          false,
        );
      }
    });
  } catch (err) {
    updateCloudUI(
      "ERRO NUVEM",
      "Não foi possível inicializar o Firebase. Dados salvos localmente.",
      false,
    );
  }
}

function collectLocalAppData() {
  const payload = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (
      key &&
      key !== "g_last_local_update" &&
      (key.startsWith("g_") || key.startsWith("gh_"))
    ) {
      payload[key] = localStorage.getItem(key);
    }
  }
  return payload;
}

function applyCloudDataToLocal(data) {
  if (!data || typeof data !== "object") return;
  Object.keys(data).forEach((key) => {
    if (
      key !== "g_last_local_update" &&
      (key.startsWith("g_") || key.startsWith("gh_")) &&
      typeof data[key] === "string"
    ) {
      localStorage.setItem(key, data[key]);
    }
  });
  renderDietScreen();
  renderDashboard();
  if (typeof renderTkdScreen === "function") {
    renderTkdScreen();
  }
}

async function syncCloudOnAuth() {
  if (!fbDb || !currentCloudUser) return false;
  try {
    const docSnap = await fbDb
      .collection("users")
      .doc(currentCloudUser.uid)
      .collection("cybergym")
      .doc("state")
      .get();

    const localUpdatedAt =
      Number(localStorage.getItem("g_last_local_update")) || 0;

    if (docSnap.exists) {
      const remote = docSnap.data() || {};
      const remoteUpdatedAt = Number(remote.updatedAt) || 0;

      if (localUpdatedAt > remoteUpdatedAt && Object.keys(collectLocalAppData()).length > 0) {
        await pushToFirestore(true);
      } else if (remote.data) {
        applyCloudDataToLocal(remote.data);
        localStorage.setItem("g_last_local_update", String(remoteUpdatedAt));
      }
    } else {
      await pushToFirestore(true);
    }
    return true;
  } catch (err) {
    return false;
  }
}

async function pushToFirestore(silent = false) {
  if (!fbDb || !currentCloudUser) return false;
  try {
    const data = collectLocalAppData();
    const nowTs = Date.now();
    await fbDb
      .collection("users")
      .doc(currentCloudUser.uid)
      .collection("cybergym")
      .doc("state")
      .set(
        {
          data,
          updatedAt: nowTs,
          email: currentCloudUser.email || "",
        },
        { merge: true },
      );

    localStorage.setItem("g_last_local_update", String(nowTs));

    if (!silent) {
      updateCloudUI(
        "SINCRONIZADO ✓",
        `Conta: ${currentCloudUser.displayName || currentCloudUser.email || "Google"} • Atualizado agora`,
        true,
      );
      showToast("DADOS SINCRONIZADOS NA NUVEM ✓", 1800);
    }
    return true;
  } catch (err) {
    if (!silent) {
      showToast("FALHA AO ENVIAR PARA A NUVEM", 2000);
    }
    return false;
  }
}

async function pullFromFirestore(silent = false) {
  if (!fbDb || !currentCloudUser) return false;
  try {
    const docSnap = await fbDb
      .collection("users")
      .doc(currentCloudUser.uid)
      .collection("cybergym")
      .doc("state")
      .get();

    if (docSnap.exists) {
      const remote = docSnap.data() || {};
      if (remote.data) {
        applyCloudDataToLocal(remote.data);
        if (remote.updatedAt) {
          localStorage.setItem("g_last_local_update", String(remote.updatedAt));
        }
      }
    } else {
      await pushToFirestore(true);
    }

    if (!silent) {
      showToast("NUVEM ATUALIZADA ✓", 1800);
    }
    return true;
  } catch (err) {
    if (!silent) {
      showToast("FALHA AO BUSCAR DADOS DA NUVEM", 2000);
    }
    return false;
  }
}

async function loginWithGoogle() {
  if (!isFirebaseConfigured()) {
    updateCloudUI(
      "LOCAL / SEM CHAVE",
      "Configure o FIREBASE_CONFIG no script.js para ativar o login com Google.",
      false,
    );
    showToast("CONFIGURE O FIREBASE_CONFIG NO SCRIPT.JS", 2600);
    return;
  }

  try {
    if (!fbAuth) initFirebaseCloud();
    const provider = new window.firebase.auth.GoogleAuthProvider();
    await fbAuth.signInWithPopup(provider);
  } catch (err) {
    showToast("LOGIN GOOGLE CANCELADO OU BLOQUEADO", 2200);
  }
}

async function logoutGoogle() {
  try {
    if (fbAuth) {
      await fbAuth.signOut();
    }
    currentCloudUser = null;
    updateCloudUI(
      "OFFLINE / LOCAL",
      "Desconectado da conta Google. Seus dados continuam salvos neste aparelho.",
      false,
    );
    showToast("VOCÊ SAIU DA CONTA GOOGLE", 1800);
  } catch (err) {
    showToast("ERRO AO SAIR DA CONTA", 1800);
  }
}

async function manualCloudSync() {
  if (!currentCloudUser) {
    showToast("ENTRE COM O GOOGLE PRIMEIRO", 1800);
    return;
  }
  await pushToFirestore(false);
}

window.loginWithGoogle = loginWithGoogle;
window.logoutGoogle = logoutGoogle;
window.manualCloudSync = manualCloudSync;
window.pushToFirestore = pushToFirestore;

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  initFirebaseCloud();
});
