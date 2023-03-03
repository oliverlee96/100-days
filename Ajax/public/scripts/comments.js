const loadCommentsBtn = document.getElementById('load-comments-btn');
const commentsSection = document.getElementById('comments');
let comments;

function createCommentsList(comments) {
    const commentListElement = document.createElement('ol');

    for (const comment of comments) {
        const commentElement = document.createElement('li');
        commentElement.innerHTML = `
            <article class="comment-item">
                <h2>${comment.title}</h2>
                <p>${comment.text}</p>
            </article>
        `;
        commentListElement.appendChild(commentElement);
    }

    return commentListElement;
}

async function fetchCommentsForPost() {
    const postId = loadCommentsBtn.dataset.postid;
    const response = await fetch(`/posts/${postId}/comments`);
    const responseData = await response.json();

    const commentListElement = createCommentsList(responseData);
    commentsSection.innerHTML = '';
    commentsSection.appendChild(commentListElement);
};

loadCommentsBtn.addEventListener('click', fetchCommentsForPost);
