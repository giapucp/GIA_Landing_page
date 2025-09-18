import type { Noticia, Categoria } from "../types/types";


import { API_URL, BASE_URL, getImageUrl } from "../../api/strapiBase";

const cache = new Map<string | number, Noticia>();

export async function fetchNoticias(): Promise<Noticia[]> {
  try {
    const response = await fetch(`${API_URL}/noticias?populate=*`);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const { data } = await response.json();
    return data.map((item: any) => {
      const attributes = item.attributes || item;
      return {
        id: item.id,
        titulo: attributes.titulo || "Sin título",
        contenido: attributes.contenido || "",
        textoFinal: attributes.textoFinal || "",
        fechaPublicacion:
          attributes.fechaPublicacion || new Date().toISOString(),
        portada: getImageUrl(attributes.portada),
        categorias: getCategories(attributes.categoria),
      };
    });
  } catch (error) {
    console.error("Error fetching noticias:", error);
    return [];
  }
}


function getCategories(categoria: any): Categoria[] {
  const categoriasData = categoria?.data || categoria;
  if (!Array.isArray(categoriasData)) return [];
  return categoriasData.map((cat: any) => ({
    id: cat.id,
    nombre: cat.attributes?.tipo || cat.tipo || "Sin categoría",
  }));
}

export async function fetchNoticiaById(id: string | number): Promise<Noticia | null> {
  if (cache.has(id)) {
    const noticia = cache.get(id);
    return noticia ?? null;
  }
  try {
    const response = await fetch(
      `${API_URL}/noticias/${id}?populate[portada]=*&populate[categoria]=*`
    );
    const { data } = await response.json();
    const noticia: Noticia = {
      id: data.id,
      ...data.attributes,
      portada: getImageUrl(data.attributes.portada?.data?.attributes),
      categorias: getCategories(data.attributes.categoria?.data),
    };
    cache.set(id, noticia);
    return noticia;
  } catch (error) {
    console.error(`Error fetching noticia ${id}:`, error);
    return null;
  }
}

export async function fetchNoticiasRecientes(limit = 4): Promise<Noticia[]> {
  try {
    const response = await fetch(
      `${API_URL}/noticias?populate=*&sort=fechaPublicacion:desc&pagination[limit]=${limit}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const { data } = await response.json();
    return data.map((noticia: any) => ({
      id: noticia.id,
      titulo: noticia.titulo || "Sin título",
      contenido: noticia.contenido || "",
      textoFinal: noticia.textoFinal || "",
      fechaPublicacion: noticia.fechaPublicacion || new Date().toISOString(),
      portada: noticia.portada?.url
        ? noticia.portada.url
        : "/placeholder-noticia.jpg",
      categorias:
        noticia.categoria?.map((cat: any) => ({
          id: cat.id,
          nombre: cat.tipo || "Sin categoría",
        })) || [],
    }));
  } catch (error) {
    console.error("Error fetching noticias recientes:", error);
    return [];
  }
}

export async function getNoticiasRecientes(limit = 4): Promise<Noticia[]> {
  try {
    const allNoticias = await fetchNoticias();
    return allNoticias
      .sort(
        (a, b) => new Date(b.fechaPublicacion).getTime() - new Date(a.fechaPublicacion).getTime()
      )
      .slice(0, limit);
  } catch (error) {
    console.error("Error al obtener noticias recientes:", error);
    return [];
  }
}
