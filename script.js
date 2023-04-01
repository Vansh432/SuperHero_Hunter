// Marvel cosmic project--->


// lets take input value and call other require element-->
let MarvelheroName = document.getElementById('MarvelheroName');
let HeroImage = document.querySelector('img');
let SuperHeroName = document.getElementById('SuperHeroName');
let precentage = document.querySelectorAll('.precentage');
let bar = document.querySelectorAll('.bar');
let superHeroDetail = document.getElementsByClassName('superHeroDetail');
let Like = document.getElementById('likeIcon');

//call addEventListener on input tag --->
MarvelheroName.addEventListener('keypress', (e) => {
  //we clicks on "Enter"
  let value = MarvelheroName.value;
  if (e.key === 'Enter') {
    if (value != '' && value != null) {
      getValue(MarvelheroName.value);//we are fatching the details of given input
      putHeartIcon(MarvelheroName.value);// 
    } else {
      alert("Enter the correct SuperHero Name");
    }
  }
});

//call api of superhero and fetch details of super hero-->
function getValue(v) {
  let url11 = `https://www.superheroapi.com/api.php/1364379917742994/search/${v}`;// fetch super hero
  fetch(url11).then((response) => {
    return response.json()
  }).then((data) => {
    putDetails(data);// put data on field
  });
}


//in this function, put all details or data in Super Hero skill Box--->
function putDetails(data) {
  let results = data.results;//fetch dataa
  HeroImage.src = `${results[0].image.url}`// put image  of superhero in src of Image *[HTML line no. 37]*-->
  SuperHeroName.innerText = `${results[0].name}`// put name of superhero *[HTML line no. 33]*
  let powerset = results[0].powerstats;// get powerset array. it's contains all skill power of superHero
  let i = 0;
  //put all skill in each particular skill box--> 
  for (const v in powerset) {
    if (powerset[v] == "null") {// power is null. that, put 0%--
      precentage[i].innerHTML = `0%`;
      bar[i].style.width = `0%`;
    } else {// power have same value that puts value of skill power--
      precentage[i].innerHTML = `${powerset[v]}%`;
      bar[i].style.width = `${powerset[v]}%`;
    }
    ++i;
  }
  superHeroDetail[0].style.display = "flex";// we set display:none, but in this line we set display: flex *[HTML line no. 35]*
  SuperHeroName.style.display = 'block';//we set display:none, but in this line we set display: flex *[HTML line no. 33]*
  likeIcon.style.display = "block";//we set display:none, but in this line we set display: flex *[HTML line no. 34]*
}

