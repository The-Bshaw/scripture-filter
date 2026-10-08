const SOURCE = [{"title":"Grace for the Guilty","date":"May 24, 2026","preacher":"Jonathan Miller","refs":[["Matthew","9:9","9:13"],["Psalms","51:1","51:12"]]},{"title":"The God Who Sees","date":"May 17, 2026","preacher":"Ben Harris","refs":[["Matthew","9:20","9:22"],["Genesis","16:7","16:14"]]},{"title":"When Faith Feels Small","date":"May 10, 2026","preacher":"Sam Johnson","refs":[["Matthew","12:1","12:1"],["1 Samuel","17:32","17:37"]]},{"title":"Anchored in the Storm","date":"May 3, 2026","preacher":"Taylor Landry","refs":[["Psalms","46:1","46:11"],["Philippians","4:4","4:7"]]},{"title":"The Shepherd’s Voice","date":"Apr 26, 2026","preacher":"Thomas McGesterson","refs":[["Psalms","23:1","23:6"],["Philippians","2:5","2:11"]]},{"title":"A Table in the Wilderness","date":"Apr 19, 2026","preacher":"Jonathan Miller","refs":[["Exodus","16:1","16:18"],["James","1:16","1:17"]]},{"title":"Hope That Does Not Disappoint","date":"Apr 12, 2026","preacher":"Ben Harris","refs":[["Lamentations","3:21","3:24"],["Philippians","1:6","1:6"]]},{"title":"The Power of a Praying Church","date":"Apr 5, 2026","preacher":"Sam Johnson","refs":[["Matthew","18:18","18:20"],["2 Chronicles","20:1","20:23"]]},{"title":"Walking by Faith","date":"Mar 29, 2026","preacher":"Taylor Landry","refs":[["Genesis","12:1","12:9"],["1 Peter","1:6","1:9"]]},{"title":"The Joy of Surrender","date":"Mar 22, 2026","preacher":"Thomas McGesterson","refs":[["Psalms","40:6","40:8"],["1 Peter","4:1","4:2"]]},{"title":"When God Seems Silent","date":"Mar 15, 2026","preacher":"Jonathan Miller","refs":[["Psalms","13:1","13:6"],["1 Peter","2:21","2:25"]]},{"title":"Built on the Rock","date":"Mar 8, 2026","preacher":"Ben Harris","refs":[["Joshua","1:6","1:9"],["Matthew","7:24","7:27"]]},{"title":"The Way of Wisdom","date":"Mar 1, 2026","preacher":"Sam Johnson","refs":[["Proverbs","3:1","3:12"],["Matthew","7:24","7:27"]]},{"title":"More Than Conquerors","date":"Feb 22, 2026","preacher":"Taylor Landry","refs":[["Psalms","44:1","44:8"],["1 Peter","5:8","5:11"]]},{"title":"The Gospel Changes Everything","date":"Feb 15, 2026","preacher":"Thomas McGesterson","refs":[["Isaiah","61:1","61:4"],["Philippians","1:27","1:30"]]},{"title":"The Narrow Way","date":"Feb 8, 2026","preacher":"Jonathan Miller","refs":[["Proverbs","4:10","4:19"],["Philippians","3:12","3:21"]]},{"title":"The Freedom of Forgiveness","date":"Feb 1, 2026","preacher":"Ben Harris","refs":[["Joshua","24:14","24:18"],["Colossians","3:12","3:17"]]},{"title":"The Word Made Flesh","date":"Jan 25, 2026","preacher":"Sam Johnson","refs":[["Isaiah","9:2","9:7"],["1 Peter","1:20","1:25"]]},{"title":"The Hope of Glory","date":"Jan 18, 2026","preacher":"Taylor Landry","refs":[["Isaiah","60:1","60:3"],["John","17:20","17:26"]]},{"title":"God With Us","date":"Jan 11, 2026","preacher":"Thomas McGesterson","refs":[["Isaiah","7:14","7:14"],["James","4:8","4:8"]]},{"title":"The Wisdom of the Cross","date":"Jan 4, 2026","preacher":"Jonathan Miller","refs":[["Isaiah","53:1","53:12"],["John","19:16","19:30"]]},{"title":"Follow Me","date":"Dec 28, 2025","preacher":"Jonathan Miller","refs":[["1 Kings","19:19","19:21"],["John","21:15","21:19"]]},{"title":"The Battle Belongs to the Lord","date":"Dec 21, 2025","preacher":"Jonathan Miller","refs":[["1 Samuel","17:45","17:47"],["James","4:6","4:10"]]},{"title":"The Way, the Truth, and the Life","date":"Dec 14, 2025","preacher":"","refs":[["Isaiah","35:8","35:10"],["John","14:1","14:7"]]},{"title":"The Father’s House","date":"Dec 7, 2025","preacher":"","refs":[["Psalms","27:4","27:6"],["James","1:17","1:18"]]},{"title":"Great Is Thy Faithfulness","date":"Nov 30, 2025","preacher":"Jonathan Miller","refs":[["Lamentations","3:21","3:26"],["John","10:27","10:30"]]},{"title":"The Church That Prays","date":"Nov 23, 2025","preacher":"Jonathan Miller","refs":[["Nehemiah","1:4","1:11"],["John","17:6","17:26"]]},{"title":"Restored by Grace","date":"Nov 16, 2025","preacher":"","refs":[["Joel","2:12","2:27"],["James","5:13","5:20"]]},{"title":"The Promise of Peace","date":"Nov 9, 2025","preacher":"Ricky Hughes","refs":[["Isaiah","26:1","26:4"],["Matthew","11:28","11:30"]]},{"title":"The Heart of a Servant","date":"Nov 2, 2025","preacher":"","refs":[["Isaiah","42:1","42:9"],["Philippians","2:1","2:11"]]},{"title":"Light in the Darkness","date":"Oct 26, 2025","preacher":"Ricky Hughes","refs":[["Isaiah","9:1","9:7"],["1 Peter","2:9","2:12"]]},{"title":"The Joy of the Lord","date":"Oct 19, 2025","preacher":"Jonathan Miller","refs":[["Joshua","21:43","21:45"],["Philippians","4:4","4:9"]]},{"title":"The Gospel at Home","date":"Oct 12, 2025","preacher":"Jonathan Miller","refs":[["Joshua","24:14","24:15"],["Ephesians","6:1","6:4"]]},{"title":"Living as Exiles","date":"Oct 5, 2025","preacher":"Jonathan Miller","refs":[["Joshua","5:10","5:12"],["1 Peter","2:9","2:12"]]},{"title":"Enjoying the Joy that Lasts Forever","date":"Sep 28, 2025","preacher":"Ben Harris","refs":[["Psalms","16:5","16:11"],["Ezekiel","1:2","1:4"]]}];

