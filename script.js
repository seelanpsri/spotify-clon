alert('Open in your Lap for Better Experience... it Only optimized For laptop only');


let button=document.querySelectorAll('button');
button.forEach(element=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        if(e.target.classList=='play'){
            play(e.target.id)
        }
        else{
            console.log('seelan')
        }
    })
})


function play(e){
  switch(e){
    case 'play-1':
        console.log('seekan')
        let A=new Audio("audios/ A.mp3");
        A.play();
  }
}