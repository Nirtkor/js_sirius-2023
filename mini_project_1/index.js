const Key = 'live_lTcerhRog4D4JD0Ux8ERFIDsIM6jLwu9pyzRyT6AGQx6AZCVROmy48bExpFiSTEn';
const Url = 'https://api.thecatapi.com/v1/images/search';

async function fetchCatImage() {

    const response = await fetch(Url, {
      headers: {
        'x-api-key': Key,
      },
    });
    
    const data = await response.json();
    
    console.log(data)

    const imageUrl = data[0].url;
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    
    document.body.appendChild(imgElement);
}

fetchCatImage();





