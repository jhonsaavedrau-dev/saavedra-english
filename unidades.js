/* Banco de contenido: Interchange 5th ed., Level 3 (16 unidades).
   Explicaciones y ejercicios originales, escritos para Erick a partir de los temas del libro.
   ej.k: "e" = elige (o: opciones, a: índice correcto) · "c" = completa (a: respuestas válidas) · "o" = ordena (s: frase correcta) */
window.UNIDADES = [
{
 n:1, t:"That's my kind of friend!", tema:"Personalidad y relaciones", pag:"2–7",
 gram:[
  {t:"Relative pronouns: who / that",
   idea:"Sirven para unir dos ideas y describir a una persona. Si el pronombre es el SUJETO de la segunda parte, es obligatorio. Si es el OBJETO, lo puedes quitar.",
   forma:[["Sujeto (obligatorio)","I like people who are honest."],["Objeto (opcional)","She's a friend (that) I can trust."],["Truco","¿Después viene un verbo? → necesitas who/that."]],
   ojo:"No digas «I like people are honest». Falta who: I like people WHO are honest."},
  {t:"It clauses + when",
   idea:"Para decir qué te gusta o te molesta de una situación usamos «I love it / I hate it / It bothers me» + when. El «it» NO se puede quitar.",
   forma:[["Gusto","I love it when friends call me."],["Molestia","It bothers me when people are late."],["Negativo","I don't mind it when my roommate plays music."]],
   ojo:"«I hate when people lie» suena mal en el examen. Di: I hate IT when people lie."}
 ],
 voc:[["easygoing","relajado, tranquilo","My brother is very easygoing; nothing stresses him."],["considerate","considerado","A considerate friend remembers your birthday."],["moody","malhumorado, de humor cambiante","He's moody: happy one minute, angry the next."],["reliable","confiable","I need a reliable partner for this project."],["stingy","tacaño","Don't be stingy, share your snacks!"],["egotistical","egocéntrico","He only talks about himself. So egotistical!"],["unpredictable","impredecible","The weather here is unpredictable."],["have a lot in common","tener mucho en común","We have a lot in common: we both love football."]],
 habla:["Describe your best friend. What kind of person is he or she?","What kind of person would you like to have as a roommate?","What bothers you about other people? Use «It bothers me when…».","What do you love it when your friends do?"],
 ej:[
  {k:"e",q:"I want a friend ___ makes me laugh.",o:["who","—","which"],a:0,y:"Después viene un verbo (makes): who es obligatorio."},
  {k:"e",q:"He's the guy ___ I met at the party.",o:["who","they","what"],a:0,y:"Correcto (también podrías quitarlo: the guy I met…). «they» o «what» no unen la frase."},
  {k:"e",q:"I can't stand ___ when people chew with their mouths open.",o:["it","—","that"],a:0,y:"Con love/hate/can't stand + when necesitas «it»."},
  {k:"c",q:"I love ___ when my friends surprise me.",a:["it"],y:"I love IT when…"},
  {k:"c",q:"She's someone ___ is always on time. (who/that)",a:["who","that"],y:"Es sujeto de «is»: who o that."},
  {k:"o",s:"It bothers me when people are late",y:"Estructura: It + bothers me + when + frase."},
  {k:"o",s:"I like people who are easygoing",y:"people + who + verbo."},
  {k:"e",q:"Someone who never shares money is…",o:["stingy","reliable","considerate"],a:0,y:"stingy = tacaño."}
 ]
},
{
 n:2, t:"Working 9 to 5", tema:"Trabajos y habilidades", pag:"8–13",
 gram:[
  {t:"Gerund phrases (verbo + ing)",
   idea:"Un verbo con -ing puede funcionar como sustantivo: como sujeto de la frase o después de preposiciones (good at, interested in, tired of, think about). Como sujeto, el verbo va en SINGULAR.",
   forma:[["Sujeto","Working with children is rewarding."],["Después de preposición","I'm good at solving problems."],["Expresiones","I'm thinking about changing jobs."]],
   ojo:"«Taking care of kids ARE hard» ✗ → Taking care of kids IS hard (el sujeto es una actividad: singular)."},
  {t:"Comparisons",
   idea:"Comparamos trabajos con adjetivos (more/less + adjetivo, -er than), con sustantivos (more money than), con verbos (earns more than) y con as … as.",
   forma:[["Adjetivo","A pilot's job is more stressful than a teacher's."],["Sustantivo","Doctors need more training than nurses."],["Igualdad","Being a firefighter is as dangerous as being a police officer."]],
   ojo:"Generalizando: «Pilots earn more than flight attendants» (sin «the»)."}
 ],
 voc:[["flexible hours","horario flexible","I'd love a job with flexible hours."],["benefits","beneficios (salud, vacaciones)","The salary is low, but the benefits are good."],["salary","salario","She earns a good salary."],["stressful","estresante","Being a nurse can be stressful."],["rewarding","gratificante","Teaching is a rewarding job."],["deadline","fecha límite","I have a deadline tomorrow."],["skills","habilidades","You need good communication skills."],["summer job","trabajo de verano","My first summer job was at a café."]],
 habla:["What job would you be good at? Why? Use «I'd be good at…».","Compare two jobs you know: which is better paid? more stressful?","What would you get tired of doing every day?","Would you rather have a high salary or flexible hours?"],
 ej:[
  {k:"e",q:"Working long hours ___ exhausting.",o:["is","are","be"],a:0,y:"El sujeto es una actividad (working…): singular."},
  {k:"e",q:"I'm interested in ___ a new language.",o:["learning","learn","to learn"],a:0,y:"Después de preposición (in) va -ing."},
  {k:"c",q:"She's tired of ___ (wait) for the bus.",a:["waiting"],y:"tired of + -ing."},
  {k:"e",q:"A doctor earns ___ a teacher.",o:["more than","more that","most than"],a:0,y:"more … than."},
  {k:"c",q:"Being a chef is as stressful ___ being a nurse.",a:["as"],y:"as … as."},
  {k:"o",s:"I'm good at solving problems",y:"good at + -ing."},
  {k:"o",s:"Pilots earn more than flight attendants",y:"Comparación general sin «the»."},
  {k:"e",q:"A job that makes you feel good about helping is…",o:["rewarding","stressful","stingy"],a:0,y:"rewarding = gratificante."}
 ]
},
{
 n:3, t:"Lend a hand.", tema:"Favores y peticiones", pag:"16–21",
 gram:[
  {t:"Requests: modals, if clauses, gerunds",
   idea:"Para pedir favores de forma más formal o amable usamos frases largas. Cuanto más larga, más educada. Ojo: después de «Would you mind if…» y «Would it be all right if…» va el verbo en PASADO.",
   forma:[["Informal","Can I borrow your pen?"],["Amable","Would you mind lending me your car? (+ -ing)"],["Muy amable","I was wondering if I could use your laptop."],["Con if + pasado","Would it be all right if I used your phone?"]],
   ojo:"«Would you mind if I use…» ✗ → Would you mind if I USED… (pasado)."},
  {t:"Indirect requests",
   idea:"Pides a alguien que le pase un mensaje a otra persona. Preguntas de sí/no → ask + if. Órdenes → tell/ask + to. Negativo → not to.",
   forma:[["Pregunta sí/no","Can you ask Ana if she's free on Friday?"],["Pregunta con wh-","Could you ask him what time it starts?"],["Orden","Could you tell Leo to call me?"],["Negativo","Please tell her not to be late."]],
   ojo:"«Tell her to not be late» ✗ → tell her NOT TO be late."}
 ],
 voc:[["lend","prestar (a alguien)","Can you lend me $10?"],["borrow","pedir prestado","Can I borrow your charger?"],["do someone a favor","hacer un favor","Could you do me a favor?"],["return","devolver","I'll return your book tomorrow."],["owe","deber","I owe you one!"],["turn down a request","rechazar una petición","She turned down my request politely."],["decline","rechazar (con amabilidad)","I had to decline the invitation."],["give someone a ride","llevar a alguien en carro","Could you give me a ride home?"]],
 habla:["Ask me for a big favor in the most polite way you can.","What do you never lend to anyone? Why?","Have you ever had to turn down a request? What happened?","Give me a message for your best friend: «Could you tell him…»."],
 ej:[
  {k:"e",q:"Would you mind ___ me your notes?",o:["lending","to lend","lend"],a:0,y:"Would you mind + -ing."},
  {k:"e",q:"Would it be all right if I ___ your bike?",o:["borrowed","borrow","borrowing"],a:0,y:"Would it be all right if + pasado."},
  {k:"c",q:"I was wondering ___ I could stay at your place.",a:["if"],y:"I was wondering IF I could…"},
  {k:"e",q:"Can you ask Sara ___ she wants to come?",o:["if","to","that"],a:0,y:"Pregunta de sí/no → ask if."},
  {k:"c",q:"Could you tell Tom ___ ___ forget the keys? (2 palabras)",a:["not to"],y:"Negativo: not to + verbo."},
  {k:"o",s:"Could you tell her to call me",y:"tell + persona + to + verbo."},
  {k:"o",s:"Would you mind giving me a ride",y:"Would you mind + -ing."},
  {k:"e",q:"«Can I ___ your pen?» (pedir prestado)",o:["borrow","lend","owe"],a:0,y:"borrow = pedir prestado · lend = prestar."}
 ]
},
{
 n:4, t:"What happened?", tema:"Noticias e historias", pag:"22–27",
 gram:[
  {t:"Past continuous vs. simple past",
   idea:"El past continuous (was/were + -ing) es la acción larga de fondo. El simple past es la acción corta que la interrumpe. Los verbos de estado (want, know, like) casi nunca van en continuo.",
   forma:[["Fondo + interrupción","I was driving when my phone rang."],["While","While we were eating, the lights went out."],["Estado","I wanted to stop. (no: I was wanting)"]],
   ojo:"La acción corta va en pasado simple: «when the phone RANG», no «was ringing»."},
  {t:"Past perfect",
   idea:"Had + participio = una acción que pasó ANTES de otra en el pasado. Es «el pasado del pasado».",
   forma:[["Antes de otra","When I got to the station, the train had left."],["Con because","I couldn't pay because I had left my wallet at home."],["Negativo","I hadn't seen that movie before."]],
   ojo:"Primero pasó «had left», después «couldn't pay». Si las dos son seguidas, usa solo pasado simple."}
 ],
 voc:[["accident","accidente","There was a car accident downtown."],["robbery","robo","The robbery happened at night."],["earthquake","terremoto","The earthquake lasted 30 seconds."],["coincidence","coincidencia","What a coincidence! I was thinking about you."],["mystery","misterio","It's still a mystery."],["breaking news","noticia de última hora","Did you see the breaking news?"],["lucky break","golpe de suerte","Finding that job was a lucky break."],["suddenly","de repente","Suddenly, the lights went out."]],
 habla:["Tell me about something surprising that happened to you. What were you doing when it happened?","Describe a news story you read recently.","Tell me about a time you had forgotten something important.","Invent a story: «I was walking home when…»."],
 ej:[
  {k:"e",q:"I ___ a shower when the water went off.",o:["was taking","took","had taken"],a:0,y:"Acción larga de fondo → past continuous."},
  {k:"e",q:"While we were driving, a dog ___ into the street.",o:["ran","was running","runs"],a:0,y:"Acción corta que interrumpe → simple past."},
  {k:"e",q:"When we arrived, the movie ___ already ___.",o:["had / started","was / starting","has / started"],a:0,y:"Pasó antes de que llegáramos → past perfect."},
  {k:"c",q:"I couldn't call you because I ___ lost my phone.",a:["had"],y:"had + participio (lost)."},
  {k:"c",q:"They ___ (watch) TV when I called.",a:["were watching"],y:"Fondo: were + -ing."},
  {k:"o",s:"I was cooking when the phone rang",y:"Fondo (was cooking) + interrupción (rang)."},
  {k:"o",s:"She had left before I arrived",y:"had left = pasó primero."},
  {k:"e",q:"Two things happening by chance at the same time is a…",o:["coincidence","robbery","deadline"],a:0,y:"coincidence = coincidencia."}
 ]
},
{
 n:5, t:"Expanding your horizons", tema:"Culturas y vivir en el exterior", pag:"30–35",
 gram:[
  {t:"Noun phrases with relative clauses",
   idea:"Para hablar de sentimientos al mudarte a otro país: «One thing (that) I'd miss is…». Puedes darle la vuelta: «My family is one thing I'd miss».",
   forma:[["Forma 1","One thing I'd be nervous about is getting lost."],["Forma 2","Getting lost is one thing I'd be nervous about."],["Personas","My mom is one person I'd miss a lot."]],
   ojo:"El «that/who» se puede quitar: One thing (that) I'd miss…"},
  {t:"Expectations (costumbres)",
   idea:"Para explicar qué se espera en una cultura: it's the custom to, you're (not) supposed to, you're expected to, it's (not) acceptable to + verbo en forma base.",
   forma:[["Costumbre","In Colombia, it's the custom to greet with a kiss."],["Se espera","You're expected to arrive on time for business meetings."],["No se debe","You're not supposed to tip in Japan."],["No aceptable","It's not acceptable to show up without calling."]],
   ojo:"Después va el verbo base: «it's the custom to ARRIVE», no «to arriving»."}
 ],
 voc:[["culture shock","choque cultural","I had culture shock when I moved to Canada."],["homesick","nostálgico (extrañar casa)","I felt homesick the first month."],["anxious","ansioso","I'm anxious about the trip."],["fascinated","fascinado","I was fascinated by the food."],["insecure","inseguro","I feel insecure speaking English."],["confident","seguro de sí mismo","Now I'm more confident."],["custom","costumbre","It's a local custom."],["taboo","tabú","Talking about salary is taboo here."]],
 habla:["If you moved abroad, what's one thing you'd miss? one thing you'd be excited about?","Explain three customs from Colombia to a foreigner.","What is not acceptable to do at a Colombian dinner?","Have you ever felt culture shock?"],
 ej:[
  {k:"e",q:"One thing I'd be worried about ___ not understanding the language.",o:["is","are","be"],a:0,y:"One thing … IS …"},
  {k:"c",q:"My family is one thing I'd miss ___ lot.",a:["a"],y:"miss a lot."},
  {k:"e",q:"In Japan, you're supposed to ___ your shoes off at home.",o:["take","taking","took"],a:0,y:"supposed to + verbo base."},
  {k:"e",q:"It's not acceptable ___ late to a job interview.",o:["to arrive","arriving","arrive"],a:0,y:"acceptable to + verbo."},
  {k:"c",q:"In Colombia, it's the ___ to eat tamales at Christmas.",a:["custom"],y:"it's the custom to…"},
  {k:"o",s:"You're expected to bring a gift",y:"be expected to + verbo."},
  {k:"o",s:"One thing I'd miss is the food",y:"One thing (that) I'd miss is…"},
  {k:"e",q:"Missing your home and family is feeling…",o:["homesick","fascinated","confident"],a:0,y:"homesick = nostalgia por casa."}
 ]
},
{
 n:6, t:"That needs fixing.", tema:"Quejas y reparaciones", pag:"36–41",
 gram:[
  {t:"Describing problems 1",
   idea:"Describe daños con participio como adjetivo (is broken, is scratched) o con sustantivo (has a scratch, there's a hole).",
   forma:[["Participio","The screen is cracked. My shirt is torn."],["Sustantivo","The screen has a crack. There's a tear in my shirt."],["Más","The table is damaged / has some damage."]],
   ojo:"Irregulares: tear → torn, break → broken. «It's broke» ✗ → It's BROKEN."},
  {t:"Describing problems 2: need / keep",
   idea:"Need + -ing o need to be + participio = algo necesita arreglo (los dos significan lo mismo). Keep + -ing = algo pasa una y otra vez (molesta).",
   forma:[["Need + -ing","The walls need painting."],["Need + pasiva","The walls need to be painted."],["Keep + -ing","My laptop keeps crashing."]],
   ojo:"«needs to be fixing» ✗ → needs to be FIXED o needs FIXING."}
 ],
 voc:[["scratched","rayado","My phone screen is scratched."],["cracked","agrietado, quebrado","The mirror is cracked."],["stained","manchado","This shirt is stained."],["dent","abolladura","My car has a dent."],["leaking","goteando","The sink is leaking."],["crash","bloquearse (app/pc)","My laptop keeps crashing."],["refund","reembolso","I'd like a refund, please."],["exchange","cambiar (en tienda)","Can I exchange this jacket?"]],
 habla:["Role-play: I'm a store clerk. Complain about something you bought.","What things in your house need fixing?","What technology keeps giving you problems?","Have you ever asked for a refund? What happened?"],
 ej:[
  {k:"e",q:"My jeans ___ a hole in them.",o:["have","are","is"],a:0,y:"have + sustantivo (a hole)."},
  {k:"e",q:"The vase is ___ .",o:["broken","broke","breaking"],a:0,y:"Participio: broken."},
  {k:"c",q:"The car needs ___ (wash).",a:["washing"],y:"need + -ing."},
  {k:"c",q:"The windows need to be ___ (clean).",a:["cleaned"],y:"need to be + participio."},
  {k:"e",q:"My printer keeps ___ .",o:["jamming","to jam","jam"],a:0,y:"keep + -ing."},
  {k:"o",s:"The kitchen needs to be painted",y:"need to be + participio."},
  {k:"o",s:"My phone keeps freezing",y:"keep + -ing = pasa una y otra vez."},
  {k:"e",q:"Money returned to you for a bad product is a…",o:["refund","dent","stain"],a:0,y:"refund = reembolso."}
 ]
},
{
 n:7, t:"What can we do?", tema:"Medio ambiente y problemas sociales", pag:"44–49",
 gram:[
  {t:"Passive + prepositions of cause",
   idea:"Para describir problemas sin culpar a una persona, usamos la voz pasiva. Hay dos tiempos: algo que está pasando AHORA (is/are being + participio) y algo que ya pasó con efecto hoy (has/have been + participio). La causa se introduce con by, due to, because of, as a result of o through.",
   forma:[["Presente continuo pasivo","Our water is being contaminated by chemicals."],["Presente perfecto pasivo","Many parks have been lost because of overbuilding."],["Causas","by · due to · because of · as a result of · through"]],
   ojo:"El auxiliar concuerda con el sujeto: the streets ARE being damaged · the river IS being polluted."},
  {t:"Infinitive clauses: proponer soluciones",
   idea:"Para dar soluciones: One way to + verbo + is to + verbo. «The best way to…», «Another way to…». Si hablas de varias formas, el verbo es ARE.",
   forma:[["Una solución","One way to reduce traffic is to improve public transportation."],["Otra","Another way to stop pollution is to plant more trees."],["Plural","The best ways to fight poverty are to create jobs and invest in education."]],
   ojo:"«One way to reduce pollution is reduce cars» ✗ → is TO reduce cars (falta el to)."}
 ],
 voc:[["pollution","contaminación","Air pollution is a big problem in Bogotá."],["unemployment","desempleo","Unemployment is high among young people."],["poverty","pobreza","Education helps fight poverty."],["global warming","calentamiento global","Global warming is melting the ice."],["government corruption","corrupción del gobierno","Corruption affects public services."],["famine","hambruna","Famine is caused by drought and war."],["recession","recesión económica","Many people lost their jobs during the recession."],["deforestation","deforestación","Deforestation is destroying the Amazon."],["infectious diseases","enfermedades infecciosas","Vaccines prevent infectious diseases."],["political unrest","inestabilidad política","There's political unrest in the region."]],
 habla:["What environmental problems does your city have? Use the passive: «… is being…».","What's the best way to reduce unemployment in Colombia?","Which global challenge worries you the most? Why?","Imagine you are running for mayor. What three problems would you fix and how?"],
 ej:[
  {k:"e",q:"The river ___ by a factory.",o:["is being polluted","is polluting","are being polluted"],a:0,y:"El río recibe la acción → pasiva. Sujeto singular → is being."},
  {k:"e",q:"Many trees ___ cut down because of new roads.",o:["have been","has been","are been"],a:0,y:"Sujeto plural (trees) → have been."},
  {k:"c",q:"The roads aren't being repaired ___ ___ a lack of money. (2 palabras)",a:["due to","because of"],y:"Causa: due to / because of."},
  {k:"c",q:"One way to save water ___ to take shorter showers.",a:["is"],y:"One way … IS to …"},
  {k:"e",q:"The best ways to fight poverty ___ to create jobs and improve education.",o:["are","is","be"],a:0,y:"«ways» es plural → are."},
  {k:"e",q:"Our health ___ affected as a result of air pollution.",o:["has been","have been","is been"],a:0,y:"Health es singular → has been."},
  {k:"o",s:"Our streets are being damaged by heavy traffic",y:"Pasiva continua + by + causa."},
  {k:"o",s:"One way to fight crime is to have more police",y:"One way to + verbo + is to + verbo."},
  {k:"e",q:"When a lot of people can't find work, there's…",o:["unemployment","famine","recession"],a:0,y:"unemployment = desempleo."},
  {k:"e",q:"Cutting down forests is called…",o:["deforestation","global warming","poverty"],a:0,y:"deforestation."}
 ]
},
{
 n:8, t:"Never stop learning.", tema:"Formas de aprender y habilidades para la vida", pag:"50–55",
 gram:[
  {t:"Would rather / would prefer",
   idea:"Para hablar de preferencias. Would rather + verbo BASE. Would prefer + TO + verbo. En negativo, el not va después: I'd rather not / I'd prefer not to.",
   forma:[["Pregunta","Would you rather study online or in a classroom?"],["Rather","I'd rather take an art course."],["Prefer","I'd prefer to take an online course."],["Negativo","I'd rather not. / I'd prefer not to."],["Con than","I'd rather study at home than go to the library."]],
   ojo:"«I'd rather to study» ✗ → I'd rather STUDY. «I'd prefer study» ✗ → I'd prefer TO study."},
  {t:"By + gerund: cómo hacer las cosas",
   idea:"By + -ing explica el MÉTODO para lograr algo. Para comparar: not by … but by …",
   forma:[["Método","You can improve your accent by watching movies."],["Mejor forma","I learn new words best by writing them down."],["Comparar","The best way to learn slang is not by reading the news but by watching series."]],
   ojo:"Después de by siempre -ing: by practicING, no «by practice»."}
 ],
 voc:[["take an online course","tomar un curso virtual","I'm taking an online course in marketing."],["study group","grupo de estudio","Let's set up a study group."],["get a degree","obtener un título","She got a degree in engineering."],["self-confidence","confianza en sí mismo","Public speaking builds self-confidence."],["self-discipline","autodisciplina","Studying alone requires self-discipline."],["time management","manejo del tiempo","Good time management reduces stress."],["perseverance","perseverancia","Learning English takes perseverance."],["money management","manejo del dinero","Making a budget improves money management."],["creativity","creatividad","Art classes develop creativity."],["tolerance","tolerancia","Travel teaches tolerance."]],
 habla:["Would you rather study on your own or with a group? Why?","How do you learn new English words best? Use «by + -ing».","What life skill would you like to improve? How will you do it?","Would you prefer to take an online course or a traditional one?"],
 ej:[
  {k:"e",q:"I'd rather ___ a language course.",o:["take","to take","taking"],a:0,y:"would rather + verbo base."},
  {k:"e",q:"Would you prefer ___ at night?",o:["to study","study","studying"],a:0,y:"would prefer + to + verbo."},
  {k:"c",q:"I'd prefer ___ ___ take any classes this semester. (2 palabras)",a:["not to"],y:"prefer not to."},
  {k:"c",q:"I'd rather ___ go out tonight. (negativo)",a:["not"],y:"I'd rather not + verbo."},
  {k:"e",q:"You can improve your listening ___ podcasts.",o:["by listening to","by listen to","for listening"],a:0,y:"by + -ing."},
  {k:"c",q:"I learn grammar best by ___ (do) exercises.",a:["doing"],y:"by + -ing."},
  {k:"o",s:"I'd rather study at home than go to the library",y:"rather … than …"},
  {k:"o",s:"You can build vocabulary by reading every day",y:"by + -ing = el método."},
  {k:"e",q:"Organizing your day well is good…",o:["time management","tolerance","creativity"],a:0,y:"time management."},
  {k:"e",q:"Not giving up when something is difficult is…",o:["perseverance","self-confidence","competitiveness"],a:0,y:"perseverance = perseverancia."}
 ]
},
{
 n:9, t:"Getting things done", tema:"Servicios y sugerencias", pag:"58–63",
 gram:[
  {t:"Get / have something done",
   idea:"Cuando OTRA persona hace algo por ti (un servicio): have/get + objeto + participio. No se usa «be».",
   forma:[["Yo lo hago","I cut my hair."],["Otro lo hace","I get my hair cut every month."],["Pregunta","Where can I have my phone fixed?"],["En progreso","He's having his house painted."]],
   ojo:"«Where can I have my car be washed» ✗ → have my car WASHED."},
  {t:"Making suggestions",
   idea:"Varias formas de sugerir. Fíjate en lo que va después: could + base, what about + -ing, why don't you + base, one option is + to.",
   forma:[["Modal","Maybe you could join a gym."],["Gerundio","What about taking a class? · Have you thought about…?"],["Pregunta negativa","Why don't you volunteer?"],["Infinitivo","One option is to join a club. · It might be a good idea to…"]],
   ojo:"«Why don't you to join» ✗ → Why don't you JOIN."}
 ],
 voc:[["break up with","terminar con (pareja)","She broke up with her boyfriend."],["come up with","idear, ocurrírsele","He came up with a great idea."],["look forward to","esperar con ganas","I'm looking forward to the trip."],["keep up with","mantenerse al día","I can't keep up with technology."],["get along with","llevarse bien con","I get along with my coworkers."],["cut down on","reducir el consumo de","I need to cut down on sugar."],["put up with","aguantar, tolerar","I can't put up with the noise."],["take care of","encargarse de","Who takes care of your dog?"]],
 habla:["What services do you usually pay for? «I get my … done».","I'm stressed and have no friends in a new city. Give me three suggestions.","What are you looking forward to this year?","What do you need to cut down on?"],
 ej:[
  {k:"e",q:"I need to ___ my car repaired.",o:["get","do","make"],a:0,y:"get/have something done."},
  {k:"c",q:"Where can I have my suit ___ (clean)?",a:["cleaned"],y:"have + objeto + participio."},
  {k:"e",q:"Why don't you ___ a running club?",o:["join","to join","joining"],a:0,y:"Why don't you + verbo base."},
  {k:"e",q:"What about ___ a cooking class?",o:["taking","take","to take"],a:0,y:"What about + -ing."},
  {k:"c",q:"One option is ___ volunteer at a hospital.",a:["to"],y:"One option is TO + verbo."},
  {k:"o",s:"I get my hair cut every month",y:"get + objeto + participio."},
  {k:"o",s:"Have you thought about joining a gym",y:"thought about + -ing."},
  {k:"e",q:"I can't ___ with my neighbor's loud music anymore!",o:["put up","come up","break up"],a:0,y:"put up with = aguantar."}
 ]
},
{
 n:10, t:"A matter of time", tema:"Historia y el futuro", pag:"64–69",
 gram:[
  {t:"Referring to time in the past",
   idea:"Preposiciones de tiempo: in/during + periodo, ago = hace, from … to = de … a, for + duración, since + punto de inicio (con presente perfecto).",
   forma:[["Momento","in 1995 · during the 1970s · 30 years ago"],["Duración cerrada","from 1960 to 1970 · for 10 years"],["Hasta hoy","She has lived here since 2015 / for 10 years."]],
   ojo:"since 2010 (desde un punto) vs. for 10 years (duración). «since 10 years» ✗."},
  {t:"Predicting the future",
   idea:"Will = predicción. Will be + -ing = acción en progreso en el futuro. Will have + participio = acción terminada ANTES de un momento futuro (by 2050, within 20 years).",
   forma:[["Will","We will travel to Mars."],["Future continuous","In 2050, people will be living on Mars."],["Future perfect","By 2040, scientists will have found a cure."]],
   ojo:"by = no más tarde de (by 2050). within = dentro de un periodo (within 10 years)."}
 ],
 voc:[["invention","invento","The internet was the biggest invention of the century."],["discovery","descubrimiento","The discovery of penicillin saved millions."],["achievement","logro","Landing on the moon was a huge achievement."],["epidemic","epidemia","The epidemic spread quickly."],["revolution","revolución","The digital revolution changed everything."],["natural disaster","desastre natural","The flood was a natural disaster."],["terrorist attack","ataque terrorista","Security increased after the terrorist attack."],["fad","moda pasajera","Tamagotchis were a fad in the 90s."]],
 habla:["What was the most important invention of the last 100 years?","How long have you lived in your city? Studied English?","What will you be doing ten years from now?","By 2050, what will humans have achieved?"],
 ej:[
  {k:"e",q:"The Beatles were together ___ 1960 to 1970.",o:["from","since","during"],a:0,y:"from … to."},
  {k:"e",q:"I've studied English ___ 2023.",o:["since","for","ago"],a:0,y:"since + punto de inicio."},
  {k:"c",q:"The first iPhone came out about 18 years ___ .",a:["ago"],y:"… years ago = hace … años."},
  {k:"e",q:"In 20 years, people ___ in smart cities.",o:["will be living","will have lived","are living"],a:0,y:"Acción en progreso en el futuro."},
  {k:"e",q:"By 2040, we ___ a cure for cancer.",o:["will have found","will be finding","found"],a:0,y:"Terminada antes de 2040 → future perfect."},
  {k:"o",s:"By next year I will have finished the course",y:"By + momento + will have + participio."},
  {k:"o",s:"This time tomorrow I will be flying to Bogota",y:"Future continuous."},
  {k:"e",q:"Something popular for a short time is a…",o:["fad","revolution","discovery"],a:0,y:"fad = moda pasajera."}
 ]
},
{
 n:11, t:"Rites of passage", tema:"Momentos clave y arrepentimientos", pag:"72–77",
 gram:[
  {t:"Time clauses",
   idea:"Unen dos momentos: before, after, once (una vez que), the moment / as soon as (justo cuando), until (hasta que), by the time (para cuando). Con until y by the time suele ir past perfect.",
   forma:[["Before/after","After I graduated, I moved to Bogotá."],["Inmediato","As soon as I got my first salary, I bought a phone."],["Until","Until I moved out, I had never cooked."],["By the time","By the time I was 18, I had already worked."]],
   ojo:"by the time + pasado simple, y la otra parte en past perfect."},
  {t:"Regrets and hypothetical situations",
   idea:"Should have + participio = me arrepiento. If + had + participio, would/could have + participio = imaginar un pasado diferente.",
   forma:[["Arrepentimiento","I should have studied more."],["No debí","I shouldn't have spent all my money."],["Hipotético","If I had saved money, I could have traveled."],["Pasado → presente","If I'd finished college, I'd have a better job now."]],
   ojo:"«If I would have known» ✗ → If I HAD known."}
 ],
 voc:[["ambitious","ambicioso","She's ambitious and wants to be CEO."],["argumentative","peleón, discutidor","Teenagers can be argumentative."],["carefree","despreocupado","I was carefree in my twenties."],["dependable","confiable","My dad is dependable."],["naive","ingenuo","I was naive when I was young."],["pragmatic","pragmático","She's pragmatic about money."],["rebellious","rebelde","He was rebellious at school."],["wise","sabio","My grandmother is very wise."],["turning point","punto de quiebre","Moving abroad was a turning point."],["milestone","hito","Graduating was a milestone."]],
 habla:["What was a turning point in your life? What changed after that?","Tell me one thing you should have done differently.","If you had chosen another career, what would you be doing now?","By the time you were 18, what had you already done?"],
 ej:[
  {k:"e",q:"I ___ more when I was in school.",o:["should have studied","should study","should had studied"],a:0,y:"should have + participio."},
  {k:"e",q:"If I ___ harder, I would have passed.",o:["had studied","would study","studied"],a:0,y:"If + had + participio."},
  {k:"c",q:"If I had saved money, I ___ have bought a car.",a:["could","would"],y:"could/would have + participio."},
  {k:"e",q:"By the time I got home, everyone ___ asleep.",o:["had fallen","fell","has fallen"],a:0,y:"by the time → past perfect."},
  {k:"c",q:"I left as ___ as the class ended.",a:["soon"],y:"as soon as."},
  {k:"o",s:"I shouldn't have spent all my money",y:"shouldn't have + participio."},
  {k:"o",s:"Until I moved out I had never cooked",y:"until + past perfect."},
  {k:"e",q:"Someone who believes everything easily is…",o:["naive","wise","pragmatic"],a:0,y:"naive = ingenuo."}
 ]
},
{
 n:12, t:"Keys to success", tema:"Éxito, negocios y publicidad", pag:"78–83",
 gram:[
  {t:"Describing purpose",
   idea:"Para decir el propósito: (In order) to + verbo, o (In order) for + algo + to + verbo.",
   forma:[["To","To attract customers, a store needs good prices."],["In order to","In order to finance a business, you can get a loan."],["For … to","For a restaurant to succeed, it needs good service."]],
   ojo:"«For to have success» ✗ → TO have success."},
  {t:"Giving reasons",
   idea:"because / since + frase completa (sujeto + verbo). because of / due to + sustantivo. for + sustantivo (famous for). The reason (why) … is …",
   forma:[["Frase","I like it because it's always full."],["Sustantivo","It's popular because of its music."],["Due to","Due to the crowds, it's hard to get in."],["The reason","The reason people go there is to be seen."]],
   ojo:"«because the prices» ✗ → because OF the prices (o: because the prices ARE low)."}
 ],
 voc:[["industrious","trabajador, diligente","She's industrious; she never stops working."],["passionate","apasionado","A good teacher is passionate."],["knowledgeable","conocedor","He's knowledgeable about history."],["persuasive","persuasivo","A politician must be persuasive."],["charming","encantador","The host was charming."],["affordable","asequible","The app is affordable."],["slogan","eslogan","«Just do it» is a famous slogan."],["brand","marca","Which brand of phone do you have?"]],
 habla:["What qualities do you need to be successful in your job?","Name a successful company. Why is it successful? Use because / because of.","For a small business to succeed in Pamplona, what does it need?","What's your favorite ad or slogan? Why does it work?"],
 ej:[
  {k:"e",q:"___ attract more clients, a gym should offer free classes.",o:["To","For","For to"],a:0,y:"To + verbo = propósito."},
  {k:"e",q:"___ a café to be popular, it needs good coffee.",o:["For","To","Because"],a:0,y:"For + algo + to + verbo."},
  {k:"e",q:"It's famous ___ its pizzas.",o:["for","because","since"],a:0,y:"famous for + sustantivo."},
  {k:"c",q:"The shop closed because ___ the high rent.",a:["of"],y:"because of + sustantivo."},
  {k:"e",q:"___ the rain, the event was canceled.",o:["Due to","Because","Since"],a:0,y:"Due to + sustantivo."},
  {k:"o",s:"I like that store because it's cheap",y:"because + frase."},
  {k:"o",s:"In order to succeed you need to work hard",y:"In order to + verbo."},
  {k:"e",q:"Someone who can easily convince others is…",o:["persuasive","industrious","affordable"],a:0,y:"persuasive."}
 ]
},
{
 n:13, t:"What might have been", tema:"Explicaciones y consejos sobre el pasado", pag:"86–91",
 gram:[
  {t:"Past modals: degrees of certainty",
   idea:"Para adivinar qué pasó: must have (casi seguro sí), may/might/could have (es posible), couldn't have (casi seguro que no).",
   forma:[["Casi seguro","He must have fallen asleep."],["Posible","She might have forgotten. / They could have gone out."],["Imposible","He couldn't have forgotten; I reminded him."],["Negativo","She must not have heard the bell."]],
   ojo:"Al hablar se reduce: «must've», «might've»."},
  {t:"Past modals: judgments and suggestions",
   idea:"Juzgar lo que alguien hizo: should(n't) have. Sugerir otra opción: could have. Lo que tú habrías hecho: would(n't) have.",
   forma:[["Juicio","You should have told the truth."],["Opción","You could have called me."],["Yo en tu lugar","I wouldn't have lent him money."]],
   ojo:"Todos llevan have + participio: should have GONE, no «should have went»."}
 ],
 voc:[["pet peeve","manía: algo que te molesta mucho","My pet peeve is people who are late."],["assumption","suposición","That's just an assumption."],["criticism","crítica","She didn't take the criticism well."],["excuse","excusa","That's a bad excuse."],["suspicion","sospecha","I have a suspicion he lied."],["warning","advertencia","This is your last warning."],["demand","exigencia","Their demand was unreasonable."],["prediction","predicción","My prediction is he'll be late again."]],
 habla:["Your friend didn't come to your party and isn't answering. What might have happened?","What's your biggest pet peeve?","Tell me about a mistake someone made. What should he or she have done?","A friend borrowed money and never returned it. What would you have done?"],
 ej:[
  {k:"e",q:"The lights are off. They ___ gone out.",o:["must have","should have","would have"],a:0,y:"Casi seguro → must have."},
  {k:"e",q:"He ___ stolen it. He was with me all day.",o:["couldn't have","must have","might have"],a:0,y:"Imposible → couldn't have."},
  {k:"c",q:"She isn't answering. She might ___ lost her phone.",a:["have"],y:"might have + participio."},
  {k:"e",q:"You ___ told me earlier! Now it's too late.",o:["should have","must have","would"],a:0,y:"Juicio → should have."},
  {k:"c",q:"I wouldn't have ___ (go) to that party.",a:["gone"],y:"have + participio (gone)."},
  {k:"o",s:"He must have forgotten about the meeting",y:"must have + participio."},
  {k:"o",s:"You could have asked for help",y:"could have = otra opción."},
  {k:"e",q:"«If you're late again, you'll be fired.» is a…",o:["warning","excuse","suspicion"],a:0,y:"warning = advertencia."}
 ]
},
{
 n:14, t:"Creative careers", tema:"Cine, medios y procesos", pag:"92–97",
 gram:[
  {t:"The passive to describe a process",
   idea:"Para explicar CÓMO se hace algo (una película, un producto) usamos la pasiva: is/are + participio, o modal + be + participio.",
   forma:[["Presente","First, a script is written."],["Plural","Then the actors are chosen."],["Con modal","The scenes have to be filmed many times."],["Secuencia","First … Then … Next … After that … Finally …"]],
   ojo:"have to / need to concuerdan: The character HAS to be drawn · The scenes HAVE to be edited."},
  {t:"Defining vs. non-defining relative clauses",
   idea:"Defining: identifica a quién te refieres (sin comas, who o that). Non-defining: da información extra (CON comas y solo who).",
   forma:[["Defining","A stunt person is someone who does dangerous scenes."],["Non-defining","My cousin, who is a DJ, plays at weddings."]],
   ojo:"Con comas nunca uses that: «My boss, that is…» ✗ → My boss, WHO is…"}
 ],
 voc:[["screenwriter","guionista","The screenwriter changed the ending."],["stunt person","doble de acción","The stunt person jumped from the roof."],["film editor","editor de cine","The film editor cut ten minutes from the movie."],["talk show host","presentador de un programa de entrevistas","The host interviewed a famous actor."],["songwriter","compositor","She's a talented songwriter."],["game animator","animador de videojuegos","Game animators create characters' movements."],["storyboard artist","artista de storyboard","The storyboard artist draws each scene."],["special effects","efectos especiales","The special effects were amazing."]],
 habla:["Explain how something is made, step by step (coffee, a video, a website). Use the passive.","Which creative job would you like to try? Why?","Describe a person you know who works in a creative job. Use a non-defining clause.","What's the best movie you've seen this year?"],
 ej:[
  {k:"e",q:"First, the script ___ written.",o:["is","are","be"],a:0,y:"script = singular → is."},
  {k:"e",q:"The actors ___ chosen by the casting director.",o:["are","is","have"],a:0,y:"actors = plural → are."},
  {k:"c",q:"The film has to be ___ (edit) carefully.",a:["edited"],y:"modal + be + participio."},
  {k:"e",q:"My sister, ___ is a photographer, travels a lot.",o:["who","that","which"],a:0,y:"Con comas (info extra) → solo who."},
  {k:"e",q:"A songwriter is a person ___ writes songs.",o:["who","which","whose"],a:0,y:"Defining: who/that."},
  {k:"o",s:"The scenes are filmed in different places",y:"Pasiva de proceso: are + participio."},
  {k:"o",s:"The music has to be recorded in a studio",y:"has to be + participio."},
  {k:"e",q:"The person who replaces an actor in dangerous scenes is a…",o:["stunt person","talk show host","songwriter"],a:0,y:"stunt person."}
 ]
},
{
 n:15, t:"A law must be passed!", tema:"Leyes, opiniones y problemas de la comunidad", pag:"100–105",
 gram:[
  {t:"Recommendations with passive modals",
   idea:"Para recomendar u opinar sobre reglas: should / ought to + be + participio (buena idea). must / has to / has got to + be + participio (es necesario).",
   forma:[["Buena idea","Bikes should be allowed in parks."],["Formal","People ought to be required to recycle."],["Necesario","A law must be passed to stop noise."],["Urgente","Something has got to be done about crime."]],
   ojo:"Siempre: modal + be + participio. «should be allow» ✗ → should be ALLOWED."},
  {t:"Tag questions for opinions",
   idea:"Una mini pregunta al final para buscar que el otro esté de acuerdo. Afirmativo → tag negativo. Negativo → tag afirmativo. Usa el mismo auxiliar.",
   forma:[["Afirmativo","It's expensive, isn't it?"],["Negativo","You don't like it, do you?"],["Pasado","They paid, didn't they?"],["Modal","The city should help, shouldn't it?"]],
   ojo:"«People can't afford it, don't they?» ✗ → …, CAN they?"}
 ],
 voc:[["homelessness","falta de vivienda, indigencia","Homelessness is growing in big cities."],["bullying","acoso escolar","Schools must stop bullying."],["vandalism","vandalismo","There's a lot of vandalism in that park."],["noise pollution","contaminación auditiva","Noise pollution keeps me awake."],["stray animals","animales callejeros","There are many stray animals here."],["street crime","delincuencia callejera","Street crime has increased."],["overcrowded","abarrotado, superpoblado","Overcrowded classrooms make learning hard."],["make ends meet","llegar a fin de mes","It's hard to make ends meet."]],
 habla:["What law would you like to pass in your city? Use «A law must be passed…».","What should be done about stray animals?","Give me three opinions with tag questions about life in Colombia.","Should cell phones be banned in schools?"],
 ej:[
  {k:"e",q:"Dogs ___ walked without a leash.",o:["shouldn't be","shouldn't","aren't be"],a:0,y:"modal + be + participio."},
  {k:"c",q:"Something has got to be ___ (do) about traffic.",a:["done"],y:"be + participio."},
  {k:"e",q:"Rent is really high, ___ ?",o:["isn't it","is it","doesn't it"],a:0,y:"Afirmativo → tag negativo con «is»."},
  {k:"e",q:"You don't agree with me, ___ ?",o:["do you","don't you","are you"],a:0,y:"Negativo → tag afirmativo con «do»."},
  {k:"c",q:"We can live without meat, ___ we?",a:["can't"],y:"can → can't."},
  {k:"o",s:"A law must be passed to control noise",y:"must be + participio."},
  {k:"o",s:"Smoking shouldn't be allowed in parks",y:"shouldn't be allowed."},
  {k:"e",q:"Animals with no home living on the street are…",o:["stray animals","vandalism","bullying"],a:0,y:"stray animals."}
 ]
},
{
 n:16, t:"Reaching your goals", tema:"Logros y metas", pag:"106–111",
 gram:[
  {t:"Past accomplishments",
   idea:"Para logros: managed to / was able to + verbo. Con un tiempo exacto (last year) usa pasado simple. Sin tiempo exacto o hasta hoy, presente perfecto.",
   forma:[["Pasado simple","I managed to finish the marathon last year."],["No lo logré","I wasn't able to travel much in my last job."],["Presente perfecto","I've been able to save some money."]],
   ojo:"«I've finished my degree last year» ✗ → I FINISHED my degree last year (tiempo exacto)."},
  {t:"Goals and future accomplishments",
   idea:"Para metas: future perfect (I hope I'll have …) y would like to have + participio.",
   forma:[["Future perfect","By 2030, I hope I'll have bought a house."],["Would like to have","In ten years, I'd like to have started my own company."],["in vs. by","in the next two years (periodo) · by December (límite)"]],
   ojo:"have + participio: I'd like to have TRAVELED, no «traveled to have»."}
 ],
 voc:[["accomplishment","logro","My biggest accomplishment is my degree."],["goal","meta","My goal is to speak English fluently."],["resourceful","recursivo, ingenioso","She's resourceful; she always finds a way."],["courageous","valiente","It was courageous to start over."],["adaptable","adaptable","You need to be adaptable abroad."],["self-sufficient","autosuficiente","I became self-sufficient at 20."],["upbeat","optimista","He's always upbeat."],["compassionate","compasivo","Nurses must be compassionate."]],
 habla:["What's your greatest accomplishment so far?","What have you managed to do this year?","Where do you see yourself in five years? Use «I hope I'll have…».","Which inspirational quote do you like the most? Why?"],
 ej:[
  {k:"e",q:"Last year I ___ to run 10 km.",o:["managed","have managed","manage"],a:0,y:"Tiempo exacto (last year) → pasado simple."},
  {k:"e",q:"I ___ able to save money since I started this job.",o:["have been","was","am"],a:0,y:"Hasta hoy (since) → presente perfecto."},
  {k:"c",q:"By 2030, I hope I'll have ___ (buy) a house.",a:["bought"],y:"will have + participio."},
  {k:"e",q:"I'd like to have ___ my own business by then.",o:["started","start","starting"],a:0,y:"would like to have + participio."},
  {k:"c",q:"I hope I'll have finished ___ December. (límite)",a:["by"],y:"by = fecha límite."},
  {k:"o",s:"I was able to finish the project on time",y:"was able to + verbo."},
  {k:"o",s:"I hope I'll have learned French by then",y:"Future perfect."},
  {k:"e",q:"Someone who finds clever ways to solve problems is…",o:["resourceful","timid","rigid"],a:0,y:"resourceful."}
 ]
}
];
