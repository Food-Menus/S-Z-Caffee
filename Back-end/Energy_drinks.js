fetch('./../../Data-base/Energy_drinks.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Energy_drinks_type_1').textContent = data.Energy_drinks_type_1;
    document.getElementById('Energy_drinks_prise_1').textContent = data.Energy_drinks_prise_1;
    document.getElementById('Energy_drinks_type_2').textContent = data.Energy_drinks_type_2;
    document.getElementById('Energy_drinks_prise_2').textContent = data.Energy_drinks_prise_2;
    document.getElementById('Energy_drinks_type_3').textContent = data.Energy_drinks_type_3;
    document.getElementById('Energy_drinks_prise_3').textContent = data.Energy_drinks_prise_3;
    document.getElementById('Energy_drinks_type_4').textContent = data.Energy_drinks_type_4;
    document.getElementById('Energy_drinks_prise_4').textContent = data.Energy_drinks_prise_4;
    document.getElementById('Energy_drinks_type_5').textContent = data.Energy_drinks_type_5;
    document.getElementById('Energy_drinks_prise_5').textContent = data.Energy_drinks_prise_5;
    document.getElementById('Energy_drinks_type_6').textContent = data.Energy_drinks_type_6;
    document.getElementById('Energy_drinks_prise_6').textContent = data.Energy_drinks_prise_6;
    document.getElementById('Energy_drinks_type_7').textContent = data.Energy_drinks_type_7;
    document.getElementById('Energy_drinks_prise_7').textContent = data.Energy_drinks_prise_7;
    document.getElementById('Energy_drinks_type_8').textContent = data.Energy_drinks_type_8;
    document.getElementById('Energy_drinks_prise_8').textContent = data.Energy_drinks_prise_8;
    document.getElementById('Energy_drinks_type_9').textContent = data.Energy_drinks_type_9;
    document.getElementById('Energy_drinks_prise_9').textContent = data.Energy_drinks_prise_9;

  });