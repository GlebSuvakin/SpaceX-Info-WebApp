window.onload = () => {
    fetch('https://api.spacexdata.com/v3/capsules')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let txt = JSON.stringify(data);
      let obj = JSON.parse(txt);
      console.log(obj);
    });
  }