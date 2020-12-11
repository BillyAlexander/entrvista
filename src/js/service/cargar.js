async function getCompanies() {
    let url = "http://entredwin.herokuapp.com/posdated-ws/api/company/list";
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderList() {
    let list = await getCompanies();
    console.log("ew", list);
    let html = '';
    let combo = '<select class="browser-default custom-select"><option selected>Open this select menu</option>';
    list.forEach(list => {
        combo = combo + `<option value="${list.id}">${list.name}</option>`
    });
    combo = combo + '</select>';
    let container = document.querySelector('.container');
    container.innerHTML = combo;
}

async function  fileUpload() { 
    let url = "http://entredwin.herokuapp.com/posdated-ws/api/posdatedcheck/upload"; 
    let photo = document.getElementById("file_id").files[0];
    console.log(photo);
    
    let formData = new FormData();
    formData.append("file", photo);
    formData.append("companyId",2)

    try {
        let res = await fetch(url, {method: "POST", body: formData})
        return await res.json();
    } catch (error) {
        console.log(error);
    }
    
  }

renderList() 