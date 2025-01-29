fetch('./../../Data-base/Cocktails.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Cocktails_type_1').textContent = data.Cocktails_type_1;
    document.getElementById('Cocktails_prise_1').textContent = data.Cocktails_prise_1;
    document.getElementById('Cocktails_type_2').textContent = data.Cocktails_type_2;
    document.getElementById('Cocktails_prise_2').textContent = data.Cocktails_prise_2;
    document.getElementById('Cocktails_type_3').textContent = data.Cocktails_type_3;
    document.getElementById('Cocktails_prise_3').textContent = data.Cocktails_prise_3;
    document.getElementById('Cocktails_type_4').textContent = data.Cocktails_type_4;
    document.getElementById('Cocktails_prise_4').textContent = data.Cocktails_prise_4;
    document.getElementById('Cocktails_type_5').textContent = data.Cocktails_type_5;
    document.getElementById('Cocktails_prise_5').textContent = data.Cocktails_prise_5;
    document.getElementById('Cocktails_type_6').textContent = data.Cocktails_type_6;
    document.getElementById('Cocktails_prise_6').textContent = data.Cocktails_prise_6;
    document.getElementById('Cocktails_type_7').textContent = data.Cocktails_type_7;
    document.getElementById('Cocktails_prise_7').textContent = data.Cocktails_prise_7;
    document.getElementById('Cocktails_type_8').textContent = data.Cocktails_type_8;
    document.getElementById('Cocktails_prise_8').textContent = data.Cocktails_prise_8;

  });