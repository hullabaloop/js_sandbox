const art = require('ascii-art');

art.font('Hallo!!!', 'Doom', (err, renderedText)=>{
    if (err) {
        return;
    }
    console.log(renderedText)
})