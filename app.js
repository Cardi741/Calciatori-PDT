const CARDS = [
    // MYTHIC
    { id: 1, name: "Ruslan Danchivsky (GOAT)", rarity: "Mythic", value: 10000, color: "#ef4444", role: "attacco", tratto: "Jolly", ability: "Dribbling Ubriacante" },
    { id: 2, name: "Gioele Perroni", rarity: "Mythic", value: 9000, color: "#ef4444", role: "attacco", tratto: "Cecchino", ability: "Zona Cesarini" },
    { id: 3, name: "Alessandro Sgattoni", rarity: "Mythic", value: 9000, color: "#ef4444", role: "difesa", tratto: "Fisico", ability: "Muro" },
    { id: 4, name: "Marco P (ICON)", rarity: "Mythic", value: 12000, color: "#ef4444", role: "controllo", tratto: "Strategico", ability: "Pressing" },
    { id: 5, name: "Leo AZ (ICON)", rarity: "Mythic", value: 12000, color: "#ef4444", role: "supporto", tratto: "Leader", ability: "Assist" },
    { id: 6, name: "Lorenzo El mas grande (DUSAN)", rarity: "Mythic", value: 15000, color: "#ef4444", role: "attacco", tratto: "Dribblatore", ability: "Dribbling Ubriacante" },
    { id: 7, name: "Riccoh Giuatozzi (Prime moments)", rarity: "Mythic", value: 14000, color: "#ef4444", role: "controllo", tratto: "Tecnico", ability: "Pressing" },
    { id: 85, name: "Pippo Gol (Speciale)", rarity: "Mythic", value: 20000, color: "#ef4444", role: "attacco", tratto: "Cecchino", ability: "Zona Cesarini" },
    { id: 87, name: "Il Fondatore (ULTIMATE)", rarity: "Mythic", value: 50000, color: "#ef4444", role: "controllo", tratto: "Jolly", ability: "Muro" },

    // LEGGENDARI
    { id: 8, name: "Alessandro Pieralisi", rarity: "Legendary", value: 3000, color: "#f59e0b", role: "difesa", tratto: "Fisico", ability: "Muro" },
    { id: 9, name: "Godsent Okihmane", rarity: "Legendary", value: 3000, color: "#f59e0b", role: "supporto", tratto: "Tecnico", ability: "Assist" },
    { id: 10, name: "Antoh Bellesi", rarity: "Legendary", value: 3000, color: "#f59e0b", role: "controllo", tratto: "Strategico", ability: "Pressing" },
    { id: 11, name: "Matte Cardi", rarity: "Legendary", value: 3000, color: "#f59e0b", role: "attacco", tratto: "Rapido", ability: "Contropiede" },
    { id: 12, name: "Aura Jacket", rarity: "Legendary", value: 3000, color: "#f59e0b", role: "difesa", tratto: "Leader", ability: "Muro" },
    { id: 13, name: "Michele Bellesi (ICON)", rarity: "Legendary", value: 5000, color: "#f59e0b", role: "controllo", tratto: "Tecnico", ability: "Pressing" },
    { id: 14, name: "Don Oscar", rarity: "Legendary", value: 3000, color: "#f59e0b", role: "supporto", tratto: "Strategico", ability: "Assist" },
    { id: 15, name: "Amadou (portiere)", rarity: "Legendary", value: 3000, color: "#f59e0b", role: "difesa", tratto: "Fisico", ability: "Muro" },
    { id: 16, name: "Ciuchino Sperico", rarity: "Legendary", value: 3000, color: "#f59e0b", role: "attacco", tratto: "Rapido", ability: "Contropiede" },
    { id: 17, name: "Farell Ladjnou", rarity: "Legendary", value: 3000, color: "#f59e0b", role: "attacco", tratto: "Dribblatore", ability: "Dribbling Ubriacante" },
    { id: 18, name: "Andrea Giuatozzi", rarity: "Legendary", value: 3000, color: "#f59e0b", role: "difesa", tratto: "Fisico", ability: "Muro" },
    { id: 19, name: "Harry Pacchiani (al Francoforte)", rarity: "Legendary", value: 4500, color: "#f59e0b", role: "attacco", tratto: "Cecchino", ability: "Zona Cesarini" },
    { id: 20, name: "Ruslan Danchivsky (Winter)", rarity: "Legendary", value: 4000, color: "#f59e0b", role: "supporto", tratto: "Rapido", ability: "Assist" },
    { id: 82, name: "Francesco Politi (Speciale)", rarity: "Legendary", value: 8000, color: "#f59e0b", role: "controllo", tratto: "Strategico", ability: "Pressing" },

    // EPICI
    { id: 21, name: "Tommaso Saltari", rarity: "Epic", value: 800, color: "#a855f7", role: "attacco", tratto: "Cecchino", ability: "Zona Cesarini" },
    { id: 22, name: "Lorenzo El mas grande", rarity: "Epic", value: 800, color: "#a855f7", role: "difesa", tratto: "Fisico", ability: "Muro" },
    { id: 23, name: "Antoh (il napoletano)", rarity: "Epic", value: 800, color: "#a855f7", role: "supporto", tratto: "Rapido", ability: "Assist" },
    { id: 24, name: "Stewie", rarity: "Epic", value: 800, color: "#a855f7", role: "controllo", tratto: "Tecnico", ability: "Pressing" },
    { id: 25, name: "Brownie Cardinali", rarity: "Epic", value: 800, color: "#a855f7", role: "attacco", tratto: "Dribblatore", ability: "Dribbling Ubriacante" },
    { id: 26, name: "Leo Cardi", rarity: "Epic", value: 800, color: "#a855f7", role: "difesa", tratto: "Leader", ability: "Muro" },
    { id: 27, name: "Christian Forà", rarity: "Epic", value: 800, color: "#a855f7", role: "supporto", tratto: "Strategico", ability: "Assist" },
    { id: 28, name: "Amadou (attaccante)", rarity: "Epic", value: 800, color: "#a855f7", role: "attacco", tratto: "Cecchino", ability: "Contropiede" },
    { id: 29, name: "Riccaz Official", rarity: "Epic", value: 800, color: "#a855f7", role: "controllo", tratto: "Tecnico", ability: "Pressing" },
    { id: 30, name: "Simone Fadi", rarity: "Epic", value: 800, color: "#a855f7", role: "difesa", tratto: "Fisico", ability: "Muro" },
    { id: 31, name: "Riccoh Giuatozzi", rarity: "Epic", value: 800, color: "#a855f7", role: "supporto", tratto: "Leader", ability: "Assist" },
    { id: 32, name: "Paolo Pacchiani🪚", rarity: "Epic", value: 1200, color: "#a855f7", role: "attacco", tratto: "Fisico", ability: "Contropiede" },
    { id: 33, name: "Lorenzo (Special)", rarity: "Epic", value: 1000, color: "#a855f7", role: "difesa", tratto: "Rapido", ability: "Muro" },
    { id: 34, name: "Antoh (Special)", rarity: "Epic", value: 1000, color: "#a855f7", role: "supporto", tratto: "Tecnico", ability: "Assist" },
    { id: 86, name: "Mahel", rarity: "Epic", value: 1500, color: "#a855f7", role: "controllo", tratto: "Strategico", ability: "Pressing" },

    // RARI
    { id: 35, name: "Simone Tomassini", rarity: "Rare", value: 200, color: "#3b82f6", role: "attacco", tratto: "Cecchino", ability: "" },
    { id: 36, name: "Giovanni Piacentini", rarity: "Rare", value: 200, color: "#3b82f6", role: "difesa", tratto: "Fisico", ability: "" },
    { id: 37, name: "Marco B", rarity: "Rare", value: 200, color: "#3b82f6", role: "supporto", tratto: "Rapido", ability: "" },
    { id: 38, name: "Tonali Barbaresi", rarity: "Rare", value: 200, color: "#3b82f6", role: "controllo", tratto: "Strategico", ability: "" },
    { id: 39, name: "Amedeo Dezi", rarity: "Rare", value: 200, color: "#3b82f6", role: "attacco", tratto: "Tecnico", ability: "" },
    { id: 40, name: "Valè Trasatti", rarity: "Rare", value: 200, color: "#3b82f6", role: "difesa", tratto: "Leader", ability: "" },
    { id: 41, name: "Er giaigiax", rarity: "Rare", value: 200, color: "#3b82f6", role: "supporto", tratto: "Dribblatore", ability: "" },
    { id: 42, name: "Marcolino Giaguaroù", rarity: "Rare", value: 200, color: "#3b82f6", role: "controllo", tratto: "Rapido", ability: "" },
    { id: 43, name: "Harry Pacchiani", rarity: "Rare", value: 200, color: "#3b82f6", role: "attacco", tratto: "Strategico", ability: "" },
    { id: 44, name: "Marco B (Special)", rarity: "Rare", value: 350, color: "#3b82f6", role: "difesa", tratto: "Fisico", ability: "" },
    { id: 45, name: "Simone Tomassini (Special)", rarity: "Rare", value: 350, color: "#3b82f6", role: "supporto", tratto: "Tecnico", ability: "" },
    { id: 46, name: "Tonali Barbaresi (Special)", rarity: "Rare", value: 350, color: "#3b82f6", role: "controllo", tratto: "Strategico", ability: "" },
    { id: 47, name: "Amedeo Dezi (Special)", rarity: "Rare", value: 350, color: "#3b82f6", role: "attacco", tratto: "Rapido", ability: "" },
    { id: 48, name: "El lecc (Special)", rarity: "Rare", value: 350, color: "#3b82f6", role: "difesa", tratto: "Leader", ability: "" },
    { id: 83, name: "Enri'", rarity: "Rare", value: 400, color: "#3b82f6", role: "supporto", tratto: "Tecnico", ability: "" },

    // COMUNI
    { id: 49, name: "Rodolfo Dezi", rarity: "Common", value: 50, color: "#64748b", role: "attacco", tratto: "Fisico", ability: "" },
    { id: 50, name: "Marco Foggiano", rarity: "Common", value: 50, color: "#64748b", role: "difesa", tratto: "Strategico", ability: "" },
    { id: 51, name: "El lecc", rarity: "Common", value: 50, color: "#64748b", role: "supporto", tratto: "Rapido", ability: "" },
    { id: 52, name: "Bye", rarity: "Common", value: 50, color: "#64748b", role: "controllo", tratto: "Tecnico", ability: "" },
    { id: 53, name: "Share", rarity: "Common", value: 50, color: "#64748b", role: "attacco", tratto: "Leader", ability: "" },
    { id: 54, name: "Paolo Pacchiani", rarity: "Common", value: 50, color: "#64748b", role: "difesa", tratto: "Fisico", ability: "" },
    { id: 55, name: "Christian Pastori", rarity: "Common", value: 50, color: "#64748b", role: "supporto", tratto: "Strategico", ability: "" },
    { id: 56, name: "Don kriztof", rarity: "Common", value: 50, color: "#64748b", role: "controllo", tratto: "Rapido", ability: "" },
    { id: 57, name: "Rayan", rarity: "Common", value: 50, color: "#64748b", role: "attacco", tratto: "Tecnico", ability: "" },
    { id: 58, name: "Rodolfo Dezi (Special)", rarity: "Common", value: 100, color: "#64748b", role: "difesa", tratto: "Leader", ability: "" },
    { id: 81, name: "Uomo Ciao", rarity: "Common", value: 60, color: "#64748b", role: "supporto", tratto: "Fisico", ability: "" },
    { id: 84, name: "Sandro Montenovo", rarity: "Common", value: 60, color: "#64748b", role: "controllo", tratto: "Strategico", ability: "" },

    // EXTRA
    { id: 59, name: "Tommaso Saltari (ICON)", rarity: "Legendary", value: 3500, color: "#f59e0b", role: "attacco", tratto: "Cecchino", ability: "Zona Cesarini" },
    { id: 60, name: "Simone Fadi (ICON)", rarity: "Legendary", value: 3500, color: "#f59e0b", role: "difesa", tratto: "Fisico", ability: "Muro" },
    { id: 61, name: "Gioele Perroni (Winter)", rarity: "Mythic", value: 11000, color: "#ef4444", role: "attacco", tratto: "Rapido", ability: "Zona Cesarini" },
    { id: 62, name: "Alessandro Sgattoni (Winter)", rarity: "Mythic", value: 11000, color: "#ef4444", role: "difesa", tratto: "Fisico", ability: "Muro" },
    { id: 63, name: "Michele Bellesi (Prime)", rarity: "Mythic", value: 13000, color: "#ef4444", role: "controllo", tratto: "Leader", ability: "Pressing" },
    { id: 64, name: "Matte Cardi (ICON)", rarity: "Legendary", value: 3200, color: "#f59e0b", role: "supporto", tratto: "Tecnico", ability: "Assist" },
    { id: 65, name: "Andrea Giuatozzi (ICON)", rarity: "Legendary", value: 3200, color: "#f59e0b", role: "difesa", tratto: "Strategico", ability: "Muro" },
    { id: 66, name: "Stewie (Golden)", rarity: "Epic", value: 1500, color: "#a855f7", role: "attacco", tratto: "Dribblatore", ability: "Dribbling Ubriacante" },
    { id: 67, name: "Brownie (Elite)", rarity: "Epic", value: 1400, color: "#a855f7", role: "attacco", tratto: "Cecchino", ability: "Contropiede" },
    { id: 68, name: "Leo Cardi (Hero)", rarity: "Epic", value: 1600, color: "#a855f7", role: "difesa", tratto: "Leader", ability: "Muro" },
    { id: 69, name: "Riccaz (Star)", rarity: "Epic", value: 1300, color: "#a855f7", role: "controllo", tratto: "Tecnico", ability: "Pressing" },
    { id: 70, name: "Giovanni (Clutch)", rarity: "Rare", value: 400, color: "#3b82f6", role: "attacco", tratto: "Rapido", ability: "" },
    { id: 71, name: "Valè (Shield)", rarity: "Rare", value: 380, color: "#3b82f6", role: "difesa", tratto: "Fisico", ability: "" },
    { id: 72, name: "Er giaigiax (Biker)", rarity: "Rare", value: 420, color: "#3b82f6", role: "supporto", tratto: "Strategico", ability: "" },
    { id: 73, name: "Marcolino (Speedy)", rarity: "Rare", value: 390, color: "#3b82f6", role: "attacco", tratto: "Rapido", ability: "" },
    { id: 74, name: "Marco Foggiano (Old School)", rarity: "Common", value: 120, color: "#64748b", role: "difesa", tratto: "Leader", ability: "" },
    { id: 75, name: "Bye (Ghost)", rarity: "Common", value: 110, color: "#64748b", role: "controllo", tratto: "Tecnico", ability: "" },
    { id: 76, name: "Share (Link)", rarity: "Common", value: 115, color: "#64748b", role: "supporto", tratto: "Strategico", ability: "" },
    { id: 77, name: "Christian Pastori (Young)", rarity: "Common", value: 105, color: "#64748b", role: "attacco", tratto: "Rapido", ability: "" },
    { id: 78, name: "Don kriztof (Saint)", rarity: "Common", value: 130, color: "#64748b", role: "supporto", tratto: "Leader", ability: "" },
    { id: 79, name: "Rayan (Ace)", rarity: "Common", value: 125, color: "#64748b", role: "attacco", tratto: "Tecnico", ability: "" },
    { id: 80, name: "Aura Jacket (Neon)", rarity: "Legendary", value: 3800, color: "#f59e0b", role: "controllo", tratto: "Strategico", ability: "Pressing" }
]; 
 
