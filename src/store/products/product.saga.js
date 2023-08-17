import { takeLatest, call, all, put } from "redux-saga/effects";
import { getProducts } from "../../utils/firebase/firebase";
import { productReducerTypes } from "./products.types";
import { fetchProductFailed, fetchProductSuccess } from "./products.action";

export function* fetchProductsAsync() {
  try {
    const productsArray = yield call(getProducts);
    yield put(fetchProductSuccess(productsArray));
  } catch (error) {
    yield put(fetchProductFailed(error));
  }
}
export function* onFetchProducts() {
  yield takeLatest(
    productReducerTypes.FETCH_PRODUCTS_START,
    fetchProductsAsync
  );
}

export function* productsSaga() {
  yield all([call(onFetchProducts)]);
}
