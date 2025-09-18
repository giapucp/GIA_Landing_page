import React from "react";
import "./TarjetaNoticia.css";

interface Noticia {
	id: string | number;
	[key: string]: any;
}

interface TarjetaNoticiaProps {
	noticia: Noticia;
	onClick: () => void;
}

const TarjetaNoticia: React.FC<TarjetaNoticiaProps> = ({ noticia, onClick }) => {
	return (
		<div className="tarjeta-noticia" onClick={onClick} tabIndex={0} role="button">
			<div className="tarjeta-noticia-img-wrapper">
				<img
					src={noticia.portada || "/placeholder-noticia.jpg"}
					alt={noticia.titulo || "Noticia"}
					className="tarjeta-noticia-img"
				/>
			</div>
			<div className="tarjeta-noticia-content">
				<h2 className="tarjeta-noticia-title">{noticia.titulo}</h2>
				<p className="tarjeta-noticia-date">
					{noticia.fechaPublicacion || noticia.attributes?.fechaPublicacion}
				</p>
				<p className="tarjeta-noticia-summary">
					{noticia.resumen || noticia.attributes?.resumen}
				</p>
			</div>
		</div>
	);
};

export default TarjetaNoticia;
