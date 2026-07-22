let user = JSON.parse(localStorage.getItem("loginUser"));

if(user){

    document.getElementById("name").innerHTML = user.name || "User";

    document.getElementById("id").innerHTML = user.gwiid || "0";

    document.getElementById("rank").innerHTML = user.rank || "0";


    document.getElementById("today").innerHTML =
    user.todayIncome || "0";


    document.getElementById("week").innerHTML =
    user.weekIncome || "0";


    document.getElementById("nw").innerHTML =
    user.nwIncome || "0";


    document.getElementById("bonus").innerHTML =
    user.levelBonus || "0";


    document.getElementById("total").innerHTML =
    user.totalIncome || "0";


    if(user.photo){

        document.getElementById("photo").src = user.photo;

    }

}
else{

    document.getElementById("rank").innerHTML = "0";

}
