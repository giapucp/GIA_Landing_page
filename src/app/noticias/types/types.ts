export type Categoria = {
  id: string | number;
  nombre: string;
};

export type Noticia = {
  id: string | number;
  titulo: string;
  contenido: string;
  textoFinal?: string;
  fechaPublicacion: string;
  portada: string;
  categorias: Categoria[];
  [key: string]: unknown;
};

export type YearWithRows = {
  year: string;
  rows: Noticia[][];
};
