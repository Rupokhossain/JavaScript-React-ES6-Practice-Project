const getPost = (id) => {
    console.log("Data Loading...");

    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            if(!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        });

};

getPost()
    .then((data) => {
        const firstFive = data.slice(0, 5);

        firstFive.map((post) => {
            console.log(`ID: ${post.id} ${post.title}`);
        });
    })
    .catch((error) => {
        console.log("Error Caught", error.message);
    })
    .finally(() => {
        console.log("Request Done!");
    });

