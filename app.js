const CARDS = [
    // MYTHIC (5 base + 2 specials)
    { id: 1, name: "Ruslan Danchivsky (GOAT)", rarity: "Mythic", value: 10000, color: "#ef4444" },
    { id: 2, name: "Gioele Perroni", rarity: "Mythic", value: 9000, color: "#ef4444" },
    { id: 3, name: "Alessandro Sgattoni", rarity: "Mythic", value: 9000, color: "#ef4444" },
    { id: 4, name: "Marco P (ICON)", rarity: "Mythic", value: 12000, color: "#ef4444" },
    { id: 5, name: "Leo AZ (ICON)", rarity: "Mythic", value: 12000, color: "#ef4444" },
    { id: 6, name: "Lorenzo El mas grande (DUSAN)", rarity: "Mythic", value: 15000, color: "#ef4444" },
    { id: 7, name: "Riccoh Giuatozzi (Prime moments)", rarity: "Mythic", value: 14000, color: "#ef4444" },

    // LEGGENDARI (11 base + 2 specials)
    { id: 8, name: "Alessandro Pieralisi", rarity: "Legendary", value: 3000, color: "#f59e0b" },
    { id: 9, name: "Godsent Okihmane", rarity: "Legendary", value: 3000, color: "#f59e0b" },
    { id: 10, name: "Antoh Bellesi", rarity: "Legendary", value: 3000, color: "#f59e0b" },
    { id: 11, name: "Matte Cardi", rarity: "Legendary", value: 3000, color: "#f59e0b" },
    { id: 12, name: "Aura Jacket", rarity: "Legendary", value: 3000, color: "#f59e0b" },
    { id: 13, name: "Michele Bellesi (ICON)", rarity: "Legendary", value: 5000, color: "#f59e0b" },
    { id: 14, name: "Don Oscar", rarity: "Legendary", value: 3000, color: "#f59e0b" },
    { id: 15, name: "Amadou (portiere)", rarity: "Legendary", value: 3000, color: "#f59e0b" },
    { id: 16, name: "Ciuchino Sperico", rarity: "Legendary", value: 3000, color: "#f59e0b" },
    { id: 17, name: "Farell Ladjnou", rarity: "Legendary", value: 3000, color: "#f59e0b" },
    { id: 18, name: "Andrea Giuatozzi", rarity: "Legendary", value: 3000, color: "#f59e0b" },
    { id: 19, name: "Harry Pacchiani (al Francoforte)", rarity: "Legendary", value: 4500, color: "#f59e0b" },
    { id: 20, name: "Ruslan Danchivsky (Winter)", rarity: "Legendary", value: 4000, color: "#f59e0b" },

    // EPICI (11 base + 3 specials)
    { id: 21, name: "Tommaso Saltari", rarity: "Epic", value: 800, color: "#a855f7" },
    { id: 22, name: "Lorenzo El mas grande", rarity: "Epic", value: 800, color: "#a855f7" },
    { id: 23, name: "Antoh (il napoletano)", rarity: "Epic", value: 800, color: "#a855f7" },
    { id: 24, name: "Stewie", rarity: "Epic", value: 800, color: "#a855f7" },
    { id: 25, name: "Brownie Cardinali", rarity: "Epic", value: 800, color: "#a855f7" },
    { id: 26, name: "Leo Cardi", rarity: "Epic", value: 800, color: "#a855f7" },
    { id: 27, name: "Christian Forà", rarity: "Epic", value: 800, color: "#a855f7" },
    { id: 28, name: "Amadou (attaccante)", rarity: "Epic", value: 800, color: "#a855f7" },
    { id: 29, name: "Riccaz Official", rarity: "Epic", value: 800, color: "#a855f7" },
    { id: 30, name: "Simone Fadi", rarity: "Epic", value: 800, color: "#a855f7" },
    { id: 31, name: "Riccoh Giuatozzi", rarity: "Epic", value: 800, color: "#a855f7" },
    { id: 32, name: "Paolo Pacchiani🪚", rarity: "Epic", value: 1200, color: "#a855f7" },
    { id: 33, name: "Lorenzo (Special)", rarity: "Epic", value: 1000, color: "#a855f7" },
    { id: 34, name: "Antoh (Special)", rarity: "Epic", value: 1000, color: "#a855f7" },

    // RARI (9 base + 5 specials)
    { id: 35, name: "Simone Tomassini", rarity: "Rare", value: 200, color: "#3b82f6" },
    { id: 36, name: "Giovanni Piacentini", rarity: "Rare", value: 200, color: "#3b82f6" },
    { id: 37, name: "Marco B", rarity: "Rare", value: 200, color: "#3b82f6" },
    { id: 38, name: "Tonali Barbaresi", rarity: "Rare", value: 200, color: "#3b82f6" },
    { id: 39, name: "Amedeo Dezi", rarity: "Rare", value: 200, color: "#3b82f6" },
    { id: 40, name: "Valè Trasatti", rarity: "Rare", value: 200, color: "#3b82f6" },
    { id: 41, name: "Er giaigiax", rarity: "Rare", value: 200, color: "#3b82f6" },
    { id: 42, name: "Marcolino Giaguaroù", rarity: "Rare", value: 200, color: "#3b82f6" },
    { id: 43, name: "Harry Pacchiani", rarity: "Rare", value: 200, color: "#3b82f6" },
    { id: 44, name: "Marco B (Special)", rarity: "Rare", value: 350, color: "#3b82f6" },
    { id: 45, name: "Simone Tomassini (Special)", rarity: "Rare", value: 350, color: "#3b82f6" },
    { id: 46, name: "Tonali Barbaresi (Special)", rarity: "Rare", value: 350, color: "#3b82f6" },
    { id: 47, name: "Amedeo Dezi (Special)", rarity: "Rare", value: 350, color: "#3b82f6" },
    { id: 48, name: "El lecc (Special)", rarity: "Rare", value: 350, color: "#3b82f6" },

    // COMUNI (9 base + 1 special)
    { id: 49, name: "Rodolfo Dezi", rarity: "Common", value: 50, color: "#64748b" },
    { id: 50, name: "Marco Foggiano", rarity: "Common", value: 50, color: "#64748b" },
    { id: 51, name: "El lecc", rarity: "Common", value: 50, color: "#64748b" },
    { id: 52, name: "Bye", rarity: "Common", value: 50, color: "#64748b" },
    { id: 53, name: "Share", rarity: "Common", value: 50, color: "#64748b" },
    { id: 54, name: "Paolo Pacchiani", rarity: "Common", value: 50, color: "#64748b" },
    { id: 55, name: "Christian Pastori", rarity: "Common", value: 50, color: "#64748b" },
    { id: 56, name: "Don kriztof", rarity: "Common", value: 50, color: "#64748b" },
    { id: 57, name: "Rayan", rarity: "Common", value: 50, color: "#64748b" },
    { id: 58, name: "Rodolfo Dezi (Special)", rarity: "Common", value: 100, color: "#64748b" },

    // EXTRA per arrivare a 75+ (Icons, Variations, etc.)
    { id: 59, name: "Tommaso Saltari (ICON)", rarity: "Legendary", value: 3500, color: "#f59e0b" },
    { id: 60, name: "Simone Fadi (ICON)", rarity: "Legendary", value: 3500, color: "#f59e0b" },
    { id: 61, name: "Gioele Perroni (Winter)", rarity: "Mythic", value: 11000, color: "#ef4444" },
    { id: 62, name: "Alessandro Sgattoni (Winter)", rarity: "Mythic", value: 11000, color: "#ef4444" },
    { id: 63, name: "Michele Bellesi (Prime)", rarity: "Mythic", value: 13000, color: "#ef4444" },
    { id: 64, name: "Matte Cardi (ICON)", rarity: "Legendary", value: 3200, color: "#f59e0b" },
    { id: 65, name: "Andrea Giuatozzi (ICON)", rarity: "Legendary", value: 3200, color: "#f59e0b" },
    { id: 66, name: "Stewie (Golden)", rarity: "Epic", value: 1500, color: "#a855f7" },
    { id: 67, name: "Brownie (Elite)", rarity: "Epic", value: 1400, color: "#a855f7" },
    { id: 68, name: "Leo Cardi (Hero)", rarity: "Epic", value: 1600, color: "#a855f7" },
    { id: 69, name: "Riccaz (Star)", rarity: "Epic", value: 1300, color: "#a855f7" },
    { id: 70, name: "Giovanni (Clutch)", rarity: "Rare", value: 400, color: "#3b82f6" },
    { id: 71, name: "Valè (Shield)", rarity: "Rare", value: 380, color: "#3b82f6" },
    { id: 72, name: "Er giaigiax (Biker)", rarity: "Rare", value: 420, color: "#3b82f6" },
    { id: 73, name: "Marcolino (Speedy)", rarity: "Rare", value: 390, color: "#3b82f6" },
    { id: 74, name: "Marco Foggiano (Old School)", rarity: "Common", value: 120, color: "#64748b" },
    { id: 75, name: "Bye (Ghost)", rarity: "Common", value: 110, color: "#64748b" },
    { id: 76, name: "Share (Link)", rarity: "Common", value: 115, color: "#64748b" },
    { id: 77, name: "Christian Pastori (Young)", rarity: "Common", value: 105, color: "#64748b" },
    { id: 78, name: "Don kriztof (Saint)", rarity: "Common", value: 130, color: "#64748b" },
    { id: 79, name: "Rayan (Ace)", rarity: "Common", value: 125, color: "#64748b" },
    { id: 80, name: "Aura Jacket (Neon)", rarity: "Legendary", value: 3800, color: "#f59e0b" }
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
 
let users = { "Default": { credits: INITIAL_CREDITS, collection: {}, lastDailyBonus: 0 } }; 
let currentUser = "Default"; let showMissing = false; 
let selectedCardId = null; let requestedCardId = null;
 
async function loadState() { 
    const saved = localStorage.getItem('tcg_users'); 
    if (saved) users = JSON.parse(saved); 
    const last = localStorage.getItem('tcg_last_user'); 
    currentUser = (last && users[last]) ? last : "Default"; 
} 

async function saveState() { 
    localStorage.setItem('tcg_users', JSON.stringify(users)); 
    localStorage.setItem('tcg_last_user', currentUser); 
    if (auth && auth.currentUser && users[currentUser]) { 
        const data = {...users[currentUser]}; 
        data.email = auth.currentUser.email; 
        await db.ref("users/" + auth.currentUser.uid).set(data); 
        const safeEmail = auth.currentUser.email.replace(/\./g, ','); 
        await db.ref("emailToUid/" + safeEmail).set(auth.currentUser.uid); 
    } 
} 

async function migrateLocalToCloud(fUser) { 
    const snap = await db.ref("users/" + fUser.uid).once("value"); 
    if (!snap.exists()) { 
        if (users["Default"] && Object.keys(users["Default"].collection).length > 0) { 
            users[fUser.email] = JSON.parse(JSON.stringify(users["Default"])); 
        } else { 
            users[fUser.email] = { credits: INITIAL_CREDITS, collection: {}, lastDailyBonus: Date.now() }; 
        } 
        users[fUser.email].email = fUser.email; 
    } else { 
        users[fUser.email] = snap.val(); 
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
            users[currentUser] = { credits: INITIAL_CREDITS, collection: {}, lastDailyBonus: 0 };
        }
        const user = users[currentUser]; 
        const now = Date.now(); 
        if (now - (user.lastDailyBonus || 0) > 86400000) { 
            user.credits += 100; 
            user.lastDailyBonus = now; 
            showToast("Bonus giornaliero +100 Crediti!", "success"); 
            saveState(); 
        } 
        credEl.textContent = user.credits; 
        renderCollection(); 
        renderShop(); 
        renderMercato(); 
        renderTrade(); 
    } 
 
    function renderCard(card, qty = null, missing = false) { 
        const div = document.createElement('div'); 
        div.className = `card rarity-${card.rarity.toLowerCase()} ${missing?'missing':''} ${qty>1?'duplicate':''}`; 
        div.style.borderColor = card.color; 
        div.innerHTML = `<div class="rarity" style="color:${card.color}">${card.rarity}</div><h4>${card.name}</h4><div class="value">Valore: ${card.value}</div>`; 
        if (qty !== null) div.innerHTML += `<div class="quantity">x${qty}</div>`; 
        if (qty > 1) { 
            const btn = document.createElement('button'); btn.className = 'sell-btn'; btn.textContent = `Svincola (${Math.floor(card.value*0.2)})`; 
            btn.onclick = (e) => { e.stopPropagation(); users[currentUser].collection[card.id]--; users[currentUser].credits += Math.floor(card.value*0.2); showToast(`Carta venduta per ${Math.floor(card.value*0.2)} crediti!`); saveState(); updateUI(); }; 
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
            d.querySelector('button').onclick = () => { 
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
    async function validateTransfer() { 
        const email = friendEmail.value.trim().toLowerCase(); 
        if (!email.includes('@')) { 
            statusEl.textContent = ""; sendBtn.disabled = true; return; 
        } 
        if (auth?.currentUser && email === auth.currentUser.email) {
            statusEl.textContent = "Non puoi scambiare con te stesso";
            statusEl.style.color = "#ef4444";
            sendBtn.disabled = true;
            return;
        }

        statusEl.textContent = "Verifica destinatario..."; 
        try {
            const safe = email.replace(/\./g, ','); 
            const snap = await db.ref("emailToUid/" + safe).once("value"); 
            if (snap.exists()) { 
                statusEl.textContent = "Amico trovato! ✓"; statusEl.style.color = "#22c55e"; 
                if (selectedCardId && requestedCardId) { 
                    sendBtn.disabled = false; sendBtn.style.opacity = "1"; 
                } 
            } else { 
                statusEl.textContent = "Amico non registrato"; statusEl.style.color = "#f59e0b"; sendBtn.disabled = true; sendBtn.style.opacity = "0.5"; 
            } 
        } catch (e) {
            statusEl.textContent = "Errore connessione";
            sendBtn.disabled = true;
        }
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
    function listenForPendingTrades() {
        if (!auth?.currentUser) return;
        if (tradesListener) {
            db.ref("pendingTrades").orderByChild("toUid").equalTo(auth.currentUser.uid).off("value", tradesListener);
        }
        
        tradesListener = (snap) => {
            const list = document.getElementById('pending-trades-list');
            list.innerHTML = '';
            const trades = snap.val();
            
            if (!trades) {
                list.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 20px; background: rgba(255,255,255,0.02); border-radius: 12px;">Nessuna proposta in sospeso.</p>';
                return;
            }

            let pendingCount = 0;
            Object.entries(trades).forEach(([key, t]) => {
                if (t.status !== 'pending') return;
                pendingCount++;
                const offered = CARDS.find(c => c.id == t.offeredId);
                const requested = CARDS.find(c => c.id == t.requestedId);
                if (!offered || !requested) return;

                const div = document.createElement('div');
                div.className = 'trade-offer-item';
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
            });

            if (pendingCount === 0) {
                list.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 20px; background: rgba(255,255,255,0.02); border-radius: 12px;">Nessuna proposta in sospeso.</p>';
            }
        };

        db.ref("pendingTrades")
            .orderByChild("toUid")
            .equalTo(auth.currentUser.uid)
            .on("value", tradesListener);
    }

    async function handleTradeAction(tradeKey, action) {
        if (!auth?.currentUser) return;
        const tradeRef = db.ref("pendingTrades/" + tradeKey);
        const snap = await tradeRef.once("value");
        const t = snap.val();

        if (!t || t.status !== 'pending') return;

        if (action === 'decline') {
            await tradeRef.update({ status: 'declined' });
            showToast("Scambio rifiutato");
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
        auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .catch(err => {
                console.error("Login Error:", err);
                if (err.code === "auth/unauthorized-domain") {
                    showToast("Errore: Dominio non autorizzato in Firebase Console.", "danger");
                } else {
                    showToast("Errore di accesso: " + err.message, "danger");
                }
            });
    }; 
    document.getElementById('google-logout').onclick = () => {
        auth?.signOut().catch(err => showToast("Errore logout: " + err.message, "danger"));
    }; 
    auth?.onAuthStateChanged(async (u) => { 
        if (u) { 
            document.getElementById('google-login').classList.add('hidden'); 
            document.getElementById('user-logged-in').classList.remove('hidden'); 
            document.getElementById('user-info').textContent = u.displayName; 
            document.getElementById('p2p-trading').classList.remove('hidden');
            await migrateLocalToCloud(u);
            listenForPendingTrades();
            updateUI();
        } else {
            if (tradesListener && auth?.currentUser) {
                db.ref("pendingTrades").orderByChild("toUid").equalTo(auth.currentUser.uid).off("value", tradesListener);
                tradesListener = null;
            }
            document.getElementById('google-login').classList.remove('hidden'); 
            document.getElementById('user-logged-in').classList.add('hidden'); 
            document.getElementById('p2p-trading').classList.add('hidden');
            currentUser = "Default";
            updateUI();
        }
    }); 
     
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
    const sections = ['shop-view', 'collection-view', 'trade-view', 'mercato-view'];
    const showView = (id) => {
        sections.forEach(s => document.getElementById(s).classList.add('hidden'));
        document.getElementById(id).classList.remove('hidden');
    };

    document.getElementById('show-shop').onclick = () => showView('shop-view'); 
    document.getElementById('show-collection').onclick = () => showView('collection-view'); 
    document.getElementById('show-trade').onclick = () => showView('trade-view'); 
    document.getElementById('show-mercato').onclick = () => showView('mercato-view'); 
    document.getElementById('close-pack-btn').onclick = () => { document.getElementById('pack-modal').classList.add('hidden'); }; 
    zoomOverlay.onclick = () => zoomOverlay.classList.add('hidden'); 
    document.getElementById('toggle-missing').onchange = (e) => { showMissing = e.target.checked; renderCollection(); }; 
 
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