// adding suggestion on searching  therefor , all superHero name added in the array-->
let superHeroName = ["A-Bomb", "Abe Sapien", "Abin Sur", "Abomination", "Abraxas", "Absorbing Man", "Adam Monroe", "Adam Strange", "Agent 13", "Agent Bob", "Agent Zero", "Air-Walker", "Ajax", "Alan Scott", "Alex Mercer", "Alex Woolsly", "Alfred Pennyworth", "Alien", "Allan Quatermain", "Amazo", "Ammo", "Ando Masahashi", "Angel", "Angel", "Angel Dust", "Angel Salvadore", "Angela", "Animal Man", "Annihilus", "Ant-Man", "Ant-Man II", "Anti-Monitor", "Anti-Spawn", "Anti-Venom", "Apocalypse", "Aquababy", "Aqualad", "Aquaman", "Arachne", "Archangel", "Arclight", "Ardina", "Ares", "Ariel", "Armor", "Arsenal", "Astro Boy", "Atlas", "Atlas", "Atom", "Atom", "Atom Girl", "Atom II", "Atom III", "Atom IV", "Aurora", "Azazel", "Azrael", "Aztar", "Bane", "Banshee", "Bantam", "Batgirl", "Batgirl", "Batgirl III", "Batgirl IV", "Batgirl V", "Batgirl VI", "Batman", "Batman", "Batman II", "Battlestar", "Batwoman V", "Beak", "Beast", "Beast Boy", "Beetle", "Ben 10", "Beta Ray Bill", "Beyonder", "Big Barda", "Big Daddy", "Big Man", "Bill Harken", "Billy Kincaid", "Binary", "Bionic Woman", "Bird-Brain", "Bird-Man", "Bird-Man II", "Birdman", "Bishop", "Bizarro", "Black Abbott", "Black Adam", "Black Bolt", "Black Canary", "Black Canary", "Black Cat", "Black Flash", "Black Goliath", "Black Knight III", "Black Lightning", "Black Mamba", "Black Manta", "Black Panther", "Black Widow", "Black Widow II", "Blackout", "Blackwing", "Blackwulf", "Blade", "Blaquesmith", "Bling!", "Blink", "Blizzard", "Blizzard", "Blizzard II", "Blob", "Bloodaxe", "Bloodhawk", "Bloodwraith", "Blue Beetle", "Blue Beetle", "Blue Beetle II", "Blue Beetle III", "Boba Fett", "Bolt", "Bomb Queen", "Boom-Boom", "Boomer", "Booster Gold", "Box", "Box III", "Box IV", "Brainiac", "Brainiac 5", "Brother Voodoo", "Brundlefly", "Buffy", "Bullseye", "Bumblebee", "Bumbleboy", "Bushido", "Cable", "Callisto", "Cameron Hicks", "Cannonball", "Captain America", "Captain Atom", "Captain Britain", "Captain Cold", "Captain Epic", "Captain Hindsight", "Captain Mar-vell", "Captain Marvel", "Captain Marvel", "Captain Marvel II", "Captain Midnight", "Captain Planet", "Captain Universe", "Carnage", "Cat", "Cat II", "Catwoman", "Cecilia Reyes", "Century", "Cerebra", "Chamber", "Chameleon", "Changeling", "Cheetah", "Cheetah II", "Cheetah III", "Chromos", "Chuck Norris", "Citizen Steel", "Claire Bennet", "Clea", "Cloak", "Clock King", "Cogliostro", "Colin Wagner", "Colossal Boy", "Colossus", "Copycat", "Corsair", "Cottonmouth", "Crimson Crusader", "Crimson Dynamo", "Crystal", "Curse", "Cy-Gor", "Cyborg", "Cyborg Superman", "Cyclops", "Cypher", "Dagger", "Danny Cooper", "Daphne Powell", "Daredevil", "Darkhawk", "Darkman", "Darkseid", "Darkside", "Darkstar", "Darth Maul", "Darth Vader", "Dash", "Data", "Dazzler", "Deadman", "Deadpool", "Deadshot", "Deathlok", "Deathstroke", "Demogoblin", "Destroyer", "Diamondback", "DL Hawkins", "Doc Samson", "Doctor Doom", "Doctor Doom II", "Doctor Fate", "Doctor Octopus", "Doctor Strange", "Domino", "Donatello", "Donna Troy", "Doomsday", "Doppelganger", "Dormammu", "Dr Manhattan", "Drax the Destroyer", "Ego", "Elastigirl", "Electro", "Elektra", "Elle Bishop", "Elongated Man", "Emma Frost", "Enchantress", "Energy", "ERG-1", "#ID	Chracter Name", "Ethan Hunt", "Etrigan", "Evil Deadpool", "Evilhawk", "Exodus", "Fabian Cortez", "Falcon", "Fallen One II", "Faora", "Feral", "Fighting Spirit", "Fin Fang Foom", "Firebird", "Firelord", "Firestar", "Firestorm", "Firestorm", "Fixer", "Flash", "Flash Gordon", "Flash II", "Flash III", "Flash IV", "Forge", "Franklin Richards", "Franklin Storm", "Frenzy", "Frigga", "Galactus", "Gambit", "Gamora", "Garbage Man", "Gary Bell", "General Zod", "Genesis", "Ghost Rider", "Ghost Rider II", "Giant-Man", "Giant-Man II", "Giganta", "Gladiator", "Goblin Queen", "Godzilla", "Gog", "Goku", "Goliath", "Goliath", "Goliath", "Goliath IV", "Gorilla Grodd", "Granny Goodness", "Gravity", "Greedo", "Green Arrow", "Green Goblin", "Green Goblin II", "Green Goblin III", "Green Goblin IV", "Groot", "Guardian", "Guy Gardner", "Hal Jordan", "Han Solo", "Hancock", "Harley Quinn", "Harry Potter", "Havok", "Hawk", "Hawkeye", "Hawkeye II", "Hawkgirl", "Hawkman", "Hawkwoman", "Hawkwoman II", "Hawkwoman III", "Heat Wave", "Hela", "Hellboy", "Hellcat", "Hellstorm", "Hercules", "Hiro Nakamura", "Hit-Girl", "Hobgoblin", "Hollow", "Hope Summers", "Howard the Duck", "Hulk", "Human Torch", "Huntress", "Husk", "Hybrid", "Hydro-Man", "Hyperion", "Iceman", "Impulse", "Indiana Jones", "Indigo", "Ink", "Invisible Woman", "Iron Fist", "Iron Man", "Iron Monger", "Isis", "Jack Bauer", "Jack of Hearts", "Jack-Jack", "James Bond", "James T. Kirk", "Jar Jar Binks", "Jason Bourne", "Jean Grey", "Jean-Luc Picard", "Jennifer Kale", "Jesse Quick", "Jessica Cruz", "Jessica Jones", "Jessica Sanders", "Jigsaw", "Jim Powell", "JJ Powell", "Johann Krauss", "John Constantine", "John Stewart", "John Wraith", "Joker", "Jolt", "Jubilee", "Judge Dredd", "Juggernaut", "Junkpile", "Justice", "Jyn Erso", "K-2SO", "Kang", "Kathryn Janeway", "Katniss Everdeen", "Kevin 11", "Kick-Ass", "Kid Flash", "Kid Flash II", "Killer Croc", "Killer Frost", "Kilowog", "King Kong", "King Shark", "Kingpin", "Klaw", "Kool-Aid Man", "Kraven II", "Kraven the Hunter", "Krypto", "Kyle Rayner", "Kylo Ren", "Lady Bullseye", "Lady Deathstrike", "Leader", "Leech", "Legion", "Leonardo", "Lex Luthor", "Light Lass", "Lightning Lad", "Lightning Lord", "Living Brain", "Living Tribunal", "Liz Sherman", "Lizard", "Lobo", "Loki", "Longshot", "Luke Cage", "Luke Campbell", "Luke Skywalker", "Luna", "Lyja", "Mach-IV", "Machine Man", "Magneto", "Magog", "Magus", "Man of Miracles", "Man-Bat", "Man-Thing", "Man-Wolf", "Mandarin", "Mantis", "Martian Manhunter", "Marvel Girl", "Master Brood", "Master Chief", "Match", "Matt Parkman", "Maverick", "Maxima", "Maya Herrera", "Medusa", "Meltdown", "Mephisto", "Mera", "Metallo", "Metamorpho", "Meteorite", "Metron", "Micah Sanders", "Michelangelo", "Micro Lad", "Mimic", "Minna Murray", "Misfit", "Miss Martian", "Mister Fantastic", "Mister Freeze", "Mister Knife", "Mister Mxyzptlk", "Mister Sinister", "Mister Zsasz", "Mockingbird", "MODOK", "Mogo", "Mohinder Suresh", "Moloch", "Molten Man", "Monarch", "Monica Dawson", "Moon Knight", "Moonstone", "Morlun", "Morph", "Moses Magnum", "Mr Immortal", "Mr Incredible", "Ms Marvel II", "Multiple Man", "Mysterio", "Mystique", "Namor", "Namor", "Namora", "Namorita", "Naruto Uzumaki", "Nathan Petrelli", "Nebula", "Negasonic Teenage Warhead", "#ID	Chracter Name", "Nick Fury", "Nightcrawler", "Nightwing", "Niki Sanders", "Nina Theroux", "Nite Owl II", "Northstar", "Nova", "Nova", "Odin", "Offspring", "Omega Red", "Omniscient", "One Punch Man", "One-Above-All", "Onslaught", "Oracle", "Osiris", "Overtkill", "Ozymandias", "Parademon", "Paul Blart", "Penance", "Penance I", "Penance II", "Penguin", "Phantom", "Phantom Girl", "Phoenix", "Plantman", "Plastic Lad", "Plastic Man", "Plastique", "Poison Ivy", "Polaris", "Power Girl", "Power Man", "Predator", "Professor X", "Professor Zoom", "Psylocke", "Punisher", "Purple Man", "Pyro", "Q", "Quantum", "Question", "Quicksilver", "Quill", "Ra's Al Ghul", "Rachel Pirzad", "Rambo", "Raphael", "Raven", "Ray", "Razor-Fist II", "Red Arrow", "Red Hood", "Red Hulk", "Red Mist", "Red Robin", "Red Skull", "Red Tornado", "Redeemer II", "Redeemer III", "Renata Soliz", "Rey", "Rhino", "Rick Flag", "Riddler", "Rip Hunter", "Ripcord", "Robin", "Robin II", "Robin III", "Robin V", "Robin VI", "Rocket Raccoon", "Rogue", "Ronin", "Rorschach", "Sabretooth", "Sage", "Sandman", "Sasquatch", "Sauron", "Savage Dragon", "Scarecrow", "Scarlet Spider", "Scarlet Spider II", "Scarlet Witch", "Scorpia", "Scorpion", "Sebastian Shaw", "Sentry", "Shadow King", "Shadow Lass", "Shadowcat", "Shang-Chi", "Shatterstar", "She-Hulk", "She-Thing", "Shocker", "Shriek", "Shrinking Violet", "Sif", "Silk", "Silk Spectre", "Silk Spectre II", "Silver Surfer", "Silverclaw", "Simon Baz", "Sinestro", "Siren", "Siren II", "Siryn", "Skaar", "Snake-Eyes", "Snowbird", "Sobek", "Solomon Grundy", "Songbird", "Space Ghost", "Spawn", "Spectre", "Speedball", "Speedy", "Speedy", "Spider-Carnage", "Spider-Girl", "Spider-Gwen", "Spider-Man", "Spider-Man", "Spider-Man", "Spider-Woman", "Spider-Woman II", "Spider-Woman III", "Spider-Woman IV", "Spock", "Spyke", "Stacy X", "Star-Lord", "Stardust", "Starfire", "Stargirl", "Static", "Steel", "Stephanie Powell", "Steppenwolf", "Storm", "Stormtrooper", "Sunspot", "Superboy", "Superboy-Prime", "Supergirl", "Superman", "Swamp Thing", "Swarm", "Sylar", "Synch", "T-1000", "T-800", "T-850", "T-X", "Taskmaster", "Tempest", "Thanos", "The Cape", "The Comedian", "Thing", "Thor", "Thor Girl", "Thunderbird", "Thunderbird II", "Thunderbird III", "Thunderstrike", "Thundra", "Tiger Shark", "Tigra", "Tinkerer", "Titan", "Toad", "Toxin", "Toxin", "Tracy Strauss", "Trickster", "Trigon", "Triplicate Girl", "Triton", "Two-Face", "Ultragirl", "Ultron", "Utgard-Loki", "Vagabond", "Valerie Hart", "Valkyrie", "Vanisher", "Vegeta", "Venom", "Venom II", "Venom III", "Venompool", "Vertigo II", "Vibe", "Vindicator", "Vindicator", "Violator", "Violet Parr", "Vision", "Vision II", "Vixen", "Vulcan", "Vulture", "Walrus", "War Machine", "Warbird", "Warlock", "Warp", "Warpath", "Wasp", "Watcher", "Weapon XI", "White Canary", "White Queen", "Wildfire", "Winter Soldier", "Wiz Kid", "Wolfsbane", "Wolverine", "Wonder Girl", "Wonder Man", "Wonder Woman", "Wondra", "Wyatt Wingfoot", "X-23", "X-Man", "Yellow Claw", "Yellowjacket", "Yellowjacket II", "Ymir", "Yoda", "Zatanna", "Zoom"];

