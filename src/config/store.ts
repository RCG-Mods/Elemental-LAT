/**
 * Elemental LAT — Store catalog (showcase only).
 *
 * This is a *display* store: it lists items sold in-server with their prices and
 * stipulations. There is NO checkout on the site — purchases are arranged through
 * Discord / the server staff.
 *
 * How to update:
 *   1. Prices & stipulations live in `storeCategories[].items` below.
 *   2. Each item is an object keyed by the category's `columns` (plus `name`).
 *      `price` is always shown first after the name; extra columns are per-category.
 *   3. Purchase clauses (Términos y Condiciones) live in `storeTerms` (global) and
 *      `storeCategories[].terms` (specific to that category).
 *
 * NOTE: The items below are PLACEHOLDERS so the page renders. Replace them with the
 * real catalog as prices are provided.
 */

/** Icon keys mapped to components in the store components. */
export type StoreIconKey =
  | "vehiculos"
  | "propiedades"
  | "negocios"
  | "prendas"
  | "armas"
  | "items";

export type StoreColumn = {
  /** Object key inside each item. */
  key: string;
  /** Column header shown in the table. */
  label: string;
  align?: "left" | "right" | "center";
};

/** An item row. `name` + `price` are always present; the rest match `columns`. */
export type StoreItem = {
  name: string;
  price: string;
} & Record<string, string>;

export type StoreCategory = {
  id: string;
  name: string;
  /** Decorative Japanese label. */
  jp: string;
  icon: StoreIconKey;
  /** One-line summary shown under the category title. */
  tagline: string;
  /** Optional showcase image (path under /public, e.g. "/store/xxx.png"). */
  image?: string;
  /** Alt text for the showcase image. */
  imageAlt?: string;
  /** Extra columns (besides Ítem + Precio) for this category's table. */
  columns: StoreColumn[];
  items: StoreItem[];
  /** Purchase clauses specific to this category. */
  terms: string[];
};

/** Meta shown in the page hero + header chip. */
export const storeMeta = {
  version: "1.0.0",
  updated: "En construcción",
  /** Where a buyer is sent to actually purchase (ticket / staff). */
  buyNote:
    "Las compras se gestionan por ticket en Discord con el staff. La web es solo un catálogo informativo.",
} as const;

/** Global Terms & Conditions that apply to every purchase. */
export const storeTerms: string[] = [
  "Todos los precios se expresan en dólares del servidor (economía IC en USD) y pueden cambiar sin previo aviso.",
  "La compra de cualquier ítem es un acuerdo OOC entre el jugador y el staff; el objeto se entrega dentro del personaje (IC) una vez confirmado el pago.",
  "Los ítems adquiridos son personales e intransferibles salvo que la ficha del ítem indique lo contrario.",
  "El staff se reserva el derecho de ajustar, retirar o balancear cualquier ítem por motivos de estabilidad o economía del servidor.",
  "Ningún ítem otorga ventajas de administración, inmunidad a las normas ni excepciones al reglamento IC/OOC.",
];

/**
 * Category catalog. Fill `items` with the real data as it's provided.
 * Keep `columns` in sync with the keys used inside each item.
 */
