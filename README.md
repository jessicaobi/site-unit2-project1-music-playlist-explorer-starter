📝 `NOTE` Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

## Unit Assignment: Music Playlist Explorer

Submitted by: **JESSICA OBI**

Estimated time spent: **18** hours spent in total


### Application Features

#### CORE FEATURES

- [x] **Display Playlists**
  - [x] Dynamically render playlists on the homepage using JavaScript.
    - [x] Playlists should be shown in grid view.
    - [x] Playlist images should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [x] Fetch data from a provided Javascript file and use it to create interactive playlist tiles.

- [x] **Playlist Components**
  - [x] Each tile should display the playlist's:
    - [x] Cover image
    - [x] Name
    - [x] Author
    - [x] Like count

- [x] **Playlist Details**
  - [x] Create a modal pop-up view that displays detailed information about a playlist when a user clicks on a playlist tile.
  - [x] The modal should show the playlist's:
    - [x] Cover image
    - [x] Name
    - [x] Author
    - [x] List of songs, including each song's:
      - [x] Title
      - [x] Artist
      - [x] Duration
  - [x] The modal itself should:
    - [x] Not occupy the entire screen.
    - [x] Have a shadow to show that it is a pop-up.
    - [x] Appear floating on the screen.
    - [x] The backdrop should appear darker or in a different shade.

- [x] **Like Playlists**
  - [x] Implement functionality to allow users to like playlists by clicking a heart icon on each playlist tile.
  - [x] When the heart icon is clicked:
    - [x] If previously unliked:
      - [x] The like count on the playlist tile should increase by 1.
      - [x] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been liked by the user.
    - [x] If previously liked:
      - [x] The like count on the playlist tile should decrease by 1.
      - [x] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been unliked by the user.
    - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please film yourself liking and unliking:
      - [x] a playlist with a like count of 0
      - [x] a playlist with a non-zero like count

- [x] **Shuffle Songs**
  - [x] Enable users to shuffle the songs within a playlist using a shuffle button in the playlist's detail modal.
  - [x] When the shuffle button is clicked, the playlist's songs should display in a different order.
  - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself shuffling the same playlist more than once. 
  
- [x] **Featured Page**
  - [x] Application includes a dedicated page that randomly selects and displays a playlist, showing the playlist’s:
    - [x] Playlist Image
    - [x] Playlist Name
    - [x] List of songs, including each song's:
      - [x] Title
      - [x] Artist
      - [x] Duration
  - [x] When the page is refreshed or reloaded, a new random playlist is displayed
    - For example, navigating to the all playlists page and then back to the featured playlist page should result in a new random playlist being displayed
    - Note that because your algorithm will not be truly random, it is possible that the same playlist will feature twice in a row. 
    - [x] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself refreshing the featured page more than once. 
  - [x] Application includes a navigation bar or some other mechanism such that users can navigate to the page with all playlists from the featured page and vice versa without using the browser's back and forward buttons. 

#### STRETCH FEATURES

- [ ] **Add New Playlists**
  - [ ] Allow users to create new playlists.
  - [ ] Using a form, users can input playlist:
    - [ ] Name
    - [ ] Author
    - [ ] Cover image
    - [ ] Add one or more songs to the playlist, specifying the song's:
      - [ ] Title
      - [ ] Artist
  - [ ] The resulting playlist should display in the grid view.
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself adding at least two songs to the playlist. 

- [ ] **Edit Existing Playlists**
  - [ ] Enable users to modify the details of existing playlists.
  - [ ] Add an edit button to each playlist tile.
  - [ ] Users can update the playlist:
    - [ ] Name
    - [ ] Author
    - [ ] Songs
  - [ ] The playlist grid view and playlist detail modal should update to display any changes (see Required Features, Criterion 1 & 2).
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself:
    - [ ] Editing all of a playlist's features (name, creator, AND songs)
    - [ ] Editing some of a playlist's features (name, creator, OR songs) 

- [x] **Delete Playlists**
  - [x] Add a delete button to each playlist tile within the grid view.
  - [x] When clicked, the playlist is removed from the playlist grid view.

