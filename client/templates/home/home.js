Template.home.events({
	'click #Travel-btn': function(event) {
		event.preventDefault();
		$(event.target).blur();
		window.location.href= "../travel";
    },

    'click #Food-btn': function(event) {
		event.preventDefault();
		$(event.target).blur();
		window.location.href= "../food";
    },

    'click #Music-btn': function(event) {
		event.preventDefault();
		$(event.target).blur();
		window.location.href= "../music";
    }



});

Template.home.helpers({
  'goal': function () {
    return Goal.find();
  },

  'video' : function(){
  	return Videos.findOne().url();
  }

});