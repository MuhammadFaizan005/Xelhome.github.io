// For menu
function openmenu(){
    document.getElementById("menu_bar").addEventListener('click',() =>{
    document.getElementById("nav_div").classList.toggle('menu_slide');
    document.getElementById("menu_bar").classList.toggle('rotate_menu');
  });
}
// For menu
function Drowdown(){
document.getElementById("ddm_tech").className = "dropdown_hov";
}
function dropup(){
document.getElementById("ddm_tech").className = "dropdown_none";
}
function Drowdowncore(){
document.getElementById("ddm_core").className = "dropdown_hov";
}
function dropupcore(){
document.getElementById("ddm_core").className = "dropdown_none";
}
//Hover Contant
function Info_cont_hover1(){
    document.getElementById("Info_cont_id1").addEventListener('click',() =>{
    document.getElementById("Info_cont_id1").classList.toggle('Info_cont_hover');
  });
}
function Info_cont_hover2(){
    document.getElementById("Info_cont_id2").addEventListener('click',() =>{
    document.getElementById("Info_cont_id2").classList.toggle('Info_cont_hover');
  });
}
function Info_cont_hover3(){
    document.getElementById("Info_cont_id3").addEventListener('click',() =>{
    document.getElementById("Info_cont_id3").classList.toggle('Info_cont_hover');
  });
}
function row_result_hover1(){
  document.getElementById("row_result_hover1").addEventListener('click',() =>{
  document.getElementById("row_result_hover1").classList.toggle('row_result_hover');
  });
}
function row_result_hover2(){
  document.getElementById("row_result_hover2").addEventListener('click',() =>{
  document.getElementById("row_result_hover2").classList.toggle('row_result_hover');
  });
}
function row_result_hover3(){
  document.getElementById("row_result_hover3").addEventListener('click',() =>{
  document.getElementById("row_result_hover3").classList.toggle('row_result_hover');
  });
}
// Home Page Color Changing images
function settopcont1(){
  document.getElementById("top_mid_imgs1").setAttribute('src', 'images/coding.png');
}
function reset1(){
  document.getElementById("top_mid_imgs1").setAttribute('src', 'images/coding2.png');
}

function settopcont2(){
  document.getElementById("top_mid_imgs2").setAttribute('src', 'images/mobile1.png');
}
function reset2(){
  document.getElementById("top_mid_imgs2").setAttribute('src', 'images/mobile.png');
}

function settopcont3(){
  document.getElementById("top_mid_imgs3").setAttribute('src', 'images/ux1.png');
}
function reset3(){
  document.getElementById("top_mid_imgs3").setAttribute('src', 'images/ux.png');
}

function settopcont4(){
  document.getElementById("top_mid_imgs4").setAttribute('src', 'images/rank1.png');
}
function reset4(){
  document.getElementById("top_mid_imgs4").setAttribute('src', 'images/rank.png');
}

function settopcont5(){
  document.getElementById("top_mid_imgs5").setAttribute('src', 'images/chart1.png');
}
function reset5(){
  document.getElementById("top_mid_imgs5").setAttribute('src', 'images/chart.png');
}

function settopcont6(){
  document.getElementById("top_mid_imgs6").setAttribute('src', 'images/laptop1.png');
}
function reset6(){
  document.getElementById("top_mid_imgs6").setAttribute('src', 'images/laptop.png');
}
// About Us Page Team
function hoverslide(){
document.getElementById("Social_team").className = "slide_team_social";
document.getElementById("M_t").className = "member-shadow";
}
function hoverslideback(){
document.getElementById("Social_team").className = "slideback_team_social";
document.getElementById("M_t").className = "Member-team";
}
function hoverslide2(){
document.getElementById("Social_team2").className = "slide_team_social";
document.getElementById("M_t2").className = "member-shadow";
}
function hoverslideback2(){
document.getElementById("Social_team2").className = "slideback_team_social";
document.getElementById("M_t2").className = "Member-team";
}
function hoverslide3(){
document.getElementById("Social_team3").className = "slide_team_social";
document.getElementById("M_t3").className = "member-shadow";
}
function hoverslideback3(){
document.getElementById("Social_team3").className = "slideback_team_social";
document.getElementById("M_t3").className = "Member-team";
}
//About Us Location Hover Down
function hoverslideloaction(){
document.getElementById("bwp_slide_js").className = "bwp_slide_down";
document.getElementById("M_l1").className = "Main_location_About_linear1";
}
function hoverslideloactionback(){
document.getElementById("bwp_slide_js").className = "bwpjs";
document.getElementById("M_l1").className = "Main_location_About_linear";
}

openmenu();
Info_cont_hover1();
Info_cont_hover2();
Info_cont_hover3();
row_result_hover1();
row_result_hover2();
row_result_hover3();
