fetch('https://api.spacexdata.com/v4/crew')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let txt = JSON.stringify(data);
    let obj = JSON.parse(txt);
    console.log(obj);

    let name = [],
        agency = [],
        status = [];

    for (let i = 0; i < obj.length; i++){
      name[i] = obj[i].name;
      agency[i] = obj[i].agency;
      status[i] = obj[i].status;

      document.getElementById('crew_member_name'+i).innerHTML = name[i];
      document.getElementById('crew_member_agency'+i).innerHTML = agency[i];
      document.getElementById('crew_member_status'+i).innerHTML = status[i];
    }
  });