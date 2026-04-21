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
    standard: { name: "Standard", cost: 100, count: 4, odds: { Mythic: 0.1, Legendary: 1.9, Epic: 8, Rare: 20, Common: 70 } }, 
    premium: { name: "Premium", cost: 500, count: 5, odds: { Mythic: 1, Legendary: 9, Epic: 30, Rare: 40, Common: 20 } }, 
    legendary: { name: "Leggendario", cost: 2000, count: 6, odds: { Mythic: 5, Legendary: 40, Epic: 30, Rare: 15, Common: 10 } }, 
    mythic: { name: "Mito", cost: 10000, count: 7, odds: { Mythic: 30, Legendary: 30, Epic: 20, Rare: 10, Common: 10 } } 
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
    
    if (auth && auth.currentUser && users[currentUser] && db && currentUser === auth.currentUser.email) { 
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
    for (let i = 0; i < pack.count; i++) { 
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
 
    function renderMiniCard(card, currentPower) {
        const div = document.createElement('div');
        div.className = `mini-card rarity-${card.rarity.toLowerCase()}`;
        div.style.borderColor = card.color;
        div.innerHTML = `<div class="mini-power">${currentPower}</div><div class="mini-name">${card.name.split(' ')[0]}</div>`;
        return div;
    }

    function calculateZonePower(state, role, zone) {
        const p = state[role];
        const opp = state[role === 'p1' ? 'p2' : 'p1'];
        const zones = ['sinistra', 'centro', 'destra'];
        let total = 0;
        p.zones[zone].forEach(cObj => {
            if (cObj.id === "slot_filler") return;
            const card = CARDS.find(x => x.id == cObj.id);
            if (!card) return;
            let pwr = cObj.power;
            if (card.role === "attacco" && p.zones[zone].length < opp.zones[zone].length) pwr += 1;
            if (card.role === "supporto") pwr += (p.zones[zone].length - 1);
            if (card.ability.type === "passive") {
                if (card.ability.effect === "+1 per ogni carta supporto nel campo") {
                    let supportCount = 0;
                    zones.forEach(z => { [state.p1, state.p2].forEach(pl => { pl.zones[z].forEach(co => { if (co.id !== "slot_filler" && CARDS.find(x => x.id == co.id).role === "supporto") supportCount++; }); }); });
                    pwr += supportCount;
                }
                if (card.ability.effect === "+2 se sei dietro in almeno 2 zone") {
                    let losingZones = 0;
                    zones.forEach(z => { if (p.zones[z].length < opp.zones[z].length) losingZones++; });
                    if (losingZones >= 2) pwr += 2;
                }
            }
            if (card.ability.type === "ongoing") {
                if (card.ability.effect === "+1 per ogni carta nella zona") pwr += (p.zones[zone].length + opp.zones[zone].length);
                if (card.ability.effect === "se sei in vantaggio → +2") { if (p.zones[zone].length > opp.zones[zone].length) pwr += 2; }
            }
            opp.zones[zone].forEach(oObj => { if (oObj.id !== "slot_filler") { const oCard = CARDS.find(x => x.id == oObj.id); if (oCard.ability.type === "ongoing" && oCard.ability.effect === "tutte le carte avversarie qui -1") { if (card.ability.effect !== "questa carta non può essere ridotta") pwr -= 1; } } });
            total += pwr;
        });
        p.zones[zone].forEach(cObj => { if (cObj.id !== "slot_filler") { const card = CARDS.find(x => x.id == cObj.id); if (card.ability.type === "ongoing" && card.ability.effect === "tutti i tuoi attaccanti qui +1") { p.zones[zone].forEach(other => { if (other.id !== "slot_filler" && CARDS.find(x => x.id == other.id).role === "attacco") total += 1; }); } } });
        return total;
    }

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
        
        // Face Container with fallback
        const faceHtml = `
            <div class="card-face-container">
                <img src="faccie/${card.id}.png" class="player-face" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <svg class="face-placeholder" style="display:none;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            </div>
        `;

        div.innerHTML = `
            <div class="rarity" style="color:${card.color}">${isElite?'ELITE ':''}${card.rarity}</div>
            ${faceHtml}
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
        div.onclick = () => { zoomContainer.innerHTML = ''; const zc = div.cloneNode(true); zc.querySelector('.sell-btn')?.remove(); zoomContainer.appendChild(zc); zoomOverlay.classList.remove('hidden'); }; 
        return div; 
    } 
 
    function renderShop() { 
        const cont = document.querySelector('.pack-container'); cont.innerHTML = ''; 
        Object.entries(PACK_TYPES).forEach(([id, p]) => { 
            const d = document.createElement('div'); d.className = `pack pack-${id}`; 
            d.innerHTML = `
                <div class="pack-visual">
                    <svg width="80" height="110" viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-bottom:15px; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.5));">
                        <rect width="80" height="110" rx="8" fill="#1e293b" stroke="white" stroke-opacity="0.1" stroke-width="2"/>
                        <path d="M0 20L80 40V60L0 80V20Z" fill="white" fill-opacity="0.05"/>
                        <circle cx="40" cy="55" r="20" stroke="white" stroke-opacity="0.2" stroke-width="2" stroke-dasharray="4 4"/>
                        <text x="40" y="60" text-anchor="middle" fill="white" fill-opacity="0.3" font-size="12" font-weight="bold" style="text-transform:uppercase">${p.name[0]}</text>
                    </svg>
                </div>
                <h3>${p.name}</h3>
                <p>${p.cost} Crediti</p>
                <button class="buy-btn">Apri</button>
            `; 
            
            const btn = d.querySelector('button');
            btn.onclick = () => { 
                const user = users[currentUser];
                if (user.credits < p.cost) { showToast("Crediti insufficienti!", "danger"); return; }
                
                // Animazione pacchetto che trema
                d.classList.add('pack-opening-active');
                
                setTimeout(() => {
                    const res = openPack(id); 
                    d.classList.remove('pack-opening-active');
                    if (res) { 
                        document.getElementById('pack-modal').classList.remove('hidden'); 
                        document.getElementById('close-pack-btn').classList.add('hidden');
                        const grid = document.getElementById('modal-cards-grid'); grid.innerHTML = ''; 
                        res.forEach((c, i) => setTimeout(() => { 
                            const el = renderCard(c); 
                            el.classList.add('reveal-animation'); 
                            
                            // Effetto speciale per carte Rare/Mythic
                            if (c.rarity === "Legendary" || c.rarity === "Mythic") {
                                el.style.boxShadow = `0 0 50px ${c.color}`;
                                el.style.zIndex = "100";
                                // Aggiunta di una classe per animazione di "luccichio" invece del toast ingombrante
                                el.classList.add('premium-reveal');
                                document.querySelector('.modal-content').classList.add('pack-opening-active');
                                setTimeout(() => document.querySelector('.modal-content').classList.remove('pack-opening-active'), 500);
                            }

                            grid.appendChild(el); 
                        }, i*600)); 
                        setTimeout(() => document.getElementById('close-pack-btn').classList.remove('hidden'), 3500); 
                        updateUI(); 
                    } 
                }, 800);
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
            document.getElementById('local-account-area').classList.add('hidden');
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
            document.getElementById('local-account-area').classList.remove('hidden');
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
    document.getElementById('credits-display').onclick = () => {
        showView('shop-view');
        document.getElementById('credit-shop').scrollIntoView({ behavior: 'smooth' });
    };
    document.getElementById('show-collection').onclick = () => showView('collection-view'); 
    document.getElementById('show-arena').onclick = () => showView('arena-view');
    document.getElementById('show-leaderboard').onclick = () => showView('leaderboard-view');
    document.getElementById('show-trade').onclick = () => showView('trade-view'); 

    const tutModal = document.getElementById('tutorial-modal');
    const openTut = () => tutModal.classList.remove('hidden');
    const closeTut = () => tutModal.classList.add('hidden');

    document.getElementById('open-tutorial-btn').onclick = openTut;
    document.getElementById('open-tutorial-battle-btn').onclick = openTut;
    document.getElementById('close-tutorial').onclick = closeTut;
    document.getElementById('tutorial-ok-btn').onclick = closeTut;

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

        // Info team nel lobby
        if (currentBattleTeam.length > 0) {
            const statsDiv = document.createElement('div');
            statsDiv.style.marginTop = "15px";
            let totalPower = 0, totalCost = 0;
            currentBattleTeam.forEach(id => {
                const c = CARDS.find(x => x.id == id);
                if (c) { totalPower += c.power; totalCost += c.cost; }
            });
            statsDiv.innerHTML = `
                <div style="font-size: 0.8rem; font-weight: bold; color: var(--accent);">STATISTICHE TEAM:</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">Potere Totale: ${totalPower} | Costo Medio: ${(totalCost/5).toFixed(1)}</div>
            `;
            teamSelector.appendChild(statsDiv);
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

        const isReady = currentBattleTeam.length >= 5;
        document.getElementById('join-battle-btn').disabled = !isReady;
        document.getElementById('create-private-btn').disabled = !isReady;
        document.getElementById('join-private-btn').disabled = !isReady;
    }

    document.getElementById('auto-team-btn').onclick = () => {
        const user = users[currentUser];
        const available = Object.keys(user.collection).filter(id => user.collection[id] > 0);
        available.sort((a, b) => (CARDS.find(c => c.id == b).value) - (CARDS.find(c => c.id == a).value));
        currentBattleTeam = available.slice(0, 5).map(id => parseInt(id));
        renderArenaLobby();
    };

    document.getElementById('create-private-btn').onclick = async () => {
        if (!auth?.currentUser) { showToast("Accedi per creare una sfida!", "danger"); return; }
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        const myUid = auth.currentUser.uid;
        
        document.getElementById('private-room-info').textContent = "CODICE STANZA: " + code;
        document.getElementById('create-private-btn').disabled = true;
        
        const roomRef = db.ref("privateRooms/" + code);
        await roomRef.set({
            p1: { uid: myUid, email: auth.currentUser.email, team: currentBattleTeam },
            status: "waiting",
            timestamp: Date.now()
        });
        
        roomRef.on("value", (snap) => {
            const room = snap.val();
            if (room && room.status === "playing" && room.gameId) {
                roomRef.off();
                startBattle(room.gameId, "p1");
            }
        });
        
        roomRef.onDisconnect().remove();
    };

    document.getElementById('join-private-btn').onclick = async () => {
        if (!auth?.currentUser) { showToast("Accedi per entrare nella sfida!", "danger"); return; }
        const code = document.getElementById('join-code-input').value.trim().toUpperCase();
        if (!code) return;
        
        const roomRef = db.ref("privateRooms/" + code);
        const snap = await roomRef.once("value");
        const room = snap.val();
        
        if (!room) { showToast("Stanza non trovata!", "danger"); return; }
        if (room.status !== "waiting") { showToast("Stanza piena o già iniziata!", "danger"); return; }
        if (room.p1.uid === auth.currentUser.uid) { showToast("Sei già in questa stanza!", "danger"); return; }
        
        const gameId = "game_priv_" + Date.now();
        const gameData = {
            p1: { uid: room.p1.uid, email: room.p1.email, team: room.p1.team, energy: 1, zones: { sinistra: [], centro: [], destra: [] }, move: null },
            p2: { uid: auth.currentUser.uid, email: auth.currentUser.email, team: currentBattleTeam, energy: 1, zones: { sinistra: [], centro: [], destra: [] }, move: null },
            status: "playing",
            turn: 1,
            lastLog: "Sfida Privata Iniziata!",
            timestamp: Date.now()
        };
        
        await db.ref("games/" + gameId).set(gameData);
        await roomRef.update({ status: "playing", gameId: gameId });
        startBattle(gameId, "p2");
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
                    p1: { uid: oppId, email: opponent.email, team: opponent.team, energy: 1, zones: { sinistra: [], centro: [], destra: [] }, move: null },
                    p2: { uid: myUid, email: auth.currentUser.email, team: currentBattleTeam, energy: 1, zones: { sinistra: [], centro: [], destra: [] }, move: null },
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
        db.ref(`games/${gameId}`).onDisconnect().update({ status: 'finished', lastLog: "Avversario disconnesso." });
        db.ref("games/" + gameId).on("value", (snap) => {
            const game = snap.val();
            if (!game) return;
            battleState = game;
            updateBattleUI(role);
            if (game.p1.move && game.p2.move && game.status === 'playing' && role === 'p1') resolveTurn(gameId);
        });
    }

    function updateBattleUI(myRole) {
        const me = battleState[myRole];
        const opp = battleState[myRole === 'p1' ? 'p2' : 'p1'];
        document.getElementById('player-name').textContent = me.email.split('@')[0];
        document.getElementById('opp-name').textContent = opp.email.split('@')[0];
        document.getElementById('turn-counter').textContent = `TURNO ${battleState.turn}/6`;
        document.getElementById('player-energy-text').textContent = `⚡ ${me.energy}`;
        document.getElementById('opp-energy-text').textContent = `⚡ ${opp.energy}`;
        document.getElementById('battle-log').textContent = battleState.lastLog;

        const zones = ['sinistra', 'centro', 'destra'];
        zones.forEach(z => {
            const pPow = calculateZonePower(battleState, myRole, z);
            const oPow = calculateZonePower(battleState, myRole==='p1'?'p2':'p1', z);
            document.getElementById(`player-power-${z}`).textContent = pPow;
            document.getElementById(`opp-power-${z}`).textContent = oPow;
            
            const pSlots = document.getElementById(`player-slots-${z}`);
            const oSlots = document.getElementById(`opp-slots-${z}`);
            pSlots.innerHTML = ''; oSlots.innerHTML = '';
            
            me.zones[z].forEach(cObj => {
                if (cObj.id === "slot_filler") {
                    const filler = document.createElement('div'); filler.className = "mini-card filler"; pSlots.appendChild(filler);
                } else {
                    pSlots.appendChild(renderMiniCard(CARDS.find(x => x.id == cObj.id), cObj.power));
                }
            });
            opp.zones[z].forEach(cObj => {
                if (cObj.id === "slot_filler") {
                    const filler = document.createElement('div'); filler.className = "mini-card filler"; oSlots.appendChild(filler);
                } else {
                    oSlots.appendChild(renderMiniCard(CARDS.find(x => x.id == cObj.id), cObj.power));
                }
            });

            const zoneEl = document.getElementById(`zone-${z}`);
            if (!me.move) {
                zoneEl.onclick = () => {
                    const selected = document.querySelector('.card.selected-for-move');
                    if (selected) {
                        const cid = selected.dataset.id;
                        const card = CARDS.find(x => x.id == cid);
                        if (battleState.blockedZones && battleState.blockedZones.includes(z)) {
                            showToast("Zona BLOCCATA per questo turno!", "danger");
                            return;
                        }
                        let slotsToOccupied = 1;
                        if (card.ability.type === "ongoing" && card.ability.effect === "questa carta occupa 2 slot") slotsToOccupied = 2;

                        if (me.zones[z].length + currentMoves.filter(m => m.zone === z).length + slotsToOccupied <= 4) {
                            currentMoves.push({ id: cid, zone: z });
                            currentEnergyLeft -= card.cost;
                            updateBattleUI(myRole);
                        } else { showToast("Zona piena!", "danger"); }
                    }
                };
            }
        });

        const hand = document.getElementById('player-hand');
        hand.innerHTML = '';
        const playedIds = [...me.zones.sinistra, ...me.zones.centro, ...me.zones.destra].map(c => c.id).concat(currentMoves.map(m => m.id));
        
        if (currentMoves.length === 0) currentEnergyLeft = me.energy;

        // Calculate cost discount from passives on board
        let costModifier = 0;
        zones.forEach(z => {
            me.zones[z].forEach(cObj => {
                const c = CARDS.find(x => x.id == cObj.id);
                if (c && c.ability && c.ability.type === "passive" && c.ability.effect === "riduce costo della prossima carta di 1") costModifier++;
            });
        });

        me.team.forEach(cid => {
            if (playedIds.includes(cid.toString())) return;
            const card = CARDS.find(x => x.id == cid);
            const effectiveCost = Math.max(1, card.cost - costModifier);
            const el = renderCard(card);
            el.dataset.id = cid;
            
            if (effectiveCost > currentEnergyLeft || me.move) {
                el.style.opacity = "0.5";
                el.style.filter = "grayscale(1)";
            } else {
                el.onclick = () => {
                    document.querySelectorAll('.card').forEach(c => c.classList.remove('selected-for-move'));
                    el.classList.add('selected-for-move');
                };
            }
            hand.appendChild(el);
        });

        const endBtn = document.getElementById('end-turn-btn');
        endBtn.disabled = !!me.move;
        endBtn.onclick = () => {
            db.ref(`games/${currentGameSession}/${myRole}`).update({ move: currentMoves.length > 0 ? currentMoves : -1 });
            currentMoves = [];
        };

        document.getElementById('cancel-moves-btn').onclick = () => {
            currentMoves = [];
            currentEnergyLeft = me.energy;
            updateBattleUI(myRole);
        };

        if (battleState.status === "finished") {
            document.getElementById('rematch-overlay').classList.remove('hidden');
            document.getElementById('rematch-title').textContent = battleState.lastLog;
            const sessionKey = "rewarded_" + currentGameSession;
            if (!localStorage.getItem(sessionKey)) {
                let myZones = 0;
                zones.forEach(z => { if(calculateZonePower(battleState, myRole, z) > calculateZonePower(battleState, myRole==='p1'?'p2':'p1', z)) myZones++; });
                if (myZones >= 2) rewardWinner();
                localStorage.setItem(sessionKey, "true");
            }
            document.getElementById('rematch-accept-btn').onclick = () => db.ref(`games/${currentGameSession}/${myRole}`).update({ rematch: true });
            document.getElementById('rematch-decline-btn').onclick = () => location.reload();
            if (battleState.p1.rematch && battleState.p2.rematch && myRole === 'p1') {
                db.ref(`games/${currentGameSession}`).update({
                    p1: { uid: battleState.p1.uid, email: battleState.p1.email, team: battleState.p1.team, energy: 1, zones: { sinistra: [], centro: [], destra: [] }, move: null },
                    p2: { uid: battleState.p2.uid, email: battleState.p2.email, team: battleState.p2.team, energy: 1, zones: { sinistra: [], centro: [], destra: [] }, move: null },
                    status: "playing", turn: 1, lastLog: "Rivincita!", timestamp: Date.now()
                });
            }
        }
    }


    async function resolveTurn(gameId) {
        const gameRef = db.ref("games/" + gameId);
        const g = (await gameRef.once("value")).val();
        const zones = ['sinistra', 'centro', 'destra'];
        
        if (!g.blockedZones) g.blockedZones = [];
        g.blockedZones = []; 

        const applyOnPlay = (p, roleStr) => {
            if (Array.isArray(p.move)) {
                p.move.forEach(m => {
                    const card = CARDS.find(x => x.id == m.id);
                    let pwr = card.power;
                    let occupiedSlots = 1;
                    if (card.ability && card.ability.type === "ongoing" && card.ability.effect === "questa carta occupa 2 slot") occupiedSlots = 2;
                    
                    if (card.ability && card.ability.type === "on_play") {
                        const effect = card.ability.effect;
                        if (effect === "+2 potere se giocata a SINISTRA o DESTRA" && (m.zone === 'sinistra' || m.zone === 'destra')) pwr += 2;
                        if (effect === "+1 per ogni alleato già nella zona") pwr += p.zones[m.zone].length;
                        if (effect === "se sei in svantaggio qui → +3") {
                            if (calculateZonePower(g, roleStr, m.zone) < calculateZonePower(g, roleStr==='p1'?'p2':'p1', m.zone)) pwr += 3;
                        }
                        if (effect === "riduci potere nemico nella zona di -1") {
                            const opp = roleStr === 'p1' ? g.p2 : g.p1;
                            opp.zones[m.zone].forEach(o => {
                                if (CARDS.find(x => x.id == o.id).ability.effect !== "questa carta non può essere ridotta") o.power -= 1;
                            });
                        }
                        if (effect === "gioca una copia con potere 1 in un’altra zona") {
                            const otherZones = zones.filter(z => z !== m.zone && p.zones[z].length < 4);
                            if (otherZones.length > 0) {
                                const targetZ = otherZones[Math.floor(Math.random()*otherZones.length)];
                                p.zones[targetZ].push({ id: m.id, power: 1 });
                            }
                        }
                    }
                    p.zones[m.zone].push({ id: m.id, power: pwr });
                    if (occupiedSlots === 2) p.zones[m.zone].push({ id: "slot_filler", power: 0 });
                });
            }
        };

        applyOnPlay(g.p1, 'p1'); 
        applyOnPlay(g.p2, 'p2');

        zones.forEach(z => {
            [g.p1, g.p2].forEach(p => {
                const roleStr = p === g.p1 ? 'p1' : 'p2';
                const opp = roleStr === 'p1' ? g.p2 : g.p1;
                p.zones[z].forEach((cObj, idx) => {
                    if (cObj.id === "slot_filler") return;
                    const card = CARDS.find(x => x.id == cObj.id);
                    if (card && card.ability && card.ability.type === "on_reveal") {
                        const effect = card.ability.effect;
                        if (effect === "+2 per ogni carta avversaria qui") cObj.power += (opp.zones[z].length * 2);
                        if (effect === "sposta una carta avversaria in un’altra zona") {
                            const targets = opp.zones[z].filter(o => o.id !== "slot_filler" && CARDS.find(x => x.id == o.id).ability.effect !== "non può essere spostata");
                            if (targets.length > 0) {
                                const targetCard = targets[Math.floor(Math.random() * targets.length)];
                                const otherZones = zones.filter(oz => oz !== z && opp.zones[oz].length < 4);
                                if (otherZones.length > 0) {
                                    const oz = otherZones[Math.floor(Math.random()*otherZones.length)];
                                    const tIdx = opp.zones[z].indexOf(targetCard);
                                    opp.zones[oz].push(opp.zones[z].splice(tIdx, 1)[0]);
                                }
                            }
                        }
                        if (effect === "copia il potere più alto nella zona") {
                            let maxP = 0;
                            [...p.zones[z], ...opp.zones[z]].forEach(o => { if(o.power > maxP) maxP = o.power; });
                            cObj.power = maxP;
                        }
                        if (effect === "scambia posizione con una tua carta in un’altra zona") {
                            const otherCards = [];
                            zones.filter(oz => oz !== z).forEach(oz => p.zones[oz].forEach((oc, oidx) => { if(oc.id !== "slot_filler") otherCards.push({z: oz, idx: oidx}); }));
                            if (otherCards.length > 0) {
                                const target = otherCards[Math.floor(Math.random()*otherCards.length)];
                                const temp = {...cObj};
                                p.zones[z][idx] = p.zones[target.z][target.idx];
                                p.zones[target.z][target.idx] = temp;
                            }
                        }
                        if (effect === "distruggi la carta con potere più basso (anche tua)") {
                            let minP = 999;
                            [...p.zones[z], ...opp.zones[z]].forEach(o => { if(o.id !== "slot_filler" && o.power < minP) minP = o.power; });
                            const candidates = [];
                            p.zones[z].forEach((o, i) => { if(o.id !== "slot_filler" && o.power === minP) candidates.push({p: p, z: z, i: i}); });
                            opp.zones[z].forEach((o, i) => { if(o.id !== "slot_filler" && o.power === minP) candidates.push({p: opp, z: z, i: i}); });
                            if (candidates.length > 0) {
                                const victim = candidates[Math.floor(Math.random()*candidates.length)];
                                victim.p.zones[victim.z].splice(victim.i, 1);
                            }
                        }
                        if (effect === "blocca questa zona nel prossimo turno") g.blockedZones.push(z);
                    }
                });
            });
        });

        g.turn++;
        if (g.turn > 6) {
            g.status = "finished";
            let p1Zones = 0, p2Zones = 0;
            zones.forEach(z => {
                const p1P = calculateZonePower(g, 'p1', z);
                const p2P = calculateZonePower(g, 'p2', z);
                if (p1P > p2P) p1Zones++; else if (p2P > p1P) p2Zones++;
            });
            if (p1Zones > p2Zones) g.lastLog = "Vittoria per P1!";
            else if (p2Zones > p1Zones) g.lastLog = "Vittoria per P2!";
            else g.lastLog = "Pareggio epico!";
        } else {
            g.p1.energy = g.turn; g.p2.energy = g.turn;
            g.p1.move = null; g.p2.move = null;
            g.lastLog = `Turno ${g.turn} - Energia: ${g.turn}`;
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
                .filter(u => (u.trophies || 0) > 0)
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

    /**
     * IMPORTANTE PER IL PROPRIETARIO:
     * Al momento il sistema usa il Client ID di prova "sb" (Sandbox).
     * Per ricevere pagamenti reali sul tuo conto PayPal:
     * 1. Vai su https://developer.paypal.com/ e crea una "Live App".
     * 2. Copia il tuo "Client ID" reale.
     * 3. Nel file index.html, sostituisci "client-id=sb" con "client-id=IL_TUO_ID_REALE".
     * 
     * Dati per il setup Live (Daniele Cardinali):
     * Email PayPal: danielecardinali0@gmail.com
     * Telefono: 3314990991
     */
    function initPayPalButtons() {
        const packs = [
            { id: 1000, amount: '1.99', credits: 1000 },
            { id: 5000, amount: '7.99', credits: 5000 },
            { id: 15000, amount: '19.99', credits: 15000 },
            { id: 50000, amount: '49.99', credits: 50000 }
        ];

        packs.forEach(pack => {
            if (document.getElementById(`paypal-button-${pack.id}`)) {
                paypal.Buttons({
                    style: { layout: 'vertical', color: 'blue', shape: 'rect', label: 'pay', height: 40 },
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                description: `${pack.credits} Crediti per Calciatori TCG`,
                                amount: { currency_code: 'EUR', value: pack.amount }
                            }]
                        });
                    },
                    onApprove: (data, actions) => {
                        return actions.order.capture().then(details => {
                            users[currentUser].credits += pack.credits;
                            saveState();
                            updateUI();
                            showToast(`Acquisto completato! +${pack.credits} Crediti aggiunti.`, "success");
                        });
                    },
                    onError: (err) => {
                        console.error('PayPal Error:', err);
                        showToast("Errore nel pagamento. Riprova.", "danger");
                    }
                }).render(`#paypal-button-${pack.id}`);
            }
        });
    }

    loadState().then(() => {
        updateAccountList();
        updateUI();
        initPayPalButtons();
    }); 
}); 
 
function renderMercato() { 
    const grid = document.getElementById('mercato-grid'); grid.innerHTML = ''; 
    const MULTIPLIER = 3.0; // 300% come richiesto
    [...CARDS].sort((a,b) => a.id - b.id).forEach(c => { 
        const cost = Math.floor(c.value * MULTIPLIER);
        const div = document.createElement('div'); div.className = `card rarity-${c.rarity.toLowerCase()}`; 
        div.style.borderColor = c.color;

        const faceHtml = `
            <div class="card-face-container">
                <img src="faccie/${c.id}.png" class="player-face" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <svg class="face-placeholder" style="display:none;" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
            </div>
        `;

        div.innerHTML = `<div class="rarity" style="color:${c.color}">${c.rarity}</div>${faceHtml}<h4>${c.name}</h4><div class="value">Costo: ${cost}</div><button class="buy-btn" style="margin-top:10px">Compra</button>`; 
        div.querySelector('button').onclick = (e) => { 
            e.stopPropagation();
            if (users[currentUser].credits >= cost) { 
                users[currentUser].credits -= cost; 
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