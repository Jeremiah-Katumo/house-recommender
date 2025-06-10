from sklearn.neighbors import NearestNeighbors
from tensorflow.keras.datasets import mnist
import numpy as np
import joblib
import os

MODEL_PATH = "knn_model.joblib"

def train_model():
	(X_train, _), (_, _) = mnist.load_data()
	X_train = X_train.reshape((X_train.shape[0], -1))
	model = NearestNeighbors(n_neighbors=5)
	model.fit(X_train)
	joblib.dump((model, X_train), MODEL_PATH)

def get_model():
	if not os.path.exists(MODEL_PATH):
		train_model()
	return joblib.load(MODEL_PATH)
