//JS code

const ListShown = document.getElementById('ListToShow');
const toggleActive = document.getElementById('icon');

toggleActive.onclick = ()=>{
 if( ListShown.style.transform != "translateY(0%)" ){
  ListShown.style.transform= "translateY(0%)";
 }
 else{
  ListShown.style.transform = "translateY(-150%)";
 }
}

const btn = document.getElementById('btnShoreten');
const inputLink = document.getElementById('inputLink');
const CardLinks = document.getElementById('CardHolder');
const CardList = document.createElement('ul');
CardLinks.appendChild(CardList);

btn.addEventListener('click' , ()=>{
 if(inputLink.value != '') {
 const url = 'https://api.shrtco.de/v2/shorten?url='+ inputLink.value ; 
 const getResponseData = async () => {
  try{ 
    const response = await fetch(url);
    const data = await response.json();
    const LinkCard = document.createElement('div');
    LinkCard.classList.add('link-card');
    const center = document.createElement('div');
    center.classList.add('centerElements')
    const ShortenLink = document.createElement('textarea');
    ShortenLink.setAttribute('id' , 'CopiedData')
    ShortenLink.innerText =  data.result.short_link;
    const CopyBtn = document.createElement('button')
    CopyBtn.innerText = 'Copy';
    center.appendChild(ShortenLink);
    center.appendChild(CopyBtn);
    LinkCard.appendChild(center);
    CardList.append(LinkCard);
    const Copy = document.getElementById('CopiedData')
    CopyBtn.onclick = ()=>{
     Copy.select(); //how to copy a data from a text area
     document.execCommand('copy')
     CopyBtn.innerText = 'Copied!'
     CopyBtn.style.backgroundColor = 'hsl(257, 27%, 26%)';
     CopyBtn.style.transition = 'all .25s linear'
    }
  } catch (err){
   alert(err)
  }
 }
 getResponseData()
}
else{
 alert('Error')
}
})