export const storeCategories: StoreCategory[] = [
  {
    id: "vehiculos",
    name: "Vehículos",
    jp: "車両",
    icon: "vehiculos",
    tagline: "Coches, motos y vehículos especiales disponibles para compra.",
    columns: [
      { key: "clase", label: "Clase" },
      { key: "peso", label: "Peso máx. maletero", align: "right" },
      { key: "nota", label: "Notas" },
    ],
    items: [
      // PLACEHOLDER — reemplazar con el catálogo real de vehículos.
      { name: "Ejemplo — Sedán", price: "—", clase: "Civil", peso: "—", nota: "Pendiente de precio" },
    ],
    terms: [
      "El vehículo se entrega con documentación IC a nombre del comprador.",
      "El peso máximo del maletero es fijo por modelo y no es ampliable.",
    ],
  },
  {
    id: "propiedades",
    name: "Propiedades",
    jp: "不動産",
    icon: "propiedades",
    tagline:
      "Departamentos para tu personaje en tres ubicaciones: dos en el centro (Torre Elemental y Torre Central) y los departamentos de la playa.",
    image: "/store/departamentos.png",
    imageAlt: "Torre Elemental y Torre Central de noche en el centro de la ciudad",
    columns: [
      { key: "ubicaciones", label: "Ubicaciones" },
    ],
    items: [
      { name: "Departamentos", price: "$30", ubicaciones: "Torre Elemental, Torre Central y Playa" },
    ],
    terms: [
      "Cualquier departamento dentro de Elemental tiene un costo único de $30, sin importar la ubicación.",
      "El departamento queda registrado a nombre del personaje comprador.",
    ],
  },
  {
    id: "negocios",
    name: "Negocios",
    jp: "ビジネス",
    icon: "negocios",
    tagline: "Locales y licencias comerciales para emprender.",
    columns: [
      { key: "tipo", label: "Tipo" },
      { key: "empleados", label: "Empleados máx.", align: "right" },
      { key: "nota", label: "Notas" },
    ],
    items: [
      // PLACEHOLDER — reemplazar con el catálogo real de negocios.
      { name: "Ejemplo — Local comercial", price: "—", tipo: "Comercio", empleados: "—", nota: "Pendiente de precio" },
    ],
    terms: [
      "La compra de un negocio implica el compromiso de mantenerlo activo en rol.",
      "El staff puede reasignar un negocio inactivo tras el periodo indicado en la normativa.",
    ],
  },
  {
    id: "prendas",
    name: "Prendas y accesorios",
    jp: "装飾品",
    icon: "prendas",
    tagline: "Cadenas, relojes y accesorios cosméticos para tu personaje.",
    columns: [
      { key: "tipo", label: "Tipo" },
      { key: "efecto", label: "Efecto" },
      { key: "nota", label: "Notas" },
    ],
    items: [
      // PLACEHOLDER — reemplazar con el catálogo real de prendas.
      { name: "Ejemplo — Cadena de oro", price: "—", tipo: "Accesorio", efecto: "Cosmético", nota: "Pendiente de precio" },
    ],
    terms: [
      "Las prendas y accesorios son puramente cosméticos salvo que se indique un efecto.",
      "Un accesorio robado en rol pasa a manos del atacante según las reglas IC.",
    ],
  },
  {
    id: "armas",
    name: "Armas (armerías)",
    jp: "武器",
    icon: "armas",
    tagline: "Armas destinadas a armerías con licencia.",
    columns: [
      { key: "categoria", label: "Categoría" },
      { key: "municion", label: "Munición" },
      { key: "nota", label: "Notas" },
    ],
    items: [
      // PLACEHOLDER — reemplazar con el catálogo real de armas.
      { name: "Ejemplo — Pistola", price: "—", categoria: "Ligera", municion: "9mm", nota: "Requiere licencia" },
    ],
    terms: [
      "La venta de armas es exclusiva para armerías y facciones con licencia aprobada por el staff.",
      "El uso de cualquier arma queda sujeto al código penal IC y a las normas de PvP.",
    ],
  },
  {
    id: "items",
    name: "Ítems para negocios",
    jp: "アイテム",
    icon: "items",
    tagline: "Objetos con o sin prop para equipar y operar tus negocios.",
    columns: [
      { key: "prop", label: "Prop" },
      { key: "uso", label: "Uso" },
      { key: "nota", label: "Notas" },
    ],
    items: [
      // PLACEHOLDER — reemplazar con el catálogo real de ítems.
      { name: "Ejemplo — Máquina", price: "—", prop: "Sí", uso: "Negocio", nota: "Pendiente de precio" },
    ],
    terms: [
      "Algunos ítems incluyen un prop físico colocable; otros son solo de inventario.",
      "La ubicación de un prop de negocio debe ser aprobada por el staff.",
    ],
  },
];
