🟢 𝗕𝗔𝗦𝗜𝗖 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡𝗦 (1–10)
What is Mongoose in Node.js?
ans : mongoose is a orm which is used for the schema validations and make the crud operations easy.

How do you connect to MongoDB using Mongoose?
ans : const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dbname', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


What is the difference between Mongoose and MongoDB native driver?
ans : 
Mongoose is an abstraction layer over the MongoDB native driver.

MongoDB native driver gives you raw access with more flexibility and fewer constraints.

Mongoose adds structure via schemas, middleware, validation, and other helpful features.

What are Schemas in Mongoose?
ans : Schema is used to design the structure of records in a collection, it will also easy to validate the fields

How do you define a Mongoose model?
ans : 
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema);


What is the difference between a schema and a model in Mongoose?
ans : A schema defines the structure and validation rules of a document, while a model is a wrapper for the schema and provides an interface to interact with MongoDB (e.g., queries, CRUD).

How do you insert a new document using Mongoose?
ans : use model.create(object);

How do you retrieve all documents from a collection?
ans : model.find();

How do you use .findOne() and .findById() in Mongoose?
ans : use findOne() to retreive the first matched document with given filter
      use findById() to retreive the first matched document only with id.

What are the default data types supported by Mongoose schemas?
ans : 
String

Number

Date

Buffer

Boolean

Mixed

ObjectId

Array

Map

Decimal128

🟡 𝗜𝗡𝗧𝗘𝗥𝗠𝗘𝗗𝗜𝗔𝗧𝗘 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡𝗦 (11–30)
What is the purpose of timestamps: true in a schema?
ans : it upsert the updatedAt and createdAt fields in the document.

How do you set default values in a schema?
ans : use default : 'USER'

How do you use validation in Mongoose?
ans : use validation like enum : ['USER', 'ADMIN']
      use minLength and maxLength
      use required : true

How do you make a field required in a schema?
ans : use required : true

How can you create custom validators?
ans : email: {
  type: String,
  validate: {
    validator: function(v) {
      return /@/.test(v);
    },
    message: props => `${props.value} is not a valid email!`
  }
}


What is the purpose of enum and match in schema fields?
ans : enum: Limits field to specific values.

match: Uses regex to validate string format.

role: { type: String, enum: ['ADMIN', 'USER'] }
email: { type: String, match: /.+\@.+\..+/ }


How do you update a document in Mongoose?
ans : use findByIdAndUpdate({_id}, {$set: {name: "anmol"}});

What is the difference between .updateOne() and .findOneAndUpdate()?
ans : .updateOne(): Updates but doesn't return the updated document.

.findOneAndUpdate(): Updates and returns the document (can return old or new with new: true).

What does new: true do in findOneAndUpdate()?
ans : Returns the updated document instead of the original one

What are Mongoose middleware (pre/post hooks)?
Functions run before or after certain operations (e.g. save, validate, find).

What are virtuals in Mongoose and how are they used?
Virtuals are fields not persisted in MongoDB but computed from other fields.

How do you populate referenced documents (.populate())?
ans : .populate() helps to fetch the data from snother collection using reference

How do you create relationships between schemas?
ans : you can use ref : 'model_name'

What is the use of ref in a schema field?
ans : to reference some other collection.

How do you implement pagination using .skip() and .limit()?
ans : you can get the offset from the client which you have to skip the records and to limit the records we have .limit() method.

What is lean() in Mongoose and why is it useful?
ans : 
lean() returns plain JS objects instead of Mongoose documents (faster, less memory).

How do you delete a document by ID?
ans : findByIdAndDelete()

What is the difference between .remove(), .deleteOne(), and .findByIdAndDelete()?
ans : .remove() (deprecated): Removes multiple documents.

.deleteOne(): Deletes first match.

.findByIdAndDelete(): Deletes and returns the document.

How do you handle errors in Mongoose queries?
ans : use the custom handlers in try{} catch{} block 

How do you create compound indexes in Mongoose?
ans : use db.collection.createIndex({name: 1, age: 1});

🔴 𝗔𝗗𝗩𝗔𝗡𝗖𝗘𝗗 𝗤𝗨𝗘𝗦𝗧𝗜𝗢𝗡𝗦 (31–50)
How does Mongoose handle ObjectId types?
ans : userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

What is the use of select: false in schemas?
ans : if you want to hide any field from the query result.

How do you use populate with nested references?
ans : 
Post.find()
  .populate({
    path: 'comments',
    populate: {
      path: 'user',
      model: 'User'
    }
  });


What is discriminator in Mongoose? (Schema Inheritance)
ans :
Discriminators let you create schema inheritance, useful when multiple models share common fields.
const options = { discriminatorKey: 'kind' };
const eventSchema = new mongoose.Schema({ timestamp: Date }, options);
const Event = mongoose.model('Event', eventSchema);
const ClickedLinkEvent = Event.discriminator('ClickedLink', new mongoose.Schema({ url: String }));


How do you define a subdocument (embedded document) in Mongoose?
ans : const childSchema = new mongoose.Schema({ name: String });
const parentSchema = new mongoose.Schema({
  children: [childSchema]
});


How do you update nested fields in a subdocument array?
ans : Parent.updateOne(
  { 'children._id': childId },
  { $set: { 'children.$.name': 'new name' } }
)


What’s the difference between validate and validateSync?
ans : validate() is async, returns a promise.

validateSync() is synchronous, throws if validation fails.

How do transactions work in Mongoose (using MongoDB sessions)?
ans : const session = await mongoose.startSession();
session.startTransaction();
try {
  await Model1.create([{ /* doc */ }], { session });
  await Model2.create([{ /* doc */ }], { session });
  await session.commitTransaction();
} catch (err) {
  await session.abortTransaction();
}
session.endSession();


How do you perform aggregation queries using .aggregate()?
ans : Model.aggregate([
  { $match: { status: 'active' } },
  { $group: { _id: '$userId', total: { $sum: '$amount' } } }
])


How to index fields for faster queries in Mongoose?
ans : const schema = new Schema({ name: String });
schema.index({ name: 1 }); // creates index


How to use middleware to hash passwords before saving a user?
ans : userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});


How does optimistic concurrency work in Mongoose?
ans : first check the version if not updated by some other operation then only update it.

What is the use of versionKey in documents?
ans : It tracks document revisions (default: __v) for optimistic concurrency control.

How do you disable __v (version key) in a schema?
ans : new mongoose.Schema({ name: String }, { versionKey: false });

What is toJSON() and toObject() transformation?
ans : 
Used to customize how documents are converted to JSON or plain objects (e.g., to remove sensitive fields):
schema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password;
    return ret;
  }
});


How do you convert a document to a plain JavaScript object?
ans : const plainObj = doc.toObject();

How do you enforce a unique constraint in Mongoose?
ans : email: { type: String, unique: true }

What happens if you try to save a duplicate document violating a unique field?
ans : MongoDB will throw a duplicate key error.

Mongoose will throw a validation error if handled correctly.

What are capped collections in MongoDB, and how can you define them using Mongoose?
ans : capped collections are the collections whose data is auto removed after a span of time.
new Schema({}, { capped: { size: 1024, max: 1000 } });


How would you structure a large-scale application with Mongoose models?
ans : Separate models into modules/files by domain (user, product, etc.)

Use index.js to centralize exports

Keep schema logic separate from business logic

Use services/repositories for abstraction