let array = [];
let indexx;
show();
function add()
{
    if(localStorage.getItem('data') == null)
    {
        array.push({
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            phoneno: document.getElementById('phoneno').value,
            email: document.getElementById("email").value,
            gender: document.getElementById('gender').value,
            date: document.getElementById('date').value,
            address: document.getElementById("Address").value,
            country: document.getElementById('country').value

        });
        localStorage.setItem('data',JSON.stringify(array));
    }
    else
    {
        arraystr = localStorage.getItem('data');
        array = JSON.parse(arraystr);
        array.push({
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            phoneno: document.getElementById('phoneno').value,
            email: document.getElementById("email").value,
            gender: document.getElementById('gender').value,
            date: document.getElementById('date').value,
            address: document.getElementById("Address").value,
            country: document.getElementById('country').value
        });
        localStorage.setItem('data',JSON.stringify(array));
        document.getElementById('myForm').reset();
        show();
    }
    
} 
// function show()
// {
//     let tablebody = document.getElementById('tablebody');
    
//     for(i=0;i<array.length;i++)
//     {
//         console.log(array.length);
        
//         row = tablebody.insertRow();
//         data1 = row.insertCell();
//         data2 = row.insertCell();
//         data3 = row.insertCell();
//         data4 = row.insertCell();
//         data5 = row.insertCell();
//         data6 = row.insertCell();
//         data7 = row.insertCell();
//         data8 = row.insertCell();
        
//         data1.innerHTML = array[i].fname;
//         data2.innerHTML = array[i].lname;
//         data3.innerHTML = array[i].phoneno;
//         data4.innerHTML = array[i].email;
//         data5.innerHTML = array[i].gender;
//         data6.innerHTML = array[i].date;
//         data7.innerHTML = array[i].address;
//         data8.innerHTML = array[i].country;
//         console.log("hello");
//     }
// }
// function show()
// {
//     let tablebody = document.getElementById('tablebody');
//     let str = "";
//     var html = "<table border='1|1'>";
//     for (var i = 0; i < array.length; i++) {
//         html+="<tr>";
//         html+="<td>"+array[i].fname+"</td>";
//         html+="<td>"+array[i].lname+"</td>";
//         html+="<td>"+array[i].phoneno+"</td>";
//         html+="<td>"+array[i].email+"</td>";
//         html+="<td>"+array[i].gender+"</td>";
//         html+="<td>"+array[i].date+"</td>";
//         html+="<td>"+array[i].address+"</td>";
//         html+="<td>"+array[i].country+"</td>";
//         html+="</tr>";
//     }
//     html+="</table>";
//     tablebody.innerHTML = str;
// }
function show()
{
    arraystr = localStorage.getItem('data');
    array = JSON.parse(arraystr);
    let tablebody = document.getElementById('tablebody');
    let str = "";
    array.forEach((element,index) => {
        str += `
        <tr>
            <td>${index+1}</td>
            <td>${element.fname}</td>
            <td>${element.lname}</td>
            <td>${element.phoneno}</td>
            <td>${element.email}</td>
            <td>${element.gender}</td>
            <td>${element.date}</td>
            <td>${element.address}</td>
            <td>${element.country}</td>
            <td><button onclick="deletee(${index})" value="delete">delete</button></td>
            <td><button onclick="update(${index})">Update</td>
        </tr> `;
    });
    tablebody.innerHTML = str;  
}
function deletee(itemIndex)
{
    arraystr = localStorage.getItem('data')
    array = JSON.parse(arraystr);
    array.splice(itemIndex,1);
    localStorage.setItem('data',JSON.stringify(array));
    show();
}
function update(itemIndex)
{

    arraystr = localStorage.getItem('data');
    array = JSON.parse(arraystr);
    document.getElementById('fname').value = array[itemIndex].fname;
    document.getElementById('lname').value = array[itemIndex].lname;
    document.getElementById('phoneno').value = array[itemIndex].phoneno;
    document.getElementById("email").value =array[itemIndex].email;
    document.getElementById('gender').value = array[itemIndex].gender;
    document.getElementById('date').value = array[itemIndex].date;
    document.getElementById("Address").value = array[itemIndex].Address;
    document.getElementById('country').value =array[itemIndex].country;
    show();
}