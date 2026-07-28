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

/**
 * An item row. `name` + `price` are always present.
 * - In "table" layout, extra string keys match the category's `columns`.
 * - In "cards" layout, `image`/`imageAlt`/`desc` drive the card.
 */
export type StoreItem = {
  name: string;
  price: string;
  /** Card image (path under /public, e.g. "/store/xxx.png"). Cards layout only. */
  image?: string;
  imageAlt?: string;
  /** Short description shown on the card. Cards layout only. */
  desc?: string;
} & Record<string, string | undefined>;

export type StoreCategory = {
  id: string;
  name: string;
  /** Decorative Japanese label. */
  jp: string;
  icon: StoreIconKey;
  /** One-line summary shown under the category title. */
  tagline: string;
  /** How to present the items. Defaults to "table". */
  layout?: "table" | "cards";
  /** Optional showcase image (path under /public). Used in "table" layout. */
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
  "Todo archivo entregado tiene derecho a una (1) actualización gratuita, solicitada dentro de las 2 semanas posteriores a la entrega.",
  "Después de la actualización gratuita, cada actualización posterior cuesta el 50% del precio original del archivo.",
  "Se considera actualización cualquier archivo nuevo que reemplace al anterior, aunque no tenga relación con el original. Excepción: en las casas, para contar como actualización el archivo debe ubicarse en el mismo lugar físico que la casa anterior.",
  "Una vez que la administración agrega, revisa y acepta tu archivo, no puede modificarlo ni cobrarte una modificación de forma forzada por ningún cambio o actualización.",
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
    layout: "cards",
    columns: [],
    items: [
      {
        name: "Auto personalizado",
        price: "$60",
        image: "/store/venom.png",
        imageAlt: "Superdeportivo gris con alerón",
      },
    ],
    terms: [
      "Todos los vehículos pasan por la administración para ajustar su conductividad; el cambio se comenta en el ticket. Podrás probar cómo queda el vehículo antes de pagar para confirmar si es de tu agrado, pero la administración tiene el deber de regularlo por el bien del servidor y mantener un rol justo.",
      "Si algún archivo por separado supera los 14 MB, deberá optimizarse (no genera recargo).",
      "El recargo de $20 aplica únicamente si la carpeta completa del vehículo, sin comprimir, supera los 100 MB.",
    ],
  },
  {
    id: "propiedades",
    name: "Propiedades",
    jp: "不動産",
    icon: "propiedades",
    tagline:
      "Viviendas para tu personaje: departamentos en el centro y la playa, y casas normales.",
    layout: "cards",
    columns: [],
    items: [
      {
        name: "Departamentos",
        price: "$30",
        image: "/store/departamentos.png",
        imageAlt: "Torre Elemental y Torre Central de noche en el centro de la ciudad",
        desc: "Torre Elemental, Torre Central y Playa.",
      },
      {
        name: "Casas normales",
        price: "$50",
        image: "/store/casas-normales.png",
        imageAlt: "Casa moderna frente a la costa",
      },
      {
        name: "Casas grandes",
        price: "$80",
        image: "/store/casas-grandes.png",
        imageAlt: "Mansión de lujo con piscina en las colinas",
      },
    ],
    terms: [
      "Cualquier departamento dentro de Elemental tiene un costo único de $30, sin importar la ubicación.",
      "La propiedad queda registrada a nombre del personaje comprador.",
      "Al comprar una casa, la casa te pertenece. Si ninguna de las personas con llaves de esa casa entra durante 6 meses, se abrirá un ticket con el comprador; si un mes después del ticket sigue sin entrar nadie con llaves, se retirará la casa.",
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
      "Los negocios tienen un valor inicial de compra y un valor mensual.",
      "Puedes pagar como máximo dos meses por adelantado.",
      "Si durante el último mes no se abrió el negocio, no podrás pagar el mes siguiente y se te retirará el negocio.",
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
