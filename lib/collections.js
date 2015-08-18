Goal = new Meteor.Collection('goal');
Travel = new Meteor.Collection('travel');
Food = new Meteor.Collection('food');
Music = new Meteor.Collection('music');
Achievements = new Meteor.Collection('achievements');

Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});