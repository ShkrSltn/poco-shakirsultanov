const users = [{
    username: 'john',
    email: 'john@example.com',
    password: 'password123'
}, {
    username: 'jane',
    email: '',
    password: 'password123',
}, {
    username: 'admin',
    email: "some@email"
}];


function sim() {
    let FormData = new FormData();
    const data = Ojbect.fromEntries(FormData.entries());
    console.log(data);
}