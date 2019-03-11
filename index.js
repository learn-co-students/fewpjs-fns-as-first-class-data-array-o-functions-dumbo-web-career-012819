const wakeDog = function(dogName, dogBreed) {
  return `Wake ${dogName} the ${dogBreed}`;
}

const leashDog = function(dogName, dogBreed) {
  return `Leash ${dogName} the ${dogBreed}`;
}

const walkToPark = function(dogName, dogBreed) {
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}

const throwFrisbee = function(dogName, dogBreed) {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

const walkHome = function(dogName, dogBreed) {
  return `Walk home with ${dogName} the ${dogBreed}`;
}

const unleashDog = function(dogName, dogBreed) {
  return `Unleash ${dogName} the ${dogBreed}`;
}


const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

const exerciseDog = function(dogName, dogBreed) {
  let results = [];
  routine.forEach( (func) => {
    let result = func(dogName, dogBreed);
    results.push(result);
  })
  return results;
}
