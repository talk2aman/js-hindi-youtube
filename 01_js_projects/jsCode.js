const buttonClick = document.querySelectorAll('.button')
        const bodyClr = document.querySelector('body')

        buttonClick.forEach( function(btn){
            btn.addEventListener('click', function(e){
                console.log(e);
                console.log(e.target);
                
                if (e.target.id === 'grey') {
                    bodyClr.style.backgroundColor = e.target.id
                }                
                if (e.target.id === 'yellow') {
                    bodyClr.style.backgroundColor = e.target.id
                }                
                if (e.target.id === 'red') {
                    bodyClr.style.backgroundColor = e.target.id
                }                
                if (e.target.id === 'white') {
                    bodyClr.style.backgroundColor = e.target.id
                }                
            })
        })