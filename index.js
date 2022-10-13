var data = [

    { name: "Kohli", country: "India" },
    { name: "du Plessis", country: "South Africa" },
    { name: "Moen ali", country: "England" },
    { name: "Maxwell", country: "Australia" },
    { name: "Rohit sharma", country: "India" },
    { name: "Arav", country: "India" }

];


var arr = [];



//console.log(data[0].country)
var count = '1';
for (let i = 1; i < data.length; i++) {

    for (let j = 0; j < i; j++) {

        console.log(count);
        //console.log(data[j].country,data[i].country)
        if (data[j].country == data[i].country) {
            //if(count==='1'){
            arr.push(data[j], data[i]);
            //count+='2';
            //console.log(count);

            // }else{
            //arr.push(data[i]);
            //} 
        }
        // break;
    }


}

console.log(arr)
