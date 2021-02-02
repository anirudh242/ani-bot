module.exports = {
  name: 'test',
  decription: 'none',

  execure(
    message: { author: { id: any }; channel: any; guild: any },
    _args: any,
    _embedFooter: any,
  ) {
    client.users
      .fetch(message.author.id)
      .then((user: { send: (arg0: string) => void }) => {
        user.send(`Test`).then(() => {
          message.channel
            .awaitMessages(filter, {
              max: 1,
              time: 30000,
              errors: ['time'],
            })
            .then(
              (message: {
                first: () => any;
                content: string;
                channel: { send: (arg0: string) => void };
              }) => {
                message = message.first();
                if (
                  message.content.toUpperCase() == 'YES' ||
                  message.content.toUpperCase() == 'Y'
                ) {
                  message.channel.send(`Deleted`);
                } else if (
                  message.content.toUpperCase() == 'NO' ||
                  message.content.toUpperCase() == 'N'
                ) {
                  message.channel.send(`Terminated`);
                } else {
                  message.channel.send(`Terminated: Invalid Response`);
                }
              },
            )
            .catch(() => {
              message.channel.send('Timeout');
            });
        });
      });
  },
};
