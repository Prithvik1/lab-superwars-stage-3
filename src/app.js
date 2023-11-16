const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Wolverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];
    // Create players using for loop
    // Type your code here
    players.forEach((player,i)=>{
        let type="hero"
        if(i%2!=0){
            type="villain"
        }
        let data = {
            name: player,
            strength: getRandomStrength(),
            image: `images/super-${i+1}.png`,
            type,
        };
        detailedPlayers.push(data)
    })

    return detailedPlayers;
}
const getRandomStrength = () => {
    
    return Math.ceil(Math.random() * 100);
}
const view = (playerObj)=>{
    let player = document.createElement('div');
    player.classList.add('player');
    let image = document.createElement('img');
    image.setAttribute('src', playerObj.image);
    image.setAttribute('alt',"")
    let name = document.createElement('div');
    name.className="name";
    name.textContent = playerObj.name;
    let strength = document.createElement('div');
    strength.textContent = playerObj.strength;
    strength.className = 'strength';
    player.append(image, name, strength);
    return player;
}
const buildPlayers = (players, type) => {

    let fragment = document.createElement("div");
    players.filter((player) => player.type == type).forEach((player) => fragment.append(view(player)));
    return fragment.innerHTML;
}
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}
window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
