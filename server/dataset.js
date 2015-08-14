var fs = Npm.require('fs');

function setGoals(){


	Goal.insert({
		name: 'Travel'
	});


	Goal.insert({
		name: 'Food'
	});

	
	Goal.insert({
		name: 'Music'
	});




}




function setTravel(){

	Travel.insert({
		name: 'Paris',
		description: 'Travel to Paris',

	});

	Travel.insert({
		name: 'Italy',
		description: 'Travel to Italy'
	});

	Travel.insert({
		name: 'Bermuda Triangle',
		description: 'Travel to the mysterious Bermuda Triangle'
	});


}



function setFood(){

	Food.insert({
		name: 'Exotic Foods',
		description: 'Eat exotic foods'
	});

	Food.insert({
		name: 'Food Festivals',
		description: 'Attend food festivals'
	});

	Food.insert({
		name: 'Healthy Cooking',
		description: 'Learn how to cook healthy dishes'
	});


}



function setMusic(){

	Music.insert({
		name: 'Music Festivals',
		description: 'Go to Tomorrowland'
	});

	Music.insert({
		name: 'Musical Instruments',
		description: 'Learn to play the violin'
	});

	Music.insert({
		name: 'Live: Music Legends',
		description: 'Go to Celine Dion concert'
	});


}


function resetCollection(collection, resetFunc){
    if (collection.find().count() === 0){
        resetFunc();
    }
    else{
        collection.remove({});
        resetFunc();
    }
}

resetCollection(Goal,setGoals);
resetCollection(Travel,setTravel);
resetCollection(Food,setFood);
resetCollection(Music,setMusic);