const BOOK_ORDER=["Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah","Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"];

function phpSerializeArray(values){
  let out=`a:${values.length}:{`;
  values.forEach((v,i)=>{
    const len=new TextEncoder().encode(v).length;
    out+=`i:${i};s:${len}:"${v}";`;
  });
  return out+"}";
}
function storedField(values){return values.length===1?values[0]:phpSerializeArray(values);}
const DB=SOURCE.map((s,idx)=>{
  const books=s.refs.map(r=>r[0]),starts=s.refs.map(r=>r[1]),ends=s.refs.map(r=>r[2]);
  return {id:idx+1,title:s.title,date:s.date,preacher:s.preacher,book:storedField(books),start_chapter:storedField(starts),end_chapter:storedField(ends)};
});
function parsePhpArray(value){
  if(typeof value!=="string"||!value.startsWith("a:")) return [value];
  const vals=[],re=/s:\d+:"([^"]*)";/g; let m;
  while((m=re.exec(value))!==null) vals.push(m[1]);
  return vals;
}
function normalizeField(value){
  if(Array.isArray(value)) return value;
  if(typeof value==="string"&&value.startsWith("a:")) return parsePhpArray(value);
  return [value];
}
function parsePos(v){
  if(!v) return {chapter:Number.MAX_SAFE_INTEGER,verse:Number.MAX_SAFE_INTEGER};
  const [c,verse]=String(v).split(":");
  return {chapter:parseInt(c,10)||0,verse:verse==null?0:(parseInt(verse,10)||0)};
}
function matchingRef(record,selectedBook){
  const books=normalizeField(record.book),starts=normalizeField(record.start_chapter),ends=normalizeField(record.end_chapter);
  const index=books.indexOf(selectedBook);
  if(index<0) return null;
  const start=parsePos(starts[index]),end=parsePos(ends[index]||starts[index]);
  return {index,startRaw:starts[index],endRaw:ends[index]||starts[index],startChapter:start.chapter,startVerse:start.verse,endChapter:end.chapter,endVerse:end.verse};
}
function formatRange(book,ref){
  const start=ref.startRaw,end=ref.endRaw;
  if(!end||end===start) return `${book} ${start}`;
  const [sc,sv]=start.split(":"),[ec,ev]=end.split(":");
  return sc===ec?`${book} ${sc}:${sv}–${ev}`:`${book} ${start}–${end}`;
}
function allRefs(record){
  const books=normalizeField(record.book),starts=normalizeField(record.start_chapter),ends=normalizeField(record.end_chapter);
  return books.map((b,i)=>formatRange(b,{startRaw:starts[i],endRaw:ends[i]||starts[i]})).join(", ");
}
function dateValue(s){return new Date(s).getTime()||0;}
function sortForBook(a,b,book){
  const A=matchingRef(a,book),B=matchingRef(b,book);
  return A.startChapter-B.startChapter||A.startVerse-B.startVerse||A.endChapter-B.endChapter||A.endVerse-B.endVerse||dateValue(a.date)-dateValue(b.date);
}
const counts=new Map();
DB.forEach(r=>{[...new Set(normalizeField(r.book))].forEach(b=>counts.set(b,(counts.get(b)||0)+1));});
const select=document.getElementById("bookSelect");
BOOK_ORDER.filter(b=>counts.has(b)).forEach(b=>{
  const o=document.createElement("option");
  o.value=b;o.textContent=`${b} (${counts.get(b)})`;
  if(b==="James") o.selected=true;
  select.appendChild(o);
});
function esc(s){
  return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
function render(book){
  const matches=DB.filter(r=>matchingRef(r,book)).sort((a,b)=>sortForBook(a,b,book));
  document.getElementById("heading").textContent=`Sermons from ${book}`;
  const results=document.getElementById("results");
  const chapterJumps=document.getElementById("chapterJumps");
  if(!matches.length){results.innerHTML='<div class="empty">No sermons found.</div>';chapterJumps.innerHTML="";return;}
  const groups=new Map();
  matches.forEach(r=>{
    const ref=matchingRef(r,book);
    if(!groups.has(ref.startChapter)) groups.set(ref.startChapter,[]);
    groups.get(ref.startChapter).push([r,ref]);
  });
  const chapterNumbers=[...groups.keys()];
  chapterJumps.innerHTML=`<ul class="chapter-jumps">${chapterNumbers.map(ch=>`<li><a href="#chapter-${ch}">Chapter ${ch}</a></li>`).join("")}</ul>`;
  let html="";
  groups.forEach((items,chapter)=>{
    html+=`<section class="chapter" id="chapter-${chapter}"><h2 class="chapter-head">${esc(book)} ${chapter}</h2>`;
    items.forEach(([r,ref])=>{
      const raw={book:r.book,start_chapter:r.start_chapter,end_chapter:r.end_chapter,matched_index:ref.index};
      html+=`
      <article class="sermon">
        <div class="ref">${esc(formatRange(book,ref).replace(book+" ",""))}</div>
        <div class="sermon-main">
          <div class="title">${esc(r.title)}</div>
          <div class="meta">${esc(r.date)}${r.preacher?` · Preacher: <b>${esc(r.preacher)}</b>`:""}<br>
          Scripture: ${esc(allRefs(r))}</div>
          <button class="raw-toggle" type="button">Show raw Herald-style fields</button>
          <pre class="raw">${esc(JSON.stringify(raw,null,2))}</pre>
        </div>
        <div class="actions">
          <a class="action-btn watch" href="#" onclick="return false;">Watch</a>
          <a class="action-btn listen" href="#" onclick="return false;">Listen</a>
        </div>
      </article>`;
    });
    html+="</section>";
  });
  results.innerHTML=html;
  results.querySelectorAll(".raw-toggle").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const raw=btn.nextElementSibling;
      raw.classList.toggle("open");
      btn.textContent=raw.classList.contains("open")?"Hide raw Herald-style fields":"Show raw Herald-style fields";
    });
  });
}
document.addEventListener("click",e=>{
  const link=e.target.closest(".chapter-jumps a");
  if(!link) return;
  const target=document.querySelector(link.getAttribute("href"));
  if(!target) return;
  e.preventDefault();
  const top=target.getBoundingClientRect().top+window.pageYOffset-20;
  window.scrollTo({top,behavior:"smooth"});
});
select.addEventListener("change",e=>render(e.target.value));
render(select.value);