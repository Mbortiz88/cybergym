/* =========================================================
   MÓDULO TAEKWONDO HUD (GRADUAÇÃO WTF, TÉCNICAS E EVOLUÇÃO)
   ========================================================= */
const TKD_BELTS = [
  {
    id: "10_gub",
    gub: "10º Gub",
    name: "BRANCA",
    subtitle: "Iniciante • Pureza e base",
    color: "#f8fafc",
    cssClass: "",
    curriculum: [
      { id: "b10_1", cat: "BASE (SOGUI)", title: "Juchum Sogui & Ap Kubi", sub: "Base do cavaleiro e base frontal longa" },
      { id: "b10_2", cat: "DEFESA (MAKI)", title: "Are Maki & Olgul Maki", sub: "Defesa baixa e defesa alta" },
      { id: "b10_3", cat: "ATAQUE (JIRUGUI)", title: "Momtong Bandae Jirugui", sub: "Soco médio no centro do tronco" },
      { id: "b10_4", cat: "CHUTE (CHAGUI)", title: "Ap Chagui & Bal Ap Chagui", sub: "Chute frontal com a ponta do pé / peito do pé" },
      { id: "b10_5", cat: "CHUTE (CHAGUI)", title: "Dollyo Chagui (Altura Média)", sub: "Chute circular com giro de quadril e pé de apoio" },
      { id: "b10_6", cat: "FORMA / KIBON", title: "Kibon Dongjak 1 (Movimentos Básicos)", sub: "Sequência fundamental de defesas e socos" },
      { id: "b10_7", cat: "FILOSOFIA", title: "Juramento e Saudações (Kyongnye)", sub: "Etiqueta no dojang, contagem em coreano (1 a 10)" },
    ],
  },
  {
    id: "9_gub",
    gub: "9º Gub",
    name: "CINZA",
    subtitle: "Transição • Controle de distância",
    color: "#9ca3af",
    cssClass: "",
    curriculum: [
      { id: "b9_1", cat: "BASE (SOGUI)", title: "Ap Sogui & Dwit Kubi", sub: "Base curta de caminhada e base recuada em L" },
      { id: "b9_2", cat: "DEFESA (MAKI)", title: "Momtong An Maki", sub: "Defesa média de fora para dentro" },
      { id: "b9_3", cat: "CHUTE (CHAGUI)", title: "Yop Chagui (Chute Lateral)", sub: "Impacto com a faca do pé e calcanhar" },
      { id: "b9_4", cat: "CHUTE (CHAGUI)", title: "Neryo Chagui (Chute Machado)", sub: "Elevação frontal descendo o calcanhar" },
      { id: "b9_5", cat: "POOMSAE", title: "Taegeuk Il (1) Jang", sub: "18 movimentos • Princípio Keon (Céu e Luz)" },
    ],
  },
  {
    id: "8_gub",
    gub: "8º Gub",
    name: "AMARELA",
    subtitle: "Terra fértil • Raízes da técnica",
    color: "#facc15",
    cssClass: "",
    curriculum: [
      { id: "b8_1", cat: "DEFESA (MAKI)", title: "Han Sonnal Momtong Bakat Maki", sub: "Defesa média com faca da mão" },
      { id: "b8_2", cat: "CHUTE (CHAGUI)", title: "Dwit Chagui (Chute para Trás)", sub: "Giro por cima do ombro com impacto de calcanhar" },
      { id: "b8_3", cat: "COMBINAÇÃO", title: "Dollyo Chagui + Dwit Chagui", sub: "Sequência fluida de contra-ataque" },
      { id: "b8_4", cat: "POOMSAE", title: "Taegeuk I (2) Jang", sub: "18 movimentos • Princípio Tae (Alegria)" },
    ],
  },
  {
    id: "7_gub",
    gub: "7º Gub",
    name: "LARANJA",
    subtitle: "Energia • Velocidade e giro",
    color: "#f97316",
    cssClass: "",
    curriculum: [
      { id: "b7_1", cat: "CHUTE (CHAGUI)", title: "Bandal Chagui & Dubal Dangsang", sub: "Chute semicircular rápido e chute duplo no ar" },
      { id: "b7_2", cat: "ATAQUE", title: "Sonnal Mok Chigui", sub: "Ataque no pescoço com a faca da mão" },
      { id: "b7_3", cat: "POOMSAE", title: "Taegeuk Sam (3) Jang", sub: "20 movimentos • Princípio Ri (Fogo e Sol)" },
    ],
  },
  {
    id: "6_gub",
    gub: "6º Gub",
    name: "VERDE",
    subtitle: "Crescimento • Equilíbrio e potência",
    color: "#16a34a",
    cssClass: "",
    curriculum: [
      { id: "b6_1", cat: "DEFESA (MAKI)", title: "Sonnal Momtong Maki", sub: "Defesa dupla com faca da mão em Dwit Kubi" },
      { id: "b6_2", cat: "CHUTE (CHAGUI)", title: "Furio Chagui (Chute Gancho)", sub: "Chute chicote horizontal na altura da cabeça" },
      { id: "b6_3", cat: "POOMSAE", title: "Taegeuk Sa (4) Jang", sub: "20 movimentos • Princípio Jin (Trovão)" },
    ],
  },
  {
    id: "5_gub",
    gub: "5º Gub",
    name: "ROXA",
    subtitle: "Foco • Precisão nos golpes",
    color: "#7e22ce",
    cssClass: "",
    curriculum: [
      { id: "b5_1", cat: "ATAQUE", title: "Me Jumok Neryo Chigui & Palkup", sub: "Martelo de punho e cotovelada frontal" },
      { id: "b5_2", cat: "CHUTE (CHAGUI)", title: "Momi Dollyo Chagui (360º)", sub: "Chute giratório com giro completo de tronco" },
      { id: "b5_3", cat: "POOMSAE", title: "Taegeuk O (5) Jang", sub: "20 movimentos • Princípio Seon (Vento)" },
    ],
  },
  {
    id: "4_gub",
    gub: "4º Gub",
    name: "AZUL",
    subtitle: "Céu • Expansão e amplitude",
    color: "#1d4ed8",
    cssClass: "",
    curriculum: [
      { id: "b4_1", cat: "DEFESA (MAKI)", title: "Olgul Bakat Maki & Batangson", sub: "Defesa alta externa e defesa com palma da mão" },
      { id: "b4_2", cat: "CHUTE (CHAGUI)", title: "Tuit Furio Chagui (Chute Rodado)", sub: "Giro pelas costas com impacto de calcanhar" },
      { id: "b4_3", cat: "POOMSAE", title: "Taegeuk Yuk (6) Jang", sub: "19 movimentos • Princípio Gam (Água)" },
    ],
  },
  {
    id: "3_gub",
    gub: "3º Gub",
    name: "MARROM",
    subtitle: "Solidez • Maturidade técnica",
    color: "#5c3a21",
    cssClass: "",
    curriculum: [
      { id: "b3_1", cat: "BASE (SOGUI)", title: "Beom Sogui (Base do Tigre)", sub: "Peso 90% na perna de trás, ponta do pé à frente" },
      { id: "b3_2", cat: "DEFESA", title: "Kawi Maki (Defesa Tesoura)", sub: "Bloqueio simultâneo alto e baixo" },
      { id: "b3_3", cat: "POOMSAE", title: "Taegeuk Chil (7) Jang", sub: "25 movimentos • Princípio Gan (Montanha)" },
    ],
  },
  {
    id: "2_gub",
    gub: "2º Gub",
    name: "VERMELHA",
    subtitle: "Atenção • Autocontrole e força",
    color: "#dc2626",
    cssClass: "",
    curriculum: [
      { id: "b2_1", cat: "CHUTE SALTADO", title: "Twio Ap Chagui & Twio Yop Chagui", sub: "Chutes saltados com explosão e aterrissagem firme" },
      { id: "b2_2", cat: "QUEBRAMENTO", title: "Kyokpa (Quebramento de Madeira)", sub: "Precisão de foco e potência em tábua" },
      { id: "b2_3", cat: "POOMSAE", title: "Taegeuk Pal (8) Jang", sub: "27 movimentos • Princípio Gon (Terra)" },
    ],
  },
  {
    id: "1_gub",
    gub: "1º Gub",
    name: "VERM. / PRETA",
    subtitle: "Ponta Preta • Preparação para Dan",
    color: "#dc2626",
    cssClass: "belt-ver-preta",
    curriculum: [
      { id: "b1_1", cat: "REVISÃO GERAL", title: "Todos os Taegeuk (1 ao 8)", sub: "Execução contínua com ritmo, potência e Kihap" },
      { id: "b1_2", cat: "DEFESA PESSOAL", title: "Hosinsul (Defesa contra agarres)", sub: "Torções, projeções e contra-ataques rápidos" },
      { id: "b1_3", cat: "CHUTE SALTADO", title: "Twio Dwit Chagui & Tuit Furio", sub: "Domínio aéreo e controle de equilíbrio" },
    ],
  },
  {
    id: "1_poom",
    gub: "1º Poom",
    name: "POOM (PRETA/VERM.)",
    subtitle: "Graduação Juvenil • Pré-Dan",
    color: "#0d0d0d",
    cssClass: "belt-poom",
    curriculum: [
      { id: "bp_1", cat: "POOMSAE SUPERIOR", title: "Koryo Poomsae", sub: "30 movimentos • Espírito dos antigos guerreiros" },
      { id: "bp_2", cat: "TÉCNICA AVANÇADA", title: "Combinações de 3 Chutes sem baixar a perna", sub: "Controle isométrico de quadril e core" },
    ],
  },
  {
    id: "1_dan",
    gub: "1º Dan",
    name: "PRETA",
    subtitle: "Faixa Preta • Novo ciclo de maestria",
    color: "#0d0d0d",
    cssClass: "",
    curriculum: [
      { id: "bd_1", cat: "POOMSAE DAN", title: "Koryo & Keumgang Poomsae", sub: "Domínio técnico, base de grou (Hakdari Sogui)" },
      { id: "bd_2", cat: "LIDERANÇA", title: "Auxílio de instrução no Dojang", sub: "Condução de aquecimento e fundamentos para Gub" },
    ],
  },
];

