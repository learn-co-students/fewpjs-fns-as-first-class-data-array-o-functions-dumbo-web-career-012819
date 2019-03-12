function wakeDog (dogName, dogBreed) {
  let dogAction = `Wake ${dogName} the ${dogBreed}`;
  console.log(dogAction);
  return dogAction;
}

function leashDog (dogName, dogBreed) {
  let dogAction = `Leash ${dogName} the ${dogBreed}`;
  console.log(dogAction);
  return dogAction;
}

function walkToPark (dogName, dogBreed) {
  let dogAction = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(dogAction);
  return dogAction;
}

function throwFrisbee (dogName, dogBreed) {
  let dogAction = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(dogAction);
  return dogAction;
}

function walkHome (dogName, dogBreed) {
  let dogAction = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(dogAction);
  return dogAction;
}

function unleashDog (dogName, dogBreed) {
  let dogAction = `Unleash ${dogName} the ${dogBreed}`;
  console.log(dogAction);
  return dogAction;
}

let routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog (dogName, dogBreed) {
  let arr = []

  routine.forEach(function(element) {
    arr.push(element(dogName, dogBreed))
  })
  return arr
}
