import React, { useState, useMemo } from "react";
import { Continente, Tipologia } from "../types";
import { continenteMeta } from "../data/continentes2";
import { viajes } from "../data/viajes2";
import TripCard from "./TripCard";
import styles from "./ContinentPage.module.css";

interface Props {
  continent: Continente;
  onBack: () => void;
}

const TIPOLOGIA_OPTS: { value: Tipologia | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "plaza_a_plaza_en_grupo", label: "En grupo" },
  { value: "cupo", label: "Cupo" },
  { value: "plaza_a_plaza", label: "A medida" },
];

const ContinentPage: React.FC<Props> = ({ continent, onBack }) => {
  const meta = continenteMeta[continent];
  const [filter, setFilter] = useState<Tipologia | "all">("all");
  const [search, setSearch] = useState("");

  const trips = useMemo(() => {
    const seen = new Set<string>();
    return viajes
      .filter((v) => v.continente === continent && v.activo)
      .filter((v) => {
        if (seen.has(v.nombre)) return false;
        seen.add(v.nombre);
        return true;
      })
      .filter((v) => filter === "all" || v.tipologia === filter)
      .filter((v) => v.nombre.toLowerCase().includes(search.toLowerCase()));
  }, [continent, filter, search]);

  const minP = useMemo(() => {
    const ps = trips.filter((v) => v.precioHabDoble).map((v) => v.precioHabDoble!);
    return ps.length ? Math.min(...ps) : null;
  }, [trips]);

  return (
    <div className={`${styles.page} page-enter`}>
      {/* Hero */}
      <div className={styles.hero}>
        <img src={meta.heroImage} alt={meta.label} className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <button className={styles.backBtn} onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Volver al inicio
          </button>
          <div className={styles.heroEyebrow}>
            <span>{meta.emoji}</span>
            <span className={styles.heroTag}>{continent}</span>
          </div>
          <h1 className={styles.heroTitle}>
            {meta.label.split("").map((ch, i) => (
              <span key={i} className={styles.heroChar} style={{ animationDelay: `${i * 0.04}s` }}>
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </h1>
          <p className={styles.heroDesc}>{meta.description}</p>
          <div className={styles.heroStats}>
            <div className={styles.hStat}>
              <span className={styles.hStatNum}>{trips.length}</span>
              <span className={styles.hStatLabel}>Destinos</span>
            </div>
            {minP && (
              <div className={styles.hStat}>
                <span className={styles.hStatNum}>{minP.toLocaleString("es-ES")} €</span>
                <span className={styles.hStatLabel}>Precio mínimo</span>
              </div>
            )}
            <div className={styles.hStat}>
              <span className={styles.hStatNum}>2026</span>
              <span className={styles.hStatLabel}>Temporada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div className={styles.filterBar}>
        <div className={styles.filterBarInner}>
          <div className={styles.filterTabs}>
            {TIPOLOGIA_OPTS.map(({ value, label }) => (
              <button
                key={value}
                className={`${styles.filterTab} ${filter === value ? styles.filterTabActive : ""}`}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <div className={styles.searchWrap}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={styles.searchIcon}>
              <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
              <path d="M10 10l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Buscar destino..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className={styles.gridSection}>
        <div className={styles.gridHeader}>
          <h2 className={styles.gridTitle}>
            {trips.length} destino{trips.length !== 1 ? "s" : ""} en <em>{meta.label}</em>
          </h2>
        </div>
        {trips.length === 0 ? (
          <div className={styles.empty}>
            <span>😔</span>
            <p>No encontramos destinos con ese filtro.</p>
            <button onClick={() => { setFilter("all"); setSearch(""); }}>Limpiar filtros</button>
          </div>
        ) : (
          <div className={styles.grid}>
            {trips.map((v) => (
              <TripCard key={v.nombre} viaje={v} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContinentPage;
