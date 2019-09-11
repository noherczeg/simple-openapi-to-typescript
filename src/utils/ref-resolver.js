function refResolve(model, ref) {
  const split = ref.split('/');
  split.shift();

  let buffer = model[split.shift()];
  split.forEach((segment) => {
    buffer = buffer[segment];
  });

  return buffer;
}

module.exports = {
  refResolve,
};
