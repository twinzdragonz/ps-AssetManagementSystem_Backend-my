define({ "api": [
  {
    "type": "post",
    "url": "/contact_us",
    "title": "PublicAPI ContactUs Interface",
    "name": "PublicAPI_ContactUs_Interface",
    "version": "0.0.1",
    "group": "PublicAPI",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_email",
            "description": "<p>Email of the inquiry</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "req_phone_num",
            "description": "<p>Phone Number of inquiry</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "req_message",
            "description": "<p>Text Message of inquiry</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resp_code",
            "description": "<p>Respond code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_code_description",
            "description": "<p>Respond code description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"resp_code\": \"00\",\n    \"resp_code_description\": \"Success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ppapidoc.js",
    "groupTitle": "PublicAPI",
    "error": {
      "fields": {
        "HTTP 5xx": [
          {
            "group": "HTTP 5xx",
            "optional": false,
            "field": "Internal_Server_Error",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/login",
    "title": "PublicAPI Login Interface",
    "name": "PublicAPI_Login_Interface",
    "version": "0.0.1",
    "group": "PublicAPI",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Users unique Token access.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_username",
            "description": "<p>Username of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "req_password",
            "description": "<p>Password that belong to the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_username",
            "description": "<p>Username of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_password",
            "description": "<p>Password of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_salt",
            "description": "<p>Unique Salt ID of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_token",
            "description": "<p>Generated Token ID of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_phone_number",
            "description": "<p>Phone Number ID of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_birth_date",
            "description": "<p>BirthDate ID of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_address",
            "description": "<p>Address  of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_postcode",
            "description": "<p>Postcode of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_group_name",
            "description": "<p>Unique  of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_id",
            "description": "<p>respondID of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_group_id",
            "description": "<p>groupID of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_updatedAt",
            "description": "<p>Last date time update profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_createdAt",
            "description": "<p>User first  created datetime</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resp_code",
            "description": "<p>Respond code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_code_description",
            "description": "<p>Respond code description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"resp_phone_number\": \"0125358963\",\n    \"resp_birth_date\": \"16/07/1995\",\n    \"resp_address\": \"A-3A-01 KIARA EAST , JALAN MASTIARA\",\n    \"resp_postcode\": \"55100\",\n    \"resp_group_name\": \"User\",\n    \"resp_code\": \"00\",\n    \"resp_code_description\": \"Success\",\n    \"resp_id\": 1,\n    \"resp_username\": \"JOHN DOE\",\n    \"resp_password\": \"CLASSIFIED\",\n    \"resp_salt\": \"salt\",\n    \"resp_token\": \"9bffff425f911cba2b4bffe75469efa33ad0839b\",\n    \"resp_group_id\": 2,\n    \"resp_updatedAt\": \"2019-10-23T08:06:42.613Z\",\n     \"resp_createdAt\": \"2016-06-22T11:10:25.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ppapidoc.js",
    "groupTitle": "PublicAPI",
    "error": {
      "fields": {
        "HTTP 5xx": [
          {
            "group": "HTTP 5xx",
            "optional": false,
            "field": "Internal_Server_Error",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "PublicAPI Logout Interface",
    "name": "PublicAPI_Logout_Interface",
    "version": "0.0.1",
    "group": "PublicAPI",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Users unique Token access.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_username",
            "description": "<p>Username of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resp_code",
            "description": "<p>Respond code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_code_description",
            "description": "<p>Respond code description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"resp_code\": \"00\",\n    \"resp_code_description\": \"Success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ppapidoc.js",
    "groupTitle": "PublicAPI",
    "error": {
      "fields": {
        "HTTP 5xx": [
          {
            "group": "HTTP 5xx",
            "optional": false,
            "field": "Internal_Server_Error",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user_access",
    "title": "PublicAPI UserAccess Interface",
    "name": "PublicAPI_UserAccess_Interface",
    "version": "0.0.1",
    "group": "PublicAPI",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Users unique Token access.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_username",
            "description": "<p>Username of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resp_code",
            "description": "<p>Respond code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_code_description",
            "description": "<p>Respond code description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"resp_code\": \"00\",\n    \"resp_code_description\": \"Success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ppapidoc.js",
    "groupTitle": "PublicAPI",
    "error": {
      "fields": {
        "HTTP 5xx": [
          {
            "group": "HTTP 5xx",
            "optional": false,
            "field": "Internal_Server_Error",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "PublicAPI UserDelete Interface",
    "name": "PublicAPI_UserDelete_Interface",
    "version": "0.0.1",
    "group": "PublicAPI",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Users unique Token access.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_username",
            "description": "<p>Username of the current user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "req_user_id",
            "description": "<p>Request User ID to be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resp_code",
            "description": "<p>Respond code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_code_description",
            "description": "<p>Respond code description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"resp_code\": \"00\",\n    \"resp_code_description\": \"Success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ppapidoc.js",
    "groupTitle": "PublicAPI",
    "error": {
      "fields": {
        "HTTP 5xx": [
          {
            "group": "HTTP 5xx",
            "optional": false,
            "field": "Internal_Server_Error",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/useredit",
    "title": "PublicAPI UserEdit Interface",
    "name": "PublicAPI_UserEdit_Interface",
    "version": "0.0.1",
    "group": "PublicAPI",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Users unique Token access.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_username",
            "description": "<p>Username of the current user</p>"
          },
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_change_user_id",
            "description": "<p>UserID of edit user</p>"
          },
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_change_username",
            "description": "<p>New username of edited user</p>"
          },
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_change_password",
            "description": "<p>New Password of edited user</p>"
          },
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_change_group",
            "description": "<p>New Group of edited user</p>"
          },
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_change_phone_number",
            "description": "<p>New PhoneNumber of edited user</p>"
          },
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_change_birth_date",
            "description": "<p>New Birhdate of edited user</p>"
          },
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_change_address",
            "description": "<p>New address of edited user</p>"
          },
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_change_postcode",
            "description": "<p>New Postcode of edited user</p>"
          },
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_change_company_id",
            "description": "<p>New CompanyId of edited user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resp_code",
            "description": "<p>Respond code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_code_description",
            "description": "<p>Respond code description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"resp_code\": \"00\",\n    \"resp_code_description\": \"Success\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ppapidoc.js",
    "groupTitle": "PublicAPI",
    "error": {
      "fields": {
        "HTTP 5xx": [
          {
            "group": "HTTP 5xx",
            "optional": false,
            "field": "Internal_Server_Error",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/userlist",
    "title": "PublicAPI UserList Interface",
    "name": "PublicAPI_UserList_Interface",
    "version": "0.0.1",
    "group": "PublicAPI",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Users unique Token access.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_username",
            "description": "<p>Username of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Respond code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group_index",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Respond code description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  {\n  \"id\": 2,\n  \"username\": \"twinzdragonz\",\n  \"password\": \"twinz000\",\n  \"salt\": \"salt\",\n  \"token\": \"token\",\n  \"group_index\": 1,\n  \"createdAt\": \"2016-06-22T11:10:25.000Z\",\n  \"updatedAt\": \"2016-06-22T11:10:25.000Z\"\n },\n {\n  \"id\": 1,\n   \"username\": \"admin\",\n   \"password\": \"admin\",\n   \"salt\": \"salt\",\n   \"token\": \"9bffff425f911cba2b4bffe75469efa33ad0839b\",\n    \"group_index\": 2,\n    \"createdAt\": \"2016-06-22T11:10:25.000Z\",\n    \"updatedAt\": \"2019-10-23T08:06:42.613Z\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ppapidoc.js",
    "groupTitle": "PublicAPI",
    "error": {
      "fields": {
        "HTTP 5xx": [
          {
            "group": "HTTP 5xx",
            "optional": false,
            "field": "Internal_Server_Error",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user",
    "title": "PublicAPI UserSingle Interface",
    "name": "PublicAPI_UserSingle_Interface",
    "version": "0.0.1",
    "group": "PublicAPI",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Users unique Token access.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_username",
            "description": "<p>Username of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "req_user_id",
            "description": "<p>Request user ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Respond code.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group_index",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdAt",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>Respond code description.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n {\n    \"id\": 1,\n     \"username\": \"admin\",\n     \"password\": \"admin\",\n     \"salt\": \"salt\",\n     \"token\": \"9bffff425f911cba2b4bffe75469efa33ad0839b\",\n    \"group_index\": 2,\n    \"createdAt\": \"2016-06-22T11:10:25.000Z\",\n    \"updatedAt\": \"2019-10-23T08:06:42.613Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "./ppapidoc.js",
    "groupTitle": "PublicAPI",
    "error": {
      "fields": {
        "HTTP 5xx": [
          {
            "group": "HTTP 5xx",
            "optional": false,
            "field": "Internal_Server_Error",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/render",
    "title": "RenderAPI Request CompanyList Interface",
    "name": "RenderAPI_Request_Interface",
    "version": "0.0.1",
    "group": "RenderAPI",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String(50)",
            "optional": false,
            "field": "req_render",
            "description": "<p>Content request to be render</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "req_key_index",
            "description": "<p>The index of key provide by processor to use to encrypt signature.</p>"
          },
          {
            "group": "Parameter",
            "type": "String(300)",
            "optional": false,
            "field": "req_signature",
            "description": "<p>Hash Value.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_render",
            "description": "<p>Content respond to be render.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resp_code",
            "description": "<p>Respond code .</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_desc",
            "description": "<p>Respond code description.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resp_key_index",
            "description": "<p>The index of key provide by processor to use to encrypt signature.</p>"
          },
          {
            "group": "Success 200",
            "type": "String(300)",
            "optional": false,
            "field": "resp_signature",
            "description": "<p>Hash Value.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"req_render\": \"company_list\",\n     \"resp_code\" : \"00\",\n     \"resp_desc\" : \"SUCCESS\",\n     \"resp_key_index\" : 1,\n     \"resp_signature\": \"59c7275cf3c82f038b7c0076f9888926\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./ppapidoc.js",
    "groupTitle": "RenderAPI",
    "error": {
      "fields": {
        "HTTP 5xx": [
          {
            "group": "HTTP 5xx",
            "optional": false,
            "field": "Internal_Server_Error",
            "description": "<p>Internal Server Error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"Internal Server Error\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
