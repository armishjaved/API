$(document).ready(()=>{
   const sendreq = (name)=>{
    const url = `https://api.genderize.io?name=${name}`
    $.get(url,(response)=>{
        if(response.gender == "male"){
        $("#gender").text(response.gender+ "♂")
        }
        else if(response.gender == "female"){
            $("#gender").text(response.gender+ "♀")
        }
       else{
          $("#gender").text(response.gender)
       }
          
    })
   }
   $("#form1").submit(function(x) {
        x.preventDefault();
        const name = $("#name-input").val();
        sendreq(name);
   })
})
