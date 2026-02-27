const createUser = (name, age = 18, ...skills) => {
    const skillList = skills.length > 0 ? skills.join(", ") : "nothing yet";

    const bio = `${name} is ${age} years old and knows ${skillList}`;

    const userInfo = {
        name: name,
        age: age,
        skills: skills,
        bio: bio
    };

    return{...userInfo};
};

const output1 = createUser("Rupok", 22, "React", "Javascript");
console.log("Example 1 :", (output1));


const output2 = createUser("Anis", undefined, "HTML", "CSS");
console.log("Example 2:", output2);


const output3 = createUser("Karim", 30);
console.log("Example 3:", output3);