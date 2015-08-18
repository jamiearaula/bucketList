function previewPhoto(input) {
	if (input[0]) {
		var reader = new FileReader();

		reader.readAsDataURL(event.target.files[0]);

		reader.onload = function (e) {
			$('#myImg').attr('src', e.target.result);
		}
	}
}

Template.travel.events({

	'change #file-input' : function(event) {
		var file = event.target.files[0];
		var fileId = Images.insert(file);
		console.log(fileId._id);
		$('#myImg').removeProp("hidden");
		previewPhoto(event.target.files);
		
	},

	'click #add-btn': function(event) {
		event.preventDefault();
		$(event.target).blur();
		var new_goal= $('#new_goal').val();
		var new_description = $('#new_description').val();
		Travel.insert({
			name: new_goal,
			description: new_description,
		});

		document.getElementById("new_goal").value = "";
		document.getElementById("new_description").value = "";
    },

    'click #btnAchieve': function(event) {
		event.preventDefault();
		$(event.target).blur();
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; 
		var yyyy = today.getFullYear();
		var date = mm+'/'+dd+'/'+yyyy;
		Achievements.insert({
			name: this.name,
			description: this.description,
			category: 'travel',
			achieved_date: date
		});

		

		Travel.remove({
			"_id" : this._id
		});
    }


});

Template.travel.helpers({
  'travel': function () {
    return Travel.find();
  },

 'achievement': function () {
    return Achievements.find({"category" : "travel"});
  },

  'image' : function(){
  	return Images.find();
  },

  'goalImage': function () {
  	return Images.findOne().url();
  }



});