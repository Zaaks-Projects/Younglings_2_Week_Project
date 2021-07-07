var firebaseConfig = {
    apiKey: "AIzaSyCPWcauJpBREVKVRn3BmQbNaDaCp0J_eao",
    authDomain: "portfolio-contactform-fb210.firebaseapp.com",
    projectId: "portfolio-contactform-fb210",
    storageBucket: "portfolio-contactform-fb210.appspot.com",
    messagingSenderId: "998740486486",
    appId: "1:998740486486:web:d68cba2791851afc338ef7"
  };

  firebase.initializeApp(firebaseConfig);

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
  }