function getTkdState() {
  const defaultState = {
    currentBeltId: "10_gub",
    checkedTechs: {},
    customTechs: {},
    sessionsByBelt: {},
  };
  try {
    const raw = localStorage.getItem("g_tkd_state");
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw);
    return {
      currentBeltId: parsed.currentBeltId || "10_gub",
      checkedTechs: parsed.checkedTechs || {},
      customTechs: parsed.customTechs || {},
      sessionsByBelt: parsed.sessionsByBelt || {},
    };
  } catch (e) {
    return defaultState;
  }
}

function saveTkdState(state) {
  localStorage.setItem("g_tkd_state", JSON.stringify(state));
  if (typeof scheduleCloudSync === "function") {
    scheduleCloudSync();
  } else if (typeof pushToFirestore === "function") {
    pushToFirestore(true);
  }
}

function renderTkdScreen() {
  const state = getTkdState();
  const beltIdx = Math.max(
    0,
    TKD_BELTS.findIndex((b) => b.id === state.currentBeltId),
  );
  const currentBelt = TKD_BELTS[beltIdx];
  const nextBelt =
    beltIdx + 1 < TKD_BELTS.length ? TKD_BELTS[beltIdx + 1] : null;

  const badgeEl = document.getElementById("tkdCurrentGubBadge");
  if (!badgeEl) return;
  badgeEl.innerText = currentBelt.gub.toUpperCase();

  const curVis = document.getElementById("tkdCurrentBeltVisual");
  curVis.className = `tkd-belt-visual ${currentBelt.cssClass}`;
  curVis.style.background = currentBelt.color;
  document.getElementById("tkdCurrentBeltName").innerText = currentBelt.name;
  document.getElementById("tkdCurrentBeltSub").innerText =
    `${currentBelt.gub} • ${currentBelt.subtitle.split("•")[0].trim()}`;

  const nextVis = document.getElementById("tkdNextBeltVisual");
  if (nextBelt) {
    nextVis.className = `tkd-belt-visual ${nextBelt.cssClass}`;
    nextVis.style.background = nextBelt.color;
    document.getElementById("tkdNextBeltName").innerText = nextBelt.name;
    document.getElementById("tkdNextBeltSub").innerText =
      `${nextBelt.gub} • Próximo Exame`;
  } else {
    nextVis.className = "tkd-belt-visual";
    nextVis.style.background = "#0d0d0d";
    document.getElementById("tkdNextBeltName").innerText = "2º DAN";
    document.getElementById("tkdNextBeltSub").innerText = "Mestria Contínua";
  }

  const selectEl = document.getElementById("tkdBeltSelect");
  selectEl.innerHTML = TKD_BELTS.map(
    (b) =>
      `<option value="${b.id}" ${b.id === currentBelt.id ? "selected" : ""}>${b.gub} — Faixa ${b.name}</option>`,
  ).join("");

  const customList = state.customTechs[currentBelt.id] || [];
  const allItems = [...currentBelt.curriculum, ...customList];
  let doneCount = 0;

  const checklistEl = document.getElementById("tkdChecklistContainer");
  checklistEl.innerHTML = allItems
    .map((item) => {
      const isDone = !!state.checkedTechs[item.id];
      if (isDone) doneCount++;
      const delBtn = item.isCustom
        ? `<button type="button" class="tkd-del-btn" onclick="deleteCustomTkdTech('${item.id}')">✕</button>`
        : "";
      return `
        <div class="tkd-tech-item ${isDone ? "done" : ""}">
          <div class="tkd-tech-info">
            <span class="tkd-tech-cat">${item.cat}</span>
            <span class="tkd-tech-title">${item.title}</span>
            ${item.sub ? `<span class="tkd-tech-sub">${item.sub}</span>` : ""}
          </div>
          <div class="tkd-tech-actions">
            ${delBtn}
            <button
              type="button"
              class="tkd-check-btn ${isDone ? "checked" : ""}"
              onclick="toggleTkdTech('${item.id}')"
            >✓</button>
          </div>
        </div>
      `;
    })
    .join("");

  document.getElementById("tkdCurriculumBeltTag").innerText =
    `${currentBelt.gub.toUpperCase()} • ${currentBelt.name}`;

  const pct =
    allItems.length > 0 ? Math.round((doneCount / allItems.length) * 100) : 0;
  document.getElementById("tkdReadinessPct").innerText = `${pct}%`;
  document.getElementById("tkdReadinessFill").style.width = `${pct}%`;

  const sessionsInBelt = Number(state.sessionsByBelt[currentBelt.id]) || 0;
  const totalTkdSessions = Object.values(state.sessionsByBelt).reduce(
    (acc, v) => acc + (Number(v) || 0),
    0,
  );
  document.getElementById("tkdSessionsInBelt").innerText = sessionsInBelt;
  document.getElementById("tkdTotalSessions").innerText = totalTkdSessions;
  document.getElementById("tkdTechCount").innerText =
    `${doneCount}/${allItems.length}`;

  const timelineEl = document.getElementById("tkdTimelineList");
  timelineEl.innerHTML = TKD_BELTS.map((b, idx) => {
    let statusClass = "locked";
    let statusText = "PRÓXIMA";
    let rowClass = "";

    if (idx < beltIdx) {
      statusClass = "done";
      statusText = "CONCLUÍDA ✓";
      rowClass = "passed";
    } else if (idx === beltIdx) {
      statusClass = "now";
      statusText = "ATUAL";
      rowClass = "active-belt";
    }

    return `
      <div class="tkd-timeline-item ${rowClass}" onclick="changeTkdBelt('${b.id}')">
        <span class="tkd-tl-gub">${b.gub}</span>
        <div class="tkd-tl-swatch ${b.cssClass}" style="background: ${b.color}"></div>
        <span class="tkd-tl-name">${b.name}</span>
        <span class="tkd-tl-status ${statusClass}">${statusText}</span>
      </div>
    `;
  }).join("");
}

