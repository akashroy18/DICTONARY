const input = document.querySelector(".input");
const serch = document.querySelector(".Searchbtn");
const defination = document.querySelector(".defmean");
const example = document.querySelector(".exmean");
const databody = document.querySelector(".result");
 async function dictionary(){
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;
   const data = await fetch(`${url}`).then(Response => Response.json());
    console.log(data);
   try{
    databody.style.display= "flex";
    defination.innerHTML=`${data[0].meanings[0].definitions[0].definition}`;
    example.innerHTML=`${data[0].meanings[0].synonyms[0]}`;
   }catch(error){
    defination.innerHTML = "Definition not found.";
    example.innerHTML = "";
   }



 }

serch.addEventListener('click',()=>{
    dictionary();
})

