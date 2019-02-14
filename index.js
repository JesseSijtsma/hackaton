const overlay = document.getElementById('overlay');
const memeHolder = document.getElementById('memeHolder');
const memeMoves = document.getElementsByClassName('memeMoveAlign');
const memeCount = 23;
let currentMeme = 0;

for(let i = 0; i < memeMoves.length; i++) {
   memeMoves[i].addEventListener('mouseenter', (e)=>{
      e.currentTarget.querySelector('.pewds1').style.display = 'none';
      e.currentTarget.querySelector('.pewds2').style.display = 'block';
   });

   memeMoves[i].addEventListener('mouseleave', (e)=>{
      e.currentTarget.querySelector('.pewds1').style.display = 'block';
      e.currentTarget.querySelector('.pewds2').style.display = 'none';
   });
}

overlay.addEventListener('click', ()=>{
   overlay.style.opacity = 0;
   setTimeout(()=>{
      overlay.style.display = 'none';
   }, 500);
});

for(let i = 0; i < memeCount; i++) {
   let meme = document.createElement('div');
   meme.className = 'meme';
   meme.id = 'memeId' + i;
   let img = document.createElement('img');
   img.src = 'memes/meme' + i + '.png';
   meme.appendChild(img);
   memeHolder.appendChild(meme);
}

memeMoves[0].addEventListener('click', ()=>{
   moveMeme('prev');
});

memeMoves[1].addEventListener('click', ()=>{
   moveMeme('next');
});

function moveMeme(dir) {
   let slideWidth = memeHolder.offsetWidth;

   if(dir == 'prev') {
      let curMeme = document.getElementById('memeId' + currentMeme);
      curMeme.style.position = 'absolute';
      setTimeout(()=>{
         curMeme.style.zIndex = '20';
         curMeme.style.left = slideWidth + 'px';
      }, 10);

      setTimeout(()=>{
         curMeme.style.position = '';
         curMeme.style.zIndex = '';
         curMeme.style.left = '';
         curMeme.style.display = 'none';

         if(currentMeme == 0) {
            currentMeme = 22;
         } else {
            currentMeme--;
         }

         let nextMeme = document.getElementById('memeId' + currentMeme);
         nextMeme.style.display = 'inline-flex';
         nextMeme.style.position = 'absolute';
         nextMeme.style.left = '-' + slideWidth + 'px';
         setTimeout(()=>{
            nextMeme.style.zIndex = '20';
            nextMeme.style.left = '0px';
         }, 10);
      }, 300);
   } else {
      let curMeme = document.getElementById('memeId' + currentMeme);
      curMeme.style.position = 'absolute';
      setTimeout(()=>{
         curMeme.style.zIndex = '20';
         curMeme.style.left = '-' + slideWidth + 'px';
      }, 10);

      setTimeout(()=>{
         curMeme.style.position = '';
         curMeme.style.zIndex = '';
         curMeme.style.left = '';
         curMeme.style.display = 'none';

         if(currentMeme == 22) {
            currentMeme = 0;
         } else {
            currentMeme++;
         }

         let nextMeme = document.getElementById('memeId' + currentMeme);
         nextMeme.style.display = 'inline-flex';
         nextMeme.style.position = 'absolute';
         nextMeme.style.left = slideWidth + 'px';
         setTimeout(()=>{
            nextMeme.style.zIndex = '20';
            nextMeme.style.left = '0px';
         }, 10);
      }, 300);
   }
}