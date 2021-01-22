import mongoose from 'mongoose'

mongoose.connect(
	`mongodb+srv://:<password>@nodejsplatzi.cg57m.mongodb.net/<dbname>?retryWrites=true&w=majority`,
)
