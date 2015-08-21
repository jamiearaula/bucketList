function previewPhoto(address,input) {
	if (input[0]) {
		var reader = new FileReader();

		reader.readAsDataURL(event.target.files[0]);

		reader.onload = function (e) {
			$(address).css('width', '500px');
    		$(address).css('height', '250px');
			$(address).attr('src', e.target.result);
		}
	}
}

Template.travel.events({

	'change #fileNewGoal-input' : function(event) {
		var inputFile = event.target.files[0];
		var fsFile = new FS.File(inputFile);
		
		Images.insert(fsFile, function (error, fileObject ) {
			if (error) {
				showErrorMessage(error.reason);
			}

			else {
				Session.set('fileAddGoal-input', fileObject._id);
			}
		});

		$('#new_goalImg').removeProp("hidden");
		previewPhoto('#new_goalImg',event.target.files);
	},

	'change #fileSnap-input' : function(event) {
		var inputFile = event.target.files[0];
		var fsFile = new FS.File(inputFile);
		
		Images.insert(fsFile, function (error, fileObject ) {
			if (error){
				showErrorMessage(error.reason);
			}

			else {
				Session.set('fileSnapGoal-input', fileObject._id);
			}
		});

		$('#highlightImg').removeProp("hidden");
		
    	
		previewPhoto('#highlightImg',event.target.files);
	},

	'click #add-btn': function(event) {
		var new_goal = $('#new_goal').val();
		var new_description = $('#new_description').val();
		var url = Session.get('fileAddGoal-input');

		Travel.insert({
			name: new_goal,
			description: new_description,
			img: url
		});

		document.getElementById("new_goal").value = "";
		document.getElementById("new_description").value = "";
    },


    'click #btnAchieve': function(event) {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear();
		var date = mm + '/' + dd + '/' + yyyy;
		
		Session.set("dateAchieved",date);
		Session.set("id", this._id);
		Session.set("name",this.name);
		Session.set("description",this.description);
		Session.set("category",'travel');
    },

    'click #save-btn': function(event) {3
		var feedback = $('#feedback').val();
		var tips = $('tips').val();
		var url = Session.get('fileSnapGoal-input');

		Achievements.insert({
			name: Session.get("name"),
			description: Session.get("description"),
			category:  Session.get("category") ,
			achieved_date: Session.get("dateAchieved"),
			feedback: feedback,
			tips: tips,
			img: url
		});

		Travel.remove({
			"_id" : Session.get("id")
		});

		document.getElementById("tips").value = "";
		document.getElementById("feedback").value = "";
    }

});

Template.travel.helpers({
  'travel': function () {
    return Travel.find();
  },

 'achievement': function () {
    return Achievements.find({"category" : "travel"});
  },

  'goalImage': function (imageid) { 
  	return Images.findOne({ _id : imageid }).url();

  }


});