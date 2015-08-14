Template.music.events({
	'click #add-btn': function(event) {
		event.preventDefault();
		$(event.target).blur();
		var new_goal= $('#new_goal').val();
		var new_description = $('#new_description').val();
		Music.insert({
			name: new_goal,
			description: new_description
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
			category: 'music',
			achieved_date: date
		});

		

		Music.remove({
			"_id" : this._id
		});
    }


});


Template.music.helpers({
  'music': function () {
    return Music.find();
  },

   'achievement': function () {
    return Achievements.find({"category" : "music"});
  }


});