/*
 * Given an array of countries with their population.
 * Calculate total population of all countries.
 * 
 * [
 *   { name: 'Ukraine', population: 42 000 000},
 *   { name: 'Belarus', population: 9 500 000},
 *   { name: 'Moldova', population: 3 500 000},
 *   { name: 'Switzerland', population: 8 400 000}
 * ]
 * 
 * Total population = 42M + 9.5M + 3.5M + 8.4M = 63.4M
 */
//function calculateCountriesPopulation(countries) {
    // Only change code below this line
    let countries = [
    { name: 'Ukraine', population: 42000000},
      { name: 'Belarus', population: 9500000},
      { name: 'Moldova', population: 3500000},
      { name: 'Switzerland', population: 8400000}
    ]

 //   const objArray = [{foo: 1, bar: 2}, {foo: 3, bar: 4}, {foo: 5, bar: 6}]
 let eachCountry = countries.map(({ population }) => population)
//let totalPopulation = eachCountry.reduce((a, b) => a + b) // вариант решения с reduce
//let totalPopulation = eval(eachCountry.join("+")); // 2й вариант решения 
 console.log (eachCountry);

 //var array = ['1', '2', '3', '4'];
//var result = array.reduce(function(a, b) {
//  return a * b;
//});
 //for (let totalPopulation in countries.name) {
    // console.log (totalPopulation) }
 //console.log (countries[0]);

  //let totalPopulation =  countries.population.forEach(function(element) {
   // console.log (element);
   // } )


   //let totalPopulation = countries.population.reduce(function(a,b){return(a+b)});
   // console.log(totalPopulation)
    // Only change code above this line
  
  
/*
 let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// вывести список ролей комманды и их имена в формате '[crew member's role]: [crew member's name]','chief officer: Dan'. 
for (let crewMember in spaceship.crew ) {
 //console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
 console.log(crewMember)
} 
//выдаст все должностя комманды и их имена через : 

// вывести имена и специализацию в формате '[crew member's name]: [crew member's degree]','Lily: Computer Engineering'
//for (let crewDegree in spaceship.crew ) {
//  console.log(`${spaceship.crew[crewDegree].name} : ${spaceship.crew[crewDegree].degree}`)
//}
 */