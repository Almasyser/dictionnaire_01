const images = import.meta.glob('./*.png', { eager: true });

const parsed = {};
for (const path in images) {
  const name = path.split('/').pop().replace('.png', '');
  parsed[name] = images[path].default;
}

export default parsed;