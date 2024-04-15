//Array de productos
const productos = [
    {
        id: "perfiles",
        nombre:"Perfil PGC 150",
        imagen: "../scss/recursos/perfiles/BARBIERI-PGC-150.jpg",
        categoria: {
            nombre: "Perfiles",
            id: "",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "perfiles",
        nombre:"Perfil PGC 150 c/Punch",
        imagen: "../scss/recursos/perfiles/BARBIERI-PGC-150-CON-PUNCH.jpg",
        categoria: {
            nombre: "Perfiles",
            id: "perfiles",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "perfiles",
        nombre:"Perfil PGC 100",
        imagen: "../scss/recursos/perfiles/BARBIERI-PGC-100.jpg",
        categoria: {
            nombre: "Perfiles",
            id: "perfiles",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "perfiles",
        nombre:"Perfil PGC 100 con Punch",
        imagen: "../scss/recursos/perfiles/BARBIERI-PGC-100-CON-PUNCH.jpg",
        categoria: {
            nombre: "Perfiles",
            id: "perfiles",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "perfiles",
        nombre:"Perfil PGC 70",
        imagen: "../scss/recursos/perfiles/BARBIERI-PGC-70.jpg",
        categoria: {
            nombre: "Perfiles",
            id: "perfiles",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "perfiles",
        nombre:"Perfil PGC 70 con Punch",
        imagen: "../scss/recursos/perfiles/BARBIERI-PGC-70-CON-PUNCH.jpg",
        categoria: {
            nombre: "Perfiles",
            id: "perfiles",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "accesorios",
        nombre:"Arandela p/anclaje BARBIERI",
        imagen: "../scss/recursos/accesorios/BARBIERI-ANCLAJE-SA-23 (2).jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "accesorios",
        nombre:"MASILLA PLACO® SC",
        imagen: "../scss/recursos/placas/Placo-Masilla-SC.jpg.jfif",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        marca: "PLACO",
        detalle: "Para todos los pasos del tomado de juntas con cinta de papel micro perforada, recubrimiento de tornillos y masillado completo en semicubiertos.",
    },
    {
        id: "accesorios",
        nombre:"Cartela 300x300 perforada",
        imagen: "../scss/recursos/accesorios/BARBIERI-CARTELA-300X300X1,29MM-PERFORADA-.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "accesorios",
        nombre:"Conector de columna BARBIERI",
        imagen: "../scss/recursos/accesorios/BARBIERI-CONECTOR-COLUMNA.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "accesorios",
        nombre:"Tensor p/crúz de San Andres",
        imagen: "../scss/recursos/accesorios/BARBIERI-TENSOR-PARA-CRUZ-DE-SAN-ANDRÉS-CON-TOR.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "accesorios",
        nombre:"Anclaje Shtt 14",
        imagen: "../scss/recursos/accesorios/BARBIERI-ANCLAJE-SHTT-14.jpg",
        categoria: {
            nombre: "Accesorios",
            id: "accesorios",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "complementos",
        nombre:"Tornillo T1 Aguja",
        imagen: "../scss/recursos/complementos/BARBIERI-T1-AGUJA.jpg",
        categoria: {
            nombre: "Complementos",
            id: "complementos",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "complementos",
        nombre:"Tornillo T2 Mecha",
        imagen: "../scss/recursos/complementos/BARBIERI-T2-MECHA.jpg",
        categoria: {
            nombre: "Complementos",
            id: "complementos",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "complementos",
        nombre:"Tornillo 6x3 negro",
        imagen: "../scss/recursos/complementos/BARBIERI-TORNILLO-6x3-4-NEGRO.jpg",
        categoria: {
            nombre: "Complementos",
            id: "complementos",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "complementos",
        nombre:"Tornillo 6x3 con estrias",
        imagen: "../scss/recursos/complementos/BARBIERI-TORNILLOS-6X3-4-NEGRO-CON-ESTRIAS.jpg",
        categoria: {
            nombre: "Complementos",
            id: "complementos",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "complementos",
        nombre:"Tornillo 12x3 con estrias",
        imagen: "../scss/recursos/complementos/BARBIERI-TORNILLOS-12X3-NEGRO-CON-ESTRIAS.jpg",
        categoria: {
            nombre: "Complementos",
            id: "complementos",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "complementos",
        nombre:"Tornillo cabeza hexagonal",
        imagen: "../scss/recursos/complementos/BARBIERI-TORNILLOS-CABEZA-HEXAGONAL.jpg",
        categoria: {
            nombre: "Complementos",
            id: "complementos",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "complementos",
        nombre:"Tarugo para deck",
        imagen: "../scss/recursos/complementos/BARBIERI-TARUGO-P-DECK.jpg",
        categoria: {
            nombre: "Complementos",
            id: "complementos",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "placas",
        nombre:"Placa STD®",
        imagen: "../scss/recursos/placas/Placo-STD-Thumbnail.jfif",
        categoria: {
            nombre: "Placas",
            id: "placas",
        },
        marca: "PLACO",
        detalle: "Placa de yeso estandar PLACO® STD para usos interiores en ambientes libres de humedad.",
    },
    {
        id: "placas",
        nombre:"Placa IMPACT®",
        imagen: "../scss/recursos/placas/Placo-IMPACT-Thumbnail.jpg.jfif",
        categoria: {
            nombre: "Placas",
            id: "placas",
        },
        marca: "PLACO",
        detalle: "Placa de yeso PLACO® IMPACT, para usos interiores en ambientes con alto requerimiento al impacto y aislación acústica.",
    },
    {
        id: "placas",
        nombre:"Placa GLASROC X®",
        imagen: "../scss/recursos/placas/GlasrocX_Placa.JPG.jfif",
        categoria: {
            nombre: "Placas",
            id: "placas",
        },
        marca: "PLACO",
        detalle: "GLASROC X®, placa de yeso laminado para fachadas, cerramientos y semicubiertos sustentables.",
    },
    {
        id: "placas",
        nombre:"Placa IMPACT RH®",
        imagen: "../scss/recursos/placas/Placa-Impact-RH.jpg.jfif",
        categoria: {
            nombre: "Placas",
            id: "placas",
        },
        marca: "PLACO",
        detalle: "Placa de yeso PLACO® IMPACT RH, para usos interiores en ambientes humedos con alto requerimiento al impacto y aislación acústica.",
    },
    {
        id: "placas",
        nombre:"Placa SC®",
        imagen: "../scss/recursos/placas/Placo-SC.jpg.jfif",
        categoria: {
            nombre: "Placas",
            id: "placas",
        },
        marca: "PLACO",
        detalle: "Placa de yeso PLACO® SC, para uso en cielorrasos semicubiertos.",
    },
    {
        id: "placas",
        nombre:"Placa RF®",
        imagen: "../scss/recursos/placas/Placo-RF.jpg.jfif",
        categoria: {
            nombre: "Placas",
            id: "placas",
        },
        marca: "PLACO",
        detalle: "Placa de yeso PLACO®  RF, para usos interiores en ambientes con requerimiento de alta resistencia al fuego.",
    },
    {
        id: "tx",
        nombre:"Larguero 24mm",
        imagen: "../scss/recursos/TX/BARBIERI-LARGUERO-TX-LP-(24-MM).jpg",
        categoria: {
            nombre: "Tx",
            id: "tx",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "tx",
        nombre:"Perimetral P1516",
        imagen: "../scss/recursos/TX/BARBIERI-PERIMETRAL-TX-P1516.jpg",
        categoria: {
            nombre: "Tx",
            id: "tx",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "tx",
        nombre:"Travesaño corto 24mm",
        imagen: "../scss/recursos/TX/BARBIERI-TRAV-CORTO-TX-TP-1516(24-MM).jpg",
        categoria: {
            nombre: "Tx",
            id: "tx",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "drywall",
        nombre:"Angulo de ajuste BARBIERI",
        imagen: "../scss/recursos/drywall/BARBIERI-ANGULO-DE-AJUSTE.jpg",
        categoria: {
            nombre: "Drywall",
            id: "drywall",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "drywall",
        nombre:"Buña perimetral para placa 12,5mm",
        imagen: "../scss/recursos/drywall/BARBIERI-BUÑA-PERIM.-PPLACA12,5MM.jpg",
        categoria: {
            nombre: "Drywall",
            id: "drywall",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "drywall",
        nombre:"Cantonera BARBIERI 31",
        imagen: "../scss/recursos/drywall/BARBIERI-CANTONERA-31.jpg",
        categoria: {
            nombre: "Drywall",
            id: "drywall",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "drywall",
        nombre:"Montante 34 rigidizado BARBIERI",
        imagen: "../scss/recursos/drywall/BARBIERI-MONTANTE-34-RIGIDIZADO.jpg",
        categoria: {
            nombre: "Drywall",
            id: "drywall",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "drywall",
        nombre:"Montante 69 rigidizado BARBIERI",
        imagen: "../scss/recursos/drywall/BARBIERI-MONTANTE-69-RIGIDIZADO.jpg",
        categoria: {
            nombre: "Drywall",
            id: "drywall",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "drywall",
        nombre:"Omega 12,5mm BARBIERI",
        imagen: "../scss/recursos/drywall/BARBIERI-OMEGA-12,5.jpg",
        categoria: {
            nombre: "Drywall",
            id: "drywall",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "drywall",
        nombre:"Solera 35 rigidizada BARBIERI",
        imagen: "../scss/recursos/drywall/BARBIERI-SOLERA-35-RIGIDIZADA.jpg",
        categoria: {
            nombre: "Drywall",
            id: "drywall",
        },
        marca: "BARBIERI",
        detalle: "",
    },
    {
        id: "drywall",
        nombre:"Solera 70 rigidizada BARBIERI",
        imagen: "../scss/recursos/drywall/BARBIERI-SOLERA-35-RIGIDIZADA.jpg",
        categoria: {
            nombre: "Drywall",
            id: "drywall",
        },
        marca: "BARBIERI",
        detalle: "",
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");//Selección de pestañas en e-shop
const tituloPrincipal = document.querySelector("#titulo-principal");//Cambia el titulo principal

// Función para mezclar aleatoriamente un array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function cargarProductos(productosElegidos) {
    // Mezclar aleatoriamente los productos y luego tomar los primeros 9
    const productosAleatorios = shuffle(productosElegidos).slice(0, 6);

    contenedorProductos.innerHTML = "";

    productosAleatorios.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add('producto');
        div.innerHTML = ` 
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.nombre}" width="300px">
            <div class="producto-detalles">
                <h5 class="producto-titulo">${producto.nombre}</h3>
                <p class="producto-marca">${producto.marca}</p>
                <p class="producto-detalle">${producto.detalle}</p>
                <span class="producto-consultar" id="${producto.id}"><a href="https://wa.me/5492216541916" class="btn-wsp" target="_blank">Consultar</span>
            </div>
        `;
        contenedorProductos.append(div);
    });
}

cargarProductos(productos);

//Selección de pestañas en e-shop
botonesCategorias.forEach(boton => {
    boton.addEventListener('click', (e) => {
        // Utiliza el identificador único del span en lugar del id del botón
        botonesCategorias.forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        // Obtener el id de la categoría que se ha seleccionado
        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        };
    });
});