const firebaseConfig = { 
    apiKey: "AIzaSyBZfTdHzvHKn_fAAbgch2NJL4nPYR5RX9M", 
    authDomain: "carte-da5e7.firebaseapp.com", 
    databaseURL: "https://carte-da5e7-default-rtdb.firebaseio.com", 
    projectId: "carte-da5e7", 
    storageBucket: "carte-da5e7.firebasestorage.app", 
    messagingSenderId: "791235198371", 
    appId: "1:791235198371:web:11a727fef361cbda956e16" 
}; 
 
let db = null; let auth = null; 
try { 
    firebase.initializeApp(firebaseConfig); 
    db = firebase.database(); auth = firebase.auth(); 
} catch (e) { console.error("Firebase fail", e); } 
 
const INITIAL_CREDITS = 550; 
const PACK_TYPES = { 
    standard: { name: "Standard", cost: 100, odds: { Mythic: 0.1, Legendary: 1.9, Epic: 8, Rare: 20, Common: 70 } }, 
    premium: { name: "Premium", cost: 500, odds: { Mythic: 1, Legendary: 9, Epic: 30, Rare: 40, Common: 20 } }, 
    legendary: { name: "Legendario", cost: 2000, odds: { Mythic: 5, Legendary: 40, Epic: 30, Rare: 15, Common: 10 } }, 
    mythic: { name: "Mito", cost: 10000, odds: { Mythic: 30, Legendary: 30, Epic: 20, Rare: 10, Common: 10 } } 
}; 
 
let users = { "Default": { credits: INITIAL_CREDITS, collection: {}, trophies: 0, gamesPlayed: 0, lastDailyBonus: 0 } }; 
let currentUser = "Default"; let showMissing = false; 
let selectedCardId = null; let requestedCardId = null;
let currentBattleTeam = [];
let currentGameSession = null;
let battleState = null;
 
