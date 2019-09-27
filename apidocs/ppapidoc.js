/* VERSION : Baseline  */
/* AUTHOR : Azfar Azman */
/* LAST UPDATE : N/A */
/* IDE : Visual Studio Code */

/**
 * @apiDefine ErrorCode
 *
 * @apiError ErrorCode List Description of Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/**
 * @apiDefine UserNotFoundError
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */

/**
 * @apiDefine InternalServerError
 *
 * @apiError (HTTP 5xx) Internal_Server_Error Internal Server Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 InternalServerError
 *     {
 *       "error": "Internal Server Error"
 *     }
 */


 /**
 * @api {post} /login PublicAPI Login Interface
 * @apiName PublicAPI Login Interface
 * @apiVersion 0.0.1
 * @apiGroup PublicAPI
 *
 * @apiParam {String(50)}       req_username Username of the user
 * @apiParam {Number}           req_password Password that belong to the user
 * @apiParam {Number}           req_key_index  The index of key provide by processor to use to encrypt signature.
 * @apiParam {String(300)}      req_signature Hash Value.
 *
 * @apiSuccess {String}         resp_username Username of the user
 * @apiSuccess {String}         resp_season_id Season_id to be kept for next request
 * @apiSuccess {Number}         resp_code Respond code.
 * @apiSuccess {String}         resp_desc Respond code description.
 * @apiSuccess {Number}         resp_key_index The index of key provide by processor to use to encrypt signature.
 * @apiSuccess {String(300)}    resp_signature Hash Value.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "resp_username": "John Doe",
 *          "resp_season_id": "XY20190929HHMMSS_XRY9288200128",
 *          "resp_code" : "00",
 *          "resp_desc" : "SUCCESS",
 *          "resp_key_index" : 1,
 *          "resp_signature": "59c7275cf3c82f038b7c0076f9888926",
 *     }
 *
 *
 * @apiUse InternalServerError
 */

  /**
 * @api {post} /render RenderAPI Request CompanyList Interface
 * @apiName RenderAPI Request Interface
 * @apiVersion 0.0.1
 * @apiGroup RenderAPI
 *
 * @apiParam {String(50)}       req_render Content request to be render
 * @apiParam {Number}           req_key_index The index of key provide by processor to use to encrypt signature.
 * @apiParam {String(300)}      req_signature Hash Value.
 *
 * @apiSuccess {String}         resp_render Content respond to be render.
 * @apiSuccess {Number}         resp_code Respond code .
 * @apiSuccess {String}         resp_desc Respond code description.
 * @apiSuccess {Number}         resp_key_index The index of key provide by processor to use to encrypt signature.
 * @apiSuccess {String(300)}    resp_signature Hash Value.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "req_render": "company_list",
 *          "resp_code" : "00",
 *          "resp_desc" : "SUCCESS",
 *          "resp_key_index" : 1,
 *          "resp_signature": "59c7275cf3c82f038b7c0076f9888926",
 *     }
 *
 *
 * @apiUse InternalServerError
 *
 *
 *
 */



   /********************GRABPAY PAY ******************/

