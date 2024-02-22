date
  var params = {
    from_name: document.getElementById("nume").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message")
  };
function SendMail() { 
  if (document.getElementById("formular").checkValidity() == false) {
    document.getElementById("formular").reportValidity();
  }

  elsemailjs.send("service_a7zdoof", "template_i41ckj9", date).then(function (res){
    alert("Mesajul a fost trimis.")
    document.getElementById("formular").reset();
  },function (error) {
    alert("Eroare la transmitere. Contactati programatorul")
    console.log(error);
  }
  )
}
