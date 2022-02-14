// using class selector  as suggested in task
const resultimg=document.getElementsByClassName("result");

async function getimg(){
  resultimg[0].innerHTML=`<h2>Wait a Sec..</h2>`;
    try{
      // fetchig the data
          let res= await fetch("https://biriyani.anoram.com/get");
           let resultdata=await res.json();
          //  sending the output
           resultimg[0].innerHTML=`
           <img class="img" src="${resultdata.image}" alt="Biryani image">`;
        }
        catch(error){
          // if any error occurs this message will be printed
          resultimg[0].innerHTML="Not Found";
        }
}