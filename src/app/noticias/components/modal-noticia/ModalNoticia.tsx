"use client";

import React, { useEffect } from "react";
import "./ModalNoticia.css";

interface Noticia {
	id: string | number;
	portada?: string;
	titulo?: string;
	fechaPublicacion?: string;
	resumen?: string;
	contenido?: string;
	[key: string]: any;
}

interface ModalNoticiaProps {
	noticia: Noticia;
	onClose: () => void;
}

const ModalNoticia: React.FC<ModalNoticiaProps> = ({ noticia, onClose }) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	return (
		<div className="modal-noticia-overlay" onClick={onClose}>
			<div
				className="modal-noticia-container"
				onClick={(e) => e.stopPropagation()}
				tabIndex={0}
				role="dialog"
				aria-modal="true"
			>
				<button className="modal-noticia-close" onClick={onClose} aria-label="Cerrar">
					&times;
				</button>
				<div className="modal-noticia-img-wrapper">
					<img
						src={noticia.portada || "/placeholder-noticia.jpg"}
						alt={noticia.titulo || "Noticia"}
						className="modal-noticia-img"
					/>
				</div>
				<div className="modal-noticia-content">
					<h2 className="modal-noticia-title">{noticia.titulo}</h2>
					<p className="modal-noticia-date">
						{noticia.fechaPublicacion || noticia.attributes?.fechaPublicacion}
					</p>
					<p className="modal-noticia-summary">
						{noticia.resumen || noticia.attributes?.resumen}
					</p>
					<div className="modal-noticia-body">
						{/* Renderizar contenido HTML si existe */}
						{noticia.contenido ? (
							<div
								dangerouslySetInnerHTML={{ __html: noticia.contenido }}
							/>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalNoticia;
