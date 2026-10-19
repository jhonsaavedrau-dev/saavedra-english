/* Diagramas animados por tema. VIS[unidad] = [tema1, tema2].
   tipo "bloques": la oración se arma con piezas de color (b: [rol, texto, color]); a = azul, r = rojo, s = sol, m = menta, l = lila, g = gris
   tipo "tiempo": línea de tiempo (ev: {de, a, t, c} barra · {x, t, c, pum} punto; ahora: muestra "AHORA" a la derecha)
   tipo "medidor": barras de porcentaje (f: [texto, %, color])
   tipo "escalera": de menos a más (f: [texto, etiqueta])
   tipo "pasiva": activa → pasiva (act: [[texto, color]], pas: [[texto, color]]) */
window.VIS = {
1:[{tipo:"bloques",titulo:"Arma la frase",b:[["persona","I like people","g"],["who","who","a"],["verbo","are honest.","m"]],nota:"Si después viene un verbo, who/that es obligatorio."},
   {tipo:"bloques",titulo:"Arma la frase",b:[["sentimiento","I hate","r"],["IT","it","a"],["when","when","l"],["situación","people are late.","g"]],nota:"El it nunca se quita: es «eso»."}],
2:[{tipo:"bloques",titulo:"La actividad es el sujeto",b:[["actividad (-ing)","Working with kids","m"],["verbo singular","is","a"],["resto","rewarding.","g"]],nota:"Una actividad = una cosa → is."},
   {tipo:"medidor",titulo:"Comparando sueldos",f:[["A pilot earns MORE THAN…",90,"a"],["…a flight attendant",55,"l"],["A teacher earns AS MUCH AS…",60,"m"],["…a nurse",60,"m"]]}],
3:[{tipo:"escalera",titulo:"De directo a muy amable",f:[["Can I borrow your pen?","Con un amigo"],["Could you help me?","Neutral"],["Would you mind helping me?","Amable"],["Would it be all right if I used it?","Muy amable"],["I was wondering if I could…","Súper formal"]]},
   {tipo:"bloques",titulo:"Pasar un mensaje",b:[["pedido","Could you","g"],["tell + persona","tell Ana","a"],["not to / to","not to","r"],["verbo","be late?","m"]],nota:"Órdenes: to. Negativo: not to."}],
4:[{tipo:"tiempo",titulo:"La acción larga y el ¡PUM!",ev:[{de:10,a:85,t:"I was driving (acción larga)",c:"a"},{x:55,t:"my phone rang!",c:"r",pum:true}],ahora:true},
   {tipo:"tiempo",titulo:"Lo que pasó primero lleva HAD",ev:[{x:30,t:"1° the train had left",c:"l"},{x:65,t:"2° I arrived",c:"a"}],ahora:true}],
5:[{tipo:"bloques",titulo:"De lo general a lo concreto",b:[["idea general","One thing I'd miss","l"],["is","is","a"],["lo concreto","my mom's food.","m"]],nota:"También al revés: My mom's food is one thing I'd miss."},
   {tipo:"escalera",titulo:"¿Qué tan obligatorio es?",f:[["It's acceptable to…","Está bien"],["It's the custom to…","Es lo normal"],["You're supposed to…","Se espera"],["You're expected to…","Es casi obligatorio"]]}],
6:[{tipo:"bloques",titulo:"Dos formas de describir el daño",b:[["con IS","The screen is cracked.","a"],["=","=","g"],["con HAS","The screen has a crack.","m"]],nota:"IS + -ed · HAS + cosa."},
   {tipo:"bloques",titulo:"Gemelos: significan lo mismo",b:[["need + -ing","The walls need painting.","a"],["=","=","g"],["need to be + -ed","The walls need to be painted.","l"]],nota:"Y keep + -ing = pasa una y otra vez."}],
7:[{tipo:"pasiva",titulo:"De activa a pasiva",act:[["Factories","r"],["are polluting","g"],["the river.","a"]],pas:[["The river","a"],["is being polluted","l"],["by factories.","r"]],nota:"Lo importante (el río) pasa al comienzo."},
   {tipo:"bloques",titulo:"Problema → solución",b:[["problema","One way to reduce traffic","r"],["is","is","g"],["solución","to improve the buses.","m"]],nota:"Cuenta los to: siempre son dos."}],
8:[{tipo:"bloques",titulo:"Rather vs. prefer",b:[["rather (sin to)","I'd rather study","a"],["vs.","vs.","g"],["prefer + to","I'd prefer to study","l"]],nota:"Prefer es más largo y lleva to."},
   {tipo:"bloques",titulo:"El método: BY + -ing",b:[["meta","I improved my English","g"],["by","by","a"],["método (-ing)","watching series.","m"]],nota:"by responde a «¿cómo lo lograste?»."}],
9:[{tipo:"bloques",titulo:"Otra persona lo hace por ti",b:[["get/have","I get","a"],["cosa","my hair","s"],["participio","cut.","m"]],nota:"Orden fijo: get + cosa + participio."},
   {tipo:"escalera",titulo:"Tres grupos de sugerencias",f:[["Why don't you JOIN…? / Maybe you could JOIN…","+ verbo base"],["What about JOINING…? / Have you thought about JOINING…?","+ -ing"],["One option is TO JOIN… / It might be a good idea TO JOIN…","+ to + verbo"]]}],
10:[{tipo:"tiempo",titulo:"since, for, ago",ev:[{de:20,a:96,t:"since 2015 → for 10 years",c:"a"},{x:20,t:"2015",c:"l"},{x:60,t:"5 years ago",c:"r",pum:true}],ahora:true},
    {tipo:"tiempo",titulo:"Estaré … y habré …",ev:[{x:8,t:"AHORA",c:"g"},{de:40,a:70,t:"I'll be working (en progreso)",c:"a"},{x:88,t:"by 2030: I'll have finished",c:"m",pum:true}]}],
11:[{tipo:"tiempo",titulo:"Hasta que… / para cuando…",ev:[{de:5,a:55,t:"I had never cooked",c:"l"},{x:55,t:"until I moved out",c:"r",pum:true},{x:82,t:"after that: I learned",c:"m"}],ahora:true},
    {tipo:"bloques",titulo:"El pasado que no fue",b:[["IF + had","If I had studied,","l"],["would have","I would have","a"],["participio","passed.","m"]],nota:"HAD en la parte del if, WOULD HAVE en la otra."}],
12:[{tipo:"bloques",titulo:"Para que algo funcione",b:[["for + algo","For a café","s"],["to + verbo","to succeed,","a"],["resultado","it needs good coffee.","m"]],nota:"Para + verbo = to. Para que + algo = for … to."},
    {tipo:"bloques",titulo:"Frase o cosa",b:[["+ frase","because it's cheap","a"],["vs.","vs.","g"],["+ cosa","because of the prices","l"]],nota:"¿Viene un verbo? because. ¿Solo una cosa? because of."}],
13:[{tipo:"medidor",titulo:"¿Qué tan seguro estás?",f:[["He must have fallen asleep.",95,"m"],["He might / could have gone out.",50,"s"],["He couldn't have forgotten.",5,"r"]]},
    {tipo:"escalera",titulo:"Juzgar el pasado",f:[["You should have asked first.","la regla"],["You could have called me.","una idea mejor"],["I would have said no.","yo en tu lugar"]]}],
14:[{tipo:"pasiva",titulo:"El proceso: lo que se hace",act:[["The writers","r"],["write","g"],["the script.","a"]],pas:[["First, the script","a"],["is written","l"],["(by the writers).","r"]],nota:"En un proceso importa la cosa, no quién lo hace."},
    {tipo:"bloques",titulo:"Dato extra = comas + who",b:[["persona","My cousin,","g"],["who …,","who is a DJ,","a"],["resto","plays at weddings.","m"]],nota:"Si quitas lo de las comas, la frase sigue clara."}],
15:[{tipo:"medidor",titulo:"Fuerza de la opinión",f:[["Bikes should be allowed.",45,"m"],["People ought to be required to…",60,"s"],["A law must be passed.",85,"r"],["Something has got to be done!",100,"r"]]},
    {tipo:"bloques",titulo:"El tag copia el auxiliar",b:[["frase +","It's expensive,","g"],["tag −","isn't it?","a"]],nota:"Frase positiva → tag negativo, y al revés."}],
16:[{tipo:"tiempo",titulo:"Logros: con fecha o hasta hoy",ev:[{x:30,t:"last year: I managed to…",c:"l",pum:true},{de:45,a:96,t:"I've been able to… (hasta hoy)",c:"a"}],ahora:true},
    {tipo:"tiempo",titulo:"Mi meta: habré logrado…",ev:[{x:6,t:"AHORA",c:"g"},{de:6,a:80,t:"in the next 5 years",c:"l"},{x:80,t:"by 2030: I'll have bought a house",c:"m",pum:true}]}]
};
