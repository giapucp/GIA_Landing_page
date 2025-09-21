"use client";

import React, { useState, useEffect } from "react";
import { Copy, Share2, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function DonatePage() {

  const YAPE_PLIN_QR = "/qr_pagos/qr_plin.jpg";

  const [copied, setCopied] = useState<{ which: string; at: number | null }>({ which: "", at: null });

  // Limpiar estado de "copiado" después de 2 segundos
  useEffect(() => {
    if (copied.at) {
      const timer = setTimeout(() => {
        setCopied({ which: "", at: null });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied.at]);

  async function copyNumber(text: string, which: string) {
    if (!text) return;
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        setCopied({ which, at: Date.now() });
      } else {
        // fallback para navegadores más antiguos
        if (typeof document !== "undefined") {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.left = "-9999px";
          document.body.appendChild(ta);
          ta.select();
          try {
            document.execCommand("copy");
            setCopied({ which, at: Date.now() });
          } catch (err) {
            console.warn("Error copiando:", err);
          }
          ta.remove();
        }
      }
    } catch (e) {
      console.warn("Error en copyNumber:", e);
    }
  }

  async function sharePage() {
    const shareData = {
      title: "Apoya nuestra causa",
      text: "Puedes hacer tu donación fácilmente por Yape o Plin",
      url: window.location.href
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        console.log("Compartir cancelado o no soportado");
        // Fallback: copiar URL al portapapeles
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          alert("Enlace copiado al portapapeles");
        }
      }
    } else {
      // Fallback: copiar URL
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        alert("Enlace copiado al portapapeles");
      }
    }
  }

  function shareWhatsApp() {
    const text = `¡Hola! Te comparto esta página para hacer donaciones fácilmente por Plin: ${window.location.href}`;
    const encoded = encodeURIComponent(text);
    const url = `https://api.whatsapp.com/send?text=${encoded}`;
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  }



  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center p-4 pt-24">
      <section className="w-full max-w-2xl bg-gradient-to-br from-green-50 to-green-200 rounded-3xl shadow-2xl overflow-hidden">
        {/* Header de la sección */}
        <div className="px-4 py-2 md:px-5 md:py-3 text-center border-b border-green-100">
          <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-green-700 mb-1 tracking-tight font-barlow-condensed">
            Construyamos este camino juntos
          </h1>
          <h2 className="text-lg md:text-xl text-green-800 font-medium">
            Sé parte de nuestra misión impulsando la ingeniería aeroespacial
          </h2>
        </div>

        {/* Tarjeta Plin única */}
        <div className="p-4 md:p-6 flex flex-col items-center justify-center">
          <article className="w-full bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-sm">
            <div className="flex flex-col items-center gap-2">
              <span className="text-green-700 font-bold text-lg md:text-xl mb-2">Yape/Plin</span>
              <div className="w-64 h-64 md:w-50 md:h-50 rounded-xl overflow-hidden bg-white p-4 border-2 border-green-200 grid place-items-center shadow-sm mb-2">
                <Image
                  src={YAPE_PLIN_QR}
                  alt="QR Yape/Plin"
                  width={200}
                  height={200}
                  unoptimized={true}
                />
              </div>
            </div>
          </article>
        </div>

        {/* Footer con opciones de compartir */}
        <div className="bg-gradient-to-br from-green-100 to-green-200 p-4 md:p-6 border-t border-green-100 mt-0">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-0">
            <button
              onClick={sharePage}
              className="w-full sm:w-48 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition-colors shadow-lg cursor-pointer"
              type="button"
            >
              <Share2 size={35} />
              Compartir página
            </button>

            <button
              onClick={shareWhatsApp}
              className="w-full sm:w-48 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition-colors shadow-lg cursor-pointer"
              type="button"
            >
              <MessageCircle size={35} />
              Compartir por WhatsApp
            </button>
          </div>
        </div>

      </section>
    </main>
  );
}