async function loadState() { 
    const saved = localStorage.getItem('tcg_users'); 
    if (saved) users = JSON.parse(saved); 
    const last = localStorage.getItem('tcg_last_user'); 
    currentUser = (last && users[last]) ? last : "Default"; 
} 

async function saveState() { 
    localStorage.setItem('tcg_users', JSON.stringify(users)); 
    localStorage.setItem('tcg_last_user', currentUser); 
    
    if (auth && auth.currentUser && users[currentUser] && db) { 
        const data = {...users[currentUser]}; 
        data.email = auth.currentUser.email; 
        
        const safeEmail = auth.currentUser.email.toLowerCase().replace(/\./g, ','); 
        const updates = {};
        updates["users/" + auth.currentUser.uid] = data;
        updates["emailToUid/" + safeEmail] = auth.currentUser.uid;
        
        console.log("Tentativo di salvataggio su Firebase...");
        db.ref().update(updates)
            .then(() => console.log("Salvataggio Firebase completato con successo!"))
            .catch(err => {
                console.error("Errore salvataggio Firebase:", err);
                if (err.code === "PERMISSION_DENIED") {
                    console.warn("ATTENZIONE: Verifica di aver impostato le Security Rules correttamente nella console Firebase.");
                }
            });
    } 
} 

async function migrateLocalToCloud(fUser) { 
    const snap = await db.ref("users/" + fUser.uid).once("value"); 
    if (!snap.exists()) { 
        if (users["Default"] && Object.keys(users["Default"].collection).length > 0) { 
            users[fUser.email] = JSON.parse(JSON.stringify(users["Default"])); 
        } else { 
            users[fUser.email] = { credits: INITIAL_CREDITS, collection: {}, trophies: 0, gamesPlayed: 0, lastDailyBonus: Date.now() }; 
        } 
        users[fUser.email].email = fUser.email; 
    } else { 
        users[fUser.email] = snap.val(); 
        if (users[fUser.email].trophies === undefined) users[fUser.email].trophies = 0;
        if (users[fUser.email].gamesPlayed === undefined) users[fUser.email].gamesPlayed = 0;
    } 
    currentUser = fUser.email; 
    await saveState(); 
} 
 
function getRandomCard(odds) { 
    const rand = Math.random() * 100; let cum = 0; let rarity = "Common"; 
    for (const [r, chance] of Object.entries(odds)) { 
        cum += chance; if (rand < cum) { rarity = r; break; } 
    } 
    const eligible = CARDS.filter(c => c.rarity === rarity); 
    return eligible.length ? eligible[Math.floor(Math.random() * eligible.length)] : CARDS[0]; 
} 
 
function openPack(type) { 
    const pack = PACK_TYPES[type]; const user = users[currentUser]; 
    if (user.credits < pack.cost) { showToast("Crediti insufficienti!", "danger"); return null; } 
    user.credits -= pack.cost; const cards = []; 
    for (let i = 0; i < 5; i++) { 
        const c = getRandomCard(pack.odds); cards.push(c); 
        user.collection[c.id] = (user.collection[c.id] || 0) + 1; 
    } 
    saveState(); return cards; 
} 

