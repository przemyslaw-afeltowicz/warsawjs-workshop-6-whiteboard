FlowRouter.route('/', {
    action() {
        Meteor.call('createBoard', (err, boardId) => {
            if(err) {
                console.error(err.message);
            } else if (boardId) {
                FlowRouter.go(`/boards/${boardId}`);
            }
        });
    }
});
