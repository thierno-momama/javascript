const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
];
// methode getPosts
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `
            <li>${index+=1}</li>    
            <li>${post.title}</li>
                <li>${post.body}</li>
                <hr/>
            `;
        });
        document.body.innerHTML = output;
    }, 1000);
}
// methode createPost
function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

// call methode getPosts()
// getPosts();
// call methode post
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);