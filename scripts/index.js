function home()
{
    document.getElementById("main-box").innerHTML = (
        '<div class="box-name">' +
        '<h2>Hi! You are on my Portfolio Page!<br>' +
        'Here you`ll find everything about me and my projects</h2>' +
        '<h2>My name is <span class="name"><strong>Kacper Trzosinski</strong></span></h2>' +
        '</div>'
    )
}
function aboutme()
{
    document.getElementById("main-box").innerHTML = (
        '<div class="box-aboutme">' +
        '<h2><span class="aboutme-head">About me:</span><br>' +
        '<p>I`m an IT and robotics enthusiast, I like coding, video games and everything around it!</p>' +
        '</div>'
    )
}
function skills()
{
    document.getElementById("main-box").innerHTML = (
        '<div class="box-skills">' +
        '<h2><span class="skills-head">Skills:</span><br>' +
        '<p>' +
        'C++ <progress value="20" max="100"></progress>' +
        'Python <progress value="55" max="100"></progress>' +
        'C# <progress value="30" max="100"></progress>' +
        'Unity <progress value="20" max="100"></progress>' +
        'Unreal Engine <progress value="10" max="100"></progress>' +
        'Blender <progress value="40" max="100"></progress>' +
        '</p>' +
        '</div>'
    )
}