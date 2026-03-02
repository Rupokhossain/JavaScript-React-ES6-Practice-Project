// create promise

/* const getPosts = () => {
    return new Promise((resolve, reject)  => {
        console.log("Loading Data...Please Wait!");

        setTimeout(() => {
            const success = true;

            if(success) {
                const posts = [
                    {id: 1, title: "Post One", body: "This is post one"},
                    {id: 2, title: "Post Two", body: "This is post two"},
                ];
                resolve(posts);
            } else {
                reject("Error: Something went wrong!");
            }
        }, 1000);
    });
};

// fucntion call
getPosts()
    .then((data) => {
        console.log("successfully get data!");
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("operation completed!");
    }); */


    // user age verfication
    const checkAge = (age) => {
        return new Promise((resolve, reject) => {
            if(age >= 18) {
                resolve()
            }
            else {
                reject("You are not old enough to access this content.");
            }
        });
    };

    checkAge(20)
        .then(() => {
            console.log("Age verification passed!");
        })
        .catch((error) => {
            console.log(error);
        });