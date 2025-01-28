fetch('./../../Data-base/Soft_drinks.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Soft_drinks_type_1').textContent = data.Soft_drinks_type_1;
    document.getElementById('Soft_drinks_prise_1').textContent = data.Soft_drinks_prise_1;
    document.getElementById('Soft_drinks_type_2').textContent = data.Soft_drinks_type_2;
    document.getElementById('Soft_drinks_prise_2').textContent = data.Soft_drinks_prise_2;
    document.getElementById('Soft_drinks_type_3').textContent = data.Soft_drinks_type_3;
    document.getElementById('Soft_drinks_prise_3').textContent = data.Soft_drinks_prise_3;
    document.getElementById('Soft_drinks_type_4').textContent = data.Soft_drinks_type_4;
    document.getElementById('Soft_drinks_prise_4').textContent = data.Soft_drinks_prise_4;
    document.getElementById('Soft_drinks_type_5').textContent = data.Soft_drinks_type_5;
    document.getElementById('Soft_drinks_prise_5').textContent = data.Soft_drinks_prise_5;
    document.getElementById('Soft_drinks_type_6').textContent = data.Soft_drinks_type_6;
    document.getElementById('Soft_drinks_prise_6').textContent = data.Soft_drinks_prise_6;


  });