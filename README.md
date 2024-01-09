# Webflow App - React starter

Scripts:
- `npm run dev` - run a local dev server. Files are served via port 1337. You'll need to hit reload on the Designer Extension for the changes to show up
- `npm run build` - generate a static bundle on the directory root (`bundle.zip`)

///
### My Frontend Webflow App will:

- Call webflow.getIdToken()
- Send a post request to my backend server (/webflow-user)
  - Recieve a response with either
    - Known User: a JWT
    - Unknown User: "Please sign-up" message
- Send a get request to the backend server, with a JWT
  - Recieve reponses for Sites and Collections