function toggleTkdTech(techId) {
  const state = getTkdState();
  state.checkedTechs[techId] = !state.checkedTechs[techId];
  saveTkdState(state);
  renderTkdScreen();
  if (typeof showToast === "function") {
    showToast(
      state.checkedTechs[techId]
        ? "TÉCNICA DOMINADA ✓"
        : "MARCAÇÃO REMOVIDA",
    );
  }
}

function changeTkdBelt(beltId) {
  const state = getTkdState();
  state.currentBeltId = beltId;
  saveTkdState(state);
  renderTkdScreen();
  const belt = TKD_BELTS.find((b) => b.id === beltId);
  if (belt && typeof showToast === "function") {
    showToast(`GRADUAÇÃO: ${belt.gub.toUpperCase()} (${belt.name}) 🥋`);
  }
}

function promoteTkdBelt() {
  const state = getTkdState();
  const idx = TKD_BELTS.findIndex((b) => b.id === state.currentBeltId);
  if (idx === -1 || idx + 1 >= TKD_BELTS.length) {
    if (typeof showToast === "function") {
      showToast("VOCÊ JÁ ESTÁ NO TOPO DA TABELA (1º DAN)! 🏆");
    }
    return;
  }
  const next = TKD_BELTS[idx + 1];
  if (
    confirm(
      `Parabéns pela aprovação no exame!

Deseja avançar sua graduação para ${next.gub} — Faixa ${next.name}?`,
    )
  ) {
    state.currentBeltId = next.id;
    saveTkdState(state);
    renderTkdScreen();
    if (typeof showToast === "function") {
      showToast(`🎖️ PROMOVIDO PARA FAIXA ${next.name}!`);
    }
  }
}

