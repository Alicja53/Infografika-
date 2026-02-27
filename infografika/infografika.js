 const questions = [
        { t: "Kto przeprowadził pierwszą praktyczną destylację ropy?", a: ["Ignacy Łukasiewicz", "Maria Skłodowska-Curie", "Dmitrij Mendelejew"], c: 0 },
        { t: "Która frakcja ma najkrótsze łańcuchy węglowe (C1-C4)?", a: ["Mazut", "Gazy rafineryjne", "Olej napędowy"], c: 1 },
        { t: "Co dzieje się z temperaturą wrzenia wraz ze wzrostem liczby atomów węgla?", a: ["Maleje", "Nie zmienia się", "Wzrasta"], c: 2 },
        { t: "Proces rozdzielania mieszaniny na składniki o różnych temp. wrzenia to:", a: ["Destylacja", "Sedymentacja", "Krystalizacja"], c: 0 }
    ];
    let cur = 0;

    function loadQ() {
        const q = questions[cur];
        document.getElementById('q-text').innerText = q.t;
        const opts = document.getElementById('q-options');
        opts.innerHTML = '';
        q.a.forEach((o,i)=>{
            const b=document.createElement('button');
            b.className='quiz-opt';
            b.innerText=o;
            b.onclick=()=>{
                const f=document.getElementById('q-feedback');
                if(i===q.c){
                    f.innerHTML="STATUS: POPRAWNY. ŁADOWANIE...";
                    f.style.color="var(--accent)";
                    setTimeout(()=>{ cur=(cur+1)%questions.length; f.innerHTML=''; loadQ(); }, 1500);
                } else{
                    f.innerHTML="STATUS: BŁĄD DANYCH. SPRÓBUJ PONOWNIE."; 
                    f.style.color="var(--error)";
                }
            };
            opts.appendChild(b);
        });
    }
    loadQ();

    function toggleNote(){
        const note=document.getElementById("lab-note");
        note.style.display=note.style.display==="block"?"none":"block";
    }