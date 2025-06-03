export function convertirListeEnJson(texte) {
  const mots = texte
    .split('\n')
    .map(mot => mot.trim())
    .filter(mot => mot.length > 0);

  return { mots };
}

export function filtrerParInitiale(data, initiale) {
  const lettre = initiale.toLowerCase();
  return data.mots.filter(mot => mot.toLowerCase().startsWith(lettre));
}