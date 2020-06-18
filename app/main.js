document.querySelector('#app').innerHTML = `
<div class="banner">
<div class="bgImg">
<div class="videoBG">
<div>
    <video id="player"></video>
    </div>
</div>
    <div class="bgMark">
    <div class="bgOpacity">
        <div class="desk-logo">
            <div class="logo">

            </div>
            <div class="desk">
                <span id="red-color">PROJECT JAPANESE SOULWORKER FOR RUSSIANS</span> - это небольшой проект по переводу японской версии SoulWorker.
            </div>
        </div>

        <div class="chii">
            
        </div>
        </div>
    </div>
</div>
</div>`;

const player = new Plyr('#player', {
  autoplay: 'true',
  ratio: 'w:h'
});
player.source = {
    type: 'video',
    sources: [
      {
        // src: '/src/videobg/soulworkerbg.mov',
        src: `w_bdILgIm9Q`,
        provider: "youtube"

      },
    ],
  };
