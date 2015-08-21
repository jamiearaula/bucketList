/**Meteor.publish('Images', function(){
	return Images.find(); 
});
**/
Images.allow({
	'download' : function () {
    return true;
  },

  'update' : function () {
    return true;
  },

  'remove' : function () {
    return true;
  },


  'insert': function () {
    return true;
  }
});

Videos.allow({
  'download' : function () {
    return true;
  },

  'update' : function () {
    return true;
  },

  'remove' : function () {
    return true;
  },


  'insert': function () {
    return true;
  }
  
});