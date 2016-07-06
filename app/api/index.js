import { v4 } from 'node-uuid';

const fakeDatabase2 = {


  notes: [{
    id: v4(),
    text: 'This guy is awesome'
  }, {
    id: v4(),
    text: 'Awesome coding skills',
  }, {
    id: v4(),
    text: 'We need to hire this guy'
  }]
};

const fakeDatabase = {
  users: [{
    username: '0b3r',
    notes: [{
      id: v4(),
      text: 'This guy is awesome'
    }, {
      id: v4(),
      text: 'Awesome coding skills',
    }, {
      id: v4(),
      text: 'We need to hire this guy'
    }]
  }, {
    username: 'eric_elliott',
    notes: [{
      id: v4(),
      text: 'Super smart guy'
    }, {
      id: v4(),
      text: 'Love his coding tutorials',
    }, {
      id: v4(),
      text: 'Great medium articles BTW!'
    }]
  }]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchNotes = (username) => 
  delay(500).then(() => {
    const user = fakeDatabase.users.filter(u => u.username === username);
    if(user){
      return user;
    }
    else {
      throw new Error(`No notes found for user ${username}`);
    }
  });

export const addNote = (username, text) => 
  delay(500).then(() => {
    const note = {
      id: v4(),
      text
    };
    if(fakeDatabase.users[username]){
      fakeDatabase.users[username].notes.push(note);
    }
    else{
      const newUser = {
        username,
        notes: [note]
      };
      fakeDatabase.users.push(newUser);
    }
  });












