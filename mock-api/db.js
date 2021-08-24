const faker = require("faker");

module.exports = function () {
    const data = {
        mails: [],
    };

    let i = 0;
    for (i; i < 60; i++) {
        data.mails.push({
            id: faker.datatype.uuid(),
            title: faker.lorem.word(),
            subject: faker.lorem.words(),
            description: faker.lorem.sentence(),
            message: faker.lorem.paragraphs(),
            stamp: faker.date.past().getTime(),
            user: {
                name: faker.name.firstName(),
                profile: faker.image.avatar(),
                email: faker.internet.email(),
            },
        });
    }

    return data;
};
