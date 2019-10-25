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
 * @apiHeader {String} token Users unique Token access.
 *
 * @apiParam {String(50)}       req_username Username of the user
 * @apiParam {Number}           req_password Password that belong to the user
 *
 * @apiSuccess {String}         resp_username Username of the user
 * @apiSuccess {String}         resp_password Password of the user
 * @apiSuccess {String}         resp_salt  Unique Salt ID of the user
 * @apiSuccess {String}         resp_token  Generated Token ID of the user
 * @apiSuccess {String}         resp_phone_number  Phone Number ID of the user
 * @apiSuccess {String}         resp_birth_date  BirthDate ID of the user
 * @apiSuccess {String}         resp_address  Address  of the user
 * @apiSuccess {String}         resp_postcode  Postcode of the user
 * @apiSuccess {String}         resp_group_name  Unique  of the user
 * @apiSuccess {String}         resp_id      respondID of the user
 * @apiSuccess {String}         resp_group_id  groupID of the user
 * @apiSuccess {String}         resp_updatedAt   Last date time update profile
 * @apiSuccess {String}         resp_createdAt  User first  created datetime
 * @apiSuccess {Number}         resp_code Respond code.
 * @apiSuccess {String}         resp_code_description Respond code description.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "resp_phone_number": "0125358963",
 *         "resp_birth_date": "16/07/1995",
 *         "resp_address": "A-3A-01 KIARA EAST , JALAN MASTIARA",
 *         "resp_postcode": "55100",
 *         "resp_group_name": "User",
 *         "resp_code": "00",
 *         "resp_code_description": "Success",
 *         "resp_id": 1,
 *         "resp_username": "JOHN DOE",
 *         "resp_password": "CLASSIFIED",
 *         "resp_salt": "salt",
 *         "resp_token": "9bffff425f911cba2b4bffe75469efa33ad0839b",
 *         "resp_group_id": 2,
 *         "resp_updatedAt": "2019-10-23T08:06:42.613Z",
 *          "resp_createdAt": "2016-06-22T11:10:25.000Z"
 *     }
 *
 *
 * @apiUse InternalServerError
 */

  /**
 * @api {post} /logout PublicAPI Logout Interface
 * @apiName PublicAPI Logout Interface
 * @apiVersion 0.0.1
 * @apiGroup PublicAPI
 *
 * @apiHeader {String} token Users unique Token access.
 *
 * @apiParam {String(50)}       req_username Username of the user
 *
 * @apiSuccess {Number}         resp_code Respond code.
 * @apiSuccess {String}         resp_code_description Respond code description.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "resp_code": "00",
 *         "resp_code_description": "Success",
 *     }
 *
 *
 * @apiUse InternalServerError
 */


 /**
 * @api {post} /user_access PublicAPI UserAccess Interface
 * @apiName PublicAPI UserAccess Interface
 * @apiVersion 0.0.1
 * @apiGroup PublicAPI
 *
 * @apiHeader {String} token Users unique Token access.
 *
 * @apiParam {String(50)}       req_username Username of the user
 *
 * @apiSuccess {Number}         resp_code Respond code.
 * @apiSuccess {String}         resp_code_description Respond code description.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "resp_code": "00",
 *         "resp_code_description": "Success",
 *     }
 *
 *
 * @apiUse InternalServerError
 */

 
 /**
 * @api {post} /userlist PublicAPI UserList Interface
 * @apiName PublicAPI UserList Interface
 * @apiVersion 0.0.1
 * @apiGroup PublicAPI
 *
 * @apiHeader {String} token Users unique Token access.
 *
 * @apiParam {String(50)}       req_username Username of the user
 *
 * @apiSuccess {Number}         id Respond code.
 * @apiSuccess {String}         username Respond code description.
 * @apiSuccess {String}         password Respond code description.
 * @apiSuccess {String}         salt Respond code description.
 * @apiSuccess {String}         token Respond code description.
 * @apiSuccess {String}         group_index Respond code description.
 * @apiSuccess {String}         createdAt Respond code description.
 * @apiSuccess {String}         updatedAt Respond code description.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       {
 *       "id": 2,
 *       "username": "twinzdragonz",
 *       "password": "twinz000",
 *       "salt": "salt",
 *       "token": "token",
 *       "group_index": 1,
 *       "createdAt": "2016-06-22T11:10:25.000Z",
 *       "updatedAt": "2016-06-22T11:10:25.000Z"
 *      },
 *      {
 *       "id": 1,
 *        "username": "admin",
 *        "password": "admin",
 *        "salt": "salt",
 *        "token": "9bffff425f911cba2b4bffe75469efa33ad0839b",
 *         "group_index": 2,
 *         "createdAt": "2016-06-22T11:10:25.000Z",
 *         "updatedAt": "2019-10-23T08:06:42.613Z"
 *        }
 *     }
 *
 *
 * @apiUse InternalServerError
 */


 /**
 * @api {post} /user PublicAPI UserSingle Interface
 * @apiName PublicAPI UserSingle Interface
 * @apiVersion 0.0.1
 * @apiGroup PublicAPI
 *
 * @apiHeader {String} token Users unique Token access.
 *
 * @apiParam {String(50)}       req_username Username of the user
 * @apiParam {Number}           req_user_id  Request user ID
 *
 * @apiSuccess {Number}         id Respond code.
 * @apiSuccess {String}         username Respond code description.
 * @apiSuccess {String}         password Respond code description.
 * @apiSuccess {String}         salt Respond code description.
 * @apiSuccess {String}         token Respond code description.
 * @apiSuccess {String}         group_index Respond code description.
 * @apiSuccess {String}         createdAt Respond code description.
 * @apiSuccess {String}         updatedAt Respond code description.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *         "id": 1,
 *          "username": "admin",
 *          "password": "admin",
 *          "salt": "salt",
 *          "token": "9bffff425f911cba2b4bffe75469efa33ad0839b",
 *         "group_index": 2,
 *         "createdAt": "2016-06-22T11:10:25.000Z",
 *         "updatedAt": "2019-10-23T08:06:42.613Z"
 *        }
 *
 *
 *
 * @apiUse InternalServerError
 */

  /**
 * @api {post} /useredit PublicAPI UserEdit Interface
 * @apiName PublicAPI UserEdit Interface
 * @apiVersion 0.0.1
 * @apiGroup PublicAPI
 *
 * @apiHeader {String} token Users unique Token access.
 *
 * @apiParam {String(50)}       req_username Username of the current user
 * @apiParam {String(50)}       req_change_user_id UserID of edit user
 * @apiParam {String(50)}       req_change_username New username of edited user
 * @apiParam {String(50)}       req_change_password New Password of edited user
 * @apiParam {String(50)}       req_change_group New Group of edited user
 * @apiParam {String(50)}       req_change_phone_number New PhoneNumber of edited user
 * @apiParam {String(50)}       req_change_birth_date New Birhdate of edited user
 * @apiParam {String(50)}       req_change_address New address of edited user
 * @apiParam {String(50)}       req_change_postcode New Postcode of edited user
 * @apiParam {String(50)}       req_change_company_id New CompanyId of edited user
 * 
 * @apiSuccess {Number}         resp_code Respond code.
 * @apiSuccess {String}         resp_code_description Respond code description.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "resp_code": "00",
 *         "resp_code_description": "Success",
 *     }
 *
 *
 * @apiUse InternalServerError
 */

  /**
 * @api {delete} /user PublicAPI UserDelete Interface
 * @apiName PublicAPI UserDelete Interface
 * @apiVersion 0.0.1
 * @apiGroup PublicAPI
 *
 * @apiHeader {String} token Users unique Token access.
 *
 * @apiParam {String(50)}       req_username Username of the current user
 * @apiParam {Number}           req_user_id  Request User ID to be deleted
 * 
 * @apiSuccess {Number}         resp_code Respond code.
 * @apiSuccess {String}         resp_code_description Respond code description.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "resp_code": "00",
 *         "resp_code_description": "Success",
 *     }
 *
 *
 * @apiUse InternalServerError
 */

   /**
 * @api {post} /contact_us PublicAPI ContactUs Interface
 * @apiName PublicAPI ContactUs Interface
 * @apiVersion 0.0.1
 * @apiGroup PublicAPI
 *
 *
 * @apiParam {String(50)}       req_email Email of the inquiry
 * @apiParam {Number}           req_phone_num  Phone Number of inquiry
 * @apiParam {Number}           req_message  Text Message of inquiry
 * 
 * @apiSuccess {Number}         resp_code Respond code.
 * @apiSuccess {String}         resp_code_description Respond code description.
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "resp_code": "00",
 *         "resp_code_description": "Success",
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