//add EventListener on keyup--->
MarvelheroName.addEventListener('keyup', () => {
  removeAllItem();// remove all the li
  for (let i of superHeroName) {
    if (i.toLowerCase().startsWith(MarvelheroName.value.toLowerCase()) && MarvelheroName.value != "") {
      let list = document.createElement('li');//we are creating list. which character is matching on given input
      list.classList.add('li-style');// added class in each list 
      list.style.cursor = 'pointer';
      list.setAttribute('onClick', `displayInput("${i}")`);// set attribute on list
      let word = `<b> ${i} </b>`;
      list.innerHTML = word;
      document.getElementById('list').appendChild(list);// we put list in list Tag as child *[HTML Line no. 31]*
    }
  }
});
// when click on the superhero name in the list then call function--->
function displayInput(v) {
  MarvelheroName.value = v;
  getValue(v);
  removeAllItem();
  putHeartIcon(v);
}
//remove all li --->
function removeAllItem() {
  let list = document.querySelectorAll('.li-style');
  list.forEach((item) => {
    item.remove();
  });
};




// add or remove to favourites page-->
let FavouritesArr = [];// favourite Array contains favourite superHeros
function Favourite() {
  //replace  icon of heart-outline from filled heart--->
  //we take attribute of heart icon ionic--->
  let att = likeIcon.getAttribute('name');
  if (att === 'heart-outline') {
    // set Attribute "name"
    likeIcon.setAttribute('name', 'heart');
    likeIcon.style.color = 'red';
    alert('added to favourites');
    let value = MarvelheroName.value.toUpperCase();
    let imageLink = HeroImage.src;
    let obj = {
      "name": value,
      "imagelink": imageLink
    }
    setFavourite(obj);
  }
}

