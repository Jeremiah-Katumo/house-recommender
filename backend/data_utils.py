import numpy as np

def encode_user_input(price: float, rooms: int, parking: bool) -> np.ndarray:
	price_norm = price / 1_000_000
	rooms_norm = rooms / 10
	parking_norm = 1.0 if parking else 0.0

	vec = np.zeros(784)
	vec[0] = price_norm
	vec[1] = rooms_norm
	vec[2] = parking_norm

	return vec.reshape(1, -1)