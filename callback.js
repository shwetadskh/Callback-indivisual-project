
// This function is called as callback and this checks if number is even or not
function evencheck(item){
    return (item % 2 == 0) ;
}

// This function is called as callback and this checks if number is odd or not
function oddcheck(item){
    return !(item % 2 == 0) ;
}

// listerner for even button check
document.getElementById("beven").onclick = function() {
    console.log(" +++ Inside the even event listener") ;
    //setting the array to original values
    arr1 = [1,2,3,4,5,6,7,8,9,10,11,12] ;
    //calling filter function and passing the callback evencheck()
    // function 1 = filter
    // function 2 = evencheck
    arr1 = arr1.filter(evencheck) ;
    console.log(arr1);    
    //display
    document.getElementById("result").innerHTML = "ArrayofNumber = [ " + arr1 + " ]" ;
}

document.getElementById("bodd").onclick = function() {

    console.log(" +++ Inside the odd event listener") ;
    //setting the array to original values
    arr1 = [1,2,3,4,5,6,7,8,9,10,11,12] ;
   //calling filter function and passing the callback evencheck()
    // function 1 = filter
    // function 2 = oddcheck
    arr1 = arr1.filter(oddcheck) ;
    document.getElementById("result").innerHTML = "ArrayofNumber = [ " + arr1 + " ]" ;
    console.log(arr1);    
}







        



