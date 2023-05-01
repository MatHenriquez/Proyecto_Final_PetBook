export const validateData = (data) => {
  const regExName =
    /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;

  //   const specie = ["Dog", "Cat", "Rabbit", "Parrot", "Guinea Pig"];

  let error = {};

  if (data.specie) {
    if (
      data.specie === "Dog" ||
      data.specie === "Cat" ||
      data.specie === "Rabbit" ||
      data.specie === "Parrot" ||
      data.specie === "Guinea Pig"
    ) {
      error.specie = "✔️";
    }
  }

  if (!data.specie) {
    error.specie = "only this specie: Dog,Cat,Rabbit,Parrot,Guinea Pig ⚠️";
  }

  if (data.gender) {
    if (data.gender === "Male" || data.gender === "Female") {
      error.gender = "✔️";
    }
  }

  if (!data.gender) {
    error.gender = "only this genders:Male, Female ⚠️";
  }

  if (!regExName.test(data.name)) {
    error.name = "debe ser un nombre valido ⚠️";
  }

  if (regExName.test(data.name)) {
    error.name = "✔️";
  }

  if (!data.size) {
    error.size = "only this size : Small, Medium, Large ⚠️";
  }

  if (data.size) {
    if (
      data.size === "Small" ||
      data.size === "Medium" ||
      data.size === "Large"
    ) {
      error.size = "✔️";
    }
  }

  if (data.weight ) {
    error.weight = "✔️";
    error.age = "✔️";
  }

  if (!data.weight || data.weight < 1 ) {
    error.weight = "debe ser un numero mayor a 0 ⚠️";
    error.age = "debe ser un numero mayor a 0 ⚠️";
  }

  if (data.age > 0) {
    error.age = "✔️";
  }

  if (!data.age || data.age < 1) {
    error.age = "debe ser un numero mayor a 0 ⚠️";
  }

  return error;
};
