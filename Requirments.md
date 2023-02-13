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
- Index `all` or `by status`
- Show 
- Update
- Delete

- Available Routes
    * A Index route: `/subs` [GET] + `query parametes for status filters`
    * A Show route : `/subs/:id` [GET] 
    * A Create route : `/subs` [POST] `just for testing purposes` 
    * A Update route : `/subs/:id` [PATCH]
    * A Delete route : `/subs/:id` [DELETE]

#### **Promotions**
- Index 
- Show
- Create
- Update
- Delete
- Available Routes
    * A SHOW route: `/promotions` [GET] 
    * A Create route: `/promotions` [POST]
    * A Index route : `/promotions/:id` [GET]
    * A Update route : `/promotions/:id` [PATCH]
    * A Delete route : `/promotions/:id` [DELETE]

#### **Meals**

- Index 
- Show `by restaurant`
- Create 
- Delete
- Update Meals

- Aailable Routes
    * A SHOW route: `/Restaurants/:RestaurantID/meals/:id` [GET] 
    * A Index route: `/Restaurants/:RestaurantID/meals/` [GET] 
    * A Update route: `/Restaurants/:RestaurantID/meals/:id` [PATCH]
    * A Delete route: `/Restaurants/:RestaurantID/meals/:id` [DELETE]
    * A Create route: `/Restaurants/:RestaurantID/meals/` [POST] 



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
    * A SHOW route: `/Restaurants/:RestaurantID/meals/:id` [GET] 
    * A Index route: `/Restaurants/:RestaurantID/meals/` [GET] 

#### **Subscriptions** [token required]

- Index
- Show `all` or `by status` `for that specific user`
- Update
- Create 
- Delete
- Add meals 

- Available Routes
    * A Index route: `/users/:userID/subs` [GET] + `query arguments for status`
    * A Show route: `/users/:userID/subs/:id` [GET]
    * A Update route : `/users/:userID/subs/:id` [PATCH]
    * A Create route : `/users/:userID/subs` [POST]
    * An addMeal route: `/users/:userID/subs/:subID/meals` [POST]
    * A Delete route : `/users/:userID/subs/:id` [DELETE]

#### **Promotions**
- Index 
- Show
- Available Routes
    * A SHOW route: `/Promotions` [GET] 
    * A Index route : `/Promotions/:id` [GET]

#### **Profiles**

- Show
- Update [token required]
- Delete  [token required]

- Available Routes
    * A SHOW route: `/users/:userID` [GET]
    * A Update route : `/users/:userID` [PATCH]
    * A Delete route : `/users/:userID` [DELETE]

#### **account**
- Create [token required]
- Login 

- Available Routes
    * A Login route: `/Login` [POST] 
    * A Register route: `/register` [POST] 


#### **Reviews** [token required]
- Create 
- Edit
- Delete
- Index
- Available route
    * A Index route : `/restaurants/:restaurantID/reviews` [GET]
    * A Index by userID route : `/restaurants/:restaurantID/users/:userID/reviews` [GET]
    * A Create route : `/restaurants/:restaurantID/users/:userID/reviews` [POST]  `restaurant` 
    * A Edit route :    `/restaurants/:restaurantID/users/:userID/reviews/:id` [PUT]
    * A Delete route : `/restaurants/:restaurantID/users/:userID/reviews/:id` [DELETE]
-----------



## Data Shapes

#### User
- id
- firstName
- lastName
- username
- gender
- type (`user` , `Admin`)
- DOB `Date Of Birth`
- subscriptions `another collection`
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
- restaurantID
- sectionName
- sectionID
   - collection Schema : meals(title : string , restaurantID:ObjectID ,description:string , price:number , rating:number , image:string , hasChoices:boolean , SectionName:string ,   SectionID:ObjectID )
<!--isItemDiscound (`Optional`) - originalPrice (`Optional`) --->


#### Promotions

- ID
- Sale_Percentage
- DateStarted
- DateExpired
- meal_id
- restaurantID
- old_price
-  collection Schema : Promotions(sale_percentage:String , DateStarted:Date , DateExpired:Date , meal_id:ObjectID, restaurantID:ObjectID , old_Price:number)    

#### Reviews
- id
- username
- userID
- restaurantID
- comment
- impression (`Optional`)
- timeCreated -- (`12 january 2023`)

    - Collection Schema : Reviews (username:string , userID: ObjectID , comment:string , timeCreated:Date )

#### Sections
- id
- title
   - Collection Schema : Sections (title:string)

#### Subscriptions
- id
- userID
- username
- meals `another collection`
- monthly_price
- Dates
- timeCreated
- ExpirationDate
- subState (pending or active or expired)

   - Collection Schema : Subscriptions ( UserID : ObjectID , Username: String , meals : array , Dates : array , timesCreated:Date , ExpirationDate:Date , 
   status : string(enum)
   )



