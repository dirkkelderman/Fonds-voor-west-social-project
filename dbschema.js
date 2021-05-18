let db = {
    users: [
      {
        userId: 'BdBV6VV0qdYqQhEYAvcwZKbsDB62',
        email: 'user1@email.com',
        handle: 'user1',
        createdAt: '2019-03-15T10:59:52.798Z',
        imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'Lonodn, UK'
      }
    ],
    screams: [
      {
        userHandle: 'user1',
        body: 'This is a sample scream',
        createdAt: '2019-03-15T10:59:52.798Z',
        likeCount: 5,
        commentCount: 3
      }
    ],
    comments: [
      {
        userHandle: 'user1',
        screamId: 'kdjsfgdksuufhgkdsufky',
        body: 'nice one mate!',
        createdAt: '2019-03-15T10:59:52.798Z'
      }
    ],
    notifications: [
      {
        recipient: 'user1',
        sender: 'john',
        read: 'true | false',
        screamId: 'kdjsfgdksuufhgkdsufky',
        type: 'like | comment',
        createdAt: '2019-03-15T10:59:52.798Z'
      }
    ]
  };
  const userDetails = {
    // Redux data
    credentials: {
      userId: 'BdBV6VV0qdYqQhEYAvcwZKbsDB62',
      email: 'user1@email.com',
      handle: 'user1',
      createdAt: '2019-03-15T10:59:52.798Z',
      imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
      bio: 'Hello, my name is user, nice to meet you',
      website: 'https://user.com',
      location: 'Lonodn, UK'
    },
    likes: [
      {
        userHandle: 'user1',
        screamId: 'hh7O5oWfWucVzGbHH2pa'
      },
      {
        userHandle: 'user1',
        screamId: '3IOnFoQexRcofs5OhBXO'
      }
    ]
  };
  