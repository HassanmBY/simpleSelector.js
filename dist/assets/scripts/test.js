const person = {
    name: "John",
    age: 30,
    job: "teacher",
    presentation: function(style, timeOfDay) {
        if (style === "formal") {
            console.log(
                `Good ${timeOfDay}, Ladies and gentlemen! I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old.`
            );
        } else if (style === "friendly") {
            console.log(
                `Hey! What's up? I'm ${this.name}, I'm a ${this.job} and I'm ${this.age} years old. Have a nice ${timeOfDay}.`
            );
        }
    },
};

person.presentation("formal", "morning");