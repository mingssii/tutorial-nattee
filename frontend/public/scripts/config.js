/**
 * @typedef {Object} Item
 * @property {string} id
 * @property {string} subject
 * @property {string} date
 * @property {string} time
 * @property {string} about
 * @property {string} participant
 * @property {array} person
 * @property {string} contact
 */

/** @typedef {Omit<Item, "_id">} ItemPayload */
const IP = "localhost"; // type Public IPv4 address or 'localhost'
export const BACKEND_URL = `http://${IP}:3222`;

export const SUBJECT = ["Math", "Art"];

//install express
