import { db } from '../App'
import firebase from 'firebase'

export const getCollection = async collection => {
	return db
		.collection(collection)
		.get()
		.then(function(data) {
			if (!data.empty) {
				const documentCollection = []
				data.forEach(document => {
					documentCollection.push({ ...document.data(), key: document.id })
				})
				return documentCollection
			} else {
				return []
			}
		})
}

export const readDocument = async (collection, docKey) => {
	return db
		.collection(collection)
		.doc(docKey)
		.get()
		.then(function(doc) {
			if (doc.exists) {
				return { ...doc.data(), key: doc.id }
			} else throw new Error()
		})
}

export const addDocument = (collection, data, docKey) => {
	if (!!docKey)
		db.collection(collection)
			.doc(docKey)
			.set(data)
	else
		db.collection(collection)
			.doc()
			.set(data)
}

export const updateDocument = (collection, data, docKey) => {
	db.collection(collection)
		.doc(docKey)
		.update(data)
}

export const deleteDocument = (collection, docKey) => {
	db.collection(collection)
		.doc(docKey)
		.delete()
}

export const deleteField = (collection, field) => {
	db.collection(collection).update({
		[field]: firebase.firestore.FieldValue.delete()
	})
}

export const getNodeRef = (collection, docKey) => {
	if (!!docKey) {
		return db.collection(collection).doc(docKey)
	} else return db.collection(collection)
}

export const createUser = (email, password) => {
	return firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(response => console.log(response))
}

export const authorizeUser = (email, password) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.catch(error => console.log(error))
}

export const auth = firebase.auth
