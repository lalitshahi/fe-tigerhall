# TigerHall FE Assignment

Steps to run the project:

  - Clone the repo
```sh
  - git clone git@github.com:lalitshahi/fe-tigerhall.git & cd fe-tigerhall
  ```
  
  - Install the packages
  ```sh
  - pnpm install
  ```

  - Run the project
  ```sh
  - pnpm run dev
  ```


### Description
This project displays content from graphql api endpoint.

On searching using the searchBar content should get filtered, and while data is being fetched, loader should be displayed on screen.


### Requirements
  1. The search should filter the content cards using the API and the keywords filter.
  2. When searching there should be a loading animation (Let us see how creative you can be)
    a. Any changes to search should have a 300 ms debounce
  3. A simple readme should be provided with instructions on how to run the project