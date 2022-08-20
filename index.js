// Code your solution in this file!
// hqBlock = 42;
function distanceFromHqInBlocks(i){
    if (i > 42){
    return(i - 42)
    }else{
    return (42 - i)        
    }
}

function distanceFromHqInFeet(i){
    return distanceFromHqInBlocks(i) * 264;
}

function distanceTravelledInFeet(i, n) { 
    return n > i ? ((n - i) * 264) : ((i - n) * 264)
}

function calculatesFarePrice(i, n){
    const distInFeet = distanceTravelledInFeet(i,n)
    if(distInFeet > 2500) return 'cannot travel that far'
    else if(distInFeet < 400) return 0
    else if(distInFeet > 2000) return 25
    else if(distInFeet >= 400 && distInFeet <= 2000) return (distInFeet - 400) * 0.02
}
 
