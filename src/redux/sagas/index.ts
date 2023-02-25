import { all, fork } from 'redux-saga/effects';

import advisorySaga from './advisory';
import apophthganSaga from './apophthgan';
import appellationSaga from './appellation';
import authSaga from './auth';
import bankingSaga from './banking';
import categorySaga from './category';
import feedbackSaga from './feedback';
import popularSaga from './popular';
import membershipSaga from './membership';
import moodSaga from './mood';
import notificationSaga from './notification';
import productSaga from './product';
import profileSaga from './profile';
import transactionSaga from './transaction';
import uploadSaga from './upload';

const rootSaga = function* root(): Generator {
  yield all([
    fork(advisorySaga),
    fork(apophthganSaga),
    fork(appellationSaga),
    fork(authSaga),
    fork(bankingSaga),
    fork(categorySaga),
    fork(feedbackSaga),
    fork(popularSaga),
    fork(membershipSaga),
    fork(moodSaga),
    fork(notificationSaga),
    fork(productSaga),
    fork(profileSaga),
    fork(transactionSaga),
    fork(uploadSaga),
  ]);
};

export default rootSaga;
