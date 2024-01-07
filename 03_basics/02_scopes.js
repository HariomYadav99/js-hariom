let a = 300
// const b = 20
 var c = 3000


{}


if(true){
    let a = 10
    const b = 20
    var c = 30
    //console.log("INNER: " ,a)
}

//console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const userName = "Hariom"

    function two(){
        const website = "YouTube"
        console.log(userName)
    }
    // console.log(website);
    
    two()
}
// one()

if (true){
    const userNName = "HariomYadav"

    if(userNName === "HariomYadav"){
        const website = " YouTubeVideos"
        console.log(userNName + website)
    }
    //console.log(website)
}
//console.log(userNName)

// *******************************Interesting***************


console.log(addOne(5))
function addOne(value){
    return value +1
}


// addTwo(5) //given error
const addTwo = function(num){
    return num +2
}

addTwo(5)
