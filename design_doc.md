Note: This is a placeholder while we wait for wireframes.
# Dungeons & Dragons Initiative Tracker Design Document
## 1. Introduction
**Purpose**: 

The primary objective of this application is to furnish participants engaged in a Dungeons and Dragons (D&D) campaign with a visual mechanism to discern the commencement of their turn within the gameplay. The overarching intent is to enhance the efficiency of turn-based interactions, particularly in scenarios involving multiple characters. Through the implementation of this feature, the application aims to expedite the pace of gameplay, thereby optimizing the overall gaming experience for participants.

**Scope**: 
1. **Turn-Based Facilitation**: The primary function of the application is to seamlessly guide players through the turn-based structure inherent in D&D gameplay.
This includes a visual representation to clearly demarcate when a player's turn commences.

2. **Multifaceted Character Management**: The application is tailored to accommodate scenarios involving multiple characters within a campaign.
It is engineered to address the intricacies of managing and expediting turns for each character efficiently.

3. **Enhanced Gameplay Efficiency**: A central objective is to significantly augment the speed and fluidity of turn-based play.
By mitigating potential delays associated with turn transitions, the application aims to optimize overall gameplay efficiency.

4. **Intuitive User Interface**: The scope involves the implementation of an intuitive and user-friendly interface, ensuring accessibility for players of varying experience levels with D&D.

## 2. System Architecture
### 2.1 Front End
#### User Interface (UI):
 - Describe the overall layout and design principles.
 - Detail components, such as header, turn display, player info, turn controls, etc.
 - Specify the technology stack (HTML, CSS, JavaScript) and any front-end frameworks (e.g., React, Angular).

#### Interaction Design:
 - Describe user interactions (e.g., clicking buttons, advancing turns).
 - Explain how data is presented and updated in real-time.
#### Visual Representation:
 - Detail the use of graphics, icons, and any visual elements on the battlefield grid.

#### Responsiveness:
 - Outline how the UI adapts to different screen sizes (responsive design).

### 2.2 Back End
#### Server Architecture:
 - Specify the server architecture (e.g., client-server, microservices).
 - Detail the server-side technology stack (e.g., Node.js, Django, Flask).

#### Database Design:
 - Define the database schema for storing player information, turn history, and other relevant data.
 - Discuss the choice of database system (e.g., MySQL, MongoDB).

#### APIs and Communication:
 - Outline the APIs for communication between the front end and back end.
 - Specify data formats (e.g., JSON) and communication protocols (e.g., RESTful API).

#### User Authentication:
 - Explain how user authentication and authorization are implemented.
 - Detail any security measures in place.

#### Turn Logic:
 - Describe the algorithm for determining turn order.
 - Explain how the backend handles advancing turns and updating the game state.

## 3. Features
### 3.1 Front End Features
#### Turn Display:
 - Explain how the front end displays the current turn and whose turn it is.

#### Player/CPU Information:
 - Detail how player and CPU information is presented on the front end.

#### Turn Controls:
 - Explain the functionality of buttons for advancing turns and resetting the game.

#### Turn History:
 - Describe how the front end displays the turn log and any notes.

#### Visual Representation:
 - Detail how the front end renders the battlefield grid and icons.

### 3.2 Back End Features
#### Initiative Tracking:
 - Explain how the backend calculates and maintains the initiative order.

#### Database Operations:
characters Schema
| Column         | Type   | Constraints                   |
|----------------|--------|-------------------------------|
| ID             | int    | Primary Key, Auto-increment   |
| PHOTO          | string |                               |
| NAME           | string | Not Null                      |
| HEALTH_MAX     | int    | Not Null                      |
| TYPE           | string | Not Null                      |

**GET** `/characters` - Get's a list of all characters
- Acceptable Query Params
  - type={type} - Retrieves all characters with the specified `type`.

**GET** `/characters/{character_id}` - Get's a character with the specified `character_id`

**POST** `/characters` - Create a character
 - POST Body
   - NAME - Required
   - HEALTH_MAX - Required
   - TYPE - Required
   - PHOTO - Optional
  
**PUT** `/characters/{character_id}` - Edit a character with the specified `character_id`
 - PUT Body (Pass any in with their new value to be updated)
   - NAME
   - HEALTH_MAX
   - TYPE
   - PHOTO

**DELETE** `/characters/{character_id}` - Delete a character with the specified `character_id`

---

### Campaign
campaign schema
| Column         | Type   | Constraints                   |
|----------------|--------|-------------------------------|
| ID             | int    | Primary Key, Auto-increment   |
| NAME           | string | Not Null                      |

**GET** `/campaign` - Retrieve a list of campaigns

**GET** `/campaign/{campaign_id}` - Retrieve a campaign with the specified `capaign_id`

**POST** `/campaign` - Create a campaign
- POST Body
  - NAME - Required
 
**PUT** `/campaign/{campaign_id}` - Edit a campaign with the specified `capaign_id`
- PUT Body
  - NAME - Required 

**DELETE** `/campaign/{campaign_id}` - Delete a campaign with the specified `capaign_id`

---

### Round
round schema
| Column         | Type   | Constraints                   |
|----------------|--------|-------------------------------|
| ID             | int    | Primary Key, Auto-increment   |
| CAMPAIGN ID    | int    | Not Null (FK to Campaign)     |

---

### Additional tables
character-round schema
 - This table will create a character to round relationship.
 - All round specific data should go in this table

| Column        | Type  | Constraints                                     |
|---------------|-------|-------------------------------------------------|
| character_id  | INT   | FOREIGN KEY (character_id) REFERENCES Character(character_id) |
| round_id       | INT   | FOREIGN KEY (round_id) REFERENCES Round(round_id) |
| PRIMARY KEY    |       | (character_id, round_id)                       |
| initiative    | INT   | Not Null                                        |

// Still need to add CRUD operations

---
character-campaign schema
 - This table will create a character to campaign relationship
 - All campaign specific data should go in this table

| Column        | Type  | Constraints                                     |
|---------------|-------|-------------------------------------------------|
| character_id  | INT   | FOREIGN KEY (character_id) REFERENCES Character(character_id) |
| campaign_id       | INT   | FOREIGN KEY (campaign_id) REFERENCES Campaign(campaign_id) |
| PRIMARY KEY    |       | (character_id, campaign_id)                       |
| CURRENT_HEALTH   | INT  |                                               |

// Still need to add CRUD operations

#### Real-time Updates:
 - Outline how real-time updates are achieved, especially for turn changes.

#### Scalability:
 - Considering that, at the moment, this app will be built to run locally for a party of no more than 20 people, we aren't concerned about scalability and is something that will not be addressed for MVP.

## 4. Security Considerations
At this time, there are no serious security considerations.

## 5. Testing
#### Unit Testing:
 - Describe the unit testing strategy for both front end and back end.

#### Integration Testing:
 - Outline plans for integration testing, especially for communication between front end and back end.

## 6. Deployment
#### Hosting Environment:
Hosting for this app will be locally. There will be instructions in the README on how to run the app.

## 7. Future Enhancements

#### Additional Features:
 - List features that could be added in future iterations.

## 8. Conclusion
- Summarize the key points of the design document.
- Provide any additional notes or considerations.
