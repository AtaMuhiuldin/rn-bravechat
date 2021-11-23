export const useProfileInfo = () => {
  return {
    avatarUrl: 'https://gravatar.com/avatar/1106373f6e0db7f818828bb46477dd00?s=200&d=identicon&r=x',
  };
};

export const retreiveProfilesList = () => {
  let profiles = [];
  for (let index = 0; index < 32; index++) {
    profiles.push({
      _id: `${Math.random() * 10000}-${Math.random() * 10000}`,
      media: { uri: 'https://picsum.photos/200', type: 'image' },
      isOnline: index % 3 === 0,
    });
  }
  return profiles;
};
