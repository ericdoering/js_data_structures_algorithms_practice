let petsOfOwners = [
    { owner : "Mike", pet: { animal: "dog", name: "Bradley" }},
    { owner : "Lindsey", pet: { animal: "cat", name: "Sophia" }},
    { owner : "Ron", pet: { animal: "bird", name: "Fay" }},
    { owner : "Sarah", pet: { animal: "cat", name: "Mijo" }},
    { owner : "Ryan", pet: { animal: "rabbit", name: "Rose" }},
    { owner : "Dave", pet: { animal: "dog", name: "Quinn" }},
    { owner : "Michelle", pet: { animal: "dog", name: "Marco" }}
];

// concatinate a string that returns "Mike's dog Bradley" but for all scenerios

function returnPhrase(petData){
    let ownerAndPetReturn = [];
    for(let i = 0; i < petData.length; i++){
        let phrase = petData[i].owner +"'s " + petData[i].pet.animal + " " +  petData[i].pet.name;
        ownerAndPetReturn.push(phrase)
    }
    return ownerAndPetReturn
};

// swap "dog" name with "puppy"

function swapDogWithPuppy(petData){
    for(let i = 0; i < petData.length; i++){
        if(petData[i].pet.animal === "dog"){
            petData[i].pet.animal = "puppy"
        }
    }
    return petData;
}

// return an object with pet type and how many are counted

function countPets(petData){
    let countedPets = {};
    for(let i = 0; i < petData.length; i++){
        if(countedPets[petData[i].pet.animal]){
            countedPets[petData[i].pet.animal]++
        }
        else {
            countedPets[petData[i].pet.animal] = 1
        }
    }
    return countedPets;
};

// swap pet owner and pet name

function swapNameAndOwner(petData){
    for(let i = 0; i < petData.length; i++){
        let temp = ""
        temp = petData[i].owner;
        petData[i].owner = petData[i].pet.name
        petData[i].pet.name = temp
    }
    return petData
};

// Add age to each pet with age set to the number of letter of the pet name

function addAge(petData){
    for(let i = 0; i < petData.length; i++){
        petData[i].pet.age = petData[i].pet.name.length
    }
    return petData
};

// Find total added age of each animal

let petsOfOwners2 = [
    { owner : "Mike", pet: { animal: "dog", name: "Bradley", age: 7 }},
    { owner : "Lindsey", pet: { animal: "cat", name: "Sophia", age: 6 }},
    { owner : "Ron", pet: { animal: "bird", name: "Fay", age: 3 }},
    { owner : "Sarah", pet: { animal: "cat", name: "Mijo", age: 4 }},
    { owner : "Ryan", pet: { animal: "rabbit", name: "Rose", age: 4 }},
    { owner : "Dave", pet: { animal: "dog", name: "Quinn", age: 5 }},
    { owner : "Michelle", pet: { animal: "dog", name: "Marco", age: 5 }}
];

function addAnimalAges(petData){
    let cumulativeAnimalAges = {};
    for(let i = 0; i < petData.length; i++){
        if(cumulativeAnimalAges[petData[i].pet.animal]){
            cumulativeAnimalAges[petData[i].pet.animal] += petData[i].pet.age
        }
        else {
            cumulativeAnimalAges[petData[i].pet.animal] = petData[i].pet.age;
        }
    }
    return cumulativeAnimalAges
};

console.log(addAnimalAges(petsOfOwners2));