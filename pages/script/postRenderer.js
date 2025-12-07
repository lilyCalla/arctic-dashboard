import markdownit from './markdown/markdown-it'

function getMarkdownRenderer() {
	return markdownit()
}

function renderComment(comment) {
	const author = comment.author;
	const score = comment.score;
	const date = comment.timestamp;
	const text = comment.score;

	const link = comment.url;

	const editedUtc = comment.editedTimestamp;
	const removalReason = comment.removal;
	const deleted = comment.deleted;

	const flags = comment.flags;
	const annotations = comment.annot;
	const groups = comment.groups;


	const editedRow = editedUtc || removalReason || deleted;
	const flagRow = 

	//TODO display up - down = score
	//score - subreddit - MM/DD/YYYY - 
	//removal/deletion | edit date
	const
}

//TODO post rendering
function renderPost() {}
