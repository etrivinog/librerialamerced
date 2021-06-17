//Base url
const urlBase = 'https://hemerotecaudc.herokuapp.com/api/v1/';

//Url for objects
export const urlUser = `${urlBase}user`;
export const urlBooks = `${urlBase}books`;
export const urlTask = `${urlBase}task`;
export const urlStatus = `${urlBase}status`;

//Generic url's for searches
export const findById = '/findById/';
export const findAll = '/findAll';

//Generic url's for save, update delete
export const save = '/save';
export const update = '/update';
export const delete_ = '/delete/';

//Url to find tasks by the id of the tasklist
export const findByTasklist = '/findByTasklist/';
