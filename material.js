/* Material por unidad: guion de la mini-clase narrada y diapositivas.
   Usa UNIDADES, EXPL, VIS y VOCX. Lo comparten la app, el generador de audio y el exportador a PDF. */
(function(){
const W = typeof window !== "undefined" ? window : global;

/* Guion de la mini-clase de un tema: escenas con su voz (es = narración en español, en = inglés) */
W.guionClase = function(n, g){
  const u = W.UNIDADES.find(x => x.n === n), t = u.gram[g], e = (W.EXPL[n] || [])[g] || {};
  const esc = [];
  esc.push({tipo:"titulo", titulo:t.t, sub:"Unidad " + n + " · " + u.t, voz:[["es","Mini-clase de la unidad " + n + ". Hoy: " + t.t + "."],["es", e.para || t.idea]]});
  if (e.escena) esc.push({tipo:"escena", texto:e.escena, voz:[["es","Imagina esta situación. " + e.escena]]});
  const tabla = (e.tabla || t.forma).slice(0, 4);
  esc.push({tipo:"formula", formula:e.formula || "", tabla, vis:((W.VIS || {})[n] || [])[g] || null,
    voz:[["es","Mira cómo se forma. Te leo los ejemplos de la tabla."]].concat(tabla.map(f => ["en", f[1]]))});
  (e.ejemplos || []).slice(0, 3).forEach(x => esc.push({tipo:"ejemplo", en:x[0], es:x[1], voz:[["en", x[0]], ["es", x[1]]]}));
  if (e.espanol) esc.push({tipo:"espanol", texto:e.espanol, voz:[["es","Ojo con el español. " + e.espanol]]});
  (e.errores || []).slice(0, 2).forEach(x => esc.push({tipo:"error", mal:x[0], bien:x[1], porque:x[2], voz:[["es","Error típico. No digas:"], ["en", x[0]], ["es","Lo correcto es:"], ["en", x[1]], ["es", x[2]]]}));
  if (e.truco) esc.push({tipo:"truco", texto:e.truco, voz:[["es","El truco para recordarlo. " + e.truco], ["es","Ahora practica en la app. ¡Tú puedes!"]]});
  return esc;
};

/* Diapositivas de la unidad (datos; la app y el PDF las dibujan igual). Unas 22 por unidad. */
W.diaposUnidad = function(n){
  const u = W.UNIDADES.find(x => x.n === n), E = W.EXPL[n] || [], V = (W.VIS || {})[n] || [], pag = (W.PAGINAS || {})[n] || [];
  const pg = k => (pag.find(p => p[0] === k) || [])[1] || "";
  const d = [];
  d.push({tipo:"portada", n, titulo:u.t, tema:u.tema, pag:u.pag});
  d.push({tipo:"agenda", n, items:[[u.gram[0].t, "Gramática · pág. " + pg("Grammar focus 1")], [u.gram[1].t, "Gramática · pág. " + pg("Grammar focus 2")], [u.voc.length + " palabras y expresiones", "Vocabulario · pág. " + (pg("Word power") || u.pag)], [u.habla.length + " preguntas para conversar", "Speaking"]]});
  d.push({tipo:"warmup", n, pregunta:u.habla[0], tema:u.tema});
  u.gram.forEach((t, g) => {
    const e = E[g] || {}, ch = e.chequeo || [];
    d.push({tipo:"tema", n, g:g + 1, titulo:t.t, para:e.para || t.idea, escena:e.escena || "", pag:pg("Grammar focus " + (g + 1))});
    if (V[g]) d.push({tipo:"mira", n, titulo:t.t, vis:V[g]});
    d.push({tipo:"formula", n, titulo:t.t, formula:e.formula || "", tabla:(e.tabla || t.forma).slice(0, 6)});
    d.push({tipo:"ejemplos", n, titulo:t.t, ejemplos:(e.ejemplos || []).slice(0, 4)});
    d.push({tipo:"vs", n, titulo:t.t, espanol:e.espanol || t.ojo, errores:(e.errores || []).slice(0, 3)});
    d.push({tipo:"truco", n, titulo:t.t, truco:e.truco || t.ojo, ojo:t.ojo});
    if (ch.length) { d.push({tipo:"quiz", n, titulo:t.t, preguntas:ch, resp:false}); d.push({tipo:"quiz", n, titulo:t.t, preguntas:ch, resp:true}); }
  });
  const vx = w => (W.VOCX || {})[w[0]] || ["", ""];
  for (let i = 0; i < u.voc.length; i += 5) d.push({tipo:"vocab", n, parte:(i / 5) + 1, de:Math.ceil(u.voc.length / 5), voc:u.voc.slice(i, i + 5).map(w => [w[0], vx(w)[0], w[1], w[2], vx(w)[1]])});
  d.push({tipo:"habla", n, preguntas:u.habla, utiles:u.gram.map(t => [t.t, t.forma[0][1]]), palabras:u.voc.slice(0, 6).map(w => w[0])});
  d.push({tipo:"resumen", n, temas:u.gram.map((t, g) => [t.t, (E[g] || {}).formula || t.forma[0][1], (E[g] || {}).truco || t.ojo])});
  d.push({tipo:"cierre", n, titulo:u.t});
  return d;
};

/* Dibujo HTML de cada diapositiva (16:9, medidas en cqw para escalar a cualquier tamaño) */
const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const CLAVE = /\b(who|that|it|when|is being|are being|has been|have been|being|been|by|due to|because of|because|as a result of|through|to|rather|prefer|not|than|as|had|have|has|would|could|should|must|might|may|will|was|were|if|since|for|ago|until|once|get|keep|need|managed|able|supposed|expected|custom|acceptable|isn't|don't|didn't|can't|shouldn't|couldn't)\b/gi;
const res = t => esc(t).replace(CLAVE, '<em>$1</em>');
const img = k => '<img class="sd-mz" src="' + (W.IMGBASE || "img/") + k + '.webp" alt="">';
const logo = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 4h28a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H16l-8 7v-7H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" fill="#2F5BFF"/><path d="M13 22l7-10 7 10" fill="none" stroke="#FFD23F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const pie = (n, cl) => '<span class="sd-pie' + (cl ? ' cl' : '') + '">' + logo + 'saavedra english · Unit ' + n + '</span>';
const tag = (t, c) => '<span class="sd-tag' + (c ? ' t-' + c : '') + '">' + esc(t) + '</span>';
const COL = {a:"#2F5BFF", r:"#FF4F45", s:"#FFD23F", m:"#16C47F", l:"#8C7CFF", g:"#E3E5F0"};
const TX = {s:"#1A1C3A", g:"#1A1C3A"};
function visSd(v){
  if (v.tipo === "bloques") return '<div class="sv-bloques">' + v.b.map(x => '<span><b style="background:' + COL[x[2]] + ';color:' + (TX[x[2]] || "#fff") + '">' + esc(x[1]) + '</b><i>' + esc(x[0]) + '</i></span>').join("") + '</div>';
  if (v.tipo === "tiempo") return '<div class="sv-tiempo"><span class="eje"></span>' + v.ev.map(x => x.de != null ? '<span class="tb" style="left:' + x.de + '%;width:' + (x.a - x.de) + '%;background:' + COL[x.c] + '"><em' + (x.de > 45 ? ' class="der"' : '') + '>' + esc(x.t) + '</em></span>' : '<span class="tp' + (x.x > 70 ? ' der' : x.x < 22 ? ' izq' : '') + '" style="left:' + x.x + '%;background:' + COL[x.c] + '"><em>' + esc(x.t) + '</em></span>').join("") + (v.ahora ? '<span class="ahora">NOW →</span>' : '') + '</div>';
  if (v.tipo === "medidor") return '<div class="sv-med">' + v.f.map(x => '<div><span>' + esc(x[0]) + '</span><i><b style="width:' + x[1] + '%;background:' + COL[x[2]] + '"></b></i><em>' + x[1] + '%</em></div>').join("") + '</div>';
  if (v.tipo === "escalera") return '<div class="sv-esc">' + v.f.map((x, i) => '<div style="margin-left:' + (i * 2.4) + 'cqw"><b>' + (i + 1) + '</b><span>' + esc(x[0]) + '<i>' + esc(x[1]) + '</i></span></div>').join("") + '</div>';
  if (v.tipo === "pasiva") return '<div class="sv-pas"><i>ACTIVE</i><div>' + v.act.map(x => '<b style="background:' + COL[x[1]] + ';color:' + (TX[x[1]] || "#fff") + '">' + esc(x[0]) + '</b>').join("") + '</div><i>↓ PASSIVE</i><div>' + v.pas.map(x => '<b style="background:' + COL[x[1]] + ';color:' + (TX[x[1]] || "#fff") + '">' + esc(x[0]) + '</b>').join("") + '</div></div>';
  return "";
}
W.dibujarDiapo = function(s){
  const n = s.n;
  switch (s.tipo) {
  case "portada": return '<div class="sd sd-azul"><span class="sd-circ c1"></span><span class="sd-circ c2"></span><span class="sd-circ c3"></span>' + img("mz-hola") + tag("Interchange 3 · Unit " + n + " · pp. " + s.pag) + '<h1 class="sd-h1">' + esc(s.titulo) + '</h1><p class="sd-sub">' + esc(s.tema) + '</p>' + pie(n, 1) + '</div>';
  case "agenda": return '<div class="sd">' + tag("En esta unidad", "a") + '<h2 class="sd-h2">Lo que vas a aprender</h2><div class="sd-agenda">' + s.items.map((x, i) => '<div class="c' + i + '"><b>' + (i + 1) + '</b><span>' + esc(x[0]) + '<i>' + esc(x[1]) + '</i></span></div>').join("") + '</div>' + pie(n) + '</div>';
  case "warmup": return '<div class="sd sd-lila"><span class="sd-circ c1 cs"></span>' + img("mz-sorpresa") + tag("Warm-up · 2 minutos") + '<h2 class="sd-h2 grande">' + esc(s.pregunta) + '</h2><p class="sd-sub">Responde en inglés con lo que ya sabes. Al final de la unidad lo harás mucho mejor.</p>' + pie(n, 1) + '</div>';
  case "tema": return '<div class="sd sd-2col"><div class="col">' + tag("Gramática " + s.g + " · ¿Para qué sirve?", "l") + '<h2 class="sd-h2">' + esc(s.titulo) + '</h2><p class="sd-p">' + esc(s.para) + '</p>' + (s.pag ? '<span class="sd-libro">Libro · pág. ' + esc(s.pag) + '</span>' : '') + '</div><div class="col lado-lila">' + img("mz-estudia") + '<i class="sd-mini">Imagina</i><p class="sd-escena">' + esc(s.escena) + '</p></div>' + pie(n) + '</div>';
  case "mira": return '<div class="sd">' + tag("Míralo", "a") + '<h2 class="sd-h2">' + esc(s.vis.titulo || s.titulo) + '</h2><div class="sd-vis">' + visSd(s.vis) + '</div>' + (s.vis.nota ? '<p class="sd-nota">' + esc(s.vis.nota) + '</p>' : '') + pie(n) + '</div>';
  case "formula": return '<div class="sd sd-sol">' + tag("La fórmula") + '<h2 class="sd-h2">' + esc(s.titulo) + '</h2>' + (s.formula ? '<div class="sd-formula">' + esc(s.formula) + '</div>' : '') + '<div class="sd-tabla">' + s.tabla.map(f => '<div><i>' + esc(f[0]) + '</i><b>' + res(f[1]) + '</b></div>').join("") + '</div>' + pie(n) + '</div>';
  case "ejemplos": return '<div class="sd">' + tag("Ejemplos", "m") + '<h2 class="sd-h2">' + esc(s.titulo) + '</h2><div class="sd-ejs">' + s.ejemplos.map((x, i) => '<div><span class="nro">' + (i + 1) + '</span><span><b>' + res(x[0]) + '</b><i>' + esc(x[1]) + '</i></span></div>').join("") + '</div>' + pie(n) + '</div>';
  case "vs": return '<div class="sd">' + tag("Inglés vs. español", "r") + '<h2 class="sd-h2">Cuidado con estas trampas</h2><div class="sd-vs"><div class="nota-es"><i>Lo que cambia</i>' + esc(s.espanol) + '</div><div class="errs">' + s.errores.map(x => '<div><s>✗ ' + esc(x[0]) + '</s><b>✓ ' + esc(x[1]) + '</b><span>' + esc(x[2]) + '</span></div>').join("") + '</div></div>' + pie(n) + '</div>';
  case "truco": return '<div class="sd sd-menta">' + img("mz-pulgar") + tag("Truco para recordarlo") + '<h2 class="sd-h2">' + esc(s.titulo) + '</h2><p class="sd-truco">' + esc(s.truco) + '</p><div class="sd-ojo"><i>Ojo</i>' + esc(s.ojo) + '</div>' + pie(n) + '</div>';
  case "quiz": return '<div class="sd' + (s.resp ? '' : ' sd-tinta') + '">' + (s.resp ? img("mz-celebra") : img("mz-piensa")) + tag(s.resp ? "Respuestas" : "Mini quiz", s.resp ? "m" : "") + '<h2 class="sd-h2">' + (s.resp ? "¿Cómo te fue?" : "¿Lo entendiste?") + '</h2><div class="sd-quiz">' + s.preguntas.map((q, k) => '<div><b>' + (k + 1) + '. ' + esc(q.q) + '</b><span class="ops">' + q.o.map((o, j) => '<em class="' + (s.resp && j === q.a ? 'ok' : s.resp ? 'no' : '') + '">' + "ABC"[j] + ') ' + esc(o) + '</em>').join("") + '</span>' + (s.resp ? '<i>' + esc(q.y) + '</i>' : '') + '</div>').join("") + '</div>' + pie(n, !s.resp) + '</div>';
  case "vocab": return '<div class="sd">' + tag("Vocabulario · " + s.parte + " de " + s.de, "m") + '<h2 class="sd-h2">Palabras de la unidad</h2><div class="sd-voc">' + s.voc.map(w => '<div><b>' + esc(w[0]) + '</b><i>' + esc(w[1]) + '</i><span class="es">' + esc(w[2]) + '</span><span class="ej">' + esc(w[3]) + '</span>' + (w[4] ? '<span class="tip">' + esc(w[4]) + '</span>' : '') + '</div>').join("") + '</div>' + pie(n) + '</div>';
  case "habla": return '<div class="sd sd-lila sd-2col"><div class="col">' + tag("Speaking · Your turn") + '<h2 class="sd-h2">Let\'s talk!</h2><ol class="sd-preg">' + s.preguntas.map(q => '<li>' + esc(q) + '</li>').join("") + '</ol></div><div class="col lado-blanco"><i class="sd-mini">Useful language</i>' + s.utiles.map(x => '<p class="util"><b>' + esc(x[0]) + '</b>' + res(x[1]) + '</p>').join("") + '<p class="util"><b>Words</b>' + s.palabras.map(esc).join(" · ") + '</p></div>' + pie(n, 1) + '</div>';
  case "resumen": return '<div class="sd">' + tag("Resumen de la unidad", "a") + '<h2 class="sd-h2">Todo en una diapositiva</h2><div class="sd-res">' + s.temas.map((t, i) => '<div class="c' + i + '"><b>' + esc(t[0]) + '</b><span class="f">' + esc(t[1]) + '</span><span class="t">' + esc(t[2]) + '</span></div>').join("") + '</div>' + pie(n) + '</div>';
  default: return '<div class="sd sd-azul"><span class="sd-circ c1"></span><span class="sd-circ c2"></span>' + img("mz-campeon") + tag("Unit " + n + " · " + s.titulo) + '<h1 class="sd-h1">Great job!</h1><p class="sd-sub">Ahora practica en la app: Entiende, Vocabulario, Práctica, Reto y Speaking.</p>' + pie(n, 1) + '</div>';
  }
};

/* Estilos de las diapositivas (se insertan una vez) */
W.cssDiapos = `
.sd{position:relative;aspect-ratio:16/9;width:100%;container-type:inline-size;background:#FFFFFF;color:#1A1C3A;border-radius:2.2cqw;overflow:hidden;padding:4.4cqw 5.5cqw 6.4cqw;display:flex;flex-direction:column;gap:1.4cqw;font-family:Figtree,system-ui,sans-serif;box-sizing:border-box}
.sd *{box-sizing:border-box}
.sd em{font-style:normal;color:#2F5BFF;font-weight:800}
.sd-azul{background:#2F5BFF;color:#fff}.sd-lila{background:#8C7CFF;color:#fff}.sd-sol{background:#FFD23F}.sd-menta{background:#E3F8EF}.sd-tinta{background:#1A1C3A;color:#fff}
.sd-azul em,.sd-lila em,.sd-tinta em{color:#FFD23F}
.sd-tag{align-self:flex-start;font:800 1.35cqw/1 Figtree,sans-serif;letter-spacing:.06em;text-transform:uppercase;background:rgba(255,255,255,.95);color:#1A1C3A;border-radius:99px;padding:.9cqw 1.5cqw;position:relative;z-index:1}
.t-a{background:#EAF0FF;color:#2F5BFF}.t-m{background:#E3F8EF;color:#0E9C63}.t-r{background:#FFECEB;color:#D9342B}.t-l{background:#EFEDFF;color:#6A58E8}
.sd-h1{font:800 7.6cqw/1 "Bricolage Grotesque",sans-serif;letter-spacing:-.03em;margin:auto 0 0;max-width:68%;position:relative;z-index:1}
.sd-h2{font:800 3.8cqw/1.05 "Bricolage Grotesque",sans-serif;letter-spacing:-.02em;margin:0;max-width:78%;position:relative;z-index:1}
.sd-h2.grande{font-size:4.6cqw;line-height:1.15;margin:auto 0;max-width:72%}
.sd-sub{font:600 2.2cqw/1.35 Figtree,sans-serif;margin:0;opacity:.92;max-width:70%;position:relative;z-index:1}
.sd-p{font:600 2.1cqw/1.5 Figtree,sans-serif;margin:0}
.sd-mz{position:absolute;right:7cqw;top:52%;transform:translateY(-50%);width:20cqw;height:20cqw;object-fit:contain;z-index:1}
.sd-tinta .sd-mz,.sd-menta .sd-mz,.sd .sd-mz{filter:drop-shadow(0 .6cqw 1cqw rgba(0,0,0,.15))}
.sd-circ{position:absolute;border-radius:50%;background:#FFD23F}.sd-circ.c1{width:30cqw;height:30cqw;right:-8cqw;top:-10cqw}.sd-circ.c2{width:8cqw;height:8cqw;right:30cqw;top:8cqw;background:#8C7CFF}.sd-circ.c3{width:5cqw;height:5cqw;right:6cqw;bottom:6cqw;background:#16C47F}.sd-circ.cs{background:rgba(255,255,255,.18)}
.sd-pie{position:absolute;left:5.5cqw;bottom:2.4cqw;display:flex;align-items:center;gap:.8cqw;font:800 1.3cqw/1 "Bricolage Grotesque",sans-serif;color:#62668A;z-index:1}
.sd-pie.cl{color:rgba(255,255,255,.9)}.sd-pie svg{width:2.1cqw;height:2.1cqw}
.sd-agenda{display:grid;grid-template-columns:1fr 1fr;gap:1.6cqw;margin-top:auto}
.sd-agenda div{display:flex;gap:1.4cqw;align-items:center;border-radius:1.8cqw;padding:1.8cqw;background:#F6F7FB}
.sd-agenda b{width:4.6cqw;height:4.6cqw;border-radius:1.3cqw;display:grid;place-items:center;font:800 2.3cqw/1 "Bricolage Grotesque",sans-serif;color:#fff;flex:none}
.sd-agenda .c0 b{background:#2F5BFF}.sd-agenda .c1 b{background:#8C7CFF}.sd-agenda .c2 b{background:#16C47F}.sd-agenda .c3 b{background:#FFD23F;color:#1A1C3A}
.sd-agenda span{font:800 1.9cqw/1.25 Figtree,sans-serif}.sd-agenda i{display:block;font:700 1.25cqw/1.3 Figtree,sans-serif;font-style:normal;color:#62668A;margin-top:.4cqw}
.sd-2col{display:grid;grid-template-columns:1.25fr 1fr;gap:3cqw;align-items:stretch}
.sd-2col .col{display:flex;flex-direction:column;gap:1.4cqw;min-width:0;position:relative}
.lado-lila{background:#8C7CFF;color:#fff;border-radius:2cqw;padding:2.4cqw;justify-content:flex-end;height:100%}
.sd-2col{padding-bottom:7cqw}
.lado-lila .sd-mz{position:static;transform:none;width:13cqw;height:13cqw;margin-bottom:auto}
.lado-blanco{background:#fff;color:#1A1C3A;border-radius:2cqw;padding:2.2cqw;gap:1cqw!important}
.sd-mini{display:block;font:800 1.2cqw/1 Figtree,sans-serif;font-style:normal;text-transform:uppercase;letter-spacing:.08em;opacity:.8}
.sd-escena{font:700 2.1cqw/1.45 Figtree,sans-serif;margin:0}
.sd-libro{align-self:flex-start;margin-top:auto;font:800 1.4cqw/1 Figtree,sans-serif;background:#EAF0FF;color:#2F5BFF;border-radius:99px;padding:.9cqw 1.4cqw}
.sd-vis{margin:auto 0;background:#F6F7FB;border-radius:2cqw;padding:2.4cqw}
.sd-nota{margin:0;font:700 1.9cqw/1.35 Figtree,sans-serif;color:#62668A}
.sv-bloques{display:flex;flex-wrap:wrap;gap:1.4cqw;align-items:flex-start;justify-content:center}
.sv-bloques span{display:grid;gap:.6cqw;justify-items:center}
.sv-bloques b{border-radius:1.4cqw;padding:1.6cqw 2cqw;font:800 3cqw/1.2 Figtree,sans-serif;box-shadow:0 .5cqw 0 rgba(0,0,0,.12)}
.sv-bloques i{font:500 1.2cqw/1 "DM Mono",monospace;font-style:normal;text-transform:uppercase;letter-spacing:.06em;color:#62668A}
.sv-tiempo{position:relative;height:17cqw;margin:0 2cqw}
.sv-tiempo .eje{position:absolute;left:0;right:0;top:8cqw;height:.5cqw;background:#C9CCDD;border-radius:1cqw}
.sv-tiempo .tb{position:absolute;top:7.2cqw;height:2.1cqw;border-radius:99px}
.sv-tiempo .tb em{position:absolute;bottom:2.8cqw;left:0;font:800 1.7cqw/1.2 Figtree,sans-serif;color:#1A1C3A;width:max-content;max-width:40cqw}
.sv-tiempo .tb em.der{left:auto;right:0;text-align:right}
.sv-tiempo .tp{position:absolute;top:6.7cqw;width:3.2cqw;height:3.2cqw;margin-left:-1.6cqw;border-radius:50%;border:.5cqw solid #fff;box-shadow:0 0 0 .3cqw #C9CCDD}
.sv-tiempo .tp em{position:absolute;top:4.2cqw;left:50%;transform:translateX(-50%);font:800 1.7cqw/1.2 Figtree,sans-serif;color:#1A1C3A;width:max-content;max-width:24cqw;text-align:center}
.sv-tiempo .tp.der em{left:auto;right:-1cqw;transform:none;text-align:right}.sv-tiempo .tp.izq em{left:-1cqw;transform:none;text-align:left}
.sv-tiempo .ahora{position:absolute;right:0;top:.4cqw;font:500 1.2cqw/1 "DM Mono",monospace;color:#62668A}
.sv-med{display:grid;gap:1.4cqw}
.sv-med div{display:grid;grid-template-columns:1fr 26cqw 5cqw;gap:1.4cqw;align-items:center}
.sv-med span{font:700 2cqw/1.25 Figtree,sans-serif}.sv-med i{height:2cqw;background:#fff;border-radius:99px;overflow:hidden}.sv-med i b{display:block;height:100%;border-radius:99px}.sv-med em{font:500 1.6cqw/1 "DM Mono",monospace;color:#62668A}
.sv-esc{display:grid;gap:1cqw}
.sv-esc div{display:flex;gap:1.2cqw;align-items:center;background:#fff;border-radius:1.4cqw;padding:1.2cqw 1.6cqw;border-left:.8cqw solid #8C7CFF}
.sv-esc b{width:3.4cqw;height:3.4cqw;border-radius:1cqw;background:#8C7CFF;color:#fff;display:grid;place-items:center;font:800 1.7cqw/1 "Bricolage Grotesque",sans-serif;flex:none}
.sv-esc span{font:700 1.9cqw/1.3 Figtree,sans-serif}.sv-esc span i{display:block;font:800 1.2cqw/1.2 Figtree,sans-serif;font-style:normal;text-transform:uppercase;color:#6A58E8}
.sv-pas{display:grid;gap:1.2cqw}.sv-pas>i{font:500 1.3cqw/1 "DM Mono",monospace;font-style:normal;color:#62668A}
.sv-pas div{display:flex;flex-wrap:wrap;gap:1cqw}.sv-pas b{border-radius:1.2cqw;padding:1.3cqw 1.8cqw;font:800 2.6cqw/1.2 Figtree,sans-serif}
.sd-formula{background:#1A1C3A;color:#FFD23F;border-radius:1.6cqw;padding:1.4cqw 2cqw;font:800 1.8cqw/1.45 Figtree,sans-serif}
.sd-tabla{display:grid;grid-template-columns:1fr 1fr;gap:1cqw;margin-top:auto}
.sd-tabla div{background:rgba(255,255,255,.82);border-radius:1.3cqw;padding:1.2cqw 1.5cqw;display:grid;gap:.4cqw}
.sd-tabla i{font:800 1.1cqw/1 Figtree,sans-serif;font-style:normal;text-transform:uppercase;letter-spacing:.06em;color:#62668A}
.sd-tabla b{font:700 1.9cqw/1.3 Figtree,sans-serif}
.sd-ejs{display:grid;gap:1.2cqw;margin-top:auto}
.sd-ejs div{display:flex;gap:1.6cqw;align-items:center;background:#F6F7FB;border-radius:1.4cqw;padding:1.3cqw 1.8cqw}
.sd-ejs .nro{width:3.6cqw;height:3.6cqw;border-radius:50%;background:#16C47F;color:#fff;display:grid;place-items:center;font:800 1.8cqw/1 "Bricolage Grotesque",sans-serif;flex:none}
.sd-ejs b{display:block;font:800 2.2cqw/1.3 Figtree,sans-serif}.sd-ejs i{display:block;font:600 1.6cqw/1.3 Figtree,sans-serif;font-style:normal;color:#0E9C63;margin-top:.3cqw}
.sd-vs{display:grid;grid-template-columns:1fr 1.25fr;gap:2cqw;margin-top:auto}
.nota-es{background:#FFF6D6;border-radius:1.8cqw;padding:2cqw;font:700 1.8cqw/1.5 Figtree,sans-serif}
.nota-es i,.sd-ojo i{display:block;font:800 1.2cqw/1 Figtree,sans-serif;font-style:normal;text-transform:uppercase;letter-spacing:.08em;color:#62668A;margin-bottom:.8cqw}
.errs{display:grid;gap:1cqw}
.errs div{display:grid;gap:.3cqw;background:#F6F7FB;border-radius:1.3cqw;padding:1.1cqw 1.5cqw;border-left:.7cqw solid #FF4F45}
.errs s{color:#FF4F45;font:700 1.7cqw/1.3 Figtree,sans-serif;text-decoration-thickness:.2cqw}
.errs b{color:#0E9C63;font:800 1.8cqw/1.3 Figtree,sans-serif}.errs span{font:600 1.3cqw/1.3 Figtree,sans-serif;color:#62668A}
.sd-truco{font:800 3cqw/1.35 Figtree,sans-serif;margin:auto 0 0;max-width:68%;position:relative;z-index:1}
.sd-ojo{max-width:68%;background:#fff;border-radius:1.6cqw;padding:1.5cqw 2cqw;font:700 1.8cqw/1.4 Figtree,sans-serif;position:relative;z-index:1}
.sd-quiz{display:grid;gap:1.6cqw;margin-top:auto;max-width:76%;position:relative;z-index:1}
.sd-quiz b{display:block;font:800 2.2cqw/1.3 Figtree,sans-serif;margin-bottom:.8cqw}
.sd-quiz .ops{display:flex;flex-wrap:wrap;gap:1cqw}
.sd-quiz .ops em{font:700 1.8cqw/1.2 Figtree,sans-serif;color:inherit;background:rgba(255,255,255,.14);border:.2cqw solid rgba(255,255,255,.35);border-radius:1.2cqw;padding:1cqw 1.4cqw}
.sd:not(.sd-tinta) .sd-quiz .ops em{background:#F6F7FB;border-color:#E3E5F0}
.sd-quiz .ops em.ok{background:#16C47F!important;border-color:#16C47F!important;color:#fff}
.sd-quiz .ops em.no{opacity:.45}
.sd-quiz i{display:block;font:600 1.5cqw/1.3 Figtree,sans-serif;font-style:normal;color:#0E9C63;margin-top:.6cqw}
.sd-voc{display:grid;grid-template-columns:repeat(5,1fr);gap:1.1cqw;margin-top:auto}
.sd-voc div{background:#F6F7FB;border-radius:1.4cqw;padding:1.3cqw;border-bottom:.6cqw solid #16C47F;display:grid;gap:.5cqw;align-content:start}
.sd-voc b{font:800 2cqw/1.1 "Bricolage Grotesque",sans-serif}
.sd-voc i{font:500 1.15cqw/1.2 "DM Mono",monospace;font-style:normal;color:#62668A}
.sd-voc .es{font:800 1.45cqw/1.2 Figtree,sans-serif;color:#0E9C63}
.sd-voc .ej{font:600 1.25cqw/1.3 Figtree,sans-serif;font-style:italic}
.sd-voc .tip{font:600 1.1cqw/1.3 Figtree,sans-serif;color:#62668A;border-top:.15cqw dashed #C9CCDD;padding-top:.5cqw}
.sd-preg{margin:auto 0 0;padding-left:2.6cqw;display:grid;gap:1cqw;font:700 1.9cqw/1.35 Figtree,sans-serif}
.util{margin:0;font:600 1.5cqw/1.35 Figtree,sans-serif;background:#F6F7FB;border-radius:1cqw;padding:1cqw 1.2cqw}
.util b{display:block;font:800 1.15cqw/1.2 Figtree,sans-serif;text-transform:uppercase;letter-spacing:.04em;color:#6A58E8;margin-bottom:.3cqw}
.sd-res{display:grid;grid-template-columns:1fr 1fr;gap:2cqw;margin-top:auto}
.sd-res div{border-radius:2cqw;padding:2.2cqw;display:grid;gap:1cqw;align-content:start}
.sd-res .c0{background:#EAF0FF}.sd-res .c1{background:#EFEDFF}
.sd-res b{font:800 2.4cqw/1.15 "Bricolage Grotesque",sans-serif}
.sd-res .f{background:#1A1C3A;color:#FFD23F;border-radius:1.2cqw;padding:1.2cqw 1.4cqw;font:800 1.5cqw/1.45 Figtree,sans-serif}
.sd-res .t{font:700 1.6cqw/1.4 Figtree,sans-serif}
`;
})();
