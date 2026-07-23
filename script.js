import { db } from "./firebase.js";
import { ref, update } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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

// ID Activate Function (Firebase और LocalStorage दोनों के लिए)
window.activateID = function() {
    let user = JSON.parse(localStorage.getItem("loginUser"));
    
    if (!user || !user.firebaseKey) {
        alert("यूजर की जानकारी नहीं मिली!");
        return;
    }

    user.status = "Active";
    localStorage.setItem("loginUser", JSON.stringify(user));
    document.getElementById("status").innerHTML = "Active";

    // Firebase डेटाबेस में स्टेटस अपडेट करें
    const userRef = ref(db, 'users/' + user.firebaseKey);
    update(userRef, {
        status: "Active"
    }).then(() => {
        alert("✅ ID Activated Successfully");
    }).catch((error) => {
        alert("त्रुटि: " + error.message);
    });
};

// लाइव डेट और टाइम अपडेट करने के लिए
function updateDateTime() {
    const now = new Date();
    const options = { dateStyle: 'full', timeStyle: 'medium' };
    const dateTimeString = now.toLocaleString('hi-IN', options);
    
    const dtElement = document.getElementById('datetime-display');
    if (dtElement) {
        dtElement.innerText = dateTimeString;
    }
}
setInterval(updateDateTime, 1000);
updateDateTime();
