# Twitter Bot

## Pre-requisite

### Twitter Developer Account

- Consumer Keys
- Access Token and Secret (Read and Write access)

If you don't have the developer account simply register to https://developer.twitter.com/ then create a project and generate keys.

Twitter has a rate limit of 200 requests per 15-minute window per each authenticated user and has a Tweet cap volumes of 50 Tweets/second 

Please see the link below for more information:
- https://developer.twitter.com/en/docs/twitter-api/tweet-caps 
- https://developer.twitter.com/en/docs/twitter-api/rate-limits#v2-limits



##### NOTE: To have a read write access for the access token you need to edit the User authentication settings, change `App Permission` to `Read and write`, `Type of App` to `Web App, Automated App or Bot`, `App info Callback URI / Redirect URL` to any url `Website URL` to any url.

 
### A MongoDB Database
This bot uses mongodb to store the last createdAtBlockNumber and used it as a reference to retrieve the new purchases.


### Usage

This bot has only one endpoint and it's:

```
Method: POST
URL: /tweet
```

