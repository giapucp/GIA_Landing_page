import React from "react";
import "./TarjetaNoticia.css";

interface Noticia {
  id: string | number;
  portada?: string;
  titulo?: string;
  fechaPublicacion?: string;
  resumen?: string;
  [key: string]: any;
}

interface TarjetaNoticiaProps {
  noticia: Noticia;
  onClick: () => void;
}

const TarjetaNoticia: React.FC<TarjetaNoticiaProps> = ({ noticia, onClick }) => {
  return (
    <div
      className="tarjeta-noticia"
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <img
        src={noticia.portada || "/placeholder.jpg"}
        alt={noticia.titulo || "Noticia"}
      />

      <div className="tarjeta-noticia-info">
        <h2 className="tarjeta-noticia-title">{noticia.titulo}</h2>
        <p className="tarjeta-noticia-date">
          {noticia.fechaPublicacion || noticia.attributes?.fechaPublicacion}
        </p>
        <p className="tarjeta-noticia-summary line-clamp-2">
          {noticia.resumen || noticia.attributes?.resumen}
        </p>
      </div>
    </div>
  );
};

export default TarjetaNoticia;
