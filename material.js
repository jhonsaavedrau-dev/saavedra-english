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

/* Diapositivas de la unidad (datos; la app y el PDF las dibujan igual) */
W.diaposUnidad = function(n){
  const u = W.UNIDADES.find(x => x.n === n), E = W.EXPL[n] || [], pag = (W.PAGINAS || {})[n] || [];
  const d = [];
  d.push({tipo:"portada", n, titulo:u.t, tema:u.tema, pag:u.pag});
  d.push({tipo:"contenido", n, items:[["Gramática 1", u.gram[0].t], ["Gramática 2", u.gram[1].t], ["Vocabulario", u.voc.length + " palabras y expresiones"], ["Speaking", u.habla.length + " preguntas para conversar"]], pag});
  u.gram.forEach((t, g) => {
    const e = E[g] || {};
    d.push({tipo:"tema", n, g:g + 1, titulo:t.t, para:e.para || t.idea, escena:e.escena || ""});
    d.push({tipo:"formula", n, titulo:t.t, formula:e.formula || "", tabla:(e.tabla || t.forma).slice(0, 6)});
    d.push({tipo:"ejemplos", n, titulo:t.t, ejemplos:(e.ejemplos || []).slice(0, 4)});
    d.push({tipo:"errores", n, titulo:t.t, espanol:e.espanol || "", errores:(e.errores || []).slice(0, 3), truco:e.truco || t.ojo});
  });
  d.push({tipo:"vocab", n, voc:u.voc.map(w => [w[0], ((W.VOCX || {})[w[0]] || [""])[0], w[1]])});
  d.push({tipo:"habla", n, preguntas:u.habla});
  d.push({tipo:"cierre", n, titulo:u.t});
  return d;
};

/* Dibuja una diapositiva 16:9 (HTML). Las medidas van en cqw para escalar con el tamaño. */
const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const logo = '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 4h28a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H16l-8 7v-7H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" fill="#2F5BFF"/><path d="M13 22l7-10 7 10" fill="none" stroke="#FFD23F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const pie = (n, oscuro) => '<span class="sd-pie' + (oscuro ? ' cl' : '') + '">' + logo + 'saavedra english · Unit ' + n + '</span>';
W.dibujarDiapo = function(s){
  if (s.tipo === "portada") return '<div class="sd sd-azul"><span class="sd-circ c1"></span><span class="sd-circ c2"></span><span class="sd-tag">Interchange 3 · Unit ' + s.n + ' · pp. ' + esc(s.pag) + '</span><h1 class="sd-h1">' + esc(s.titulo) + '</h1><p class="sd-sub">' + esc(s.tema) + '</p>' + pie(s.n, true) + '</div>';
  if (s.tipo === "contenido") return '<div class="sd"><span class="sd-tag sd-tag-a">En esta unidad</span><h2 class="sd-h2">Lo que vas a aprender</h2><div class="sd-items">' + s.items.map((x, i) => '<div class="sd-item"><b>' + (i + 1) + '</b><span><i>' + esc(x[0]) + '</i>' + esc(x[1]) + '</span></div>').join("") + '</div>' + pie(s.n) + '</div>';
  if (s.tipo === "tema") return '<div class="sd sd-lila"><span class="sd-tag">Gramática ' + s.g + ' · ¿Para qué sirve?</span><h2 class="sd-h2">' + esc(s.titulo) + '</h2><p class="sd-p">' + esc(s.para) + '</p>' + (s.escena ? '<div class="sd-caja"><i>Imagina</i>' + esc(s.escena) + '</div>' : '') + pie(s.n, true) + '</div>';
  if (s.tipo === "formula") return '<div class="sd sd-sol"><span class="sd-tag">La fórmula</span><h2 class="sd-h2">' + esc(s.titulo) + '</h2>' + (s.formula ? '<div class="sd-formula">' + esc(s.formula) + '</div>' : '') + '<div class="sd-tabla">' + s.tabla.map(f => '<div><i>' + esc(f[0]) + '</i><b>' + esc(f[1]) + '</b></div>').join("") + '</div>' + pie(s.n) + '</div>';
  if (s.tipo === "ejemplos") return '<div class="sd"><span class="sd-tag sd-tag-m">Ejemplos</span><h2 class="sd-h2">' + esc(s.titulo) + '</h2><div class="sd-ejs">' + s.ejemplos.map(x => '<div><b>' + esc(x[0]) + '</b><span>' + esc(x[1]) + '</span></div>').join("") + '</div>' + pie(s.n) + '</div>';
  if (s.tipo === "errores") return '<div class="sd"><span class="sd-tag sd-tag-r">Trampas y errores</span><h2 class="sd-h2">' + esc(s.titulo) + '</h2><div class="sd-errs">' + s.errores.map(x => '<div><s>' + esc(x[0]) + '</s><b>✓ ' + esc(x[1]) + '</b></div>').join("") + '</div><div class="sd-truco"><i>Truco</i>' + esc(s.truco) + '</div>' + pie(s.n) + '</div>';
  if (s.tipo === "vocab") return '<div class="sd"><span class="sd-tag sd-tag-m">Vocabulario</span><h2 class="sd-h2">Palabras de la unidad</h2><div class="sd-voc">' + s.voc.map(w => '<div><b>' + esc(w[0]) + '</b><i>' + esc(w[1]) + '</i><span>' + esc(w[2]) + '</span></div>').join("") + '</div>' + pie(s.n) + '</div>';
  if (s.tipo === "habla") return '<div class="sd sd-lila"><span class="sd-tag">Speaking · Your turn</span><h2 class="sd-h2">Let\'s talk!</h2><ol class="sd-preg">' + s.preguntas.map(q => '<li>' + esc(q) + '</li>').join("") + '</ol>' + pie(s.n, true) + '</div>';
  return '<div class="sd sd-azul"><span class="sd-circ c1"></span><span class="sd-tag">Unit ' + s.n + ' · ' + esc(s.titulo) + '</span><h1 class="sd-h1">Great job!</h1><p class="sd-sub">Ahora practica la unidad en la app: práctica, reto y speaking.</p>' + pie(s.n, true) + '</div>';
};

