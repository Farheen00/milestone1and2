//Toogle buttons Fucntions for Different Sections..
var toggleEducation = document.getElementById('toggle-education');
var educationSection = document.getElementById('educationList');
toggleEducation.addEventListener('click', function () {
    if (educationSection.style.display === 'none') {
        educationSection.style.display = 'block';
        toggleEducation.textContent = '-';
    }
    else {
        educationSection.style.display = 'none';
        toggleEducation.textContent = '+';
    }
});
var toggleSkills = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skillsList');
toggleSkills.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleSkills.textContent = '-';
    }
    else {
        skillsSection.style.display = 'none';
        toggleSkills.textContent = '+';
    }
});
