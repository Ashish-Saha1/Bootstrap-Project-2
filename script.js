
//********************************************************************** */
             //Below function is for Hide & show Reply button

// const replyFun = (rep)=>{
//     let reply = document.getElementById(rep);
//     console.log(reply);
//     //for debug press reply button on html page & see the result
//     if(reply.className === 'hide'){
//         reply.className = 'replyShow'
//     }else{
//         reply.className = 'hide'
//     }
    
// }

        // Same as above you can use anyone of these
const replyFun = (rep)=>{
    let reply = document.getElementById(rep);
    console.log(reply);
    //for debug press reply button on html page & see the result
    if(reply.className === 'hide'){
        reply.classList.add('replyShow');
        reply.style.WebkitTransition = 'all 0.4s ease';
    }else{
        reply.classList.remove('replyShow')
    }
    
}

//********************************************************************** */

            // Like Button active or disable 

let check = document.querySelectorAll('.left_div__like');

let countClick = 0;
const singleClick = (ele)=>{
    ele.style.border = '1px solid black';
    ele.innerText = '✓ Liked';
    ele.style.fontWeight = 'bold' 
}

const doubleClick = (ele)=>{
    ele.style.border = '1px solid black';
    ele.innerText = 'Like';
    ele.style.fontWeight = 'normal' 
}

    for(let i of check){
        i.addEventListener('click',function(){
            countClick++;
            if(countClick === 1){
                singleClickCount = setTimeout(function(){
                    singleClick(i);
                    countClick = 0;
                },400)

            }else if(countClick === 2){
                clearTimeout(singleClickCount);
                countClick = 0;
                doubleClick(i);
            }
        },false)

        console.log(i)
    }


    //***************************************************************************** */