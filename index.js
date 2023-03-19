let submit= document.querySelector(".btn1");
submit.addEventListener('click',()=>{
    // e.preventDefault();
    var imageurl=document.getElementById('img').value;
    if(!imageurl){
        var imageurl="images/default1.jpg"
    }
    const data={
        name: document.getElementById("name1").value,
        email: document.getElementById("mail").value,
        websitelink: document.getElementById("website").value,
        skills: getSkillsValue(),
        gender: getGenderValues(),
    }
    function getGenderValues() {
        var ele = document.getElementsByName('setB_gender');
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked){
            console.log(ele[i].value);
            return ele[i].value;
            }
        }
    };
    function getSkillsValue() {
        var lang1 = document.getElementById("s1");
        var lang2 = document.getElementById("s2");
        var lang3 = document.getElementById("s3");
        var result = " ";
       
        result = lang1.checked ? result +" "+ lang1.value : '';
        result = lang2.checked ? result +" "+ lang2.value  : result;  
        result = lang3.checked ? result +" "+ lang3.value : result;
        return result;
    }
    let newlist=document.createElement('div');  
    newlist.classList.add('card','mb-3');
    let rowl=document.createElement('div');  
    rowl.classList.add('row', 'g-0');
    let col_1=document.createElement('div');  
    col_1.classList.add('col-md-4');
    const img = document.createElement('img');
    img.src = imageurl;
    img.classList.add('img-width');
    newlist.appendChild(rowl);    
    rowl.appendChild(col_1);
    col_1.appendChild(img);

    let detailsdiv=document.createElement('div'); 
    detailsdiv.classList.add('col-md-8','card-body');
    let heading = document.createElement('h4');
    heading.innerHTML = data.name;
    detailsdiv.appendChild(heading);
    let gender = document.createElement('p');
    gender.innerHTML = data.gender;
    detailsdiv.appendChild(gender);
    let mail = document.createElement('p');
    mail.innerHTML = data.email;
    detailsdiv.appendChild(mail);
    let skills = document.createElement('p');
    skills.innerHTML = data.skills;
    detailsdiv.appendChild(skills);
    rowl.appendChild(detailsdiv);
    document.getElementsByClassName('maindiv')[0].appendChild(newlist);



   console.log(data);
});


