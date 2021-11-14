function arrayDiff(a, b) {
  const normalizado = a.filter((number) => {
    const nuevaLista = [];
    for (let i = 0; (i = b.length); i++) {
      const newItem = number;
      newItem != b[i] ? nuevaLista.push(newItem) : newItem;
    }
  });
}
