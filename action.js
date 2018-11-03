import uuid from 'uuid';


const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const THUMB_UP = 'THUMB_UP';
const THUMB_DOWN = 'THUMB_DOWN';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
        thumbs: 0
    }
}

function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function thumbUp(thumbs, id) {
	return {
		type: THUMB_UP,
		thumbs: thumbs +1,
		id
	}
}

function thumbDown(thumbs, id) {
	return {
		type: THUMB_DOWN,
		thumbs: thumbs -1,
		id
	}
}

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = text => id => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundthumbUp = thumbs => id => dispatch(thumbUp(thumbs, id));
const boundthumbDown = thumbs => id => dispatch(thumbDown(thumbs, id));

boundAddComment('nowy komentarz!');
boundAddComment('kolejny nowy komentarz!');

boundEditComment('edytowany komentarz!', 50);
boundEditComment('kolejny edytowany komentarz!', 25);

boundRemoveComment(40);
boundRemoveComment(15);

boundthumbUp(1000, 50);
boundthumbDown(190, 25);