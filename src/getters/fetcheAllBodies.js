const url = 'https://api.le-systeme-solaire.net/rest.php/bodies';
const fetchAllBodies = async () => {
  const response = await fetch(url);
  const allBodies = await response.json();
  const star = allBodies.bodies.filter((body) => body.bodyType === 'Star');
  const planets = allBodies.bodies.filter((body) => body.isPlanet === true);
  const dwarfPlanets = allBodies.bodies.filter((body) => body.bodyType === 'Dwarf Planet');
  const solarSystem = [...star, ...planets, ...dwarfPlanets];

  return solarSystem;
};

export default fetchAllBodies;
