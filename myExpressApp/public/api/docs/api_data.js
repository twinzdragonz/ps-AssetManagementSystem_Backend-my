define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "PublicAPI Login Interface",
    "name": "PublicAPI_Login_Interface",
    "version": "0.0.1",
    "group": "PublicAPI",
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
            "field": "resp_username",
            "description": "<p>Username of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "resp_season_id",
            "description": "<p>Season_id to be kept for next request</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n     \"resp_username\": \"John Doe\",\n     \"resp_season_id\": \"XY20190929HHMMSS_XRY9288200128\",\n     \"resp_code\" : \"00\",\n     \"resp_desc\" : \"SUCCESS\",\n     \"resp_key_index\" : 1,\n     \"resp_signature\": \"59c7275cf3c82f038b7c0076f9888926\",\n}",
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