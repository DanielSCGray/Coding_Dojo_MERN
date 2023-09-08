db.students.insertOne({name: 'Jon', 
    home_state: 'GA',
    lucky_number: 1, 

    birthday: {
        month: 1, 
        day: 13, 
        year: 1999
    }})
    db.students.insertOne({name: 'Tom', 
    home_state: 'CA',
    lucky_number: 19, 

    birthday: {
        month: 5, 
        day: 24, 
        year: 1972
    }})
    db.students.insertOne({name: 'Jan', 
    home_state: 'WA',
    lucky_number: 14, 

    birthday: {
        month: 10, 
        day: 11, 
        year: 1994
    }})
    db.students.insertOne({name: 'Sue', 
    home_state: 'AZ',
    lucky_number: 8, 

    birthday: {
        month: 3, 
        day: 22, 
        year: 1804
    }})
    db.students.insertOne({name: 'Bill', 
    home_state: 'OR',
    lucky_number: 100, 

    birthday: {
        month: 11, 
        day: 17, 
        year: 1912
    }})

    // db.students.insertOne
    /*
Atlas atlas-mdru0d-shard-0 [primary] my_first_db> db.students.insertOne({name: 'Jon', home_state: 'GA', lucky_number: 1, bir
birthday: {month: 1, day: 22, year: 1999}})
{
  acknowledged: true,
  insertedId: ObjectId("64fa6e2a87b7b505b3ee3a87")
}
Atlas atlas-mdru0d-shard-0 [primary] my_first_db> db
my_first_db
Atlas atlas-mdru0d-shard-0 [primary] my_first_db> db.students.insertOne({name: 'Tom', home_state: 'CA', lucky_number: 12, birthday: {month: 11, day: 27, year: 1909}})
{
  acknowledged: true,
  insertedId: ObjectId("64fa6ea687b7b505b3ee3a88")
}
Atlas atlas-mdru0d-shard-0 [primary] my_first_db> db.students.insertOne({name: 'Jane', home_state: 'WA', lucky_number: 1, birthday: {month: 5, day: 7, year: 1809}})
{
  acknowledged: true,
  insertedId: ObjectId("64fa6ec987b7b505b3ee3a89")
}
Atlas atlas-mdru0d-shard-0 [primary] my_first_db> db.students.insertOne({name: 'Sue', home_state: 'AZ', lucky_number: 7, birthday: {month: 8, day: 9, year: 1971}})
{
  acknowledged: true,
  insertedId: ObjectId("64fa6eef87b7b505b3ee3a8a")
}
Atlas atlas-mdru0d-shard-0 [primary] my_first_db> db.students.insertOne({name: 'Al', home_state: 'CA', lucky_number: 57, birthday: {month: 5, day: 19, year: 1941}})
{
  acknowledged: true,
  insertedId: ObjectId("64fa6f0c87b7b505b3ee3a8b")
}
Atlas atlas-mdru0d-shard-0 [primary] my_first_db> db.students.find()
[
  {
    _id: ObjectId("64fa6e2a87b7b505b3ee3a87"),
    name: 'Jon',
    home_state: 'GA',
    lucky_number: 1,
    birthday: { month: 1, day: 22, year: 1999 }
  },
  {
    _id: ObjectId("64fa6ea687b7b505b3ee3a88"),
    name: 'Tom',
    home_state: 'CA',
    lucky_number: 12,
    birthday: { month: 11, day: 27, year: 1909 }
  },
  {
    _id: ObjectId("64fa6ec987b7b505b3ee3a89"),
    name: 'Jane',
    home_state: 'WA',
    lucky_number: 1,
    birthday: { month: 5, day: 7, year: 1809 }
  },
  {
    _id: ObjectId("64fa6eef87b7b505b3ee3a8a"),
    name: 'Sue',
    home_state: 'AZ',
    lucky_number: 7,
    birthday: { month: 8, day: 9, year: 1971 }
  },
  {
    _id: ObjectId("64fa6f0c87b7b505b3ee3a8b"),
    name: 'Al',
    home_state: 'CA',
    lucky_number: 57,
    birthday: { month: 5, day: 19, year: 1941 }
  }

  Atlas atlas-mdru0d-shard-0 [primary] my_first_db> db.students.find( {$or: [{home_state: 'CA'}, {home_state: 'WA'}]})        
[
  {
    _id: ObjectId("64fa6ea687b7b505b3ee3a88"),
    name: 'Tom',
    home_state: 'CA',
    lucky_number: 12,
    birthday: { month: 11, day: 27, year: 1909 }
  },
  {
    _id: ObjectId("64fa6ec987b7b505b3ee3a89"),
    name: 'Jane',
    home_state: 'WA',
    lucky_number: 1,
    birthday: { month: 5, day: 7, year: 1809 }
  },
  {
    _id: ObjectId("64fa6f0c87b7b505b3ee3a8b"),
    name: 'Al',
    home_state: 'CA',
    lucky_number: 57,
    birthday: { month: 5, day: 19, year: 1941 }
  }
]
Atlas atlas-mdru0d-shard-0 [primary] my_first_db> db.students.find( {lucky_number: {$gt: 3}})
[
  {
    _id: ObjectId("64fa6ea687b7b505b3ee3a88"),
    name: 'Tom',
    home_state: 'CA',
    lucky_number: 12,
    birthday: { month: 11, day: 27, year: 1909 }
  },
  {
    _id: ObjectId("64fa6eef87b7b505b3ee3a8a"),
    name: 'Sue',
    home_state: 'AZ',
    lucky_number: 7,
    birthday: { month: 8, day: 9, year: 1971 }
  },
  {
    _id: ObjectId("64fa6f0c87b7b505b3ee3a8b"),
    name: 'Al',
    home_state: 'CA',
    lucky_number: 57,
    birthday: { month: 5, day: 19, year: 1941 }
  }
]
    Atlas atlas-mdru0d-shard-0 [primary] my_first_db> db.students.updateMany({}, {$set: {interests: ['coding', 'brunch', 'MongoD
B']}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 5,
  modifiedCount: 5,
  upsertedCount: 0
}
*/