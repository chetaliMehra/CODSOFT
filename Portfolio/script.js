let typingEffect= new Typed("#text",{
    strings:["Chetali Mehra","Frontend Developer","Web Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000
});


let homeSec=document.querySelector('.home');
let aboutSec=document.querySelector('.about');
let projectSec=document.querySelector('.project');
let contactSec=document.querySelector('.contact-form');



let skills=document.querySelector('#skills');
let edu=document.querySelector('#edu');
let skillsTxt=document.querySelector('#skills-txt');
let text;
skills.addEventListener('click',()=>{
    skills.classList.add('active');
    edu.classList.remove('active');
    text=`<span>Programming languages:</span> C,C++, Python <br>
                <span>Web Technology:</span> HTML, CSS, Tailwind CSS,  Javascript, Node.js, MongoDb, PHP<br>
                <span>IDE Tools:</span> Vs code, Pycharm <br>
                <span>Core Knowledge:</span> OOP, Database Management  System, Operating System<br>`
    skillsTxt.innerHTML=text;
});

edu.addEventListener('click',()=>{
    edu.classList.add('active');
    skills.classList.remove('active');
    text=` Pursuing <span>Bachelor of Technology in Computer Science</span> and Engineering from Graphic Era Hill University. <br>
                <span>Intermediate</span> from Columbus Public School, Rudrapur in 2021. <br>
                <span>High school</span> from Columbus Public School, Rudrapur in 2019. <br>`
    skillsTxt.innerHTML=text;

});


function formValidate(name, email, msg) {
    let errname = document.getElementsByClassName('errname')[0];
    let errMail = document.getElementsByClassName('errMail')[0];
    let errMsg = document.getElementsByClassName('errMsg')[0];

    errname.innerText = "";
    errMail.innerText = "";
    errMsg.innerText = "";

    errname.classList.remove("show");
    errMail.classList.remove("show");
    errMsg.classList.remove("show");

    let valid = true;

    if (name === "") {
        errname.innerText = "Please enter your name";
        errname.classList.add("show");
        valid = false;
    }
    if (email === "") {
        errMail.innerText = "Please enter your email";
        errMail.classList.add("show");
        valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errMail.innerText = "Please enter a valid email";
        errMail.classList.add("show");
        valid = false;
    }
    if (msg === "") {
        errMsg.innerText = "Please enter your message";
        errMsg.classList.add("show");
        valid = false;
    }

    return valid;
}

function sendMail(event) {
    event.preventDefault();

    let name = document.getElementById('fullName').value;
    let email = document.getElementById('email_id').value;
    let msg = document.getElementById('msg').value;

    console.log('Form Submitted:', { name, email, msg });

    let valid = formValidate(name, email, msg);

    if (valid) {
        var params = {
            from_name: name,
            email_id: email,
            message: msg
        };
        emailjs.send("service_b7whm6f", "template_f7h1rge", params).then(res => {
            document.getElementById('fullName').value = '';
            document.getElementById('email_id').value = '';
            document.getElementById('msg').value = '';
            console.log(res);
            alert('Message sent successfully');
        })
        .catch((err) => console.log(err));
    } else {
        console.log('Form validation failed');
    }
}

// Ensure the script is loaded after the HTML
window.onload = () => {
    document.getElementById('form').onsubmit = sendMail;
};
