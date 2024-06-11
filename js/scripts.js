const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});
// function iniciarMap(){
//     var coord = {lat:-34.5956145 ,lng: -58.4431949};
//     var map = new google.maps.Map(document.getElementById('map'),{
//         zoom: 10,
//         center: coord
//     });
//     var marker = new google.maps.Marker({
//         position: coord,
//         map: map
//     });
// }


function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}



function showContent(sectionId) {
    // Ocultar todas las secciones
    var sections = document.getElementsByClassName('content');
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Mostrar la sección seleccionada
    let selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}