export const retreiveChatsList = () => {
  let chats = [];
  let txt1 = "This is new message, it's bold and italic ellpsis if more than two lines";
  let txt2 =
    "This is another long new message, it's bold and italic ellpsis if more than two lines. This is new message, it's bold and italic ellpsis if more than two lines.";
  for (let index = 0; index < 10; index++) {
    chats.push({
      _id: `${Math.random() * 10000}-${Math.random() * 10000}`,
      avatarUrl: 'https://picsum.photos/200',
      chatTitle: 'Profile Name',
      messageText: index % 3 === 0 ? txt1 : txt2,
      markedSeen: index % 2 === 0,
      isOnline: index % 3 === 0,
    });
  }
  return chats;
};
