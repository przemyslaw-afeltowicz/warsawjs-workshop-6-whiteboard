import { Meteor } from 'meteor/meteor';

Meteor.methods({
    createBoard() {
        return Boards.insert({});
    }
});
