fetch('./../../Data-base/Hot_drinks.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Hot_drinks_type_1').textContent = data.Hot_drinks_type_1;
    document.getElementById('Hot_drinks_prise_1').textContent = data.Hot_drinks_prise_1;
    document.getElementById('Hot_drinks_type_2').textContent = data.Hot_drinks_type_2;
    document.getElementById('Hot_drinks_prise_2').textContent = data.Hot_drinks_prise_2;
    document.getElementById('Hot_drinks_type_3').textContent = data.Hot_drinks_type_3;
    document.getElementById('Hot_drinks_prise_3').textContent = data.Hot_drinks_prise_3;
    document.getElementById('Hot_drinks_type_4').textContent = data.Hot_drinks_type_4;
    document.getElementById('Hot_drinks_prise_4').textContent = data.Hot_drinks_prise_4;
    document.getElementById('Hot_drinks_type_5').textContent = data.Hot_drinks_type_5;
    document.getElementById('Hot_drinks_prise_5').textContent = data.Hot_drinks_prise_5;
    document.getElementById('Hot_drinks_type_6').textContent = data.Hot_drinks_type_6;
    document.getElementById('Hot_drinks_prise_6').textContent = data.Hot_drinks_prise_6;
    document.getElementById('Hot_drinks_type_7').textContent = data.Hot_drinks_type_7;
    document.getElementById('Hot_drinks_prise_7').textContent = data.Hot_drinks_prise_7;
    document.getElementById('Hot_drinks_type_8').textContent = data.Hot_drinks_type_8;
    document.getElementById('Hot_drinks_prise_8').textContent = data.Hot_drinks_prise_8;
    document.getElementById('Hot_drinks_type_9').textContent = data.Hot_drinks_type_9;
    document.getElementById('Hot_drinks_prise_9').textContent = data.Hot_drinks_prise_9;
    document.getElementById('Hot_drinks_type_10').textContent = data.Hot_drinks_type_10;
    document.getElementById('Hot_drinks_prise_10').textContent = data.Hot_drinks_prise_10;
    document.getElementById('Hot_drinks_type_11').textContent = data.Hot_drinks_type_11;
    document.getElementById('Hot_drinks_prise_11').textContent = data.Hot_drinks_prise_11;
    document.getElementById('Hot_drinks_type_12').textContent = data.Hot_drinks_type_12;
    document.getElementById('Hot_drinks_prise_12').textContent = data.Hot_drinks_prise_12;
    document.getElementById('Hot_drinks_type_13').textContent = data.Hot_drinks_type_13;
    document.getElementById('Hot_drinks_prise_13').textContent = data.Hot_drinks_prise_13;
    document.getElementById('Hot_drinks_type_13').textContent = data.Hot_drinks_type_13;
    document.getElementById('Hot_drinks_prise_13').textContent = data.Hot_drinks_prise_13;
    document.getElementById('Hot_drinks_type_14').textContent = data.Hot_drinks_type_14;
    document.getElementById('Hot_drinks_prise_14').textContent = data.Hot_drinks_prise_14;
    document.getElementById('Hot_drinks_type_15').textContent = data.Hot_drinks_type_15;
    document.getElementById('Hot_drinks_prise_15').textContent = data.Hot_drinks_prise_15;
    document.getElementById('Hot_drinks_type_16').textContent = data.Hot_drinks_type_16;
    document.getElementById('Hot_drinks_prise_16').textContent = data.Hot_drinks_prise_16;
    document.getElementById('Hot_drinks_type_17').textContent = data.Hot_drinks_type_17;
    document.getElementById('Hot_drinks_prise_17').textContent = data.Hot_drinks_prise_17;
    document.getElementById('Hot_drinks_type_18').textContent = data.Hot_drinks_type_18;
    document.getElementById('Hot_drinks_prise_18').textContent = data.Hot_drinks_prise_18;
    document.getElementById('Hot_drinks_type_19').textContent = data.Hot_drinks_type_19;
    document.getElementById('Hot_drinks_prise_19').textContent = data.Hot_drinks_prise_19;
    document.getElementById('Hot_drinks_type_20').textContent = data.Hot_drinks_type_20;
    document.getElementById('Hot_drinks_prise_20').textContent = data.Hot_drinks_prise_20;

  });