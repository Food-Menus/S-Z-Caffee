fetch('./../../Data-base/Milkshake.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Milkshake_type_1').textContent = data.Milkshake_type_1;
    document.getElementById('Milkshake_prise_1').textContent = data.Milkshake_prise_1;
    document.getElementById('Milkshake_type_2').textContent = data.Milkshake_type_2;
    document.getElementById('Milkshake_prise_2').textContent = data.Milkshake_prise_2;
    document.getElementById('Milkshake_type_3').textContent = data.Milkshake_type_3;
    document.getElementById('Milkshake_prise_3').textContent = data.Milkshake_prise_3;
    document.getElementById('Milkshake_type_4').textContent = data.Milkshake_type_4;
    document.getElementById('Milkshake_prise_4').textContent = data.Milkshake_prise_4;
    document.getElementById('Milkshake_type_5').textContent = data.Milkshake_type_5;
    document.getElementById('Milkshake_prise_5').textContent = data.Milkshake_prise_5;
    document.getElementById('Milkshake_type_6').textContent = data.Milkshake_type_6;
    document.getElementById('Milkshake_prise_6').textContent = data.Milkshake_prise_6;
    document.getElementById('Milkshake_type_7').textContent = data.Milkshake_type_7;
    document.getElementById('Milkshake_prise_7').textContent = data.Milkshake_prise_7;
    document.getElementById('Milkshake_type_8').textContent = data.Milkshake_type_8;
    document.getElementById('Milkshake_prise_8').textContent = data.Milkshake_prise_8;
    document.getElementById('Milkshake_type_9').textContent = data.Milkshake_type_9;
    document.getElementById('Milkshake_prise_9').textContent = data.Milkshake_prise_9;
    document.getElementById('Milkshake_type_10').textContent = data.Milkshake_type_10;
    document.getElementById('Milkshake_prise_10').textContent = data.Milkshake_prise_10;
    document.getElementById('Milkshake_type_11').textContent = data.Milkshake_type_11;
    document.getElementById('Milkshake_prise_11').textContent = data.Milkshake_prise_11;
    document.getElementById('Milkshake_type_12').textContent = data.Milkshake_type_12;
    document.getElementById('Milkshake_prise_12').textContent = data.Milkshake_prise_12;
    document.getElementById('Milkshake_type_13').textContent = data.Milkshake_type_13;
    document.getElementById('Milkshake_prise_13').textContent = data.Milkshake_prise_13;

  });