let ref_section = document.getElementById('ref');
let ref_btn = document.getElementById('ref_btn');

ref_btn?.addEventListener('click', ()=>{
    ref_section!.classList.toggle('hide')
})


window.addEventListener("load", () => {

 let name = localStorage.getItem("name");
 let desig = localStorage.getItem("desig");
 let Phone = localStorage.getItem("Phone");
 let email = localStorage.getItem("email");
 let add = localStorage.getItem("add");
 let pass1 = localStorage.getItem("pass1");
 let uni = localStorage.getItem("uni");
 let deg = localStorage.getItem("deg");
 let pass2 = localStorage.getItem("pass2");
 let uni2 = localStorage.getItem("uni2");
 let deg2 = localStorage.getItem("deg2");
 let Skills1 = localStorage.getItem("Skills1");
 let Skills2 = localStorage.getItem("Skills2");
 let Skills3 = localStorage.getItem("Skills3");
 let Skills4 = localStorage.getItem("Skills4");
 let Skills5 = localStorage.getItem("Skills5");
 let Skills6 = localStorage.getItem("Skills6");
 let lang = localStorage.getItem("lang");
 let lang2 = localStorage.getItem("lang2");
 let about = localStorage.getItem("about");
 let styear = localStorage.getItem("styear");
 let endyear = localStorage.getItem("endyear");
 let Campany = localStorage.getItem("Campany");
 let comlocation = localStorage.getItem("comlocation");
 let Jobtitle = localStorage.getItem("Jobtitle");
 let Achi1 = localStorage.getItem("Achi1");
 let Achi2 = localStorage.getItem("Achi2");
 let Achi3 = localStorage.getItem("Achi3");
 let Achi4 = localStorage.getItem("Achi4");
 let details = localStorage.getItem("details");
 let picture = localStorage.getItem("profile_pic")


let resName: any = document.getElementById('resName');
  resName.textContent = localStorage.getItem("name");

let resDesig: any = document.getElementById('resDesig');
  resDesig.textContent = localStorage.getItem("desig");

let resPhone: any = document.getElementById('resPhone');
  resPhone.textContent = localStorage.getItem("Phone");

let resEmail: any = document.getElementById('resEmail');
  resEmail.textContent = localStorage.getItem("email");

let resAddress: any = document.getElementById('resAddress');
  resAddress.textContent = localStorage.getItem("add");

let resMatric: any = document.getElementById('resMatric');
  resMatric.textContent = localStorage.getItem("pass1");

let resMatricLocation: any = document.getElementById('resMatricLocation');
  resMatricLocation.textContent = localStorage.getItem("uni");


let resMatricDeg: any = document.getElementById('resMatricDeg');
  resMatricDeg.textContent = localStorage.getItem("deg");

let resIntermadiateYear: any = document.getElementById('resIntermadiateYear');
  resIntermadiateYear.textContent = localStorage.getItem("pass2");

let resIntermadiateLocation: any = document.getElementById('resIntermadiateLocation');
  resIntermadiateLocation.textContent = localStorage.getItem("uni2");

let resIntermadiateDeg: any = document.getElementById('resIntermadiateDeg');
  resIntermadiateDeg.textContent = localStorage.getItem("deg2");

let resSkills1: any = document.getElementById('resSkills1');
  resSkills1.textContent = localStorage.getItem("Skills1");

let resSkills2: any = document.getElementById('resSkills2');
  resSkills2.textContent = localStorage.getItem("Skills2");

let resSkills3: any = document.getElementById('resSkills3');
  resSkills3.textContent = localStorage.getItem("Skills3");

let resSkills4: any = document.getElementById('resSkills4');
  resSkills4.textContent = localStorage.getItem("Skills4");

let resSkills5: any = document.getElementById('resSkills5');
  resSkills5.textContent = localStorage.getItem("Skills5");

let resSkills6: any = document.getElementById('resSkills6');
  resSkills6.textContent = localStorage.getItem("Skills6");

let resLan1: any = document.getElementById('resLan1');
  resLan1.textContent = localStorage.getItem("lang");

let resLan2: any = document.getElementById('resLan2');
  resLan2.textContent = localStorage.getItem("lang2");

let resAbout: any = document.getElementById('resAbout');
  resAbout.textContent = localStorage.getItem("about");

let resStartDate: any = document.getElementById('resStartDate');
  resStartDate.textContent = localStorage.getItem("styear");

let resEndDate: any = document.getElementById('resEndDate');
  resEndDate.textContent = localStorage.getItem("endyear");

let resCompany: any =document.getElementById('resCompany');
  resCompany.textContent = localStorage.getItem("Campany");

let resCompanyLocation: any = document.getElementById('resCompanyLocation');
  resCompanyLocation.textContent = localStorage.getItem("comlocation");

let resjobTitle:any = document.getElementById('resjobTitle');
  resjobTitle.textContent = localStorage.getItem("Jobtitle");

let resAch1: any = document.getElementById('resAch1');
  resAch1.textContent = localStorage.getItem("Achi1");

let resAch2: any = document.getElementById('resAch2');
  resAch2.textContent = localStorage.getItem("Achi2");

let resAch3: any = document.getElementById('resAch3');
  resAch3.textContent = localStorage.getItem("Achi3");

let resAch4: any = document.getElementById('resAch4');
  resAch4.textContent = localStorage.getItem("Achi4");

let resJobDesc: any = document.getElementById('resJobDesc');
  resJobDesc.textContent = localStorage.getItem("details");

let resImg: any = document.getElementById('resImg');
  resImg.src = picture;

});


// -------------------print Section-----------------------

let print_btn = document.getElementById('print_btn');

print_btn?.addEventListener('click', ()=>{
    window.print()
});


// -------------------edit_btn-----------------------

let edit_btn = document.getElementById('edit_btn');

edit_btn?.addEventListener("click", ()=>{
  window.history.back()
})