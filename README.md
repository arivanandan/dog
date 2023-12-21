# Purpose

The idealogy driving how the code is structured in this project is

- DRY
  - only if you are really really sure the code will be reused, split it
  - or isolate the function / hook when you need to write same logic somewhere else
- SRP
  - single responsibility as long as it's small
  - when it gets big, we split it but we want to keep everything in one place if we can
- co-location principle
  - you keep everything you need in one place, you read it top-down it makes sense without having to go anywhere else
  - types are also kept in the same folder where the components are exposed
  - components are packed into folders when they belong to the same function

The code is structured by function and necessity rather than any rigid formation so it depends on code reviews to keep it clean but I believe it's doable. Each component keeps everything it needs in one place so you can scroll one screen tops and get all the information we need.

## Next steps

Following the principles above I'd probably do

- Take the data fetching into a hook and make it a HOC. Currently it returns "Loading ..." and "Error", I'd want the HOC to handle this.
- Make sub-breeds-list a separate component if we decide to render the random image for sub-breeds as well.

## Requirements

![img.png](static%2Fimg.png)

- API: https://dog.ceo/dog-api/documentation/
- Use typescript
- Use react-query for querying data
- Use React Bootstrap https://react-bootstrap.netlify.app/ for the modal
- Not using store
- Zero Style
- We add some random data for each Dog Breed (level 1), `avgHeight` and `avgWeight`after loading data.
  Based on avgHeight and avgWeight, we calculate the POWER index of that breed and show on modal?
  `POWER = avgHeight + avgWeight * 9;`

## Run the project

- Install dependencies: `yarn`
- Run the project: `yarn dev`