/* Estilos de las diapositivas (se insertan una vez) */
W.cssDiapos = `
.sd{position:relative;aspect-ratio:16/9;width:100%;container-type:inline-size;background:#FFFFFF;color:#1A1C3A;border-radius:2.2cqw;overflow:hidden;padding:5cqw 6cqw 7cqw;display:flex;flex-direction:column;gap:1.6cqw;font-family:Figtree,system-ui,sans-serif;box-sizing:border-box}
.sd *{box-sizing:border-box}
.sd-azul{background:#2F5BFF;color:#fff}.sd-lila{background:#8C7CFF;color:#fff}.sd-sol{background:#FFD23F;color:#1A1C3A}
.sd-tag{align-self:flex-start;font:800 1.5cqw/1 Figtree,sans-serif;letter-spacing:.06em;text-transform:uppercase;background:rgba(255,255,255,.95);color:#1A1C3A;border-radius:99px;padding:1cqw 1.6cqw}
.sd-tag-a{background:#EAF0FF;color:#2F5BFF}.sd-tag-m{background:#E3F8EF;color:#0E9C63}.sd-tag-r{background:#FFECEB;color:#D9342B}
.sd-h1{font:800 8cqw/1 "Bricolage Grotesque",sans-serif;letter-spacing:-.03em;margin:auto 0 0;max-width:80%}
.sd-h2{font:800 4.2cqw/1.05 "Bricolage Grotesque",sans-serif;letter-spacing:-.02em;margin:0}
.sd-sub{font:600 2.4cqw/1.3 Figtree,sans-serif;margin:0;opacity:.92}
.sd-p{font:600 2.3cqw/1.45 Figtree,sans-serif;margin:0;max-width:92%}
.sd-caja{background:rgba(255,255,255,.18);border-radius:1.6cqw;padding:1.6cqw 2cqw;font:700 2.1cqw/1.4 Figtree,sans-serif}
.sd-caja i,.sd-truco i{display:block;font:800 1.2cqw/1 Figtree,sans-serif;font-style:normal;text-transform:uppercase;letter-spacing:.08em;opacity:.8;margin-bottom:.6cqw}
.sd-circ{position:absolute;border-radius:50%;background:#FFD23F}.sd-circ.c1{width:30cqw;height:30cqw;right:-8cqw;top:-10cqw}.sd-circ.c2{width:8cqw;height:8cqw;right:24cqw;top:10cqw;background:#8C7CFF}
.sd-pie{position:absolute;left:6cqw;bottom:2.6cqw;display:flex;align-items:center;gap:.8cqw;font:800 1.4cqw/1 "Bricolage Grotesque",sans-serif;color:#62668A}
.sd-pie.cl{color:rgba(255,255,255,.9)}.sd-pie svg{width:2.2cqw;height:2.2cqw}
.sd-items{display:grid;grid-template-columns:1fr 1fr;gap:1.6cqw;margin-top:auto}
.sd-item{display:flex;gap:1.4cqw;align-items:center;background:#F6F7FB;border-radius:1.6cqw;padding:1.6cqw}
.sd-item b{width:4.4cqw;height:4.4cqw;border-radius:1.2cqw;background:#2F5BFF;color:#fff;display:grid;place-items:center;font:800 2.2cqw/1 "Bricolage Grotesque",sans-serif;flex:none}
.sd-item span{font:700 1.9cqw/1.25 Figtree,sans-serif}.sd-item i{display:block;font:800 1.2cqw/1.3 Figtree,sans-serif;font-style:normal;text-transform:uppercase;letter-spacing:.06em;color:#62668A}
.sd-formula{background:#1A1C3A;color:#FFD23F;border-radius:1.6cqw;padding:1.4cqw 2cqw;font:800 1.9cqw/1.4 Figtree,sans-serif}
.sd-tabla{display:grid;grid-template-columns:1fr 1fr;gap:1cqw}
.sd-tabla div{background:rgba(255,255,255,.75);border-radius:1.2cqw;padding:1.1cqw 1.4cqw;display:grid;gap:.4cqw}
.sd-tabla i{font:800 1.1cqw/1 Figtree,sans-serif;font-style:normal;text-transform:uppercase;letter-spacing:.06em;color:#62668A}
.sd-tabla b{font:700 1.9cqw/1.3 Figtree,sans-serif}
.sd-ejs{display:grid;gap:1.2cqw}
.sd-ejs div{border-left:.7cqw solid #16C47F;background:#F6F7FB;border-radius:1cqw;padding:1.2cqw 1.6cqw;display:grid;gap:.4cqw}
.sd-ejs b{font:800 2.3cqw/1.3 Figtree,sans-serif}.sd-ejs span{font:600 1.7cqw/1.3 Figtree,sans-serif;color:#0E9C63}
.sd-errs{display:grid;gap:1cqw}
.sd-errs div{display:grid;gap:.3cqw;background:#F6F7FB;border-radius:1cqw;padding:1cqw 1.6cqw}
.sd-errs s{color:#FF4F45;font:700 1.9cqw/1.3 Figtree,sans-serif;text-decoration-thickness:.25cqw}
.sd-errs b{color:#0E9C63;font:800 1.9cqw/1.3 Figtree,sans-serif}
.sd-truco{margin-top:auto;background:#E3F8EF;border-radius:1.4cqw;padding:1.3cqw 1.8cqw;font:800 1.9cqw/1.35 Figtree,sans-serif}
.sd-voc{display:grid;grid-template-columns:repeat(5,1fr);gap:1cqw;margin-top:auto}
.sd-voc div{background:#F6F7FB;border-radius:1.2cqw;padding:1.1cqw;border-bottom:.5cqw solid #16C47F;display:grid;gap:.3cqw;align-content:start}
.sd-voc b{font:800 1.7cqw/1.15 "Bricolage Grotesque",sans-serif}.sd-voc i{font:500 1.1cqw/1.2 "DM Mono",monospace;font-style:normal;color:#62668A}.sd-voc span{font:600 1.3cqw/1.25 Figtree,sans-serif}
.sd-preg{margin:auto 0 0;padding-left:3cqw;display:grid;gap:1.2cqw;font:700 2.3cqw/1.35 Figtree,sans-serif}
`;
})();
