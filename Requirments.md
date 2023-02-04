# API Requirements
The Company wants to create an online Food Delivery System to showcase their greate product ideas. Users need to be able to browse an index of all restaurants and see the specifics of each restaurant and the meals that the restaurant offers and add meals to the cart and view the cart page. You have been tasked with building the API that will support this application, and your coworkers is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

-------------------------------------------------------------
## ***API Endpoints***

### **Admin Routes** [token required]


#### **Restaurants**
- Index 
- Show
- Create 
- Delete
- Update

- Aailable Routes
    * A SHOW route: `/Restaurants/:id` [GET] 
    * A Index route: `/Restaurants/` [GET] 
    * A Update route: `/Restaurants/:id` [PATCH]
    * A Create route: `/Restaurants` [POST] 
    * A Delete route: `/Restaurants/:id` [DELETE] 

#### **Subscriptions**
- Index
- Show `all` or `by status`
- Update
- Delete

- Available Routes
    * A SHOW route: `/subs` [GET] + `query parametes for status filters`
    * A Index route : `/subs/:id` [GET]
    * A Update route : `/subs/:id` [PATCH]
    * A Delete route : `/subs/:id` [DELETE]

#### **Meals**

- Index 
- Show `by restaurant`
- Create 
- Update Meals

- Aailable Routes
    * A SHOW route: `/:RestaurantID/meals/:id` [GET] 
    * A Index route: `/:RestaurantID/meals/` [GET] 
    * A Update route: `/:RestaurantID/meals/:id` [PATCH]
    * A Create route: `/:RestaurantID/meals/` [POST] 



#### **Users**

- Index
- Show
- Delete 
- Availble Routes

    * A Show route : `/users/:id` [GET]
    * A Index route : `/users` [GET]
    * A Delete route : `/users/:id` [DELETE]
    

---------------------------------------------------------------
### **User Routes**


#### **Restaurants**
- Index 
- Show

- Aailable Routes
    * A SHOW route: `/Restaurants/:id` [GET] 
    * A Index route: `/Restaurants/` [GET]

#### **Meals**

- Index 
- Show

- Aailable Routes
    * A SHOW route: `/:RestaurantID/meals/:id` [GET] 
    * A Index route: `/:RestaurantID/meals/` [GET] 

#### **Subscriptions** [token required]

- Index
- Show `all` or `by status` `for that specific user`
- Update
- Create 
- Delete
- Add meals 

- Available Routes
    * A SHOW route: `/:userID/subs` [GET] + `query arguments for status`
    * A Index route: `/:userID/subs/:id` [GET]
    * A Update route : `/:userID/subs/:id` [PATCH]
    * A Create route : `/:userID/subs` [POST]
    * An addMeal route: `/:userID/subs/:subID/meals` [POST]
    * A Delete route : `/:userID/subs/:id` [DELETE]

#### **Profiles**

- Show
- Update [token required]
- Delete  [token required]

- Available Routes
    * A SHOW route: `/:userID` [GET]
    * A Update route : `/:userID` [PATCH]
    * A Delete route : `/:userID` [DELETE]

#### **Users**
- Create [token required]
- Login 

- Available Routes
    * A Login route: `/Login` [POST] 
    * A Register route: `/register` [POST] 


#### **Reviews** [token required]
- Create 
- Edit
- Delete
- Available route
    * A Create route : `:restaurantID/:userID/reviews` [POST] ?? restaurant or meal
    * A Edit route :    `:restaurantID/:userID/reviews/:id` [PUT]
    * A Delete route : `:restaurantID/:userID/reviews/:id` [DELETE]
-----------



## Data Shapes

#### User
- id
- firstName
- lastName
- gender
- type (`user` , `Admin`)
- Date Of Birth
- subscriptions
- password
- email
- address `Optional`

    - collection schema(monogoose): users(firstname:string , lastname:string , email:string , subscriptions : array , password:string , gender:string(enum) , type: string(enum) ,  date of birth:Date , address?:string )


#### Restaurants
- _id
- title
- image
- speciality
- rating
- branches
- description
- social media
- reviews (another collection)
- meals (another collection)

    - collection schema : restaurants(title:string , image:string ,  speciality:string , rating:number , branches:array , description:string , social_media:Map , reviews:array , meals:array )

#### Meals
- id
- title
- description
- price
- image
- hasChoices
- sectionName
- sectionID
   - collection Schema : meals(title : string , description:string , price:number , rating:number , image:string , hasChoices:boolean , SectionName:string ,   SectionID:ObjectID )
<!--isItemDiscound (`Optional`) - originalPrice (`Optional`) --->



    

#### Reviews
- id
- username
- userID
- comment
- impression (`Optional`)
- timeCreated -- (`12 january 2023`)

    - Collection Schema : Reviews (username:string , userID: ObjectID , comment:string , timeCreated:Date )


#### Subscriptions
- id
- UserID
- Username
- meals `another collection`
- Monthly_price
- Dates
- timeCreated
- ExpirationDate
- status of Subscription (pending or active or expired)

   - Collection Schema : Subscriptions ( UserID : ObjectID , Username: String , meals : array , Dates : array , timesCreated:Date , ExpirationDate:Date , 
   status : string(enum)
   )



