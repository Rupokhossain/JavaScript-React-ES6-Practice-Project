const user = {
    name: "Rupok Hossain Siam",
    age: 25,
    skills: ["HTML", "CSS", "JavaScript"],

    // update user age
    updateAge(newAge) {
        this.age = newAge;
        console.log(`Age Updated to: ${this.age}`);
    },

    // update user skill
    addSkill(newSkill) {
        this.skills.push(newSkill);
        console.log(`${newSkill} added to skills.`);
    },

    // remove skill
    removeSkill(skillName) {
        this.skills = this.skills.filter(s => s !== skillName);
        console.log(`${skillName} removed from skills.`);
    },

    displayProfile() {
        const {name, age, skills} = this;
        console.log(`---User Profile---`);
        console.log(`Name: ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Skills: ${skills.join(", ")}`);
    }
};

user.displayProfile();
user.updateAge(26);
user.addSkill("react");
user.removeSkill("CSS");
user.displayProfile();