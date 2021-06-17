import { INSERT_TASKLIST } from '../../constants';
import { createAction } from 'redux-actions';
import { apiPost } from '../../api';
import { urlBooks, save } from '../../api/urls';

//Make the asyc promise into sync
export const insertTasklist = createAction(INSERT_TASKLIST,
    tasklist => apiPost(`${urlBooks}${save}`, tasklist)() );