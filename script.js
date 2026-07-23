let user = JSON.parse(localStorage.getItem("loginUser"));


if(user){

document.getElementById("name").innerHTML = user.name || "User";

document.getElementById("id").innerHTML = user.gwiid || "0";

document.getElementById("rank").innerHTML = user.rank || "0";

document.getElementById("status").innerHTML = user.status || "Inactive";


document.getElementById("today").innerHTML = user.todayIncome || "0";

document.getElementById("week").innerHTML = user.weekIncome || "0";

document.getElementById("nw").innerHTML = user.nwIncome || "0";

document.getElementById("bonus").innerHTML = user.levelBonus || "0";

document.getElementById("total").innerHTML = user.totalIncome || "0";


if(user.photo){

document.getElementById("photo").src = user.photo;

}

}



// ID Activate Function

function activateID(){

let user = JSON.parse(localStorage.getItem("loginUser")) || {};


user.status = "Active";


localStorage.setItem("loginUser", JSON.stringify(user));


document.getElementById("status").innerHTML = "Active";


alert("✅ ID Activated Successfully");

}
// लाइव डेट और टाइम अपडेट करने के लिए
function updateDateTime() {
    const now = new Date();
    const options = { dateStyle: 'full', timeStyle: 'medium' };
    const dateTimeString = now.toLocaleString('hi-IN', options);
    
    // यह मानकर कि हम HTML में एक नया एलिमेंट जोड़ेंगे
    const dtElement = document.getElementById('datetime-display');
    if (dtElement) {
        dtElement.innerText = dateTimeString;
    }
}
setInterval(updateDateTime, 1000);
updateDateTime();

// आईडी एक्टिवेशन का फंक्शन
function activateID() {
    // यहाँ पर हम Firestore डेटाबेस से आईडी एक्टिवेट करने का कोड जोड़ेंगे
    alert("आईडी एक्टिवेट करने की प्रक्रिया शुरू हो गई है!");
}
