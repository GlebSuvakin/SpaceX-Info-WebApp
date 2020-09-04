
    fetch('https://api.spacexdata.com/v4/company')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let txt = JSON.stringify(data);
      let obj = JSON.parse(txt);
      console.log(obj);
    });

//https://api.spacexdata.com/v4/company