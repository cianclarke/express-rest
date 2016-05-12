# FeedHenry Hello World MBaaS Server

This is a blank 'hello world' FeedHenry MBaaS. Use it as a starting point for building your APIs. 

# Group Products API

# product [/product]

'Product' endpoint.

## product [GET] 

'Product' endpoint.

+ Response 200 (application/json)
    + Body
            [
              { "some product" : "goes here" },
              {}
            ]

## product [POST] 

'Product' endpoint.

+ Request (application/json)
    + Body
            {
              "hello": "world"
            }

+ Response 200 (application/json)
    + Body
            {
              "msg": "Hello world"
            }

# individualProduct [/product/{id}]

'Product' endpoint.

+ Parameters
    + id - Id of the product we want

## individualProduct [GET] 

'Product' endpoint.

+ Response 200 (application/json)
    + Body
            { "some product" : "goes here" },
          