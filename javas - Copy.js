let i=0;
let myLeads=[];
let inputEl=document.getElementById('input-el');
let inputBtn=document.getElementById('input-btn');
const ulEl=document.getElementById('ul-el'); 
let tabBtn=document.getElementById('tab-btn');
const ulEl2=document.getElementById('ul-2'); 
let deletBtn=document.getElementById('delete-btn ');
const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
myLeads=leadsFromLocalStorage;
render(myLeads);


}
function render(leads){



   for( i; i<leads.length; i++){
    
   const li=document.createElement('li');
   li.textContent+=leads[i];
   
   ulEl.append(li)
      
      }
   }


inputBtn.addEventListener('click',function(){



   myLeads.push(inputEl.value);
 inputEl.value=''

 localStorage.setItem("myLeads",JSON.stringify(myLeads));
console.log(localStorage.getItem("myLeads"));
render(myLeads);



}); 






deletBtn.addEventListener("dblclick", function(){
localStorage.clear();
myLeads=[];
ulEl.innerHTML='';
})



tabBtn.addEventListener("click", function(){
chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
   myLeads.push(tabs[0].url)
   localStorage.setItem("myLeads",JSON.stringify(myLeads))
   render(myLeads)
   })

})
// console.log(tabs[0].url)

