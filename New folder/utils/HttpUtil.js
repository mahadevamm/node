"use strict";

/**
 * @file It is HttpUtil function it will provide the support functions to send create response messages.
 * @copyright nanu
 */

module.exports = {

    /**
     * If request is sucess
     * 
     * @param {any} data - It is any value to send as response.
     * @return {object} {status=200,result=data,message='OK'}
     */


    getSuccess : (data) => {
        return {
            status: 200,
            result: data,
            message: 'Ok'
        }
    },


    /**
     * If resource is created.
     * 
     * @param {any} data - It is any value to send as response.
     * @return {object} {status=201,result=data,message='Created'}
     */
    getCreated : (data) => {
        return {
            status: 201,
            result: data,
            message: 'Created'
        }
    },


    /**
     * If any Error is occurred during processng request.
     * 
     * @param {any} data - It is any value to send as response.
     * @return {object} {status=500,result=data,message='Error'}
     */
    getError : (data) => {
        return {
            status: 500,
            result: data,
            message: 'Error'
        }
    },


    /**
     * If request is invalid or request data is invalid.
     * 
     * @param {string} msg - It is string value to send as response message.
     * @return {object} {status=400,result="Bad Request",message='Bad Request'}
     */
    getInvalidRequest : (msg) => {
        return {
            status: 400,
            result: "Bad Request",
            message: msg
        }
    }
}