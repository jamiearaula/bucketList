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


function setIntroVideo(){
   
    var video = fs.readFileSync('../../../../../public/img/bucketlist.mp4');
    var videoFile = new FS.File();


    videoFile.attachData(video, {type: 'video/mp4"'}, function(error){
        if(error) throw error;
        videoFile.name('video.mp4');
        Videos.insert(videoFile, function(error, fileObject){
        	if (error) throw error;
        	//ServerSession.set('videoIntro', fileObject._id);
        });
    });

}    


function setDefaultPhoto(){
   
    var parisPhoto = fs.readFileSync('../../../../../public/img/paris.jpg');
    var parisFile = new FS.File();


    parisFile.attachData(parisPhoto, {type: 'image/jpeg'}, function(error){
        if(error) throw error;
        parisFile.name('parisPhoto.jpg');
        Images.insert(parisFile, function(error, fileObject){
        	if (error) throw error;
        	ServerSession.set('parisDefault', fileObject._id);
        });
    });


     var caliPhoto =  fs.readFileSync('../../../../../public/img/cali.jpg');    
     var caliFile = new FS.File();

     caliFile.attachData(caliPhoto, {type: 'image/jpeg'}, function(error){
        if(error) throw error;
        caliFile.name('caliPhoto.jpg');
        
        Images.insert(caliFile, function(error, fileObject){
        	if (error) throw error;
        	ServerSession.set('caliDefault', fileObject._id);
        });
    });


     var bermudaPhoto =  fs.readFileSync('../../../../../public/img/bermuda.jpg');    
     var bermudaFile = new FS.File();
     bermudaFile.attachData(bermudaPhoto, {type: 'image/jpeg'}, function(error){
        if(error) throw error;
        bermudaFile.name('bermudaPhoto.jpg');
        Images.insert(bermudaFile, function(error, fileObject){
        	if (error) throw error;
        	ServerSession.set('bermudaDefault', fileObject._id);
        });
    });

     var pinasPhoto =  fs.readFileSync('../../../../../public/img/phils.jpg');    
     var pinasFile = new FS.File();
     pinasFile.attachData(pinasPhoto, {type: 'image/jpeg'}, function(error){
        if(error) throw error;
        pinasFile.name('pinasPhoto.jpg');
        Images.insert(pinasFile, function(error, fileObject){
        	if (error) throw error;
        	ServerSession.set('pinasDefault', fileObject._id);
        });
    });
}



function setTravel(){

	Travel.insert({
		name: 'Travel to Paris',
		description: 'Global center for art, fashion, gastronomy and culture.',
		img: ServerSession.get('parisDefault')

	});

	Travel.insert({
		name: 'Travel to California',
		description: 'Famed as the center of the nation’s film and television industry.',
		img: ServerSession.get('caliDefault')
	});

	Travel.insert({
		name: 'Travel to the mysterious Bermuda Triangle',
		description: 'Known as the Devils Triangle, where a number of aircraft and ships are said to have disappeared under mysterious circumstances.',
		img: ServerSession.get('bermudaDefault')
	});


}

function setAchievements(){
	Achievements.insert({
		name: 'Travel to the Philippines',
		description: 'Composed of 7,107 islands',
		feedback: 'Scuba diving there is awesome.',
		tips: 'Bring sunblock.',
		category: 'travel',
		achieved_date: '8/21/2015', 
		img: ServerSession.get('pinasDefault')
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
resetCollection(Videos,setIntroVideo);
resetCollection(Images, setDefaultPhoto);

resetCollection(Food,setFood);
resetCollection(Music,setMusic);
resetCollection(Travel,setTravel);
resetCollection(Achievements,setAchievements);
