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

function initApp() {
  const list = document.getElementById("menuList");
  list.innerHTML = "";

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
}

function switchMainTab(id, tabEl) {
  document
    .querySelectorAll(".nav-tab")
    .forEach((t) => t.classList.remove("active"));
  if (tabEl) tabEl.classList.add("active");

  if (id === "dashboardScreen") {
    renderDashboard();
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

  let allDates = new Set();
  let prRowsHtml = "";
  let totalPRs = 0;

  const uniqueExercises = new Set();
  Object.values(workoutData).forEach((day) => {
    day.exercises.forEach((ex) => uniqueExercises.add(ex.name));
  });

  uniqueExercises.forEach((name) => {
    const h = JSON.parse(localStorage.getItem(`gh_${name}`)) || [];
    h.forEach((entry) => allDates.add(entry.date));

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
        <span class="dash-stat-label">Sessões Registradas</span>
        <span class="dash-stat-value">${allDates.size}</span>
    </div>
    <div class="dash-stat-box">
        <span class="dash-stat-label">Recordes Ativos</span>
        <span class="dash-stat-value">${totalPRs}</span>
    </div>`;

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
    renderDashboard();
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
  document.getElementById("dashboardScreen").classList.remove("active");

  setTimeout(() => {
    document.getElementById("homeScreen").style.display = "none";
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
}

/* NOVA SESSÃO INTELIGENTE: DESMARCA CHECKS MAS MANTÉM AS ÚLTIMAS CARGAS */
function resetWorkout() {
  if (
    confirm(
      `Iniciar NOVA SESSÃO de ${workoutData[currentDay].dayName}?\n\nIsso desmarca os ✓ mantendo suas últimas cargas salvas.`,
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

    stopTimer();
    renderWorkout(currentDay);
    updateTelemetryHUD();
    showToast("NOVA SESSÃO PRONTA (CARGAS MANTIDAS) ⚡", 2000);
  }
}

function copyWorkoutReport() {
  let r = `*HUD CYBERGYM: ${workoutData[currentDay].dayName.toUpperCase()}*\n`;

  workoutData[currentDay].exercises.forEach((ex, i) => {
    const setsArr = getExerciseSetsList(currentDay, i);
    r += `\n- ${ex.name}:`;
    setsArr.forEach((s, j) => {
      const done = document
        .getElementById(`c_${i}_${j}`)
        .classList.contains("checked")
        ? "✓"
        : "○";
      r += `\n  - S${j + 1}: ${document.getElementById(`k_${i}_${j}`).value}kg x ${document.getElementById(`r_${i}_${j}`).value} (${done})`;
    });
  });

  const activeBtn = document.querySelector(".cardio-type-btn.active");
  const cType = activeBtn
    ? activeBtn.dataset.type
    : workoutData[currentDay].cardio.type;
  const cTime = document.getElementById("c_t").value;
  const cKcal = document.getElementById("c_k").value;

  r += `\n\n⚡ *Cardio Pós-Treino (${cType}):* ${cTime} min • ${cKcal} kcal`;

  navigator.clipboard
    .writeText(r)
    .then(() => showToast("RELATÓRIO COPIADO!", 2000));
}

function saveWorkoutHistory() {
  const date = new Date().toLocaleDateString("pt-BR");
  let count = 0;

  workoutData[currentDay].exercises.forEach((ex, i) => {
    const setsArr = getExerciseSetsList(currentDay, i);
    let max = 0,
      ok = false;

    setsArr.forEach((s, j) => {
      const d = JSON.parse(localStorage.getItem(`g_${currentDay}_e${i}_s${j}`));
      if (d && d.checked) {
        ok = true;
        if (d.kg > max) max = d.kg;
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
    showToast(`SALVO! ${count} REGISTROS ATUALIZADOS 🚀`, 3000);
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

function showToast(m, d) {
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

window.onload = initApp;
