fetch('./Home.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('Home_type_1').textContent = data.Home_type_1;
    document.getElementById('Home_prise_1').textContent = data.Home_prise_1;
    document.getElementById('Home_type_2').textContent = data.Home_type_2;
    document.getElementById('Home_prise_2').textContent = data.Home_prise_2;
    document.getElementById('Home_type_3').textContent = data.Home_type_3;
    document.getElementById('Home_prise_3').textContent = data.Home_prise_3;
    document.getElementById('Home_type_4').textContent = data.Home_type_4;
    document.getElementById('Home_prise_4').textContent = data.Home_prise_4;
    document.getElementById('Home_type_5').textContent = data.Home_type_5;
    document.getElementById('Home_prise_5').textContent = data.Home_prise_5;

    document.getElementById('offer_1').textContent = data.offer_1;
    document.getElementById('offer_content_1').textContent = data.offer_content_1;
    document.getElementById('offer_2').textContent = data.offer_2;
    document.getElementById('offer_content_2').textContent = data.offer_content_2;
    document.getElementById('offer_3').textContent = data.offer_3;
    document.getElementById('offer_content_3').textContent = data.offer_content_3;

    document.getElementById('event_title_1').textContent = data.event_title_1;
    document.getElementById('event_title_2').textContent = data.event_title_2;
    document.getElementById('event_content').textContent = data.event_content;

  });