//Favourites section shows and close icon ionic-->
let FavouriteTag = document.getElementById('FavouriteTag');
let Favourites = document.getElementById('Favourites');
let close = document.getElementById('close');
let FavouritesCards = document.getElementById('FavouritesCards');

//click on FavouriteTag that show the favourites sections-->
FavouriteTag.addEventListener('click', (e) => {
  e.preventDefault();
  if(FavouritesArr.length==0){// check No favourite superhero that show alert
    alert('No Favourite SuperHeros');
    return
  }
  Favourites.style.right = '0'
  
})
//click on close icon ionic that close  the favourites sections
close.addEventListener('click', () => {
  Favourites.style.right = '-280px';
});

//set favourite super Hero--->
function setFavourite(obj) {
  if (!check(obj.name)) {
    FavouritesArr.push(obj); //push obj(have properties-->name,linkimage) in favourite arr
    pushFavouritesHero();// push all favourites superhero in favourites section
  } else {
    alert('already favourites SuperHero');// Superhero is already present in array
  }

}

// remove the cards from favourite section on click  [ion-icon "close-outline"]--->
function removeCard(i) {
  let value = FavouritesArr[i].name;
  FavouritesArr.splice(i, 1);
  pushFavouritesHero();//after remove card and push all cards 
  likeIcon.setAttribute('name', 'heart-outline');
  likeIcon.style.color = '#fff';
}
// show the details, when click on the particular card in favourite section--->
function showDetails(i) {
  let name = FavouritesArr[i].name;
  getValue(name);
}
//push all favourites SuperHero in Favourites section--->
function pushFavouritesHero() {
  FavouritesCards.innerHTML = "";
  
  //push all favourite card in the FavouritesCards as child using (appendchild) line no. 174-->
  for (let i = 0; i < FavouritesArr.length; i++) {
    let div = document.createElement('div');
    div.innerHTML = `<div class="FavCard" onClick="showDetails(${i})">
   <div class="FavouritesHero" >
   <div class="FavouritesImage">
      <img src="${FavouritesArr[i].imagelink}" alt="">
   </div>
   <p class="FavouritesHeroName">${FavouritesArr[i].name}</p>
   </div>
   <h4 class="removeHero" onClick="removeCard(${i})">Remove</h4>
  </div>`
    FavouritesCards.appendChild(div);
  }
}

// check superhero is present or not present that we want not store duplicate superhero card--->
function check(name) {
  for (let i = 0; i < FavouritesArr.length; i++) {
    let temp = FavouritesArr[i];
    if (temp.name === name) {//check name(superhero) is present or not-
      return true;//return true favourite Array contains name
    }
  }
  return false;
}

//in this function,check if superHero is favourites or not--->
function putHeartIcon(name) {
  // check if superHero is Favourite that set the favourites icon, otherwise no favourites icon-->
  let v = name.toUpperCase();
  if (!check(v)) {
    // not favourite superhero. so, show set attributes of likeicon -
    likeIcon.setAttribute('name', 'heart-outline');
    likeIcon.style.color = '#fff';
  } else {
    //yes this is favourite. so, show set attributes of likeicon- 
    likeIcon.setAttribute('name', 'heart');
    likeIcon.style.color = 'red';//color red 
  }
}
