// Información de los tipos de Pokémon
const pokemonData = {
    electrico: {
        title: "Tipo Eléctrico ⚡",
        description: "Los Pokémon de tipo eléctrico controlan la electricidad.",
        pokemon: [
            { name: "Pikachu", desc: "Un Pokémon eléctrico muy popular." },
            { name: "Raichu", desc: "Evolución de Pikachu." },
            { name: "Jolteon", desc: "Un Pokémon eléctrico rápido y poderoso." }
        ]
    },
    fuego: {
        title: "Tipo Fuego 🔥",
        description: "Los Pokémon de tipo fuego controlan el poder de las llamas.",
        pokemon: [
            { name: "Charmander", desc: "Su llama está siempre encendida." },
            { name: "Charizard", desc: "Evolución de Charmander, muy poderoso." },
            { name: "Vulpix", desc: "Un Pokémon de fuego elegante." }
        ]
    },
    planta: {
        title: "Tipo Planta 🌿",
        description: "Los Pokémon de tipo planta controlan la naturaleza.",
        pokemon: [
            { name: "Bulbasaur", desc: "Un Pokémon con una planta en su espalda." },
            { name: "Ivysaur", desc: "La evolución de Bulbasaur." },
            { name: "Venusaur", desc: "La evolución final de Bulbasaur." }
        ]
    },
    agua: {
        title: "Tipo Agua 💧",
        description: "Los Pokémon de tipo agua controlan el agua.",
        pokemon: [
            { name: "Squirtle", desc: "Un pequeño Pokémon tortuga." },
            { name: "Wartortle", desc: "Evolución de Squirtle." },
            { name: "Blastoise", desc: "Un Pokémon de agua con cañones." }
        ]
    },
    volador: {
        title: "Tipo Volador 🌬️",
        description: "Los Pokémon de tipo volador controlan los vientos.",
        pokemon: [
            { name: "Pidgey", desc: "Un pequeño pájaro volador." },
            { name: "Fearow", desc: "Evolución de Pidgey." },
            { name: "Charizard", desc: "Un Pokémon de fuego que también puede volar." }
        ]
    },
    roca: {
        title: "Tipo Roca 🪨",
        description: "Los Pokémon de tipo roca son fuertes y robustos.",
        pokemon: [
            { name: "Geodude", desc: "Un Pokémon roca con brazos fuertes." },
            { name: "Onix", desc: "Un Pokémon roca en forma de serpiente gigante." },
            { name: "Golem", desc: "Evolución final de Geodude." }
        ]
    }
};

// Funcionalidad para mostrar y ocultar la información
const typeCards = document.querySelectorAll('.pokemon-type-card');
const infoSection = document.getElementById('info-section');
const infoContent = document.getElementById('info-content');
const volverBtn = document.getElementById('volver-btn');

typeCards.forEach(card => {
    card.addEventListener('click', () => {
        const type = card.getAttribute('data-type');
        showPokemonInfo(type);
    });
});

volverBtn.addEventListener('click', () => {
    infoSection.classList.add('hidden');
    document.getElementById('main-section').classList.remove('hidden');
});

function showPokemonInfo(type) {
    const data = pokemonData[type];
    let content = `<h2>${data.title}</h2><p>${data.description}</p><ul>`;

    data.pokemon.forEach(pokemon => {
        content += `<li><strong>${pokemon.name}</strong>: ${pokemon.desc}</li>`;
    });

    content += '</ul>';
    infoContent.innerHTML = content;

    // Ocultar la sección principal y mostrar la información
    document.getElementById('main-section').classList.add('hidden');
    infoSection.classList.remove('hidden');
}
