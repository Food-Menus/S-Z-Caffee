fetch('./../../Data-base/Sweets.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Sweets_type_1').textContent = data.Sweets_type_1;
    document.getElementById('Sweets_prise_1').textContent = data.Sweets_prise_1;
    document.getElementById('Sweets_type_2').textContent = data.Sweets_type_2;
    document.getElementById('Sweets_prise_2').textContent = data.Sweets_prise_2;
    document.getElementById('Sweets_type_3').textContent = data.Sweets_type_3;
    document.getElementById('Sweets_prise_3').textContent = data.Sweets_prise_3;
    document.getElementById('Sweets_type_4').textContent = data.Sweets_type_4;
    document.getElementById('Sweets_prise_4').textContent = data.Sweets_prise_4;
    document.getElementById('Sweets_type_5').textContent = data.Sweets_type_5;
    document.getElementById('Sweets_prise_5').textContent = data.Sweets_prise_5;
    document.getElementById('Sweets_type_6').textContent = data.Sweets_type_6;
    document.getElementById('Sweets_prise_6').textContent = data.Sweets_prise_6;
    document.getElementById('Sweets_type_7').textContent = data.Sweets_type_7;
    document.getElementById('Sweets_prise_7').textContent = data.Sweets_prise_7;
    document.getElementById('Sweets_type_8').textContent = data.Sweets_type_8;
    document.getElementById('Sweets_prise_8').textContent = data.Sweets_prise_8;
    document.getElementById('Sweets_type_9').textContent = data.Sweets_type_9;
    document.getElementById('Sweets_prise_9').textContent = data.Sweets_prise_9;
    document.getElementById('Sweets_type_10').textContent = data.Sweets_type_10;
    document.getElementById('Sweets_prise_10').textContent = data.Sweets_prise_10;
    document.getElementById('Sweets_type_11').textContent = data.Sweets_type_11;
    document.getElementById('Sweets_prise_11').textContent = data.Sweets_prise_11;
    document.getElementById('Sweets_type_12').textContent = data.Sweets_type_12;
    document.getElementById('Sweets_prise_12').textContent = data.Sweets_prise_12;

  });