export async function findMember(
  query: any,
  guild: {
    members: {
      cache: {
        get: (arg0: string) => any;
        find: (arg0: (m: any) => boolean) => any;
      };
    };
    fetch: () => any;
  },
) {
  let member = null;
  if (!query || typeof query !== 'string') return;
  // Try to search using ID
  if (query.match(/^<@!?(\d+)>$/)) {
    const id: string | number = query.match(/^<@!?(\d+)>$/)![1];
    member = await guild.members.cache.get(id);
    if (member) return member.user;
  }
  // Try to search using discrim
  if (query.match(/^!?(\w+)#(\d+)$/)) {
    guild = await guild.fetch();
    member = guild.members.cache.find(
      (m: { user: { tag: string } }) => m.user.tag === query,
    );
    if (member) return member.user;
  }
  // Try to find the user itself
  member = await guild.members.cache.get(query);
  // If member doesn't exist return as message.author
  if (!member) {
    return message.author;
  }
  return member.user;
}
