function SendMail() {
  var params = {
    from_name: document.getElementById("nume").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("mesaj")
  };
  elsemailjs.send("service_a7zdoof", "template_i41ckj9", params).then(function (res){
    alert("Succes!" + res.status);
  })
}
