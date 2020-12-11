
async function getlist() {
  let url = "http://entredwin.herokuapp.com/posdated-ws/api/logerrorexcel/list";
  try {
      let res = await fetch(url);      
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderList() {
  let list = await getlist();
  console.log("ew",list);
  let html = '';
  list.forEach(list => {
      let htmlSegment = `<div class="user">
                          <h2>${list.id} }</h2>
                          
                      </div>`;

      let table = `<table class="table">
       <thead>
      <tr>
      <th scope="col">#</th>
          <th scope="col">Banco</th>
          <th scope="col">Cliente</th>
          <th scope="col">Company</th>
          <th scope="col">Credit</th>
          <th scope="col">Moneda</th>
          <th scope="col">Cuenta</th>
          <th scope="col">No cheque</th>
          <th scope="col">Observacion</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <th scope="row">${list.id}</th>
          <td>${list.bank.name}</td>
          <td>${ (!list.client)? '': list.client.name}</td>
          <td>${(!list.company)? '': list.company.name}</td>
          <td>${(!list.credit)?'':list.credit.code}</td>
          <td>${(!list.currency)?'':list.currency.code}</td>
          <td>${(!list.account)?'':list.account}</td>
          <td>${list.checkNumber}</td>
          <td>${list.information}</td>
        </tr>
      </tbody>
    </table>`;

      html += table;
  });

  let container = document.querySelector('.container');
  container.innerHTML = html;
}

renderList();