function addCustomTkdTech() {
  const input = document.getElementById("tkdCustomTechInput");
  const text = input.value.trim();
  if (!text) return;

  const state = getTkdState();
  const beltId = state.currentBeltId;
  if (!state.customTechs[beltId]) state.customTechs[beltId] = [];

  state.customTechs[beltId].push({
    id: `cust_${Date.now()}`,
    cat: "TREINO EXTRA / MESTRE",
    title: text,
    sub: "Adicionado manualmente",
    isCustom: true,
  });

  input.value = "";
  saveTkdState(state);
  renderTkdScreen();
  if (typeof showToast === "function") {
    showToast("TÉCNICA ADICIONADA AO CURRÍCULO ✓");
  }
}

function deleteCustomTkdTech(techId) {
  const state = getTkdState();
  const beltId = state.currentBeltId;
  if (state.customTechs[beltId]) {
    state.customTechs[beltId] = state.customTechs[beltId].filter(
      (t) => t.id !== techId,
    );
    delete state.checkedTechs[techId];
    saveTkdState(state);
    renderTkdScreen();
  }
}

function toggleTkdTimelineDrawer() {
  const panel = document.getElementById("tkdTimelinePanel");
  const arrow = document.getElementById("tkdTimelineArrow");
  if (!panel) return;
  const isOpen = panel.classList.toggle("open");
  if (arrow) arrow.innerText = isOpen ? "▴" : "▾";
}

