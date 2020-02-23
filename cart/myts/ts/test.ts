var nums:number[] = [1,3,3] 
var numss:string[] = ["1","2","3"] 
var n:string ="3"
console.log(nums[0]); 

for (let i of nums){
    console.log(i)
}
for (let i of numss){
    if(i==n){
        console.log("found")
    }else{
        console.log("notfound")
    }
    console.log(i)
}