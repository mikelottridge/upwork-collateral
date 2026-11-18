(function () {
// Each visit records correct responses out of 20 for listening and visual tasks, in that order.
const skills = ["Sustained attention", "Response inhibition", "Rule switching"];
const cases = [
  { id:"A", name:"A · ADHD follow-up", focus:1, modality:0,
    visits:[[[11,15],[5,14],[13,15]],[[12,16],[7,15],[14,15]],[[13,16],[8,16],[15,16]],[[14,17],[10,17],[15,16]]],
    practice:"Try a turn-taking cue", exercise:"In a familiar conversation, agree on a turn-taking signal. At the next visit, discuss whether it helped the learner wait for a turn.",
    en:["When you heard a sound, you had to wait before tapping. At first you waited 5 times out of 20. This time you waited 10 times. With picture cues you went from 14 to 17 out of 20. Try a turn-taking cue when you talk with someone.",
    "Waiting for the sound cue improved from 5 to 10 correct responses in 20 trials. At the latest visit, the same task with a visual cue yielded 17 correct responses. The gap gives the practitioner a specific skill to practice: pausing before responding to sound."],
    es:["Cuando oías un sonido, tenías que esperar antes de dar un toque. Al principio esperaste 5 de 20 veces. Esta vez esperaste 10 veces. Con señales visuales, tus aciertos subieron de 14 a 17 de 20. Prueba a usar una señal para esperar tu turno al hablar.",
    "En la tarea de esperar la señal sonora, los aciertos aumentaron de 5 a 10 en 20 intentos. En la última visita hubo 17 aciertos con la señal visual. Esta diferencia orienta la práctica hacia una destreza concreta: hacer una pausa antes de responder al sonido."] },
  { id:"B", name:"B · Anxiety follow-up", focus:2, modality:1,
    visits:[[[14,16],[15,16],[15,8]],[[15,16],[15,16],[16,11]],[[15,17],[16,16],[16,13]],[[16,17],[16,17],[17,15]]],
    practice:"Name the next step", exercise:"When changing from one familiar activity to another, ask the learner to name the next step. Record one occasion when a reminder helped and one when it was unnecessary.",
    en:["The picture game changed its rule. At first you used the new rule 8 times out of 20. This time you did it 15 times. When you heard the cue, you did it 17 times. Try naming the next step when an activity changes.",
    "Accuracy after a visual rule change rose from 8 to 11, then to 13 and 15 across the four visits. At the last visit, there were 17 correct responses to spoken rule changes. Practice can focus on noticing a visual cue and naming the new rule before sorting."],
    es:["En el juego de dibujos cambiaba la regla. Al principio seguiste la nueva regla 8 de 20 veces. Esta vez lo hiciste 15 veces. Cuando oíste la señal, lo hiciste 17 veces. Prueba a decir el siguiente paso cuando cambie la actividad.",
    "Los aciertos tras un cambio de regla visual subieron de 8 a 11, luego a 13 y finalmente a 15 en las cuatro visitas. En la última visita hubo 17 aciertos cuando el cambio se indicó de viva voz. Se puede practicar cómo reconocer la señal visual y decir la regla nueva antes de ordenar las tarjetas."] },
  { id:"C", name:"C · Post-concussion follow-up", focus:0, modality:0,
    visits:[[[7,13],[14,16],[13,14]],[[9,14],[15,16],[14,15]],[[11,16],[16,17],[14,15]],[[13,17],[16,17],[15,16]]],
    practice:"Repeat the key step", exercise:"After giving a familiar spoken instruction, invite the learner to repeat the key step. Note whether a reminder was useful in that setting.",
    en:["You listened for one word. At first you caught it 7 times out of 20. By the last visit you caught it 13 times. With picture cues, your score went from 13 to 17. Try saying the key step back after you hear an instruction.",
    "Listening accuracy rose from 7 to 9, then to 11 and 13 correct responses over four assessments. On the matched visual task, accuracy rose from 13 to 17. The family could observe how often the learner can repeat a familiar instruction without a reminder."],
    es:["Escuchaste una palabra clave. La primera vez la reconociste 7 de 20 veces. En la última visita la reconociste 13 veces. Con dibujos, tus aciertos subieron de 13 a 17. Prueba a repetir el paso principal después de oír una instrucción.",
    "En la tarea auditiva, los aciertos subieron de 7 a 9, luego a 11 y finalmente a 13. En la tarea visual equivalente, los aciertos subieron de 13 a 17. La familia podría observar con qué frecuencia logra repetir una instrucción conocida sin un recordatorio."] }
];
const $ = id => document.getElementById(id);
const bands = ["0–9","10–13","14–16","17–20"];
const band = n => n<10?0:n<14?1:n<17?2:3;
const colors=["#21685d","#995211"];
const dates = ["2025-09-16", "2025-11-18", "2026-01-20", "2026-03-17"];
const dateLabels = dates.map(date => new Intl.DateTimeFormat("en-US", {month:"short",year:"numeric",timeZone:"UTC"}).format(new Date(date)));
const definitions = ["Keeping attention on a target", "Waiting before responding", "Changing to a new rule"];
const modes=["Listening","Visual"];
const fmt = n => n>0?'+'+n:String(n);
const select=$("sample-case");
cases.forEach(c=>select.add(new Option(c.name,c.id)));
function axes(x1,y1,x2,y2){return '<path d="M'+x1+' '+y1+'V'+y2+'H'+x2+'" fill="none" stroke="#849294"/>'}
function label(x,y,t,anchor="middle"){return '<text x="'+x+'" y="'+y+'" text-anchor="'+anchor+'">'+t+'</text>'}
function chart(el,desc,markup){$(el).innerHTML='<svg viewBox="0 0 320 160" role="img" aria-label="'+desc+'">'+markup+'</svg>'}
function trendChart(c,k){
  const x=i=>36+i*86, y=v=>128-v*5.6;
  let svg=axes(36,16,294,128);
  [0,10,20].forEach(n=>{svg+=label(26,y(n)+4,n,"end")});
  c.visits.forEach((v,i)=>{svg+=label(x(i),150,dateLabels[i],i===3?'end':'middle')});
  modes.forEach((mode,m)=>{
    const pts=c.visits.map((v,i)=>[x(i),y(v[k][m])]);
    svg+='<polyline fill="none" stroke="'+colors[m]+'" stroke-width="3" '+(m?'stroke-dasharray="6 4"':'')+' points="'+pts.map(a=>a.join(',')).join(' ')+'"/>';
    pts.forEach(([a,b])=>{svg+='<circle cx="'+a+'" cy="'+b+'" r="3.5" fill="'+colors[m]+'"/>'});
  });
  chart("sample-trend","Four visits, correct out of 20. Exact values follow in the data table.",svg);
}
function render(){
 const c=cases[select.selectedIndex], k=Number($("sample-skill").value),latest=c.visits.at(-1);
 trendChart(c,k);
 $("sample-skill-name").textContent = skills[k] + " · " + definitions[k];
 $("sample-scenario").textContent = c.name.slice(4);
 $("sample-dates").innerHTML = '<th>Cue</th>' + dateLabels.map(d=>'<th>'+d+'</th>').join('') + '<th>Gain</th>';
 const start = c.visits[0][c.focus][c.modality];
 const end = latest[c.focus][c.modality];
 $("sample-gain").textContent = (end-start) + " more correct responses out of 20";
 $("sample-summary").textContent = definitions[c.focus] + " was the practice focus. On the " + modes[c.modality].toLowerCase() + " task, the learner went from " + start + " correct responses in September 2025 to " + end + " in March 2026.";
 const pair=latest[c.focus], delta=pair[1]-pair[0];
 $("sample-comparison").textContent = "For " + skills[c.focus].toLowerCase() + ", the learner answered " + pair[0] + " listening items and " + pair[1] + " visual items correctly. " + (delta===0 ? "The two scores were equal." : "That is " + Math.abs(delta) + " more correct with " + (delta>0?"visual":"listening") + " cues.");

 $("sample-history").innerHTML=modes.map((m,j)=>'<tr><th>'+m+'</th>'+c.visits.map(v=>'<td>'+v[k][j]+'</td>').join('')+'<td>'+fmt(latest[k][j]-c.visits[0][k][j])+'</td></tr>').join('');
 const counts=[0,0,0,0];
 $("sample-profile").innerHTML = latest.map((pair,i) => {
   const bars = pair.map((score,m) => {
     counts[band(score)]++;
     return '<div class="pair-row"><span>'+modes[m]+'</span><span class="pair-track"><i style="width:'+score*5+'%;background:'+colors[m]+'"></i></span><strong>'+score+'/20</strong><span>'+bands[band(score)]+'</span></div>';
   }).join("");
   return '<div class="pair-skill"><b>'+skills[i]+'</b> · '+definitions[i]+bars+'</div>';
 }).join("");
 $("sample-bands").textContent=bands.map((b,i)=>b+': '+counts[i]).join(' · ');
 $("sample-practice").textContent=c.practice;$("sample-exercise").textContent=c.exercise;
 const f=c.focus,m=c.modality;
 $("sample-target").textContent=modes[m]+' / '+skills[f].toLowerCase()+' scored '+latest[f][m]+' of 20 on March 17, 2026, a focus selected for this illustrative practice plan.';
 const lang=$("sample-language").value;const narrative=$("sample-narrative");
 narrative.lang=lang;narrative.textContent=c[lang][Number($("sample-level").value)];
}
skills.forEach((s,i)=>$("sample-skill").add(new Option(s,i)));
select.onchange=()=>{$("sample-skill").value=cases[select.selectedIndex].focus;render()};
["sample-skill","sample-language","sample-level"].forEach(id=>$(id).onchange=render);
select.onchange();
$("sample-download").onclick=()=>{
 const rows=["case,referral_context,assessment_date,skill,cue,correct,trials,correct_response_range"];
 cases.forEach(c=>c.visits.forEach((v,i)=>v.forEach((p,k)=>p.forEach((n,m)=>rows.push([c.id,c.name.split(' · ')[1],dates[i],skills[k],modes[m],n,20,bands[band(n)]].join(','))))));
 const url=URL.createObjectURL(new Blob([rows.join('\r\n')],{type:'text/csv;charset=utf-8'}));
 const a=document.createElement('a');a.href=url;a.download='fictional-assessment-visits.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
};
$("sample-print").onclick = () => window.print();
window.addEventListener("beforeprint", () => {
 if (!$("report-pages").closest("dialog").open || $("print-report")) return;
 const copy = document.createElement("div");
 copy.id = "print-report";
 copy.className = "report-dialog";
 copy.innerHTML = $("report-pages").innerHTML;
 document.body.append(copy);
});
window.addEventListener("afterprint", () => $("print-report")?.remove());
if (location.hash === '#sample-report') document.querySelector('[data-open-report]').click();
})();
