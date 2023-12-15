var siteNameInput=document.getElementById('siteName');
var siteUrlInput=document.getElementById('siteUrl');
var demo=document.getElementById("demo");
var sites=[];

if(localStorage.getItem("sites")!=null){
    sites=JSON.parse(localStorage.getItem("sites")) 
    display();
}

function addSiteName(){
siteObj={
    siteName:siteNameInput.value,
    siteUrl:siteUrlInput.value
}
sites.push(siteObj);

localStorage.setItem("sites",JSON.stringify(sites));
display();
clearInputs();
}
function clearInputs(){
    siteNameInput.value=""
    siteUrlInput.value=""
}

function display(){
    var cartona=``
    for(var i=0;i<sites.length;i++){
        cartona+=`
        <div class="bg-light text-center py-4 ">
                 <div id="content" class="d-flex justify-content-between">
                   <p class="px-5 fw-bold fs-4">${sites[i].siteName}</p>
                   <div>
                       <a href="${sites[i].siteUrl}" class="btn btn-primary">visit</a>
                       <button class="btn btn-danger" onclick="deleteSite(${i})">delete</button>
                   </div>
                 </div>
               </div>
        `;
    }
    demo.innerHTML=cartona;
}


function deleteSite(x){
sites.splice(x,1);
localStorage.setItem("sites",JSON.stringify(sites))
display()
}