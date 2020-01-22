import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(config);
  //firebase.analytics();

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

//    database.ref('expenses').on('child_removed', (snapshot) => {
//        console.log(snapshot.key, snapshot.val());
//    });

//    database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log("Changed", snapshot.key, snapshot.val());
//    });

//    database.ref('expenses').on('child_added', (snapshot) => {
//     console.log("Added", snapshot.key, snapshot.val());
//    });
//   database.ref('expenses')
//         .on('value',
//             (snapshot) => {
//                 const expenses = [];

//                 snapshot.forEach((childSnapshot) => {
//                         expenses.push({
//                             id: childSnapshot.key,
//                             ...childSnapshot.val()
//                         })
//                 });

//                 console.log(expenses);
//             }
//     );
//   database.ref('expenses').push({
//       description: 'Kitty treats',
//       note: 'Greenies for Elfie, Pangy, and Mini',
//       amount: 100,
//       createdAt: 0
//   });

  //database.ref('notes/LxsMPeUZ8sn6k8fU6HI').remove();
//   database.ref('notes').push({
//       title: 'Course topics',
//       body: 'React Native, Angular, Python'
//   });
//   const firebaseNotes = {
//       notes: {
//         mutabor: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         befreerr: {
//             title: 'Another note!',
//             body: 'This is another note'
//         }
//       }
//   };

//   const notes = [{
//      id: '12',
//      title: 'First note!',
//      body: 'This is my note' 
//   },{
//     id: '121',
//     title: 'Second note!',
//     body: 'This is my note two' 
//  }];

//  database.ref('notes').set(notes);

//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       const name = val.name;
//       const title = val.job.title;
//       const company = val.job.company;
//       const message = `${name} is a ${title} for ${company}.`
//       console.log(message);
//   })

//   setTimeout(() => {
//              database.ref('name').set('Panguitch');
//              database.ref('job/title').set('kitty');
//              database.ref('job/company').set('Kittyland');
//   }, 3500);
//   const onValueChange = database.ref().on('value', (snapshot) => {
//       console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error with data fetching', e);
//   });

//   setTimeout(() => {
//         database.ref('age').set(47);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(48);
// }, 10500);

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fething data', e);
//     });
//   database.ref().set({
//       name: 'Boris Velikovich',
//       age: 46,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'Exostar' 
//       },
//       location: {
//           city: 'Reston',
//           country: 'United States'
//       }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed.');
//   });

//   database.ref().update({
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     stressLevel: 9
//   });

  //database.ref('isSingle').set(null);

  //database.ref('age').set(47);

 //database.ref('location/city').set('Seattle');

//   database.ref('attributes').set({
//       height: 69,
//       weight: 172
//   }).then(() => { 
//         console.log('Attributed are saved!')
//     }).catch((e) => {
//         console.log('Failed to save attributes!')
//     });

// var isSingleRef = database.ref('isSingle');

// isSingleRef.remove()
//   .then(() => {
//       console.log('IsSingle removed.');
//   }).catch((error) => {
//       console.log('Remove failed', e);
//   });
