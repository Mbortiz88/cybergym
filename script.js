const workoutData = {
  TREINO_A: {
    dayName: "Treino A",
    region: "PUSH (PEITO, TRÍCEPS E CORE)",
    cardio: { time: "15min", dist: "1,5km", kcal: "120" },
    exercises: [
      {
        name: "Supino Reto Barra",
        img: "img/supino-reto.png",
        sets: [
          { kg: 60, reps: 10 },
          { kg: 65, reps: 8 },
          { kg: 65, reps: 8 },
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
          { kg: 50, reps: 12 },
          { kg: 55, reps: 10 },
          { kg: 60, reps: 10 },
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
    cardio: { time: "15min", dist: "1,5km", kcal: "120" },
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
    cardio: { time: "10min", dist: "1,0km", kcal: "80" },
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
        sets: [
          { kg: 60, reps: 10 },
          { kg: 70, reps: 8 },
          { kg: 80, reps: 8 },
        ],
      },
      {
        name: "Leg Press 45º",
        img: "img/leg-press.png",
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
        name: "Panturrilhas em Pé",
        img: "img/panturrilha-pe.png",
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
    cardio: { time: "20min", dist: "2,2km", kcal: "160" },
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

let currentDay = null;
let currentEx = "";
let wakeLock = null;

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
  if (!h.length) return null;
  return Math.max(...h.map((item) => Number(item.max) || 0));
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

function updateProgressHUD() {
  if (!currentDay) return;
  const d = workoutData[currentDay];
  let totalSets = 0;
  let doneSets = 0;

  d.exercises.forEach((ex, i) => {
    ex.sets.forEach((s, j) => {
      totalSets++;
      const btn = document.getElementById(`c_${i}_${j}`);
      if (btn && btn.classList.contains("checked")) {
        doneSets++;
      }
    });
  });

  const pct = totalSets > 0 ? Math.round((doneSets / totalSets) * 100) : 0;
  const badge = document.getElementById("progressBadge");
  const fill = document.getElementById("progressFill");

  badge.innerText = `${doneSets}/${totalSets} • ${pct}%`;
  fill.style.width = `${pct}%`;

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

function switchMainTab(id) {
  document
    .querySelectorAll(".app-screen")
    .forEach((s) => s.classList.remove("active"));
  setTimeout(() => {
    document
      .querySelectorAll(".app-screen")
      .forEach((s) => (s.style.display = "none"));
    document.getElementById(id).style.display = "flex";
    setTimeout(() => document.getElementById(id).classList.add("active"), 10);
  }, 250);
}

function openDay(k) {
  currentDay = k;
  document.getElementById("mainHeader").style.display = "none";
  document.getElementById("mainNavContainer").style.display = "none";
  document.getElementById("homeScreen").classList.remove("active");

  setTimeout(() => {
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("workoutScreen").style.display = "flex";
    document.getElementById("floatingDock").style.display = "flex";
    document.getElementById("workoutTitleDisplay").innerText =
      workoutData[k].dayName;
    renderWorkout(k);
    updateProgressHUD();
    window.scrollTo({ top: 0, behavior: "instant" });
    setTimeout(
      () => document.getElementById("workoutScreen").classList.add("active"),
      10,
    );
  }, 250);
}

function goHome() {
  document.getElementById("workoutScreen").classList.remove("active");
  document.getElementById("floatingDock").style.display = "none";

  setTimeout(() => {
    document.getElementById("workoutScreen").style.display = "none";
    document.getElementById("mainHeader").style.display = "block";
    document.getElementById("homeScreen").style.display = "flex";
    document.getElementById("mainNavContainer").style.display = "flex";
    setTimeout(
      () => document.getElementById("homeScreen").classList.add("active"),
      10,
    );
    stopTimer();
  }, 250);
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

function renderWorkout(k) {
  const cont = document.getElementById("workoutView");
  cont.innerHTML = "";

  const d = workoutData[k];
  const t = localStorage.getItem(`g_${k}_c_t`) || d.cardio.time;
  const di = localStorage.getItem(`g_${k}_c_d`) || d.cardio.dist;
  const kc = localStorage.getItem(`g_${k}_c_k`) || d.cardio.kcal;

  cont.innerHTML += `
    <div class="cardio-card">
        <div class="cardio-header">⚡ AQUECIMENTO / CARDIO</div>
        <div class="cardio-inputs">
            <div class="cardio-input-group">
                <label>Tempo</label>
                <input type="text" id="c_t" value="${t}" oninput="saveC()">
            </div>
            <div class="cardio-input-group">
                <label>Distância</label>
                <input type="text" id="c_d" value="${di}" oninput="saveC()">
            </div>
            <div class="cardio-input-group">
                <label>Calorias</label>
                <input type="text" id="c_k" value="${kc}" oninput="saveC()">
            </div>
        </div>
    </div>`;

  if (d.preStretch && d.preStretch.length > 0) {
    cont.innerHTML += buildStretchCard(
      "🥋 MOBILIDADE PRÉ-TREINO (CHUTES)",
      d.preStretch,
      "pre",
    );
  }

  d.exercises.forEach((ex, i) => {
    const pr = getExercisePR(ex.name);
    const prHtml =
      pr && pr > 0
        ? `<span class="pr-tag" id="pr_badge_${i}">🏆 RECORDE: ${pr} KG</span>`
        : `<span class="pr-tag empty" id="pr_badge_${i}">SEM RECORDE SALVO</span>`;

    const drawerId = `ex_img_${i}`;
    const imgBtnHtml = ex.img
      ? `<button class="btn-img-toggle" onclick="toggleImgDrawer('${drawerId}', this)">👁️ EXECUÇÃO</button>`
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

    ex.sets.forEach((set, j) => {
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

    cont.innerHTML += `
      <div class="exercise-card">
          <div class="exercise-header-top">
              <div class="exercise-title-col">
                  <div class="exercise-name">${ex.name}</div>
                  ${prHtml}
              </div>
              <div class="exercise-actions-col">
                  ${imgBtnHtml}
                  <button class="btn-history" onclick="showH('${ex.name}')">📈 HISTÓRICO</button>
              </div>
          </div>
          ${imgDrawerHtml}
          ${noteHtml}
          ${sHtml}
      </div>`;
  });

  if (d.postStretch && d.postStretch.length > 0) {
    cont.innerHTML += buildStretchCard(
      "🥋 ELASTICIDADE PÓS-TREINO (TIMER 45s/60s ABAIXO)",
      d.postStretch,
      "post",
    );
  }
}

function saveC() {
  localStorage.setItem(
    `g_${currentDay}_c_t`,
    document.getElementById("c_t").value,
  );
  localStorage.setItem(
    `g_${currentDay}_c_d`,
    document.getElementById("c_d").value,
  );
  localStorage.setItem(
    `g_${currentDay}_c_k`,
    document.getElementById("c_k").value,
  );
}

function uV(i, j, f, d) {
  const inpt = document.getElementById(`${f[0]}_${i}_${j}`);
  let v = parseFloat(inpt.value.replace(",", ".")) || 0;
  v = Math.max(0, v + d);
  inpt.value = Number.isInteger(v) ? v : v.toFixed(1);
  saveS(i, j);
}

function tC(i, j) {
  const btn = document.getElementById(`c_${i}_${j}`);
  const row = document.getElementById(`row_${i}_${j}`);

  row.classList.remove("completed");
  void row.offsetWidth;

  btn.classList.toggle("checked");

  if (btn.classList.contains("checked")) {
    row.classList.add("completed");
    showToast("SÉRIE COMPUTADA ✓", 900);
  }
  saveS(i, j);
  updateProgressHUD();
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

function resetWorkout() {
  if (confirm(`Zerar dados de ${workoutData[currentDay].dayName}?`)) {
    localStorage.removeItem(`g_${currentDay}_c_t`);
    localStorage.removeItem(`g_${currentDay}_c_d`);
    localStorage.removeItem(`g_${currentDay}_c_k`);

    workoutData[currentDay].exercises.forEach((ex, i) => {
      ex.sets.forEach((s, j) => {
        localStorage.removeItem(`g_${currentDay}_e${i}_s${j}`);
      });
    });

    renderWorkout(currentDay);
    updateProgressHUD();
    showToast("DADOS ZERADOS!", 1500);
  }
}

function copyWorkoutReport() {
  let r = `*HUD CYBERGYM: ${workoutData[currentDay].dayName.toUpperCase()}*\n⚡ *Cardio:* ${document.getElementById("c_t").value} | ${document.getElementById("c_d").value} / ${document.getElementById("c_k").value}\n`;

  workoutData[currentDay].exercises.forEach((ex, i) => {
    r += `\n* ${ex.name}:`;
    ex.sets.forEach((s, j) => {
      const done = document
        .getElementById(`c_${i}_${j}`)
        .classList.contains("checked")
        ? "✓"
        : "○";
      r += `\n  - S${j + 1}: ${document.getElementById(`k_${i}_${j}`).value}kg x ${document.getElementById(`r_${i}_${j}`).value} (${done})`;
    });
  });

  navigator.clipboard
    .writeText(r)
    .then(() => showToast("RELATÓRIO COPIADO!", 2000));
}

function saveWorkoutHistory() {
  const date = new Date().toLocaleDateString("pt-BR");
  let count = 0;

  workoutData[currentDay].exercises.forEach((ex, i) => {
    let max = 0,
      ok = false;

    ex.sets.forEach((s, j) => {
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

      const newPR = getExercisePR(ex.name);
      const prBadge = document.getElementById(`pr_badge_${i}`);
      if (prBadge && newPR > 0) {
        prBadge.classList.remove("empty");
        prBadge.innerText = `🏆 RECORDE: ${newPR} KG`;
      }

      count++;
    }
  });

  if (count > 0) {
    showToast(`SALVO! ${count} REGISTROS ATUALIZADOS 🚀`, 3000);
  } else {
    showToast("MARQUE AO MENOS UMA SÉRIE PARA SALVAR", 2500);
  }
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
      const newPR = getExercisePR(currentEx);
      const prBadge = document.getElementById(`pr_badge_${idx}`);
      if (prBadge && newPR > 0) {
        prBadge.classList.remove("empty");
        prBadge.innerText = `🏆 RECORDE: ${newPR} KG`;
      }
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
const bell = new Audio(
  "https://gfxsounds.com/wp-content/uploads/2021/07/Boxing-bell-ring-three-times.mp3",
);

function startTimer(s) {
  bell.load();
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
      bell.play().catch(() => {});
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
      bell.play().catch(() => {});
    } else {
      requestWakeLock();
    }
  }
});

window.onload = initApp;
