const convertBtn = document.querySelector('.convert-button');
//console.log(convertBtn);
const inputUrl = document.querySelector('.URL-input');
//console.log(inputUrl);

convertBtn.addEventListener('click',()=>{
    //console.log(`URL LINK: ${inputUrl.value}`);
    sendURL(inputUrl.value);
})

function sendURL(url){
    console.log(url);
    /* fetch(`http://172.29.64.51:6365/download?URL=${url}`,{method:'GET'})
    .then((res) => {
      //console.log(res.json());
      return res.json();
    })
    .then((res) => {
        console.log(res);
    
    }) */
    
    window.location.href = `http://172.29.64.51:6365/download?URL=${url}`;

};

/* 
Test URL

https://www.youtube.com/watch?v=MtN1YnoL46Q
*/