function registerTkdCheckin() {
  const state = getTkdState();
  const belt =
    TKD_BELTS.find((b) => b.id === state.currentBeltId) || TKD_BELTS[0];
  const focusInput = document.getElementById("tkdSessionFocusInput");
  const focusText = focusInput ? focusInput.value.trim() : "";

  state.sessionsByBelt[belt.id] =
    (Number(state.sessionsByBelt[belt.id]) || 0) + 1;
  saveTkdState(state);

  if (
    typeof getCheckinHistory === "function" &&
    typeof saveCheckinHistory === "function"
  ) {
    const todayISO = getTodayISO();
    const history = getCheckinHistory();
    history.unshift({
      id: `tkd_${Date.now()}`,
      isoDate: todayISO,
      date: isoToBR(todayISO),
      badge: "TKD",
      title: `🥋 Taekwondo (${belt.gub} - ${belt.name})`,
      details: focusText || "Treino técnico no dojang",
      isManual: true,
    });
    saveCheckinHistory(history);
  }

  if (focusInput) focusInput.value = "";
  renderTkdScreen();
  if (typeof renderDashboard === "function") {
    renderDashboard();
  }
  if (typeof showToast === "function") {
    showToast("TREINO DE TAEKWONDO REGISTRADO NO CALENDÁRIO 🥋✓");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderTkdScreen();
});
