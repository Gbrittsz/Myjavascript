//Create a function with a function name printSum( ) and print the sum of an array.
function printSum(){
    let arr = [3,5,7]
    let totalSum = 0;
    for(let j=0; j<arr.length; j++) {
        totalSum=totalSum+arr[j]
    }
    return totalSum;
    }
 //Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)
function firstFunction(a,b){
    let total=a+b
    return total;
}
console.log(firstFunction(2,3))


//Given an array of integers, calculate the ratio of its elements that are positive, negative and zero. Print the decimal value of each fraction on a new line with places after the decimal.
function simpleArrayFunction(){
    let array=[1,4,5,6]
    let sum=0
    for(let i=0;i<array.length;i++){
        sum=sum+array[i]
    }
    return sum

}
console.log(simpleArrayFunction())


//Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, awarding points from a scale of 1-100 for three categories: problem clarity, originality and difficulty.the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and the rating for Bob's challenge is the triplet b=(b[0], b[1], b[2]). The task is to find their different comparison points by comparing a[0] to b[0], a[1] to b[1], a[2] to b[2]
//If a[i]>b[i] then alice is awarded 1point

//If a[i]<b[i] then bob is awarded 1 point

//If a[i]===b[i] then none of them gets a point

//The comparison points should be the total points a person earned.
 let alice=[2,4,7]
 let bob=[4,5,8]
 function comparePoints(){
     let totalPoints=[]
     let aPoints=0;
     let bPoints=0;
     if(alice[0]>bob[0]){
         aPoints++
     }else if(alice[0]<bob[0]){
         bPoints++
     }
     if(alice[2]>bob[2]){
         aPoints++
     }else if(alice[2]<bob[2]){
         bPoints++
     }
     if(alice[4]>bob[4]){
         aPoints++
     }else if(alice[4]<bob[4]){
         bPoints++
     }
     totalPoints.push(aPoints)
     totalPoints.push(bPoints)
     console.log(totalPoints)
 }
 comparePoints()