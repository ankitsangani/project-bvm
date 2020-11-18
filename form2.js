let array = [];
let indexx;
show();

function add()
{
    if(!localStorage.getItem('data'))
    {
        array.push({
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            phoneno: document.getElementById('phoneno').value,
            email: document.getElementById("email").value,
            gender:document.querySelector('input[id="gender"]:checked').value, 
            date: document.getElementById('date').value,
            address: document.getElementById("address").value,
            country: document.getElementById('country').value

        });
        localStorage.setItem('data',JSON.stringify(array));
    }
    else
    {
        if(validate())
        {
        arraystr = localStorage.getItem('data');
        array = JSON.parse(arraystr);
        array.push({
            fname: document.getElementById('fname').value,
            lname: document.getElementById('lname').value,
            phoneno: document.getElementById('phoneno').value,
            email: document.getElementById("email").value,
            gender: document.querySelector('input[id="gender"]:checked').value,
            date: document.getElementById('date').value,
            address: document.getElementById("address").value,
            country: document.getElementById('country').value
            
        });
        localStorage.setItem('data',JSON.stringify(array));
    }
        document.getElementById('myForm').reset();
        show();

    }   
} 
function validate()
{
    var firstname = document.forms['myForm']['fname'].value;
    var lastname = document.forms['myForm']['lname'].value;
    var phoneno = document.forms['myForm']['phoneno'].value;
    var email = document.forms['myForm']['email'].value;
    var address = document.forms['myForm']['address'].value;
    var date = document.forms['myForm']['date'].value;
    if(firstname == "" || lastname == "" || phoneno == "" || email == "" ||address == "" ||date == "")
    {
        alert("complete details");
        return false;
    }
    return true;
}

function show()
{
    arraystr = localStorage.getItem('data') || [];
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
    let savetask = document.getElementById('savetask');
    arraystr = localStorage.getItem('data');
    array = JSON.parse(arraystr);
    indexx = itemIndex;
    document.querySelector('input[id="gender"]').checked = false;
    document.getElementById('fname').value = array[itemIndex].fname;
    document.getElementById('lname').value = array[itemIndex].lname;
    document.getElementById('phoneno').value = array[itemIndex].phoneno;
    document.getElementById("email").value =array[itemIndex].email;
    document.querySelector(`input[value=${array[itemIndex].gender}]`).checked = true;
    document.getElementById('date').value = array[itemIndex].date;
    document.getElementById("address").value = array[itemIndex].address;
    document.getElementById('country').value =array[itemIndex].country;
    savetask.style.display="inline-block";
    show();
}

function savetaskk()
{
    let savetask = document.getElementById('savetask');
    arraystr = localStorage.getItem('data');
    array = JSON.parse(arraystr);
    array[indexx] = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        phoneno: document.getElementById('phoneno').value,
        email: document.getElementById("email").value,
        gender:  document.querySelector('input[id="gender"]:checked').value,
        date: document.getElementById('date').value,
        address: document.getElementById("address").value,
        country: document.getElementById('country').value

    };
    localStorage.setItem('data',JSON.stringify(array));
    show();
}