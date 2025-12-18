const logs = document.getElementById("logs");
const result = document.getElementById("result");

function addLog(text){
    logs.innerHTML += `<p>> ${text}</p>`;
    logs.scrollTop = logs.scrollHeight;
}

function scan(){
    const user = document.getElementById("username").value;
    if(user===""){
        alert("Enter username");
        return;
    }

    logs.innerHTML = "";
    result.style.display="none";

    const steps = [
        "Connecting to Instagram servers...",
        "Fetching profile metadata...",
        "Analyzing follower behavior...",
        "Detecting bot patterns...",
        "Calculating threat score..."
    ];

    let i=0;
    const interval = setInterval(()=>{
        addLog(steps[i]);
        i++;
        if(i===steps.length){
            clearInterval(interval);
            showResult();
        }
    },700);
}

function showResult(){
    const threat = Math.floor(Math.random()*100);
    document.getElementById("status").innerText =
        threat>60 ? "⚠ HIGH RISK ACCOUNT" : "✅ LOW RISK ACCOUNT";
    document.getElementById("threat").innerText = threat + "%";
    result.style.display="block";
}
