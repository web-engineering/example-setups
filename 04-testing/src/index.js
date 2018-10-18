const myCat = {
  type: 'Cat',
  name: 'Dots the cat',
  weight: '4kg'
}

export const logWithoutWeight = (animal) => {
  // this is an ES2018 feature! (see https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread)

  const { weight, ...rest } = animal;
  console.log(rest);
}

logWithoutWeight(myCat)
