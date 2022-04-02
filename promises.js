const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];
// methode getPosts
function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
                output += `
                    <li>${index}</li>
                    <li>${post.title}</li>
                    <li>${post.body}</li>
                    <hr/>
                `;
        });
        document.body.innerHTML = output;
    }, 1000);
}
// methode createPost
function createPost(post){
    return new Promise((resolve, reject) => {
        let error = false;
        posts.push(post);
        if(!error){
            resolve();
        }else{
            reject('Error: please dont create Post');
        }
    });
}
//call getPosts
// getPosts();
// call createPost
// createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch((error) => console.log(error));
// async await 
async function init(){
    await createPost({title:  'Post Three', body: 'This is post Three'});
    getPosts();
}
init();
// async await fetch
async function fetchUser(){
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await users.json();
    console.log(data);
};
fetchUser();
// promises all
const promise1 = Promise.resolve('Hello World');
const promise2 = 2;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'GOODBYE');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));