function showToast(message, type = "success") {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    if (type === "danger") toast.style.borderLeftColor = "var(--danger)";
    if (type === "success") toast.style.borderLeftColor = "var(--success)";
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
 
document.addEventListener('DOMContentLoaded', () => { 
    const credEl = document.getElementById('credit-count'); 
    const zoomOverlay = document.getElementById('zoom-overlay'); 
    const zoomContainer = document.getElementById('zoom-container'); 
    const friendEmail = document.getElementById('friend-email'); 
    const statusEl = document.getElementById('recipient-status'); 
    const sendBtn = document.getElementById('send-card-btn'); 
    const cardPicker = document.getElementById('card-picker-grid'); 
    const requestPicker = document.getElementById('request-picker-grid');
 
    function updateUI() { 
        if (!users[currentUser]) {
            users[currentUser] = { credits: INITIAL_CREDITS, collection: {}, trophies: 0, gamesPlayed: 0, lastDailyBonus: 0 };
        }
        const user = users[currentUser]; 
        
        // Bonus giornaliero: si resetta a mezzanotte del giorno successivo
        const now = new Date();
        const lastBonusDate = user.lastDailyBonus ? new Date(user.lastDailyBonus) : new Date(0);
        
        // Confronto solo anno, mese e giorno per vedere se è passato il giorno
        const isNewDay = now.getFullYear() > lastBonusDate.getFullYear() || 
                        now.getMonth() > lastBonusDate.getMonth() || 
                        now.getDate() > lastBonusDate.getDate();

        if (isNewDay) { 
            user.credits += 100; 
            user.lastDailyBonus = now.getTime(); 
            showToast("✨ Bonus del giorno: +100 Crediti!", "success"); 
            saveState(); 
        } 
        
        credEl.textContent = user.credits; 
        renderCollection(); 
        renderShop(); 
        renderMercato(); 
        renderTrade(); 
    } 
 
    function renderCard(card, qty = null, missing = false) { 
        const isElite = (qty >= 1000);
        const displayQty = isElite ? (qty - 1000) : qty;

        const div = document.createElement('div'); 
        div.className = `card rarity-${card.rarity.toLowerCase()} ${missing?'missing':''} ${displayQty>1?'duplicate':''} ${isElite?'elite':''}`; 
        div.style.borderColor = card.color; 
        div.innerHTML = `
            <div class="rarity" style="color:${card.color}">${isElite?'ELITE ':''}${card.rarity}</div>
            <h4>${card.name}</h4>
            <div style="font-size: 0.7rem; color: var(--text-secondary); margin-bottom: 5px;">
                ${card.role.toUpperCase()} | ${card.tratto || 'Nessun Tratto'}
            </div>
            <div style="font-size: 0.65rem; color: #3b82f6; font-style: italic; min-height: 1rem;">
                ${card.ability ? '✨ ' + card.ability : ''}
            </div>
            <div class="value">Valore: ${card.value}</div>
        `; 
        
        if (isElite) {
            div.style.boxShadow = `0 0 20px ${card.color}`;
            div.style.borderWidth = "4px";
        }

        if (qty !== null) div.innerHTML += `<div class="quantity">x${displayQty}</div>`; 
        
        if (displayQty >= 3 && !isElite) {
            const fbtn = document.createElement('button'); fbtn.className = 'buy-btn'; fbtn.style.marginBottom = "5px"; fbtn.textContent = "FONDI (3x)";
            fbtn.onclick = (e) => { 
                e.stopPropagation(); 
                users[currentUser].collection[card.id] = (users[currentUser].collection[card.id] - 3) + 1001; 
                showToast("FUSIONE! Carta potenziata in ELITE", "success"); 
                saveState(); updateUI(); 
            };
            div.appendChild(fbtn);
        }

        if (displayQty > 1 || (isElite && displayQty > 1)) { 
            const btn = document.createElement('button'); btn.className = 'sell-btn'; btn.textContent = `Svincola (${Math.floor(card.value*0.2)})`; 
            btn.onclick = (e) => { 
                e.stopPropagation(); 
                users[currentUser].collection[card.id]--; 
                users[currentUser].credits += Math.floor(card.value*0.2); 
                showToast(`Carta venduta per ${Math.floor(card.value*0.2)} crediti!`); 
                saveState(); updateUI(); 
            }; 
            div.appendChild(btn); 
        } 
        div.onclick = () => { zoomContainer.innerHTML = ''; const zc = div.cloneNode(true); zc.querySelector('.sell-btn')?.remove(); zoomContainer.appendChild(zc); zoomOverlay.classList.remove('hidden'); }; 
        return div; 
    } 
 
    function renderShop() { 
        const cont = document.querySelector('.pack-container'); cont.innerHTML = ''; 
        Object.entries(PACK_TYPES).forEach(([id, p]) => { 
            const d = document.createElement('div'); d.className = `pack pack-${id}`; 
            d.innerHTML = `<h3>${p.name}</h3><p>${p.cost} Crediti</p><button class="buy-btn">Apri</button>`; 
            
            const btn = d.querySelector('button');
            // Supporto touch per iPhone
            btn.addEventListener('touchstart', (e) => e.stopPropagation(), {passive: true});

            btn.onclick = () => { 
                const res = openPack(id); if (res) { 
                    document.getElementById('pack-modal').classList.remove('hidden'); 
                    document.getElementById('close-pack-btn').classList.add('hidden');
                    const grid = document.getElementById('modal-cards-grid'); grid.innerHTML = ''; 
                    res.forEach((c, i) => setTimeout(() => { const el = renderCard(c); el.classList.add('reveal-animation'); grid.appendChild(el); }, i*600)); 
                    setTimeout(() => document.getElementById('close-pack-btn').classList.remove('hidden'), 3500); 
                    updateUI(); 
                } 
            }; 
            cont.appendChild(d); 
        }); 
    } 
 
    function renderCollection() { 
        const container = document.getElementById('collection-grid'); 
        container.innerHTML = ''; 
        // Note: we'll use the container as a wrapper for the sections
        container.style.display = 'block'; 

        const user = users[currentUser]; 
        const rarities = ["Mythic", "Legendary", "Epic", "Rare", "Common"];

        rarities.forEach(rarity => {
            const rarityCards = CARDS.filter(c => c.rarity === rarity);
            const userHasSome = rarityCards.some(c => (user.collection[c.id] || 0) > 0);
            
            if (userHasSome || showMissing) {
                const section = document.createElement('div');
                section.className = 'rarity-section';
                
                const header = document.createElement('h3');
                header.className = `rarity-header rarity-${rarity.toLowerCase()}`;
                header.textContent = rarity;
                section.appendChild(header);

                const grid = document.createElement('div');
                grid.className = 'card-grid';
                
                rarityCards.forEach(c => {
                    const q = user.collection[c.id] || 0;
                    if (q > 0) grid.appendChild(renderCard(c, q));
                    else if (showMissing) grid.appendChild(renderCard(c, null, true));
                });

                if (grid.children.length > 0) {
                    section.appendChild(grid);
                    container.appendChild(section);
                }
            }
        });
    } 
 
    function renderTrade() { 
        const grid = document.querySelector('.trade-grid'); grid.innerHTML = '<h3 style="margin-bottom:1rem">Scambia 3 Doppioni per 1 Nuova</h3>'; 
        ["Common", "Rare", "Epic", "Legendary", "Mythic"].forEach(r => { 
            const b = document.createElement('button'); const user = users[currentUser]; 
            const dups = Object.keys(user.collection).reduce((acc, id) => { 
                const c = CARDS.find(x => x.id == id); 
                return (c && c.rarity === r) ? acc + Math.max(0, user.collection[id]-1) : acc; 
            }, 0); 
            b.textContent = `Scambia ${r} (${dups} doppioni)`; b.disabled = dups < 3; 
            b.onclick = () => { 
                let rem = 0; Object.keys(user.collection).forEach(id => { 
                    const c = CARDS.find(x => x.id == id); 
                    while (c && c.rarity === r && user.collection[id] > 1 && rem < 3) { user.collection[id]--; rem++; } 
                }); 
                const pool = CARDS.filter(x => x.rarity === r); const n = pool[Math.floor(Math.random()*pool.length)]; 
                user.collection[n.id] = (user.collection[n.id] || 0) + 1; saveState(); updateUI(); showToast("Scambio completato! Ricevuto: " + n.name); 
            }; 
            grid.appendChild(b); 
        }); 
        renderCardPicker(); 
        renderRequestPicker();
    } 
 
    function renderCardPicker() { 
        cardPicker.innerHTML = ''; const user = users[currentUser]; 
        Object.keys(user.collection).forEach(id => { 
            const c = CARDS.find(x => x.id == id); if (c && user.collection[id] > 0) { 
                const d = document.createElement('div'); d.className = `card rarity-${c.rarity.toLowerCase()} ${selectedCardId==id?'selected':''}`; 
                d.style.borderColor = c.color; d.innerHTML = `<h4>${c.name}</h4><div class="quantity">x${user.collection[id]}</div>`; 
                d.onclick = () => { 
                    selectedCardId = id; 
                    document.getElementById('offered-card-info').textContent = "Offri: " + c.name; 
                    renderCardPicker(); 
                    validateTransfer(); 
                }; 
                cardPicker.appendChild(d); 
            } 
        }); 
    } 

    function renderRequestPicker() {
        requestPicker.innerHTML = '';
        CARDS.forEach(c => {
            const d = document.createElement('div'); 
            d.className = `card rarity-${c.rarity.toLowerCase()} ${requestedCardId==c.id?'selected':''}`; 
            d.style.borderColor = c.color; 
            d.innerHTML = `<h4>${c.name}</h4>`; 
            d.onclick = () => { 
                requestedCardId = c.id; 
                document.getElementById('requested-card-info').textContent = "Richiedi: " + c.name; 
                renderRequestPicker(); 
                validateTransfer(); 
            }; 
            requestPicker.appendChild(d); 
        });
    }
 
    let validationTimeout;
    function validateTransfer() { 
        const email = friendEmail.value.trim().toLowerCase(); 
        if (!email.includes('@') || email.length < 5) { 
            statusEl.textContent = ""; sendBtn.disabled = true; return; 
        } 
        
        if (auth?.currentUser && email === auth.currentUser.email) {
            statusEl.textContent = "Non puoi scambiare con te stesso";
            statusEl.style.color = "#ef4444";
            sendBtn.disabled = true;
            return;
        }

        statusEl.textContent = "Verifica destinatario..."; 
        statusEl.style.color = "var(--text-secondary)";
        
        if (!db) {
            statusEl.textContent = "Errore: Database non connesso";
            statusEl.style.color = "#ef4444";
            return;
        }

        const safe = email.replace(/\./g, ','); 
        
        // Timeout handling
        const timeout = setTimeout(() => {
            statusEl.textContent = "Tempo scaduto. Controlla la connessione.";
            statusEl.style.color = "#f59e0b";
        }, 8000);

        db.ref("emailToUid/" + safe).once("value")
            .then(snap => {
                clearTimeout(timeout);
                if (snap.exists()) { 
                    statusEl.textContent = "Amico trovato! ✓"; statusEl.style.color = "#22c55e"; 
                    if (selectedCardId && requestedCardId) { 
                        sendBtn.disabled = false; sendBtn.style.opacity = "1"; 
                    } 
                } else { 
                    statusEl.textContent = "Amico non registrato su questo gioco"; 
                    statusEl.style.color = "#f59e0b"; 
                    sendBtn.disabled = true; sendBtn.style.opacity = "0.5"; 
                } 
            })
            .catch(e => {
                console.error("Firebase Search Error:", e);
                statusEl.textContent = "Errore durante la ricerca...";
                statusEl.style.color = "#ef4444";
                sendBtn.disabled = true;
            });
    } 
 
    friendEmail.oninput = () => {
        clearTimeout(validationTimeout);
        validationTimeout = setTimeout(validateTransfer, 500);
    };
    sendBtn.onclick = async () => { 
        if (!auth?.currentUser) { showToast("Accedi per scambiare!", "danger"); return; }
        const email = friendEmail.value.trim().toLowerCase(); 
        if (!confirm(`Inviare proposta di scambio a ${email}?`)) return; 
        
        document.getElementById('transfer-spinner').classList.remove('hidden');
        sendBtn.disabled = true;
        
        try {
            const safe = email.replace(/\./g, ','); 
            const uidSnap = await db.ref("emailToUid/" + safe).once("value"); 
            const recUid = uidSnap.val(); 

            const tradeData = {
                from: auth.currentUser.email,
                fromUid: auth.currentUser.uid,
                toUid: recUid,
                offeredId: selectedCardId,
                requestedId: requestedCardId,
                timestamp: Date.now(),
                status: 'pending'
            };

            const newTradeRef = db.ref("pendingTrades").push();
            await newTradeRef.set(tradeData);
            
            showToast("Proposta di scambio inviata!", "success"); 
            selectedCardId = null; requestedCardId = null;
            document.getElementById('offered-card-info').textContent = "Offri: Seleziona una carta";
            document.getElementById('requested-card-info').textContent = "Richiedi: Seleziona una carta";
            updateUI(); 
        } catch (e) {
            console.error(e);
            showToast("Errore durante l'invio della proposta", "danger");
        } finally {
            document.getElementById('transfer-spinner').classList.add('hidden');
            validateTransfer();
        }
    }; 

    let tradesListener = null;
    let currentTradeTab = 'received';
    
    function listenForPendingTrades() {
        if (!auth?.currentUser) return;
        if (tradesListener) {
            db.ref("pendingTrades").off("value", tradesListener);
        }
        
        tradesListener = (snap) => {
            const list = document.getElementById('pending-trades-list');
            list.innerHTML = '';
            const allTrades = snap.val();
            
            if (!allTrades) {
                list.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 20px; background: rgba(255,255,255,0.02); border-radius: 12px;">Nessuna proposta.</p>';
                return;
            }

            const myUid = auth.currentUser.uid;
            let displayCount = 0;

            Object.entries(allTrades).forEach(([key, t]) => {
                if (t.status !== 'pending') return;

                const offered = CARDS.find(c => c.id == t.offeredId);
                const requested = CARDS.find(c => c.id == t.requestedId);
                if (!offered || !requested) return;

                const div = document.createElement('div');
                div.className = 'trade-offer-item';

                if (currentTradeTab === 'received' && t.toUid === myUid) {
                    displayCount++;
                    div.innerHTML = `
                        <div class="offer-info">
                            <span style="font-size: 0.8rem; color: var(--text-secondary);">Da: ${t.from}</span>
                            <div class="offer-details">
                                <span style="color: var(--success); font-weight: bold;">Offre: ${offered.name}</span>
                                <span style="color: var(--text-secondary);">🔄</span>
                                <span style="color: var(--accent); font-weight: bold;">Chiede: ${requested.name}</span>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button class="accept-btn">Accetta</button>
                            <button class="decline-btn">Rifiuta</button>
                        </div>
                    `;
                    div.querySelector('.accept-btn').onclick = () => handleTradeAction(key, 'accept');
                    div.querySelector('.decline-btn').onclick = () => handleTradeAction(key, 'decline');
                    list.appendChild(div);
                } 
                else if (currentTradeTab === 'sent' && t.fromUid === myUid) {
                    displayCount++;
                    div.innerHTML = `
                        <div class="offer-info">
                            <span style="font-size: 0.8rem; color: var(--text-secondary);">Per: (Caricamento...)</span>
                            <div class="offer-details">
                                <span style="color: var(--success); font-weight: bold;">Offri: ${offered.name}</span>
                                <span style="color: var(--text-secondary);">🔄</span>
                                <span style="color: var(--accent); font-weight: bold;">Chiedi: ${requested.name}</span>
                            </div>
                        </div>
                        <div class="btn-group">
                            <button class="decline-btn">Annulla</button>
                        </div>
                    `;
                    // Fetch recipient email for sent trades
                    db.ref(`users/${t.toUid}/email`).once('value').then(emailSnap => {
                        const emailSpan = div.querySelector('.offer-info span');
                        if (emailSpan) emailSpan.textContent = `Per: ${emailSnap.val() || 'Utente'}`;
                    });
                    
                    div.querySelector('.decline-btn').onclick = () => handleTradeAction(key, 'cancel');
                    list.appendChild(div);
                }
            });

            if (displayCount === 0) {
                list.innerHTML = `<p style="color: var(--text-secondary); text-align: center; padding: 20px; background: rgba(255,255,255,0.02); border-radius: 12px;">Nessuna proposta ${currentTradeTab === 'received' ? 'ricevuta' : 'inviata'}.</p>`;
            }
        };

        db.ref("pendingTrades").on("value", tradesListener);
    }

    async function handleTradeAction(tradeKey, action) {
        if (!auth?.currentUser) return;
        const tradeRef = db.ref("pendingTrades/" + tradeKey);
        const snap = await tradeRef.once("value");
        const t = snap.val();

        if (!t || t.status !== 'pending') return;

        if (action === 'decline' || action === 'cancel') {
            await tradeRef.update({ status: action === 'decline' ? 'declined' : 'cancelled' });
            showToast(action === 'decline' ? "Scambio rifiutato" : "Scambio annullato");
            return;
        }

        // Action: Accept
        const myUser = users[currentUser];
        
        if (!myUser.collection[t.requestedId] || myUser.collection[t.requestedId] < 1) {
            showToast("Non hai la carta richiesta!", "danger");
            return;
        }

        try {
            const senderSnap = await db.ref("users/" + t.fromUid).once("value");
            const senderData = senderSnap.val();
            
            if (!senderData || !senderData.collection[t.offeredId] || senderData.collection[t.offeredId] < 1) {
                showToast("Il mittente non ha più la carta offerta!", "danger");
                await tradeRef.update({ status: 'expired' });
                return;
            }

            // Prepare Atomic Update
            const updates = {};
            
            // Update Sender
            senderData.collection[t.offeredId]--;
            if (senderData.collection[t.offeredId] === 0) delete senderData.collection[t.offeredId];
            senderData.collection[t.requestedId] = (senderData.collection[t.requestedId] || 0) + 1;
            updates["users/" + t.fromUid] = senderData;

            // Update Me
            myUser.collection[t.requestedId]--;
            if (myUser.collection[t.requestedId] === 0) delete myUser.collection[t.requestedId];
            myUser.collection[t.offeredId] = (myUser.collection[t.offeredId] || 0) + 1;
            updates["users/" + auth.currentUser.uid] = myUser;

            // Update Trade Status
            updates["pendingTrades/" + tradeKey + "/status"] = 'accepted';

            await db.ref().update(updates);
            
            // Sync local state
            users[currentUser] = myUser;
            localStorage.setItem('tcg_users', JSON.stringify(users));

            showToast("Scambio completato con successo!", "success");
            updateUI();
        } catch (e) {
            console.error(e);
            showToast("Errore durante lo scambio", "danger");
        }
    }
 
    document.getElementById('google-login').onclick = () => { 
        if (!auth) {
            showToast("Errore: Firebase non inizializzato.", "danger");
            return;
        }
        
        // Su mobile (iOS/Android), signInWithPopup viene spesso bloccato.
        // Usiamo un controllo per suggerire signInWithRedirect se necessario, 
        // o informare l'utente di sbloccare i popup.
        const provider = new firebase.auth.GoogleAuthProvider();
        
        auth.signInWithPopup(provider)
            .catch(err => {
                console.error("Login Error:", err);
                if (err.code === "auth/unauthorized-domain") {
                    const domain = window.location.hostname;
                    alert(`ACCESSO BLOCCATO: Il dominio "${domain}" non è autorizzato.\n\nQuesto succede perché Firebase deve sapere che il tuo sito è "sicuro".\n\nPer risolvere:\n1. Vai su Firebase Console\n2. Clicca su "Authentication" > "Settings" > "Authorized Domains"\n3. Clicca "Add Domain" e incolla esattamente: ${domain}\n\nNota: Se stai usando GitHub Pages, il dominio è solitamente cardi741.github.io`);
                    showToast("Configurazione Firebase richiesta", "danger");
                } else {
                    showToast("Errore di accesso: " + err.message, "danger");
                }
            });
    }; 
    document.getElementById('google-logout').onclick = () => {
        auth?.signOut().catch(err => showToast("Errore logout: " + err.message, "danger"));
    }; 
    let userDbListener = null;

    async function initUserSession(u) {
        // 1. Pulizia totale listener e stati precedenti
        if (userDbListener) db.ref().off("value", userDbListener);
        if (tradesListener) db.ref("pendingTrades").off("value", tradesListener);
        db.ref("games").off();
        
        if (u) {
            // SESSIONE GOOGLE
            document.getElementById('google-login').classList.add('hidden'); 
            document.getElementById('user-logged-in').classList.remove('hidden'); 
            document.getElementById('user-info').textContent = u.displayName; 
            document.getElementById('p2p-trading').classList.remove('hidden');
            
            await migrateLocalToCloud(u);
            
            userDbListener = db.ref("users/" + u.uid).on("value", (snap) => {
                if (snap.exists()) {
                    users[u.email] = snap.val();
                    currentUser = u.email;
                    updateUI();
                }
            });

            listenForPendingTrades();

            // RECOVERY: Partita attiva
            db.ref("games").orderByChild("timestamp").limitToLast(10).once("value", (snap) => {
                const allGames = snap.val();
                if (allGames) {
                    Object.entries(allGames).forEach(([id, g]) => {
                        if (g.status === "playing" && (g.p1.uid === u.uid || g.p2.uid === u.uid)) {
                            startBattle(id, g.p1.uid === u.uid ? "p1" : "p2");
                        }
                    });
                }
            });
        } else {
            // SESSIONE LOCALE
            document.getElementById('google-login').classList.remove('hidden'); 
            document.getElementById('user-logged-in').classList.add('hidden'); 
            document.getElementById('p2p-trading').classList.add('hidden');
            const last = localStorage.getItem('tcg_last_user');
            currentUser = (last && users[last]) ? last : "Default";
            updateUI();
        }
    }

    auth?.onAuthStateChanged(u => initUserSession(u)); 
     
    // Account Management
    const userSelect = document.getElementById('user-select');
    function updateAccountList() {
        userSelect.innerHTML = '';
        Object.keys(users).forEach(u => {
            const opt = document.createElement('option');
            opt.value = u;
            opt.textContent = u;
            opt.selected = (u === currentUser);
            userSelect.appendChild(opt);
        });
    }

    userSelect.onchange = () => {
        currentUser = userSelect.value;
        saveState();
        updateUI();
    };

    document.getElementById('new-user').onclick = () => {
        const name = prompt("Nome nuovo account locale:");
        if (name && !users[name]) {
            users[name] = { credits: INITIAL_CREDITS, collection: {}, lastDailyBonus: Date.now() };
            currentUser = name;
            saveState();
            updateAccountList();
            updateUI();
        } else if (users[name]) {
            alert("Nome già esistente!");
        }
    };

    // Navigation listeners
    const sections = ['shop-view', 'collection-view', 'trade-view', 'mercato-view', 'arena-view', 'leaderboard-view'];
    const showView = (id) => {
        sections.forEach(s => {
            const el = document.getElementById(s);
            if (el) el.classList.add('hidden');
        });
        const target = document.getElementById(id);
        if (target) target.classList.remove('hidden');
        
        // Forza re-render per evitare UI "morta"
        if (id === 'shop-view') renderShop();
        if (id === 'collection-view') renderCollection();
        if (id === 'arena-view') renderArenaLobby();
        if (id === 'leaderboard-view') renderLeaderboard();
        if (id === 'mercato-view') renderMercato();
        if (id === 'trade-view') renderTrade();
    };

    document.getElementById('show-shop').onclick = () => showView('shop-view'); 
    document.getElementById('show-collection').onclick = () => showView('collection-view'); 
    document.getElementById('show-arena').onclick = () => showView('arena-view');
    document.getElementById('show-leaderboard').onclick = () => showView('leaderboard-view');
    document.getElementById('show-trade').onclick = () => showView('trade-view'); 

    document.getElementById('forfeit-battle-btn').onclick = async () => {
        if (!currentGameSession) return;
        if (confirm("Vuoi davvero abbandonare la partita? Verrà contata come sconfitta.")) {
            try {
                await db.ref(`games/${currentGameSession}`).update({ 
                    status: 'finished', 
                    lastLog: "Partita abbandonata." 
                });
                // Forza reset locale se Firebase non risponde subito
                setTimeout(() => { if (currentGameSession) location.reload(); }, 1000);
            } catch (e) {
                location.reload();
            }
        }
    };

    // Trade tab switching
    document.getElementById('tab-received').onclick = () => {
        currentTradeTab = 'received';
        document.getElementById('tab-received').style.opacity = '1';
        document.getElementById('tab-sent').style.opacity = '0.4';
        listenForPendingTrades();
    };
    document.getElementById('tab-sent').onclick = () => {
        currentTradeTab = 'sent';
        document.getElementById('tab-sent').style.opacity = '1';
        document.getElementById('tab-received').style.opacity = '0.4';
        listenForPendingTrades();
    };
    document.getElementById('show-mercato').onclick = () => showView('mercato-view'); 
    document.getElementById('close-pack-btn').onclick = () => { document.getElementById('pack-modal').classList.add('hidden'); }; 
    zoomOverlay.onclick = () => zoomOverlay.classList.add('hidden'); 
    document.getElementById('toggle-missing').onchange = (e) => { showMissing = e.target.checked; renderCollection(); }; 
 
    function renderArenaLobby() {
        const teamSelector = document.getElementById('battle-team-selector');
        teamSelector.innerHTML = '';
        currentBattleTeam.forEach(id => {
            const card = CARDS.find(c => c.id == id);
            const el = renderCard(card);
            el.onclick = () => {
                currentBattleTeam = currentBattleTeam.filter(tid => tid != id);
                renderArenaLobby();
            };
            teamSelector.appendChild(el);
        });

        // Visualizzazione Sinergie Attive nel Lobby
        if (currentBattleTeam.length > 0) {
            const syn = getSynergies(currentBattleTeam);
            const synDiv = document.createElement('div');
            synDiv.style.marginTop = "15px";
            synDiv.innerHTML = `
                <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 5px; color: var(--text-secondary);">Sinergie Attive:</div>
                ${syn.regenHp ? '<span class="synergy-indicator">💚 Difesa (Regen HP)</span>' : ''}
                ${syn.allForce ? '<span class="synergy-indicator">⚔️ Supporto (+1 Forza)</span>' : ''}
                ${syn.stealEnergy ? '<span class="synergy-indicator">⚡ Controllo (Ruba Energia)</span>' : ''}
                ${syn.attackForce ? '<span class="synergy-indicator">🔥 Attacco (+1 Attacco)</span>' : ''}
                ${(!syn.regenHp && !syn.allForce && !syn.stealEnergy && !syn.attackForce) ? '<span style="font-size: 0.7rem; opacity: 0.5;">Nessuna sinergia attiva</span>' : ''}
            `;
            teamSelector.appendChild(synDiv);
        }

        const picker = document.getElementById('team-picker-grid');
        picker.innerHTML = '';
        const user = users[currentUser];
        Object.keys(user.collection).forEach(id => {
            if (user.collection[id] > 0) {
                const card = CARDS.find(c => c.id == id);
                const el = renderCard(card, user.collection[id]);
                el.onclick = () => {
                    if (currentBattleTeam.length < 5 && !currentBattleTeam.includes(parseInt(id))) {
                        // Bilanciamento: max 2 carte Leggendarie/Mitiche
                        const highRarityCount = currentBattleTeam.filter(tid => {
                            const c = CARDS.find(x => x.id == tid);
                            return c.rarity === "Legendary" || c.rarity === "Mythic";
                        }).length;

                        if ((card.rarity === "Legendary" || card.rarity === "Mythic") && highRarityCount >= 2) {
                            showToast("Max 2 carte Leggendarie/Mitiche per team!", "danger");
                            return;
                        }

                        currentBattleTeam.push(parseInt(id));
                        renderArenaLobby();
                    }
                };
                picker.appendChild(el);
            }
        });

        document.getElementById('join-battle-btn').disabled = currentBattleTeam.length < 5;
    }

    document.getElementById('auto-team-btn').onclick = () => {
        const user = users[currentUser];
        const available = Object.keys(user.collection).filter(id => user.collection[id] > 0);
        available.sort((a, b) => (CARDS.find(c => c.id == b).value) - (CARDS.find(c => c.id == a).value));
        currentBattleTeam = available.slice(0, 5).map(id => parseInt(id));
        renderArenaLobby();
    };

    document.getElementById('join-battle-btn').onclick = async () => {
        if (!auth?.currentUser) { showToast("Accedi per combattere nell'Arena!", "danger"); return; }
        
        // Pulizia sessioni vecchie e Matchmaking vecchio (> 5 min)
        const now = Date.now();
        db.ref("games").orderByChild("timestamp").endAt(now - 1800000).once("value", s => {
            s.forEach(gs => { if (gs.val().status === "playing") gs.ref.remove(); });
        });
        db.ref("matchmaking").orderByChild("timestamp").endAt(now - 300000).once("value", s => {
            s.forEach(ms => ms.ref.remove());
        });

        document.getElementById('matchmaking-status').classList.remove('hidden');
        document.getElementById('join-battle-btn').disabled = true;

        const mmRef = db.ref("matchmaking");
        const myUid = auth.currentUser.uid;
        mmRef.child(myUid).onDisconnect().remove();

        const queueSnap = await mmRef.once("value");
        const waiting = queueSnap.val();

        if (waiting) {
            const oppId = Object.keys(waiting).find(id => id !== myUid);
            if (oppId) {
                const opponent = waiting[oppId];
                const gameId = "game_" + now;
                const gameData = {
                    p1: { uid: oppId, email: opponent.email, team: opponent.team, hp: 20, energy: 10, move: null, nextCostMod: 0 },
                    p2: { uid: myUid, email: auth.currentUser.email, team: currentBattleTeam, hp: 20, energy: 10, move: null, nextCostMod: 0 },
                    status: "playing",
                    turn: 1,
                    lastLog: "Battaglia Iniziata!",
                    timestamp: now
                };
                await mmRef.child(oppId).remove();
                await db.ref("games/" + gameId).set(gameData);
                startBattle(gameId, "p2");
                return;
            }
        }

        await mmRef.child(myUid).set({
            email: auth.currentUser.email,
            team: currentBattleTeam,
            timestamp: now
        });

        const gameRef = db.ref("games");
        gameRef.on("child_added", (snap) => {
            const game = snap.val();
            if (game.p1.uid === auth.currentUser.uid && game.status === "playing") {
                gameRef.off("child_added");
                startBattle(snap.key, "p1");
            }
        });
    };

    document.getElementById('cancel-matchmaking').onclick = async () => {
        await db.ref("matchmaking/" + auth.currentUser.uid).remove();
        document.getElementById('matchmaking-status').classList.add('hidden');
        document.getElementById('join-battle-btn').disabled = false;
    };

    function startBattle(gameId, role) {
        currentGameSession = gameId;
        document.getElementById('arena-lobby').classList.add('hidden');
        document.getElementById('battle-overlay').classList.remove('hidden');
        document.getElementById('matchmaking-status').classList.add('hidden');
        
        // Pulizia automatica se usciamo durante il gioco
        db.ref(`games/${gameId}`).onDisconnect().update({
            status: 'finished',
            lastLog: "Un giocatore si è disconnesso."
        });

        db.ref("games/" + gameId).on("value", (snap) => {
            const game = snap.val();
            if (!game) return;
            battleState = game;
            updateBattleUI(role);
            
            // Entrambi hanno mosso? Risolvi il turno.
            // Usiamo un controllo sul turno per evitare doppie risoluzioni
            if (game.p1.move && game.p2.move && game.status === 'playing') {
                // Solo un giocatore (p1) o chi arriva per primo tenta la risoluzione atomica
                if (role === 'p1') resolveTurn(gameId);
            }
        });
    }

    function updateBattleUI(myRole) {
        const me = battleState[myRole];
        const opp = battleState[myRole === 'p1' ? 'p2' : 'p1'];
        const user = users[currentUser];

        const passBtn = document.getElementById('pass-turn-btn');
        if (me.move) {
            passBtn.disabled = true;
            passBtn.style.opacity = "0.5";
        } else {
            passBtn.disabled = false;
            passBtn.style.opacity = "1";
            passBtn.onclick = () => {
                if (confirm("Vuoi passare il turno? Recupererai +2 Energia ma subirai danni diretti se l'avversario gioca una carta.")) {
                    db.ref(`games/${currentGameSession}/${myRole}`).update({
                        move: -1
                    });
                }
            };
        }

        document.getElementById('player-name').textContent = me.email.split('@')[0];
        document.getElementById('opp-name').textContent = opp.email.split('@')[0];
        
        document.getElementById('player-hp-text').textContent = `${me.hp}/20 HP`;
        document.getElementById('player-hp-bar').style.width = (me.hp / 20 * 100) + "%";
        
        document.getElementById('opp-hp-text').textContent = `${opp.hp}/20 HP`;
        document.getElementById('opp-hp-bar').style.width = (opp.hp / 20 * 100) + "%";

        renderEnergy('player-energy', me.energy);
        renderEnergy('opp-energy', opp.energy);
        
        const synMe = getSynergies(me.team);
        const synOpp = getSynergies(opp.team);

        // Nuova info testuale energia e sinergie
        document.getElementById('battle-timer').innerHTML = `
            <div style="font-weight:bold; color: #3b82f6;">TUA ENERGIA: ${me.energy}/10⚡</div>
            <div style="font-size: 0.7rem; color: #22c55e;">
                ${synMe.regenHp ? '💚 REGRENERAZIONE' : ''} 
                ${synMe.stealEnergy ? '⚡ FURTO ENERGIA' : ''}
                ${synMe.allForce ? '⚔️ BONUS SQUADRA' : ''}
            </div>
            <div style="font-size: 0.8rem; opacity: 0.7; margin-top:5px;">Energia Avversaria: ${opp.energy}/10⚡</div>
        `;

        document.getElementById('turn-counter').textContent = `TURNO ${battleState.turn}/10`;
        document.getElementById('battle-log').textContent = battleState.lastLog;

        const hand = document.getElementById('player-hand');
        hand.innerHTML = '';
        me.team.forEach(cardId => {
            const card = CARDS.find(c => c.id == cardId);
            const el = renderCard(card);
            const cost = getCardCost(card, me);
            
            const actionArea = document.createElement('div');
            actionArea.style.marginTop = "8px";
            actionArea.innerHTML = `<div style="font-weight:bold; color:#3b82f6; margin-bottom:5px;">${cost}⚡ Energia</div>`;
            
            const playBtn = document.createElement('button');
            playBtn.className = 'buy-btn';
            playBtn.style.padding = "0.4rem 1rem";
            playBtn.textContent = "GIOCA";
            
            if (me.energy >= cost && !me.move) {
                playBtn.onclick = (e) => {
                    e.stopPropagation();
                    playBtn.disabled = true;
                    playBtn.textContent = "...";
                    const isElite = (user.collection[cardId] >= 1000);
                    db.ref(`games/${currentGameSession}/${myRole}`).update({
                        move: cardId,
                        moveElite: isElite,
                        energy: me.energy - cost
                    });
                };
            } else {
                playBtn.disabled = true;
                playBtn.style.opacity = "0.5";
                if (me.move) playBtn.textContent = "ATTENDI";
                else playBtn.textContent = "NO⚡";
            }
            
            actionArea.appendChild(playBtn);
            el.appendChild(actionArea);
            hand.appendChild(el);
        });

        if (me.move) {
            if (me.move === -1) {
                document.getElementById('player-played-card').innerHTML = '<div class="card" style="border-color:#475569; display:flex; align-items:center; justify-content:center;"><h4>TURNO PASSATO</h4></div>';
            } else {
                const card = CARDS.find(c => c.id == me.move);
                document.getElementById('player-played-card').innerHTML = '';
                document.getElementById('player-played-card').appendChild(renderCard(card));
            }
        } else {
            document.getElementById('player-played-card').innerHTML = 'Scegli una carta...';
        }

        if (opp.move) {
            if (opp.move === -1) {
                document.getElementById('opp-played-card').innerHTML = '<div class="card" style="border-color:#475569; display:flex; align-items:center; justify-content:center;"><h4>TURNO PASSATO</h4></div>';
            } else {
                document.getElementById('opp-played-card').innerHTML = '<div class="card" style="height:100%; display:flex; align-items:center; justify-content:center; background:rgba(255,255,255,0.05);"><h4>CARTA PRONTA</h4></div>';
            }
        } else {
            document.getElementById('opp-played-card').innerHTML = 'In attesa...';
        }

        if (battleState.status === "finished") {
            db.ref("games/" + currentGameSession).off();
            
            // Verifica ricompensa (se non ancora data per questa sessione)
            const sessionKey = "rewarded_" + currentGameSession;
            if (!localStorage.getItem(sessionKey)) {
                if (battleState[myRole].hp > battleState[myRole === 'p1' ? 'p2' : 'p1'].hp) {
                    rewardWinner();
                }
                localStorage.setItem(sessionKey, "true");
            }

            setTimeout(() => {
                alert("Battaglia Conclusa: " + battleState.lastLog);
                location.reload();
            }, 2000);
        }
    }

    function renderEnergy(id, count) {
        const cont = document.getElementById(id);
        cont.innerHTML = '';
        for (let i = 0; i < 10; i++) {
            const pip = document.createElement('div');
            pip.className = `energy-pip ${i < count ? 'active' : ''}`;
            cont.appendChild(pip);
        }
    }

    function getCardCost(card, player) {
        const costs = { Common: 1, Rare: 2, Epic: 3, Legendary: 4, Mythic: 5 };
        let base = costs[card.rarity];
        if (player.nextCostMod) {
            base = Math.max(1, base + player.nextCostMod);
        }
        return base;
    }

    function getSynergies(teamIds) {
        const team = teamIds.map(id => CARDS.find(c => c.id === id));
        const counts = { attacco: 0, difesa: 0, supporto: 0, controllo: 0 };
        team.forEach(c => { if(c) counts[c.role]++; });

        return {
            allForce: counts.supporto >= 2 ? 1 : 0,
            stealEnergy: counts.controllo >= 2,
            regenHp: counts.difesa >= 2 ? 2 : 0,
            attackForce: counts.attacco >= 3 ? 1 : 0
        };
    }

    async function resolveTurn(gameId) {
        const gameRef = db.ref("games/" + gameId);
        const snap = await gameRef.once("value");
        const g = snap.val();
        
        const c1 = g.p1.move !== -1 ? CARDS.find(c => c.id == g.p1.move) : null;
        const c2 = g.p2.move !== -1 ? CARDS.find(c => c.id == g.p2.move) : null;

        const syn1 = getSynergies(g.p1.team);
        const syn2 = getSynergies(g.p2.team);

        // Step 1: Base Force
        let f1 = c1 ? ({ Common:1, Rare:2, Epic:3, Legendary:4, Mythic:5 }[c1.rarity] + (g.p1.moveElite ? 1 : 0)) : 0;
        let f2 = c2 ? ({ Common:1, Rare:2, Epic:3, Legendary:4, Mythic:5 }[c2.rarity] + (g.p2.moveElite ? 1 : 0)) : 0;

        // Synergies Base
        f1 += syn1.allForce;
        f2 += syn2.allForce;
        if (c1 && c1.role === "attacco") f1 += syn1.attackForce;
        if (c2 && c2.role === "attacco") f2 += syn2.attackForce;

        // Step 1.5: Role RPS Bonus
        const ROLE_COUNTERS = {
            "attacco": "supporto",
            "supporto": "controllo",
            "controllo": "difesa",
            "difesa": "attacco"
        };
        if (c1 && c2) {
            if (ROLE_COUNTERS[c1.role] === c2.role) f1 += 1;
            if (ROLE_COUNTERS[c2.role] === c1.role) f2 += 1;
        }

        // Step 2: Traits Counter
        const TRAIT_COUNTERS = {
            "Rapido": { "Fisico": 1, "Strategico": 2 },
            "Fisico": { "Strategico": 1, "Dribblatore": 2 },
            "Strategico": { "Dribblatore": 1, "Leader": 2 },
            "Dribblatore": { "Leader": 1, "Cecchino": 2 },
            "Leader": { "Cecchino": 1, "Tecnico": 2 },
            "Cecchino": { "Tecnico": 1, "Rapido": 2 },
            "Tecnico": { "Rapido": 1, "Fisico": 2 },
            "Jolly": { "any": 1 }
        };

        function getTraitBonus(t1, t2) {
            if (t1 === "Jolly") return 1;
            if (TRAIT_COUNTERS[t1] && TRAIT_COUNTERS[t1][t2]) return TRAIT_COUNTERS[t1][t2];
            return 0;
        }

        if (c1 && c2) {
            f1 += getTraitBonus(c1.tratto, c2.tratto);
            f2 += getTraitBonus(c2.tratto, c1.tratto);
        }

        // Step 3: Abilities
        let a1Active = c1 && (!c2 || c2.ability !== "Pressing");
        let a2Active = c2 && (!c1 || c1.ability !== "Pressing");
        
        g.p1.nextCostMod = 0;
        g.p2.nextCostMod = 0;

        // Ability Logic
        if (a1Active) {
            if (c1.ability === "Assist") g.p1.nextCostMod = -1;
            if (c1.ability === "Dribbling Ubriacante" && c2 && c2.role === "difesa") f1 += 2;
            if (c1.ability === "Contropiede" && c2 && c2.role === "attacco") f1 += 2;
            if (c1.ability === "Zona Cesarini" && g.p1.hp < 5) f1 += 3;
        }
        if (a2Active) {
            if (c2.ability === "Assist") g.p2.nextCostMod = -1;
            if (c2.ability === "Dribbling Ubriacante" && c1 && c1.role === "difesa") f2 += 2;
            if (c2.ability === "Contropiede" && c1 && c1.role === "attacco") f2 += 2;
            if (c2.ability === "Zona Cesarini" && g.p2.hp < 5) f2 += 3;
        }

        // Step 4: Damage Calculation
        let d1 = Math.max(0, f2 - f1);
        let d2 = Math.max(0, f1 - f2);

        if (a1Active && c1.ability === "Muro") d1 = Math.max(0, d1 - 1);
        if (a2Active && c2.ability === "Muro") d2 = Math.max(0, d2 - 1);

        g.p1.hp -= d1;
        g.p2.hp -= d2;

        // Synergies End Turn
        if (syn1.regenHp) g.p1.hp = Math.min(20, g.p1.hp + syn1.regenHp);
        if (syn2.regenHp) g.p2.hp = Math.min(20, g.p2.hp + syn2.regenHp);

        let energySteal1 = 0, energySteal2 = 0;
        if (syn1.stealEnergy) energySteal1 = 1;
        if (syn2.stealEnergy) energySteal2 = 1;

        let log = "";
        if (c1 && c2) log = `${c1.name} vs ${c2.name}: `;
        else if (c1) log = `${c1.name} attacca direttamente! `;
        else if (c2) log = `L'avversario attacca direttamente! `;
        else log = "Entrambi hanno passato il turno. ";

        if (d2 > d1) log += `P1 infligge ${d2} danni!`;
        else if (d1 > d2) log += `P2 infligge ${d1} danni!`;
        else log += "Pareggio!";

        // Dynamic Energy: Winner gets +1, Loser gets +3 (for comeback)
        let energyGain1 = 1;
        let energyGain2 = 1;

        if (g.p1.move === -1) energyGain1 = 2; // Bonus for passing
        if (g.p2.move === -1) energyGain2 = 2;

        if (d2 > d1) { // P1 wins clash
            energyGain1 = Math.max(energyGain1, 1);
            energyGain2 = Math.max(energyGain2, 3);
        } else if (d1 > d2) { // P2 wins clash
            energyGain1 = Math.max(energyGain1, 3);
            energyGain2 = Math.max(energyGain2, 1);
        }

        // Prep Next Turn
        g.turn += 1;
        g.p1.move = null; g.p2.move = null;
        g.p1.energy = Math.min(10, g.p1.energy + energyGain1 + energySteal1 - energySteal2);
        g.p2.energy = Math.min(10, g.p2.energy + energyGain2 + energySteal2 - energySteal1);
        g.p1.energy = Math.max(0, g.p1.energy);
        g.p2.energy = Math.max(0, g.p2.energy);
        g.lastLog = log;

        if (g.p1.hp <= 0 || g.p2.hp <= 0 || g.turn > 10) {
            g.status = "finished";
            if (g.p1.hp > g.p2.hp) g.lastLog = "Vince " + g.p1.email;
            else if (g.p2.hp > g.p1.hp) g.lastLog = "Vince " + g.p2.email;
            else g.lastLog = "Pareggio finale!";
        }

        await gameRef.set(g);
    }

    function rewardWinner() {
        users[currentUser].credits += 200;
        users[currentUser].trophies = (users[currentUser].trophies || 0) + 35;
        users[currentUser].gamesPlayed = (users[currentUser].gamesPlayed || 0) + 1;
        saveState();
        showToast("🏆 Vittoria! +200 Crediti e +35 Trofei", "success");
    }

    async function renderLeaderboard() {
        const podium = document.getElementById('leaderboard-podium');
        const list = document.getElementById('leaderboard-list');
        podium.innerHTML = '<div class="spinner"></div>';
        list.innerHTML = '';

        try {
            const snap = await db.ref("users").once("value");
            const allUsers = snap.val();
            if (!allUsers) return;

            const players = Object.values(allUsers)
                .filter(u => u.gamesPlayed > 0)
                .sort((a, b) => (b.trophies || 0) - (a.trophies || 0))
                .slice(0, 100);

            podium.innerHTML = '';
            
            // Render Podium (Top 3)
            const ranks = ['second', 'first', 'third'];
            const icons = ['🥈', '🥇', '🥉'];
            
            [1, 0, 2].forEach(idx => {
                const p = players[idx];
                const div = document.createElement('div');
                div.className = `podium-item ${ranks[idx]}`;
                
                if (p) {
                    div.innerHTML = `
                        <div class="podium-rank">${icons[idx]}</div>
                        <div class="podium-name">${p.email.split('@')[0]}</div>
                        <div class="podium-trophies">${p.trophies || 0} 🏆</div>
                    `;
                } else {
                    div.innerHTML = `<div class="podium-rank">${icons[idx]}</div><div class="podium-name">---</div>`;
                }
                podium.appendChild(div);
            });

            // Render List (Others)
            players.forEach((p, i) => {
                const item = document.createElement('div');
                item.className = `leaderboard-item ${p.email === auth?.currentUser?.email ? 'me' : ''}`;
                item.innerHTML = `
                    <div class="rank-number">#${i + 1}</div>
                    <div class="player-name">${p.email.split('@')[0]}</div>
                    <div class="trophy-count">${p.trophies || 0} 🏆</div>
                    <div class="games-count">${p.gamesPlayed || 0} 🎮</div>
                `;
                list.appendChild(item);
            });

        } catch (e) {
            console.error(e);
            podium.innerHTML = "Errore nel caricamento classifica.";
        }
    }

    loadState().then(() => {
        updateAccountList();
        updateUI();
    }); 
}); 
 
function renderMercato() { 
    const grid = document.getElementById('mercato-grid'); grid.innerHTML = ''; 
    [...CARDS].sort((a,b) => a.id - b.id).forEach(c => { 
        const div = document.createElement('div'); div.className = `card rarity-${c.rarity.toLowerCase()}`; 
        div.style.borderColor = c.color;
        div.innerHTML = `<div class="rarity" style="color:${c.color}">${c.rarity}</div><h4>${c.name}</h4><div class="value">Costo: ${c.value*3}</div><button class="buy-btn" style="margin-top:10px">Compra</button>`; 
        div.querySelector('button').onclick = (e) => { 
            e.stopPropagation();
            if (users[currentUser].credits >= c.value*3) { 
                users[currentUser].credits -= c.value*3; 
                users[currentUser].collection[c.id] = (users[currentUser].collection[c.id]||0)+1; 
                showToast(`${c.name} acquistato!`); saveState(); updateUI(); 
            } else {
                showToast("Crediti insufficienti!", "danger");
            }
        }; 
        div.onclick = () => {
            const zoomContainer = document.getElementById('zoom-container');
            const zoomOverlay = document.getElementById('zoom-overlay');
            zoomContainer.innerHTML = ''; 
            const zc = div.cloneNode(true); 
            zc.querySelector('button')?.remove(); 
            zoomContainer.appendChild(zc); 
            zoomOverlay.classList.remove('hidden');
        };
        grid.appendChild(div); 
    }); 
}