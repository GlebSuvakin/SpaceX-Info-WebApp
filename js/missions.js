
  fetch('https://api.spacexdata.com/v3/missions')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let txt = JSON.stringify(data);
    let obj = JSON.parse(txt);
    console.log(obj);

    let name = [];
    let id = [];
    let twit_url = []; 
    let website_url = [];
    let wiki_url = []; 
    let descr = [];
    let web = [];
    let twit = [];
    let wiki = [];
    
    for (let i = 0; i < obj.length; i++){
      
      id[i] = obj[i].mission_id;
      name[i] = obj[i].mission_name;
      twit_url[i] = obj[i].twitter;
      website_url[i] = obj[i].website;
      wiki_url[i] = obj[i].wikipedia;
      descr[i] = obj[i].description;
      document.getElementById('missionName'+i).innerHTML = name[i];
      document.getElementById('missionId'+i).innerHTML = id[i];
      document.getElementById('missionDescr'+i).innerHTML = descr[i];
      web[i] = document.getElementById("missionWeb"+i);
      twit[i] = document.getElementById("missionTwitter"+i);
      wiki[i] = document.getElementById("missionWiki"+i);
      if (website_url[i]){
        web[i].setAttribute('href', website_url[i]);
      }
      if (twit_url[i]){
        twit[i].setAttribute('href', twit_url[i]);
      }
      if (wiki_url[i]){
        wiki[i].setAttribute('href', wiki_url[i]);
      }
    }
  });

//https://api.spacexdata.com/v3/missions