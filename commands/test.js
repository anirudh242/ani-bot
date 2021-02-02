"use strict";
module.exports = {
    name: 'test',
    decription: 'none',
    execure(message, _args, _embedFooter) {
        client.users
            .fetch(message.author.id)
            .then((user) => {
            user.send(`Test`).then(() => {
                message.channel
                    .awaitMessages(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time'],
                })
                    .then((message) => {
                    message = message.first();
                    if (message.content.toUpperCase() == 'YES' ||
                        message.content.toUpperCase() == 'Y') {
                        message.channel.send(`Deleted`);
                    }
                    else if (message.content.toUpperCase() == 'NO' ||
                        message.content.toUpperCase() == 'N') {
                        message.channel.send(`Terminated`);
                    }
                    else {
                        message.channel.send(`Terminated: Invalid Response`);
                    }
                })
                    .catch(() => {
                    message.channel.send('Timeout');
                });
            });
        });
    },
};
