import { useState } from "react";
import "./botones.css";
import styles from "./Marcador.module.css";

// ==========================================
// MANEJADORES EXTERNOS
// ==========================================
const handleEmpezar = (e) => {
  console.log(e);
  alert("¡Que empiece el partido!");
};

export function Marcador() {
  // ==========================================
  // ESTADOS (PUNTOS Y FALTAS)
  // ==========================================
  const [puntosLocal, setPuntosLocal] = useState(0);
  const [puntosVisitante, setPuntosVisitante] = useState(0);

  const [faltasLocal, setFaltasLocal] = useState(0);
  const [faltasVisitante, setFaltasVisitante] = useState(0);

  // ==========================================
  // VALORES DERIVADOS (NO NECESITAN USESTATE)
  // ==========================================
  const diferencia = Math.abs(puntosLocal - puntosVisitante);

  // ==========================================
  // FUNCIONES DE LÓGICA DEL MARCADOR
  // ==========================================
  const handleReiniciar = (e) => {
    console.log(e);
    setPuntosLocal(0);
    setPuntosVisitante(0);
    setFaltasLocal(0);
    setFaltasVisitante(0);
  };

  // Suma o resta puntos asegurando que nunca baje de 0
  const anotar = (equipo, puntos) => {
    if (equipo === "Local") {
      const nuevoTotal = Math.max(0, puntosLocal + puntos);
      setPuntosLocal(nuevoTotal);
      console.log("Local:", nuevoTotal);
    } else {
      const nuevoTotal = Math.max(0, puntosVisitante + puntos);
      setPuntosVisitante(nuevoTotal);
      console.log("Visitante:", nuevoTotal);
    }
  };

  // Actualización funcional encadenada (+2 y luego +1)
  const canastaAdicional = () => {
    setPuntosLocal((prev) => prev + 2);
    setPuntosLocal((prev) => prev + 1);
    console.log("Foto fija puntosLocal:", puntosLocal);
  };

  // Suma +1 falta al equipo indicado
  const falta = (equipo) => {
    if (equipo === "Local") {
      setFaltasLocal((prev) => prev + 1);
    } else {
      setFaltasVisitante((prev) => prev + 1);
    }
  };

  // ==========================================
  // RENDERIZADO (JSX)
  // ==========================================
  return (
    <section className={styles.marcador}>
      {/* --- BLOQUE EQUIPO LOCAL --- */}
      <div
        className={`${styles.equipo} ${styles.local}`}
        style={{
          backgroundColor:
            puntosLocal > puntosVisitante ? "#dbeafe" : "#ffffff",
        }}
      >
        <p className={styles.nombreEquipo}>Local</p>
        <p className={styles.puntos}>{puntosLocal}</p>

        {/* Botones de puntuación */}
        <div className={styles.acciones}>
          <button
            onClick={() => anotar("Local", 1)}
            type="button"
            className="boton"
          >
            +1
          </button>
          <button
            onClick={() => anotar("Local", 2)}
            type="button"
            className="boton"
          >
            +2
          </button>
          <button
            onClick={() => anotar("Local", 3)}
            type="button"
            className="boton"
          >
            +3
          </button>
          <button
            onClick={() => anotar("Local", -1)}
            type="button"
            className="boton"
          >
            -1
          </button>
        </div>

        {/* Canasta + adicional */}
        <button onClick={canastaAdicional} type="button" className="boton">
          Canasta + adicional
        </button>

        {/* Faltas Local */}
        <p className={styles.faltas}>Faltas: {faltasLocal}</p>
        <button onClick={() => falta("Local")} type="button" className="boton">
          Falta Equipo Local
        </button>
      </div>

      {/* --- BLOQUE EQUIPO VISITANTE --- */}
      <div
        className={`${styles.equipo} ${styles.visitante}`}
        style={{
          backgroundColor:
            puntosVisitante > puntosLocal ? "#fee2e2" : "#ffffff",
        }}
      >
        <p className={styles.nombreEquipo}>Visitante</p>
        <p className={styles.puntos}>{puntosVisitante}</p>

        {/* Botones de puntuación */}
        <div className={styles.acciones}>
          <button
            onClick={() => anotar("Visitante", 1)}
            type="button"
            className="boton"
          >
            +1
          </button>
          <button
            onClick={() => anotar("Visitante", 2)}
            type="button"
            className="boton"
          >
            +2
          </button>
          <button
            onClick={() => anotar("Visitante", 3)}
            type="button"
            className="boton"
          >
            +3
          </button>
          <button
            onClick={() => anotar("Visitante", -1)}
            type="button"
            className="boton"
          >
            -1
          </button>
        </div>

        {/* Faltas Visitante */}
        <p className={styles.faltas}>Faltas: {faltasVisitante}</p>
        <button
          onClick={() => falta("Visitante")}
          type="button"
          className="boton"
        >
          Falta Equipo Visitante
        </button>
      </div>

      {/* --- PANEL INFERIOR (DIFERENCIA Y CONTROLES) --- */}
      <div className={styles.panelInferior}>
        <p className={styles.diferencia}>Diferencia de puntos: {diferencia}</p>
        <div className={styles.controlesPartido}>
          <button onClick={handleEmpezar} type="button" className="boton">
            Empezar partido
          </button>
          <button onClick={handleReiniciar} type="button" className="boton">
            Reiniciar
          </button>
        </div>
      </div>
    </section>
  );
}
