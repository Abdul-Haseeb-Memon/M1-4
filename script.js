"use strict";
let myName = document.getElementById("name");
let desig = document.getElementById("desig");
let Phone = document.getElementById("Phone");
let email = document.getElementById("email");
let add = document.getElementById("add");
let pass1 = document.getElementById("pass1");
let uni = document.getElementById("uni");
let deg = document.getElementById("deg");
let pass2 = document.getElementById("pass2");
let uni2 = document.getElementById("uni2");
let deg2 = document.getElementById("deg2");
let Skills1 = document.getElementById("Skills1");
let Skills2 = document.getElementById("Skills2");
let Skills3 = document.getElementById("Skills3");
let Skills4 = document.getElementById("Skills4");
let Skills5 = document.getElementById("Skills5");
let Skills6 = document.getElementById("Skills6");
let lang = document.getElementById("lang");
let lang2 = document.getElementById("lang2");
let about = document.getElementById("about");
let styear = document.getElementById("styear");
let endyear = document.getElementById("endyear");
let Campany = document.getElementById("Campany");
let comlocation = document.getElementById("comlocation");
let Jobtitle = document.getElementById("Jobtitle");
let Achi1 = document.getElementById("Achi1");
let Achi2 = document.getElementById("Achi2");
let Achi3 = document.getElementById("Achi3");
let Achi4 = document.getElementById("Achi4");
let details = document.getElementById("details");
let pic = document.getElementById("pic");
let submitBtn = document.getElementById("submitBtn");
let form = document.getElementById("form");
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("name", myName.value);
    localStorage.setItem("desig", desig.value);
    localStorage.setItem("Phone", Phone.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("add", add.value);
    localStorage.setItem("pass1", pass1.value);
    localStorage.setItem("uni", uni.value);
    localStorage.setItem("deg", deg.value);
    localStorage.setItem("pass2", pass2.value);
    localStorage.setItem("uni2", uni2.value);
    localStorage.setItem("deg2", deg2.value);
    localStorage.setItem("Skills1", Skills1.value);
    localStorage.setItem("Skills2", Skills2.value);
    localStorage.setItem("Skills3", Skills3.value);
    localStorage.setItem("Skills4", Skills4.value);
    localStorage.setItem("Skills5", Skills5.value);
    localStorage.setItem("Skills6", Skills6.value);
    localStorage.setItem("lang", lang.value);
    localStorage.setItem("lang2", lang2.value);
    localStorage.setItem("about", about.value);
    localStorage.setItem("styear", styear.value);
    localStorage.setItem("endyear", endyear.value);
    localStorage.setItem("Campany", Campany.value);
    localStorage.setItem("comlocation", comlocation.value);
    localStorage.setItem("Jobtitle", Jobtitle.value);
    localStorage.setItem("Achi1", Achi1.value);
    localStorage.setItem("Achi2", Achi2.value);
    localStorage.setItem("Achi3", Achi3.value);
    localStorage.setItem("Achi4", Achi4.value);
    localStorage.setItem("details", details.value);
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem("profile_pic", textImg);
        });
        reader.readAsDataURL(pic.files[0]);
    }
    window.location.href = "./resume/resume.html";
});
