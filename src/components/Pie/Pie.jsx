// Crea Pie.jsx con una exportación por defecto. Devuelve un <footer> con el texto "© 2º DAW" y
// el año actual calculado con new Date().getFullYear().

export default function Pie() {
  const anioActual = new Date().getFullYear();

  return <footer>&copy; 2º DAW {anioActual}</footer>;
}