- [ ] **Search Functionality**
  - [ ] Implement a search bar that allows users to filter playlists by:
    - [ ] Name 
    - [ ] Author
  - [ ] The search bar should include:
    - [ ] Text input field
    - [ ] Submit/Search Button
    - [ ] Clear Button
  - [ ] Playlists matching the search query in the text input are displayed in a grid view when the user:
    - [ ] Presses the Enter Key
    - [ ] Clicks the Submit/Search Button 
  - [ ] User can click the clear button. When clicked:
    - [ ] All text in the text input field is deleted
    - [ ] All playlists in the `data.json` file are displayed in a grid view
    - [ ] **Optional:** If the Add Playlist, Edit Existing Playlist, or Delete Playlist stretch features were implemented:
      - [ ] If users can add a playlist, added playlists should be included in search results.
      - [ ] If users can edit a playlist, search results should reflect the latest edits to each playlist.
      - [ ] If users can delete a playlist, deleted playlists should no longer be included in search results.
      - **Note:** You will not be graded on the implementation of this optional subfeature to keep your grade of this stretch feature independent of your implementation of other stretch features. However, we highly suggest including this in your implementation to model realistic behavior of real applications. 

- [ ] **Sorting Options**
  - [ ] Implement a drop-down or button options that allow users to sort the playlist by:
    - [ ] Name (A-Z alphabetically)
    - [ ] Number of likes (descending order)
    - [ ] Date added (most recent to oldest, chronologically)
  - [ ] Selecting a sort option should result in a reordering based on the selected sort while maintaining a grid view.

### Walkthrough Video
Updated Walkthrough Video Section:

Embedded Code:
`<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/b885c24975ff4c4e9fc3e56931e1d8c2?sid=4fefee5e-bdd2-415c-8d21-e4db1c32a168" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>`

Link:
`https://www.loom.com/share/b885c24975ff4c4e9fc3e56931e1d8c2?sid=718d73ef-db0d-48bc-8e30-4e228c16a157`

Updated Message:
Hello CodePath Team! My loom has not been working correctly for the past two weeks, and I was originally unable to login on my work laptop using my Salesforce email. Additionally, the Loom website kept me in a limbo where I wasn't able to sign in or out, and it was just a loading page. This happened last week as well. I tried to load the code on my personal laptop, but it wasn't working either due to me not being able to fork from my own repository. I still submitted my original project although the walkthrough video was not there, which is noted in my submission notes. This walkthrough video section is the only part of the github repository that has been edited since my timely submission. I was able to finally log into Loom on a private browser using my personal account after about an hour of trial and error with the account I originally intended to use, so I sincerely apologize for any potential inconvenience. Thank you all so much for your understanding!

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I think they did. Although, I would also say that we went through everything very quckly. I think we could've spent more time on the JSON or even went through it more slowly, but for the amount of stuff that we had to do in this project, we genuinely did not have enough time.


* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I think I would add more animations and try to complete more stretch goals such as the add, edit, sort, and search features. I definitely think that would add to the variety of the page and make it seem less static. Another thing that I would have tried to implement a feature where when you clicked or hovered over a specific song in the modal or on the featured page that it would actually play the song, or link you to Spotify. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I think the JSON file and HTML wireframe did not go as planned. In hindsight, I definitely would have read through all of the milestones before spending so much time of the wireframe. I think it was redundant to do the initial wireframe if we were going to add it dynamically anyways. I think that took away a lot of time.

One thing that I do think I did well was the shuffle button. It was my most prideful feature because I did it with absolutely zero AI assistance. Although AI is encouraged in this program, I don't like to use it too much when programming because I like the problem-solving aspect of coding and taking my time. However, because this program is so fast-paced, you genuinely don't have the time to sit there and try to figure everything out by yourself without AI assistance from some things. So being able to do all of that by myself really made me happy.

As mentioned in the previous question, I would like to implement a feature where when you clicked or hovered over a specific song in the modal or on the featured page that it would actually play the song, or link you to Spotify. During the project demos, I saw a few of my peers do that, and I thought it was a great and cool idea.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

W3Schools for a lot of functions and properties related to HTML, CSS, and JS
Background: https://prismic.io/blog/css-background-effects
Shuffling Array: https://www.youtube.com/watch?v=5sNGqsMpW1E
Icons: http://fontawesome.com/
JSON Fetch: https://github.com/dst2609/ftl-code-demo-2025/tree/main/week2/w2d2/FetchExample



### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

I would like to shout out Devarsh for walking us through the JSON lesson and application for this project. He also helped with my JS file for the Featured page as I didn't know it was general convention to have a seperate js file for each html file. I would also like to shoutout my peer Moosay for giving me the idea to link the image to it’s ID when naming. This made saving and uploading pictures significantly quicker.