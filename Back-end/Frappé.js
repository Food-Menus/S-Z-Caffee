fetch('./../../Data-base/Frappé.json')
  .then(response => response.json())
  .then(data => {

    document.getElementById('Frappé_type_1').textContent = data.Frappé_type_1;
    document.getElementById('Frappé_prise_1').textContent = data.Frappé_prise_1;
    document.getElementById('Frappé_type_2').textContent = data.Frappé_type_2;
    document.getElementById('Frappé_prise_2').textContent = data.Frappé_prise_2;
    document.getElementById('Frappé_type_3').textContent = data.Frappé_type_3;
    document.getElementById('Frappé_prise_3').textContent = data.Frappé_prise_3;
    document.getElementById('Frappé_type_4').textContent = data.Frappé_type_4;
    document.getElementById('Frappé_prise_4').textContent = data.Frappé_prise_4;
    document.getElementById('Frappé_type_5').textContent = data.Frappé_type_5;
    document.getElementById('Frappé_prise_5').textContent = data.Frappé_prise_5;
    document.getElementById('Frappé_type_6').textContent = data.Frappé_type_6;
    document.getElementById('Frappé_prise_6').textContent = data.Frappé_prise_6;
    document.getElementById('Frappé_type_7').textContent = data.Frappé_type_7;
    document.getElementById('Frappé_prise_7').textContent = data.Frappé_prise_7;
    document.getElementById('Frappé_type_8').textContent = data.Frappé_type_8;
    document.getElementById('Frappé_prise_8').textContent = data.Frappé_prise_8;
    document.getElementById('Frappé_type_9').textContent = data.Frappé_type_9;
    document.getElementById('Frappé_prise_9').textContent = data.Frappé_prise_9;
    document.getElementById('Frappé_type_10').textContent = data.Frappé_type_10;
    document.getElementById('Frappé_prise_10').textContent = data.Frappé_prise_10;
    document.getElementById('Frappé_type_11').textContent = data.Frappé_type_11;
    document.getElementById('Frappé_prise_11').textContent = data.Frappé_prise_11;
    document.getElementById('Frappé_type_12').textContent = data.Frappé_type_12;
    document.getElementById('Frappé_prise_12').textContent = data.Frappé_prise_12;
    document.getElementById('Frappé_type_13').textContent = data.Frappé_type_13;
    document.getElementById('Frappé_prise_13').textContent = data.Frappé_prise_13;

  });