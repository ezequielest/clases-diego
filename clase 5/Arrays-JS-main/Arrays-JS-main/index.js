let autosArray = [
  {
    make: 'Ford',
    model: 'Mustang',
    year: 1969,
    maxSpeed: 190
  },
  {
    make: 'Chevrolet',
    model: 'Cruzie',
    year: 2015,
    maxSpeed: 170
  },
  {
    make: 'Fiat',
    model: 'Uno',
    year: 1999,
    maxSpeed: 100
  },
  {
    make: 'Honda',
    model: 'Fit',
    year: 2012,
    maxSpeed: 110
  },
  {
    make: 'Nissan',
    model: 'Zeta',
    year: 2007,
    maxSpeed: 170
  },
    {
    make: 'Ferrari',
    model: '250 GT',
    year: 2002,
    maxSpeed: 300
  },
  {
    make: 'Ford',
    model: 'Focus',
    year: 1999,
    maxSpeed: 90
  },
  {
    make: 'BMW',
    model: '208',
    year: 2020,
    maxSpeed: 160
  },
  {
    make: 'Ford',
    model: 'Murcielago',
    year: 2001,
    maxSpeed: 290
  },
  {
    make: 'BMW',
    model: '220i',
    year: 2005,
    maxSpeed: 220
  },
];

mostrarTodosLosAutos();
calcularPromedioVelocidad();
apareceMasVeces();

// 1 Saber la velocidad promedio de los autos
// 2 La marca que mas aparece
// 3 Mostrar solo los que tengan mayor velocidad que 150

function mostrarTodosLosAutos(){
  auto = '';
  autosArray.forEach(el => {
    auto += `
    <div class="container">
      <h3>${el.make}</h3>
      <h3>${el.model}</h3>
      <h3>${el.year}</h3>
      <h3>${el.maxSpeed}</h3>
    </div>
    `
  })
  document.getElementById('body').innerHTML = auto;
}

// ejercicio 1
// 1° sumar todas las velocidades
// 2° dividirlas por el total

function calcularPromedioVelocidad() {
  acumuladorVelocidad = 0;
  autosArray.forEach(auto => {
    acumuladorVelocidad += auto.maxSpeed;
  });

  let promedio = acumuladorVelocidad / autosArray.length;

  console.log('acumulador final ', acumuladorVelocidad);
  console.log('promedio final ', promedio);

  // otra manera
  let promedioDos = autosArray.reduce((acumulador, auto) => acumulador + auto.maxSpeed,0) / autosArray.length;
  console.log('promedio 2 ',promedioDos)
  
}


// 2 La marca que mas aparece
function apareceMasVeces () {

  //resultsString = ["ford","BMW","Chev"]

  /*no repetidos*/
  resultsString = [];
  autosArray.forEach(auto => {

    if (resultsString.length === 0){
      resultsString.push(auto.make);
    } else {
      esta = resultsString.some(autoOk => autoOk === auto.make);
      if (!esta) {

        //tratar de realizar el filtro aca! y quitar el segundo foreach

        resultsString.push(auto.make);
      }
    }

  });

  max = -99999;
  resultsString.forEach((autoString, index)  => {

    cant = autosArray.filter(auto => {
      return auto.make === autoString
    });

    if (cant.length > max) {
      max = cant.length;
      masRepetido = index;
    }
  })

  console.log('el mas repetido es ', resultsString[masRepetido])

}

// Mostrar solo los que tengan mayor velocidad que 150 (PISTA -> user filter)
// PODES VER CON ESTE EJEMPLO EL TEMA DE LOS PARAMETROS