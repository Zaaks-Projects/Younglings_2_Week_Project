var firebaseConfig = {
    apiKey: "AIzaSyCPWcauJpBREVKVRn3BmQbNaDaCp0J_eao",
    authDomain: "portfolio-contactform-fb210.firebaseapp.com",
    projectId: "portfolio-contactform-fb210",
    storageBucket: "portfolio-contactform-fb210.appspot.com",
    messagingSenderId: "998740486486",
    appId: "1:998740486486:web:d68cba2791851afc338ef7"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//   Referencing my collection
  let Information = firebase.database().ref("This is the latest mails");



  document.querySelector(".contact-form").addEventListener("submit", submitForm);

  function submitForm(e) {
      e.preventDefault();
      
      let name = document.querySelector(".name").value;
      let email = document.querySelector(".email").value;
      let reason = document.querySelector(".reason").value;
      let message = document.querySelector(".message").value;
      console.log(name, email, reason, message);

      saveInfomation(name, email, reason, message);
      
  }

  //Saving the information 
  function saveInfomation(name, email, reason, message){
      let Info = Information.push();

      Info.set({
          fullname: name,
          email: email,
          selectthereason: reason,
          message: message,

      });

      window.alert("Hi, I recieved your mail")
  }


// Email: to the personal email accout
let a = {
        
}
function updateMessage(key, value){

    a[key] = value;

}
function sendEmail(){
    Email.send({
    Host : "smtp.gmail.com",
    Username : "zaakirah.abrams@younglings.africa",
    Password : "Password1",
    To : 'zaakiraha34@gmail.com',
    From : `Email: ${a["data[Email]"]}`,
    Subject : "Hi you've got some new mail",
    Body : `Name: ${a["data[Name]"]} <br> ${a["data[Message]"]}`
}).then(
message => alert("Please wait while i get back to you")
);
    }

firebase.initializeApp({
    // Your firebase configuration object
  });
  
  const appCheck = firebase.appCheck();
  // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
  // key is the counterpart to the secret key you set in the Firebase console.
  appCheck.activate('6Lf5gYwbAAAAAKwDCOCfB-MX1-5PiS9dyuNKmef6');