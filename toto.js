// Sample animal data
const animals = [
    {
        id: 1,
        name: "Buddy",
        type: "dog",
        breed: "Golden Retriever",
        age: "2 ans",
        gender: "Mâle",
        size: "Grand",
        location: "Paris",
        description: "Buddy est un golden retriever très affectueux et joueur. Il adore les promenades et se comporte bien avec les autres animaux et les enfants.",
        image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 2,
        name: "Luna",
        type: "cat",
        breed: "Siamois",
        age: "1 an",
        gender: "Femelle",
        size: "Moyen",
        location: "Lyon",
        description: "Luna est une chatte siamois très élégante et calme. Elle apprécie les moments de calme et les câlins sur le canapé.",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 3,
        name: "Max",
        type: "dog",
        breed: "Labrador",
        age: "3 ans",
        gender: "Mâle",
        size: "Grand",
        location: "Marseille",
        description: "Max est un labrador plein d'énergie qui adore jouer dans l'eau. Très sociable et obéissant, il sera un compagnon parfait.",
        image: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 4,
        name: "Bella",
        type: "cat",
        breed: "Persan",
        age: "4 ans",
        gender: "Femelle",
        size: "Petit",
        location: "Bordeaux",
        description: "Bella est une chatte persan très calme et douce. Elle apprécie les intérieurs calmes et les siestes au soleil.",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 5,
        name: "Charlie",
        type: "dog",
        breed: "Beagle",
        age: "5 ans",
        gender: "Mâle",
        size: "Moyen",
        location: "Toulouse",
        description: "Charlie est un beagle très joueur et curieux. Il adore renifler partout et serait ravi d'avoir un jardin à explorer.",
        image: "https://images.unsplash.com/photo-1556910639-fe1a8b5e0d3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 6,
        name: "Milo",
        type: "cat",
        breed: "European Shorthair",
        age: "2 ans",
        gender: "Mâle",
        size: "Moyen",
        location: "Nantes",
        description: "Milo est un chat européen très sociable et affectueux. Il s'entend bien avec les autres chats et adore jouer.",
        image: "https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 7,
        name: "Nibbles",
        type: "rodent",
        breed: "Hamster nain",
        age: "1 an",
        gender: "Mâle",
        size: "Très petit",
        location: "Lille",
        description: "Nibbles est un hamster nain très actif la nuit. Parfait pour observer ses drôles de petites habitudes nocturnes.",
        image: "https://images.unsplash.com/photo-1461226111845-9b9af3c8ac3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: false
    },
    {
        id: 8,
        name: "Caramel",
        type: "rodent",
        breed: "Cochon d'Inde",
        age: "2 ans",
        gender: "Femelle",
        size: "Petit",
        location: "Strasbourg",
        description: "Caramel est une cochon d'Inde très sociable qui adore être caressée et manger des légumes frais.",
        image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 9,
        name: "Rocky",
        type: "dog",
        breed: "Bouledogue Français",
        age: "2 ans",
        gender: "Mâle",
        size: "Petit",
        location: "Nice",
        description: "Rocky est un bouledogue français très drôle et affectueux. Il adore se blottir contre ses humains.",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 10,
        name: "Whiskers",
        type: "cat",
        breed: "Main Coon",
        age: "3 ans",
        gender: "Mâle",
        size: "Grand",
        location: "Rennes",
        description: "Whiskers est un magnifique main coon très imposant mais d'une grande douceur. Il aime les grandes surfaces pour se dégourdir.",
        image: "https://images.unsplash.com/photo-1492370285008-733e39a91965?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    // More dogs (11-15)
    {
        id: 11,
        name: "Daisy",
        type: "dog",
        breed: "Teckel",
        age: "4 ans",
        gender: "Femelle",
        size: "Petit",
        location: "Montpellier",
        description: "Daisy est une teckel très énergique qui adore courir partout. Elle est très affectueuse avec sa famille.",
        image: "https://images.unsplash.com/photo-1554984201-29a1c4e10c8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 12,
        name: "Zeus",
        type: "dog",
        breed: "Dobermann",
        age: "2 ans",
        gender: "Mâle",
        size: "Grand",
        location: "Toulon",
        description: "Zeus est un dobermann impressionnant mais au cœur tendre. Il est très protecteur avec sa famille.",
        image: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 13,
        name: "Lola",
        type: "dog",
        breed: "Carlin",
        age: "5 ans",
        gender: "Femelle",
        size: "Petit",
        location: "Grenoble",
        description: "Lola est une carlin très calme qui adore se prélasser confortablement. Elle ronfle un peu mais c'est tout son charme!",
        image: "https://images.unsplash.com/photo-1530046339919-2f0fc76a7b36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 14,
        name: "Bruno",
        type: "dog",
        breed: "Rottweiler",
        age: "3 ans",
        gender: "Mâle",
        size: "Grand",
        location: "Dijon",
        description: "Bruno est un rottweiler très loyal et intelligent. Il a besoin d'un maître expérimenté pour canaliser son énergie.",
        image: "https://images.unsplash.com/photo-1594149929911-2b6c2e72b0a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 15,
        name: "Coco",
        type: "dog",
        breed: "Caniche",
        age: "6 ans",
        gender: "Femelle",
        size: "Moyen",
        location: "Angers",
        description: "Coco est une caniche très intelligente et élégante. Elle aime les activités stimulantes et apprendre de nouveaux tours.",
        image: "https://images.unsplash.com/photo-1618173745201-8e3bf8978acc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    // More cats (16-20)
    {
        id: 16,
        name: "Shadow",
        type: "cat",
        breed: "British Shorthair",
        age: "2 ans",
        gender: "Mâle",
        size: "Moyen",
        location: "Tours",
        description: "Shadow est un British Shorthair au pelage gris magnifique. Il est très calme et indépendant mais apprécie la compagnie.",
        image: "https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 17,
        name: "Misty",
        type: "cat",
        breed: "Sacré de Birmanie",
        age: "1 an",
        gender: "Femelle",
        size: "Moyen",
        location: "Le Havre",
        description: "Misty est une magnifique birmane aux yeux bleus hypnotisants. Elle est très douce et sociable.",
        image: "https://images.unsplash.com/photo-1593483316248-9cbe8c46a6a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 18,
        name: "Simba",
        type: "cat",
        breed: "Bengal",
        age: "3 ans",
        gender: "Mâle",
        size: "Grand",
        location: "Reims",
        description: "Simba est un Bengal très actif avec un magnifique pelage tacheté. Il adore grimper et a besoin d'espace pour dépenser son énergie.",
        image: "https://images.unsplash.com/photo-1577990967984-bf0897e0ff63?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 19,
        name: "Zoe",
        type: "cat",
        breed: "Ragdoll",
        age: "2 ans",
        gender: "Femelle",
        size: "Grand",
        location: "Saint-Étienne",
        description: "Zoe est une ragdoll très affectueuse qui se laisse porter comme une poupée de chiffon. Elle est parfaite pour les familles.",
        image: "https://images.unsplash.com/photo-1570458436416-b8fcccfe883f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 20,
        name: "Oliver",
        type: "cat",
        breed: "Maine Coon",
        age: "4 ans",
        gender: "Mâle",
        size: "Très grand",
        location: "Toulon",
        description: "Oliver est un Maine Coon très imposant avec une belle crinière. Il est très sociable et affectueux.",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    // More rodents (21-22)
    {
        id: 21,
        name: "Peanut",
        type: "rodent",
        breed: "Souris domestique",
        age: "1 an",
        gender: "Femelle",
        size: "Très petit",
        location: "Limoges",
        description: "Peanut est une petite souris très curieuse et active. Elle adore explorer son environnement et grimper partout.",
        image: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: false,
        sterilized: false
    },
    {
        id: 22,
        name: "Oreo",
        type: "rodent",
        breed: "Rat domestique",
        age: "2 ans",
        gender: "Mâle",
        size: "Petit",
        location: "Amiens",
        description: "Oreo est un rat très intelligent et sociable. Il adore les interactions avec les humains et apprendre des tours.",
        image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: false,
        sterilized: true
    },
    // Other animals (23-25)
    {
        id: 23,
        name: "Frida",
        type: "other",
        breed: "Perruche ondulée",
        age: "3 ans",
        gender: "Femelle",
        size: "Petit",
        location: "Nancy",
        description: "Frida est une perruche très colorée et bavarde. Elle adore imiter les sons et interagir avec son entourage.",
        image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: false,
        sterilized: false
    },
    {
        id: 24,
        name: "Rafiki",
        type: "other",
        breed: "Lapin nain",
        age: "1 an",
        gender: "Mâle",
        size: "Petit",
        location: "Caen",
        description: "Rafiki est un lapin nain très calin. Il aime se faire caresser et grignoter des légumes frais.",
        image: "https://images.unsplash.com/photo-1556838803-cc94986cb631?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: true,
        sterilized: true
    },
    {
        id: 25,
        name: "Shelly",
        type: "other",
        breed: "Tortue terrestre",
        age: "10 ans",
        gender: "Femelle",
        size: "Moyen",
        location: "Besançon",
        description: "Shelly est une tortue terrestre très paisible. Elle a besoin d'un enclos spacieux avec des zones ensoleillées et ombragées.",
        image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        vaccinated: false,
        sterilized: false
    }
];

// Function to display animals
function displayAnimals(animalList) {
    const container = document.getElementById('animals-container');
    container.innerHTML = '';
    
    animalList.forEach(animal => {
        const typeColor = {
            'dog': 'bg-purple-400',
            'cat': 'bg-red-400',
            'rodent': 'bg-green-400',
            'other': 'bg-yellow-400'
        };
        
        const card = document.createElement('div');
        card.className = 'animal-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300';
        card.innerHTML = `
            <img src="${animal.image}" alt="${animal.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <div class="flex justify-between items-start">
                    <h3 class="font-bold text-lg">${animal.name}</h3>
                    <span class="${typeColor[animal.type]} text-white text-xs px-2 py-1 rounded-full">
                        ${animal.type === 'dog' ? 'Chien' : 
                          animal.type === 'cat' ? 'Chat' : 
                          animal.type === 'rodent' ? 'Rongeur' : 'Autre'}
                    </span>
                </div>
                <p class="text-gray-600 text-sm mt-1">${animal.breed} • ${animal.age}</p>
                <div class="mt-3 flex justify-between items-center">
                    <span class="text-pink-500 font-medium">${animal.location}</span>
                    <button onclick="showAnimalDetail(${animal.id})" class="text-pink-500 hover:text-pink-600">
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Function to show animal detail
function showAnimalDetail(animalId) {
    const animal = animals.find(a => a.id === animalId);
    if (!animal) return;
    
    const container = document.getElementById('animal-detail-content');
    container.innerHTML = '';
    
    const similarAnimals = animals
        .filter(a => a.type === animal.type && a.id !== animal.id)
        .slice(0, 3);
        
    const typeName = {
        'dog': 'Chien',
        'cat': 'Chat',
        'rodent': 'Rongeur',
        'other': 'Autre'
    };
    
    const detail = document.createElement('div');
    detail.className = 'bg-white rounded-xl shadow-lg overflow-hidden';
    detail.innerHTML = `
        <div class="md:flex">
            <div class="md:w-1/2">
                <img src="${animal.image}" alt="${animal.name}" class="w-full h-full object-cover">
            </div>
            <div class="md:w-1/2 p-6">
                <div class="flex justify-between items-start mb-4">
                    <h2 class="text-2xl font-bold">${animal.name}</h2>
                    <span class="bg-pink-500 text-white text-sm px-3 py-1 rounded-full">
                        ${typeName[animal.type]}
                    </span>
                </div>
                
                <div class="bg-pink-50 rounded-lg p-4 mb-4">
                    <h3 class="font-bold text-pink-600 mb-2">Caractéristiques</h3>
                    <div class="grid grid-cols-2 gap-2">
                        <div class="flex items-center text-sm">
                            <i class="fas fa-paw text-pink-500 mr-2"></i>
                            <span>Race: ${animal.breed}</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <i class="fas fa-birthday-cake text-pink-500 mr-2"></i>
                            <span>Âge: ${animal.age}</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <i class="fas fa-venus-mars text-pink-500 mr-2"></i>
                            <span>Sexe: ${animal.gender}</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <i class="fas fa-ruler text-pink-500 mr-2"></i>
                            <span>Taille: ${animal.size}</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <i class="fas fa-map-marker-alt text-pink-500 mr-2"></i>
                            <span>Localisation: ${animal.location}</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <i class="fas fa-syringe text-pink-500 mr-2"></i>
                            <span>Vacciné: ${animal.vaccinated ? 'Oui' : 'Non'}</span>
                        </div>
                        <div class="flex items-center text-sm">
                            <i class="fas fa-cut text-pink-500 mr-2"></i>
                            <span>Stérilisé: ${animal.sterilized ? 'Oui' : 'Non'}</span>
                        </div>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h3 class="font-bold text-gray-800 mb-2">Description</h3>
                    <p class="text-gray-600">${animal.description}</p>
                </div>
                
                <button onclick="adoptAnimal(${animal.id})" class="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
                    Adopter ${animal.name}
                </button>
            </div>
        </div>
        
        ${similarAnimals.length > 0 ? `
        <div class="p-6 border-t border-gray-200">
            <h3 class="font-bold text-gray-800 mb-4">Vous pourriez aussi aimer</h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                ${similarAnimals.map(similar => `
                    <div class="bg-pink-50 rounded-lg p-4 flex items-center cursor-pointer hover:bg-pink-100 transition" onclick="showAnimalDetail(${similar.id})">
                        <img src="${similar.image}" alt="${similar.name}" class="w-16 h-16 rounded-full object-cover mr-3">
                        <div>
                            <h4 class="font-medium">${similar.name}</h4>
                            <p class="text-sm text-gray-600">${similar.breed} • ${similar.age}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
    `;
    
    container.appendChild(detail);
    showPage('animal-detail');
}

// Filter animals by type
function filterAnimals(type) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active-filter', 'ring-2', 'ring-pink-500'));
    
    if (type !== 'all') {
        const activeBtn = document.querySelector(`.filter-btn[onclick="filterAnimals('${type}')"]`);
        activeBtn.classList.add('active-filter', 'ring-2', 'ring-pink-500');
    } else {
        document.querySelector('.filter-btn[onclick="filterAnimals(\'all\')"]').classList.add('active-filter', 'ring-2', 'ring-pink-500');
    }
    
    if (type === 'all') {
        displayAnimals(animals);
    } else {
        const filteredAnimals = animals.filter(animal => animal.type === type);
        displayAnimals(filteredAnimals);
    }
}

// Show page function
function showPage(page) {
    document.querySelectorAll('.page-content').forEach(el => el.classList.add('hidden'));
    document.getElementById(`${page}-page`).classList.remove('hidden');
    
    // Update active link in navigation
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active-tab'));
    if (page !== 'animal-detail') {
        document.getElementById(`${page}-link`).classList.add('active-tab');
    } else {
        document.getElementById('adoption-link').classList.add('active-tab');
    }
    
    // If showing adoption page, display all animals
    if (page === 'adoption') {
        displayAnimals(animals);
    }
}

// Back to adoption list
function backToAdoption() {
    showPage('adoption');
}

// Toggle modal
function toggleModal(modalId) {
    document.getElementById(modalId).classList.toggle('hidden');
}

// Toggle mobile menu
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
}

// Adopt animal function
function adoptAnimal(animalId) {
    const animal = animals.find(a => a.id === animalId);
    alert(`Merci pour votre intérêt à adopter ${animal.name} ! Un membre de notre équipe vous contactera bientôt pour discuter des prochaines étapes.`);
}

// Form submission handlers
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Connexion réussie !');
    toggleModal('loginModal');
    this.reset();
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
    }
    
    alert('Inscription réussie ! Bienvenue sur PawLove.');
    toggleModal('registerModal');
    this.reset();
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons dès que possible.');
    this.reset();
});

// Initialize the app - show home page and display all animals
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
    document.querySelector('.filter-btn[onclick="filterAnimals(\'all\')"]').classList.add('active-filter', 'ring-2', 'ring-pink-500');
});